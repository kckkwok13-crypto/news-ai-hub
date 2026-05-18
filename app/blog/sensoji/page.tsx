import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "淺草寺 | 日本東京",
    description: "探索東京最古老的佛教寺廟，從雷門到寶藏門，全方位遊覽淺草寺的參拜攻略。",
    keywords: ["淺草寺", "東京", "日本", "佛教", "雷門", "仲見世"],
    openGraph: {
      title: "淺草寺 | 日本東京",
      description: "探索東京最古老的佛教寺廟，從雷門到寶藏門，全方位遊覽淺草寺的參拜攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c9e?w=1200&q=80", alt: "淺草寺 | 日本東京" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
