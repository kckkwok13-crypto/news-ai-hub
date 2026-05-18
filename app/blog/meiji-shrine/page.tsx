import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "明治神宮 | 日本東京",
    description: "漫步東京明治神宮，從入口鳥居到寶物館，全方位遊覽這座城市綠洲的攻略。",
    keywords: ["明治神宮", "東京", "日本", "神社", "神宮"],
    openGraph: {
      title: "明治神宮 | 日本東京",
      description: "漫步東京明治神宮，從入口鳥居到寶物館，全方位遊覽這座城市綠洲的攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=1200&q=80", alt: "明治神宮 | 日本東京" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
