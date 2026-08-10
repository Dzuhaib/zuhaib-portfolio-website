import type { MetadataRoute } from "next";
import { SERVICES, PROJECTS, BLOG_POSTS, SITE } from "@/lib/constants";

// Build-time stamp for pages without their own edit date. Using a single
// constant rather than `new Date()` per entry keeps lastmod stable across a
// build instead of claiming every URL changed at the moment of generation.
const BUILD_DATE = new Date("2026-08-08T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // Real per-post edit date, so lastmod is a genuine freshness signal.
    lastModified: new Date(`${post.updated}T00:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
