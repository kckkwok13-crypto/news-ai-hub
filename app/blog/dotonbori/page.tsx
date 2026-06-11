import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "道頓堀 | 日本大阪",
    description: "暢遊大阪道頓堀，固力果跑跑人、立體招牌、水上觀光船、法善寺横丁與必吃美食的完整攻略。",
    keywords: ["道頓堀", "大阪", "日本", "固力果", "美食"],
    openGraph: {
      title: "道頓堀 | 日本大阪",
      description: "暢遊大阪道頓堀，固力果跑跑人、立體招牌、水上觀光船、法善寺横丁與必吃美食的完整攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1200&q=80", alt: "道頓堀 | 日本大阪" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
