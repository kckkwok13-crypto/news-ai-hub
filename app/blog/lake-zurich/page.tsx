import ClientWrapper from './ClientWrapper';

export default function LakeZurichPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖（Zürichsee）深度遊覽與湖畔散策攻略 | NewsKingdom',
    description: '探索瑞士最迷人的高山湖泊——蘇黎世湖，揭開這座位於阿爾卑斯山腳下的翡翠湖泊的神秘面紗。包含交通指南、船遊攻略、打卡機位與周邊城市散策。',
    keywords: '蘇黎世湖, Zürichsee, 瑞士, 湖泊, 蘇黎世, 歐洲旅遊',
    openGraph: {
      title: '阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖深度遊覽攻略',
      description: '探索瑞士最迷人的高山湖泊——蘇黎世湖，揭開這座位於阿爾卑斯山腳下的翡翠湖泊的神秘面紗。',
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'],
    },
  };
}