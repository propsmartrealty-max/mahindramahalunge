import type { APIRoute } from "astro";
import {
  punePropertyVlogMasterEcosystem,
  punePropertyVlogAllKeywords,
} from "../data/mahindraKeywordsEcosystem";

export const GET: APIRoute = async () => {
  const payload = {
    $schema: "https://json-ld.org/spec/latest/json-ld-syntax/",
    context: "https://schema.org",
    ecosystemName:
      "PunePropertyVlog.com Mahindra Rivenza Master SEO Keywords & Topical Authority Suite",
    canonicalProjectDomain: "https://mahindralifespaceshomes.in",
    partnerPortal: "https://punepropertyvlog.com",
    publishedAt: new Date().toISOString(),
    complianceGuarantee: {
      framework: "Google Search Essentials & Helpful Content System (EEAT)",
      antiSpamPolicy:
        "Zero Artificial Keyword Stuffing; 100% Contextual Semantic Entity Association",
      richResultsCompliance:
        "Strict Schema.org Alignment (ApartmentComplex, RealEstateListing, FAQPage)",
      transparencyDisclaimer:
        "Prices start ₹90 Lakhs*. Verified MahaRERA PR1261012602102 & PM1261012602103. PropSmart Realty MahaRERA Agent A031262401295.",
    },
    metrics: {
      totalCuratedKeywords: punePropertyVlogAllKeywords.length,
      microMarketsCovered:
        punePropertyVlogMasterEcosystem.westPune13MicroMarkets.length,
      competitorsBenchmarked:
        punePropertyVlogMasterEcosystem.competitorHeadToHead.length,
      topicalArticlesPlanned:
        punePropertyVlogMasterEcosystem.topicalBlogStrategy.length,
      googleAdsCampaigns:
        punePropertyVlogMasterEcosystem.googleAdsMatrix.campaigns.length,
      googleAdsNegativeKeywords:
        punePropertyVlogMasterEcosystem.googleAdsMatrix.negativeKeywords.length,
    },
    ...punePropertyVlogMasterEcosystem,
    allKeywordsFlatList: punePropertyVlogAllKeywords,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "index, follow, max-snippet:-1",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
