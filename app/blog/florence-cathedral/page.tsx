import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "佛羅倫斯大教堂 | 意大利佛羅倫斯",
    description: "探索文藝復興建築傑作，從圓頂登頂到地下考古區，全面解讀佛羅倫斯大教堂的參觀攻略。",
    keywords: ["佛羅倫斯大教堂", "意大利", "文藝復興", "百花大教堂", "佛羅倫斯"],
    openGraph: {
      title: "佛羅倫斯大教堂 | 意大利佛羅倫斯",
      description: "探索文藝復興建築傑作，從圓頂登頂到地下考古區，全面解讀佛羅倫斯大教堂的參觀攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c9e?w=1200&q=80", alt: "佛羅倫斯大教堂 | 意大利佛羅倫斯" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
