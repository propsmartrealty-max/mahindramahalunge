// Cloudflare Serverless Edge HTMLRewriter Middleware
// Ultra-Advanced Googlebot Crawl Enhancement, Edge SEO & Enterprise Security

interface Env {
  GOOGLE_SITE_VERIFICATION?: string;
  GTAG_ID?: string;
}

// Googlebot and Search Engine Crawler Detection Patterns
const GOOGLEBOT_REGEX = /Googlebot|Google-InspectionTool|Storebot-Google|Google-Extended|Mediapartners-Google|AdsBot-Google|FeedFetcher-Google/i;
const SEARCH_ENGINE_REGEX = /Googlebot|Google-InspectionTool|Storebot-Google|Google-Extended|Mediapartners-Google|AdsBot-Google|FeedFetcher-Google|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp/i;

/**
 * Format URL segment into clean human-readable title
 */
function formatSegmentTitle(segment: string): string {
  return segment
    .split('-')
    .map((word) => {
      if (word.toLowerCase() === 'bhk') return 'BHK';
      if (word.toLowerCase() === 'pmrda') return 'PMRDA';
      if (word.toLowerCase() === 'it') return 'IT';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Dynamically construct Schema.org BreadcrumbList for any route at the Edge
 */
function generateBreadcrumbSchema(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  const siteUrl = 'https://mahindralifespaceshomes.in';

  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${siteUrl}/`,
    },
  ];

  let currentPath = '';
  segments.forEach((seg, index) => {
    currentPath += `/${seg}`;
    const name = formatSegmentTitle(seg);
    itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name,
      item: `${siteUrl}${currentPath}/`,
    });
  });

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}${url.pathname}#breadcrumb`,
    itemListElement,
  });
}

/**
 * Generate WebSite Schema with Sitelinks SearchBox for Homepage
 */
function generateWebSiteSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mahindralifespaceshomes.in/#website',
    url: 'https://mahindralifespaceshomes.in/',
    name: 'Mahindra Lifespaces Mahalunge',
    alternateName: [
      'Mahindra Lifespaces Mahalunge Pune',
      'Mahindra Mahalunge',
      'Mahindra Lifespaces Hinjewadi Baner',
    ],
    description:
      'Official pre-launch showcase of Mahindra Lifespaces 13.46-acre master development at Nande-Mahalunge near Hinjewadi and Baner, Pune.',
    publisher: {
      '@type': 'Organization',
      name: 'Mahindra Lifespaces Developers Ltd.',
      url: 'https://www.mahindralifespaces.com/',
    },
    inLanguage: 'en-IN',
  });
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';
  const isGoogle = GOOGLEBOT_REGEX.test(userAgent);
  const isSearchCrawler = SEARCH_ENGINE_REGEX.test(userAgent);

  // 1. Edge 301 Canonical Normalization: Apex Domain Consolidation
  if (url.hostname === 'www.mahindralifespaceshomes.in') {
    return Response.redirect(`https://mahindralifespaceshomes.in${url.pathname}${url.search}`, 301);
  }

  // 2. Fetch original response from Cloudflare Edge Cache / Asset Store
  const response = await next();

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  // Determine current ISO timestamp for modified_time
  const nowIso = new Date().toISOString();
  const canonicalPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  const canonicalUrl = `https://mahindralifespaceshomes.in${canonicalPath}`;

  // 3. Ultra-Advanced Cloudflare HTMLRewriter Edge Streaming Pipeline
  const rewriter = new HTMLRewriter()
    // Inject Head Directives, Breadcrumbs, Geo-Targeting, and Preconnects
    .on('head', {
      element(el) {
        // Google Search Console Site Verification
        const verificationToken = env.GOOGLE_SITE_VERIFICATION || 'google-site-verification-mahindra-mahalunge-token';
        el.append(`<meta name="google-site-verification" content="${verificationToken}" />\n`, { html: true });

        // International Hreflang Tags for Multi-Region & Indian English Context
        el.append(`<link rel="alternate" hreflang="en-IN" href="${canonicalUrl}" />\n`, { html: true });
        el.append(`<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />\n`, { html: true });

        // Pune / Maharashtra Geo-Targeting for Google Local & Maps SERP Visibility
        el.append(`<meta name="geo.region" content="IN-MH" />\n`, { html: true });
        el.append(`<meta name="geo.placename" content="Mahalunge, Mulshi Taluka, Pune" />\n`, { html: true });
        el.append(`<meta name="geo.position" content="18.5714;73.7432" />\n`, { html: true });
        el.append(`<meta name="ICBM" content="18.5714, 73.7432" />\n`, { html: true });

        // Freshness Signals for Google's QDF (Query Deserves Freshness)
        el.append(`<meta property="article:modified_time" content="${nowIso}" />\n`, { html: true });
        el.append(`<meta name="last-modified" content="${nowIso}" />\n`, { html: true });

        // Preconnect & Resource Hints for Ultra-Fast Core Web Vitals (LCP/FCP)
        el.append(`<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n`, { html: true });
        el.append(`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n`, { html: true });
        el.append(`<link rel="dns-prefetch" href="https://images.unsplash.com" />\n`, { html: true });

        // Dynamic BreadcrumbList Schema.org Injection at Edge
        const breadcrumbJson = generateBreadcrumbSchema(url);
        el.append(`<script type="application/ld+json">${breadcrumbJson}</script>\n`, { html: true });

        // WebSite Schema Injection on Root Domain
        if (url.pathname === '/' || url.pathname === '') {
          const webSiteJson = generateWebSiteSchema();
          el.append(`<script type="application/ld+json">${webSiteJson}</script>\n`, { html: true });
        }

        // Speculation Rules API for Chromium / Google User Pre-Rendering
        if (!isSearchCrawler) {
          const speculationRules = JSON.stringify({
            prerender: [
              {
                source: 'list',
                urls: [
                  '/residences/2-bhk/',
                  '/residences/3-bhk/',
                  '/residences/4-bhk/',
                  '/brochure/',
                  '/articles/',
                  '/brand/',
                  '/faq/',
                ],
                eagerness: 'moderate',
              },
            ],
          });
          el.append(`<script type="speculationrules">${speculationRules}</script>\n`, { html: true });
        }

        // Google Analytics 4 (only loaded for human users to save Googlebot crawl budget)
        if (env.GTAG_ID && !isSearchCrawler) {
          el.append(
            `\n<script async src="https://www.googletagmanager.com/gtag/js?id=${env.GTAG_ID}"></script>\n` +
            `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${env.GTAG_ID}');</script>\n`,
            { html: true }
          );
        }
      },
    })
    // In-Flight Internal Link Normalization: Eliminate 301 Redirect Crawl Budget Waste
    .on('a[href]', {
      element(el) {
        const href = el.getAttribute('href') || '';

        // Normalize internal page links to enforce trailing slash for directory routes
        if (
          href.startsWith('/') &&
          !href.startsWith('//') &&
          !href.includes('#') &&
          !href.includes('?') &&
          !href.includes('.')
        ) {
          if (!href.endsWith('/')) {
            el.setAttribute('href', `${href}/`);
          }
        }

        // Outbound Link Authority Preservation
        if (href.startsWith('http://') || href.startsWith('https://')) {
          if (!href.includes('mahindralifespaceshomes.in') && !href.includes('localhost')) {
            const isOfficialMahindra =
              href.includes('mahindralifespaces.com') || href.includes('mahindra.com');
            if (isOfficialMahindra) {
              el.setAttribute('rel', 'noopener');
            } else {
              el.setAttribute('rel', 'nofollow noopener noreferrer');
            }
          }
        }
      },
    })
    // Core Web Vitals Image Prioritization & Decoding
    .on('img', {
      element(el) {
        const alt = el.getAttribute('alt') || '';
        if (
          alt.includes('Hero') ||
          alt.includes('Aerial') ||
          alt.includes('Mahindra Lifespaces Mahalunge')
        ) {
          el.setAttribute('fetchpriority', 'high');
          el.setAttribute('decoding', 'async');
        } else {
          if (!el.hasAttribute('loading')) {
            el.setAttribute('loading', 'lazy');
          }
          el.setAttribute('decoding', 'async');
        }
      },
    });

  // 4. Transform Streamed Response and Attach Enterprise Edge Directives
  const transformed = rewriter.transform(response);
  const newHeaders = new Headers(transformed.headers);

  // Googlebot & Search Engine Indexing Directives
  newHeaders.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  );
  newHeaders.set('Link', `<${canonicalUrl}>; rel="canonical"`);

  // Cloudflare Enterprise Cache-Tagging & Edge CDN Stale-While-Revalidate
  newHeaders.set('Cache-Tag', 'mahindra-mahalunge, html, google-bot-optimized, edge-rewriter');
  newHeaders.set(
    'Surrogate-Control',
    'max-age=604800, stale-while-revalidate=86400, stale-if-error=604800'
  );
  newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');

  // Vary Header to Instruct CDNs & Google to Cache Crawler vs User Responses Accurately
  newHeaders.set('Vary', 'Accept-Encoding, User-Agent');

  // Last-Modified Timestamp for Google Freshness
  newHeaders.set('Last-Modified', new Date().toUTCString());

  // Crawler Diagnostic Telemetry
  if (isGoogle) {
    newHeaders.set('X-Google-Crawl-Optimized', 'true');
    newHeaders.set('X-Crawler-Detected', 'googlebot');
  } else if (isSearchCrawler) {
    newHeaders.set('X-Google-Crawl-Optimized', 'true');
    newHeaders.set('X-Crawler-Detected', 'search-bot');
  }

  // Enterprise Security & Hardening Directives
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), payment=()');
  newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
  newHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin');
  newHeaders.set(
    'Content-Security-Policy',
    "default-src 'self' https:; " +
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "img-src 'self' data: https: blob:; " +
      "connect-src 'self' https:; " +
      "frame-ancestors 'self'; " +
      "base-uri 'self'; " +
      "form-action 'self' https:; " +
      "upgrade-insecure-requests;"
  );

  return new Response(transformed.body, {
    status: transformed.status,
    statusText: transformed.statusText,
    headers: newHeaders,
  });
};
