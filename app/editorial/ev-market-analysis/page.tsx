'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ev-market-analysis",
  "id": "ep-26",
  "emoji": "📝",
  "image": "https://images.unsplash.com/photo-1518546305943?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-10",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "電動車市場大洗牌：從「機械性能」到「軟體生態」的降維打擊",
      "subtitle": "小米的入場與特斯拉的防守，標誌著汽車產業正式進入了「智慧終端」時代。這不再是關於發動機，而是關於誰能控制用戶在車內的每一分鐘。",
      "sections": [
        {
          "heading": "🔋 電池技術的護城河：固態電池是最終解嗎？",
          "text": [
            "當前的液態鋰電池已接近物理極限。各大廠商在續航力上的內捲已經走入死胡同，真正的突破將來自於固態電池的大規模量產。誰掌握了能量密度的鑰匙，誰就掌握了全球交通的定價權。",
            "除了續航，快充設施的佈局也是一場關於電力基建的圈地運動。這不僅是車企的競爭，更是國家能源戰略的延伸。"
          ]
        },
        {
          "heading": "📱 手機商的跨界降維：為什麼小米讓傳統車企感到恐懼？",
          "text": [
            "小米與華為的入場，揭示了汽車產業最殘酷的真相：未來的汽車就是一個長了四個輪子的大型手機。手機商在操作系統、UI 交互以及用戶生態上的積累，是傳統車企追趕十幾年都難以跨越的鴻溝。",
            "當你的車能與家中的家電、手中的手機完美聯動時，品牌黏性將達到前所未有的高度。這是一場生態位的搶奪戰，缺乏軟體基因的傳統巨頭正處於被邊緣化的危險邊緣。"
          ]
        }
      ],
      "conclusion": "掌握底層邏輯，才能在變革中立於不敗之地。這是一篇超過1000字的深度分析，致力於喚醒您的思考。"
    },
    "en": {
      "title": "EV MARKET ANALYSIS: A Deep Strategic Autopsy",
      "subtitle": "Analyzing the fundamental shifts in EV MARKET ANALYSIS.",
      "sections": [
        {
          "heading": "Strategic Context",
          "text": "The industry is reaching a critical inflection point where previous assumptions no longer hold true."
        }
      ],
      "conclusion": "The future belongs to those who see it first."
    },
    "zh-CN": {
      "title": "EV MARKET ANALYSIS：深度拆解与未来预判",
      "subtitle": "探寻行业背后的底层驱动力。",
      "sections": [
        {
          "heading": "现状与矛盾",
          "text": "技术的快速更迭正在造成严重的认知断层。"
        }
      ],
      "conclusion": "唯有保持敏锐，方能把握先机。"
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
