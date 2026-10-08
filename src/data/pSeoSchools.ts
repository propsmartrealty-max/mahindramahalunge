export interface SchoolItem {
  slug: string;
  name: string;
  shortName: string;
  curriculum: string;
  distanceKm: string;
  driveTime: string;
  busFacility: string;
  gradeLevels: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroHighlight: string;
  parentAdvantage: string;
  recommendedConfig: string;
  communityAmenitiesForKids: string;
  routeOverview: string;
  faqs: { q: string; a: string }[];
}

export const schoolData: SchoolItem[] = [
  {
    slug: 'flats-near-vibgyor-high-balewadi',
    name: 'VIBGYOR High School (Balewadi)',
    shortName: 'VIBGYOR Balewadi',
    curriculum: 'ICSE & Cambridge (IGCSE)',
    distanceKm: '4.2 km',
    driveTime: '8 - 10 mins',
    busFacility: 'Dedicated school bus stop directly at Mahindra Rivenza main security gate',
    gradeLevels: 'Pre-Primary to Grade 12',
    h1: 'Flats Near VIBGYOR High School Balewadi: Mahindra Rivenza Family Homes',
    metaTitle: 'Flats Near VIBGYOR High School Balewadi | 2 & 3 BHK Mahindra Rivenza',
    metaDescription: 'Luxury family residences near VIBGYOR High School Balewadi. 8 mins commute, safe school bus boarding, 9+ acres biophilic greens, starting ₹90 Lakhs*.',
    heroHighlight: '8-Minute Safe Commute via Balewadi Link Road',
    parentAdvantage: 'Kids spend under 10 minutes in school transit, giving them more hours for sports, music, and balanced outdoor play.',
    recommendedConfig: '3 BHK Deluxe & 3 BHK Ultra Luxury with dedicated kids study bedrooms',
    communityAmenitiesForKids: 'Biophilic kids play parks, floodlit futsal arena, children pool with safety ledge, glass-roof library, and music room.',
    routeOverview: 'Short westbound drive across the Balewadi-Mahalunge bridge directly reaching VIBGYOR campus.',
    faqs: [
      {
        q: 'How far is VIBGYOR High Balewadi from Mahindra Rivenza?',
        a: 'The school is located just 4.2 km away, taking around 8 to 10 minutes by car or dedicated school bus.'
      },
      {
        q: 'Are there dedicated children amenities at Mahindra Rivenza?',
        a: 'Yes, the 13.46-acre master community includes children play gardens, indoor games lounge, multipurpose championship court, and reading hubs.'
      }
    ]
  },
  {
    slug: 'flats-near-the-orchid-school-baner',
    name: 'The Orchid School (Baner)',
    shortName: 'The Orchid School',
    curriculum: 'CBSE Curriculum',
    distanceKm: '4.8 km',
    driveTime: '10 - 12 mins',
    busFacility: 'Comprehensive bus routing covering Baner Annex & Mahalunge corridor',
    gradeLevels: 'Kindergarten to Grade 12',
    h1: 'Flats Near The Orchid School Baner: Luxury Living at Mahindra Rivenza',
    metaTitle: 'Flats Near The Orchid School Baner Pune | Mahindra Rivenza Residences',
    metaDescription: 'Find premium family apartments near The Orchid School Baner. 10 mins commute, ~44,000 sq.ft dual clubhouse, 9+ acres landscaped gardens.',
    heroHighlight: '10-Minute School Run to Central Baner',
    parentAdvantage: 'Rapid morning school drop-off followed by quick connection to Hinjewadi tech parks or Baner offices.',
    recommendedConfig: '3 BHK Deluxe & 4 BHK Sky Estates',
    communityAmenitiesForKids: 'Skating zone, co-study pods, cricket pitch nets, and Olympic-length swimming facilities.',
    routeOverview: 'Direct eastbound commute along Baner-Mahalunge arterial road.',
    faqs: [
      {
        q: 'Why do parents choose Mahindra Rivenza near The Orchid School?',
        a: 'The project offers peaceful green living away from city congestion while keeping top schools like The Orchid School within a 10-minute radius.'
      }
    ]
  },
  {
    slug: 'flats-near-mercedes-benz-international-school',
    name: 'Mercedes-Benz International School (MBIS Hinjewadi)',
    shortName: 'MBIS Hinjewadi',
    curriculum: 'International Baccalaureate (IB Primary, MYP & DP)',
    distanceKm: '5.2 km',
    driveTime: '10 - 12 mins',
    busFacility: 'Doorstep AC coach transit with live GPS tracking',
    gradeLevels: 'Early Years to Grade 12 (IB Diploma)',
    h1: 'Flats Near Mercedes-Benz International School: Mahindra Rivenza',
    metaTitle: 'Flats Near Mercedes-Benz International School Pune | Mahindra Rivenza',
    metaDescription: 'Expat & NRI family residences near MBIS Hinjewadi. 10 mins drive, world-class sports amenities, IGBC Gold Net Zero waste community.',
    heroHighlight: '10-Minute Transit to Leading IB World School',
    parentAdvantage: 'Ideal for global tech families and NRI returning executives seeking international IB education.',
    recommendedConfig: '3 & 4 BHK Luxury Residences with Sahyadri views',
    communityAmenitiesForKids: 'Tennis court, futsal arena, stargazing deck, and organic gardening plots.',
    routeOverview: 'Quick connection via the PMRDA DP corridor directly into Hinjewadi Phase 1.',
    faqs: [
      {
        q: 'Is Mahindra Rivenza suitable for expat families whose children attend MBIS?',
        a: 'Yes, Mahindra Rivenza provides high-security gated living, international construction standards, and a 10-minute commute to MBIS.'
      }
    ]
  },
  {
    slug: 'flats-near-blue-ridge-public-school-hinjewadi',
    name: 'Blue Ridge Public School (Hinjewadi Phase 1)',
    shortName: 'Blue Ridge Public School',
    curriculum: 'ICSE Board',
    distanceKm: '3.6 km',
    driveTime: '7 - 9 mins',
    busFacility: 'Short 7-min school bus commute',
    gradeLevels: 'Nursery to Grade 12',
    h1: 'Flats Near Blue Ridge Public School Hinjewadi: Mahindra Rivenza',
    metaTitle: 'Flats Near Blue Ridge Public School Hinjewadi | Mahindra Rivenza',
    metaDescription: 'Explore family apartments near Blue Ridge Public School Hinjewadi. 7 mins away, ~44,000 sq.ft dual clubhouse, starting ₹90 Lakhs*.',
    heroHighlight: '7-Minute Commute via Mahalunge-Hinjewadi Bridge',
    parentAdvantage: 'Minimal morning commute stress with quick access to both school and workplace.',
    recommendedConfig: '2 BHK Premium & 3 BHK Comfort Residences',
    communityAmenitiesForKids: 'Toddler splash pool, multi-sport courts, open lawns, and board games parlor.',
    routeOverview: 'Swift drive across the proposed PMRDA bridge into Hinjewadi Phase 1.',
    faqs: [
      {
        q: 'How long does the school bus take to Blue Ridge Public School?',
        a: 'The journey takes less than 10 minutes from Mahindra Rivenza.'
      }
    ]
  },
  {
    slug: 'flats-near-bharati-vidyapeeth-balewadi',
    name: 'Bharati Vidyapeeth English Medium School (Balewadi)',
    shortName: 'Bharati Vidyapeeth Balewadi',
    curriculum: 'CBSE Curriculum',
    distanceKm: '4.6 km',
    driveTime: '9 - 11 mins',
    busFacility: 'Full route bus connectivity across Mahalunge and Balewadi',
    gradeLevels: 'Primary to Senior Secondary',
    h1: 'Flats Near Bharati Vidyapeeth Balewadi: Mahindra Rivenza Homes',
    metaTitle: 'Flats Near Bharati Vidyapeeth Balewadi Pune | Mahindra Rivenza',
    metaDescription: 'Luxury 2 & 3 BHK residences near Bharati Vidyapeeth Balewadi. 9 mins drive, IGBC Gold Pre-Certified community, starting ₹90 Lakhs*.',
    heroHighlight: '9-Minute Commute to Balewadi Academic Hub',
    parentAdvantage: 'Trusted academic institution within easy reach of a peaceful, nature-integrated home.',
    recommendedConfig: '2 & 3 BHK Family Homes',
    communityAmenitiesForKids: 'Amphitheatre, kids climbing wall, reading room, and sports training turf.',
    routeOverview: 'Short drive via Balewadi Link corridor.',
    faqs: [
      {
        q: 'What is the travel distance to Bharati Vidyapeeth Balewadi?',
        a: 'The distance is 4.6 km, easily covered in 9 to 11 minutes.'
      }
    ]
  },
  {
    slug: 'flats-near-indira-college-wakad',
    name: 'Indira Group of Institutes (Wakad / Tathawade)',
    shortName: 'Indira Institutes',
    curriculum: 'Higher Education & Management / Engineering',
    distanceKm: '5.5 km',
    driveTime: '11 - 13 mins',
    busFacility: 'Regular city transit and institutional shuttles',
    gradeLevels: 'Undergraduate & Postgraduate Programs',
    h1: 'Flats Near Indira College Wakad: Residences at Mahindra Rivenza',
    metaTitle: 'Flats Near Indira College Wakad Pune | Mahindra Rivenza',
    metaDescription: 'Premium apartments near Indira Group of Institutes Wakad. 11 mins commute, high rental returns, dual clubhouse, starting ₹90 Lakhs*.',
    heroHighlight: '11-Minute Transit to Wakad Higher Education Belt',
    parentAdvantage: 'Excellent choice for families with university-going students and faculty members.',
    recommendedConfig: '2 BHK Optima & 3 BHK Luxury Residences',
    communityAmenitiesForKids: 'High-speed Wi-Fi co-working pods, seminar library, and quiet study alcoves.',
    routeOverview: 'Drive via Tathawade-Mahalunge link road.',
    faqs: [
      {
        q: 'Why invest near Indira College Wakad?',
        a: 'High rental demand from academic faculty and corporate trainees ensures continuous rental income.'
      }
    ]
  },
  {
    slug: 'flats-near-symbiosis-hinjewadi',
    name: 'Symbiosis Infotech Campus (SIIB & SCIT Hinjewadi)',
    shortName: 'Symbiosis Hinjewadi',
    curriculum: 'Premier Business & IT Management University',
    distanceKm: '4.9 km',
    driveTime: '10 - 12 mins',
    busFacility: 'Shuttle routes across Hinjewadi and Baner Annex',
    gradeLevels: 'MBA & Executive Programs',
    h1: 'Flats Near Symbiosis Hinjewadi (SIIB & SCIT): Mahindra Rivenza',
    metaTitle: 'Flats Near Symbiosis Hinjewadi Pune | Luxury Homes Mahindra Rivenza',
    metaDescription: 'Explore premium residences near Symbiosis Hinjewadi campus. 10 mins away, ~44,000 sq.ft dual clubhouse, 9+ acres greens, high rental yields.',
    heroHighlight: '10-Minute Commute to Symbiosis Campus',
    parentAdvantage: 'Prestigious university proximity with strong capital appreciation upside.',
    recommendedConfig: '2 & 3 BHK Residences for Faculty & Corporate Scholars',
    communityAmenitiesForKids: 'Dual clubhouse with co-working lounges, sunken aqua bar pool, and sports arena.',
    routeOverview: 'Direct connection via Hinjewadi Phase 1 arterial spine.',
    faqs: [
      {
        q: 'What is the commute time to Symbiosis Infotech Campus?',
        a: 'Around 10 to 12 minutes under normal traffic conditions.'
      }
    ]
  },
  {
    slug: 'flats-near-alard-public-school-hinjewadi',
    name: 'Alard Public School & College (Hinjewadi)',
    shortName: 'Alard Public School',
    curriculum: 'CBSE Curriculum',
    distanceKm: '4.1 km',
    driveTime: '8 - 10 mins',
    busFacility: 'Regular school bus service to Mahalunge',
    gradeLevels: 'Primary to Junior College',
    h1: 'Flats Near Alard Public School Hinjewadi: Mahindra Rivenza Residences',
    metaTitle: 'Flats Near Alard Public School Hinjewadi | Mahindra Rivenza',
    metaDescription: 'Find family homes near Alard Public School Hinjewadi. 8 mins commute, 13.46 acres master community, 9+ acres greens, starting ₹90 Lakhs*.',
    heroHighlight: '8-Minute Safe Ride to School',
    parentAdvantage: 'Short transit times reduce morning school-run stress for working parents.',
    recommendedConfig: '2 & 3 BHK Family Homes',
    communityAmenitiesForKids: 'Children adventure zone, skating rink, and open meadows.',
    routeOverview: 'Drive west via Nande-Mahalunge link.',
    faqs: [
      {
        q: 'How far is Alard Public School from Mahindra Rivenza?',
        a: 'Just 4.1 km away, reaching in about 8 minutes.'
      }
    ]
  }
];
