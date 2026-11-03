#!/usr/bin/env node
/**
 * ==============================================================================
 * Automated GCP Project Enrollment & Multi-Project Quota Scaler
 * Ecosystem: Mahindra Lifespaces Pune (https://mahindralifespaceshomes.in)
 * ==============================================================================
 * 
 * Purpose:
 * Scale Google Indexing API daily quota from 200/day to 400, 600, 800, or 1000+/day
 * by enrolling new Google Cloud Projects into the active enterprise federation.
 * 
 * Usage:
 *   node scripts/link-gcp-project.mjs <path-to-downloaded-service-account.json>
 *   node scripts/link-gcp-project.mjs --list
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);

console.log('='.repeat(80));
console.log('[GCP Federation Manager] Google Cloud Multi-Project Quota Scaler');
console.log('='.repeat(80));

// Find all current service accounts
function discoverAllServiceAccounts() {
  const files = fs.readdirSync(projectRoot).filter(
    (f) => (f.startsWith('service-account') || f === 'google-indexing-key.json') && f.endsWith('.json')
  );
  const accounts = [];
  for (const f of files) {
    try {
      const fullPath = path.join(projectRoot, f);
      const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      if (data.client_email && data.private_key) {
        accounts.push({ file: f, path: fullPath, data });
      }
    } catch (_) {}
  }
  return accounts;
}

if (args.includes('--list') || args.length === 0) {
  const accounts = discoverAllServiceAccounts();
  const projectGroups = new Map();

  for (const sa of accounts) {
    const pId = sa.data.project_id || 'unknown-project';
    if (!projectGroups.has(pId)) projectGroups.set(pId, []);
    projectGroups.get(pId).push(sa);
  }

  console.log(`\nCurrent Configured GCP Projects: ${projectGroups.size}`);
  console.log(`Total Active Service Account Credentials: ${accounts.length}`);
  console.log(`Theoretical Daily Indexing Capacity: ${projectGroups.size * 200} URLs/day\n`);

  let pIdx = 1;
  for (const [pId, list] of projectGroups.entries()) {
    console.log(`[Project #${pIdx++}] GCP Project ID: "${pId}"`);
    console.log(`  └─ Quota Pool: 200 requests / 24-hr window`);
    console.log(`  └─ Enrolled Service Accounts:`);
    for (const item of list) {
      console.log(`     • ${item.data.client_email} (file: ${item.file})`);
    }
    console.log('');
  }

  if (projectGroups.size === 1) {
    console.log('💡 PRO-TIP FOR UNLIMITED / 100% DAILY COVERAGE:');
    console.log('   Your catalog contains 378 canonical URLs.');
    console.log('   Because each GCP Project provides 200 requests/day, linking a 2nd GCP project');
    console.log('   will boost total daily indexing quota to 400 requests/day, ensuring 100%');
    console.log('   of your website is indexed every single day without hitting quota boundaries.');
    console.log('\n   To link a new GCP project:');
    console.log('   1. Create a project in Google Cloud Console (https://console.cloud.google.com/)');
    console.log('   2. Enable "Web Search Indexing API"');
    console.log('   3. Create a Service Account -> Keys -> Create New Key (JSON)');
    console.log('   4. Add the service account email as "Owner" in Google Search Console');
    console.log('   5. Run: node scripts/link-gcp-project.mjs /path/to/downloaded-key.json\n');
  }
  process.exit(0);
}

const inputKeyPath = path.resolve(process.cwd(), args[0]);

if (!fs.existsSync(inputKeyPath)) {
  console.error(`✕ Error: Key file not found at: ${inputKeyPath}`);
  process.exit(1);
}

let newKeyData;
try {
  newKeyData = JSON.parse(fs.readFileSync(inputKeyPath, 'utf8'));
} catch (err) {
  console.error(`✕ Error: File is not valid JSON: ${err.message}`);
  process.exit(1);
}

if (!newKeyData.client_email || !newKeyData.private_key || !newKeyData.project_id) {
  console.error('✕ Error: Invalid Service Account JSON. Missing client_email, private_key, or project_id.');
  process.exit(1);
}

console.log(`\nValidating Service Account Key:`);
console.log(`  • Client Email: ${newKeyData.client_email}`);
console.log(`  • GCP Project ID: ${newKeyData.project_id}`);

// Test Authentication with Google OAuth2
async function testGoogleAuth(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claimSet = Buffer.from(
    JSON.stringify({
      iss: sa.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  ).toString('base64url');

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(`${header}.${claimSet}`);
  const signature = sign.sign(sa.private_key, 'base64url');
  const jwt = `${header}.${claimSet}.${signature}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  return tokenData.access_token || null;
}

console.log('Testing Google OAuth2 RSA-SHA256 Handshake...');
try {
  const token = await testGoogleAuth(newKeyData);
  if (!token) {
    console.error('✕ Failed to obtain Google OAuth token. Check private key integrity or network connection.');
    process.exit(1);
  }
  console.log('✓ OAuth2 Handshake: SUCCESS (Access token acquired)');

  // Test Indexing API Scope
  const testUrl = encodeURIComponent('https://mahindralifespaceshomes.in/');
  const metaRes = await fetch(`https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${testUrl}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(`✓ Google Indexing API Reachability: HTTP ${metaRes.status}`);
} catch (authErr) {
  console.warn(`! Notice testing auth (network may be restricted in sandbox): ${authErr.message}`);
}

// Enroll file into projectRoot
const existingAccounts = discoverAllServiceAccounts();
const isDuplicate = existingAccounts.some((a) => a.data.client_email === newKeyData.client_email);

if (isDuplicate) {
  console.log('\n⚠️ This service account is already enrolled in the workspace.');
} else {
  // Determine next filename
  let targetFilename = `service-account-${newKeyData.project_id}.json`;
  let targetPath = path.join(projectRoot, targetFilename);
  if (fs.existsSync(targetPath)) {
    targetFilename = `service-account-${newKeyData.project_id}-${Date.now().toString().slice(-4)}.json`;
    targetPath = path.join(projectRoot, targetFilename);
  }

  fs.copyFileSync(inputKeyPath, targetPath);
  console.log(`\n✓ Successfully enrolled into cluster: ${targetFilename}`);

  const refreshedAccounts = discoverAllServiceAccounts();
  const projectGroups = new Set(refreshedAccounts.map((a) => a.data.project_id));
  console.log(`\n🎉 New Capacity: ${projectGroups.size} GCP Projects (${projectGroups.size * 200} requests/day capacity)!`);
  console.log(`\nNext Steps:`);
  console.log(`1. Ensure "${newKeyData.client_email}" is added as Owner in Google Search Console for "https://mahindralifespaceshomes.in/"`);
  console.log(`2. Run: npm run index:status to verify the expanded federation pool.`);
}
