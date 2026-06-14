import ClientWrapper from './ClientWrapper';

export default function LionMonumentPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '世界上最悲傷的石頭：瑞士琉森獅子紀念碑 | NewsKingdom',
    description: '馬克·吐溫說，這是世界上最讓人心碎、最感人的一塊石頭。探索瑞士琉森垂死獅子紀念碑背後的1792年鐵血歷史與忠誠悲歌。',
    keywords: '琉森, 獅子紀念碑, Lion Monument, 垂死獅子, 瑞士, 盧塞恩, 托瓦爾森, 瑞士雇傭兵',
    openGraph: {
      title: '世界上最悲傷的石頭：瑞士琉森獅子紀念碑',
      description: '馬克·吐溫說，這是世界上最讓人心碎、最感人的一塊石頭。探索瑞士琉森垂死獅子紀念碑背後的1792年鐵血歷史與忠誠悲歌。',
      images: ['https://upload.wikimedia.org/wikipedia/commons/0/01/Lion_Monument.jpg'],
    },
  };
}