import type { APIRoute } from 'astro';
import { BRAND_PROJECTS_PAGES, generateUrlset } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const xml = generateUrlset(BRAND_PROJECTS_PAGES);

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
