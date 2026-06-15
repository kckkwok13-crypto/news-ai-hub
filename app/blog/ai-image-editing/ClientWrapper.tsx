"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具比較" },
    { id: "features", title: "功能分析" }
  ],
  "zh-TW": [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具比較" },
    { id: "features", title: "功能分析" }
  ],
  "zh-CN": [
    { id: "overview", title: "概述" },
    { id: "tools", title: "工具比较" },
    { id: "features", title: "功能分析" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "tools", title: "Tools" },
    { id: "features", title: "Features" }
  ]
};

const tContent = {
  yue: {
    title: "AI圖像編輯工具終極指南 2024",
    subtitle: "從修圖到生成，一站式AI視覺解決方案",
    overview: `AI圖像編輯工具正在徹底改變我哋處理視覺內容嘅方式。從簡單嘅背景移除到複雜嘅風格遷移，呢啲工具為設計師、攝影師同內容創作者提供咗前所未有嘅效率提升。

 根據最新市場數據，AI圖像編輯工具市場喺2024年達到咗28億美元嘅規模，預計到2028年將增長至65億美元，年複合增長率高達23.4%。呢個爆發式增長反映出市場對AI視覺處理技術嘅強勁需求。

 目前市場上最受歡迎嘅AI圖像編輯工具包括Adobe Firefly、Canva AI、Remove.bg、Fotor、Photoroom、Cutout Pro、PicWish同ZMO.ai等。每款工具都有其獨特嘅優勢同適用場景。`,
    toolsTitle: "熱門AI圖像編輯工具比較",
    tool1: "Adobe Firefly",
    tool1Feature: "創意生成 + 文字效果",
    tool2: "Canva AI",
    tool2Feature: "一站式設計平台",
    tool3: "Remove.bg",
    tool3Feature: "專業背景移除",
    tool4: "Fotor",
    tool4Feature: "智能美化和修圖",
    featuresTitle: "核心功能分析",
    feature1: "背景移除",
    feature1Desc: "一鍵移除複雜背景，邊緣處理精準",
    feature2: "風格遷移",
    feature2Desc: "將藝術風格應用於任何圖片",
    feature3: "智能修復",
    feature3Desc: "AI填充移除不需要的元素",
    feature4: "圖像增強",
    feature4Desc: "自動優化色彩、光線同清晰度"
  },
  "zh-TW": {
    title: "AI圖像編輯工具終極指南 2024",
    subtitle: "從修圖到生成，一站式AI視覺解決方案",
    overview: `AI圖像編輯工具正在徹底改變我們處理視覺內容的方式。從簡單的背景移除到複雜的風格遷移，這些工具為設計師、攝影師和內容創作者提供了前所未有的效率提升。

 根據最新市場數據，AI圖像編輯工具市場在2024年達到了28億美元的規模，預計到2028年將增長至65億美元，年複合增長率高達23.4%。這個爆發式增長反映出市場對AI視覺處理技術的強勁需求。

 目前市場上最受歡迎的AI圖像編輯工具包括Adobe Firefly、Canva AI、Remove.bg、Fotor、Photoroom、Cutout Pro、PicWish和ZMO.ai等。每款工具都有其獨特的優勢和適用場景。`,
    toolsTitle: "熱門AI圖像編輯工具比較",
    tool1: "Adobe Firefly",
    tool1Feature: "創意生成 + 文字效果",
    tool2: "Canva AI",
    tool2Feature: "一站式設計平台",
    tool3: "Remove.bg",
    tool3Feature: "專業背景移除",
    tool4: "Fotor",
    tool4Feature: "智能美化和修圖",
    featuresTitle: "核心功能分析",
    feature1: "背景移除",
    feature1Desc: "一鍵移除複雜背景，邊緣處理精準",
    feature2: "風格遷移",
    feature2Desc: "將藝術風格應用於任何圖片",
    feature3: "智能修復",
    feature3Desc: "AI填充移除不需要的元素",
    feature4: "圖像增強",
    feature4Desc: "自動優化色彩、光線和清晰度"
  },
  "zh-CN": {
    title: "AI图像编辑工具终极指南 2024",
    subtitle: "从修图到生成，一站式AI视觉解决方案",
    overview: `AI图像编辑工具正在彻底改变我们处理视觉内容的方式。从简单的背景移除到复杂的风格迁移，这些工具为设计师、摄影师和内容创作者提供了前所未有的效率提升。

 根据最新市场数据，AI图像编辑工具市场在2024年达到了28亿美元的规模，预计到2028年将增长至65亿美元，年复合增长率高达23.4%。这个爆发式增长反映出市场对AI视觉处理技术的强劲需求。

 目前市场上最受欢迎的AI图像编辑工具包括Adobe Firefly、Canva AI、Remove.bg、Fotor、Photoroom、Cutout Pro、PicWish和ZMO.ai等。每款工具都有其独特的优势和适用场景。`,
    toolsTitle: "热门AI图像编辑工具比较",
    tool1: "Adobe Firefly",
    tool1Feature: "创意生成 + 文字效果",
    tool2: "Canva AI",
    tool2Feature: "一站式设计平台",
    tool3: "Remove.bg",
    tool3Feature: "专业背景移除",
    tool4: "Fotor",
    tool4Feature: "智能美化和修图",
    featuresTitle: "核心功能分析",
    feature1: "背景移除",
    feature1Desc: "一键移除复杂背景，边缘处理精准",
    feature2: "风格迁移",
    feature2Desc: "将艺术风格应用于任何图片",
    feature3: "智能修复",
    feature3Desc: "AI填充移除不需要的元素",
    feature4: "图像增强",
    feature4Desc: "自动优化色彩、光线和清晰度"
  },
  en: {
    title: "Ultimate AI Image Editing Tools Guide 2024",
    subtitle: "From Retouching to Generation - All-in-One AI Vision Solutions",
    overview: `AI image editing tools are revolutionizing how we handle visual content. From simple background removal to complex style transfer, these tools provide unprecedented efficiency improvements for designers, photographers, and content creators.

 According to latest market data, the AI image editing tools market reached $2.8 billion in 2024 and is projected to grow to $6.5 billion by 2028, with a CAGR of 23.4%. This explosive growth reflects strong market demand for AI visual processing technology.

 Currently the most popular AI image editing tools include Adobe Firefly, Canva AI, Remove.bg, Fotor, Photoroom, Cutout Pro, PicWish, and ZMO.ai. Each tool has its unique advantages and use cases.`,
    toolsTitle: "Popular AI Image Editing Tools",
    tool1: "Adobe Firefly",
    tool1Feature: "Creative Generation + Text Effects",
    tool2: "Canva AI",
    tool2Feature: "All-in-One Design Platform",
    tool3: "Remove.bg",
    tool3Feature: "Professional Background Removal",
    tool4: "Fotor",
    tool4Feature: "Smart Enhancement & Retouching",
    featuresTitle: "Core Feature Analysis",
    feature1: "Background Removal",
    feature1Desc: "One-click removal with precise edge handling",
    feature2: "Style Transfer",
    feature2Desc: "Apply artistic styles to any image",
    feature3: "Smart Repair",
    feature3Desc: "AI fill to remove unwanted elements",
    feature4: "Image Enhancement",
    feature4Desc: "Auto-optimize color, lighting, and clarity"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1547089556-8213c3b3e07c?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-3">AI Image</span>
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
          <div className="h-64">
            <svg viewBox="0 0 600 250" className="w-full h-full">
              <rect x="30" y="20" width="130" height="100" fill="#FF6B6B" rx="8" />
              <text x="95" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.tool1}</text>
              <text x="95" y="80" textAnchor="middle" fill="white" fontSize="9">{content.tool1Feature}</text>
              <rect x="180" y="20" width="130" height="100" fill="#4ECDC4" rx="8" />
              <text x="245" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.tool2}</text>
              <text x="245" y="80" textAnchor="middle" fill="white" fontSize="9">{content.tool2Feature}</text>
              <rect x="330" y="20" width="130" height="100" fill="#45B7D1" rx="8" />
              <text x="395" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.tool3}</text>
              <text x="395" y="80" textAnchor="middle" fill="white" fontSize="9">{content.tool3Feature}</text>
              <rect x="480" y="20" width="130" height="100" fill="#96CEB4" rx="8" />
              <text x="545" y="55" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.tool4}</text>
              <text x="545" y="80" textAnchor="middle" fill="white" fontSize="9">{content.tool4Feature}</text>
              <rect x="30" y="140" width="580" height="80" fill="#F8F9FA" rx="8" />
              <text x="320" y="165" textAnchor="middle" fill="#6B7280" fontSize="12">Market Share Distribution 2024</text>
              <rect x="60" y="175" width="100" height="20" fill="#FF6B6B" rx="4" />
              <rect x="170" y="175" width="120" height="20" fill="#4ECDC4" rx="4" />
              <rect x="300" y="175" width="90" height="20" fill="#45B7D1" rx="4" />
              <rect x="400" y="175" width="80" height="20" fill="#96CEB4" rx="4" />
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.featuresTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: content.feature1, desc: content.feature1Desc, color: "bg-blue-100 border-blue-200" },
              { title: content.feature2, desc: content.feature2Desc, color: "bg-purple-100 border-purple-200" },
              { title: content.feature3, desc: content.feature3Desc, color: "bg-green-100 border-green-200" },
              { title: content.feature4, desc: content.feature4Desc, color: "bg-orange-100 border-orange-200" }
            ].map((f, i) => (
              <div key={i} className={`${f.color} border rounded-xl p-5`}>
                <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}