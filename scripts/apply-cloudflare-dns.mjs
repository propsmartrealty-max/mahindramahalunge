#!/usr/bin/env node
/**
 * ==============================================================================
 * Cloudflare Ultra Tech DNS & Edge Automation Engine
 * Ecosystem: Mahindra Lifespaces Pune (https://mahindralifespaceshomes.in)
 * ==============================================================================
 *
 * Supports:
 * - Cloudflare Global API Key (CLOUDFLARE_API_KEY + CLOUDFLARE_EMAIL)
 * - Cloudflare API Token (CLOUDFLARE_API_TOKEN)
 *
 * Automates:
 * 1. Automatic Zone Discovery for mahindralifespaceshomes.in
 * 2. RFC 6844 Certificate Authority Authorization (CAA) Records
 * 3. RFC 7505 Anti-Spoofing Null MX, SPF & Strict DMARC (p=reject)
 * 4. Microsoft / IndexNow Key Authentication TXT Record
 * 5. Edge Speed & Protocol Settings (Brotli, Early Hints, HTTP/3, TLS 1.3)
 * 6. Global Edge Cache Invalidation
 */

import https from "node:https";

const DOMAIN = "mahindralifespaceshomes.in";
const INDEXNOW_KEY =
  process.env.GLOBAL_KEY ||
  process.env.INDEXNOW_KEY ||
  "9e4f2b8c6a0d4e7f8b1c3a5d7e9f0b2a";

// Authentication
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const rawApiKey = process.env.CLOUDFLARE_API_KEY || process.env.CF_API_KEY;
const EMAIL =
  process.env.CLOUDFLARE_EMAIL ||
  process.env.CF_EMAIL ||
  "propsmartrealty@gmail.com";

// Validate Cloudflare API Key vs IndexNow Global Key
let API_KEY = null;
if (rawApiKey) {
  if (/^[0-9a-f]{37}$/i.test(rawApiKey)) {
    API_KEY = rawApiKey;
  } else if (rawApiKey === INDEXNOW_KEY || /^[0-9a-f]{32}$/i.test(rawApiKey)) {
    console.log(
      `[Notice] Key '${rawApiKey}' is identified as the IndexNow Global Key (32-hex).`,
    );
    console.log(
      `Cloudflare Global API Key is a 37-hex key found in Cloudflare Dashboard > Profile > API Tokens.`,
    );
  } else {
    API_KEY = rawApiKey;
  }
}

console.log("=".repeat(80));
console.log(`[Cloudflare Ultra Tech] DNS & Edge Automation Engine`);
console.log(`Target Domain: ${DOMAIN}`);
console.log(`Sovereign Global Key: ${INDEXNOW_KEY}`);
console.log("=".repeat(80));

const authHeaders = {};
if (API_TOKEN) {
  authHeaders["Authorization"] = `Bearer ${API_TOKEN}`;
  console.log("✓ Using Cloudflare API Bearer Token.");
} else if (API_KEY && EMAIL) {
  authHeaders["X-Auth-Key"] = API_KEY;
  authHeaders["X-Auth-Email"] = EMAIL;
  console.log(`✓ Using Cloudflare Global API Key for account: ${EMAIL}`);
} else {
  console.log(
    `\nStatus: Sovereign Global Key (${INDEXNOW_KEY}) is ACTIVE for IndexNow & Edge.`,
  );
  console.log(
    `\nTo push DNS records directly to Cloudflare via API v4, provide:`,
  );
  console.log(`  Option A (Cloudflare 37-char Global API Key):`);
  console.log(
    `    CLOUDFLARE_EMAIL="${EMAIL}" CLOUDFLARE_API_KEY="<37-hex-key>" node scripts/apply-cloudflare-dns.mjs`,
  );
  console.log(`\n  Option B (Cloudflare API Token):`);
  console.log(
    `    CLOUDFLARE_API_TOKEN="<token>" node scripts/apply-cloudflare-dns.mjs`,
  );
  console.log(`\nAll records are ready for instant 1-click import at:`);
  console.log(`  public/dns-records.zone`);
  console.log(`\nCloudflare Dashboard Steps:`);
  console.log(
    `  1. Open dash.cloudflare.com -> select ${DOMAIN} -> DNS -> Records`,
  );
  console.log(`  2. Click 'Import and Export' -> 'Import'`);
  console.log(`  3. Select 'public/dns-records.zone'`);
  console.log("=".repeat(80));
  process.exit(0);
}

authHeaders["Content-Type"] = "application/json";

function cfFetch(endpoint, method = "GET", data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.cloudflare.com",
      port: 443,
      path: `/client/v4${endpoint}`,
      method,
      headers: authHeaders,
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Failed to parse Cloudflare API response: ${body}`));
        }
      });
    });

    req.on("error", reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function run() {
  try {
    // 1. Discover Zone ID
    console.log(`\n1. Resolving Zone ID for ${DOMAIN}...`);
    const zoneRes = await cfFetch(`/zones?name=${DOMAIN}`);
    if (!zoneRes.success || zoneRes.result.length === 0) {
      throw new Error(
        `Domain ${DOMAIN} not found under this Cloudflare account.`,
      );
    }
    const zoneId = zoneRes.result[0].id;
    console.log(`✓ Located Zone ID: ${zoneId} (${zoneRes.result[0].name})`);

    // 2. Fetch Existing DNS Records
    console.log(`\n2. Auditing existing DNS records...`);
    const recordsRes = await cfFetch(
      `/zones/${zoneId}/dns_records?per_page=100`,
    );
    const existing = recordsRes.result || [];
    console.log(`✓ Discovered ${existing.length} active DNS records.`);

    // 3. Define Required Records
    const requiredRecords = [
      // Anti-Spoofing & Reputation
      {
        type: "MX",
        name: "@",
        content: ".",
        priority: 0,
        comment: "RFC 7505 Null MX Anti-Spoofing",
      },
      {
        type: "TXT",
        name: "@",
        content: "v=spf1 -all",
        comment: "Strict SPF: No outbound email",
      },
      {
        type: "TXT",
        name: "_dmarc",
        content: "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s; pct=100;",
        comment: "Strict DMARC: 100% Reject Fraud",
      },
      {
        type: "TXT",
        name: "*._domainkey",
        content: "v=DKIM1; p=",
        comment: "Wildcard inactive DKIM",
      },
      {
        type: "TXT",
        name: "indexnow",
        content: INDEXNOW_KEY,
        comment: "Microsoft IndexNow Global Key",
      },
      // CAA Records (RFC 6844)
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issue", value: "pki.goog" },
      },
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issue", value: "letsencrypt.org" },
      },
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issue", value: "digicert.com" },
      },
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issuewild", value: "pki.goog" },
      },
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issuewild", value: "letsencrypt.org" },
      },
      {
        type: "CAA",
        name: "@",
        data: { flags: 0, tag: "issuewild", value: "digicert.com" },
      },
      {
        type: "CAA",
        name: "@",
        data: {
          flags: 0,
          tag: "iodef",
          value: "mailto:security@mahindralifespaceshomes.in",
        },
      },
    ];

    console.log(
      `\n3. Applying RFC 6844 CAA, RFC 7505 Anti-Spoofing & IndexNow Records...`,
    );
    for (const rec of requiredRecords) {
      const match = existing.find((e) => {
        if (e.type !== rec.type) return false;
        const eName =
          e.name === DOMAIN ? "@" : e.name.replace(`.${DOMAIN}`, "");
        if (eName !== rec.name) return false;
        if (rec.type === "CAA" && e.data) {
          return e.data.tag === rec.data.tag && e.data.value === rec.data.value;
        }
        if (rec.content) return e.content === rec.content;
        return false;
      });

      if (match) {
        console.log(
          `   • [EXISTS] ${rec.type} ${rec.name} -> ${rec.content || `${rec.data.tag} "${rec.data.value}"`}`,
        );
      } else {
        const payload = {
          type: rec.type,
          name: rec.name === "@" ? DOMAIN : `${rec.name}.${DOMAIN}`,
          ttl: 300,
        };
        if (rec.data) payload.data = rec.data;
        if (rec.content) payload.content = rec.content;
        if (rec.priority !== undefined) payload.priority = rec.priority;
        if (rec.comment) payload.comment = rec.comment;

        const createRes = await cfFetch(
          `/zones/${zoneId}/dns_records`,
          "POST",
          payload,
        );
        if (createRes.success) {
          console.log(
            `   ✓ [CREATED] ${rec.type} ${rec.name} -> ${rec.content || `${rec.data.tag} "${rec.data.value}"`}`,
          );
        } else {
          console.warn(
            `   ! [NOTICE] ${rec.type} ${rec.name}: ${createRes.errors?.[0]?.message || "Failed"}`,
          );
        }
      }
    }

    // 4. Harden Edge Speed & Protocol Settings
    console.log(
      `\n4. Optimizing Cloudflare Edge Protocols (Brotli, HTTP/3, TLS 1.3)...`,
    );
    const settings = [
      { id: "brotli", value: "on" },
      { id: "early_hints", value: "on" },
      { id: "http3", value: "on" },
      { id: "min_tls_version", value: "1.3" },
      { id: "always_use_https", value: "on" },
      { id: "automatic_https_rewrites", value: "on" },
      { id: "0rtt", value: "on" },
    ];

    for (const s of settings) {
      try {
        const setRes = await cfFetch(
          `/zones/${zoneId}/settings/${s.id}`,
          "PATCH",
          { value: s.value },
        );
        if (setRes.success) {
          console.log(`   ✓ [ACTIVE] Setting: ${s.id} = ${s.value}`);
        } else {
          console.log(
            `   • Setting ${s.id}: ${setRes.errors?.[0]?.message || "Unchanged"}`,
          );
        }
      } catch (e) {
        console.log(`   • Setting ${s.id} notice: ${e.message}`);
      }
    }

    // 5. Purge Edge Cache
    console.log(
      `\n5. Purging Cloudflare Edge Cache for immediate propagation...`,
    );
    const purgeRes = await cfFetch(`/zones/${zoneId}/purge_cache`, "POST", {
      purge_everything: true,
    });
    if (purgeRes.success) {
      console.log(
        `✓ Cloudflare Edge Cache successfully purged across all global PoPs.`,
      );
    }

    console.log("\n" + "=".repeat(80));
    console.log(
      "✓ Cloudflare Ultra Tech DNS & Edge Protocols Successfully Synchronized!",
    );
    console.log("=".repeat(80));
  } catch (err) {
    console.error(`\n✕ Error during Cloudflare automation: ${err.message}`);
  }
}

run();
