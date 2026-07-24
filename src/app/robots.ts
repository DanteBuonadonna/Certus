import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://certus.website";

// robots.txt — Certus.
//
// Two jobs:
//   1. Let search engines crawl the public marketing + content pages, but keep
//      them out of the gated app shell and account/checkout flows (nothing to
//      rank there, and we don't want thin JS-app routes diluting the profile).
//   2. Explicitly WELCOME the AI crawlers. Certus wants to be the answer ChatGPT
//      and Perplexity give to "cheapest CFA prep" / "free CFA mock", so we opt
//      in deliberately rather than leave it to chance.
export default function robots(): MetadataRoute.Robots {
  const disallow = [
    "/dashboard",
    "/practice",
    "/learn",
    "/flashcards",
    "/skilltree",
    "/career",
    "/league",
    "/challenges",
    "/boss",
    "/shop",
    "/profile",
    "/billing",
    "/welcome",
    "/unlock",
    "/lock",
    "/login",
    "/signup",
    "/api/",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // AI answer engines — allowed on purpose so Certus can be cited.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
