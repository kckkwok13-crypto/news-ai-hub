import { MetadataRoute } from "next";
import { blogPosts } from "./data/blogData";
import { financePosts } from "./data/financeData";
import { healthPosts } from "./data/healthData";
import { foodPosts } from "./data/foodData";
import { aiToolPosts } from "./data/aiToolsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.newskingdom.store";
  const now = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl + "/", lastModified: now, changeFrequency: "hourly", priority: 1.0 },
    { url: baseUrl + "/about", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: baseUrl + "/contact", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: baseUrl + "/privacy", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/terms", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/faq", lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: baseUrl + "/podcast", lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: baseUrl + "/analytics", lastModified: now, changeFrequency: "daily", priority: 0.6 },
    { url: baseUrl + "/blog", lastModified: now, changeFrequency: "daily", priority: 0.9 },
    // New content sections
    { url: baseUrl + "/finance", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: baseUrl + "/health", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: baseUrl + "/food", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: baseUrl + "/ai-tools", lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: baseUrl + "/editorial", lastModified: now, changeFrequency: "daily", priority: 0.9 },
  ];

  // Dynamically generate blog post URLs from blogData
  const blogRoutesSitemap: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    // GBA posts get slightly lower priority
    priority: post.tags.includes("大灣區") || post.tags.includes("退休遊") ? 0.7 : 0.8,
  }));

  // Finance posts
  const financeRoutesSitemap: MetadataRoute.Sitemap = financePosts.map((post) => ({
    url: `${baseUrl}/finance/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Health posts
  const healthRoutesSitemap: MetadataRoute.Sitemap = healthPosts.map((post) => ({
    url: `${baseUrl}/health/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Food posts
  const foodRoutesSitemap: MetadataRoute.Sitemap = foodPosts.map((post) => ({
    url: `${baseUrl}/food/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // AI Tools posts
  const aiToolsRoutesSitemap: MetadataRoute.Sitemap = aiToolPosts.map((post) => ({
    url: `${baseUrl}/ai-tools/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Editorial posts - all article slugs
  const editorialSlugs = [
    "ai-healthcare-revolution", "ai-image-generators", "ai-job-revolution",
    "ai-translation-ethics", "bitcoin-etf-deep-analysis", "cbdc-global-race",
    "creator-economy-web3", "decentralized-finance-guide", "ev-market-analysis",
    "global-investment-trends-2025", "health-wellness-2025", "metaverse-workplace",
    "neural-interface-future", "quantum-computing-ai", "regenerative-ai",
    "space-tourism-future", "stablecoin-war", "sustainable-crypto",
    "tech-giants-ai-race", "twohumans-vs-ai-analysis", "web3-gaming-future",
    "web3-nft-winter", "ethereum-layer2-explosion", "nvidia-ai-chip-empire",
    "hongkong-crypto-policy", "ai-agent-era", "esg-investment-wave"
  ];

  const editorialRoutesSitemap: MetadataRoute.Sitemap = editorialSlugs.map((slug) => ({
    url: `${baseUrl}/editorial/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutesSitemap, ...financeRoutesSitemap, ...healthRoutesSitemap, ...foodRoutesSitemap, ...aiToolsRoutesSitemap, ...editorialRoutesSitemap];
}
