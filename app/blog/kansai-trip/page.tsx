import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "關西和風漫步：京阪神六日慢活家庭遊",
    description: "大阪、京都、神戶6天5夜家庭慢活之旅。帶家人走訪嵐山竹林、金閣寺、神戶港夜景與大阪城，品嚐神戶牛與地道美食的完整攻略。",
    keywords: ["關西", "大阪", "京都", "神戶", "家庭遊", "六天", "慢活", "日本"],
    openGraph: {
      title: "關西和風漫步：京阪神六日慢活家庭遊",
      description: "大阪、京都、神戶6天5夜家庭慢活之旅完整攻略",
      images: ["/images/kansai-kansai-hero.jpg"],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}