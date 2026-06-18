import BlogContent from "./BlogContent";

// All travel blog slugs
const travelSlugs = [
  'shibuya-crossing', 'meiji-shrine', 'sensoji', 'gba-macau-2days', 'keukenhof', 'anne-frank-house',
  'arashiyama', 'belem-tower', 'big-ben', 'brandenburg-gate', 'chapel-bridge-lucerne', 'charles-bridge',
  'colosseum', 'dotonbori', 'edinburgh-castle', 'eiffel-tower', 'english-garden-munich', 'florence-cathedral',
  'gba-chimelong-3days', 'gba-dongguan-2days', 'gba-foshan-2days', 'gba-guangzhou', 'gba-hongkong-3days',
  'gba-humen-2days', 'gba-shenzhen', 'gba-zhuhai-3days', 'grand-palace', 'hohensalzburg-fortress',
  'kansai-trip', 'lake-zurich', 'lion-monument', 'livraria-lello', 'london-eye', 'marienplatz-munich',
  'myeongdong', 'park-guell', 'parthenon-athens', 'ponte-vecchio', 'prague-castle', 'rialto-bridge',
  'royal-palace-madrid', 'sagrada-familia', 'santorini-oia', 'schonbrunn-palace', 'sistine-chapel',
  'st-marks-square', 'st-peters-basilica', 'st-stephens-cathedral', 'tower-bridge', 'trevi'
];

export function generateStaticParams() {
  return travelSlugs.map((slug) => ({ slug }));
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  return <BlogContent slug={params.slug} />;
}
