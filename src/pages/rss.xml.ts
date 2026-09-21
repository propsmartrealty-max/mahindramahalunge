import type { APIRoute } from 'astro';

const articles = [
  {
    slug: 'mahindra-lifespaces-13-acres-mahalunge-project-preview',
    title: 'Mahindra Lifespaces Acquires 13.46 Acres in Mahalunge: ₹3,500 Cr Master Plan Preview',
    pubDate: 'Mon, 20 Oct 2025 00:00:00 GMT',
    description: 'Detailed breakdown of Mahindra Lifespaces strategic acquisition in the Nande–Mahalunge corridor, featuring 2, 3 & 4 BHK future-ready sustainable residences.'
  },
  {
    slug: 'mahindra-mahalunge-vs-godrej-vtp-kolte-patil',
    title: 'Mahindra Mahalunge vs Godrej Hillside vs VTP Blue Waters vs Kolte Patil: The Definitive Comparison',
    pubDate: 'Sun, 15 Jan 2026 00:00:00 GMT',
    description: 'An objective head-to-head evaluation of land density, developer trust, construction quality, green ratings, and ROI across Mahalunges landmark developments.'
  },
  {
    slug: 'mahalunge-pin-code-connectivity-infrastructure-guide-2026',
    title: 'Mahalunge Pune Pin Code 411045: Infrastructure, DP Roads & Metro Line 3 Connectivity Guide',
    pubDate: 'Mon, 16 Feb 2026 00:00:00 GMT',
    description: 'Exhaustive locality dossier covering postal pin code 411045, PMRDA 36m DP road network, Hinjewadi-Mahalunge bridge, Metro Line 3, and Ring Road alignment.'
  },
  {
    slug: 'mahindra-lifespaces-pune-track-record-residential-legacy',
    title: 'Mahindra Lifespaces in Pune: A Proven Legacy of Delivered Trust Across Landmark Communities',
    pubDate: 'Wed, 18 Feb 2026 00:00:00 GMT',
    description: 'Discover Mahindra Lifespaces delivered Pune communities—from Antheia and Centralis to Happinest Tathawade and the upcoming 13.46-acre Mahalunge community.'
  },
  {
    slug: 'mahalunge-vs-baner-vs-hinjewadi',
    title: 'Mahalunge vs Baner vs Hinjewadi: Which Location Offers the Best ROI & Lifestyle?',
    pubDate: 'Fri, 20 Feb 2026 00:00:00 GMT',
    description: 'An objective comparative study of property prices, rental yields, civic infrastructure, and long-term capital appreciation across Punes golden triangle.'
  },
  {
    slug: 'pmrda-town-planning-scheme-mahalunge',
    title: 'PMRDA Town Planning Scheme at Mahalunge: 36M Roads, Metro 3 & Ring Road Impact',
    pubDate: 'Mon, 23 Feb 2026 00:00:00 GMT',
    description: 'How Punes flagship PMRDA model Town Planning Scheme is transforming Mahalunge into a world-class smart urban habitat with underground utility networks.'
  },
  {
    slug: 'mahalunge-property-prices-investment-trends',
    title: 'Mahalunge Property Price Trends 2026: Historical Appreciation & 5-Year Forecast',
    pubDate: 'Wed, 25 Feb 2026 00:00:00 GMT',
    description: 'Comprehensive data on price per sq.ft., rental yield averages (4.2% - 5.5%), and the upcoming price inflection following Grade-A developer entries.'
  },
  {
    slug: 'schools-hospitals-it-parks-near-mahalunge',
    title: 'Social Infrastructure in Mahalunge: Top International Schools, Hospitals & IT Tech Parks',
    pubDate: 'Fri, 27 Feb 2026 00:00:00 GMT',
    description: 'Explore proximity to Mahindra International School, DPS Pune, Symbiosis, Jupiter Hospital, and Hinjewadi IT Park Phases 1, 2, and 3.'
  },
  {
    slug: 'why-mahalunge-nande-maan-is-punes-next-billion-dollar-growth-corridor',
    title: 'Why Nande-Mahalunge-Maan is Punes Next Billion-Dollar Residential Growth Corridor',
    pubDate: 'Tue, 03 Mar 2026 00:00:00 GMT',
    description: 'The confluence of geographic green belts, riverfront topography, IT tech job corridors, and institutional investments shaping the western horizon.'
  },
  {
    slug: 'mahindra-lifespaces-mahalunge-upcoming-project-guide',
    title: 'Mahindra Lifespaces Mahalunge: Upcoming Project Guide (13.46-Acre Acquisition & Pre-Launch Insights)',
    pubDate: 'Thu, 05 Mar 2026 00:00:00 GMT',
    description: 'Comprehensive overview of the upcoming 13.46-acre master development announced in October 2025: ₹3,500 Cr GDV, biophilic living, and pre-launch timeline.'
  },
  {
    slug: 'mahindra-lifespaces-acquires-land-in-nande-mahalunge-what-it-means',
    title: 'Mahindra Lifespaces Acquires Land in Nande-Mahalunge: What It Means for Pune Real Estate',
    pubDate: 'Sun, 08 Mar 2026 00:00:00 GMT',
    description: 'Detailed economic analysis of Mahindras 13.46-acre acquisition, why the company selected Nande-Mahalunge, and its regional price appreciation impact.'
  },
  {
    slug: 'west-pune-real-estate-complete-2026-guide',
    title: 'West Pune Real Estate: Complete 2026 Investment Guide & Emerging Micro-Markets',
    pubDate: 'Wed, 11 Mar 2026 00:00:00 GMT',
    description: 'Compare price rates per sq.ft., rental yields (4.2% - 5.5%), and capital growth across Hinjewadi, Baner, Wakad, Tathawade, and Mahalunge.'
  },
  {
    slug: 'nande-mahalunge-maan-real-estate-guide',
    title: 'Nande–Mahalunge–Maan Real Estate Guide: PMRDA Town Planning, Inner Ring Road & IT Corridor Hubs',
    pubDate: 'Sat, 14 Mar 2026 00:00:00 GMT',
    description: 'How Nande, Mahalunge, and Maan form West Punes strategic growth triangle with PMRDA Town Planning Scheme 1 and Hinjewadi river bridges.'
  },
  {
    slug: 'pune-inner-ring-road-and-west-pune-real-estate',
    title: 'Pune Inner Ring Road & West Pune Real Estate: Infrastructure Transformation in Mahalunge & Nande',
    pubDate: 'Tue, 17 Mar 2026 00:00:00 GMT',
    description: 'The planned Pune Inner Ring Road and its alignment through Mahalunge and Nande, connecting directly to Mumbai-Bengaluru Highway and PCMC.'
  }
];

export const GET: APIRoute = async () => {
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mahindra Lifespaces Mahalunge &amp; Pune Real Estate Research</title>
    <link>https://mahindralifespaceshomes.in/articles/</link>
    <description>Authoritative research reports, infrastructure analyses, price forecasts, and corridor intelligence for Mahindra Mahalunge and West Pune real estate.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://mahindralifespaceshomes.in/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (art) => `
    <item>
      <title><![CDATA[${art.title}]]></title>
      <link>https://mahindralifespaceshomes.in/articles/${art.slug}/</link>
      <guid isPermaLink="true">https://mahindralifespaceshomes.in/articles/${art.slug}/</guid>
      <description><![CDATA[${art.description}]]></description>
      <pubDate>${art.pubDate}</pubDate>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
