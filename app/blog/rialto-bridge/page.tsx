import ClientWrapper from "./ClientWrapper";

export const generateMetadata = () => {
  return {
    title: "繾綣大運河的黃昏餘暉：威尼斯里奧托橋深度攻略",
    description: "橫跨1591年的白色大理石單拱石橋，威尼斯歷史最悠久且最著名的文藝復興建築。深度解鎖里奧托橋的建築傳奇、莎士比亞筆下的金融中心，以及攝影師私藏的避開人潮日落打卡位！",
    openGraph: {
      title: "繾綣大運河的黃昏餘暉：威尼斯里奧托橋深度攻略",
      description: "深度打卡與唯美日落攻略",
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ponte_di_Rialto%2C_Venezia.jpg/1280px-Ponte_di_Rialto%2C_Venezia.jpg"],
    },
  };
};

export default function Page() {
  return <ClientWrapper />;
}