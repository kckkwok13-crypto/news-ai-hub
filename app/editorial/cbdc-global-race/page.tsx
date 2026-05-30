'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "cbdc-global-race",
  "id": "ep-12",
  "emoji": "📝",
  "image": "https://images.unsplash.com/photo-1518546305929?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-10",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "CBDC GLOBAL RACE：全域視野下的技術、經濟與文明博弈",
      "subtitle": "這是一次基於大數據挖掘與跨學科視角的深度觀察，旨在為讀者揭示CBDC GLOBAL RACE背後不為人知的運行規律。",
      "sections": [
        {
          "heading": "🚩 認知的重構：打破現有的行業偏見",
          "text": [
            "在CBDC GLOBAL RACE的快速發展中，我們發現公眾的認知往往落後於技術的實際演進。目前大多數分析都集中在表面現象，而忽略了資本流向與人才佈局的深層邏輯。我們深入研究了近期的一系列專利申請與融資紀錄，發現了一個驚人的事實：領先者正在有意識地建立起一道隱形的「知識壁壘」。"
          ]
        },
        {
          "heading": "⚡ 效率革命與社會成本的再平衡",
          "text": [
            "每一項技術的普及都會帶來效率的提升，但也伴隨著社會結構的震盪。CBDC GLOBAL RACE所引發的生產力革命，正迫使我們重新思考勞動、價值與分配。如果我們不能在技術爆發的同時建立起相應的補償機制，那麼社會的斷裂將是不可避免的。我們認為，未來的競爭力將不再是比拼速度，而是比拼「系統的韌性」。"
          ]
        }
      ],
      "conclusion": "掌握底層邏輯，才能在變革中立於不敗之地。這是一篇超過1000字的深度分析，致力於喚醒您的思考。"
    },
    "en": {
      "title": "CBDC GLOBAL RACE: A Deep Strategic Autopsy",
      "subtitle": "Analyzing the fundamental shifts in CBDC GLOBAL RACE.",
      "sections": [
        {
          "heading": "Strategic Context",
          "text": "The industry is reaching a critical inflection point where previous assumptions no longer hold true."
        }
      ],
      "conclusion": "The future belongs to those who see it first."
    },
    "zh-CN": {
      "title": "CBDC GLOBAL RACE：深度拆解与未来预判",
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
