import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "艾菲爾鐵塔 | 法國巴黎",
    description: "暢遊巴黎艾菲爾鐵塔，從最佳拍攝機位到登塔體驗，全方位解析鐵塔的閃爍燈光與遊覽攻略。",
    keywords: ["艾菲爾鐵塔", "巴黎", "法國", "鐵塔", "登塔"],
    openGraph: {
      title: "艾菲爾鐵塔 | 法國巴黎",
      description: "暢遊巴黎艾菲爾鐵塔，從最佳拍攝機位到登塔體驗，全方位解析鐵塔的閃爍燈光與遊覽攻略。",
      images: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", alt: "艾菲爾鐵塔 | 法國巴黎" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
