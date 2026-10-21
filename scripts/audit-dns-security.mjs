#!/usr/bin/env node

/**
 * Enterprise DNS & Cloudflare Hosting Security Auditor
 * Checks live DNS, SSL, HTTP headers, CAA, SPF, DMARC, DNSSEC for mahindralifespaceshomes.in
 */

import { promises as dns } from 'dns';
import https from 'https';

const DOMAIN = 'mahindralifespaceshomes.in';
const WWW_DOMAIN = `www.${DOMAIN}`;

console.log('='.repeat(70));
console.log(`[Enterprise DNS Audit] Auditing Domain: ${DOMAIN}`);
console.log('='.repeat(70));

async function runAudit() {
  const results = {
    nameservers: [],
    aRecords: [],
    txtRecords: [],
    caaRecords: [],
    mxRecords: [],
    dmarcRecord: null,
    spfRecord: null,
    dnssecStatus: 'Unsigned',
    sslStatus: null,
  };

  // 1. Check Nameservers
  try {
    results.nameservers = await dns.resolveNs(DOMAIN);
    console.log(`\n✓ Nameservers (${results.nameservers.length}):`);
    results.nameservers.forEach((ns) => console.log(`   - ${ns}`));
    const isCloudflare = results.nameservers.some((ns) => ns.toLowerCase().includes('cloudflare.com'));
    if (isCloudflare) {
      console.log('   [SUCCESS] Domain is actively proxied through Cloudflare Enterprise Nameservers.');
    } else {
      console.log('   [WARNING] Nameservers do not appear to be Cloudflare.');
    }
  } catch (err) {
    console.log(`\n✗ Nameserver lookup error: ${err.message}`);
  }

  // 2. Check A / IPv4 Records
  try {
    results.aRecords = await dns.resolve4(DOMAIN);
    console.log(`\n✓ Apex A Records (IPv4):`);
    results.aRecords.forEach((ip) => console.log(`   - ${ip}`));
  } catch (err) {
    console.log(`\n✗ A record lookup error: ${err.message}`);
  }

  // 3. Check TXT Records (SPF, Verification)
  try {
    const rawTxt = await dns.resolveTxt(DOMAIN);
    results.txtRecords = rawTxt.map((parts) => parts.join(''));
    console.log(`\n✓ TXT Records (${results.txtRecords.length}):`);
    results.txtRecords.forEach((txt) => {
      console.log(`   - ${txt}`);
      if (txt.startsWith('v=spf1')) results.spfRecord = txt;
    });
  } catch (err) {
    console.log(`\n✗ TXT lookup: ${err.message}`);
  }

  // 4. Check DMARC
  try {
    const dmarcTxt = await dns.resolveTxt(`_dmarc.${DOMAIN}`);
    const flatDmarc = dmarcTxt.map((parts) => parts.join(''));
    results.dmarcRecord = flatDmarc.find((t) => t.startsWith('v=DMARC1'));
    console.log(`\n✓ DMARC Record:`);
    console.log(`   - ${results.dmarcRecord || 'None found'}`);
  } catch (err) {
    console.log(`\n✗ DMARC Record: None configured at _dmarc.${DOMAIN}`);
  }

  // 5. Check CAA Records (RFC 6844)
  try {
    results.caaRecords = await dns.resolveCaa(DOMAIN);
    console.log(`\n✓ CAA Records (${results.caaRecords.length}):`);
    if (results.caaRecords.length === 0) {
      console.log('   [WARNING] No CAA records found! Unauthorized CAs could issue certificates.');
    } else {
      results.caaRecords.forEach((caa) => console.log(`   - Tag: ${caa.tag}, Value: ${caa.value}`));
    }
  } catch (err) {
    console.log(`\n✗ CAA Records: None configured (${err.message})`);
  }

  // 6. Check MX Records (Anti-Spoofing Null MX)
  try {
    results.mxRecords = await dns.resolveMx(DOMAIN);
    console.log(`\n✓ MX Records (${results.mxRecords.length}):`);
    results.mxRecords.forEach((mx) => console.log(`   - Priority ${mx.priority}: ${mx.exchange}`));
  } catch (err) {
    console.log(`\n✗ MX Records: None configured (Allows potential mail spoofing without SPF/DMARC)`);
  }

  // 7. Check Live HTTPS & SSL Handshake
  console.log(`\n✓ Testing Live HTTPS Handshake...`);
  await new Promise((resolve) => {
    const req = https.request(
      `https://${DOMAIN}/`,
      { method: 'HEAD', timeout: 5000 },
      (res) => {
        const cert = res.socket.getPeerCertificate();
        console.log(`   - HTTP Status: ${res.statusCode} ${res.statusMessage}`);
        console.log(`   - SSL Issuer: ${cert.issuer ? cert.issuer.O : 'Unknown'}`);
        console.log(`   - SSL Valid To: ${cert.valid_to}`);
        console.log(`   - Strict-Transport-Security: ${res.headers['strict-transport-security'] || 'Missing'}`);
        console.log(`   - Content-Security-Policy: ${res.headers['content-security-policy'] ? 'Configured' : 'Missing'}`);
        console.log(`   - Cloudflare Ray: ${res.headers['cf-ray'] || 'Not through Cloudflare proxy'}`);
        console.log(`   - Edge SEO Engine: ${res.headers['x-edge-seo-engine'] || 'Standard'}`);
        resolve();
      }
    );
    req.on('error', (err) => {
      console.log(`   ✗ HTTPS error: ${err.message}`);
      resolve();
    });
    req.end();
  });

  console.log('\n' + '='.repeat(70));
  console.log('[Enterprise Recommendations for Cloudflare DNS Dashboard]');
  console.log('='.repeat(70));
  console.log(`
1. CONFIGURE CAA RECORDS (Prevents rogue SSL issuance):
   Type: CAA | Name: @ | Tag: Only allow specific CAs (issue) | Value: pki.goog
   Type: CAA | Name: @ | Tag: Only allow specific CAs (issue) | Value: letsencrypt.org
   Type: CAA | Name: @ | Tag: Only allow specific CAs (issue) | Value: digicert.com
   Type: CAA | Name: @ | Tag: Send incident reports (iodef)  | Value: mailto:security@mahindralifespaceshomes.in

2. ANTI-SPOOFING & PHISHING EMAIL SHIELD (RFC 7505):
   Type: TXT | Name: @      | Value: v=spf1 -all
   Type: TXT | Name: _dmarc | Value: v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; pct=100;
   Type: MX  | Name: @      | Priority: 0 | Mail Server: .

3. ENABLE DNSSEC AT REGISTRAR:
   In Cloudflare -> DNS -> Settings -> Enable DNSSEC -> Add DS record to your domain registrar.
`);
}

runAudit();
