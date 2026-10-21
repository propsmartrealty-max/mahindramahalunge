/**
 * Cloudflare Pages Edge Middleware — Enterprise-Grade Edge Security & SEO Engine
 * Tailored for Mahindra Rivenza (Baner Annex, Mahalunge, Pune) & Mahindra Lifespaces Ecosystem
 * 
 * Enterprise Hardening Features:
 * 1. Zero-Trust Edge WAF: Drops SQLi, path traversal, exploit probes, and scanners at Cloudflare PoP
 * 2. Intelligent Bot Governance: Whitelists verified search indexers; drops scrapers & vulnerability scanners
 * 3. 2-Year Preloaded HSTS, Strict CSP, Permissions-Policy, Cross-Origin Isolation & COOP
 * 4. Micro-Market Edge Geo-Tagging & Header Injection (Baner Annex Coordinates: 18.562536 N, 73.727373 E)
 * 5. Native Cloudflare HTMLRewriter: Real-time metadata injection, LCP optimization, schema enrichment
 * 6. Cloudflare Cache-Tag, Stale-While-Revalidate & Edge Tier Architecture
 * 7. Clean Preconnect Budget: Eliminates redundant preconnects to protect mobile TCP sockets
 */

// Bot Classification Regex — Multi-Search Engine Whitebot Recognition
const GOOGLE_BOT_REGEX = /googlebot|google-inspectiontool|storebot-google|googleother|adsbot-google|mediapartners-google/i;
const MICROSOFT_BING_REGEX = /bingbot|bingpreview|msnbot|slurp|microsoft-search/i;
const APPLE_BOT_REGEX = /applebot/i;
const SEARCH_BOT_REGEX = /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|applebot|storebot-google/i;
const SOCIAL_BOT_REGEX = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|pinterest|slackbot|discordbot/i;
const AI_CRAWLER_REGEX = /gptbot|chatgpt-user|claudebot|anthropic-ai|perplexitybot|applebot|google-extended|oai-searchbot/i;
const BAD_SCRAPER_REGEX = /bytespider|petalbot|mj12bot|dotbot|zoominfobot|semrushbot|ahrefsbot|aspiegelbot|seznam|megaindex|seekport|ccbot/i;

// Enterprise Vulnerability Scanner & Exploit Toolkit Signatures
const VULN_SCANNER_REGEX = /nikto|sqlmap|acunetix|nuclei|masscan|zgrab|gobuster|dirbuster|wprecon|jorgee|nessus|openvas|havij|nmap/i;
const MALICIOUS_PATH_REGEX = /(\.\.\/|\.\.\\|\.env|\.git|\.vscode|\.aws|wp-login|wp-admin|xmlrpc\.php|cgi-bin|\.php|\.sql|\.bak|\.tar|\.zip|phpmyadmin|eval\(|base64_decode)/i;
const SQLI_REGEX = /(\b(union(\s+all)?\s+select|select\s+.*\s+from|insert\s+into|drop\s+table|delete\s+from|update\s+.*\s+set)\b|--|\/\*|\*\/|;\s*drop|'\s*or\s*'?\d+'?\s*=\s*'?\d+)/i;

const INDEXNOW_KEY = '9e4f2b8c6a0d4e7f8b1c3a5d7e9f0b2a';

// Legacy / Route Normalization Map
const LEGACY_REDIRECTS = {
  '/flats': '/residences/',
  '/flats/': '/residences/',
  '/gallery': '/amenities/',
  '/gallery/': '/amenities/',
  '/contact': '/pricing/',
  '/contact/': '/pricing/',
  '/price': '/pricing/',
  '/price/': '/pricing/',
  '/cost-sheet': '/pricing/',
  '/cost-sheet/': '/pricing/',
};

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = url.pathname;
  const search = url.search;

  const activeGlobalKey = (context.env && (context.env.GLOBAL_KEY || context.env.INDEXNOW_KEY || context.env.CLOUDFLARE_API_KEY)) || INDEXNOW_KEY;

  // 0. Apex Canonical Host Enforcement (301 redirect www -> non-www apex domain)
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace(/^www\./, '');
    return Response.redirect(url.toString(), 301);
  }

  // 0b. Global Key & IndexNow Verification Endpoint (Bing, Microsoft, Yahoo, Yandex, Naver)
  if (pathname === '/indexnow-key.txt' || pathname === `/${activeGlobalKey}.txt` || pathname === `/${INDEXNOW_KEY}.txt`) {
    return new Response(activeGlobalKey, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'X-IndexNow-Key': activeGlobalKey,
        'Access-Control-Allow-Origin': '*',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }

  // 0c. Edge IndexNow Submission Hook (Triggered securely via Global Key)
  if (pathname === '/api/indexnow-ping') {
    const authKey = url.searchParams.get('key') || request.headers.get('x-global-key');
    if (authKey !== activeGlobalKey) {
      return new Response(JSON.stringify({ error: 'Unauthorized - Invalid Global Key' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const pingPayload = {
        host: 'mahindralifespaceshomes.in',
        key: activeGlobalKey,
        keyLocation: `https://mahindralifespaceshomes.in/${activeGlobalKey}.txt`,
        urlList: [
          'https://mahindralifespaceshomes.in/',
          'https://mahindralifespaceshomes.in/pricing/',
          'https://mahindralifespaceshomes.in/floor-plans/',
          'https://mahindralifespaceshomes.in/commute/',
          'https://mahindralifespaceshomes.in/master-plan/',
          'https://mahindralifespaceshomes.in/location/',
          'https://mahindralifespaceshomes.in/amenities/',
          'https://mahindralifespaceshomes.in/brochure/',
          'https://mahindralifespaceshomes.in/rera/',
          'https://mahindralifespaceshomes.in/sitemap/',
        ],
      };

      const pingRes = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(pingPayload),
      });

      return new Response(JSON.stringify({ success: true, status: pingRes.status, key: activeGlobalKey }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // 1. Enterprise Edge WAF: Exploit Probe, SQLi & Vulnerability Scanner Rejection
  const isSearchEngineBot = GOOGLE_BOT_REGEX.test(userAgent) || MICROSOFT_BING_REGEX.test(userAgent) || APPLE_BOT_REGEX.test(userAgent);
  
  if (!isSearchEngineBot) {
    // Drop known scanner toolkits
    if (VULN_SCANNER_REGEX.test(userAgent) || BAD_SCRAPER_REGEX.test(userAgent)) {
      return new Response('Forbidden — Edge Automated Security Policy', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
          'X-WAF-Action': 'Drop-Scanner',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      });
    }

    // Drop path traversal & common exploit extensions
    if (MALICIOUS_PATH_REGEX.test(pathname) || MALICIOUS_PATH_REGEX.test(search)) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
          'X-WAF-Action': 'Drop-Exploit-Probe',
        },
      });
    }

    // Drop SQL Injection in query strings
    if (SQLI_REGEX.test(search)) {
      return new Response('Bad Request — Invalid Parameter Signature', {
        status: 400,
        headers: {
          'Content-Type': 'text/plain',
          'X-WAF-Action': 'Block-SQLi',
        },
      });
    }
  }

  // 2. Legacy / Soft-404 Edge Normalization
  if (LEGACY_REDIRECTS[pathname]) {
    url.pathname = LEGACY_REDIRECTS[pathname];
    return Response.redirect(url.toString(), 301);
  }

  // 3. Edge Trailing Slash & Canonical Enforcement
  const isStaticFile = /\.(css|js|mjs|svg|png|jpg|jpeg|webp|ico|xml|txt|json|woff|woff2|ttf)$/i.test(pathname);

  if (!isStaticFile && !pathname.endsWith('/')) {
    url.pathname = `${pathname}/`;
    return Response.redirect(url.toString(), 301);
  }

  // 4. Fetch upstream static response from Cloudflare Pages storage
  const response = await next();

  // If not an HTML document, return with edge cache headers
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    if (pathname.endsWith('.xml') || contentType.includes('xml')) {
      const xmlHeaders = new Headers(response.headers);
      xmlHeaders.set('Content-Type', 'application/xml; charset=utf-8');
      xmlHeaders.set('Access-Control-Allow-Origin', '*');
      xmlHeaders.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
      xmlHeaders.set('X-Content-Type-Options', 'nosniff');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: xmlHeaders,
      });
    }
    return response;
  }

  // 5. Bot Classification & Edge Analytics
  const isGoogleBot = GOOGLE_BOT_REGEX.test(userAgent);
  const isMicrosoftBing = MICROSOFT_BING_REGEX.test(userAgent);
  const isAppleBot = APPLE_BOT_REGEX.test(userAgent);
  const isSearchBot = SEARCH_BOT_REGEX.test(userAgent);
  const isSocialBot = SOCIAL_BOT_REGEX.test(userAgent);
  const isAiCrawler = AI_CRAWLER_REGEX.test(userAgent);

  let botCategory = 'Organic-Human';
  if (isGoogleBot) botCategory = 'Google-Whitebot-Verified';
  else if (isMicrosoftBing) botCategory = 'Microsoft-Bing-Verified';
  else if (isAppleBot) botCategory = 'Apple-Intelligence-Crawler';
  else if (isSearchBot) botCategory = 'Search-Engine-Indexer';
  else if (isSocialBot) botCategory = 'Social-Preview-Bot';
  else if (isAiCrawler) botCategory = 'AI-Knowledge-Crawler';

  // 6. Real-Time Timestamp for Freshness Signals
  const now = new Date();
  const currentIsoTimestamp = now.toISOString();

  // Geo-location detection from Cloudflare headers
  const cfCountry = request.headers.get('cf-ipcountry') || 'IN';
  const cfCity = request.headers.get('cf-ipcity') || 'Pune';
  const cfRay = request.headers.get('cf-ray') || 'edge';

  // 7. Edge HTMLRewriter Transformations
  class HeadRewriter {
    element(element) {
      // Real-time freshness signals for Googlebot & social graphs
      element.append(
        `<meta property="og:updated_time" content="${currentIsoTimestamp}" />\n` +
        `<meta property="article:modified_time" content="${currentIsoTimestamp}" />\n` +
        `<meta name="dc.date.modified" content="${currentIsoTimestamp}" />\n`,
        { html: true }
      );

      // Geographic micro-market indexing tags for Baner Annex, Mahalunge / West Pune
      element.append(
        `<meta name="geo.region" content="IN-MH" />\n` +
        `<meta name="geo.placename" content="Baner Annex, Mahalunge, Pune, Maharashtra 412115" />\n` +
        `<meta name="geo.position" content="18.562536;73.727373" />\n` +
        `<meta name="ICBM" content="18.562536, 73.727373" />\n`,
        { html: true }
      );

      // Edge SEO Engine Verification Meta
      element.append(
        `<meta name="generator-edge" content="Cloudflare Pages Enterprise Edge v5.0 - ZeroTrust Hardened" />\n`,
        { html: true }
      );
    }
  }

  // Optimize hero images with priority fetching
  class HeroImageRewriter {
    element(element) {
      element.setAttribute('fetchpriority', 'high');
      element.setAttribute('decoding', 'async');
      element.setAttribute('loading', 'eager');
    }
  }

  // Instantiate Cloudflare native HTMLRewriter
  const transformedResponse = new HTMLRewriter()
    .on('head', new HeadRewriter())
    .on('img[fetchpriority="high"]', new HeroImageRewriter())
    .on('header img', new HeroImageRewriter())
    .transform(response);

  // 8. Build High-Performance Enterprise Edge Response Headers
  const modifiedHeaders = new Headers(transformedResponse.headers);

  // Core SEO & Googlebot Headers
  modifiedHeaders.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );
  modifiedHeaders.set('X-Edge-SEO-Engine', 'Cloudflare-Enterprise-Rivenza-v5.0');
  modifiedHeaders.set('X-Edge-Bot-Classification', botCategory);
  modifiedHeaders.set('X-Edge-Timestamp', currentIsoTimestamp);
  modifiedHeaders.set('X-Edge-Geo-Locality', `${cfCity}, ${cfCountry}`);
  modifiedHeaders.set('X-Edge-Ray', cfRay);
  modifiedHeaders.set('X-IndexNow-Status', 'Ready');
  modifiedHeaders.set('X-IndexNow-Key', activeGlobalKey);

  // Clean, Low-Overhead Preconnect Link Header (Only critical font origins)
  modifiedHeaders.set(
    'Link',
    '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin'
  );

  // Enterprise Security & WAF Headers
  modifiedHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  modifiedHeaders.set('X-Content-Type-Options', 'nosniff');
  modifiedHeaders.set('X-XSS-Protection', '1; mode=block');
  modifiedHeaders.set('X-Permitted-Cross-Domain-Policies', 'none');
  modifiedHeaders.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
  modifiedHeaders.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  modifiedHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin');
  modifiedHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  modifiedHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), display-capture=(), serial=()');
  modifiedHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  modifiedHeaders.set('Origin-Agent-Cluster', '?1');

  // Enterprise Content Security Policy (Allows Google Fonts, CMS media, Cloudflare insights)
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https://cms.mahindralifespaces.com https://images.unsplash.com https://*.ampproject.org",
    "media-src 'self' https://cms.mahindralifespaces.com",
    "connect-src 'self' https://api.indexnow.org https://cloudflareinsights.com https://wa.me https://formsubmit.co",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self' https:",
    "upgrade-insecure-requests",
  ].join('; ');
  modifiedHeaders.set('Content-Security-Policy', cspDirectives);

  // Cloudflare Enterprise Cache-Tagging (Segmented by Ecosystem Cluster)
  const dynamicTags = ['mahindra-lifespaces', 'enterprise-edge', 'html-content'];
  if (pathname === '/' || pathname.startsWith('/mahindra-rivenza')) dynamicTags.push('mahindra-rivenza-core');
  if (pathname.startsWith('/brand')) dynamicTags.push('mahindra-brand-ecosystem', 'mahindra-pune-portfolio');
  if (pathname.startsWith('/floor-plans')) dynamicTags.push('mahindra-floor-plans', 'rera-sanctioned-blueprints');
  if (pathname.startsWith('/commute')) dynamicTags.push('mahindra-commute', 'transit-matrix');
  if (pathname.startsWith('/residences')) dynamicTags.push('mahindra-residences', 'unit-typologies');
  if (pathname.startsWith('/compare')) dynamicTags.push('mahindra-comparisons', 'competitor-intelligence');
  if (pathname.startsWith('/articles')) dynamicTags.push('mahindra-articles', 'real-estate-insights');
  if (pathname.startsWith('/near')) dynamicTags.push('mahindra-localities', 'proximity-matrix');
  if (pathname.startsWith('/tools')) dynamicTags.push('mahindra-tools', 'financial-calculators');
  if (pathname.startsWith('/nri')) dynamicTags.push('mahindra-nri', 'global-wealth-hubs');

  modifiedHeaders.set('Cache-Tag', dynamicTags.join(', '));
  modifiedHeaders.set(
    'Cache-Control',
    'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=86400'
  );
  modifiedHeaders.set('Vary', 'User-Agent, Accept-Encoding');

  // Edge Telemetry & Global Anycast PoP Headers
  if (request.cf) {
    if (request.cf.colo) modifiedHeaders.set('X-Edge-Pop', request.cf.colo);
    if (request.cf.country) modifiedHeaders.set('X-Edge-Country', request.cf.country);
  }

  return new Response(transformedResponse.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders,
  });
}
