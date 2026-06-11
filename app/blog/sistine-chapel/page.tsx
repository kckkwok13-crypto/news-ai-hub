import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "西斯廷教堂 | 梵蒂岡",
    description: "近距離欣賞米高安哲羅世紀壁畫《創世紀》與《最後審判》，全方位解讀西斯廷教堂的遊覽攻略。",
    keywords: ["西斯廷教堂", "梵蒂岡", "米高安哲羅", "創世紀", "最後審判", "文藝復興"],
    openGraph: {
      title: "西斯廷教堂 | 梵蒂岡",
      description: "近距離欣賞米高安哲羅世紀壁畫《創世紀》與《最後審判》，全方位解讀西斯廷教堂的遊覽攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1559094958-6e1d90e7c8ae?w=1200&q=80", alt: "西斯廷教堂 | 梵蒂岡" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
