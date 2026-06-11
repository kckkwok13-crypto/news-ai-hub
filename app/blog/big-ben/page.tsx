import ClientWrapper from "./ClientWrapper";

import Comments from "@/components/Comments";


export const generateMetadata = () => {
  return {
    title: "倫敦大笨鐘 | 英國",
    description: "聆聽英倫的時光心跳：倫敦大笨鐘（Big Ben）深度打卡與泰晤士河散策攻略，攝影師私藏的四大神級拍照機位！",
    keywords: ["大笨鐘", "Big Ben", "倫敦", "英國", "伊麗莎白塔", "西敏寺"],
    openGraph: {
      title: "倫敦大笨鐘 | 英國",
      description: "聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略",
      images: [{ url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80", alt: "倫敦大笨鐘" }],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}