import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "羅馬競技場 | 意大利羅馬",
    description: "探索古羅馬建築奇蹟，從地下層到頂層觀景台，全面解讀羅馬鬥獸場的購票攻略與遊覽提示。",
    keywords: ["羅馬競技場", "意大利", "古羅馬", "鬥獸場", "羅馬"],
    openGraph: {
      title: "羅馬競技場 | 意大利羅馬",
      description: "探索古羅馬建築奇蹟，從地下層到頂層觀景台，全面解讀羅馬鬥獸場的購票攻略與遊覽提示。",
      images: [{ url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80", alt: "羅馬競技場 | 意大利羅馬" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
