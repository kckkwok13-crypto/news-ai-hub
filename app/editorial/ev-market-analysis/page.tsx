'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ev-market-analysis",
  "id": "ep-20",
  "emoji": "🚗",
  "image": "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-12",
  "readTime": 11,
  "translations": {
    "zh-TW": {
      "title": "電動車市場大洗牌：特斯拉、比亞迪與小米的世紀對決",
      "subtitle": "隨著智能手機廠商入場，電動車不再只是交通工具，而是最大的移動終端。",
      "sections": [
        {
          "heading": "🔋 電池技術的護城河",
          "text": "磷酸鐵鋰與固態電池之爭決定了續航與安全。誰能控制上游鋰礦與電池產能，誰就掌握了定價權。"
        },
        {
          "heading": "📱 車機系統的「手機化」",
          "text": "小米的入場證明了軟體生態的重要性。未來電動車的競爭焦點將從機械性能轉向自動駕駛算法與座艙交互體驗。"
        }
      ],
      "conclusion": "電動車上半場是電動化，下半場是智能化。那些缺乏軟體基因的傳統車企，正面臨被邊緣化的危機。"
    },
    "en": {
      "title": "EV Market Reshuffle: Tesla vs. BYD vs. Xiaomi",
      "subtitle": "Why the car is becoming the ultimate mobile device.",
      "sections": [
        {
          "heading": "🔋 The Battery Moat",
          "text": "Controlling the supply chain for minerals and cell manufacturing is the only way to survive the price wars initiated by Tesla."
        },
        {
          "heading": "📱 Software-Defined Vehicles",
          "text": "As smartphone makers like Xiaomi enter the fray, the battlefield is shifting from torque and horsepower to operating systems and autonomous logic."
        }
      ],
      "conclusion": "Hardware is becoming a commodity; the real profit in the EV industry will come from software services and AI autonomy."
    },
    "zh-CN": {
      "title": "电动车市场大洗牌：决战下半场",
      "subtitle": "智能化浪潮下的车企生死速递。",
      "sections": [
        {
          "heading": "🚗 跨界竞争",
          "text": "手机巨头入场加速了汽车行业的数字化转型，整车制造正在向智能终端演进。"
        }
      ],
      "conclusion": "唯有软硬一体的深度整合，才能赢得未来竞争。"
    }
  }
};
  
  return (
    <EditorialArticle 
      id={articleData.id}
      image={articleData.image}
      date={articleData.date}
      readTime={articleData.readTime}
      emoji={articleData.emoji}
      translations={articleData.translations}
    />
  )
}
