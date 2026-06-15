"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const perplexityData = {
  accuracy: 94.2,
  responseTime: 1.2,
  sources: 45,
  dailyUsers: 8500000
};

const tocItems = {
  yue: [
    { id: "intro", title: "介紹" },
    { id: "features", title: "功能特點" },
    { id: "comparison", title: "比較ChatGPT" },
    { id: "pricing", title: "定價" }
  ],
  "zh-TW": [
    { id: "intro", title: "介紹" },
    { id: "features", title: "功能特點" },
    { id: "comparison", title: "比較ChatGPT" },
    { id: "pricing", title: "定價" }
  ],
  "zh-CN": [
    { id: "intro", title: "介绍" },
    { id: "features", title: "功能特点" },
    { id: "comparison", title: "比较ChatGPT" },
    { id: "pricing", title: "定价" }
  ],
  en: [
    { id: "intro", title: "Introduction" },
    { id: "features", title: "Features" },
    { id: "comparison", title: "vs ChatGPT" },
    { id: "pricing", title: "Pricing" }
  ]
};

const tContent = {
  yue: {
    title: "Perplexity AI vs ChatGPT：AI搜尋引擎終極對決",
    subtitle: "850萬日活用戶的事實核查AI助手",
    intro: `喺 AI 助手領域，Perplexity AI 係一股新興力量，佢專注於提供有事實根據嘅回答，並即時引用來源。與傳統 AI 聊天機器人唔同，Perplexity 將自己定位為「AI 搜尋引擎」，旨在顛覆我哋獲取資訊嘅方式。

 Perplexity 嘅核心優勢喺於佢能夠實時爬取互聯網，为用戶提供最新資訊，同時附上詳細嘅引用來源。呢個功能喺研究、新聞追蹤同專業領域查詢方面特別有价值。

 根據最新數據，Perplexity 每日服務超過850萬活躍用戶，每月處理超過5億次查詢。佢嘅準確率達到94.2%，平均響應時間僅1.2秒，顯示佢喺速度同準確性方面嘅雙重優勢。`,
    featuresTitle: "核心功能",
    feature1: "即時網絡搜索：實時爬取最新網頁，確保資訊時效性",
    feature2: "引用來源追蹤：每個回答都附帶可驗證的來源連結",
    feature3: "線索深入挖掘：自動推薦相關問題，深入探索主題",
    feature4: "檔案分析：支援上傳PDF、文檔進行智能分析",
    comparisonTitle: "與ChatGPT比較",
    vsTitle1: "資訊來源",
    vsDesc1: "Perplexity實時搜索，互聯網最新資訊",
    vsTitle2: "引用透明",
    vsDesc2: "每句話都有來源，可直接點擊驗證",
    vsTitle3: "使用場景",
    vsDesc3: "更適合研究型查詢，快速事實核查",
    pricingTitle: "定價方案",
    free: "免費版：每日5次Pro搜索",
    pro: "Pro：$20/月，無限使用"
  },
  "zh-TW": {
    title: "Perplexity AI vs ChatGPT：AI搜尋引擎終極對決",
    subtitle: "850萬日活用戶的事實核查AI助手",
    intro: `在 AI 助手領域，Perplexity AI 是一股新興力量，它專注於提供有事實根據的回答，並即時引用來源。與傳統 AI 聊天機器人不同，Perplexity 將自己定位為「AI 搜尋引擎」，旨在顛覆我們獲取資訊的方式。

 Perplexity 的核心優勢在於它能夠實時爬取互聯網，為用戶提供最新資訊，同時附上詳細的引用來源。這個功能在研究、新聞追蹤和專業領域查詢方面特別有價值。

 根據最新數據，Perplexity 每日服務超過850萬活躍用戶，每月處理超過5億次查詢。它的準確率達到94.2%，平均響應時間僅1.2秒，顯示它在速度同準確性方面的雙重優勢。`,
    featuresTitle: "核心功能",
    feature1: "即時網絡搜索：實時爬取最新網頁，確保資訊時效性",
    feature2: "引用來源追蹤：每個回答都附帶可驗證的來源連結",
    feature3: "線索深入挖掘：自動推薦相關問題，深入探索主題",
    feature4: "檔案分析：支援上傳PDF、文檔進行智能分析",
    comparisonTitle: "與ChatGPT比較",
    vsTitle1: "資訊來源",
    vsDesc1: "Perplexity實時搜索，互聯網最新資訊",
    vsTitle2: "引用透明",
    vsDesc2: "每句話都有來源，可直接點擊驗證",
    vsTitle3: "使用場景",
    vsDesc3: "更適合研究型查詢，快速事實核查",
    pricingTitle: "定價方案",
    free: "免費版：每日5次Pro搜索",
    pro: "Pro：$20/月，無限使用"
  },
  "zh-CN": {
    title: "Perplexity AI vs ChatGPT：AI搜索引擎终极对决",
    subtitle: "850万日活用户的事实核查AI助手",
    intro: `在 AI 助手领域，Perplexity AI 是一股新兴力量，它专注于提供有事实根据的回答，并即时引用来源。与传统 AI 聊天机器人不同，Perplexity 将自己定位为「AI 搜索引擎」，旨在颠覆我们获取资讯的方式。

 Perplexity 的核心优势在于它能够实时爬取互联网，为用户提供最新资讯，同时附上详细的引用来源。这个功能在研究、新闻追踪和专业领域查询方面特别有价值。

 根据最新数据，Perplexity 每日服务超过850万活跃用户，每月处理超过5亿次查询。它的准确率达到94.2%，平均响应时间仅1.2秒，显示它在速度同准确性方面的双重优势。`,
    featuresTitle: "核心功能",
    feature1: "即时网络搜索：实时爬取最新网页，确保资讯时效性",
    feature2: "引用来源追踪：每个回答都附带可验证的来源链接",
    feature3: "线索深入挖掘：自动推荐相关问题，深入探索主题",
    feature4: "文件分析：支持上传PDF、文档进行智能分析",
    comparisonTitle: "与ChatGPT比较",
    vsTitle1: "资讯来源",
    vsDesc1: "Perplexity实时搜索，互联网最新资讯",
    vsTitle2: "引用透明",
    vsDesc2: "每句话都有来源，可直接点击验证",
    vsTitle3: "使用场景",
    vsDesc3: "更适合研究型查询，快速事实核查",
    pricingTitle: "定价方案",
    free: "免费版：每日5次Pro搜索",
    pro: "Pro：$20/月，无限使用"
  },
  en: {
    title: "Perplexity AI vs ChatGPT: The Ultimate AI Search Showdown",
    subtitle: "8.5M Daily Active Users' Fact-Checking AI Assistant",
    intro: `In the AI assistant landscape, Perplexity AI is emerging as a powerful force, focusing on providing fact-based answers with real-time source citations. Unlike traditional AI chatbots, Perplexity positions itself as an "AI search engine," aiming to revolutionize how we access information.

 Perplexity's core strength lies in its ability to crawl the internet in real-time, providing users with the latest information along with detailed citations. This feature is particularly valuable for research, news tracking, and professional domain queries.

 According to latest data, Perplexity serves over 8.5 million daily active users and processes over 500 million queries monthly. Its accuracy rate reaches 94.2% with an average response time of just 1.2 seconds, demonstrating its dual advantages in speed and accuracy.`,
    featuresTitle: "Core Features",
    feature1: "Real-time Web Search: Crawls latest pages for timely information",
    feature2: "Source Citations: Every answer includes verifiable source links",
    feature3: "Related Questions: Auto-recommends related topics for deeper exploration",
    feature4: "File Analysis: Supports PDF and document upload for smart analysis",
    comparisonTitle: "Comparison with ChatGPT",
    vsTitle1: "Information Source",
    vsDesc1: "Perplexity searches in real-time, latest internet info",
    vsTitle2: "Citation Transparency",
    vsDesc2: "Every statement has sources, directly verifiable",
    vsTitle3: "Use Cases",
    vsDesc3: "Better for research queries, rapid fact-checking",
    pricingTitle: "Pricing",
    free: "Free: 5 Pro searches per day",
    pro: "Pro: $20/month, unlimited"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-3">AI Search</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <section id="intro" className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.intro}</p>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.featuresTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[content.feature1, content.feature2, content.feature3, content.feature4].map((f, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.comparisonTitle}</h2>
            <div className="h-64">
              <svg viewBox="0 0 600 250" className="w-full h-full">
                <rect x="50" y="30" width="240" height="180" fill="#F3F4F6" rx="8" />
                <text x="170" y="60" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">Perplexity AI</text>
                <rect x="70" y="80" width="200" height="25" fill="#10B981" rx="4" />
                <text x="80" y="97" fill="white" fontSize="11">Accuracy: 94.2%</text>
                <rect x="70" y="115" width="200" height="25" fill="#3B82F6" rx="4" />
                <text x="80" y="132" fill="white" fontSize="11">Response: 1.2s</text>
                <rect x="70" y="150" width="200" height="25" fill="#F59E0B" rx="4" />
                <text x="80" y="167" fill="white" fontSize="11">Sources: 45 avg</text>
                <rect x="310" y="30" width="240" height="180" fill="#F3F4F6" rx="8" />
                <text x="430" y="60" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">ChatGPT</text>
                <rect x="330" y="80" width="200" height="25" fill="#10B981" rx="4" />
                <text x="340" y="97" fill="white" fontSize="11">Accuracy: 91.5%</text>
                <rect x="330" y="115" width="200" height="25" fill="#3B82F6" rx="4" />
                <text x="340" y="132" fill="white" fontSize="11">Response: 2.8s</text>
                <rect x="330" y="150" width="200" height="25" fill="#6B7280" rx="4" />
                <text x="340" y="167" fill="white" fontSize="11">Knowledge Cutoff</text>
                <text x="300" y="230" textAnchor="middle" fill="#6B7280" fontSize="12">Performance Comparison</text>
              </svg>
            </div>
          </section>

          <section className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.pricingTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <div className="text-sm text-gray-500 mb-1">{lang === "en" ? "Free" : "免費版"}</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">$0</div>
                <p className="text-sm text-gray-600">{content.free}</p>
              </div>
              <div className="border-2 border-blue-500 rounded-xl p-5 bg-blue-50">
                <div className="text-sm text-blue-600 font-medium mb-1">Pro</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">$20/月</div>
                <p className="text-sm text-gray-600">{content.pro}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}