// sitemapCatalog.ts - Google Pro Master Sitemap Data & XML Generators
// Enterprise-Grade XML Sitemaps with Google Image Schema & Multi-Cluster Indexing

export interface SitemapImage {
  loc: string;
  title: string;
  caption?: string;
  geo?: string;
}

export interface SitemapEntry {
  url: string;
  title: string;
  category: 'core' | 'residences' | 'locations' | 'techparks' | 'schools' | 'hospitals' | 'metro' | 'nri' | 'stories' | 'connectivity' | 'comparisons' | 'projects' | 'articles';
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod?: string;
  images?: SitemapImage[];
}

export const BASE_URL = 'https://mahindralifespaceshomes.in';
export const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

import { schoolData } from '../data/pSeoSchools';
import { nriPortalsData } from '../data/pSeoNriPortals';
import { hospitalData } from '../data/pSeoHospitals';
import { metroData } from '../data/pSeoMetroStations';
import { webStoriesData } from '../data/pSeoWebStories';
import { westPuneLocalityData } from '../data/pSeoWestPuneLocalities';


// Shared Project Images for Google Image Sitemap Indexation
export const PRIMARY_IMAGES: SitemapImage[] = [
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
    title: 'Mahindra Rivenza - 13.46-Acre Landmark Architectural Elevation',
    caption: 'Official architectural elevation of Mahindra Rivenza at Baner Annex, Mahalunge, Pune',
    geo: 'Mahalunge, Baner Annex, Pune, Maharashtra, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_thumb_webp/public/2026-10/Mahindra%20Rivenza-01_new.png',
    title: 'Mahindra Rivenza Official Emblem Logo',
    caption: 'Official brand logo of Mahindra Rivenza by Mahindra Lifespaces',
    geo: 'Pune, Maharashtra, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/Swimming%20pool%20with%20sunken%20bar_Rivenza_11zon.webp',
    title: 'Resort Swimming Pool with Sunken Aqua Bar',
    caption: 'Temperature-regulated infinity resort pool with sunken aqua bar at Mahindra Rivenza',
    geo: 'Mahalunge, Baner Annex, Pune, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/Multi-purpose_Rivenza__11zon.webp',
    title: 'Multipurpose Championship Sports Arena',
    caption: 'All-weather multisport court at Mahindra Rivenza',
    geo: 'Mahalunge, Baner Annex, Pune, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/Yoga%20lawn_Rivenza_11zon.webp',
    title: 'Mindful Yoga Lawn & Biophilic Gardens',
    caption: 'Open-sky meditation and yoga meadows at Mahindra Rivenza',
    geo: 'Mahalunge, Baner Annex, Pune, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/image001_11zon%20%281%29.webp',
    title: 'Floodlit Futsal Arena & Football Turf',
    caption: 'FIFA-standard turf futsal court at Mahindra Rivenza',
    geo: 'Mahalunge, Baner Annex, Pune, India',
  },
  {
    loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/2BHK%2520Premium.webp',
    title: 'Official Sanctioned Architectural CAD Floor Plan',
    caption: 'MahaRERA sanctioned architectural layout blueprint for Mahindra Rivenza',
    geo: 'Pune, Maharashtra, India',
  },
];

// 01. CORE TRANSACTIONAL & LANDING HUBS
export const CORE_PAGES: SitemapEntry[] = [
  {
    url: `${BASE_URL}/`,
    title: 'Mahindra Rivenza Mahalunge | Official Launch Homepage',
    category: 'core',
    priority: 1.0,
    changefreq: 'daily',
    images: PRIMARY_IMAGES,
  },
  {
    url: `${BASE_URL}/mahindra-rivenza/`,
    title: 'Mahindra Rivenza - Project Overview & Blueprint Showcase',
    category: 'core',
    priority: 1.0,
    changefreq: 'daily',
    images: PRIMARY_IMAGES.slice(0, 3),
  },
  {
    url: `${BASE_URL}/pricing/`,
    title: 'Mahindra Rivenza Pricing, Cost Sheet & Inventory Matrix',
    category: 'core',
    priority: 0.98,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/floor-plans/`,
    title: 'Mahindra Rivenza Architectural Floor Plans PDF & Master Layout',
    category: 'core',
    priority: 0.95,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[6], PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/master-plan/`,
    title: '13.46-Acre Township Master Layout & 9+ Acres Greens Blueprint',
    category: 'core',
    priority: 0.95,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0], PRIMARY_IMAGES[2]],
  },
  {
    url: `${BASE_URL}/location/`,
    title: 'Strategic Location in Baner Annex, Mahalunge & Hinjewadi Corridor',
    category: 'core',
    priority: 0.9,
    changefreq: 'weekly',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/amenities/`,
    title: '2.65 Lakh+ Sq.Ft. Lifestyle Amenities & ~44,000 Sq.Ft. Clubhouses',
    category: 'core',
    priority: 0.9,
    changefreq: 'weekly',
    images: PRIMARY_IMAGES.slice(2, 6),
  },
  {
    url: `${BASE_URL}/brochure/`,
    title: 'Official Launch Brochure PDF, Floor Plan Kit & Payment Schedule',
    category: 'core',
    priority: 0.92,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/rera/`,
    title: 'Official MahaRERA Compliance: PR1261012602102 & PM1261012602103',
    category: 'core',
    priority: 0.88,
    changefreq: 'monthly',
    images: [
      {
        loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/RERA%20full%20url_PR1261012602102.jpeg.webp',
        title: 'MahaRERA Phase 1 Registration Certificate PR1261012602102',
        caption: 'MahaRERA official registration barcode for Mahindra Rivenza Phase 1',
      },
      {
        loc: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/RERA%20full%20url_PM1261012602103.jpeg.webp',
        title: 'MahaRERA Phase 2 Registration Certificate PM1261012602103',
        caption: 'MahaRERA official registration barcode for Mahindra Rivenza Phase 2',
      },
    ],
  },
  {
    url: `${BASE_URL}/faq/`,
    title: 'Frequently Asked Questions — Possession, RERA, Price & Booking',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/brand/`,
    title: 'Mahindra Lifespaces Developers Ltd. — Pune Portfolio & Track Record',
    category: 'core',
    priority: 0.85,
    changefreq: 'monthly',
    images: [PRIMARY_IMAGES[1]],
  },
  {
    url: `${BASE_URL}/west-pune/`,
    title: 'West Pune Real Estate Investment & Growth Corridor Hub',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/articles/`,
    title: 'Mahalunge & West Pune Research Insights, Market Reports & Guides',
    category: 'core',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    url: `${BASE_URL}/mahalunge-pune/`,
    title: 'Mahalunge Pune Real Estate Hub — High-Growth Infrastructure Guide',
    category: 'core',
    priority: 0.82,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/nande-mahalunge-real-estate/`,
    title: 'Nande Mahalunge Real Estate Growth, PMRDA TP Scheme & Pricing',
    category: 'core',
    priority: 0.82,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/flats-near-baner/`,
    title: 'Luxury Flats Near Baner Pune — Mahindra Rivenza Baner Annex',
    category: 'core',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    url: `${BASE_URL}/flats-near-hinjewadi/`,
    title: 'Premium Flats Near Hinjewadi IT Park — Mahindra Rivenza',
    category: 'core',
    priority: 0.85,
    changefreq: 'daily',
  },
  {
    url: `${BASE_URL}/sitemap/`,
    title: 'Mahindra Rivenza Complete Architectural & Directory HTML Sitemap',
    category: 'core',
    priority: 0.75,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/tools/`,
    title: 'Pune Real Estate Financial Calculators & Decision Tools Hub',
    category: 'core',
    priority: 0.88,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/tools/pune-stamp-duty-calculator/`,
    title: 'Pune Stamp Duty & Registration Calculator 2026 — 7% Official Levies',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/tools/home-loan-emi-calculator/`,
    title: 'Home Loan EMI & Eligibility Calculator — SBI, HDFC & ICICI Rates',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/tools/hinjewadi-rental-yield-calculator/`,
    title: 'Hinjewadi Rental Yield & Real Estate Cashflow Calculator',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/tools/capital-gains-tax-calculator/`,
    title: 'Section 54 Capital Gains Tax Reinvestment Saver Calculator',
    category: 'core',
    priority: 0.85,
    changefreq: 'weekly',
  },
];

// 02. RESIDENCE TYPOLOGY HUBS
export const RESIDENCES_PAGES: SitemapEntry[] = [
  {
    url: `${BASE_URL}/residences/`,
    title: 'Luxury Residences Directory — 2, 3 & 4 BHK Collection',
    category: 'residences',
    priority: 0.9,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/residences/2-bhk/`,
    title: '2 BHK Luxury Flats at Mahindra Rivenza — 688 to 855 Sq.Ft.',
    category: 'residences',
    priority: 0.92,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[6]],
  },
  {
    url: `${BASE_URL}/residences/3-bhk/`,
    title: '3 BHK Deluxe & Ultra Luxury Residences — 995 to 1,206 Sq.Ft.',
    category: 'residences',
    priority: 0.92,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/residences/4-bhk/`,
    title: '4 BHK Luxury Sky Estates & Show Residence — 1,615 to 1,650 Sq.Ft.',
    category: 'residences',
    priority: 0.92,
    changefreq: 'daily',
    images: [PRIMARY_IMAGES[0]],
  },
  {
    url: `${BASE_URL}/residences/2-bhk-premium/`,
    title: '2 BHK Premium Residences — 688 Sq.Ft. Starting ₹90 Lakhs*',
    category: 'residences',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/3-bhk-signature/`,
    title: '3 BHK Signature Residences with Double-Height Balconies',
    category: 'residences',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/4-bhk-penthouse/`,
    title: '4 BHK Luxury Penthouses with 270° Panoramic Hill Views',
    category: 'residences',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/1-bhk-fusion/`,
    title: '1 BHK Smart Fusion Suites at Mahindra Mahalunge',
    category: 'residences',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/duplex-penthouse/`,
    title: 'Duplex Penthouses with Private Terrace Decks',
    category: 'residences',
    priority: 0.82,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/affordable-luxury/`,
    title: 'Affordable Luxury Homes in Baner Annex Mahalunge Pune',
    category: 'residences',
    priority: 0.82,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/vastu-compliant/`,
    title: '100% Vastu-Compliant East-Facing Residences',
    category: 'residences',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/nri-investment/`,
    title: 'NRI Real Estate Investment Guide & High-Yield Rental Returns',
    category: 'residences',
    priority: 0.85,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/west-facing/`,
    title: 'Scenic West-Facing Sunset Homes with Sahyadri Views',
    category: 'residences',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    url: `${BASE_URL}/residences/north-east-facing/`,
    title: 'North-East Facing Vastu Sanctum Residences',
    category: 'residences',
    priority: 0.8,
    changefreq: 'weekly',
  },
];

// 03. WEST PUNE LOCALITIES & MICRO-MARKETS
export const WEST_PUNE_SLUGS = [
  { slug: 'mahalunge-real-estate', name: 'Mahalunge Real Estate & Investment Growth' },
  { slug: 'nande-real-estate', name: 'Nande Real Estate, Baner Annex Corridors' },
  { slug: 'maan-real-estate', name: 'Maan Real Estate & Hinjewadi Phase 3 Hub' },
  { slug: 'hinjewadi-residential-projects', name: 'Hinjewadi Residential Projects & IT Hub Living' },
  { slug: 'baner-residential-projects', name: 'Baner Residential Projects & Baner Annex Living' },
  { slug: 'balewadi-residential-projects', name: 'Balewadi Residential Projects & High Street Corridor' },
  { slug: 'wakad-residential-projects', name: 'Wakad Residential Projects & Highway Connectivity' },
  { slug: 'tathawade-residential-projects', name: 'Tathawade Residential Projects & Educational Belt' },
  { slug: 'punawale-residential-projects', name: 'Punawale Real Estate & Affordable Corridors' },
  { slug: 'bavdhan-residential-projects', name: 'Bavdhan Residential Projects & Kothrud Proximity' },
  { slug: 'sus-residential-projects', name: 'Sus Residential Projects & Pashan-Baner Ridge' },
  { slug: 'ravet-residential-projects', name: 'Ravet Residential Projects & Expressway Junction' },
  { slug: 'pashan-residential-projects', name: 'Pashan Residential Projects & Lake Enclave' },
  { slug: 'aundh-residential-projects', name: 'Aundh Residential Projects & High-Street Corridor' },
  { slug: 'someshwarwadi-residential-projects', name: 'Someshwarwadi Real Estate & Valley Living' },
  { slug: 'marunji-residential-projects', name: 'Marunji Real Estate & Hinjewadi Phase 2 SEZ' },
  { slug: 'pimple-nilakh-residential-projects', name: 'Pimple Nilakh Luxury Flats & Riverside Bridge' },
  { slug: 'pimple-saudagar-residential-projects', name: 'Pimple Saudagar Properties & Linear Garden' },
  { slug: 'rahatani-residential-projects', name: 'Rahatani Real Estate & Wakad Annex Living' },
  { slug: 'chinchwad-residential-projects', name: 'Chinchwad Residential Projects & Auto Cluster' },
  { slug: 'nigdi-pradhikaran-real-estate', name: 'Nigdi Pradhikaran Planned Green Sector Living' },
  { slug: 'akurdi-residential-projects', name: 'Akurdi Real Estate & D.Y. Patil University Hub' },
  { slug: 'thergaon-residential-projects', name: 'Thergaon Properties & Aditya Birla Hospital' },
  { slug: 'kiwale-residential-projects', name: 'Kiwale Properties & Mumbai Expressway Entry' },
  { slug: 'mamurdi-residential-projects', name: 'Mamurdi Real Estate & Dehu Road Foothills' },
  { slug: 'balewadi-high-street-real-estate', name: 'Balewadi High Street Dining & Luxury Living' },
  { slug: 'kothrud-residential-projects', name: 'Kothrud Luxury Residences & Chandani Chowk Link' },
  { slug: 'senapati-bapat-road-real-estate', name: 'Senapati Bapat Road Prime Living & ICC Tech Park' },
];

export const LOCATIONS_PAGES: SitemapEntry[] = westPuneLocalityData.map((item) => ({
  url: `${BASE_URL}/west-pune/${item.slug}/`,
  title: `${item.name} — Mahindra Rivenza Pune Connectivity & Real Estate Guide`,
  category: 'locations',
  priority: 0.8,
  changefreq: 'weekly',
}));

// 04. COMMERCIAL IT PARKS & TECH HUBS (/near/*)
export const TECH_PARKS_SLUGS = [
  { slug: 'flats-near-infosys-hinjewadi', name: 'Flats Near Infosys Hinjewadi Phase 1 & 2' },
  { slug: 'flats-near-wipro-circle-hinjewadi', name: 'Flats Near Wipro Circle Hinjewadi' },
  { slug: 'flats-near-tcs-sahyadri-park-hinjewadi', name: 'Flats Near TCS Sahyadri Park Hinjewadi Phase 3' },
  { slug: 'flats-near-embassy-techzone-hinjewadi', name: 'Flats Near Embassy TechZone Hinjewadi' },
  { slug: 'flats-near-cognizant-hinjewadi', name: 'Flats Near Cognizant Hinjewadi' },
  { slug: 'flats-near-quadron-business-park-hinjewadi', name: 'Flats Near Quadron Business Park' },
  { slug: 'flats-near-balewadi-high-street', name: 'Flats Near Balewadi High Street & Baner' },
  { slug: 'flats-near-amar-paradigm-baner', name: 'Flats Near Amar Paradigm Baner' },
  { slug: 'flats-near-eon-free-zone-kharadi', name: 'Flats Near EON Free Zone Kharadi' },
  { slug: 'flats-near-world-trade-center-pune', name: 'Flats Near World Trade Center Pune' },
  { slug: 'flats-near-cybercity-magarpatta', name: 'Flats Near Cybercity Magarpatta' },
  { slug: 'flats-near-panchshil-business-park-baner', name: 'Flats Near Panchshil Business Park Baner' },
  { slug: 'flats-near-icc-tech-park-senapati-bapat-road', name: 'Flats Near ICC Tech Park Senapati Bapat Road' },
  { slug: 'flats-near-cerebrum-it-park-kalyani-nagar', name: 'Flats Near Cerebrum IT Park Kalyani Nagar' },
  { slug: 'flats-near-commerzone-yerwada', name: 'Flats Near Commerzone Yerwada' },
  { slug: 'flats-near-weikfield-it-citi-info-park', name: 'Flats Near Weikfield IT Citi Info Park' },
  { slug: 'flats-near-synechron-hinjewadi', name: 'Flats Near Synechron Hinjewadi Phase 1' },
  { slug: 'flats-near-barclays-hinjewadi', name: 'Flats Near Barclays Global Service Centre Hinjewadi' },
  { slug: 'flats-near-kpit-hinjewadi', name: 'Flats Near KPIT Technologies Hinjewadi' },
  { slug: 'flats-near-hexaware-hinjewadi', name: 'Flats Near Hexaware Technologies Hinjewadi Phase 3' },
  { slug: 'flats-near-veritas-baner', name: 'Flats Near Veritas Technologies Baner' },
  { slug: 'flats-near-siemens-balewadi', name: 'Flats Near Siemens Balewadi' },
  { slug: 'flats-near-mindspace-hinjewadi', name: 'Flats Near Mindspace IT Park Hinjewadi' },
  { slug: 'flats-near-cummins-balewadi', name: 'Flats Near Cummins India Campus Balewadi' },
  { slug: 'flats-near-tech-mahindra-hinjewadi', name: 'Flats Near Tech Mahindra Hinjewadi Phase 3' },
  { slug: 'flats-near-capgemini-hinjewadi', name: 'Flats Near Capgemini Hinjewadi Phase 3' },
  { slug: 'flats-near-persistent-hinjewadi', name: 'Flats Near Persistent Systems Hinjewadi' },
  { slug: 'flats-near-eaton-pune', name: 'Flats Near Eaton Innovation Center Pune' },
  { slug: 'flats-near-nvidia-pune', name: 'Flats Near NVIDIA Pune Technology Centre' },
  { slug: 'flats-near-credit-suisse-pune', name: 'Flats Near UBS Credit Suisse Hinjewadi' },
  { slug: 'flats-near-atos-syntel-hinjewadi', name: 'Flats Near Atos Syntel Hinjewadi' },
  { slug: 'flats-near-qualcomm-pune', name: 'Flats Near Qualcomm India Design Centre' },
];

export const TECH_PARKS_PAGES: SitemapEntry[] = TECH_PARKS_SLUGS.map((item) => ({
  url: `${BASE_URL}/near/${item.slug}/`,
  title: `${item.name} — Commute Time & Proximity Guide`,
  category: 'techparks',
  priority: 0.78,
  changefreq: 'weekly',
}));

// 05. CONNECTIVITY & INFRASTRUCTURE CORRIDORS (/connectivity/*)
export const CONNECTIVITY_SLUGS = [
  { slug: 'flats-near-pune-metro-line-3-hinjewadi', name: 'Flats Near Pune Metro Line 3 Hinjewadi-Shivajinagar' },
  { slug: 'properties-on-pmrda-36m-ring-road', name: 'Properties on PMRDA 36M Arterial Ring Road' },
  { slug: 'mahalunge-hinjewadi-river-bridge-connectivity', name: 'Mahalunge-Hinjewadi Mula River Bridge Connectivity' },
  { slug: 'flats-near-sant-tukaram-metro-station', name: 'Flats Near Sant Tukaram Metro Station' },
  { slug: 'properties-near-kharadi-shivane-riverside-road', name: 'Properties Near Kharadi-Shivane Riverside Road' },
  { slug: 'flats-near-mumbai-pune-expressway-access-point', name: 'Flats Near Mumbai-Pune Expressway Access' },
  { slug: 'properties-near-pune-ring-road-western-alignment', name: 'Properties Near Pune Ring Road Western Alignment' },
  { slug: 'flats-near-balewadi-stadium-metro-station', name: 'Flats Near Balewadi Stadium Metro Station' },
];

export const CONNECTIVITY_PAGES: SitemapEntry[] = CONNECTIVITY_SLUGS.map((item) => ({
  url: `${BASE_URL}/connectivity/${item.slug}/`,
  title: `${item.name} — Infrastructure & Commute Benchmark`,
  category: 'connectivity',
  priority: 0.78,
  changefreq: 'weekly',
}));

// 06. COMPETITIVE COMPARISON MATRIX (/compare/*)
export const COMPARISONS_SLUGS = [
  { slug: 'mahindra-mahalunge-vs-godrej-hillside', name: 'Mahindra Rivenza vs Godrej Hillside Mahalunge' },
  { slug: 'mahindra-mahalunge-vs-vtp-blue-waters', name: 'Mahindra Rivenza vs VTP Blue Waters Mahalunge' },
  { slug: 'mahindra-mahalunge-vs-kolte-patil-life-republic', name: 'Mahindra Rivenza vs Kolte Patil Life Republic Hinjewadi' },
  { slug: 'mahindra-mahalunge-vs-lodha-panache-hinjewadi', name: 'Mahindra Rivenza vs Lodha Panache Hinjewadi' },
  { slug: 'mahalunge-vs-wakad-real-estate', name: 'Mahalunge vs Wakad Real Estate Comparison' },
  { slug: 'mahalunge-vs-baner-real-estate', name: 'Mahalunge vs Baner Real Estate Price & ROI Comparison' },
  { slug: 'mahindra-ivylush-vs-godrej-infinity', name: 'Mahindra Ivylush vs Godrej Infinity Kharadi' },
  { slug: 'mahindra-citadel-vs-kohinoor-grandeur', name: 'Mahindra Citadel vs Kohinoor Grandeur Pimpri' },
  { slug: 'mahindra-happinest-vs-rohan-ananta', name: 'Mahindra Happinest Tathawade vs Rohan Ananta' },
  { slug: 'mahindra-lifespaces-vs-godrej-properties-pune', name: 'Mahindra Lifespaces vs Godrej Properties Pune Track Record' },
  { slug: 'mahindra-mahalunge-vs-megapolis-hinjewadi', name: 'Mahindra Rivenza vs Megapolis Hinjewadi Phase 3' },
  { slug: 'mahindra-mahalunge-vs-shapoorji-pallonji-sensorium', name: 'Mahindra Rivenza vs Shapoorji Pallonji Sensorium Hinjewadi' },
  { slug: 'mahindra-citadel-vs-runwal-elixir-pimpri', name: 'Mahindra Citadel vs Runwal Elixir Pimpri' },
  { slug: 'mahindra-mahalunge-vs-kolte-patil-24k-majestic', name: 'Mahindra Rivenza vs Kolte Patil 24K Majestic' },
  { slug: 'mahindra-rivenza-vs-vtp-earth-one', name: 'Mahindra Rivenza vs VTP Earth One Mahalunge' },
  { slug: 'mahindra-rivenza-vs-godrej-woodsville', name: 'Mahindra Rivenza vs Godrej Woodsville Hinjewadi' },
  { slug: 'mahindra-rivenza-vs-rohan-harita', name: 'Mahindra Rivenza vs Rohan Harita Tathawade' },
  { slug: 'mahindra-rivenza-vs-kasturi-balmoral-riverside', name: 'Mahindra Rivenza vs Kasturi The Balmoral Riverside Balewadi' },
  { slug: 'mahindra-rivenza-vs-pride-world-city', name: 'Mahindra Rivenza vs Pride World City Charholi' },
  { slug: 'mahindra-rivenza-vs-amar-landmark', name: 'Mahindra Rivenza vs Amar Landmark Baner' },
  { slug: 'mahindra-rivenza-vs-shapoorji-joyville-hinjewadi', name: 'Mahindra Rivenza vs Shapoorji Joyville Hinjewadi' },
  { slug: 'mahindra-rivenza-vs-vilas-javdekar-yashwin', name: 'Mahindra Rivenza vs VJ Yashwin Hinjewadi' },
  { slug: 'mahindra-rivenza-vs-kalpataru-jade-baner', name: 'Mahindra Rivenza vs Kalpataru Jade Baner' },
  { slug: 'mahindra-rivenza-vs-kohinoor-courtyard-one', name: 'Mahindra Rivenza vs Kohinoor Courtyard One Wakad' },
  { slug: 'mahindra-rivenza-vs-gera-isle-royale', name: 'Mahindra Rivenza vs Gera Isle Royale Bavdhan' },
];

export const COMPARISONS_PAGES: SitemapEntry[] = COMPARISONS_SLUGS.map((item) => ({
  url: `${BASE_URL}/compare/${item.slug}/`,
  title: `${item.name} — Detailed Feature, Carpet Area & Pricing Comparison`,
  category: 'comparisons',
  priority: 0.75,
  changefreq: 'weekly',
}));

// 07. MAHINDRA PORTFOLIO PROJECTS (/brand/projects/*)
export const BRAND_PROJECTS_SLUGS = [
  { slug: 'mahindra-mahalunge-pune', name: 'Mahindra Rivenza Mahalunge Pune (Flagship)' },
  { slug: 'mahindra-ivylush-kharadi-annex', name: 'Mahindra Ivylush Kharadi Annex' },
  { slug: 'mahindra-citadel-pimpri-metro', name: 'Mahindra Citadel Pimpri Metro Station' },
  { slug: 'mahindra-happinest-tathawade', name: 'Mahindra Happinest Tathawade Pune' },
  { slug: 'mahindra-antheia-pimpri', name: 'Mahindra Antheia Pimpri Pune' },
  { slug: 'mahindra-centralis-pimpri', name: 'Mahindra Centralis Pimpri Pune' },
  { slug: 'mahindra-nestalgia-pimpri', name: 'Mahindra Nestalgia Pimpri Chinchwad' },
  { slug: 'mahindra-lartista-sopan-baug', name: 'Mahindra L\'Artista Sopan Baug Pune' },
  { slug: 'mahindra-woods-pimpri', name: 'Mahindra The Woods Wakad Pimpri' },
];

export const BRAND_PROJECTS_PAGES: SitemapEntry[] = BRAND_PROJECTS_SLUGS.map((item) => ({
  url: `${BASE_URL}/brand/projects/${item.slug}/`,
  title: `${item.name} — Project Review, Amenities & Status`,
  category: 'projects',
  priority: 0.72,
  changefreq: 'weekly',
}));

// 08. EDITORIAL ARTICLES & MARKET GUIDES (/articles/*)
export const ARTICLES_SLUGS = [
  { slug: 'why-mahalunge-nande-maan-is-punes-next-billion-dollar-growth-corridor', name: 'Why Mahalunge-Nande-Maan is Pune’s Next Billion-Dollar Corridor' },
  { slug: 'mahindra-lifespaces-acquires-land-in-nande-mahalunge-what-it-means', name: 'Mahindra Lifespaces Acquires 13.46 Acres in Nande-Mahalunge' },
  { slug: 'mahalunge-pin-code-connectivity-infrastructure-guide-2026', name: 'Mahalunge Pin Code 412115 Connectivity & Infrastructure Guide' },
  { slug: 'mahindra-lifespaces-pune-track-record-residential-legacy', name: 'Mahindra Lifespaces Pune Residential Track Record & Delivery Legacy' },
  { slug: 'mahindra-rivenza-launch-price-carpet-area-analysis-2026', name: 'Mahindra Rivenza Launch Price & Carpet Area Analysis 2026' },
  { slug: 'mahindra-lifespaces-13-acres-mahalunge-project-preview', name: 'Mahindra Lifespaces 13.46 Acres Mahalunge Township Project Preview' },
  { slug: 'mahindra-lifespaces-mahalunge-upcoming-project-guide', name: 'Mahindra Lifespaces Mahalunge Upcoming Project Complete Guide' },
  { slug: 'mahindra-rivenza-vs-baner-vs-hinjewadi-roi-yield', name: 'Mahindra Rivenza vs Baner vs Hinjewadi Rental Yield & ROI Analysis' },
  { slug: 'pune-inner-ring-road-and-west-pune-real-estate', name: 'Pune Inner Ring Road Impact on West Pune Real Estate Appreciation' },
  { slug: 'mahindra-mahalunge-vs-godrej-vtp-kolte-patil', name: 'Mahindra Mahalunge vs Godrej vs VTP vs Kolte Patil Developer Comparison' },
  { slug: 'mahalunge-property-prices-investment-trends', name: 'Mahalunge Property Prices & 5-Year Capital Appreciation Trends' },
  { slug: 'schools-hospitals-it-parks-near-mahalunge', name: 'Top Schools, Hospitals & IT Parks Within 15 Mins of Mahalunge' },
  { slug: 'west-pune-real-estate-complete-2026-guide', name: 'West Pune Real Estate Complete 2026 Buyer & Investor Guide' },
  { slug: 'nande-mahalunge-maan-real-estate-guide', name: 'Nande-Mahalunge-Maan Micro-Market Comprehensive Investment Guide' },
  { slug: 'pmrda-town-planning-scheme-mahalunge', name: 'PMRDA Town Planning Scheme (TPS) Mahalunge Infrastructure Masterplan' },
  { slug: 'mahalunge-vs-baner-vs-hinjewadi', name: 'Mahalunge vs Baner vs Hinjewadi Comprehensive Location Comparison' },
  { slug: 'flats-under-1-crore-in-west-pune', name: 'Flats Under 1 Crore in West Pune: Best Projects & 2 BHK Guide' },
  { slug: 'luxury-flats-under-2-crore-in-pune', name: 'Luxury Flats Under 2 Crore in Pune: 3 BHK Price Analysis' },
  { slug: 'flats-near-pune-metro-line-3', name: 'Flats Near Pune Metro Line 3 Hinjewadi-Shivajinagar' },
  { slug: 'ready-possession-vs-under-construction-pune', name: 'Ready Possession vs Under Construction Flats in Pune' },
];

export const ARTICLES_PAGES: SitemapEntry[] = ARTICLES_SLUGS.map((item) => ({
  url: `${BASE_URL}/articles/${item.slug}/`,
  title: `${item.name} — Real Estate Editorial Analysis`,
  category: 'articles',
  priority: 0.68,
  changefreq: 'monthly',
}));

// 09. INTERNATIONAL SCHOOLS PROXIMITY (/near/schools/*)
export const SCHOOLS_PAGES: SitemapEntry[] = schoolData.map((item) => ({
  url: `${BASE_URL}/near/schools/${item.slug}/`,
  title: `${item.name} — Family Living & Proximity Guide`,
  category: 'schools',
  priority: 0.78,
  changefreq: 'weekly',
  lastmod: CURRENT_DATE,
}));

// 10. GLOBAL NRI INVESTMENT PORTALS (/nri/*)
export const NRI_PAGES: SitemapEntry[] = nriPortalsData.map((item) => ({
  url: `${BASE_URL}/nri/${item.slug}/`,
  title: `Mahindra Rivenza Global NRI Investment — ${item.countryOrRegion}`,
  category: 'nri',
  priority: 0.85,
  changefreq: 'weekly',
  lastmod: CURRENT_DATE,
}));

// 11. HEALTHCARE & SUPER-SPECIALTY HOSPITALS (/near/hospitals/*)
export const HOSPITALS_PAGES: SitemapEntry[] = hospitalData.map((item) => ({
  url: `${BASE_URL}/near/hospitals/${item.slug}/`,
  title: `${item.name} — Healthcare & Wellness Living Guide`,
  category: 'hospitals',
  priority: 0.78,
  changefreq: 'weekly',
  lastmod: CURRENT_DATE,
}));

// 12. PUNE METRO LINE 3 TRANSIT STATIONS (/near/metro/*)
export const METRO_PAGES: SitemapEntry[] = metroData.map((item) => ({
  url: `${BASE_URL}/near/metro/${item.slug}/`,
  title: `${item.name} — Transit & Commuter Living Guide`,
  category: 'metro',
  priority: 0.80,
  changefreq: 'weekly',
  lastmod: CURRENT_DATE,
}));

// 13. GOOGLE WEB STORIES (/web-stories/*)
export const WEB_STORIES_PAGES: SitemapEntry[] = [
  {
    url: `${BASE_URL}/web-stories/`,
    title: 'Google Web Stories — Mahindra Rivenza Baner Annex & Pune Real Estate Market',
    category: 'stories',
    priority: 0.85,
    changefreq: 'daily',
    lastmod: CURRENT_DATE,
  },
  ...webStoriesData.map((story) => ({
    url: `${BASE_URL}/web-stories/${story.slug}/`,
    title: `${story.title} — Visual Web Story`,
    category: 'stories' as const,
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

// ALL SITEMAP ENTRIES
export const ALL_SITEMAP_ENTRIES: SitemapEntry[] = [
  ...CORE_PAGES,
  ...RESIDENCES_PAGES,
  ...LOCATIONS_PAGES,
  ...TECH_PARKS_PAGES,
  ...SCHOOLS_PAGES,
  ...HOSPITALS_PAGES,
  ...METRO_PAGES,
  ...NRI_PAGES,
  ...WEB_STORIES_PAGES,
  ...CONNECTIVITY_PAGES,
  ...COMPARISONS_PAGES,
  ...BRAND_PROJECTS_PAGES,
  ...ARTICLES_PAGES,
];


// XML GENERATOR HELPERS (Google Pro Compliance)
export function generateUrlXml(entry: SitemapEntry): string {
  const lastmod = entry.lastmod || CURRENT_DATE;
  const hreflangIn = `    <xhtml:link rel="alternate" hreflang="en-IN" href="${entry.url}" />`;
  const hreflangDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.url}" />`;
  
  let imageXml = '';
  if (entry.images && entry.images.length > 0) {
    imageXml = entry.images
      .map(
        (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}${img.geo ? `\n      <image:geo_location>${escapeXml(img.geo)}</image:geo_location>` : ''}
    </image:image>`
      )
      .join('\n');
  }

  return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
${hreflangIn}
${hreflangDefault}${imageXml ? `\n${imageXml}` : ''}
  </url>`;
}

export function generateUrlset(entries: SitemapEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map(generateUrlXml).join('\n')}
</urlset>`;
}

export function generateSitemapIndex(sitemapUrls: string[]): string {
  const timestamp = CURRENT_DATE;
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${timestamp}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
