import { MetadataRoute } from "next";

const blogRoutes = [
  "arashiyama", "colosseum", "dotonbori", "eiffel-tower",
  "florence-cathedral", "grand-palace", "meiji-shrine", "myeongdong",
  "ponte-vecchio", "sensoji", "shibuya-crossing", "sistine-chapel",
  "st-peters-basilica", "trevi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newskingdom.store";
  const now = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl + "/", lastmod: now, changeFrequency: "hourly", priority: 1.0 },
    { url: baseUrl + "/about", lastmod: now, changeFrequency: "monthly", priority: 0.8 },
    { url: baseUrl + "/contact", lastmod: now, changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/privacy", lastmod: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/podcast", lastmod: now, changeFrequency: "daily", priority: 0.7 },
    { url: baseUrl + "/analytics", lastmod: now, changeFrequency: "daily", priority: 0.6 },
    { url: baseUrl + "/blog", lastmod: now, changeFrequency: "daily", priority: 0.9 },
  ];

  const blogRoutesSitemap: MetadataRoute.Sitemap = blogRoutes.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastmod: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutesSitemap];
}
