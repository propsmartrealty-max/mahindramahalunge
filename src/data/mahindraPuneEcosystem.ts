export interface MahindraPuneProject {
  id: string;
  slug: string;
  name: string;
  location: string;
  microMarket: 'West Pune' | 'Pimpri-Chinchwad' | 'Nande-Mahalunge Corridor' | 'East Pune (Kharadi Annex)' | 'Central Pune (Ghorpadi / Sopan Baug)' | 'Baner Annex / Mahalunge';
  category: 'Upcoming / Future Development' | 'Current Sales Inventory' | 'Delivered Community';
  status: 'Pre-Launch / Master Planning' | 'Under Construction' | 'Delivered Landmark' | 'Officially Launched / Priority Bookings';
  landArea: string;
  typologies: string[];
  unitsCount?: string;
  deliveryYear: string;
  reraStatus: string;
  reraNumber?: string;
  greenRating: string;
  summary: string;
  image: string;
  distanceFromMahalunge: string;
  transitHighlight?: string;
  address?: string;
  phone?: string;
}

export interface CorporateProfile {
  name: string;
  legalName: string;
  parentOrganization: string;
  parentValuation: string;
  cin: string;
  bseCode: string;
  nseSymbol: string;
  headquarters: string;
  puneRegionalOffice: string;
  panIndiaDeliveredSqFt: string;
  puneFootprintSqFt: string;
  residentFamilies: string;
  igbcLeadership: string;
  wikipediaUrl: string;
  wikidataId: string;
  website: string;
}

export const corporateProfile: CorporateProfile = {
  name: 'Mahindra Lifespaces',
  legalName: 'Mahindra Lifespace Developers Limited',
  parentOrganization: 'Mahindra & Mahindra Ltd. (Mahindra Group)',
  parentValuation: 'USD 20+ Billion Conglomerate',
  cin: 'L45200MH1999PLC118949',
  bseCode: '532313',
  nseSymbol: 'MAHLIFE',
  headquarters: 'Mahindra Towers, 5th Floor, Worli, Mumbai, Maharashtra 400018',
  puneRegionalOffice: 'ICC Devi Gaurav Tech Park, Old Mumbai-Pune Highway, Pimpri, Pune 411018',
  panIndiaDeliveredSqFt: '55.5 Million+ Sq.Ft.',
  puneFootprintSqFt: '14 Million+ Sq.Ft. Portfolio Across Landmark Pune Hubs',
  residentFamilies: '21,000+ Delighted Families Pan-India (7,500+ in Pune & PCMC)',
  igbcLeadership: '100% Green Certified Portfolio Commitment; India\'s First Net-Zero Energy Developer',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Mahindra_Lifespaces',
  wikidataId: 'Q6734139',
  website: 'https://www.mahindralifespaces.com/'
};

export const mahindraPuneProjects: MahindraPuneProject[] = [
  {
    id: 'mahindra-mahalunge',
    slug: 'mahindra-mahalunge-pune',
    name: 'Mahindra Rivenza (Baner Annex / Mahalunge)',
    location: 'Mahindra Rivenza, Baner Annex, off Baner-Hinjawadi Road, Pune, Maharashtra 412115',
    microMarket: 'Baner Annex / Mahalunge',
    category: 'Current Sales Inventory',
    status: 'Officially Launched / Priority Bookings',
    landArea: '~13.46 Acres (9+ Acres Green Spaces)',
    typologies: [
      '2 BHK Premium (688 sq.ft)',
      '2 BHK Luxury (785 – 855 sq.ft)',
      '3 BHK Deluxe (995 – 1,007 sq.ft)',
      '3 BHK Ultra Luxury (1,206 sq.ft)',
      '4 BHK Luxury (1,615 – 1,650 sq.ft)'
    ],
    unitsCount: 'Phased High-Rise Development with 4 BHK Show Residence Live',
    deliveryYear: 'December 2031 (Phase 1 & Phase 2 as per MahaRERA)',
    reraStatus: 'MahaRERA Registered (Phase 1: PR1261012602102 | Phase 2: PM1261012602103)',
    reraNumber: 'PR1261012602102 / PM1261012602103',
    greenRating: 'IGBC Pre-Certified Gold & Net Zero Waste to Landfill',
    summary: 'Officially launched: Mahindra Rivenza is a premier 13.46-acre master community by Mahindra Lifespace Developers Limited in Baner Annex / Mahalunge, Pune. Features 9+ acres of landscaped greens, 2.65 Lakh+ sq.ft of amenity spaces including a ~44,000 sq.ft grand clubhouse, swimming pool with sunken bar, yoga lawn, futsal court, and multi-purpose courts. Starting from ₹90 Lakhs*. Registered under MahaRERA: Phase 1 (PR1261012602102) & Phase 2 (PM1261012602103).',
    image: 'https://cms.mahindralifespaces.com/web/sites/default/files/styles/web_banner_webp/public/2026-10/jpeg-optimizer_Elevation%20Opt%20A..webp',
    distanceFromMahalunge: 'Subject Property (Baner Annex / Mahalunge Epicenter)',
    transitHighlight: 'Direct access to Baner-Hinjawadi Road, upcoming Metro Line 3, and Mumbai-Pune Expressway'
  },
  {
    id: 'mahindra-ivylush',
    slug: 'mahindra-ivylush-kharadi-annex',
    name: 'Mahindra IvyLush',
    location: 'Kharadi Annex / Wagholi, East Pune',
    microMarket: 'East Pune (Kharadi Annex)',
    category: 'Current Sales Inventory',
    status: 'Under Construction',
    landArea: '5.4 Acres Master Development',
    typologies: ['2 BHK Spacia', '2 BHK Grande', '3 BHK Spacia', '3 BHK Grande', '4 BHK Grande'],
    unitsCount: '5 High-Rise Towers (Towers A, B, C, D & E)',
    deliveryYear: 'March 2030 (Towers A/B) & August 2030 (Towers C/D/E)',
    reraStatus: 'MahaRERA Registered (Phased Tower Sanctions)',
    reraNumber: 'P52100055146 / P52100055147',
    greenRating: 'IGBC Pre-Certified Platinum with Dual Clubhouses (22,000 sq.ft.)',
    summary: '5.4-acre biophilic sanctuary in Kharadi Annex featuring dual clubhouses totaling 22,000 sq.ft., camping machan, adventure play zones, and minutes from EON Free Zone, World Trade Centre (WTC), Viman Nagar, and Kalyani Nagar.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '24.5 km via Pune-Ahmednagar Highway & Kharadi Bypass',
    transitHighlight: 'Near EON IT Park, WTC Pune, Viman Nagar, Kalyani Nagar & Magarpatta'
  },
  {
    id: 'mahindra-citadel',
    slug: 'mahindra-citadel-pimpri-metro',
    name: 'Mahindra Citadel',
    location: 'Vallabh Nagar, Pimpri, Pune 411018',
    microMarket: 'Pimpri-Chinchwad',
    category: 'Current Sales Inventory',
    status: 'Under Construction',
    landArea: '9.66 Acres Master Development',
    typologies: ['1 BHK', '2 BHK Premium', '3 BHK Viva & Ultra', '4 BHK Luxury'],
    unitsCount: '900+ Residences (Bastions I, J, K & Tower L)',
    deliveryYear: '2026 - 2027 (Phased Deliveries)',
    reraStatus: 'MahaRERA Registered',
    reraNumber: 'P52100047468 / P52100051877',
    greenRating: 'IGBC Pre-Certified Gold',
    summary: '9.66-acre luxury development in central Pimpri directly abutting Sant Tukaram Nagar Metro Station on the Old Mumbai-Pune Highway, featuring biometric automation, half-Olympic pool, cinema lounge, and sports health loop.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '14.2 km via Hinjewadi-Aundh-Pimpri corridor',
    transitHighlight: 'Direct adjacency to Sant Tukaram Nagar Metro Station & Old Mumbai-Pune Highway'
  },
  {
    id: 'mahindra-happinest-tathawade',
    slug: 'mahindra-happinest-tathawade',
    name: 'Mahindra Happinest Tathawade',
    location: 'Tathawade, West Pune 411033 (Near Wakad & Hinjewadi)',
    microMarket: 'West Pune',
    category: 'Current Sales Inventory',
    status: 'Under Construction',
    landArea: '7.2 Acres (Phase 4 Final Launch)',
    typologies: ['1 BHK Fusion', '2 BHK Fusion Homes'],
    unitsCount: '900+ Fusion Residences (Phase 1, 2, 3 & 4)',
    deliveryYear: '2025 - 2026 (Phased)',
    reraStatus: 'MahaRERA Registered',
    reraNumber: 'P52100028049 / P52100030142',
    greenRating: 'IGBC Pre-Certified Platinum',
    summary: 'India’s first fusion home development featuring an elevated 1.5-acre skywalk, dual-tier aerial clubhouses, and minutes from Hinjewadi IT Park, Wakad, and D.Y. Patil University campus.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '7.8 km via Wakad-Hinjewadi link',
    transitHighlight: '4 mins to Mumbai-Pune Expressway, Wakad & Hinjewadi Phase 1'
  },
  {
    id: 'mahindra-antheia',
    slug: 'mahindra-antheia-pimpri',
    name: 'Mahindra Antheia',
    location: 'Nehru Nagar Rd, Pimpri Colony, Pune 411018',
    microMarket: 'Pimpri-Chinchwad',
    category: 'Delivered Community',
    status: 'Delivered Landmark',
    landArea: '16 Acres Master Community',
    typologies: ['1 BHK', '2 BHK', '2.5 BHK', '3 BHK', '4 BHK'],
    unitsCount: '1,000+ Delivered Homes',
    deliveryYear: 'Successfully Delivered with OC',
    reraStatus: 'Completed with MahaRERA Occupancy Certificate (OC)',
    greenRating: 'IGBC Certified Green Community',
    summary: 'One of Pimpri-Chinchwad’s most celebrated integrated residential communities featuring extensive sports pavilions, senior citizen enclaves, and landscaped central promenades.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '15.5 km',
    transitHighlight: 'Nehru Nagar Road close to Pimpri Station & Industrial Belt',
    address: 'Mahindra Lifespace Developers Limited, CTS 6017, Nehru Nagar Rd, Pimpri Colony, Pune 411018',
    phone: '+9118002671010'
  },
  {
    id: 'mahindra-nestalgia',
    slug: 'mahindra-nestalgia-pimpri',
    name: 'Mahindra Nestalgia',
    location: 'Bhosari Road, Nehru Nagar, Pimpri Colony, Pune 411018',
    microMarket: 'Pimpri-Chinchwad',
    category: 'Delivered Community',
    status: 'Delivered Landmark',
    landArea: 'Celebrated Residential Enclave',
    typologies: ['2 BHK', '3 BHK Biophilic Residences'],
    unitsCount: 'Lifestyle Homes with Heritage Nostalgia Theme',
    deliveryYear: 'Successfully Delivered',
    reraStatus: 'Completed with MahaRERA Sanction',
    greenRating: 'IGBC Certified Green Community',
    summary: 'Biophilic residential community designed around childhood nostalgia themes, native flora sensory gardens, barefoot pathways, and modern leisure infrastructure in Nehru Nagar, Pimpri.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '15.2 km',
    transitHighlight: 'Bhosari Road, Nehru Nagar, Pimpri Colony',
    address: 'Bhosari Road, Nehru Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018',
    phone: '+912262534658'
  },
  {
    id: 'mahindra-centralis',
    slug: 'mahindra-centralis-pimpri',
    name: 'Mahindra Centralis',
    location: 'CTS 57/58/A, Nehru Nagar Rd, Pimpri Chowk, Pimpri Colony 411018',
    microMarket: 'Pimpri-Chinchwad',
    category: 'Delivered Community',
    status: 'Delivered Landmark',
    landArea: '4.5 Acres (4 High-Rise Towers)',
    typologies: ['1 BHK Urban', '2 BHK Premium Residences'],
    unitsCount: '400+ Delivered Residences',
    deliveryYear: 'Successfully Delivered (2022 - 2023)',
    reraStatus: 'Completed with MahaRERA OC (P52100019775)',
    reraNumber: 'P52100019775',
    greenRating: 'IGBC Certified Gold',
    summary: 'Architecturally sleek 4-tower high-rise enclave in central Pimpri Chowk engineered around transit-oriented urban lifestyle with low energy footprints and 80% natural daylighting.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '14.8 km',
    transitHighlight: 'Pimpri Chowk, Morewadi, Pimpri Colony with rapid highway access',
    address: 'CTS 57/58/A, Nehru Nagar Rd, Pimpri Chowk, Morewadi, Pimpri Colony, Pune 411018',
    phone: '+9118002671010'
  },
  {
    id: 'mahindra-lartista',
    slug: 'mahindra-lartista-sopan-baug',
    name: 'Mahindra L\'Artista',
    location: 'Empress Court, Sopan Baug Rd, Ghorpadi, Pune 411001',
    microMarket: 'Central Pune (Ghorpadi / Sopan Baug)',
    category: 'Delivered Community',
    status: 'Delivered Landmark',
    landArea: 'Bespoke Ultra-Luxury Boutique Landmark',
    typologies: ['3 BHK Bespoke', '4 BHK Presidential Suites'],
    unitsCount: 'Exclusive Luxury Enclave',
    deliveryYear: 'Delivered Heritage Luxury',
    reraStatus: 'Completed Luxury Development',
    greenRating: 'Certified High-End Sustainable Architecture',
    summary: 'Signature ultra-luxury residential enclave in elite Sopan Baug / Ghorpadi, Pune, crafted for high-net-worth connoisseurs with private elevators, artisanal finishes, and lush tree canopies.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '22.0 km',
    transitHighlight: 'Direct access to Koregaon Park, Kalyani Nagar, MG Road & Pune Camp',
    address: 'Empress Court, Survey no 67B 4A & 5A, Plot no 1, Sopan Baug Rd, Ghorpadi, Pune 411001'
  },
  {
    id: 'mahindra-woods',
    slug: 'mahindra-woods-pimpri',
    name: 'Mahindra Woods',
    location: 'Pimpri, Pune 411018',
    microMarket: 'Pimpri-Chinchwad',
    category: 'Delivered Community',
    status: 'Delivered Landmark',
    landArea: 'Boutique Residential Enclave',
    typologies: ['2 BHK', '3 BHK Residences'],
    unitsCount: '250+ Delivered Homes',
    deliveryYear: 'Successfully Delivered Heritage Community',
    reraStatus: 'Completed Heritage Development',
    greenRating: 'Certified Green Living',
    summary: 'An established residential landmark in Pune exemplifying Mahindra’s long-standing structural integrity, community living values, and mature tree-lined pathways.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    distanceFromMahalunge: '15.1 km',
    transitHighlight: 'Pimpri industrial and residential belt'
  }
];
