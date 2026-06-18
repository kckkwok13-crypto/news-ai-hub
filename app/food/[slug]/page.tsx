import FoodArticlePage from "./FoodArticleContent";

// All food blog slugs
const foodSlugs = [
  'bbq-master', 'boba-tea-guide', 'breakfast-guide', 'cantonese-soup-guide',
  'coffee-culture', 'dessert-heaven', 'hongkong-dim-sum-guide', 'hotpot-heaven',
  'noodle-master', 'sushi-master-guide', 'thai-food-paradise'
];

export function generateStaticParams() {
  return foodSlugs.map((slug) => ({ slug }));
}

export default function FoodSlugPage({ params }: { params: { slug: string } }) {
  return <FoodArticlePage slug={params.slug} />;
}
