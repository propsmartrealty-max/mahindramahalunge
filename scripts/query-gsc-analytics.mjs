#!/usr/bin/env node
/**
 * ==============================================================================
 * Google Search Console Search Analytics API Diagnostic Suite
 * Fetches Live Clicks, Impressions, CTR, Average Position, and Top Queries
 * Target: sc-domain:mahindralifespaceshomes.in
 * ==============================================================================
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const SITE_URL = "sc-domain:mahindralifespaceshomes.in";
const FALLBACK_SITE_URL = "https://mahindralifespaceshomes.in/";

console.log("=".repeat(80));
console.log("[Google GSC Analytics] Live Performance & Ranking Diagnostic");
console.log(`Site Property: ${SITE_URL}`);
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
  `Authenticated Identity: ${selectedKey.client_email} (Project: ${selectedKey.project_id})`,
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

  // Calculate 28-day date range (Search Console has a 2-3 day lag)
  const today = new Date();
  const endDate = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  console.log(
    `\nQuerying GSC Performance Window: ${startDate} to ${endDate}...`,
  );

  async function queryAnalytics(site) {
    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ["query"],
          rowLimit: 25,
          aggregationType: "auto",
        }),
      },
    );
    return res;
  }

  let res = await queryAnalytics(SITE_URL);
  let data;
  if (res.status === 200) {
    data = await res.json();
  } else {
    // Try fallback
    res = await queryAnalytics(FALLBACK_SITE_URL);
    if (res.status === 200) {
      data = await res.json();
    } else {
      const err = await res.json();
      console.log(
        `Search Console API Status: HTTP ${res.status}: ${err.error?.message || "Access notice"}`,
      );
    }
  }

  if (data && data.rows && data.rows.length > 0) {
    console.log(
      `\n✓ Discovered ${data.rows.length} Top Performing Ranking Queries in Google SERP:`,
    );
    console.log("-".repeat(80));
    console.log(
      ` ${"Query".padEnd(35)} | ${"Clicks".padEnd(8)} | ${"Impr".padEnd(8)} | ${"CTR".padEnd(8)} | ${"Position"}`,
    );
    console.log("-".repeat(80));
    for (const row of data.rows) {
      const q = (row.keys[0] || "").substring(0, 33).padEnd(35);
      const clicks = String(row.clicks || 0).padEnd(8);
      const impr = String(row.impressions || 0).padEnd(8);
      const ctr = `${((row.ctr || 0) * 100).toFixed(1)}%`.padEnd(8);
      const pos = (row.position || 0).toFixed(1);
      console.log(` ${q} | ${clicks} | ${impr} | ${ctr} | Pos ${pos}`);
    }
    console.log("-".repeat(80));
  } else if (data) {
    console.log("\n✓ Successfully connected to GSC Search Analytics API!");
    console.log(
      "Notice: 0 query rows returned yet. Google Search Console typically displays organic performance data after 3–5 days of steady impressions for newly enrolled properties.",
    );
  }

  // Also query page-level performance
  async function queryPages(site) {
    const pRes = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          startDate,
          endDate,
          dimensions: ["page"],
          rowLimit: 10,
        }),
      },
    );
    return pRes;
  }

  const pRes = await queryPages(SITE_URL);
  if (pRes.status === 200) {
    const pData = await pRes.json();
    if (pData.rows && pData.rows.length > 0) {
      console.log(`\n✓ Top Pages in Google Search:`);
      for (const row of pData.rows) {
        console.log(
          `  • ${row.keys[0]}: ${row.impressions} impr, ${row.clicks} clicks, Avg Pos ${(row.position || 0).toFixed(1)}`,
        );
      }
    }
  }
} catch (err) {
  console.error(`✕ Error during GSC analytics query: ${err.message}`);
}

console.log("\n" + "=".repeat(80));
