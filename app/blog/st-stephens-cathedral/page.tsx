import ClientWrapper from './ClientWrapper';

export default function StStephensCathedralPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策 | NewsKingdom',
    description: '探索維也納市中心的地標建築——聖斯蒂芬大教堂（Stephansdom），揭開這座擁有800年歷史的哥德式傑作的神秘面紗。包含交通指南、打卡機位、門票資訊。',
    keywords: '維也納, 聖斯蒂芬大教堂, Stephansdom, 斯蒂芬大教堂, 維也納旅遊, 奧地利旅遊, 歐洲旅遊',
    openGraph: {
      title: '聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策',
      description: '探索維也納市中心的地標建築——聖斯蒂芬大教堂，揭開這座擁有800年歷史的哥德式傑作的神秘面紗。',
      images: ['https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80'],
    },
  };
}