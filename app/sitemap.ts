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
    { url: baseUrl + "/", lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: baseUrl + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: baseUrl + "/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/privacy", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/podcast", lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: baseUrl + "/analytics", lastModified: now, changeFrequency: "daily", priority: 0.6 },
    { url: baseUrl + "/blog", lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  const blogRoutesSitemap: MetadataRoute.Sitemap = blogRoutes.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutesSitemap];
}
