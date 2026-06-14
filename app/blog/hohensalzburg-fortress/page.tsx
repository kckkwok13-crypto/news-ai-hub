import ClientWrapper from './ClientWrapper';

export default function HohensalzburgFortressPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡（Hohensalzburg Fortress）深度遊覽全攻略 | NewsKingdom',
    description: '探索中歐最大、保存最完好的城堡——薩爾茨堡城堡，揭開這座建於1077年的「鶴巢」近千年歷史的神秘面紗。包含交通指南、門票資訊、打卡機位與周邊散策攻略。',
    keywords: '薩爾茨堡, 城堡, Hohensalzburg, 奧地利, 莫扎特, 鹽堡, 歐洲旅遊',
    openGraph: {
      title: '俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡深度遊覽全攻略',
      description: '探索中歐最大、保存最完好的城堡——薩爾茨堡城堡，揭開這座建於1077年的「鶴巢」近千年歷史的神秘面紗。',
      images: ['https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80'],
    },
  };
}
