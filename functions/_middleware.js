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

// Bot Classification Regex
const SEARCH_BOT_REGEX = /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot/i;
const SOCIAL_BOT_REGEX = /facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|pinterest|slackbot|discordbot/i;
const AI_CRAWLER_REGEX = /gptbot|chatgpt-user|claudebot|anthropic-ai|perplexitybot|applebot|google-extended/i;
const BAD_SCRAPER_REGEX = /bytespider|petalbot|mj12bot|dotbot|zoominfobot/i;

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

  // 1. Malicious / Aggressive Scraper Edge Firewall
  if (BAD_SCRAPER_REGEX.test(userAgent)) {
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
    return response;
  }

  // 5. Bot Classification & Edge Analytics
  const isSearchBot = SEARCH_BOT_REGEX.test(userAgent);
  const isSocialBot = SOCIAL_BOT_REGEX.test(userAgent);
  const isAiCrawler = AI_CRAWLER_REGEX.test(userAgent);

  let botCategory = 'Organic-Human';
  if (isSearchBot) botCategory = 'Search-Engine-Indexer';
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
      // Preconnect hints for critical origins
      element.append(
        `<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n` +
        `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n` +
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
        `<meta name="generator-edge" content="Cloudflare Pages Edge HTMLRewriter v4.0 - Mahindra Rivenza Engine" />\n`,
        { html: true }
      );

      // SearchAction & Edge WebSite + ApartmentComplex Knowledge Graph Injection
      const edgeSchema = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://mahindralifespaceshomes.in/#website",
            "url": "https://mahindralifespaceshomes.in/",
            "name": "Mahindra Rivenza | Baner Annex, Mahalunge, Pune",
            "dateModified": currentIsoTimestamp,
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://mahindralifespaceshomes.in/faq/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": ["ApartmentComplex", "RealEstateAgent"],
            "@id": "https://mahindralifespaceshomes.in/#rivenza",
            "name": "Mahindra Rivenza",
            "legalName": "Mahindra Lifespace Developers Limited",
            "url": "https://mahindralifespaceshomes.in/",
            "priceRange": "₹1.85 Crore - ₹3.85 Crore+",
            "telephone": "+91-7744009295",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "HP6G+WWF Baner Annex, off Baner-Hinjawadi Road, Nande",
              "addressLocality": "Mahalunge, Pune",
              "postalCode": "412115",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.562536,
              "longitude": 73.727373
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "20:00"
              }
            ]
          }
        ]
      };

      element.append(
        `<script type="application/ld+json">${JSON.stringify(edgeSchema)}</script>\n`,
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

  // Early Preconnect Link Headers
  modifiedHeaders.set(
    'Link',
    '<https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://cms.mahindralifespaces.com>; rel=preconnect, <https://images.unsplash.com>; rel=preconnect'
  );

  // Edge Security Hardening
  modifiedHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  modifiedHeaders.set('X-Content-Type-Options', 'nosniff');
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
