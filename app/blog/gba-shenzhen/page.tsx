import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "深圳2天慢活遊：東門老街懷舊 + 華強北科技尋寶 + 深圳灣日落",
    description: "退休後的深圳輕旅行！從羅湖過關只需30分鐘，帶你走訪東門老街尋找老香港味道、探索華強北黑科技、最後在深圳灣公園欣賞絕美日落。",
    keywords: ["深圳", "東門老街", "華強北", "深圳灣", "大灣區", "退休遊", "2天1夜"],
    openGraph: {
      title: "深圳2天慢活遊：東門老街懷舊 + 華強北科技尋寶 + 深圳灣日落",
      description: "退休後的深圳輕旅行！從羅湖過關只需30分鐘，帶你走訪東門老街尋找老香港味道、探索華強北黑科技、最後在深圳灣公園欣賞絕美日落。",
      images: [{ url: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200&q=80", alt: "深圳夜景" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}