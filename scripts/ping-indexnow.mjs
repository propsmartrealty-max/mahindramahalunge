#!/usr/bin/env node
/**
 * Global Enterprise IndexNow Push Engine — Mahindra Lifespaces Pune Ecosystem
 * Submits all cataloged URLs to IndexNow endpoints (Bing, Microsoft, Yandex, Naver, Seznam)
 * Uses Global Key for instantaneous cross-search-engine indexing & edge cache invalidation.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'mahindralifespaceshomes.in';
const GLOBAL_KEY = process.env.GLOBAL_KEY || process.env.INDEXNOW_KEY || '9e4f2b8c6a0d4e7f8b1c3a5d7e9f0b2a';
const KEY_LOCATION = `https://${HOST}/${GLOBAL_KEY}.txt`;

// Read all XML sitemaps from dist or fallback to catalog
const distDir = path.resolve(__dirname, '../dist');
let urlList = [
  `https://${HOST}/`,
  `https://${HOST}/baner-annex/`,
  `https://${HOST}/pricing/`,
  `https://${HOST}/floor-plans/`,
  `https://${HOST}/master-plan/`,
  `https://${HOST}/location/`,
  `https://${HOST}/amenities/`,
  `https://${HOST}/brochure/`,
  `https://${HOST}/rera/`,
  `https://${HOST}/faq/`,
  `https://${HOST}/brand/`,
  `https://${HOST}/west-pune/`,
  `https://${HOST}/articles/`,
  `https://${HOST}/tools/`,
  `https://${HOST}/pune-real-estate/`,
  `https://${HOST}/flats-in-pune/`,
  `https://${HOST}/new-projects-in-pune/`,
  `https://${HOST}/luxury-apartments-in-pune/`,
  `https://${HOST}/web-stories/`,
  `https://${HOST}/sitemap/`,
];

// Extract all URLs from generated dist/sitemap*.xml if available
try {
  const sitemapFiles = fs.readdirSync(distDir).filter(f => f.startsWith('sitemap-') && f.endsWith('.xml'));
  for (const file of sitemapFiles) {
    const xml = fs.readFileSync(path.join(distDir, file), 'utf8');
    const locMatches = [...xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
    for (const loc of locMatches) {
      if (!urlList.includes(loc)) urlList.push(loc);
    }
  }
} catch (e) {
  // Use fallback list
}

console.log(`[Enterprise IndexNow] Prepared ${urlList.length} URLs using Global Key: ${GLOBAL_KEY}`);

const payload = {
  host: HOST,
  key: GLOBAL_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
};

const endpoints = [
  { name: 'Global IndexNow Hub', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Microsoft Bing Gateway', url: 'https://www.bing.com/indexnow' },
  { name: 'Yandex Search Gateway', url: 'https://yandex.com/indexnow' },
];

for (const ep of endpoints) {
  try {
    const response = await fetch(ep.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`[Enterprise IndexNow] ✓ ${ep.name}: SUCCESS (${response.status} ${response.statusText}) - ${urlList.length} URLs active`);
    } else {
      const text = await response.text();
      console.log(`[Enterprise IndexNow] ! ${ep.name} status: ${response.status} ${response.statusText} (${text.slice(0, 100)})`);
    }
  } catch (err) {
    console.warn(`[Enterprise IndexNow] ! ${ep.name} network notice: ${err.message}`);
  }
}
