import type { APIRoute } from 'astro';
import { webStoriesData } from '../data/pSeoWebStories';
import { generateUrlset, BASE_URL, CURRENT_DATE } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const entries = [
    {
      url: `${BASE_URL}/web-stories/`,
      title: 'Google Web Stories — Mahindra Rivenza Baner Annex & Pune Real Estate Market',
      category: 'core' as const,
      priority: 0.85,
      changefreq: 'daily' as const,
      lastmod: CURRENT_DATE,
    },
    ...webStoriesData.map((story) => ({
      url: `${BASE_URL}/web-stories/${story.slug}/`,
      title: story.title,
      category: 'core' as const,
      priority: 0.85,
      changefreq: 'weekly' as const,
      lastmod: CURRENT_DATE,
      images: [
        {
          loc: story.posterPortrait,
          title: story.title,
          caption: story.metaDescription,
          geo: 'Pune, Maharashtra, India',
        },
      ],
    })),
  ];

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
