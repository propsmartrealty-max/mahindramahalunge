import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const products = [
    {
      id: 'rivenza-2bhk-premium',
      title: 'Mahindra Rivenza 2 BHK Premium Residence (635 Sq.Ft. Carpet)',
      description: 'Biophilic 2 BHK Premium apartment at Mahindra Rivenza by Mahindra Lifespaces in Baner Annex / Mahalunge, Pune. Features 635 sq.ft RERA carpet area (688 sq.ft aggregate), IGBC Gold Pre-Certified, Net Zero Waste to Landfill, ~44,000 sq.ft clubhouse with sunken aqua bar pool. MahaRERA PR1261012602102.',
      link: 'https://mahindralifespaceshomes.in/residences/2-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '9000000 INR',
      salePrice: '9000000 INR',
      carpetArea: '635 sq.ft',
      aggregateArea: '688 sq.ft'
    },
    {
      id: 'rivenza-2bhk-luxury-b',
      title: 'Mahindra Rivenza 2 BHK Luxury B Residence (705 Sq.Ft. Carpet)',
      description: '2 BHK Luxury B apartment at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 705 sq.ft RERA carpet area, 785 sq.ft aggregate usable area. 7 mins to Hinjewadi Phase 1 IT Park & 8 mins to Balewadi High Street. Pre-approved loans from SBI, HDFC, ICICI.',
      link: 'https://mahindralifespaceshomes.in/residences/2-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '10400000 INR',
      salePrice: '10400000 INR',
      carpetArea: '705 sq.ft',
      aggregateArea: '785 sq.ft'
    },
    {
      id: 'rivenza-2bhk-luxury-a',
      title: 'Mahindra Rivenza 2 BHK Luxury A Residence (711 Sq.Ft. Carpet)',
      description: '2 BHK Luxury A flat at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 711 sq.ft RERA carpet area, 824 sq.ft aggregate area with expanded deck (113 sq.ft EBVT). 9+ acres of vehicle-free landscaped greens and biophilic architecture.',
      link: 'https://mahindralifespaceshomes.in/residences/2-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '11400000 INR',
      salePrice: '11400000 INR',
      carpetArea: '711 sq.ft',
      aggregateArea: '824 sq.ft'
    },
    {
      id: 'rivenza-2bhk-ultra-luxury-e',
      title: 'Mahindra Rivenza 2 BHK Ultra Luxury E Residence (747 Sq.Ft. Carpet)',
      description: 'Largest 2 BHK typology at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 747 sq.ft RERA carpet, 855 sq.ft aggregate area with private study alcove. MahaRERA Phase 1 PR1261012602102.',
      link: 'https://mahindralifespaceshomes.in/residences/2-bhk-premium/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '11800000 INR',
      salePrice: '11800000 INR',
      carpetArea: '747 sq.ft',
      aggregateArea: '855 sq.ft'
    },
    {
      id: 'rivenza-3bhk-deluxe-c',
      title: 'Mahindra Rivenza 3 BHK Deluxe C Residence (882 Sq.Ft. Carpet)',
      description: '3 BHK Deluxe C residence at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 882 sq.ft RERA carpet, 995 sq.ft aggregate usable area. Designed with Vastu-compliant layout, dual cross-ventilation, and panoramic hill & river valley views.',
      link: 'https://mahindralifespaceshomes.in/residences/3-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '13100000 INR',
      salePrice: '13100000 INR',
      carpetArea: '882 sq.ft',
      aggregateArea: '995 sq.ft'
    },
    {
      id: 'rivenza-3bhk-deluxe-b',
      title: 'Mahindra Rivenza 3 BHK Deluxe B Residence (894 Sq.Ft. Carpet)',
      description: '3 BHK Deluxe B apartment at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 894 sq.ft RERA carpet area, 1,007 sq.ft aggregate area. Direct access to PMRDA 36m Ring Road, Hinjewadi river bridge, and Pune Metro Line 3.',
      link: 'https://mahindralifespaceshomes.in/residences/3-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '14000000 INR',
      salePrice: '14000000 INR',
      carpetArea: '894 sq.ft',
      aggregateArea: '1007 sq.ft'
    },
    {
      id: 'rivenza-3bhk-ultra-luxury-b',
      title: 'Mahindra Rivenza 3 BHK Ultra Luxury B Residence (1,065 Sq.Ft. Carpet)',
      description: 'Sprawling 3 BHK Ultra Luxury B residence at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 1,065 sq.ft RERA carpet, 1,206 sq.ft aggregate area, 141 sq.ft EBVT. Access to ~44,000 sq.ft clubhouse, futsal court, yoga lawn, and wellness spa.',
      link: 'https://mahindralifespaceshomes.in/residences/3-bhk-signature/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '16000000 INR',
      salePrice: '16000000 INR',
      carpetArea: '1065 sq.ft',
      aggregateArea: '1206 sq.ft'
    },
    {
      id: 'rivenza-4bhk-luxury-b',
      title: 'Mahindra Rivenza 4 BHK Luxury B Residence (1,438 Sq.Ft. Carpet)',
      description: 'Grand 4 BHK Luxury B estate at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 1,438 sq.ft RERA carpet area, 1,615 sq.ft aggregate usable area, 177 sq.ft EBVT. Fully furnished 4 BHK show home open on-site at sales gallery.',
      link: 'https://mahindralifespaceshomes.in/residences/4-bhk/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '22000000 INR',
      salePrice: '22000000 INR',
      carpetArea: '1438 sq.ft',
      aggregateArea: '1615 sq.ft'
    },
    {
      id: 'rivenza-4bhk-luxury-a',
      title: 'Mahindra Rivenza 4 BHK Luxury A Presidential Suite (1,465 Sq.Ft. Carpet)',
      description: 'Flagship 4 BHK Luxury A Presidential Suite at Mahindra Rivenza, Baner Annex / Mahalunge, Pune. 1,465 sq.ft RERA carpet, 1,651 sq.ft aggregate area, 186 sq.ft EBVT. Complete biophilic privacy, dual decks, and dedicated EV charging parking.',
      link: 'https://mahindralifespaceshomes.in/residences/4-bhk-penthouse/',
      imageLink: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
      price: '25500000 INR',
      salePrice: '25500000 INR',
      carpetArea: '1465 sq.ft',
      aggregateArea: '1651 sq.ft'
    }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Mahindra Rivenza - Baner Annex Mahalunge Luxury Residences Inventory</title>
    <link>https://mahindralifespaceshomes.in/</link>
    <description>Official residential inventory, floor plans, and pricing catalog for Mahindra Rivenza by Mahindra Lifespace Developers Limited in Baner Annex, Mahalunge, Pune.</description>
    ${products
      .map(
        (p) => `
    <item>
      <g:id>${p.id}</g:id>
      <g:title><![CDATA[${p.title}]]></g:title>
      <g:description><![CDATA[${p.description}]]></g:description>
      <g:link>${p.link}</g:link>
      <g:image_link>${p.imageLink}</g:image_link>
      <g:availability>in stock</g:availability>
      <g:price>${p.price}</g:price>
      <g:sale_price>${p.salePrice}</g:sale_price>
      <g:brand>Mahindra Lifespaces</g:brand>
      <g:condition>new</g:condition>
      <g:google_product_category>Real Estate &gt; Residential Properties &gt; Apartments</g:google_product_category>
      <g:product_type>Real Estate &gt; Residential Apartments &gt; Baner Annex Mahalunge Pune</g:product_type>
      <g:mpn>${p.id.toUpperCase()}</g:mpn>
      <g:identifier_exists>no</g:identifier_exists>
      <g:custom_label_0>Mahindra Rivenza</g:custom_label_0>
      <g:custom_label_1>Baner Annex Mahalunge</g:custom_label_1>
      <g:custom_label_2>${p.carpetArea}</g:custom_label_2>
      <g:custom_label_3>${p.aggregateArea}</g:custom_label_3>
      <g:custom_label_4>MahaRERA PR1261012602102</g:custom_label_4>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};
