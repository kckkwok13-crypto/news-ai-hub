import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "明洞 | 韓國首爾",
    description: "暢遊首爾明洞，從美妝購物到街頭美食，全方位體驗韓國時尚與美食的購物攻略。",
    keywords: ["明洞", "首爾", "韓國", "購物", "美食", "美妝"],
    openGraph: {
      title: "明洞 | 韓國首爾",
      description: "暢遊首爾明洞，從美妝購物到街頭美食，全方位體驗韓國時尚與美食的購物攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&q=80", alt: "明洞 | 韓國首爾" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
