import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const now = new Date().toISOString();
  const sitemaps = [
    'https://mahindralifespaceshomes.in/sitemap.xml',
    'https://mahindralifespaceshomes.in/google-shopping.xml',
    'https://mahindralifespaceshomes.in/rss.xml'
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
    .map(
      (loc) => `
  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`
    )
    .join('')}
</sitemapindex>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
