import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "地中海驕陽與蔚藍：南意大利19天順序暢遊 | 純粹旅人",
    description: "一家三口19天深度暢遊南意大利：拿坡里、龐貝、維蘇威火山、阿瑪菲海岸、卡布里島、蘑菇屋、馬泰拉、西西里島全景遊記攻略",
    keywords: ["南意大利", "拿坡里", "阿瑪菲海岸", "西西里島", "家庭旅遊", "19天遊記", "自由行攻略"],
    openGraph: {
      title: "地中海驕陽與蔚藍：南意大利19天順序暢遊",
      description: "一家三口19天深度暢遊南意大利慢活全攻略",
      images: [{ url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80", alt: "南意大利海岸風光" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}
