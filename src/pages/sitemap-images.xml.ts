import type { APIRoute } from 'astro';
import { ALL_SITEMAP_ENTRIES, generateUrlset } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  // Filter only entries that have image metadata
  const entriesWithImages = ALL_SITEMAP_ENTRIES.filter((e) => e.images && e.images.length > 0);
  const xml = generateUrlset(entriesWithImages);

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex, follow',
    },
  });
};
