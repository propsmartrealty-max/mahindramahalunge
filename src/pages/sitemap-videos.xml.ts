import type { APIRoute } from 'astro';
import { BASE_URL } from '../utils/sitemapCatalog';

export const GET: APIRoute = async () => {
  const videos = [
    {
      pageUrl: `${BASE_URL}/`,
      videoUrl: `${BASE_URL}/videos/hero-elevation-banner-desktop.mp4`,
      thumbnailUrl: `${BASE_URL}/images/official/mahindra-rivenza-architectural-elevation.webp`,
      title: 'Mahindra Rivenza Baner Annex — Official Architectural Elevation & Master Township Walkthrough',
      description: 'Official 4K architectural elevation and master development walkthrough of Mahindra Rivenza across 13.46 acres in Baner Annex / Mahalunge, West Pune.',
      duration: 30,
      uploadDate: '2026-10-06T09:00:00+05:30',
    },
    {
      pageUrl: `${BASE_URL}/virtual-tour/`,
      videoUrl: `${BASE_URL}/videos/hero-elevation-banner-desktop.mp4`,
      thumbnailUrl: `${BASE_URL}/images/official/mahindra-rivenza-architectural-elevation.webp`,
      title: 'Mahindra Rivenza 4 BHK Show Residence 3D Virtual Tour & Walkthrough',
      description: 'Comprehensive video walkthrough and 3D architectural exploration of the furnished sample home and ~44,000 sq.ft clubhouse at Mahindra Rivenza.',
      duration: 30,
      uploadDate: '2026-10-06T10:00:00+05:30',
    },
    {
      pageUrl: `${BASE_URL}/amenities/`,
      videoUrl: `${BASE_URL}/videos/hero-yoga-deck-desktop.mp4`,
      thumbnailUrl: `${BASE_URL}/images/official/yoga-lawn-biophilic-gardens.webp`,
      title: 'Mahindra Rivenza Biophilic Amenities & Mindful Yoga Deck Tour',
      description: 'Explore 50+ luxury lifestyle amenities, 9+ acres of landscaped biophilic greens, yoga deck, and temperature-controlled pool with sunken aqua bar.',
      duration: 25,
      uploadDate: '2026-10-06T11:00:00+05:30',
    },
    {
      pageUrl: `${BASE_URL}/master-plan/`,
      videoUrl: `${BASE_URL}/videos/hero-twin-windows-desktop.mp4`,
      thumbnailUrl: `${BASE_URL}/images/official/swimming-pool-sunken-aqua-bar.webp`,
      title: 'Mahindra Rivenza Master Plan Layout & 13.46-Acre Township Tour',
      description: 'Architectural overview of the 13.46-acre master township plan featuring IGBC Gold certified climate-responsive towers and vehicle-free podiums.',
      duration: 25,
      uploadDate: '2026-10-06T12:00:00+05:30',
    },
    {
      pageUrl: `${BASE_URL}/floor-plans/`,
      videoUrl: `${BASE_URL}/videos/hero-elevation-banner-mobile.mp4`,
      thumbnailUrl: `${BASE_URL}/images/official/floor-plan-2bhk-premium-687sqft.webp`,
      title: 'Mahindra Rivenza Luxury 2, 3 & 4 BHK Floor Plans & CAD Blueprints Walkthrough',
      description: 'High-definition walkthrough of 2 BHK, 3 BHK, and 4 BHK luxury residences and cross-ventilated spatial designs starting at ₹90 Lakhs*.',
      duration: 30,
      uploadDate: '2026-10-06T13:00:00+05:30',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos
  .map(
    (v) => `  <url>
    <loc>${v.pageUrl}</loc>
    <video:video>
      <video:thumbnail_loc>${v.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${v.title.replace(/&/g, '&amp;')}</video:title>
      <video:description>${v.description.replace(/&/g, '&amp;')}</video:description>
      <video:content_loc>${v.videoUrl}</video:content_loc>
      <video:player_loc>${v.pageUrl}</video:player_loc>
      <video:duration>${v.duration}</video:duration>
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
