export interface BrandProjectItem {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  microMarket: string;
  status: 'Pre-Launch' | 'Under Construction' | 'Delivered' | 'Launched';
  landArea: string;
  typologies: string[];
  unitsCount: string;
  deliveryYear: string;
  reraNumber?: string;
  greenRating: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  distanceFromMahalunge: string;
  transitHighlight: string;
  keySpecs: { label: string; value: string }[];
  amenityHighlights: string[];
  investmentCase: string;
  rentalYield?: string;
  faqs: { q: string; a: string }[];
  image: string;
}

export const brandProjectData: BrandProjectItem[] = [
  {
    slug: 'mahindra-mahalunge-pune',
    name: 'Mahindra Rivenza',
    shortName: 'Mahindra Rivenza',
    location: 'Mahindra Rivenza, Baner Annex, off Baner-Hinjawadi Road, Pune, Maharashtra 412115',
    microMarket: 'Baner Annex / Mahalunge (West Pune)',
    status: 'Launched',
    landArea: '~13.46 Acres (9+ Acres Landscaped Greens)',
    typologies: [
      '2 BHK Premium (688 sq.ft aggregate / 635 sq.ft carpet)',
      '2 BHK Luxury B (785 sq.ft aggregate / 705 sq.ft carpet)',
      '2 BHK Luxury A (824 sq.ft aggregate / 711 sq.ft carpet)',
      '2 BHK Ultra Luxury E (855 sq.ft aggregate / 747 sq.ft carpet)',
      '3 BHK Deluxe C (995 sq.ft aggregate / 882 sq.ft carpet)',
      '3 BHK Deluxe B (1,007 sq.ft aggregate / 894 sq.ft carpet)',
      '3 BHK Ultra Luxury B (1,206 sq.ft aggregate / 1,065 sq.ft carpet)',
      '4 BHK Luxury B (1,615 sq.ft aggregate / 1,438 sq.ft carpet)',
      '4 BHK Luxury A (1,650 sq.ft aggregate / 1,465 sq.ft carpet)'
    ],
    unitsCount: 'Phased High-Rise Sanctuary (4 BHK Show Residence Live On-Site)',
    deliveryYear: 'Phase 1 & Phase 2 valid upto 30/12/31 as per MahaRERA',
    reraNumber: 'PR1261012602102 (Phase 1) | PM1261012602103 (Phase 2)',
    greenRating: 'Pre-Certified IGBC Gold & Net Zero Waste to Landfill',
    h1: 'Mahindra Rivenza Pune: 13.46-Acre Landmark in Baner Annex / Mahalunge',
    metaTitle: 'Mahindra Rivenza in Baner Annex, Pune | 2, 3 & 4 BHK Luxury Homes',
    metaDescription: 'Discover 2, 3 & 4 BHK flats at Mahindra Rivenza in Baner Annex / Mahalunge, Pune. A 13.46-acre haven with 9+ acres of greens, 44k sq.ft clubhouse, starting ₹1.85 Cr*. MahaRERA PR1261012602102.',
    heroTagline: '13.46 Acres · 9+ Acres Greens · ~44,000 sq.ft Clubhouse · Starting ₹1.85 Cr*',
    distanceFromMahalunge: 'Baner Annex / Mahalunge Epicenter (off Baner-Hinjawadi Road)',
    transitHighlight: 'Direct access to Baner-Hinjawadi Road, upcoming Metro Line 3, & Mumbai-Pune Expressway',
    keySpecs: [
      { label: 'Land Area', value: '~13.46 Acres (9+ Acres Greens)' },
      { label: 'Amenity Spaces', value: '2.65 Lakh+ sq.ft. incl. ~44,000 sq.ft Clubhouses' },
      { label: 'Configurations', value: '2, 3 & 4 BHK Luxury Residences' },
      { label: 'Carpet Area', value: '635 – 1,465 sq.ft. RERA (688 – 1,650 sq.ft. Aggregate)' },
      { label: 'Starting Price', value: '₹1.85 Crore* Onwards' },
      { label: 'MahaRERA', value: 'Phase 1: PR1261012602102 | Phase 2: PM1261012602103' },
      { label: 'Green Rating', value: 'Pre-Certified IGBC Gold & Net Zero Waste' },
      { label: 'Status', value: 'Officially Launched / Bookings Open' }
    ],
    amenityHighlights: [
      'Swimming Pool with Sunken Bar & Dedicated Lounging Decks',
      '~44,000 sq.ft. Grand Multi-Level Clubhouses with 2.65 Lakh+ sq.ft Amenity Spaces',
      'Yoga Lawn, Meditation Terraces & Biophilic Wellness Reserves',
      'Multi-Purpose Sports Court & Floodlit Futsal Court',
      'Glass Roof Library, Co-Working Pods & Executive Lounges',
      'Net Zero Waste to Landfill & Dedicated EV Charging Infrastructure'
    ],
    investmentCase: 'Baner Annex and Mahalunge represent West Pune\'s prime capital appreciation corridor. With prices starting at ₹1.85 Cr*, direct access to Hinjawadi IT Park, Balewadi High Street, and the Pune Metro Line 3, Mahindra Rivenza unites Mahindra\'s institutional delivery governance with unmatched rental and capital appreciation potential.',
    rentalYield: '4.8% – 5.4% (Projected Hinjewadi & Baner Tech Workforce Demand)',
    faqs: [
      {
        q: 'What is the location of Mahindra Rivenza?',
        a: 'Site address: Mahindra Rivenza, Baner Annex, off Baner-Hinjawadi Road, Pune, Maharashtra 412115.'
      },
      {
        q: 'Which configurations and what apartment sizes are available at Mahindra Rivenza?',
        a: 'Mahindra Rivenza offers: 2 BHK Premium (688 sq.ft agg. / 635 sq.ft carpet), 2 BHK Luxury B (785 sq.ft agg.), 2 BHK Luxury A (824 sq.ft agg.), 2 BHK Ultra Luxury E (855 sq.ft agg.), 3 BHK Deluxe C (995 sq.ft agg.), 3 BHK Deluxe B (1,007 sq.ft agg.), 3 BHK Ultra Luxury B (1,206 sq.ft agg.), 4 BHK Luxury B (1,615 sq.ft agg.), and 4 BHK Luxury A (1,650 sq.ft agg.).'
      },
      {
        q: 'What is the RERA registration number of Mahindra Rivenza?',
        a: 'The project is registered with MahaRERA as Mahindra Rivenza Phase 1 bearing registration no. PR1261012602102 valid upto 30/12/31 and Mahindra Rivenza Phase 2 bearing registration no. PM1261012602103 valid upto 30/12/31, available on https://maharera.maharashtra.gov.in.'
      },
      {
        q: 'When is the possession expected for Mahindra Rivenza?',
        a: 'As per the MahaRERA registration of Mahindra Rivenza, Phase 1 and Phase 2 will be delivered upto 30/12/31.'
      },
      {
        q: 'What unique amenities does Mahindra Rivenza offer?',
        a: 'Mahindra Rivenza spans ~13.46 acres, with 9+ acres of landscaped greens and 2.65 lakh+ sq.ft of amenity spaces, including a ~44,000 sq.ft clubhouse. Key amenities include a swimming pool with sunken bar, multi-purpose court, yoga lawn, futsal court, glass roof library, and biophilic landscaped trails.'
      },
      {
        q: 'What is the starting price for flats at Mahindra Rivenza?',
        a: 'Prices at Mahindra Rivenza start from ₹1.85 Crore* for 2 BHK Premium residences, with pricing scaling up to ₹3.50 Crore* for 4 BHK Luxury estates.'
      },
      {
        q: 'Is there a show flat available at the sales gallery of Mahindra Rivenza?',
        a: 'Yes, the sales gallery at Mahindra Rivenza features a fully furnished 4 BHK show residence. You can visit the sales gallery on-site at Baner Annex, off Baner-Hinjawadi Road, Pune 412115.'
      },
      {
        q: 'Is Mahindra Rivenza an eco-friendly and green-certified development?',
        a: 'Yes, Mahindra Rivenza is a Pre-Certified IGBC Gold rated development and India-leading Net Zero Waste to Landfill development, featuring EV charging infrastructure in parking areas.'
      },
      {
        q: 'How is the connectivity from Mahindra Rivenza?',
        a: 'Strategically located in Baner Annex, Mahindra Rivenza offers seamless access to Hinjewadi IT parks, Global Capability Centres (GCCs), the Mumbai-Pune Expressway, and upcoming Metro Line 3.'
      },
      {
        q: 'Which banks provide pre-approved home loans for Mahindra Rivenza?',
        a: 'Mahindra Lifespaces has tied up with leading banks and financial institutions including SBI, HDFC, Canara Bank, ICICI Bank, and Bajaj Finance.'
      }
    ],
    image: 'http://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp'
  },
  {
    slug: 'mahindra-ivylush-kharadi-annex',
    name: 'Mahindra IvyLush',
    shortName: 'Mahindra IvyLush',
    location: 'Kharadi Annex (Wagholi), East Pune',
    microMarket: 'East Pune — Kharadi Annex',
    status: 'Under Construction',
    landArea: '5.4 Acres',
    typologies: ['2 BHK Spacia', '2 BHK Grande', '3 BHK Spacia', '3 BHK Grande', '4 BHK Grande'],
    unitsCount: '5 High-Rise Towers (Towers A, B, C, D & E)',
    deliveryYear: 'Towers A/B: March 2030 | Towers C/D/E: August 2030',
    reraNumber: 'P52100055146 / P52100055147',
    greenRating: 'IGBC Pre-Certified Platinum',
    h1: 'Mahindra IvyLush Kharadi Annex: Dual Clubhouse Luxury East Pune',
    metaTitle: 'Mahindra IvyLush Kharadi | 2 3 4 BHK Flats East Pune | MahaRERA',
    metaDescription: 'Mahindra IvyLush in Kharadi Annex offers dual 22,000 sq.ft. clubhouses, camping machan, 5 towers, and 5.4-acre biophilic master plan. 10 mins to EON IT Park & WTC Pune.',
    heroTagline: '5.4 Acres · Dual 22,000 Sq.Ft. Clubhouses · 10-Min EON IT Park · MahaRERA Registered',
    distanceFromMahalunge: '24.5 km via Kharadi Bypass',
    transitHighlight: '10 mins to EON Free Zone, WTC Pune, Viman Nagar, Kalyani Nagar',
    keySpecs: [
      { label: 'Land Area', value: '5.4 Acres (5 Towers)' },
      { label: 'Configuration', value: '2, 3 & 4 BHK Residences' },
      { label: 'MahaRERA', value: 'P52100055146 / P52100055147' },
      { label: 'Green Rating', value: 'IGBC Pre-Certified Platinum' },
      { label: 'Delivery', value: 'March–August 2030' },
      { label: 'Clubhouse', value: 'Dual Grand (22,000 Sq.Ft.)' }
    ],
    amenityHighlights: [
      'Dual Grand Clubhouses totalling 22,000 sq.ft. — first in East Pune',
      'Camping Machan, Trampoline Park & Adventure Play Zones',
      'Infinity Pool, Gymnasium & Yoga Pavilion',
      'Multipurpose Sports Courts (Basketball, Badminton, Cricket Pitch)',
      'Themed Children\'s Play Zones & Sensory Gardens',
      'EV Charging Infrastructure & Smart Home Automation'
    ],
    investmentCase: 'Kharadi Annex is one of Pune\'s fastest appreciating micro-markets, driven by EON IT Park, WTC Pune, and Nagar Road commercial expansion. IvyLush\'s dual clubhouses and IGBC Platinum green rating position it for 15%–22% appreciation by possession in 2030.',
    rentalYield: '4.5% – 5.2%',
    faqs: [
      {
        q: 'Where is Mahindra IvyLush located?',
        a: 'Mahindra IvyLush is located in Kharadi Annex (near Wagholi), East Pune — approximately 10 minutes from EON Free Zone, World Trade Centre Pune, Viman Nagar, and Kalyani Nagar.'
      },
      {
        q: 'What makes Mahindra IvyLush unique in East Pune?',
        a: 'IvyLush features East Pune\'s first dual grand clubhouses with a combined 22,000 sq.ft. footprint, including a camping machan, adventure trails, and a zero-wasted-space carpet design across all 5 towers.'
      },
      {
        q: 'What is the MahaRERA number for Mahindra IvyLush?',
        a: 'Mahindra IvyLush is registered under MahaRERA with project numbers P52100055146 and P52100055147 for the respective tower phases.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-citadel-pimpri-metro',
    name: 'Mahindra Citadel',
    shortName: 'Mahindra Citadel',
    location: 'Vallabh Nagar, Pimpri, Pune 411018',
    microMarket: 'Pimpri-Chinchwad (PCMC)',
    status: 'Under Construction',
    landArea: '9.66 Acres',
    typologies: ['1 BHK', '2 BHK Premium', '3 BHK Viva & Ultra', '4 BHK Luxury'],
    unitsCount: '900+ Residences (Bastions I, J, K & Tower L)',
    deliveryYear: '2026–2027 (Phased Deliveries)',
    reraNumber: 'P52100047468 / P52100051877',
    greenRating: 'IGBC Pre-Certified Gold',
    h1: 'Mahindra Citadel Pimpri: Metro-Adjacent Luxury on Old Mumbai-Pune Highway',
    metaTitle: 'Mahindra Citadel Pimpri | Sant Tukaram Metro 2-Min Walk | PCMC Luxury Homes',
    metaDescription: 'Mahindra Citadel is directly adjacent to Sant Tukaram Nagar Metro Station, Pimpri. 9.66-acre luxury development with half-Olympic pool, cinema lounge & biometric automation.',
    heroTagline: '9.66 Acres · 2-Min Walk to Metro · Half-Olympic Pool · Old Mumbai-Pune Highway',
    distanceFromMahalunge: '14.2 km via Hinjewadi-Aundh-Pimpri',
    transitHighlight: '2-Min walk to Sant Tukaram Nagar Metro Station (Purple Line)',
    keySpecs: [
      { label: 'Land Area', value: '9.66 Acres (900+ Residences)' },
      { label: 'Configuration', value: '1, 2, 3 & 4 BHK Residences' },
      { label: 'MahaRERA', value: 'P52100047468 / P52100051877' },
      { label: 'Green Rating', value: 'IGBC Pre-Certified Gold' },
      { label: 'Metro Access', value: '2-Min Walk (Sant Tukaram Nagar)' },
      { label: 'Delivery', value: '2026–2027 (Phased)' }
    ],
    amenityHighlights: [
      'Half-Olympic Swimming Pool — PCMC\'s Most Impressive Aquatic Amenity',
      'Private Cinema Lounge & Entertainment Pavilion',
      'Biometric Smart Entry & Visitor Management System',
      'Sports Health Loop, Yoga Deck & Gymnasium',
      'Senior Citizen Wellness Garden & Children Play Court',
      'Sant Tukaram Nagar Metro — 2-Min Walking Distance'
    ],
    investmentCase: 'Mahindra Citadel is one of Maharashtra\'s only Grade-A residential developments directly adjacent to an operational metro station. Metro-adjacency premiums in Pune average 18%–25% over non-metro locations, making Citadel a powerful rental income and capital appreciation play.',
    rentalYield: '4.9% – 5.6%',
    faqs: [
      {
        q: 'How far is Mahindra Citadel from Sant Tukaram Nagar Metro Station?',
        a: 'Mahindra Citadel is directly adjacent to Sant Tukaram Nagar Metro Station on the Old Mumbai-Pune Highway in Pimpri — residents can reach the station platform in a 2-minute walk from their lobby.'
      },
      {
        q: 'What configurations are available at Mahindra Citadel?',
        a: 'Mahindra Citadel offers 1 BHK, 2 BHK Premium, 3 BHK Viva & Ultra, and 4 BHK Luxury configurations across Bastions I, J, K and Tower L.'
      },
      {
        q: 'When is Mahindra Citadel expected to be delivered?',
        a: 'Mahindra Citadel is delivering in phased stages between 2026 and 2027, with MahaRERA registered milestones under project numbers P52100047468 and P52100051877.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-happinest-tathawade',
    name: 'Mahindra Happinest Tathawade',
    shortName: 'Happinest Tathawade',
    location: 'Tathawade, West Pune 411033',
    microMarket: 'West Pune — Tathawade / Wakad',
    status: 'Under Construction',
    landArea: '7.2 Acres (4 Phases)',
    typologies: ['1 BHK Fusion Homes', '2 BHK Fusion Homes'],
    unitsCount: '900+ Fusion Residences (Phases 1–4)',
    deliveryYear: '2025–2026 (Phased)',
    reraNumber: 'P52100028049 / P52100030142',
    greenRating: 'IGBC Pre-Certified Platinum',
    h1: 'Mahindra Happinest Tathawade: India\'s Iconic 1.5-Acre Skywalk Community',
    metaTitle: 'Mahindra Happinest Tathawade | 1 & 2 BHK Fusion Homes | 1.5-Acre Skywalk',
    metaDescription: 'Mahindra Happinest Tathawade features India\'s first 1.5-acre elevated skywalk, biophilic micro-climate design, and rapid Hinjewadi access. Explore 1 & 2 BHK Fusion Home pricing.',
    heroTagline: '7.2 Acres · 1.5-Acre Iconic Skywalk · 7-Min Hinjewadi · Phases 1–4 Under Construction',
    distanceFromMahalunge: '7.8 km via Wakad-Hinjewadi link',
    transitHighlight: '4 mins to Mumbai-Pune Expressway, Wakad & Hinjewadi Phase 1',
    keySpecs: [
      { label: 'Land Area', value: '7.2 Acres (4 Phases)' },
      { label: 'Configuration', value: '1 BHK & 2 BHK Fusion Homes' },
      { label: 'MahaRERA', value: 'P52100028049 / P52100030142' },
      { label: 'Green Rating', value: 'IGBC Pre-Certified Platinum' },
      { label: 'Skywalk', value: '1.5-Acre Elevated (Iconic)' },
      { label: 'Delivery', value: '2025–2026 (Phased)' }
    ],
    amenityHighlights: [
      '1.5-Acre Elevated Skywalk — India\'s First in Residential Development',
      'Dual-Tier Aerial Clubhouse with Panoramic City Views',
      'Biophilic Micro-Climatic Architecture for 3°C Natural Cooling',
      'Dedicated Work-From-Home Pods & Co-Working Lounge',
      'Infinity Pool, Gymnasium & Aerial Yoga Deck',
      'D.Y. Patil University Campus & Wakad within 3 Minutes'
    ],
    investmentCase: 'Happinest Tathawade targets the high-velocity IT workforce rental market, with Phases 1 & 2 delivered and Phase 4 under active construction. Its unique 1.5-acre skywalk and sub-₹1-Crore entry point make it a top rental income asset for first-time investors.',
    rentalYield: '5.0% – 5.8%',
    faqs: [
      {
        q: 'What is unique about Mahindra Happinest Tathawade?',
        a: 'Happinest Tathawade is home to India\'s first 1.5-acre elevated skywalk connecting multiple residential towers — a signature engineering feat offering panoramic skyline fitness tracks unavailable in any competing Tathawade or Wakad development.'
      },
      {
        q: 'What is the price range for Mahindra Happinest Tathawade?',
        a: 'Mahindra Happinest Tathawade is positioned as an affordable luxury development targeting prices below ₹1 Crore for 1 BHK Fusion Homes. Official pricing varies by phase and is available on request.'
      },
      {
        q: 'How far is Happinest Tathawade from Hinjewadi Phase 1?',
        a: 'Happinest Tathawade is approximately 7–10 minutes from Hinjewadi Phase 1 IT Park via Bhumkar Chowk, making it a preferred residential choice for Infosys, Wipro, and Cognizant employees.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-antheia-pimpri',
    name: 'Mahindra Antheia',
    shortName: 'Mahindra Antheia',
    location: 'Nehru Nagar Rd, Pimpri Colony, Pune 411018',
    microMarket: 'Pimpri-Chinchwad (PCMC)',
    status: 'Delivered',
    landArea: '16 Acres',
    typologies: ['1 BHK', '2 BHK', '2.5 BHK', '3 BHK', '4 BHK'],
    unitsCount: '1,000+ Delivered Homes',
    deliveryYear: 'Successfully Delivered with OC',
    greenRating: 'IGBC Certified Green Community',
    h1: 'Mahindra Antheia Pimpri: Delivered 16-Acre Integrated Community',
    metaTitle: 'Mahindra Antheia Pimpri | Delivered Community | Resale & Rental Flats',
    metaDescription: 'Mahindra Antheia is Pimpri-Chinchwad\'s landmark 16-acre delivered green community by Mahindra Lifespaces. Explore resale pricing, rental yields, and resident testimonials.',
    heroTagline: '16 Acres · 1,000+ Delivered Homes · Full OC Received · IGBC Green Certified',
    distanceFromMahalunge: '15.5 km',
    transitHighlight: 'Nehru Nagar Road — close to Pimpri Station, industrial belt, and PCMC commercial hubs',
    keySpecs: [
      { label: 'Land Area', value: '16 Acres (Integrated Community)' },
      { label: 'Configuration', value: '1, 2, 2.5, 3 & 4 BHK' },
      { label: 'Status', value: 'Fully Delivered (OC Received)' },
      { label: 'Green Rating', value: 'IGBC Certified Green' },
      { label: 'Units', value: '1,000+ Delivered Homes' },
      { label: 'Contact', value: '+91 1800 267 1010' }
    ],
    amenityHighlights: [
      'Extensive Sports Pavilion with Cricket, Football & Basketball Courts',
      'Senior Citizen Wellness Enclave & Amphitheatre',
      'Landscaped Central Promenades & Jogging Tracks',
      'Community Clubhouse with Swimming Pool & Gymnasium',
      'Children\'s Dedicated Play Zones & Sensory Gardens',
      'IGBC-Certified Green Community with Mature Tree Canopy'
    ],
    investmentCase: 'As a fully delivered Mahindra Lifespaces community with Occupancy Certificate, Antheia offers immediate rental income with zero construction risk. Secondary market pricing and rental yields of 4.2%–4.8% make it an excellent portfolio addition for conservative investors.',
    rentalYield: '4.2% – 4.8%',
    faqs: [
      {
        q: 'Is Mahindra Antheia fully delivered?',
        a: 'Yes. Mahindra Antheia is a fully delivered residential community with Occupancy Certificate (OC) issued, making it available for immediate possession, resale, or rental leasing.'
      },
      {
        q: 'What are typical resale prices at Mahindra Antheia?',
        a: 'Resale pricing at Mahindra Antheia varies based on configuration and floor level. 2 BHK units typically trade in the ₹75 Lakh – ₹1.05 Crore range in the current secondary market.'
      },
      {
        q: 'What is the rental yield at Mahindra Antheia Pimpri?',
        a: 'Mahindra Antheia generates consistent rental yields of 4.2%–4.8% driven by proximity to PCMC industrial parks, Pimpri railway station, and established social infrastructure in Nehru Nagar.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-centralis-pimpri',
    name: 'Mahindra Centralis',
    shortName: 'Mahindra Centralis',
    location: 'CTS 57/58/A, Nehru Nagar Rd, Pimpri Chowk, Pune 411018',
    microMarket: 'Pimpri-Chinchwad (PCMC)',
    status: 'Delivered',
    landArea: '4.5 Acres (4 High-Rise Towers)',
    typologies: ['1 BHK Urban', '2 BHK Premium Residences'],
    unitsCount: '400+ Delivered Residences',
    deliveryYear: '2022–2023 (Delivered)',
    reraNumber: 'P52100019775',
    greenRating: 'IGBC Certified Gold',
    h1: 'Mahindra Centralis Pimpri: Delivered High-Rise Urban Enclave',
    metaTitle: 'Mahindra Centralis Pimpri | Delivered 1 & 2 BHK | Resale & Rental',
    metaDescription: 'Mahindra Centralis is a delivered 4-tower high-rise urban enclave in Pimpri Chowk with IGBC Gold certification. Explore resale pricing, rental yield, and Mahindra Lifespaces heritage.',
    heroTagline: '4.5 Acres · 4 High-Rise Towers · IGBC Gold · MahaRERA OC Delivered 2022–2023',
    distanceFromMahalunge: '14.8 km',
    transitHighlight: 'Pimpri Chowk — rapid access to Morewadi, Old Mumbai-Pune Highway & Pimpri Station',
    keySpecs: [
      { label: 'Land Area', value: '4.5 Acres (4 Towers)' },
      { label: 'Configuration', value: '1 BHK Urban & 2 BHK Premium' },
      { label: 'MahaRERA', value: 'P52100019775 (OC Received)' },
      { label: 'Green Rating', value: 'IGBC Gold Certified' },
      { label: 'Units', value: '400+ Delivered Residences' },
      { label: 'Delivery', value: '2022–2023 (Completed)' }
    ],
    amenityHighlights: [
      'Architecturally Sleek 4-Tower High-Rise Design with 80% Natural Daylighting',
      'Community Clubhouse with Gymnasium & Multi-Purpose Court',
      'Landscaped Podium Garden with Jogging Track',
      'Children\'s Play Area & Senior Citizen Corner',
      'EV Charging Points & Covered Car Parking',
      'IGBC Gold Certified with Low Energy Operational Footprint'
    ],
    investmentCase: 'Centralis is a delivered MahaRERA OC asset offering zero construction risk with immediate rental income from PCMC\'s industrial and commercial workforce. Its transit-oriented location and IGBC Gold certification ensure sustained demand.',
    rentalYield: '4.4% – 5.0%',
    faqs: [
      {
        q: 'What is MahaRERA number for Mahindra Centralis?',
        a: 'Mahindra Centralis is registered under MahaRERA project number P52100019775 with full Occupancy Certificate (OC) issued, confirming legal completion of all 4 residential towers.'
      },
      {
        q: 'Is Mahindra Centralis a good rental investment?',
        a: 'Yes. Centralis\'s location at Pimpri Chowk near the Old Mumbai-Pune Highway and PCMC industrial belt generates consistent 4.4%–5.0% rental yields with near-zero vacancy rates.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-nestalgia-pimpri',
    name: 'Mahindra Nestalgia',
    shortName: 'Mahindra Nestalgia',
    location: 'Bhosari Road, Nehru Nagar, Pimpri Colony, Pune 411018',
    microMarket: 'Pimpri-Chinchwad (PCMC)',
    status: 'Delivered',
    landArea: 'Biophilic Residential Enclave',
    typologies: ['2 BHK', '3 BHK Biophilic Residences'],
    unitsCount: 'Lifestyle Homes with Heritage Nostalgia Theme',
    deliveryYear: 'Successfully Delivered',
    greenRating: 'IGBC Certified Green Community',
    h1: 'Mahindra Nestalgia Pimpri: Biophilic Heritage Residential Community',
    metaTitle: 'Mahindra Nestalgia Pimpri | Delivered 2 & 3 BHK | IGBC Green Community',
    metaDescription: 'Mahindra Nestalgia is a delivered biophilic residential community in Nehru Nagar, Pimpri. Nostalgia-themed sensory gardens, native flora, and barefoot pathways for conscious living.',
    heroTagline: 'Delivered Community · Biophilic Design · Native Flora Gardens · IGBC Green Certified',
    distanceFromMahalunge: '15.2 km',
    transitHighlight: 'Bhosari Road, Nehru Nagar — close to Pimpri Colony, PCMC industrial and commercial hubs',
    keySpecs: [
      { label: 'Location', value: 'Bhosari Road, Nehru Nagar, Pimpri' },
      { label: 'Configuration', value: '2 BHK & 3 BHK Residences' },
      { label: 'Status', value: 'Fully Delivered' },
      { label: 'Green Rating', value: 'IGBC Certified Green' },
      { label: 'Contact', value: '+91 22 6253 4658' },
      { label: 'Theme', value: 'Biophilic Heritage Nostalgia' }
    ],
    amenityHighlights: [
      'Nostalgia-Themed Native Flora Sensory Gardens',
      'Barefoot Healing Pathways & Biophilic Green Canopy',
      'Community Clubhouse & Recreational Amenities',
      'Children\'s Heritage Play Zones & Outdoor Activity Courts',
      'Senior Citizen Wellness & Social Gathering Spaces',
      'IGBC Green Certified with Mature Tree Corridors'
    ],
    investmentCase: 'Nestalgia appeals to buyers seeking a delivered community with unique biophilic character in PCMC. Its distinctive heritage-nostalgia design and mature community ambiance command a lifestyle premium over standard PCMC developments.',
    rentalYield: '4.0% – 4.6%',
    faqs: [
      {
        q: 'What is the concept behind Mahindra Nestalgia?',
        a: 'Mahindra Nestalgia is designed around childhood nostalgia themes — incorporating native flora sensory gardens, barefoot healing pathways, heritage play zones, and open community courtyards that evoke a slower, more connected pace of living.'
      },
      {
        q: 'Is Mahindra Nestalgia fully delivered?',
        a: 'Yes. Mahindra Nestalgia is a fully delivered residential community in Nehru Nagar, Pimpri Colony, available for immediate resale, rental, or secondary market investment.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-lartista-sopan-baug',
    name: 'Mahindra L\'Artista',
    shortName: 'Mahindra L\'Artista',
    location: 'Empress Court, Sopan Baug Road, Ghorpadi, Pune 411001',
    microMarket: 'Central Pune (Ghorpadi / Sopan Baug)',
    status: 'Delivered',
    landArea: 'Boutique Ultra-Luxury Landmark',
    typologies: ['3 BHK Bespoke Suites', '4 BHK Presidential Residences'],
    unitsCount: 'Exclusive Luxury Boutique Enclave',
    deliveryYear: 'Delivered Heritage Luxury',
    greenRating: 'Certified High-End Sustainable Architecture',
    h1: 'Mahindra L\'Artista Sopan Baug: Ultra-Luxury Art-Inspired Residences',
    metaTitle: 'Mahindra L\'Artista Ghorpadi Pune | Ultra-Luxury 3 & 4 BHK Sopan Baug',
    metaDescription: 'Mahindra L\'Artista at Sopan Baug, Ghorpadi offers bespoke ultra-luxury 3 & 4 BHK residences with private elevators, artisanal finishes, and direct Koregaon Park access.',
    heroTagline: 'Ultra-Luxury · Art-Inspired Architecture · Private Elevators · Koregaon Park 5-Min',
    distanceFromMahalunge: '22 km',
    transitHighlight: 'Direct access to Koregaon Park, Kalyani Nagar, MG Road, and Pune Cantonment',
    keySpecs: [
      { label: 'Location', value: 'Empress Court, Sopan Baug, Ghorpadi' },
      { label: 'Configuration', value: '3 BHK Bespoke & 4 BHK Presidential' },
      { label: 'Status', value: 'Delivered Ultra-Luxury' },
      { label: 'USP', value: 'Private Elevators & Artisanal Interiors' },
      { label: 'Proximity', value: '5-Min to Koregaon Park' },
      { label: 'Target', value: 'High-Net-Worth Connoisseurs' }
    ],
    amenityHighlights: [
      'Private Residential Elevators for Each Unit',
      'Artisanal European-Inspired Interior Finishes',
      'Curated Sculpture Garden & Art-Inspired Common Spaces',
      'Concierge-Level Security & Resident Services',
      'Lush Tree Canopy & Manicured Private Grounds',
      '5-Minute Drive to Koregaon Park\'s Premium Dining & Social Scene'
    ],
    investmentCase: 'L\'Artista represents Mahindra Lifespaces\' foray into ultra-luxury boutique residential real estate in central Pune\'s most prestigious Sopan Baug address. Its bespoke craftsmanship and Koregaon Park proximity ensure exceptional capital preservation and high-net-worth rental demand.',
    rentalYield: '3.5% – 4.2% (Ultra-Luxury Premium)',
    faqs: [
      {
        q: 'Who is Mahindra L\'Artista designed for?',
        a: 'Mahindra L\'Artista is crafted for ultra-high-net-worth buyers and connoisseurs seeking bespoke artisanal finishes, private residential elevators, and an exclusive central Pune address in Sopan Baug, Ghorpadi.'
      },
      {
        q: 'How far is Mahindra L\'Artista from Koregaon Park?',
        a: 'Mahindra L\'Artista on Sopan Baug Road, Ghorpadi is just 5 minutes from Koregaon Park\'s premium F&B, social clubs, and international schools.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'mahindra-woods-pimpri',
    name: 'Mahindra Woods',
    shortName: 'Mahindra Woods',
    location: 'Pimpri, Pune 411018',
    microMarket: 'Pimpri-Chinchwad (PCMC)',
    status: 'Delivered',
    landArea: 'Boutique Residential Heritage Enclave',
    typologies: ['2 BHK', '3 BHK Residences'],
    unitsCount: '250+ Delivered Homes',
    deliveryYear: 'Successfully Delivered Heritage Community',
    greenRating: 'IGBC Certified Green Living',
    h1: 'Mahindra Woods Pimpri: Delivered Heritage Community with Mature Tree Cover',
    metaTitle: 'Mahindra Woods Pimpri | Delivered 2 & 3 BHK | Resale & Rental PCMC',
    metaDescription: 'Mahindra Woods in Pimpri is an established delivered residential heritage community by Mahindra Lifespaces with mature tree-lined pathways and strong PCMC resale demand.',
    heroTagline: 'Delivered Heritage Community · 250+ Homes · IGBC Green · Mature Tree-Lined Pathways',
    distanceFromMahalunge: '15.1 km',
    transitHighlight: 'Pimpri industrial and residential belt with access to PCMC commercial hubs',
    keySpecs: [
      { label: 'Location', value: 'Pimpri, Pune 411018' },
      { label: 'Configuration', value: '2 BHK & 3 BHK Residences' },
      { label: 'Status', value: 'Fully Delivered' },
      { label: 'Green Rating', value: 'IGBC Certified Green' },
      { label: 'Units', value: '250+ Delivered Homes' },
      { label: 'Community Age', value: 'Established Heritage Community' }
    ],
    amenityHighlights: [
      'Mature Tree-Lined Pathways & Heritage Green Corridors',
      'Community Clubhouse, Gymnasium & Swimming Pool',
      'Children\'s Play Area & Outdoor Sports Courts',
      'Senior Citizen Relaxation Garden',
      'Established Social Infrastructure & Cohesive Resident Community',
      'IGBC Green Certified with Sustainable Operations'
    ],
    investmentCase: 'Mahindra Woods provides immediate rental income with zero construction risk. Its established community reputation, mature green infrastructure, and PCMC industrial belt proximity create consistent demand from corporate and family tenants.',
    rentalYield: '4.0% – 4.5%',
    faqs: [
      {
        q: 'Is Mahindra Woods Pimpri fully delivered?',
        a: 'Yes. Mahindra Woods is a fully delivered and established residential community in Pimpri with over 250 homes, mature landscaping, and an active resident welfare association.'
      },
      {
        q: 'What is the resale value of Mahindra Woods Pimpri?',
        a: 'Resale values at Mahindra Woods reflect Pimpri\'s steady appreciation trajectory, typically trading at ₹65–₹90 Lakh for 2 BHK configurations depending on floor and facing.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  }
];
