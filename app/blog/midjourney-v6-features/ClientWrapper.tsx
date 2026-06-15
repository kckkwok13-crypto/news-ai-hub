"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "概述" },
    { id: "v6", title: "v6新功能" },
    { id: "prompts", title: "提示詞技巧" },
    { id: "pricing", title: "定價" }
  ],
  "zh-TW": [
    { id: "overview", title: "概述" },
    { id: "v6", title: "v6新功能" },
    { id: "prompts", title: "提示詞技巧" },
    { id: "pricing", title: "定價" }
  ],
  "zh-CN": [
    { id: "overview", title: "概述" },
    { id: "v6", title: "v6新功能" },
    { id: "prompts", title: "提示词技巧" },
    { id: "pricing", title: "定价" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "v6", title: "v6 Features" },
    { id: "prompts", title: "Prompt Tips" },
    { id: "pricing", title: "Pricing" }
  ]
};

const tContent = {
  yue: {
    title: "Midjourney v6 完整指南：AI繪圖新紀元",
    subtitle: "逼真度提升300%，文字生成功能上線",
    overview: `Midjourney v6 係2023年12月發布嘅重大版本更新，標誌著AI生成圖像領域嘅又一次重大突破。呢個版本喺圖像質量、提示詞理解、文本渲染等多個方面都有咗顯著提升。

 v6版本最令人矚目嘅新功能係終於支援喺圖像中生成文字，呢個功能喺之前嘅版本係完全無法實現嘅。用家而家可以通過簡單嘅提示詞，喺圖像中加入清晰、可讀嘅文字元素。

 除咗文字生成，v6仲提升咗以下能力：
 • 照片級真實感：人像和風景嘅真實度提升咗300%
 • 提示詞理解：複雜場景描述嘅理解準確率提升至92%
 • 風格控制：新增多個藝術風格預設
 • 圖像一致性：同一主題生成多個變體時保持高度一致`,
    v6Title: "v6核心升級",
    v6Feature1: "文字渲染：支持中英文文字生成，準確率達85%",
    v6Feature2: "真實感增強：光線、陰影、紋理處理更自然",
    v6Feature3: "語義理解：複雜抽象概念嘅表達更準確",
    v6Feature4: "一致性模式：保持角色和風格嘅跨圖像一致",
    promptsTitle: "高效提示詞公式",
    prompt1: "主體描述 + 環境設定 + 風格關鍵詞 + 參數",
    prompt2: "使用 :: 分隔不同元素，調整權重",
    prompt3: "加入 --ar 16:9 控制畫面比例",
    pricingTitle: "訂閱方案",
    basic: "Basic",
    basicPrice: "$10/月",
    basicDesc: "3.3小時GPU時間，200張圖",
    standard: "Standard",
    standardPrice: "$30/月",
    standardDesc: "15小時GPU時間，無限圖",
    pro: "Pro",
    proPrice: "$80/月",
    proDesc: "30小時GPU時間，隱私模式"
  },
  "zh-TW": {
    title: "Midjourney v6 完整指南：AI繪圖新紀元",
    subtitle: "逼真度提升300%，文字生成功能上線",
    overview: `Midjourney v6 是2023年12月發布的重大版本更新，標誌著AI生成圖像領域的又一次重大突破。這個版本在圖像質量、提示詞理解、文本渲染等多個方面都有顯著提升。

 v6版本最令人矚目的新功能是終於支持在圖像中生成文字，這個功能在之前的版本是完全無法實現的。用家現在可以通過簡單的提示詞，在圖像中加入清晰、可讀的文字元素。

 除了文字生成，v6還提升了以下能力：
 • 照片級真實感：人像和風景的真實度提升了300%
 • 提示詞理解：複雜場景描述的理解準確率提升至92%
 • 風格控制：新增多個藝術風格預設
 • 圖像一致性：同一主題生成多個變體時保持高度一致`,
    v6Title: "v6核心升級",
    v6Feature1: "文字渲染：支持中英文文字生成，準確率達85%",
    v6Feature2: "真實感增強：光線、陰影、紋理處理更自然",
    v6Feature3: "語義理解：複雜抽象概念的表達更準確",
    v6Feature4: "一致性模式：保持角色和風格的跨圖像一致",
    promptsTitle: "高效提示詞公式",
    prompt1: "主體描述 + 環境設定 + 風格關鍵詞 + 參數",
    prompt2: "使用 :: 分隔不同元素，調整權重",
    prompt3: "加入 --ar 16:9 控制畫面比例",
    pricingTitle: "訂閱方案",
    basic: "Basic",
    basicPrice: "$10/月",
    basicDesc: "3.3小時GPU時間，200張圖",
    standard: "Standard",
    standardPrice: "$30/月",
    standardDesc: "15小時GPU時間，無限圖",
    pro: "Pro",
    proPrice: "$80/月",
    proDesc: "30小時GPU時間，隱私模式"
  },
  "zh-CN": {
    title: "Midjourney v6 完整指南：AI绘图新纪元",
    subtitle: "逼真度提升300%，文字生成功能上线",
    overview: `Midjourney v6 是2023年12月发布的重大版本更新，标志着AI生成图像领域的又一次重大突破。这个版本在图像质量、提示词理解、文本渲染等多个方面都有了显著提升。

 v6版本最令人瞩目的新功能是终于支持在图像中生成文字，这个功能在之前的版本是完全无法实现的。用户现在可以通过简单的提示词，在图像中加入清晰、可读的文字元素。

 除了文字生成，v6还提升了以下能力：
 • 照片级真实感：人像和风景的真实度提升了300%
 • 提示词理解：复杂场景描述的理解准确率提升至92%
 • 风格控制：新增多个艺术风格预设
 • 图像一致性：同一主题生成多个变体时保持高度一致`,
    v6Title: "v6核心升级",
    v6Feature1: "文字渲染：支持中英文文字生成，准确率达85%",
    v6Feature2: "真实感增强：光线、阴影、纹理处理更自然",
    v6Feature3: "语义理解：复杂抽象概念的表达更准确",
    v6Feature4: "一致性模式：保持角色和风格的跨图像一致",
    promptsTitle: "高效提示词公式",
    prompt1: "主体描述 + 环境设定 + 风格关键词 + 参数",
    prompt2: "使用 :: 分隔不同元素，调整权重",
    prompt3: "加入 --ar 16:9 控制画面比例",
    pricingTitle: "订阅方案",
    basic: "Basic",
    basicPrice: "$10/月",
    basicDesc: "3.3小时GPU时间，200张图",
    standard: "Standard",
    standardPrice: "$30/月",
    standardDesc: "15小时GPU时间，无限图",
    pro: "Pro",
    proPrice: "$80/月",
    proDesc: "30小时GPU时间，隐私模式"
  },
  en: {
    title: "Midjourney v6 Complete Guide: New Era of AI Art",
    subtitle: "300% Photorealism Boost, Text Generation Now Available",
    overview: `Midjourney v6 is a major version update released in December 2023, marking another significant breakthrough in AI image generation. This version has made remarkable improvements in image quality, prompt understanding, and text rendering.

 The most eye-catching new feature of v6 is the ability to generate text within images, which was completely impossible in previous versions. Users can now add clear, readable text elements to images through simple prompts.

 Beyond text generation, v6 has enhanced the following capabilities:
 • Photorealism: Portrait and landscape realism improved by 300%
 • Prompt Understanding: Complex scene description accuracy improved to 92%
 • Style Control: Multiple new art style presets added
 • Image Consistency: Maintains high consistency across multiple variants`,
    v6Title: "v6 Core Upgrades",
    v6Feature1: "Text Rendering: Supports Chinese/English text generation at 85% accuracy",
    v6Feature2: "Enhanced Realism: More natural light, shadow, and texture handling",
    v6Feature3: "Semantic Understanding: More accurate complex abstract concept expression",
    v6Feature4: "Consistency Mode: Maintains character and style consistency across images",
    promptsTitle: "Effective Prompt Formulas",
    prompt1: "Subject + Environment + Style Keywords + Parameters",
    prompt2: "Use :: to separate elements and adjust weights",
    prompt3: "Add --ar 16:9 to control aspect ratio",
    pricingTitle: "Subscription Plans",
    basic: "Basic",
    basicPrice: "$10/month",
    basicDesc: "3.3 hours GPU time, 200 images",
    standard: "Standard",
    standardPrice: "$30/month",
    standardDesc: "15 hours GPU time, unlimited images",
    pro: "Pro",
    proPrice: "$80/month",
    proDesc: "30 hours GPU time, stealth mode"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1673259777773-a06eff440e1e?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm rounded-full mb-3">AI Art</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.v6Title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[content.v6Feature1, content.v6Feature2, content.v6Feature3, content.v6Feature4].map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.promptsTitle}</h2>
          <div className="bg-gray-900 rounded-xl p-5 text-gray-100 font-mono text-sm space-y-3">
            <p className="text-green-400">// {content.prompt1}</p>
            <p className="text-yellow-400">// {content.prompt2}</p>
            <p className="text-blue-400">// {content.prompt3}</p>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.pricingTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="text-sm text-gray-500 mb-1">{content.basic}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{content.basicPrice}</div>
              <p className="text-sm text-gray-600">{content.basicDesc}</p>
            </div>
            <div className="border-2 border-indigo-500 rounded-xl p-5 bg-indigo-50">
              <div className="text-sm text-indigo-600 font-medium mb-1">{content.standard}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{content.standardPrice}</div>
              <p className="text-sm text-gray-600">{content.standardDesc}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="text-sm text-gray-500 mb-1">{content.pro}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{content.proPrice}</div>
              <p className="text-sm text-gray-600">{content.proDesc}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}