export interface FloorPlanUnit {
  slug: string;
  name: string;
  bhk: '2 BHK' | '3 BHK' | '4 BHK';
  variant: string;
  reraCarpetSqFt: number;
  aggregateUsableSqFt: number;
  balconySqFt: number;
  utilitySqFt: number;
  startingPriceInr: string;
  approxTotalCostInr: string;
  monthlyEmiApprox: string;
  vastuOrientation: string;
  sunlightExposure: string;
  views: string;
  targetBuyer: string;
  dimensions: {
    livingDining: string;
    masterBedroom: string;
    secondBedroom: string;
    thirdBedroom?: string;
    fourthBedroom?: string;
    kitchen: string;
    balconyDeck: string;
    masterBathroom: string;
    commonBathroom: string;
  };
  keyFeatures: string[];
  metaTitle: string;
  metaDescription: string;
}

export const floorPlansData: FloorPlanUnit[] = [
  {
    slug: 'mahindra-rivenza-2-bhk-premium',
    name: 'Mahindra Rivenza 2 BHK Premium',
    bhk: '2 BHK',
    variant: 'Premium (Entry Luxury)',
    reraCarpetSqFt: 635,
    aggregateUsableSqFt: 688,
    balconySqFt: 53,
    utilitySqFt: 25,
    startingPriceInr: '₹90 Lakhs*',
    approxTotalCostInr: '₹1.01 Crore*',
    monthlyEmiApprox: '₹70,400/mo*',
    vastuOrientation: 'East Facing Entrance (100% Vastu Compliant)',
    sunlightExposure: 'Morning Sunrise & East-West Cross Breeze',
    views: 'Panoramic Central Greens & River Vistas',
    targetBuyer: 'First-time tech professionals in Hinjewadi, young families, and high-yield investors',
    dimensions: {
      livingDining: '17\'6" × 11\'0"',
      masterBedroom: '12\'6" × 10\'6"',
      secondBedroom: '10\'6" × 10\'0"',
      kitchen: '9\'0" × 7\'6"',
      balconyDeck: '11\'0" × 4\'6"',
      masterBathroom: '7\'6" × 4\'6"',
      commonBathroom: '7\'0" × 4\'6"',
    },
    keyFeatures: [
      'Zero dead-space layout maximizing functional usable carpet',
      'Dedicated French acoustic sliding doors opening into scenic balcony deck',
      'Separate dry utility balcony with washing machine inlets',
      'Pre-certified IGBC Gold with Net Zero Waste engineering',
      'Concealed copper AC piping and FTTH high-speed optical fiber'
    ],
    metaTitle: 'Mahindra Rivenza 2 BHK Premium Floor Plan | 688 Sq.Ft Usable | ₹90 L*',
    metaDescription: 'Detailed floor plan, carpet dimensions & cost sheet for Mahindra Rivenza 2 BHK Premium (635 sq.ft RERA / 688 sq.ft aggregate) starting ₹90 Lakhs* in Baner Annex Pune.'
  },
  {
    slug: 'mahindra-rivenza-2-bhk-luxury-b',
    name: 'Mahindra Rivenza 2 BHK Luxury B',
    bhk: '2 BHK',
    variant: 'Luxury B (Extended Balcony)',
    reraCarpetSqFt: 668,
    aggregateUsableSqFt: 785,
    balconySqFt: 117,
    utilitySqFt: 28,
    startingPriceInr: '₹1.04 Crore*',
    approxTotalCostInr: '₹1.17 Crore*',
    monthlyEmiApprox: '₹81,200/mo*',
    vastuOrientation: 'North-East Facing Entrance (Ishanya Sanctum)',
    sunlightExposure: 'Continuous Natural Daylighting with Sahyadri Breeze',
    views: 'Resort Swimming Pool & Sunken Aqua Bar Views',
    targetBuyer: 'IT team leads, consultants, and buyers desiring deep balcony lounging space',
    dimensions: {
      livingDining: '18\'0" × 11\'6"',
      masterBedroom: '13\'0" × 11\'0"',
      secondBedroom: '11\'0" × 10\'0"',
      kitchen: '9\'6" × 8\'0"',
      balconyDeck: '14\'0" × 8\'4"',
      masterBathroom: '8\'0" × 4\'9"',
      commonBathroom: '7\'6" × 4\'6"',
    },
    keyFeatures: [
      'Expansive 117 sq.ft open-air EBVT sundeck terrace',
      'Recessed wardrobe niches preventing bedroom corridor obstruction',
      'Parallel granite chef\'s kitchen with piped natural gas connection',
      'German Grohe / Kohler CP fittings with wall-hung rimless sanitaryware',
      'Digital biometric smart lock on 8-foot teak veneer entrance door'
    ],
    metaTitle: 'Mahindra Rivenza 2 BHK Luxury B Floor Plan | 785 Sq.Ft | Baner Annex',
    metaDescription: 'Inspect Mahindra Rivenza 2 BHK Luxury B floor layout (668 sq.ft RERA / 785 sq.ft aggregate). Large 117 sq.ft private sundeck, pricing from ₹1.04 Cr*.'
  },
  {
    slug: 'mahindra-rivenza-2-bhk-luxury-a',
    name: 'Mahindra Rivenza 2 BHK Luxury A',
    bhk: '2 BHK',
    variant: 'Luxury A (Grand Living Salon)',
    reraCarpetSqFt: 680,
    aggregateUsableSqFt: 824,
    balconySqFt: 144,
    utilitySqFt: 30,
    startingPriceInr: '₹1.09 Crore*',
    approxTotalCostInr: '₹1.22 Crore*',
    monthlyEmiApprox: '₹85,100/mo*',
    vastuOrientation: 'East Facing Entrance',
    sunlightExposure: 'Dual-Aspect Cross Ventilation',
    views: 'Unobstructed Sahyadri Mountain Ridgeline',
    targetBuyer: 'Discerning couples and families hosting frequent social gatherings',
    dimensions: {
      livingDining: '19\'0" × 12\'0"',
      masterBedroom: '13\'6" × 11\'0"',
      secondBedroom: '11\'6" × 10\'6"',
      kitchen: '10\'0" × 8\'0"',
      balconyDeck: '16\'0" × 9\'0"',
      masterBathroom: '8\'0" × 5\'0"',
      commonBathroom: '7\'6" × 4\'9"',
    },
    keyFeatures: [
      'Huge 19-foot grand living salon accommodating formal 6-seater dining',
      'Deep panoramic 144 sq.ft balcony deck spanning living and dining zones',
      'Engineered wooden laminate master bedroom flooring',
      'Acoustic multi-chamber UPVC windows filtering 85% ambient external sound',
      'Solar hot water pre-piped directly to master en-suite bathroom'
    ],
    metaTitle: 'Mahindra Rivenza 2 BHK Luxury A Floor Plan | 824 Sq.Ft Usable | Pune',
    metaDescription: 'Explore Mahindra Rivenza 2 BHK Luxury A (680 sq.ft RERA / 824 sq.ft aggregate). 19ft living salon, 144 sq.ft balcony, pricing starting ₹1.09 Cr*.'
  },
  {
    slug: 'mahindra-rivenza-2-bhk-ultra-luxury-e',
    name: 'Mahindra Rivenza 2 BHK Ultra Luxury E',
    bhk: '2 BHK',
    variant: 'Ultra Luxury E (Flagship 2 BHK)',
    reraCarpetSqFt: 747,
    aggregateUsableSqFt: 855,
    balconySqFt: 108,
    utilitySqFt: 32,
    startingPriceInr: '₹1.14 Crore*',
    approxTotalCostInr: '₹1.28 Crore*',
    monthlyEmiApprox: '₹89,000/mo*',
    vastuOrientation: 'North-East Facing Entrance (Vastu Auspicious)',
    sunlightExposure: 'Corner Unit with 3-Sided Open Light & Air Flow',
    views: 'Curated Biophilic Gardens & Podium Water Bodies',
    targetBuyer: 'Buyers wanting the luxury scale of a 3 BHK within an efficient 2 BHK financial framework',
    dimensions: {
      livingDining: '20\'0" × 12\'0"',
      masterBedroom: '14\'0" × 11\'6"',
      secondBedroom: '12\'0" × 11\'0"',
      kitchen: '10\'6" × 8\'6"',
      balconyDeck: '14\'0" × 7\'9"',
      masterBathroom: '8\'6" × 5\'0"',
      commonBathroom: '8\'0" × 4\'9"',
    },
    keyFeatures: [
      'Highest carpet area 2 BHK configuration in the entire 13.46-acre township',
      'Corner sanctuary orientation with unmatched privacy (no facing apartments)',
      'King-sized master bedroom comfortably accommodating a work-from-home desk',
      'Large dry balcony with dedicated drain and power point for dishwashers',
      'Schneider Electric modular switches with MCB/ELCB shock protection'
    ],
    metaTitle: 'Mahindra Rivenza 2 BHK Ultra Luxury E Floor Plan | 855 Sq.Ft | Mahalunge',
    metaDescription: 'Sanctioned blueprint for Mahindra Rivenza 2 BHK Ultra Luxury E (747 sq.ft RERA / 855 sq.ft aggregate). Largest 2 BHK layout, priced from ₹1.14 Cr*.'
  },
  {
    slug: 'mahindra-rivenza-3-bhk-deluxe-c',
    name: 'Mahindra Rivenza 3 BHK Deluxe C',
    bhk: '3 BHK',
    variant: 'Deluxe C (Smart Family 3 BHK)',
    reraCarpetSqFt: 882,
    aggregateUsableSqFt: 995,
    balconySqFt: 113,
    utilitySqFt: 34,
    startingPriceInr: '₹1.31 Crore*',
    approxTotalCostInr: '₹1.47 Crore*',
    monthlyEmiApprox: '₹1,02,300/mo*',
    vastuOrientation: 'East Facing Entrance',
    sunlightExposure: 'Direct Sunrise Light into Living Room & Balcony',
    views: 'Championship Sports Arena & Forest Trail Vistas',
    targetBuyer: 'Growing families, multi-generational households, and senior tech managers',
    dimensions: {
      livingDining: '21\'0" × 12\'0"',
      masterBedroom: '14\'0" × 11\'0"',
      secondBedroom: '12\'0" × 10\'6"',
      thirdBedroom: '10\'6" × 10\'0"',
      kitchen: '10\'0" × 8\'6"',
      balconyDeck: '14\'0" × 8\'0"',
      masterBathroom: '8\'6" × 5\'0"',
      commonBathroom: '7\'9" × 4\'9"',
    },
    keyFeatures: [
      'Entry pricing for 3 BHK luxury residences under ₹1.35 Cr base bracket',
      'Three dedicated bedrooms with zero wasted circulation square footage',
      'Full-height sliding doors maximizing daylight into living hall',
      'Rainwater harvesting and solar micro-grid powering common services',
      'Access to ~44,000 sq.ft clubhouse with indoor squash & badminton'
    ],
    metaTitle: 'Mahindra Rivenza 3 BHK Deluxe C Floor Plan | 995 Sq.Ft | ₹1.31 Cr*',
    metaDescription: 'Official layout & dimensions for Mahindra Rivenza 3 BHK Deluxe C (882 sq.ft RERA / 995 sq.ft aggregate). 3 bed luxury starting ₹1.31 Cr* at Baner Annex.'
  },
  {
    slug: 'mahindra-rivenza-3-bhk-deluxe-b',
    name: 'Mahindra Rivenza 3 BHK Deluxe B',
    bhk: '3 BHK',
    variant: 'Deluxe B (Balanced Luxury)',
    reraCarpetSqFt: 894,
    aggregateUsableSqFt: 1007,
    balconySqFt: 113,
    utilitySqFt: 35,
    startingPriceInr: '₹1.39 Crore*',
    approxTotalCostInr: '₹1.56 Crore*',
    monthlyEmiApprox: '₹1,08,500/mo*',
    vastuOrientation: 'North-East Facing Entrance',
    sunlightExposure: 'All-Day Ambient Natural Light with North-South Wind Funneling',
    views: 'Clubhouse Infinity Lagoon & Zen Meadows',
    targetBuyer: 'Families desiring private master separation from guest/children suites',
    dimensions: {
      livingDining: '21\'6" × 12\'6"',
      masterBedroom: '14\'6" × 11\'6"',
      secondBedroom: '12\'6" × 11\'0"',
      thirdBedroom: '11\'0" × 10\'6"',
      kitchen: '10\'6" × 8\'6"',
      balconyDeck: '14\'6" × 8\'0"',
      masterBathroom: '8\'6" × 5\'0"',
      commonBathroom: '8\'0" × 5\'0"',
    },
    keyFeatures: [
      'Exceeds 1,000 sq.ft aggregate usable living envelope',
      'Clear acoustic separation between entertainment living hall and sleeping quarters',
      'Double-sided granite platform in modular-ready kitchen layout',
      '800×1600mm mirror-polished vitrified Italian-style tiles',
      'Tripartite MahaRERA 70% escrow governance on all booking stages'
    ],
    metaTitle: 'Mahindra Rivenza 3 BHK Deluxe B Floor Plan | 1,007 Sq.Ft | Pune',
    metaDescription: 'Detailed blueprint & room matrix for Mahindra Rivenza 3 BHK Deluxe B (894 sq.ft RERA / 1,007 sq.ft aggregate). Luxury 3 BHK flats from ₹1.39 Cr*.'
  },
  {
    slug: 'mahindra-rivenza-3-bhk-ultra-luxury-b',
    name: 'Mahindra Rivenza 3 BHK Ultra Luxury B',
    bhk: '3 BHK',
    variant: 'Ultra Luxury B (Palatial 3 BHK)',
    reraCarpetSqFt: 1065,
    aggregateUsableSqFt: 1206,
    balconySqFt: 141,
    utilitySqFt: 40,
    startingPriceInr: '₹1.60 Crore*',
    approxTotalCostInr: '₹1.80 Crore*',
    monthlyEmiApprox: '₹1,24,900/mo*',
    vastuOrientation: 'East-Facing Sunrise Entrance',
    sunlightExposure: 'Triple-Aspect Panoramic Hill & Canopy Exposure',
    views: 'Unrivaled 180° Sahyadri Mountain Views & Sunken Aqua Bar',
    targetBuyer: 'C-suite executives, NRI tech directors, and elite Pune business owners',
    dimensions: {
      livingDining: '24\'0" × 13\'6"',
      masterBedroom: '16\'0" × 12\'6"',
      secondBedroom: '13\'6" × 11\'6"',
      thirdBedroom: '12\'0" × 11\'0"',
      kitchen: '11\'6" × 9\'0"',
      balconyDeck: '18\'0" × 8\'0"',
      masterBathroom: '9\'0" × 5\'6"',
      commonBathroom: '8\'6" × 5\'0"',
    },
    keyFeatures: [
      'Grand 24-foot living hall designed for high-profile hospitality',
      'King Master Retreat with walk-in closet space and five-fixture luxury bath',
      '141 sq.ft private outdoor party terrace sundeck',
      '2 dedicated covered stilt/podium parking bays included',
      '2.95-meter vertical ceiling height delivering soaring volumetric opulence'
    ],
    metaTitle: 'Mahindra Rivenza 3 BHK Ultra Luxury B Floor Plan | 1,206 Sq.Ft | Baner',
    metaDescription: 'Palatial Mahindra Rivenza 3 BHK Ultra Luxury B floor layout (1,065 sq.ft RERA / 1,206 sq.ft aggregate). 24ft living salon, ₹1.60 Cr* launch price.'
  },
  {
    slug: 'mahindra-rivenza-4-bhk-luxury-b',
    name: 'Mahindra Rivenza 4 BHK Luxury B',
    bhk: '4 BHK',
    variant: 'Luxury B (Sky Villa Residence)',
    reraCarpetSqFt: 1438,
    aggregateUsableSqFt: 1615,
    balconySqFt: 177,
    utilitySqFt: 45,
    startingPriceInr: '₹2.20 Crore*',
    approxTotalCostInr: '₹2.47 Crore*',
    monthlyEmiApprox: '₹1,71,800/mo*',
    vastuOrientation: 'North-East Facing Entrance (100% Vastu Sanctum)',
    sunlightExposure: 'Corner Sky Villa with 270° Unrestricted Daylight & Wind Sweep',
    views: 'Panoramic Riverfront & Cloud-Capped Western Ghats Horizons',
    targetBuyer: 'Luxury connoisseurs, joint families, and NRI global investors',
    dimensions: {
      livingDining: '26\'0" × 15\'0"',
      masterBedroom: '17\'0" × 13\'0"',
      secondBedroom: '14\'6" × 12\'0"',
      thirdBedroom: '13\'0" × 11\'6"',
      fourthBedroom: '12\'0" × 11\'0"',
      kitchen: '13\'0" × 9\'6"',
      balconyDeck: '20\'0" × 9\'0"',
      masterBathroom: '10\'0" × 6\'0"',
      commonBathroom: '9\'0" × 5\'6"',
    },
    keyFeatures: [
      'Sky Villa scale with 4 lavish bedrooms and 3 spa-grade bathrooms',
      'Massive 20-foot entertainer\'s sky deck with clear glass balustrades',
      'Private foyer entrance shielding apartment interior from lobby corridors',
      'Dedicated EV high-speed charging infrastructure ready in private parking slot',
      'On-site 4 BHK show home available for private guided inspection'
    ],
    metaTitle: 'Mahindra Rivenza 4 BHK Luxury B Floor Plan | 1,615 Sq.Ft | Sky Villa',
    metaDescription: 'Explore Mahindra Rivenza 4 BHK Luxury B sky villa blueprint (1,438 sq.ft RERA / 1,615 sq.ft aggregate). 4 bedrooms, 177 sq.ft deck, from ₹2.20 Cr*.'
  },
  {
    slug: 'mahindra-rivenza-4-bhk-luxury-a',
    name: 'Mahindra Rivenza 4 BHK Luxury A',
    bhk: '4 BHK',
    variant: 'Luxury A (Grand Presidential Sky Estate)',
    reraCarpetSqFt: 1465,
    aggregateUsableSqFt: 1651,
    balconySqFt: 186,
    utilitySqFt: 48,
    startingPriceInr: '₹2.35 Crore*',
    approxTotalCostInr: '₹2.64 Crore*',
    monthlyEmiApprox: '₹1,83,500/mo*',
    vastuOrientation: 'East Facing Entrance (Surya Sanctum)',
    sunlightExposure: 'Dual-Corner Exposure with Maximum Natural Illumination',
    views: 'Full 360° Township Greens, Clubhouse Lagoon & River Valley Vistas',
    targetBuyer: 'High Net Worth Individuals (HNIs), Ultra HNIs, and international NRI tech founders',
    dimensions: {
      livingDining: '27\'6" × 15\'6"',
      masterBedroom: '18\'0" × 13\'6"',
      secondBedroom: '15\'0" × 12\'6"',
      thirdBedroom: '13\'6" × 12\'0"',
      fourthBedroom: '12\'6" × 11\'6"',
      kitchen: '14\'0" × 10\'0"',
      balconyDeck: '22\'0" × 9\'0"',
      masterBathroom: '10\'6" × 6\'6"',
      commonBathroom: '9\'6" × 5\'6"',
    },
    keyFeatures: [
      'The crown jewel residence: Largest sanctioned floor plan in Mahindra Rivenza',
      'Presidential 27.5-foot living and banquet dining salon with floor-to-ceiling glass',
      'Dual master suites with en-suite walk-in wardrobe closets and dressing alcoves',
      'Butler\'s kitchen pantry and distinct staff washroom utility zone',
      'Biometric smart access, video intercom, and smartphone home automation readiness'
    ],
    metaTitle: 'Mahindra Rivenza 4 BHK Luxury A Floor Plan | 1,651 Sq.Ft | Presidential',
    metaDescription: 'The ultimate 4 BHK Presidential Sky Estate at Mahindra Rivenza (1,465 sq.ft RERA / 1,651 sq.ft aggregate). 4 Bed, 186 sq.ft terrace deck, from ₹2.35 Cr*.'
  }
];
