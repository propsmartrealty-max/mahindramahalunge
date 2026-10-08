import type { APIRoute } from 'astro';
import { CONNECTIVITY_PAGES, generateUrlset } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const xml = generateUrlset(CONNECTIVITY_PAGES);

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
