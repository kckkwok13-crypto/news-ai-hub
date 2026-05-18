import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "聖彼得大教堂 | 梵蒂岡",
    description: "探索全球最大的教堂，從圓頂登頂到廣場廊柱，全方位解讀聖彼得大教堂的遊覽攻略。",
    keywords: ["聖彼得大教堂", "梵蒂岡", "天主教", "教堂", "米高安哲羅"],
    openGraph: {
      title: "聖彼得大教堂 | 梵蒂岡",
      description: "探索全球最大的教堂，從圓頂登頂到廣場廊柱，全方位解讀聖彼得大教堂的遊覽攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1548585744-3e3c7f4f0f79?w=1200&q=80", alt: "聖彼得大教堂 | 梵蒂岡" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
