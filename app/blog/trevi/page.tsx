import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "特萊維噴泉 | 意大利羅馬",
    description: "傳說投擲硬幣便能重返羅馬，全方位遊覽特萊維噴泉的歷史、習俗與遊覽攻略。",
    keywords: ["特萊維噴泉", "羅馬", "意大利", "許願池", "硬幣"],
    openGraph: {
      title: "特萊維噴泉 | 意大利羅馬",
      description: "傳說投擲硬幣便能重返羅馬，全方位遊覽特萊維噴泉的歷史、習俗與遊覽攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80", alt: "特萊維噴泉 | 意大利羅馬" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
