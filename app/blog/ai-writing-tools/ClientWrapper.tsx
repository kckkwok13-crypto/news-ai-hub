"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具推薦" },
    { id: "features", title: "功能比較" },
    { id: "tips", title: "使用技巧" }
  ],
  "zh-TW": [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具推薦" },
    { id: "features", title: "功能比較" },
    { id: "tips", title: "使用技巧" }
  ],
  "zh-CN": [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具推荐" },
    { id: "features", title: "功能比较" },
    { id: "tips", title: "使用技巧" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "tools", title: "Tools" },
    { id: "features", title: "Features" },
    { id: "tips", title: "Tips" }
  ]
};

const tContent = {
  yue: {
    title: "2024年度AI寫作工具全面比較",
    subtitle: "10款頂尖AI寫作助手詳細評測",
    overview: `AI寫作工具市場喺2024年經歷咗爆發式增長，越來越多嘅內容創作者、企業同個人開始使用AI輔助寫作。呢啲工具唔單止可以幫助用戶快速生成文章、博客、營銷文案，仲可以進行語法校正、風格優化同SEO優化。

 今次評測涵蓋咗市場上最受欢迎嘅10款AI寫作工具，包括ChatGPT、Jasper、Copy.ai、Rytr、Writesonic、Article Forge、INK、Scrapebox、Anyword同LongShot AI。我哋從功能、價格、質量、易用性等多個維度進行咗全面評估。

 根據最新數據顯示，AI寫作工具嘅市場規模已經超過咗50億美元，預計到2027年將增長至150億美元。呢個增長趨勢顯示咗AI寫作技術嘅巨大潛力同市場需求。`,
    toolsTitle: "頂尖AI寫作工具推薦",
    tool1Name: "ChatGPT",
    tool1Desc: "全方位AI助手，強大嘅語言理解和生成能力",
    tool2Name: "Jasper",
    tool2Desc: "專業營銷文案生成，內置SEO優化功能",
    tool3Name: "Copy.ai",
    tool3Desc: "專注社交媒體同廣告文案創作",
    tool4Name: "Rytr",
    tool4Desc: "性價比高，適合個人創作者同小型企業",
    featuresTitle: "功能比較表",
    feature1: "語法校正",
    feature2: "風格優化",
    feature3: "SEO優化",
    feature4: "多語言",
    feature5: "情感分析",
    tipsTitle: "使用技巧同建議",
    tip1: "明確指令：提供清晰、具體嘅寫作要求",
    tip2: "迭代優化：根據AI輸出進行多輪調整",
    tip3: "人工審核：始終保持人工審核確保質量",
    tip4: "結合靈感：將AI作為靈感來源而非完全替代"
  },
  "zh-TW": {
    title: "2024年度AI寫作工具全面比較",
    subtitle: "10款頂尖AI寫作助手詳細評測",
    overview: `AI寫作工具市場在2024年經歷了爆發式增長，越來越多的內容創作者、企業和個人開始使用AI輔助寫作。這些工具不僅可以幫助用戶快速生成文章、博客、營銷文案，還可以進行語法校正、風格優化和SEO優化。

 今次評測涵蓋了市場上最受歡迎的10款AI寫作工具，包括ChatGPT、Jasper、Copy.ai、Rytr、Writesonic、Article Forge、INK、Scrapebox、Anyword和LongShot AI。我們從功能、價格、質量、易用性等多個維度進行了全面評估。

 根據最新數據顯示，AI寫作工具的市場規模已經超過了50億美元，預計到2027年將增長至150億美元。這個增長趨勢顯示了AI寫作技術的巨大潛力和市場需求。`,
    toolsTitle: "頂尖AI寫作工具推薦",
    tool1Name: "ChatGPT",
    tool1Desc: "全方位AI助手，強大的語言理解和生成能力",
    tool2Name: "Jasper",
    tool2Desc: "專業營銷文案生成，內置SEO優化功能",
    tool3Name: "Copy.ai",
    tool3Desc: "專注社交媒體和廣告文案創作",
    tool4Name: "Rytr",
    tool4Desc: "性價比高，適合個人創作者和小型企業",
    featuresTitle: "功能比較表",
    feature1: "語法校正",
    feature2: "風格優化",
    feature3: "SEO優化",
    feature4: "多語言",
    feature5: "情感分析",
    tipsTitle: "使用技巧同建議",
    tip1: "明確指令：提供清晰、具體的寫作要求",
    tip2: "迭代優化：根據AI輸出進行多輪調整",
    tip3: "人工審核：始終保持人工審核確保質量",
    tip4: "結合靈感：將AI作為靈感來源而非完全替代"
  },
  "zh-CN": {
    title: "2024年度AI写作工具全面比较",
    subtitle: "10款顶尖AI写作助手详细评测",
    overview: `AI写作工具市场在2024年经历了爆发式增长，越来越多的内容创作者、企业和个人开始使用AI辅助写作。这些工具不仅可以帮用户快速生成文章、博客、营销文案，还可以进行语法校正、风格优化和SEO优化。

 本次评测涵盖了市场上最受欢迎的10款AI写作工具，包括ChatGPT、Jasper、Copy.ai、Rytr、Writesonic、Article Forge、INK、Scrapebox、Anyword和LongShot AI。我们从功能、价格、质量、易用性等多个维度进行了全面评估。

 根据最新数据显示，AI写作工具的市场规模已经超过了50亿美元，预计到2027年将增长至150亿美元。这个增长趋势显示了AI写作技术的巨大潜力和市场需求。`,
    toolsTitle: "顶尖AI写作工具推荐",
    tool1Name: "ChatGPT",
    tool1Desc: "全方位AI助手，强大的语言理解和生成能力",
    tool2Name: "Jasper",
    tool2Desc: "专业营销文案生成，内置SEO优化功能",
    tool3Name: "Copy.ai",
    tool3Desc: "专注社交媒体和广告文案创作",
    tool4Name: "Rytr",
    tool4Desc: "性价比高，适合个人创作者和小型企业",
    featuresTitle: "功能比较表",
    feature1: "语法校正",
    feature2: "风格优化",
    feature3: "SEO优化",
    feature4: "多语言",
    feature5: "情感分析",
    tipsTitle: "使用技巧和建议",
    tip1: "明确指令：提供清晰、具体的写作要求",
    tip2: "迭代优化：根据AI输出进行多轮调整",
    tip3: "人工审核：始终保持人工审核确保质量",
    tip4: "结合灵感：将AI作为灵感来源而非完全替代"
  },
  en: {
    title: "2024 AI Writing Tools Comprehensive Comparison",
    subtitle: "Detailed Review of 10 Top AI Writing Assistants",
    overview: `The AI writing tools market experienced explosive growth in 2024, with an increasing number of content creators, businesses, and individuals starting to use AI-assisted writing. These tools can not only help users quickly generate articles, blogs, and marketing copy, but also perform grammar correction, style optimization, and SEO optimization.

 This review covers the 10 most popular AI writing tools on the market, including ChatGPT, Jasper, Copy.ai, Rytr, Writesonic, Article Forge, INK, Scrapebox, Anyword, and LongShot AI. We conducted comprehensive evaluations across multiple dimensions including features, pricing, quality, and ease of use.

 According to latest data, the AI writing tools market has exceeded $5 billion and is expected to grow to $15 billion by 2027. This growth trend demonstrates the huge potential and market demand for AI writing technology.`,
    toolsTitle: "Top AI Writing Tools",
    tool1Name: "ChatGPT",
    tool1Desc: "All-round AI assistant with powerful language understanding",
    tool2Name: "Jasper",
    tool2Desc: "Professional marketing copy with built-in SEO",
    tool3Name: "Copy.ai",
    tool3Desc: "Focused on social media and ad copy creation",
    tool4Name: "Rytr",
    tool4Desc: "Great value, ideal for individual creators",
    featuresTitle: "Feature Comparison",
    feature1: "Grammar Check",
    feature2: "Style Optimization",
    feature3: "SEO Optimization",
    feature4: "Multi-language",
    feature5: "Sentiment Analysis",
    tipsTitle: "Usage Tips",
    tip1: "Clear Instructions: Provide specific writing requirements",
    tip2: "Iterative Optimization: Adjust based on AI output",
    tip3: "Human Review: Always maintain human oversight",
    tip4: "Combine Inspiration: Use AI as inspiration source"
  }
};

export default function ClientWrapper() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");

  useEffect(() => {
    const savedLang = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("travel_blog_lang", lang);
    window.dispatchEvent(new CustomEvent("travel-lang-change", { detail: lang }));
  }, [lang]);

  const content = tContent[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {(["yue", "zh-TW", "zh-CN", "en"] as TravelLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === l ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative h-72 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-3">AI Writing</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.toolsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: content.tool1Name, desc: content.tool1Desc, color: "bg-green-100" },
              { name: content.tool2Name, desc: content.tool2Desc, color: "bg-blue-100" },
              { name: content.tool3Name, desc: content.tool3Desc, color: "bg-yellow-100" },
              { name: content.tool4Name, desc: content.tool4Desc, color: "bg-red-100" }
            ].map((tool, i) => (
              <div key={i} className={`${tool.color} rounded-xl p-5`}>
                <h3 className="font-semibold text-gray-800 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.featuresTitle}</h2>
          <div className="h-72">
            <svg viewBox="0 0 600 280" className="w-full h-full">
              <rect x="50" y="40" width="500" height="30" fill="#E5E7EB" rx="4" />
              <rect x="50" y="40" width="480" height="30" fill="#10B981" rx="4" />
              <text x="300" y="60" textAnchor="middle" fill="white" fontSize="12">{content.feature1}</text>
              <rect x="50" y="85" width="500" height="30" fill="#E5E7EB" rx="4" />
              <rect x="50" y="85" width="420" height="30" fill="#3B82F6" rx="4" />
              <text x="260" y="105" textAnchor="middle" fill="white" fontSize="12">{content.feature2}</text>
              <rect x="50" y="130" width="500" height="30" fill="#E5E7EB" rx="4" />
              <rect x="50" y="130" width="350" height="30" fill="#F59E0B" rx="4" />
              <text x="225" y="150" textAnchor="middle" fill="white" fontSize="12">{content.feature3}</text>
              <rect x="50" y="175" width="500" height="30" fill="#E5E7EB" rx="4" />
              <rect x="50" y="175" width="490" height="30" fill="#8B5CF6" rx="4" />
              <text x="295" y="195" textAnchor="middle" fill="white" fontSize="12">{content.feature4}</text>
              <rect x="50" y="220" width="500" height="30" fill="#E5E7EB" rx="4" />
              <rect x="50" y="220" width="300" height="30" fill="#EF4444" rx="4" />
              <text x="200" y="240" textAnchor="middle" fill="white" fontSize="12">{content.feature5}</text>
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.tipsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[content.tip1, content.tip2, content.tip3, content.tip4].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}