// Cloudflare Pages Edge HTMLRewriter Middleware for Google.com Ecosystem Compliance

interface Env {
  GOOGLE_SITE_VERIFICATION?: string;
  GTAG_ID?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next, env } = context;

  // 1. Fetch static HTML response from Cloudflare Edge Cache
  const response = await next();

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  // 2. Stream & Rewrite HTML at the Edge using Cloudflare HTMLRewriter
  const rewriter = new HTMLRewriter()
    // Inject Google Ecosystem Compliance & Geo-targeting tags into <head>
    .on('head', {
      element(el) {
        // Google Search Console Site Verification
        const verificationToken = env.GOOGLE_SITE_VERIFICATION || 'google-site-verification-mahindra-mahalunge-token';
        el.append(`<meta name="google-site-verification" content="${verificationToken}" />\n`, { html: true });

        // Geo-Targeting for Google Local & Google Maps Search (Mahalunge, Pune)
        el.append(`<meta name="geo.region" content="IN-MH" />\n`, { html: true });
        el.append(`<meta name="geo.placename" content="Mahalunge, Pune" />\n`, { html: true });
        el.append(`<meta name="geo.position" content="18.5714;73.7432" />\n`, { html: true });
        el.append(`<meta name="ICBM" content="18.5714, 73.7432" />\n`, { html: true });

        // Preconnect to Google Services for faster Core Web Vitals (FCP / LCP)
        el.append(`<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n`, { html: true });
        el.append(`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n`, { html: true });
        el.append(`<link rel="dns-prefetch" href="https://images.unsplash.com" />\n`, { html: true });
      }
    })
    // Core Web Vitals Optimization: Image Priority at the Edge
    .on('img', {
      element(el) {
        const alt = el.getAttribute('alt') || '';
        if (alt.includes('Hero') || alt.includes('Aerial') || alt.includes('Mahindra Lifespaces Mahalunge')) {
          el.setAttribute('fetchpriority', 'high');
          el.setAttribute('decoding', 'async');
        } else {
          if (!el.hasAttribute('loading')) {
            el.setAttribute('loading', 'lazy');
          }
          el.setAttribute('decoding', 'async');
        }
      }
    })
    // Security & Google PageRank Preservation for Outbound Links
    .on('a[href^="http"]', {
      element(el) {
        const href = el.getAttribute('href') || '';
        if (!href.includes('mahindra-mahalunge.com') && !href.includes('localhost')) {
          const currentRel = el.getAttribute('rel') || '';
          if (!currentRel.includes('noopener')) {
            el.setAttribute('rel', `${currentRel} noopener noreferrer`.trim());
          }
        }
      }
    });

  // 3. Transform streamed response and append Edge Googlebot Headers
  const transformed = rewriter.transform(response);
  const newHeaders = new Headers(transformed.headers);

  // Googlebot Edge Directive
  newHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  newHeaders.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');

  return new Response(transformed.body, {
    status: transformed.status,
    statusText: transformed.statusText,
    headers: newHeaders,
  });
};
