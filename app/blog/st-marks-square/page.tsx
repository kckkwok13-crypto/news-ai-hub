import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "威尼斯聖馬可廣場 | 意大利",
    description: "漫步歐洲最美的客廳：威尼斯聖馬可廣場（Piazza San Marco）深度一日遊全攻略，探索黃金大教堂、總督宮與嘆息橋。",
    keywords: ["聖馬可廣場", "威尼斯", "意大利", "嘆息橋", "聖馬可大教堂", "總督宮"],
    openGraph: {
      title: "威尼斯聖馬可廣場 | 意大利",
      description: "漫步歐洲最美的客廳：威尼斯聖馬可廣場深度一日遊全攻略",
      images: [{ url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80", alt: "威尼斯聖馬可廣場" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
