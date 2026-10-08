import type { APIRoute } from 'astro';
import { metroData } from '../data/pSeoMetroStations';
import { generateUrlset, BASE_URL, CURRENT_DATE } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const entries = metroData.map((item) => ({
    url: `${BASE_URL}/near/metro/${item.slug}/`,
    title: `${item.name} Proximity & Transit Living Guide`,
    category: 'connectivity' as const,
    priority: 0.80,
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
