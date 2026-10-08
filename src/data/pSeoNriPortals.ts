export interface NriPortalItem {
  slug: string;
  countryOrRegion: string;
  currency: string;
  currencySymbol: string;
  startingPriceInCurrency: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroHighlight: string;
  taxAndLegalAdvantage: string;
  rentalYieldHighlight: string;
  repatriationOverview: string;
  faqs: { q: string; a: string }[];
}

export const nriPortalsData: NriPortalItem[] = [
  {
    slug: 'dubai-uae-investors',
    countryOrRegion: 'Dubai & UAE (United Arab Emirates)',
    currency: 'AED',
    currencySymbol: 'AED',
    startingPriceInCurrency: 'AED 395,000*',
    h1: 'Mahindra Rivenza Pune: Luxury Real Estate Investment from Dubai & UAE',
    metaTitle: 'NRI Property Investment from Dubai | Mahindra Rivenza Pune',
    metaDescription: 'Invest in Mahindra Rivenza Pune from Dubai & UAE. Pre-approved NRI home loans, AED currency guidance, 4.8%-5.4% rental yields, MahaRERA registered.',
    heroHighlight: 'AED 395,000* Starting Ticket | 5.2% Projected Rental Yield',
    taxAndLegalAdvantage: 'Tax-free rental income repatriation under DTAA (Double Tax Avoidance Agreement) between India and UAE, with complete NRE/NRO account compliance.',
    rentalYieldHighlight: 'Proximity to Hinjewadi IT parks ensures swift tenant leasing to senior tech leadership with rental returns of 4.8% to 5.4%.',
    repatriationOverview: 'Full capital and rental repatriation permitted through authorized NRE banking channels under Reserve Bank of India (RBI) and FEMA guidelines.',
    faqs: [
      {
        q: 'Can NRIs based in Dubai buy property at Mahindra Rivenza without traveling to India?',
        a: 'Yes, 100% digital booking, remote video walkthroughs, and Power of Attorney (PoA) registration support are provided by our dedicated NRI desk.'
      },
      {
        q: 'Which banks provide home loans for UAE-based NRIs for Mahindra Rivenza?',
        a: 'Leading banks including SBI NRI, HDFC Bank, and ICICI Bank offer pre-approved mortgages with competitive interest rates and AED-INR salary underwriting.'
      }
    ]
  },
  {
    slug: 'usa-silicon-valley-tech',
    countryOrRegion: 'USA (Silicon Valley, Seattle, Austin, NYC)',
    currency: 'USD',
    currencySymbol: '$',
    startingPriceInCurrency: '$108,000*',
    h1: 'Mahindra Rivenza Pune: Tech NRI Real Estate Investment from the United States',
    metaTitle: 'US NRI Property Investment in Pune | Mahindra Rivenza ($108k*)',
    metaDescription: 'US-based tech professionals: invest in Mahindra Rivenza Baner Annex Pune. USD $108,000* starting ticket, high-yield tech tenancy, IGBC Gold Net Zero waste.',
    heroHighlight: 'USD $108,000* Entry Valuation | 13.46-Acre Biophilic Living',
    taxAndLegalAdvantage: 'Optimize capital gains via Section 54/54F and US Foreign Account Tax Compliance Act (FATCA) verified reporting structures.',
    rentalYieldHighlight: 'High corporate housing allowances from Fortune 500 tech campuses in Hinjewadi Phase 1 & 2 ensure resilient USD return profiles.',
    repatriationOverview: 'Streamlined outward remittance up to USD 1,000,000 per financial year under the RBI Liberalised Remittance Scheme (LRS) from NRO/NRE accounts.',
    faqs: [
      {
        q: 'How does currency depreciation benefit US NRIs buying at Mahindra Rivenza?',
        a: 'The historic USD-INR exchange rate makes entry prices exceptionally attractive at ~$108,000 for luxury 2 BHK apartments, generating strong dollar-denominated upside.'
      },
      {
        q: 'Is digital documentation valid under MahaRERA?',
        a: 'Yes, digital agreements for sale and remote e-registration are fully supported under Maharashtra state guidelines.'
      }
    ]
  },
  {
    slug: 'singapore-southeast-asia',
    countryOrRegion: 'Singapore & Southeast Asia',
    currency: 'SGD',
    currencySymbol: 'S$',
    startingPriceInCurrency: 'S$ 145,000*',
    h1: 'Mahindra Rivenza Pune: Real Estate Investment from Singapore',
    metaTitle: 'Singapore NRI Property Investment in Pune | Mahindra Rivenza',
    metaDescription: 'Invest in Mahindra Rivenza Pune from Singapore. S$ 145,000* starting price, ~44,000 sq.ft dual clubhouse, 9+ acres greens, MahaRERA PR1261012602102.',
    heroHighlight: 'S$ 145,000* Entry Point | Dual Clubhouse with Sunken Bar Pool',
    taxAndLegalAdvantage: 'Protected under Singapore-India DTAA treaty with zero wealth tax and transparent capital gains taxation.',
    rentalYieldHighlight: 'Surging demand from Hinjewadi IT executives delivers reliable 4.9% - 5.3% rental yields.',
    repatriationOverview: 'Direct outward telegraphic transfers through DBS, OCBC, and UOB to designated NRE accounts.',
    faqs: [
      {
        q: 'Why do Singapore NRIs prefer Mahindra Lifespaces?',
        a: 'The trust of the Mahindra Group, institutional governance, and green-certified Net Zero waste communities mirror Singapore\'s high sustainability standards.'
      }
    ]
  },
  {
    slug: 'uk-london-investors',
    countryOrRegion: 'United Kingdom (London & Midlands)',
    currency: 'GBP',
    currencySymbol: '£',
    startingPriceInCurrency: '£85,000*',
    h1: 'Mahindra Rivenza Pune: Luxury Property Investment from the UK',
    metaTitle: 'UK NRI Real Estate Investment Pune | Mahindra Rivenza (£85k*)',
    metaDescription: 'UK NRI investment portal for Mahindra Rivenza Pune. Luxury 2, 3 & 4 BHK residences, £85,000* starting ticket, pre-approved bank loans, high rental yield.',
    heroHighlight: '£85,000* Entry Price | Prime West Pune Growth Corridor',
    taxAndLegalAdvantage: 'Comprehensive UK HMRC and Indian IT Act tax treaty synergy with indexation benefits.',
    rentalYieldHighlight: 'West Pune rental yields (5.0%+) comfortably outpace Central London residential yields (2.5%-3.2%).',
    repatriationOverview: 'Full repatriation of sale proceeds and quarterly rental payouts through Barclays, HSBC, and SBI UK.',
    faqs: [
      {
        q: 'Can British passport holders of Indian Origin (OCI) buy property at Mahindra Rivenza?',
        a: 'Yes, OCI cardholders enjoy equal property purchasing rights as Indian citizens without needing RBI prior approval.'
      }
    ]
  },
  {
    slug: 'qatar-doha-investors',
    countryOrRegion: 'Qatar (Doha)',
    currency: 'QAR',
    currencySymbol: 'QAR',
    startingPriceInCurrency: 'QAR 390,000*',
    h1: 'Mahindra Rivenza Pune: Property Investment for Qatar NRIs',
    metaTitle: 'Qatar NRI Property Investment in Pune | Mahindra Rivenza',
    metaDescription: 'Buy luxury homes at Mahindra Rivenza Pune from Doha Qatar. Tax-free rental returns, pre-approved home loans, 13.46 acres master community.',
    heroHighlight: 'QAR 390,000* Starting Ticket | Prime Hinjewadi Proximity',
    taxAndLegalAdvantage: 'Zero local income tax in Qatar allows full retention of international asset yields.',
    rentalYieldHighlight: 'Consistent 5.0% - 5.4% gross rental returns driven by Hinjewadi tech employment.',
    repatriationOverview: 'Compliant inward and outward transfers through Qatar National Bank (QNB) and Indian NRE accounts.',
    faqs: [
      {
        q: 'What is the possession timeline for Mahindra Rivenza?',
        a: 'As registered with MahaRERA, committed possession extends up to December 30, 2031, with phased tower construction updates.'
      }
    ]
  },
  {
    slug: 'saudi-arabia-riyadh-jeddah',
    countryOrRegion: 'Saudi Arabia (Riyadh, Jeddah, Dammam)',
    currency: 'SAR',
    currencySymbol: 'SAR',
    startingPriceInCurrency: 'SAR 405,000*',
    h1: 'Mahindra Rivenza Pune: Real Estate Investment from Saudi Arabia',
    metaTitle: 'Saudi Arabia NRI Property Investment in Pune | Mahindra Rivenza',
    metaDescription: 'Invest in Mahindra Rivenza Pune from KSA. SAR 405,000* starting price, ~44,000 sq.ft dual clubhouse, 9+ acres greens, MahaRERA PR1261012602102.',
    heroHighlight: 'SAR 405,000* Entry Valuation | 13.46 Acres Landmark Master Plan',
    taxAndLegalAdvantage: 'Tax-efficient real estate asset accumulation backed by the Mahindra Group pedigree.',
    rentalYieldHighlight: 'Rapid rental occupancy by Hinjewadi tech executives and corporate leaders.',
    repatriationOverview: 'Repatriation governed cleanly under FEMA guidelines for foreign earnings.',
    faqs: [
      {
        q: 'Can NRIs in KSA avail home loans for Mahindra Rivenza?',
        a: 'Yes, digital verification and documentation are available through partner banks with competitive interest rates.'
      }
    ]
  },
  {
    slug: 'germany-europe-expats',
    countryOrRegion: 'Germany & Continental Europe (Frankfurt, Munich, Berlin)',
    currency: 'EUR',
    currencySymbol: '€',
    startingPriceInCurrency: '€98,000*',
    h1: 'Mahindra Rivenza Pune: Real Estate Investment from Continental Europe',
    metaTitle: 'Europe NRI Real Estate Investment Pune | Mahindra Rivenza (€98k*)',
    metaDescription: 'European NRIs: invest in Mahindra Rivenza Baner Annex Pune. €98,000* starting ticket, Pre-Certified IGBC Gold Net Zero waste sustainable community.',
    heroHighlight: '€98,000* Starting Investment | Net Zero Waste to Landfill Living',
    taxAndLegalAdvantage: 'Certified IGBC Gold sustainability matches European ESG and green living expectations.',
    rentalYieldHighlight: 'Strong rental yields of 4.8% to 5.3% provide steady passive income.',
    repatriationOverview: 'Clean SEPA bank transfers directly into Indian NRE accounts with transparent reporting.',
    faqs: [
      {
        q: 'What environmental certifications does Mahindra Rivenza hold?',
        a: 'Mahindra Rivenza is Pre-Certified IGBC Gold rated and designed as a Net Zero Waste to Landfill community.'
      }
    ]
  },
  {
    slug: 'australia-sydney-melbourne',
    countryOrRegion: 'Australia (Sydney, Melbourne, Brisbane)',
    currency: 'AUD',
    currencySymbol: 'A$',
    startingPriceInCurrency: 'A$ 165,000*',
    h1: 'Mahindra Rivenza Pune: Property Investment for Australian NRIs',
    metaTitle: 'Australian NRI Property Investment in Pune | Mahindra Rivenza',
    metaDescription: 'Invest in Mahindra Rivenza Pune from Australia. A$ 165,000* starting price, ~44,000 sq.ft dual clubhouse, 9+ acres greens, MahaRERA PR1261012602102.',
    heroHighlight: 'A$ 165,000* Starting Ticket | 13.46-Acre Biophilic Living',
    taxAndLegalAdvantage: 'Compliant with Australian ATO foreign income provisions and Australian-Indian bilateral treaties.',
    rentalYieldHighlight: 'High rental yields of ~5.2% outshine Australian metropolitan rental returns.',
    repatriationOverview: 'Direct foreign exchange transfers via Westpac, ANZ, and Commonwealth Bank.',
    faqs: [
      {
        q: 'How can Australian NRIs inspect the project site remotely?',
        a: 'Our NRI advisory team provides live 3D walkthroughs, video call site inspections, and quarterly drone updates.'
      }
    ]
  }
];
