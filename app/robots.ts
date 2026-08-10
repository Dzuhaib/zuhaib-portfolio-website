import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/**
 * AI + search crawlers we explicitly welcome.
 *
 * NOTE: Cloudflare injects a managed block ABOVE this output that sets
 * `Disallow: /` for ClaudeBot, GPTBot, Google-Extended, Applebot-Extended and
 * CCBot. Two groups naming the same agent is resolved differently by different
 * parsers, so these rules alone do NOT guarantee access. The managed block must
 * be disabled in the Cloudflare dashboard (Settings > AI Crawl Control) for
 * this file to take effect. See GEO-ANALYSIS.md section 3.
 */
const SEARCH_CRAWLERS = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Slurp",
  "Applebot",
];

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "MistralAI-User",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // One group per agent, each naming the agent exactly once, so there is no
      // ambiguity within our own block.
      ...[...SEARCH_CRAWLERS, ...AI_CRAWLERS].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
