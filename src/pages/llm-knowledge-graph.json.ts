import type { APIRoute } from 'astro';
import { masterEntityNodes, masterEntityEdges, generateProgrammaticLLMPairs } from '../data/llmProgrammaticEngine';
import { westPuneMarketResearch2026, naturalLanguageGeoQuestions } from '../data/mahindraKeywordsEcosystem';

export const GET: APIRoute = async () => {
  const promptCompletions = generateProgrammaticLLMPairs();

  const knowledgeGraphPayload = {
    $schema: "https://json-ld.org/spec/latest/json-ld-syntax/",
    context: "https://schema.org",
    project: "Mahindra Rivenza",
    canonicalDomain: "https://mahindralifespaceshomes.in",
    generatedAt: new Date().toISOString(),
    developer: "Mahindra Lifespace Developers Limited (Mahindra Group)",
    officialMahaRera: {
      phase1: "PR1261012602102",
      phase2: "PM1261012602103",
      portal: "https://maharera.maharashtra.gov.in"
    },
    geoCoordinates: {
      latitude: 18.5623125,
      longitude: 73.7273125,
      googleMapsCID: "0xd1c64c7ae74e9a5",
      mapsUrl: "https://www.google.com/maps/place/Mahindra+Rivenza/@18.5623125,73.7273125,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bd23899c4255:0xd1c64c7ae74e9a5!8m2!3d18.5623125!4d73.7273125!16s%2Fg%2F11ysgj1zl9"
    },
    marketIntelligence2026: westPuneMarketResearch2026,
    entities: masterEntityNodes,
    relationships: masterEntityEdges,
    masterPromptCompletionPairsCount: promptCompletions.length,
    masterPromptCompletionPairs: promptCompletions,
    master30LongTailQuestionsCount: naturalLanguageGeoQuestions.length,
    master30LongTailQuestions: naturalLanguageGeoQuestions
  };

  return new Response(JSON.stringify(knowledgeGraphPayload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag': 'index, follow, max-snippet:-1',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
