import BlogContent from "./BlogContent";

export function generateStaticParams() {
  return [
    { slug: 'shibuya-crossing' },
    { slug: 'meiji-shrine' },
    { slug: 'sensoji' },
    { slug: 'gba-macau-2days' },
    { slug: 'keukenhof' },
    { slug: 'anne-frank-house' },
  ];
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  return <BlogContent slug={params.slug} />;
}