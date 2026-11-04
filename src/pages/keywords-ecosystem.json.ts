import type { APIRoute } from 'astro';
import {
  allMahindraKeywordPermutations,
  programmaticBrandVariants,
  programmaticLocations,
  programmaticConfigurations,
  programmaticIntents,
  programmaticModifiers,
  rivenzaTop150MoneyKeywords,
  ultraPremiumBanerAnnexPuneKeywords,
  rivenzaTypoKeywords,
  punePropertyVlogMasterEcosystem,
  punePropertyVlogAllKeywords
} from '../data/mahindraKeywordsEcosystem';

export const GET: APIRoute = async () => {
  const payload = {
    $schema: "https://json-ld.org/spec/latest/json-ld-syntax/",
    context: "https://schema.org",
    ecosystemName: "Mahindra Rivenza Programmatic Keywords & Search Intent Graph",
    project: "Mahindra Rivenza",
    canonicalDomain: "https://mahindralifespaceshomes.in",
    syndicationPartner: "PunePropertyVlog.com",
    generatedAt: new Date().toISOString(),
    metrics: {
      totalDeduplicatedPermutations: allMahindraKeywordPermutations.length,
      topMoneyKeywordsCount: rivenzaTop150MoneyKeywords.length,
      marketDominationKeywordsCount: ultraPremiumBanerAnnexPuneKeywords.length,
      phoneticTypoKeywordsCount: rivenzaTypoKeywords.length,
      punePropertyVlogKeywordsCount: punePropertyVlogAllKeywords.length
    },
    punePropertyVlogEcosystem: punePropertyVlogMasterEcosystem,
    combinatorialDimensions: {
      brandVariantsCount: programmaticBrandVariants.length,
      brandVariants: programmaticBrandVariants,
      locationsCount: programmaticLocations.length,
      locations: programmaticLocations,
      configurationsCount: programmaticConfigurations.length,
      configurations: programmaticConfigurations,
      intentsCount: programmaticIntents.length,
      intents: programmaticIntents,
      modifiersCount: programmaticModifiers.length,
      modifiers: programmaticModifiers
    },
    topMoneyKeywords: rivenzaTop150MoneyKeywords,
    phoneticTypoQueries: rivenzaTypoKeywords,
    marketDominationKeywords: ultraPremiumBanerAnnexPuneKeywords,
    sampleCombinatorialPermutations: allMahindraKeywordPermutations.slice(0, 500)
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'index, follow, max-snippet:-1',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
