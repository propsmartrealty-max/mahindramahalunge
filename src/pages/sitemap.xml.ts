import type { APIRoute } from 'astro';
import { generateSitemapIndex, BASE_URL } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const subSitemaps = [
    `${BASE_URL}/sitemap-main.xml`,
    `${BASE_URL}/sitemap-residences.xml`,
    `${BASE_URL}/sitemap-locations.xml`,
    `${BASE_URL}/sitemap-near.xml`,
    `${BASE_URL}/sitemap-connectivity.xml`,
    `${BASE_URL}/sitemap-compare.xml`,
    `${BASE_URL}/sitemap-projects.xml`,
    `${BASE_URL}/sitemap-articles.xml`,
    `${BASE_URL}/sitemap-images.xml`,
  ];

  const xml = generateSitemapIndex(subSitemaps);

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
