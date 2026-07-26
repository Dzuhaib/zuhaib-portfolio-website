import type { MetadataRoute } from "next";

const AI_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Googlebot",
  "Google-Extended",
  "CCBot",
  "anthropic-ai",
  "Applebot-Extended",
  "cohere-ai",
  "OAI-SearchBot",
  "FacebookBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...AI_AGENTS.map((agent) => ({
        userAgent: agent,
        allow: "/",
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://zuhaibahmed.com/sitemap.xml",
  };
}
