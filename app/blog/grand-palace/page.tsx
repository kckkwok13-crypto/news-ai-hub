import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "大皇宮 | 泰國曼谷",
    description: "完整遊覽泰國曼谷大皇宮，玉佛寺、節基皇宮與參觀禮儀的詳細攻略。",
    keywords: ["大皇宮", "曼谷", "泰國", "玉佛寺", "皇宮"],
    openGraph: {
      title: "大皇宮 | 泰國曼谷",
      description: "完整遊覽泰國曼谷大皇宮，玉佛寺、節基皇宮與參觀禮儀的詳細攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80", alt: "大皇宮 | 泰國曼谷" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
