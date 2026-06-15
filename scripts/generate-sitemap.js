const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://newskingdom.store';
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Get all page routes from the app directory
function getAllRoutes() {
  const routes = [];

  // Static pages
  const staticPages = ['', 'about', 'contact', 'privacy', 'terms', 'podcast', 'analytics', 'blog', 'editorial', 'ai-tools', 'travel', 'finance', 'food', 'health'];

  staticPages.forEach(page => {
    routes.push({
      loc: page === '' ? BASE_URL : `${BASE_URL}/${page}`,
      priority: page === '' ? '1.0' : page === 'blog' || page === 'editorial' ? '0.9' : '0.7',
      changefreq: 'daily',
      lastmod: '2026-06-15'
    });
  });

  // Blog posts (travel)
  const blogPosts = [
    'eiffel-tower', 'colosseum', 'grand-palace', 'sensoji', 'shibuya-crossing', 'meiji-shrine', 'dotonbori',
    'big-ben', 'brandenburg-gate', 'chapel-bridge-lucerne', 'charles-bridge', 'edinburgh-castle',
    'english-garden-munich', 'florence-cathedral', 'lake-zurich', 'lion-monument', 'london-eye',
    'marienplatz-munich', 'park-guell', 'parthenon-athens', 'ponte-vecchio', 'prague-castle',
    'rialto-bridge', 'royal-palace-madrid', 'sagrada-familia', 'santorini-oia', 'schonbrunn-palace',
    'st-marks-square', 'st-peters-basilica', 'st-stephens-cathedral', 'sistine-chapel', 'tower-bridge',
    'trevi', 'hohensalzburg-fortress', 'belem-tower', 'livraria-lello', 'arashiyama', 'kansai-trip',
    'myeongdong', 'gba-guangzhou', 'gba-shenzhen', 'gba-hongkong-3days', 'gba-macau-2days',
    'gba-zhuhai-3days', 'gba-dongguan-2days', 'gba-foshan-2days', 'gba-chimelong-3days', 'gba-humen-2days',
    'ai-tools-tutorial', 'chatgpt-deep-review', 'midjourney-complete-guide', 'claude-business-review',
    'ai-code-tools-comparison', 'ai-video-generation-review', 'ai-audio-voice-tools',
    'gemini-pro-review', 'perplexity-ai-vs-chatgpt', 'ai-writing-tools', 'ai-image-editing',
    'midjourney-v6-features', 'stable-diffusion-3', 'chatgpt-enterprise-guide', 'ai-productivity-tools',
    'llm-comparison-2024', 'ai-search-engine-review'
  ];

  blogPosts.forEach(slug => {
    routes.push({
      loc: `${BASE_URL}/blog/${slug}`,
      priority: slug.startsWith('ai-') ? '0.9' : '0.7',
      changefreq: 'weekly',
      lastmod: '2026-06-15'
    });
  });

  // Editorial articles
  const editorialArticles = [
    'bitcoin-etf-deep-analysis', 'cbdc-global-race', 'creator-economy-web3', 'decentralized-finance-guide',
    'ev-market-analysis', 'metaverse-workplace', 'neural-interface-future', 'quantum-computing-ai',
    'regenerative-ai', 'space-tourism-future', 'stablecoin-war', 'sustainable-crypto',
    'tech-giants-ai-race', 'twohumans-vs-ai-analysis', 'web3-gaming-future', 'web3-nft-winter',
    'ai-healthcare-revolution', 'ai-image-generators', 'ai-job-revolution', 'ai-translation-ethics'
  ];

  editorialArticles.forEach(slug => {
    routes.push({
      loc: `${BASE_URL}/editorial/${slug}`,
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: '2026-06-15'
    });
  });

  return routes;
}

function generateSitemap() {
  const routes = getAllRoutes();

  const urls = routes.map(route => `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`✅ Sitemap generated with ${routes.length} URLs`);
  console.log(`📍 Output: ${OUTPUT_PATH}`);
}

generateSitemap();