import HealthArticlePage from "./HealthArticleContent";

// All health blog slugs
const healthSlugs = [
  'diabetes-prevention', 'exercise-seniors', 'heart-health', 'immune-system-boost',
  'mediterranean-diet-guide', 'mental-health-workplace', 'office-health-guide',
  'sleep-quality-guide', 'stress-management', 'tcm-health-preservation', 'yoga-beginners-guide',
  'hongkong-health-statistics-2026', 'weight-loss-science-2026',
  'meditation-guide', 'bone-health-guide', 'gut-health-guide'
];

export function generateStaticParams() {
  return healthSlugs.map((slug) => ({ slug }));
}

export default function HealthSlugPage({ params }: { params: { slug: string } }) {
  return <HealthArticlePage slug={params.slug} />;
}
