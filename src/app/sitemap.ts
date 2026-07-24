import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://certus.website";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const now = new Date();
  // Public, crawlable marketing/content pages. The /mock free-tool page is a
  // real ranking target ("free CFA mock exam") and was missing before.
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1, lastModified: now },
    // High-intent, indexable landing pages — the real ranking targets.
    { url: `${BASE}/free-cfa-mock-exam`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE}/cheapest-cfa-prep`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE}/cfa-level-1-prep`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE}/mock`, changeFrequency: "weekly", priority: 0.8, lastModified: now },
    { url: `${BASE}/check`, changeFrequency: "weekly", priority: 0.7, lastModified: now },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.8, lastModified: now },
  ];

  return [...staticPages, ...posts];
}
