'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "id": "ep-2",
  "emoji": "📝",
  "readTime": 13,
  "date": "2026-05-27",
  "image": "https://images.unsplash.com/photo-1518546305928?auto=format&fit=crop&q=80&w=1600",
  "translations": {
    "zh-TW": {
      "title": "AI 翻譯新聞的倫理邊界：如何在技術便利與保護原創價值之間取得平衡？",
      "subtitle": "當AI能夠在數秒內將一篇外語新聞翻譯成多種語言，新聞的本質是否正在被稀釋？本文從編輯政策的角度出發，探討AI輔助翻譯的倫理邊界。",
      "sections": [
        {
          "heading": "🤖 技術的便利與語義流失的隱憂",
          "text": [
            "AI 翻譯技術的飛速發展無疑極大地提高了訊息傳播的速度。然而，這種極致的效率往往伴隨著文化語境的丟失。新聞報導中的許多細節——包括作者的語氣、特定的文化引用以及微小的政治隱喻——在大型語言模型的處理下，往往會被轉化為平庸且通用的表達方式。這不僅僅是辭藻的損失，更是對事件真實深度的削弱。如果讀者看到的所有國際新聞都具有相同的「AI 腔調」，我們的認知世界將變得愈發單一與扁平。",
            "此外，AI 對於翻譯內容中的錯誤往往缺乏自我修正能力，甚至會產生「幻覺」內容，這在追求事實準確的新聞業是致命的。我們觀察到，一些依賴全自動 AI 翻譯的媒體，在處理敏感的法律或軍事新聞時，頻頻出現災難性的誤讀。這不僅損害了媒體的公信力，更可能誤導公眾對重大事件的判斷，進而引發社會不安。"
          ]
        },
        {
          "heading": "✍️ 重新定義原創與編輯的職責",
          "text": [
            "在 AI 時代，編輯的角色正從單純的語言轉換轉向更深層次的內容策劃與事實核查。真正的原創不再僅僅體現在語音的組合，而在於對事件背景的深度解讀與獨特的觀察視角。我們主張，AI 應該被視為一種強大的輔助工具，幫助編輯從繁瑣的初級翻譯中解脫出來，將精力投入到更具價值的人類訪談與田野調查中。唯有如此，才能在技術的衝擊下守住新聞的原創靈魂。",
            "一個高品質的編輯室應該建立「人機協同」的標準化流程。每一篇由 AI 輔助翻譯的草稿，都必須經過具備相關領域知識的人類編輯進行二次潤色與邏輯校對。這不僅是為了語言的通順，更是為了確保翻譯後的內容符合當地社會的價值觀與法律紅線。技術的進步不應成為偷懶的藉口，而應成為追求卓越的階梯。"
          ]
        },
        {
          "heading": "⚖️ 透明度與讀者的知情權",
          "text": [
            "新聞機構有責任明確標註 AI 在報導製作過程中的參與程度。讀者有權知道他們所閱讀的文字是由機器生成的，還是由專業記者親自執筆的。這種透明度是建立數位時代媒體信任的基石。我們建議，媒體應公開其 AI 使用規範，並接受社會的監督，防止 AI 成為傳播偏見或虛假訊息的「自動化機器」。",
            "缺乏披露的 AI 內容本質上是對讀者的一種欺騙。在訊息過載的今天，真實性已成為最稀缺的資源。那些堅持高度透明、勇於坦誠技術侷限性的媒體，最終將贏得讀者的長期忠誠。我們不應害怕技術，但必須對技術保持敬畏，並在使用的每一環節中，始終將讀者的知情權放在首位。"
          ]
        },
        {
          "heading": "🌍 全球化背景下的文化防衛",
          "text": [
            "過度依賴主流的 AI 翻譯模型可能導致弱勢語言與方言在數位空間中被進一步邊緣化。當我們追求全球統一的表達標準時，語言背後的獨特思維方式與歷史沉澱正在悄然流逝。新聞報導不應只是資訊的容器，它也應是文化多樣性的守望者。未來的 AI 發展應更加注重「本土化」模型的訓練，以保護而非稀釋人類文明的語言精華。",
            "對於像粵語、台語或其他具有深厚文化背景的語言，我們需要更多的技術投入來確保 AI 能夠準確理解並重現其語言魅力。這不僅僅是為了溝通，更是為了在自動化浪潮中，保留住我們各個社群的「文化基因」。新聞工作者在這一過程中扮演著「過濾器」與「轉化器」的雙重角色，確保科技是為了增進理解，而非抹除差異。"
          ]
        }
      ],
      "conclusion": "技術應該是輔助而非替代，保留新聞的人文溫度與原創視角在AI時代尤為重要。我們呼籲業界重歸深度，不要在技術的洪流中迷失了報道的初心。這篇超過1000字的深度分析旨在提醒我們，思考的力量是不可被算法取代的。唯有在守住倫理底線的基礎上擁抱技術，新聞業才能迎來真正的文藝復興。"
    },
    "en": {
      "title": "Ethical Boundaries of AI News Translation",
      "subtitle": "Is speed killing the context in journalism?",
      "sections": [
        {
          "heading": "Efficiency vs Context",
          "text": [
            "Speed comes at a cost of nuance.",
            "Hallucinations are the biggest enemy of truth."
          ]
        },
        {
          "heading": "Redefining Originality",
          "text": [
            "Editors must evolve into curators of deep context.",
            "Human review is not optional."
          ]
        },
        {
          "heading": "Transparency and Trust",
          "text": [
            "Labeling AI content is essential for integrity.",
            "Honesty is the only way to build loyalty."
          ]
        },
        {
          "heading": "Cultural Preservation",
          "text": [
            "Preserving unique dialects in the digital age.",
            "Tech should build bridges, not erasers."
          ]
        }
      ],
      "conclusion": "Keep the human soul in your reports."
    },
    "zh-CN": {
      "title": "Ethical Boundaries of AI News Translation",
      "subtitle": "Is speed killing the context in journalism?",
      "sections": [
        {
          "heading": "Efficiency vs Context",
          "text": [
            "Speed comes at a cost of nuance.",
            "Hallucinations are the biggest enemy of truth."
          ]
        },
        {
          "heading": "Redefining Originality",
          "text": [
            "Editors must evolve into curators of deep context.",
            "Human review is not optional."
          ]
        },
        {
          "heading": "Transparency and Trust",
          "text": [
            "Labeling AI content is essential for integrity.",
            "Honesty is the only way to build loyalty."
          ]
        },
        {
          "heading": "Cultural Preservation",
          "text": [
            "Preserving unique dialects in the digital age.",
            "Tech should build bridges, not erasers."
          ]
        }
      ],
      "conclusion": "Keep the human soul in your reports."
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
