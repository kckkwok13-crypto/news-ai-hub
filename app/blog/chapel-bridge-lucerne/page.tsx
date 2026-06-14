import ClientWrapper from './ClientWrapper';

export default function ChapelBridgeLucernePage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '歐洲最古老的廊橋：瑞士琉森卡貝爾橋（Kapellbrücke）深度遊覽攻略 | NewsKingdom',
    description: '探索瑞士琉森標誌性地標——卡貝爾橋，這座建於1333年的歐洲最古老木製廊橋。揭開橋上120幅三角形油畫的秘密，以及背後的千年歷史與浪漫故事。',
    keywords: '卡貝爾橋, Kapellbrücke, 琉森, 瑞士, 廊橋, 歐洲旅遊',
    openGraph: {
      title: '歐洲最古老的廊橋：瑞士琉森卡貝爾橋深度遊覽攻略',
      description: '探索瑞士琉森標誌性地標——卡貝爾橋，這座建於1333年的歐洲最古老木製廊橋。',
      images: ['https://images.unsplash.com/photo-1539641503454-3b20c45e87a5?w=1200&q=80'],
    },
  };
}