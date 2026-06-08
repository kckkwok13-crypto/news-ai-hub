import { MetadataRoute } from "next";
import { blogPosts } from "./data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.newskingdom.store";
  const now = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl + "/", lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: baseUrl + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: baseUrl + "/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/privacy", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/terms", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/podcast", lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: baseUrl + "/analytics", lastModified: now, changeFrequency: "daily", priority: 0.6 },
    { url: baseUrl + "/blog", lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  // Dynamically generate blog post URLs from blogData
  const blogRoutesSitemap: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    // GBA posts get slightly lower priority
    priority: post.tags.includes("大灣區") || post.tags.includes("退休遊") ? 0.7 : 0.8,
  }));

  return [...staticRoutes, ...blogRoutesSitemap];
}
