import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "韋爾納札橋 | 意大利佛羅倫斯",
    description: "漫步佛羅倫斯老橋韋爾納札橋，穿越珠寶店與藝術家攤位，全方位遊覽這座千年古橋的攻略。",
    keywords: ["韋爾納札橋", "老橋", "佛羅倫斯", "意大利", "皮件"],
    openGraph: {
      title: "韋爾納札橋 | 意大利佛羅倫斯",
      description: "漫步佛羅倫斯老橋韋爾納札橋，穿越珠寶店與藝術家攤位，全方位遊覽這座千年古橋的攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c9e?w=1200&q=80", alt: "韋爾納札橋 | 意大利佛羅倫斯" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
