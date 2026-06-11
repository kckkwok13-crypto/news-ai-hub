import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "嵐山竹林 | 日本京都",
    description: "漫步嵐山竹林小徑，穿越野宮神社，登上渡月橋，乘坐嵐山小火車的全方位遊覽攻略。",
    keywords: ["嵐山", "竹林", "京都", "日本", "渡月橋", "小火車"],
    openGraph: {
      title: "嵐山竹林 | 日本京都",
      description: "漫步嵐山竹林小徑，穿越野宮神社，登上渡月橋，乘坐嵐山小火車的全方位遊覽攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80", alt: "嵐山竹林 | 日本京都" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
