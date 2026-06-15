"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tContent = {
  yue: {
    title: "AI搜尋引擎大比拼：Perplexity vs 傳統搜尋",
    subtitle: "AI時代嘅資訊獲取方式革命",
    overview: `AI搜尋引擎正在顛覆我哋獲取資訊嘅方式。傳統搜尋引擎通過關鍵詞匹配返回網頁鏈接，而AI搜尋引擎則可以直接理解用戶問題，並生成綜合性嘅答案，同時附上引用來源。

 Perplexity AI、Arc Search、ChatGPT with Browsing等新型搜尋工具正在挑戰Google嘅領導地位。呢啲工具嘅出現標誌住搜尋引擎從「信息索引」向「信息助手」嘅重大轉變。

 根據最新數據，AI搜尋工具嘅市場份額喺過去一年增長咗300%，預計到2025年將佔據搜尋市場15%嘅份額。呢個趨勢顯示用戶對於更智能、更高效嘅資訊獲取方式有住強勁嘅需求。`,
    comparison: "功能比較",
    traditional: "傳統搜尋引擎",
    modern: "AI搜尋引擎",
    speed: "速度",
    traditionalSpeed: "快（秒級）",
    modernSpeed: "中等（5-15秒）",
    accuracy: "準確度",
    traditionalAcc: "依賴SEO排名",
    modernAcc: "事實核查引用",
    sources: "來源透明度",
    traditionalSrc: "需要自己判斷",
    modernSrc: "直接附上引用",
    userExperience: "用戶體驗",
    traditionalUX: "多步驟瀏覽",
    modernUX: "一步到位"
  },
  "zh-TW": {
    title: "AI搜尋引擎大比拼：Perplexity vs 傳統搜尋",
    subtitle: "AI時代的資訊獲取方式革命",
    overview: `AI搜尋引擎正在顛覆我們獲取資訊的方式。傳統搜尋引擎通過關鍵詞匹配返回網頁鏈接，而AI搜尋引擎則可以直接理解用戶問題，並生成綜合性的答案，同時附上引用來源。

 Perplexity AI、Arc Search、ChatGPT with Browsing等新型搜尋工具正在挑戰Google的領導地位。這些工具的出現標誌著搜尋引擎從「信息索引」向「信息助手」的重大轉變。

 根據最新數據，AI搜尋工具的市場份額在過去一年增長了300%，預計到2025年將佔據搜尋市場15%的份額。這個趨勢顯示用戶對於更智能、更高效的資訊獲取方式有著強勁的需求。`,
    comparison: "功能比較",
    traditional: "傳統搜尋引擎",
    modern: "AI搜尋引擎",
    speed: "速度",
    traditionalSpeed: "快（秒級）",
    modernSpeed: "中等（5-15秒）",
    accuracy: "準確度",
    traditionalAcc: "依賴SEO排名",
    modernAcc: "事實核查引用",
    sources: "來源透明度",
    traditionalSrc: "需要自己判斷",
    modernSrc: "直接附上引用",
    userExperience: "用戶體驗",
    traditionalUX: "多步驟瀏覽",
    modernUX: "一步到位"
  },
  "zh-CN": {
    title: "AI搜索引擎大比拼：Perplexity vs 传统搜索",
    subtitle: "AI时代的信息获取方式革命",
    overview: `AI搜索引擎正在颠覆我们获取资讯的方式。传统搜索引擎通过关键词匹配返回网页链接，而AI搜索引擎则可以直接理解用户问题，并生成综合性的答案，同时附上引用来源。

 Perplexity AI、Arc Search、ChatGPT with Browsing等新型搜索工具正在挑战Google的领导地位。这些工具的出现标志着搜索引擎从「信息索引」向「信息助手」的重大转变。

 根据最新数据，AI搜索工具的市场份额在过去一年增长了300%，预计到2025年将占据搜索市场15%的份额。这个趋势显示用户对于更智能、更高效的信息获取方式有着强劲的需求。`,
    comparison: "功能比较",
    traditional: "传统搜索引擎",
    modern: "AI搜索引擎",
    speed: "速度",
    traditionalSpeed: "快（秒级）",
    modernSpeed: "中等（5-15秒）",
    accuracy: "准确度",
    traditionalAcc: "依赖SEO排名",
    modernAcc: "事实核查引用",
    sources: "来源透明度",
    traditionalSrc: "需要自己判断",
    modernSrc: "直接附上引用",
    userExperience: "用户体验",
    traditionalUX: "多步骤浏览",
    modernUX: "一步到位"
  },
  en: {
    title: "AI Search Engine Showdown: Perplexity vs Traditional Search",
    subtitle: "The Revolution in Information Access in the AI Era",
    overview: `AI search engines are revolutionizing how we access information. Traditional search engines return webpage links through keyword matching, while AI search engines can directly understand user questions and generate comprehensive answers with source citations.

 New search tools like Perplexity AI, Arc Search, and ChatGPT with Browsing are challenging Google's leadership. The emergence of these tools marks a major shift in search engines from "information indexing" to "information assistant."

 According to latest data, AI search tools' market share has grown 300% in the past year, expected to capture 15% of the search market by 2025. This trend shows strong user demand for smarter and more efficient information access.`,
    comparison: "Feature Comparison",
    traditional: "Traditional Search",
    modern: "AI Search",
    speed: "Speed",
    traditionalSpeed: "Fast (seconds)",
    modernSpeed: "Medium (5-15s)",
    accuracy: "Accuracy",
    traditionalAcc: "SEO dependent",
    modernAcc: "Fact-checked citations",
    sources: "Source Transparency",
    traditionalSrc: "Judge yourself",
    modernSrc: "Direct citations",
    userExperience: "User Experience",
    traditionalUX: "Multi-step browsing",
    modernUX: "One-stop answer"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-sm rounded-full mb-3">AI Search</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.comparison}</h2>
          <div className="h-80">
            <svg viewBox="0 0 600 320" className="w-full h-full">
              <rect x="50" y="20" width="500" height="40" fill="#3B82F6" rx="4" />
              <text x="300" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{content.traditional}</text>
              <rect x="50" y="70" width="500" height="40" fill="#10B981" rx="4" />
              <text x="300" y="95" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">{content.modern}</text>
              <rect x="50" y="130" width="150" height="150" fill="#F3F4F6" rx="4" />
              <text x="125" y="200" textAnchor="middle" fill="#6B7280" fontSize="10">{content.traditionalSpeed}</text>
              <rect x="220" y="130" width="150" height="150" fill="#E5E7EB" rx="4" />
              <text x="295" y="200" textAnchor="middle" fill="#6B7280" fontSize="10">{content.traditionalAcc}</text>
              <rect x="390" y="130" width="150" height="150" fill="#D1D5DB" rx="4" />
              <text x="465" y="200" textAnchor="middle" fill="#6B7280" fontSize="10">{content.traditionalSrc}</text>
              <rect x="50" y="130" width="500" height="30" fill="#E5E7EB" rx="4" />
              <text x="300" y="150" textAnchor="middle" fill="#1F2937" fontSize="11">{content.speed}</text>
              <text x="125" y="250" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">{content.modernSpeed}</text>
              <text x="295" y="250" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">{content.modernAcc}</text>
              <text x="465" y="250" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold">{content.modernSrc}</text>
            </svg>
          </div>
        </section>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">{lang === "en" ? "Market Growth" : "市場增長"}</h3>
          <p className="text-3xl font-bold">+300%</p>
          <p className="text-cyan-100">{lang === "en" ? "Year over year growth" : "同比增長"}</p>
        </div>
      </div>
    </div>
  );
}