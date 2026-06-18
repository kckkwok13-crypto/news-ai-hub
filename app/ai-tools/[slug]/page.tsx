import AIToolArticlePage from "./AIToolArticleContent";

// All AI tools blog slugs
const aiToolsSlugs = [
  'ai-image-editing-tools', 'ai-productivity-tools-2026', 'ai-productivity-tools-guide',
  'ai-search-engine-review', 'ai-video-editing', 'ai-writing-tools-2024',
  'chatgpt-enterprise-guide', 'chatgpt-prompt-engineering', 'claude-ai-guide',
  'gemini-pro-review', 'llm-comparison-2024', 'midjourney-beginners',
  'midjourney-v6-features', 'notion-ai-workflow', 'perplexity-ai-vs-chatgpt',
  'stable-diffusion-3'
];

export function generateStaticParams() {
  return aiToolsSlugs.map((slug) => ({ slug }));
}

export default function AIToolsSlugPage({ params }: { params: { slug: string } }) {
  return <AIToolArticlePage slug={params.slug} />;
}
