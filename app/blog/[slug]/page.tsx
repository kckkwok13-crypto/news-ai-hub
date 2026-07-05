import BlogContent from "./BlogContent";

// Only the blog posts that have data in BlogContent.tsx
const blogContentSlugs = [
  'shibuya-crossing',
  'meiji-shrine',
  'sensoji',
  'keukenhof',
  'anne-frank-house',
  'paris-france',
  'rome-colosseum',
  'london-uk'
];

export function generateStaticParams() {
  return blogContentSlugs.map((slug) => ({ slug }));
}

// European blog articles: Paris, Rome, London - with YouTube videos
export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  return <BlogContent slug={params.slug} />;
}
