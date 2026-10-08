import type { APIRoute } from 'astro';
import { nriPortalsData } from '../data/pSeoNriPortals';
import { generateUrlset, BASE_URL, CURRENT_DATE } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const entries = nriPortalsData.map((item) => ({
    url: `${BASE_URL}/nri/${item.slug}/`,
    title: `Mahindra Rivenza Global NRI Investment — ${item.countryOrRegion}`,
    category: 'residences' as const,
    priority: 0.85,
    changefreq: 'weekly' as const,
    lastmod: CURRENT_DATE,
  }));

  const xml = generateUrlset(entries);

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
