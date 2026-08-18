import type { MetadataRoute } from "next";

// AI answer engines are a primary discovery channel for us, so the crawlers
// that feed them are named explicitly instead of being left to the wildcard.
// Google-Extended and Applebot-Extended especially: those are opt-outs you
// signal by blocking, so naming them here is an unambiguous "yes, cite this."
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: "https://dobleai.com/sitemap.xml",
    host: "https://dobleai.com",
  };
}
