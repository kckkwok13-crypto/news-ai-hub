import FinanceArticlePage from "./FinanceArticleContent";

// All finance blog slugs
const financeSlugs = [
  'cryptocurrency-beginners', 'dollar-cost-averaging', 'etf-index-fund-guide',
  'financial-planning-30s', 'hongkong-insurance-guide', 'investment-risk-management',
  'mpf-super-guide', 'passive-income-2026', 'retirement-planning-hongkong', 'stock-investing-basics',
  'h2-2026-investment-outlook'
];

export function generateStaticParams() {
  return financeSlugs.map((slug) => ({ slug }));
}

export default function FinanceSlugPage({ params }: { params: { slug: string } }) {
  return <FinanceArticlePage slug={params.slug} />;
}
