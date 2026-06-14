import ClientWrapper from './ClientWrapper';

export default function SantoriniOiaPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '愛琴海燃燒的終極終章：希臘聖托里尼伊亞落日熔金攻略 | NewsKingdom',
    description: '全球最美落日！探索希臘聖托里尼伊亞小鎮，藍頂教堂、白牆洞穴屋、火山懸崖與熔金晚霞的浪漫極致慢活之旅。',
    keywords: '聖托里尼, 伊亞, Oia, 希臘, 藍頂教堂, 日落, 愛琴海, 火山口',
    openGraph: {
      title: '愛琴海燃燒的終極終章：希臘聖托里尼伊亞落日熔金攻略',
      description: '全球最美落日！探索希臘聖托里尼伊亞小鎮，藍頂教堂、白牆洞穴屋與熔金晚霞的浪漫之旅。',
      images: ['https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80'],
    },
  };
}