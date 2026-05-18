import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '純粹旅人 Journey | NewsFlow Travel Blog',
  description: '用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍 深度旅遊攻略，覆蓋東京、大阪、京都、巴黎、羅馬、佛羅倫斯等熱門城市。',
  openGraph: {
    title: '純粹旅人 Journey | NewsFlow Travel Blog',
    description: '用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}