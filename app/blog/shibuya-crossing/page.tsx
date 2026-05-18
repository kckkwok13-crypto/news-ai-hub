import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "澀谷十字路口 | 日本東京",
    description: "體驗全球最繁忙的十字路口，從八公犬到星巴克觀景台，全方位遊覽澀谷十字路口的攻略。",
    keywords: ["澀谷", "十字路口", "東京", "日本", "八公", "購物"],
    openGraph: {
      title: "澀谷十字路口 | 日本東京",
      description: "體驗全球最繁忙的十字路口，從八公犬到星巴克觀景台，全方位遊覽澀谷十字路口的攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80", alt: "澀谷十字路口 | 日本東京" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
