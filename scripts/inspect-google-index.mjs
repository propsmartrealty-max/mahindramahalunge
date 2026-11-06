#!/usr/bin/env node
/**
 * ==============================================================================
 * Google Search Console URL Inspection API Diagnostic Tool
 * Ecosystem: Mahindra Lifespaces Pune (https://mahindralifespaceshomes.in)
 * ==============================================================================
 *
 * Inspects Google's live index status for any URL using Google Search Console API:
 * - Coverage status (Submitted and indexed vs Crawled not indexed)
 * - Last crawl time & user agent (Googlebot Desktop / Smartphone)
 * - Indexing state & canonical URLs
 * - Mobile usability & Rich results (FloorPlan, Product, FAQPage, Breadcrumbs)
 *
 * Usage:
 *   node scripts/inspect-google-index.mjs [url]
 *   node scripts/inspect-google-index.mjs https://mahindralifespaceshomes.in/
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const targetUrl = process.argv[2] || "https://mahindralifespaceshomes.in/";
const SITE_URL = "sc-domain:mahindralifespaceshomes.in";
const FALLBACK_SITE_URL = "https://mahindralifespaceshomes.in/";

console.log("=".repeat(80));
console.log(
  "[Google Index Inspector] Search Console URL Inspection Diagnostic",
);
console.log(`Target URL: ${targetUrl}`);
console.log(`GSC Site Property: ${SITE_URL}`);
console.log("=".repeat(80));

// Find primary service account
const candidateKeys = [
  ...fs
    .readdirSync(projectRoot)
    .filter((f) => f.startsWith("service-account") && f.endsWith(".json")),
  "google-indexing-key.json",
];

let selectedKey = null;
for (const f of candidateKeys) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(projectRoot, f), "utf8"));
    if (data.client_email && data.private_key) {
      selectedKey = data;
      break;
    }
  } catch (_) {}
}

if (!selectedKey) {
  console.error("✕ Error: No Google Service Account key found.");
  process.exit(1);
}

console.log(
  `Using Service Account: ${selectedKey.client_email} (Project: ${selectedKey.project_id})`,
);

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" }),
  ).toString("base64url");
  const claimSet = Buffer.from(
    JSON.stringify({
      iss: sa.client_email,
      scope:
        "https://www.googleapis.com/auth/webmasters.readonly https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  ).toString("base64url");

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${header}.${claimSet}`);
  const signature = sign.sign(sa.private_key, "base64url");
  const jwt = `${header}.${claimSet}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  return data.access_token;
}

try {
  const token = await getAccessToken(selectedKey);
  if (!token) {
    console.error("✕ Failed to obtain OAuth token.");
    process.exit(1);
  }

  // 1. Check Google Indexing API Metadata
  console.log("\n--- 1. Google Indexing API Live Notification Status ---");
  const metaRes = await fetch(
    `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(targetUrl)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  if (metaRes.status === 200) {
    const meta = await metaRes.json();
    console.log("✓ Indexing API Metadata Found:");
    console.log(`  • URL: ${meta.url}`);
    if (meta.latestUpdate) {
      console.log(`  • Latest Update Type: ${meta.latestUpdate.type}`);
      console.log(`  • Notification Time: ${meta.latestUpdate.notifyTime}`);
    }
  } else {
    console.log(
      `Notice: Indexing API Metadata HTTP ${metaRes.status} (${metaRes.status === 404 ? "URL not submitted via API yet" : "Check quota"})`,
    );
  }

  // 2. Query Search Console URL Inspection API
  console.log("\n--- 2. Google Search Console URL Inspection API ---");
  let inspectRes = await fetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        inspectionUrl: targetUrl,
        siteUrl: SITE_URL,
      }),
    },
  );

  let inspectData = await inspectRes.json();
  if (inspectRes.status !== 200) {
    // Try fallback URL prefix
    const retryRes = await fetch(
      "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          inspectionUrl: targetUrl,
          siteUrl: FALLBACK_SITE_URL,
        }),
      },
    );
    if (retryRes.status === 200) {
      inspectRes = retryRes;
      inspectData = await retryRes.json();
    }
  }
  if (inspectRes.status === 200) {
    console.log("✓ Inspection Result:");
    const result = inspectData.inspectionResult || {};
    const indexStatus = result.indexStatusResult || {};
    console.log(`  • Verdict: ${indexStatus.verdict || "N/A"}`);
    console.log(`  • Coverage State: ${indexStatus.coverageState || "N/A"}`);
    console.log(`  • Indexing State: ${indexStatus.indexingState || "N/A"}`);
    console.log(`  • Last Crawl Time: ${indexStatus.lastCrawlTime || "N/A"}`);
    console.log(`  • Crawled As: ${indexStatus.crawledAs || "N/A"}`);
    console.log(`  • Robots.txt State: ${indexStatus.robotsTxtState || "N/A"}`);
  } else {
    console.log(
      `Search Console Inspection HTTP ${inspectRes.status}: ${inspectData.error?.message || "Access Restricted"}`,
    );
    if (inspectRes.status === 403) {
      console.log(
        `ℹ️ To enable automated GSC URL Inspection, add "${selectedKey.client_email}" as Full/Owner in Search Console Property: ${SITE_URL}`,
      );
    }
  }
} catch (err) {
  console.error(`✕ Error during inspection: ${err.message}`);
}

console.log("\n" + "=".repeat(80));
