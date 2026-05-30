'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "tech-giants-ai-race",
  "id": "ep-14",
  "emoji": "🏆",
  "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-24",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "科技巨頭的 AI 競賽：Google、Microsoft 與 Meta 誰能勝出？",
      "subtitle": "這不僅僅是功能的比拼，更是關於未來算力資源、數據入口與生態霸權的全面戰爭。",
      "sections": [
        {
          "heading": "🔥 開源 vs 閉源的博弈",
          "text": "Meta 透過 Llama 走開源路線試圖建立標準，而 Google 與 OpenAI 則守住其最先進的模型以獲取溢價。這場路徑之爭將決定互聯網的下一代權力結構。"
        },
        {
          "heading": "🏗️ 算力的地緣政治",
          "text": "擁有 Nvidia 芯片的人就擁有了未來。巨頭們正在瘋狂建設大型數據中心，電力與水資源正在成為科技戰的新戰場。"
        }
      ],
      "conclusion": "最終的勝者不一定是模型最強的，而是能最快將 AI 落地到千家萬戶日常場景中的那個。"
    },
    "en": {
      "title": "Tech Giants' AI Race: Battle for the Next Era",
      "subtitle": "Analyzing the strategies of Google, Microsoft, Meta, and the Apple dark horse.",
      "sections": [
        {
          "heading": "🔥 Ecosystem Integration",
          "text": "Microsoft has the edge in productivity software, but Google controls the primary gateway to information. The winner will be the one who becomes the ultimate personal agent."
        },
        {
          "heading": "🏗️ The Compute Moat",
          "text": "Success depends on vertical integration. Those who design their own silicon and secure renewable energy sources will have a massive long-term cost advantage."
        }
      ],
      "conclusion": "This is the new \"Space Race,\" and the winner will control the digital infrastructure of the 21st century."
    },
    "zh-CN": {
      "title": "科技巨头的 AI 竞赛：谁领风骚",
      "subtitle": "全球科技霸权的数字化重构。",
      "sections": [
        {
          "heading": "🏆 战略对垒",
          "text": "巨头们在模型能力、生态集成与算力储备上全方位竞争，预示着互联网格局的巨变。"
        }
      ],
      "conclusion": "创新速度决定生存空间，应用场景是关键。"
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
