'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "metaverse-workplace",
  "id": "ep-9",
  "emoji": "🏢",
  "image": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-04",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "元宇宙職場：虛擬辦公室的崛起與人力資源管理的未來",
      "subtitle": "當同事變成 3D 頭像，我們的社交連結與工作效率會發生什麼變化？",
      "sections": [
        {
          "heading": "👓 沉浸式協作",
          "text": [
            "VR 與 AR 技術讓遠程辦公不再僅限於平面的 Zoom 會議。在虛擬辦公室中，空間感能顯著提升團隊的歸屬感。",
            "但同時，虛擬職場也帶來了「全天候監控」的疑慮。員工的一舉一動都可能被數據化，這對私隱邊界提出了挑戰。"
          ]
        },
        {
          "heading": "🏢 地理限制的消失",
          "text": "元宇宙讓全球人才庫真正互通。企業可以無縫僱用全球最優秀的人才，而人才也無需為了工作而遷移至昂貴的大城市。"
        }
      ],
      "conclusion": "元宇宙職場是遠程辦公的終極形態，它將徹底改寫「辦公室」的定義。"
    },
    "en": {
      "title": "Metaverse Workplace",
      "subtitle": "The 3D transformation of the 9-to-5.",
      "sections": [
        {
          "heading": "👓 Beyond Video Calls",
          "text": "Virtual environments restore the spontaneous water-cooler moments lost in remote work."
        }
      ],
      "conclusion": "The location of your office is now a coordinate, not a building."
    },
    "zh-CN": {
      "title": "元宇宙职场",
      "subtitle": "虚拟协作如何提升跨国团队效率。",
      "sections": [
        {
          "heading": "🏢 无边界人才",
          "text": "沉浸式技术让全球人才可以瞬间在同一空间内完成复杂的设计讨论。"
        }
      ],
      "conclusion": "灵活的工作模式将是未来企业的核心竞争力。"
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
