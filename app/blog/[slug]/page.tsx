import BlogContent from "./BlogContent";

// Only the blog posts that have data in BlogContent.tsx
const blogContentSlugs = [
  'shibuya-crossing',
  'meiji-shrine',
  'sensoji',
  'keukenhof',
  'anne-frank-house'
];

export function generateStaticParams() {
  return blogContentSlugs.map((slug) => ({ slug }));
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  return <BlogContent slug={params.slug} />;
}
