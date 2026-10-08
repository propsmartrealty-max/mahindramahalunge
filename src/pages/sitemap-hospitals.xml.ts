import type { APIRoute } from 'astro';
import { hospitalData } from '../data/pSeoHospitals';
import { generateUrlset, BASE_URL, CURRENT_DATE } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const entries = hospitalData.map((item) => ({
    url: `${BASE_URL}/near/hospitals/${item.slug}/`,
    title: `${item.name} Proximity & Healthcare Living Guide`,
    category: 'techparks' as const,
    priority: 0.78,
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
