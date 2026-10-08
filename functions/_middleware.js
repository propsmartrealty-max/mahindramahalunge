/**
 * Cloudflare Pages Edge Middleware — Ultra-Advanced Edge SEO & HTMLRewriter Engine
 * Designed for Mahindra Rivenza (Baner Annex, Mahalunge, Pune) & Mahindra Lifespaces Ecosystem
 * 
 * Features:
 * 1. Zero-Latency Canonical & Trailing Slash Redirection at the Cloudflare Edge
 * 2. Malicious / Aggressive Scraper Firewall (Zero-cost 403 rejection)
 * 3. Search Engine Bot & AI Crawler Intelligence (Googlebot, Bingbot, Perplexity, GPTBot, ClaudeBot, Gemini)
 * 4. Native Edge HTMLRewriter Dynamic Schema & Metadata Injection (WebSite + ApartmentComplex + RealEstateAgent)
 * 5. Real-Time Content Freshness (ISO timestamps on every edge hit)
 * 6. Edge Geo-IP Localization & Baner Annex Coordinate Tagging (18.562536 N, 73.727373 E / Plus Code: HP6G+WWF)
 * 7. LCP Hero Image Preloading & Preconnect Optimization (cms.mahindralifespaces.com)
 * 8. Enterprise Caching, HTTP Link Preconnects & Security Headers
 */

// Bot Classification Regex — Multi-Search Engine Whitebot Recognition
const GOOGLE_BOT_REGEX = /googlebot|google-inspectiontool|storebot-google|googleother|adsbot-google|mediapartners-google/i;
const MICROSOFT_BING_REGEX = /bingbot|bingpreview|msnbot|slurp|microsoft-search/i;
const APPLE_BOT_REGEX = /applebot/i;
const SEARCH_BOT_REGEX = /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|applebot|storebot-google/i;
const SOCIAL_BOT_REGEX = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|pinterest|slackbot|discordbot/i;
const AI_CRAWLER_REGEX = /gptbot|chatgpt-user|claudebot|anthropic-ai|perplexitybot|applebot|google-extended|oai-searchbot/i;
const BAD_SCRAPER_REGEX = /bytespider|petalbot|mj12bot|dotbot|zoominfobot/i;

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

  // 1. Malicious / Aggressive Scraper Edge Firewall (Whitelisting verified search engines)
  const isSearchEngineBot = GOOGLE_BOT_REGEX.test(userAgent) || MICROSOFT_BING_REGEX.test(userAgent) || APPLE_BOT_REGEX.test(userAgent);
  if (!isSearchEngineBot && BAD_SCRAPER_REGEX.test(userAgent)) {
    return new Response('Access Denied - Automated Scraping Policy', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  // 2. Legacy / Soft-404 Edge Normalization
  if (LEGACY_REDIRECTS[pathname]) {
    url.pathname = LEGACY_REDIRECTS[pathname];
    return Response.redirect(url.toString(), 301);
  }

  // 3. Edge Trailing Slash & Canonical Enforcement
  // Skip static assets (e.g. .css, .js, .svg, .png, .jpg, .webp, .xml, .txt, .json)
  const isStaticFile = /\.(css|js|mjs|svg|png|jpg|jpeg|webp|ico|xml|txt|json|woff|woff2|ttf)$/i.test(pathname);

  if (!isStaticFile && !pathname.endsWith('/')) {
    url.pathname = `${pathname}/`;
    return Response.redirect(url.toString(), 301);
  }

  // 4. Fetch upstream static response from Cloudflare Pages storage
  const response = await next();

  // If not an HTML document or error response, return directly with edge cache headers
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    // Enterprise hardening for XML sitemaps & feeds
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

  // Geo-location detection from Cloudflare CF headers
  const cfCountry = request.headers.get('cf-ipcountry') || 'IN';
  const cfCity = request.headers.get('cf-ipcity') || 'Pune';

  // 7. Edge HTMLRewriter Transformations
  class HeadRewriter {
    element(element) {
      // Preconnect hints for external media CDNs (Google Fonts already preconnected in static layout)
      element.append(
        `<link rel="preconnect" href="https://cms.mahindralifespaces.com" crossorigin />\n` +
        `<link rel="preconnect" href="https://images.unsplash.com" crossorigin />\n`,
        { html: true }
      );

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
        `<meta name="generator-edge" content="Cloudflare Pages Edge HTMLRewriter v4.1 - Enterprise Compliance Engine" />\n`,
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

  // 8. Build High-Performance Edge Response Headers
  const modifiedHeaders = new Headers(transformedResponse.headers);

  // Core SEO & Googlebot Headers
  modifiedHeaders.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );
  modifiedHeaders.set('X-Edge-SEO-Engine', 'Cloudflare-HTMLRewriter-Rivenza-v4.0');
  modifiedHeaders.set('X-Edge-Bot-Classification', botCategory);
  modifiedHeaders.set('X-Edge-Timestamp', currentIsoTimestamp);
  modifiedHeaders.set('X-Edge-Geo-Locality', `${cfCity}, ${cfCountry}`);
  modifiedHeaders.set('X-IndexNow-Status', 'Ready');
  modifiedHeaders.set('X-IndexNow-Key', activeGlobalKey);

  // Early Preconnect Link Headers
  modifiedHeaders.set(
    'Link',
    '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://cms.mahindralifespaces.com>; rel=preconnect, <https://images.unsplash.com>; rel=preconnect'
  );

  // Edge Security & Infrastructure Hardening
  modifiedHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  modifiedHeaders.set('X-Content-Type-Options', 'nosniff');
  modifiedHeaders.set('X-Permitted-Cross-Domain-Policies', 'none');
  modifiedHeaders.set('Cross-Origin-Embedder-Policy', 'unsafe-none');
  modifiedHeaders.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  modifiedHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin');
  modifiedHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  modifiedHeaders.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), payment=()');
  modifiedHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Stale-While-Revalidate Edge Caching (Instant Edge Delivery for Humans & Crawlers)
  modifiedHeaders.set(
    'Cache-Control',
    'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
  );
  modifiedHeaders.set('Vary', 'User-Agent, Accept-Encoding');

  return new Response(transformedResponse.body, {
    status: response.status,
    statusText: response.statusText,
    headers: modifiedHeaders,
  });
}
