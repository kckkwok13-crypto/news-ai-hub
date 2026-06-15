"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

// Gemini performance data
const geminiData = {
  benchmarkScores: {
    MMMU: 62.4,
    MATH: 58.5,
    HumanEval: 84.1,
    GPQA: 53.2
  },
  contextLength: 1000000,
  multimodalCapabilities: 95,
  apiLatency: 850
};

const tocItems = {
  yue: [
    { id: "overview", title: "概述" },
    { id: "benchmarks", title: "效能測試" },
    { id: "features", title: "主要功能" },
    { id: "pricing", title: "定價方案" },
    { id: "comparison", title: "競品比較" }
  ],
  "zh-TW": [
    { id: "overview", title: "概述" },
    { id: "benchmarks", title: "效能測試" },
    { id: "features", title: "主要功能" },
    { id: "pricing", title: "定價方案" },
    { id: "comparison", title: "競品比較" }
  ],
  "zh-CN": [
    { id: "overview", title: "概述" },
    { id: "benchmarks", title: "性能测试" },
    { id: "features", title: "主要功能" },
    { id: "pricing", title: "定价方案" },
    { id: "comparison", title: "竞品比较" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "benchmarks", title: "Benchmarks" },
    { id: "features", title: "Key Features" },
    { id: "pricing", title: "Pricing" },
    { id: "comparison", title: "Comparison" }
  ]
};

const tContent = {
  yue: {
    title: "Google Gemini Pro 深度評測：最強多模態AI",
    subtitle: "100萬Token上下文、跨模態理解、免費使用",
    overview: `Google Gemini Pro 係 Google DeepMind 開發嘅旗艦級 AI 模型，佢嘅出現標誌住人工智能領域嘅重大突破。作為一款真正嘅多模態模型，Gemini Pro 能夠同時理解和處理文字、圖像、音頻、視頻等多種數據類型，呢個能力喺業界係領先水平。

 Gemini Pro 喺多個國際標準測試中表現出色，包括 MMMU 測試（62.4%）、MATH 數學推理測試（58.5%）、HumanEval 編程測試（84.1%）以及 GPQA 專家級問答測試（53.2%）。呢啲數據顯示佢唔單止喺一般語言理解方面表現優異，喺數學推理同代碼生成方面都有著強勁嘅實力。

 最令人驚嘆嘅係 Gemini Pro 支援高達100萬個 Token 嘅上下文窗口，呢個數字係目前業界最長嘅上下文處理能力之一。呢個特性令佢能夠處理極長嘅文檔、完整嘅代碼庫，甚至可以進行長篇小說嘅創作同分析。`,
    benchmarksTitle: "效能測試成績",
    benchmarksDesc: "Gemini Pro 喺各大標準測試中嘅表現：",
    mathLabel: "數學推理",
    codingLabel: "編程能力",
    reasoningLabel: "複雜推理",
    multimodalLabel: "多模態理解",
    featuresTitle: "主要功能特點",
    feature1Title: "原生多模態",
    feature1Desc: "Gemini Pro 從設計之初就係一款多模態模型，能夠無縫處理同理解文字、圖像、音頻、視頻等多種輸入格式，唔需要像其他模型咁需要將唔同模態轉換為文字。",
    feature2Title: "超長上下文",
    feature2Desc: "支援100萬 Token 嘅上下文窗口，可以一次性處理長篇文檔、完整代碼庫或長篇創作，為複雜任務提供更全面嘅語境理解。",
    feature3Title: "高效API",
    feature3Desc: "Gemini API 延遲低至850毫秒，配合 Google Cloud 基礎設施，提供穩定可靠嘅服務，支持企業級大規模部署。",
    feature4Title: "安全審查",
    feature4Desc: "內置先進嘅安全過濾系統，能夠識別同攔截有害內容，確保輸出符合道德規範同安全標準。",
    pricingTitle: "定價方案",
    pricingFree: "免費版",
    pricingPro: "Pro 版本",
    pricingEnterprise: "企業版",
    pricingDesc1: "每分鐘60次請求，100萬Token上下文",
    pricingDesc2: "每分鐘60次請求，高用量配額",
    pricingDesc3: "無限請求，專屬支援，定制化服務",
    comparisonTitle: "與其他模型比較",
    comparisonDesc: "Gemini Pro 喺多個維度嘅表現："
  },
  "zh-TW": {
    title: "Google Gemini Pro 深度評測：最強多模態AI",
    subtitle: "100萬Token上下文、跨模態理解、免費使用",
    overview: `Google Gemini Pro 是 Google DeepMind 開發的旗艦級 AI 模型，它的出現標誌著人工智能領域的重大突破。作為一款真正的多模態模型，Gemini Pro 能夠同時理解和處理文字、圖像、音頻、視頻等多種數據類型，這個能力在業界處於領先水平。

 Gemini Pro 在多個國際標準測試中表現出色，包括 MMMU 測試（62.4%）、MATH 數學推理測試（58.5%）、HumanEval 編程測試（84.1%）以及 GPQA 專家級問答測試（53.2%）。這些數據顯示它不僅在一般語言理解方面表現優異，在數學推理和代碼生成方面都有著強勁的實力。

 最令人驚嘆的是 Gemini Pro 支援高達100萬個 Token 的上下文窗口，這個數字是目前業界最長的上下文處理能力之一。這個特性令它能夠處理極長的文檔、完整的代碼庫，甚至可以進行長篇小說的創作和分析。`,
    benchmarksTitle: "效能測試成績",
    benchmarksDesc: "Gemini Pro 在各大標準測試中的表現：",
    mathLabel: "數學推理",
    codingLabel: "編程能力",
    reasoningLabel: "複雜推理",
    multimodalLabel: "多模態理解",
    featuresTitle: "主要功能特點",
    feature1Title: "原生多模態",
    feature1Desc: "Gemini Pro 從設計之初就是一款多模態模型，能夠無縫處理和理解文字、圖像、音頻、視頻等多種輸入格式，不需要像其他模型那樣需要將不同模態轉換為文字。",
    feature2Title: "超長上下文",
    feature2Desc: "支援100萬 Token 的上下文窗口，可以一次性處理長篇文檔、完整代碼庫或長篇創作，為複雜任務提供更全面的語境理解。",
    feature3Title: "高效API",
    feature3Desc: "Gemini API 延遲低至850毫秒，配合 Google Cloud 基礎設施，提供穩定可靠的服務，支持企業級大規模部署。",
    feature4Title: "安全審查",
    feature4Desc: "內置先進的安全過濾系統，能夠識別和攔截有害內容，確保輸出符合道德規範和安全標準。",
    pricingTitle: "定價方案",
    pricingFree: "免費版",
    pricingPro: "Pro 版本",
    pricingEnterprise: "企業版",
    pricingDesc1: "每分鐘60次請求，100萬Token上下文",
    pricingDesc2: "每分鐘60次請求，高用量配額",
    pricingDesc3: "無限請求，專屬支援，定制化服務",
    comparisonTitle: "與其他模型比較",
    comparisonDesc: "Gemini Pro 在多個維度的表現："
  },
  "zh-CN": {
    title: "Google Gemini Pro 深度评测：最强多模态AI",
    subtitle: "100万Token上下文、跨模态理解、免费使用",
    overview: `Google Gemini Pro 是 Google DeepMind 开发的旗舰级 AI 模型，它的出现标志着人工智能领域的重大突破。作为一款真正的多模态模型，Gemini Pro 能够同时理解和处理文字、图像、音频、视频等多种数据类型，这个能力在业界处于领先水平。

 Gemini Pro 在多个国际标准测试中表现出色，包括 MMMU 测试（62.4%）、MATH 数学推理测试（58.5%）、HumanEval 编程测试（84.1%）以及 GPQA 专家级问答测试（53.2%）。这些数据显示它不仅在一般语言理解方面表现优异，在数学推理和代码生成方面都有着强劲的实力。

 最令人惊叹的是 Gemini Pro 支持高达100万个 Token 的上下文窗口，这个数字是目前业界最长的上下文处理能力之一。这个特性令它能够处理极长的文档、完整的代码库，甚至可以进行长篇小说的创作和分析。`,
    benchmarksTitle: "性能测试成绩",
    benchmarksDesc: "Gemini Pro 在各大标准测试中的表现：",
    mathLabel: "数学推理",
    codingLabel: "编程能力",
    reasoningLabel: "复杂推理",
    multimodalLabel: "多模态理解",
    featuresTitle: "主要功能特点",
    feature1Title: "原生多模态",
    feature1Desc: "Gemini Pro 从设计之初就是一款多模态模型，能够无缝处理和理解文字、图像、音频、视频等多种输入格式，不需要像其他模型那样需要将不同模态转换为文字。",
    feature2Title: "超长上下文",
    feature2Desc: "支持100万 Token 的上下文窗口，可以一次性处理长篇文档、完整代码库或长篇创作，为复杂任务提供更全面的语境理解。",
    feature3Title: "高效API",
    feature3Desc: "Gemini API 延迟低至850毫秒，配合 Google Cloud 基础设施，提供稳定可靠的服务，支持企业级大规模部署。",
    feature4Title: "安全审查",
    feature4Desc: "内置先进的安全过滤系统，能够识别和拦截有害内容，确保输出符合道德规范和安全标准。",
    pricingTitle: "定价方案",
    pricingFree: "免费版",
    pricingPro: "Pro 版本",
    pricingEnterprise: "企业版",
    pricingDesc1: "每分钟60次请求，100万Token上下文",
    pricingDesc2: "每分钟60次请求，高用量配额",
    pricingDesc3: "无限请求，专属支持，定制化服务",
    comparisonTitle: "与其他模型比较",
    comparisonDesc: "Gemini Pro 在多个维度的表现："
  },
  en: {
    title: "Google Gemini Pro In-Depth Review: The Most Powerful Multimodal AI",
    subtitle: "1M Token Context, Cross-Modal Understanding, Free Access",
    overview: `Google Gemini Pro is the flagship AI model developed by Google DeepMind, marking a major breakthrough in artificial intelligence. As a true multimodal model, Gemini Pro can simultaneously understand and process various data types including text, images, audio, and video, placing it at the forefront of the industry.

 Gemini Pro has excelled in multiple international standard tests, including MMMU test (62.4%), MATH reasoning test (58.5%), HumanEval coding test (84.1%), and GPQA expert-level Q&A test (53.2%). These figures demonstrate that it not only performs exceptionally in general language understanding but also shows strong capabilities in mathematical reasoning and code generation.

 Most impressively, Gemini Pro supports up to 1 million tokens of context window, one of the longest context processing capabilities in the industry. This feature enables it to handle extremely long documents, complete codebases, and even create and analyze long-form novels.`,
    benchmarksTitle: "Benchmark Results",
    benchmarksDesc: "Gemini Pro performance in major standard tests:",
    mathLabel: "Math Reasoning",
    codingLabel: "Coding Ability",
    reasoningLabel: "Complex Reasoning",
    multimodalLabel: "Multimodal Understanding",
    featuresTitle: "Key Features",
    feature1Title: "Native Multimodal",
    feature1Desc: "Gemini Pro was designed from the ground up as a multimodal model, capable of seamlessly processing and understanding text, images, audio, video and other input formats without needing to convert different modalities to text like other models.",
    feature2Title: "Extended Context",
    feature2Desc: "Supports 1 million token context window, can process long documents, complete codebases or long-form content in one go, providing more comprehensive context understanding for complex tasks.",
    feature3Title: "High-Speed API",
    feature3Desc: "Gemini API latency as low as 850ms, backed by Google Cloud infrastructure, providing stable and reliable service supporting enterprise-level large-scale deployment.",
    feature4Title: "Safety Filters",
    feature4Desc: "Built-in advanced safety filtering system that can identify and block harmful content, ensuring output complies with ethical standards and safety requirements.",
    pricingTitle: "Pricing Plans",
    pricingFree: "Free Version",
    pricingPro: "Pro Version",
    pricingEnterprise: "Enterprise",
    pricingDesc1: "60 requests/min, 1M token context",
    pricingDesc2: "60 requests/min, higher quota",
    pricingDesc3: "Unlimited requests, dedicated support",
    comparisonTitle: "Comparison with Other Models",
    comparisonDesc: "Gemini Pro performance across multiple dimensions:"
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
  const toc = tocItems[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Selector */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {(["yue", "zh-TW", "zh-CN", "en"] as TravelLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === l
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
            AI Model
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-5 shadow-sm sticky top-24">
              <h3 className="font-semibold mb-3 text-gray-800">目錄</h3>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview */}
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            {/* Benchmarks Chart */}
            <section id="benchmarks" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.benchmarksTitle}</h2>
              <p className="text-gray-600 mb-6">{content.benchmarksDesc}</p>
              <div className="h-80">
                <svg viewBox="0 0 600 300" className="w-full h-full">
                  <rect x="50" y="220" width="100" height="60" fill="#3B82F6" rx="4" />
                  <text x="100" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{geminiData.benchmarkScores.MMMU}%</text>
                  <rect x="200" y="124" width="100" height="156" fill="#10B981" rx="4" />
                  <text x="250" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{geminiData.benchmarkScores.MATH}%</text>
                  <rect x="350" y="47" width="100" height="233" fill="#F59E0B" rx="4" />
                  <text x="400" y="68" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{geminiData.benchmarkScores.HumanEval}%</text>
                  <rect x="500" y="140" width="100" height="140" fill="#EF4444" rx="4" />
                  <text x="550" y="161" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">{geminiData.benchmarkScores.GPQA}%</text>
                  <text x="100" y="270" textAnchor="middle" fill="#6B7280" fontSize="12">MMMU</text>
                  <text x="250" y="270" textAnchor="middle" fill="#6B7280" fontSize="12">MATH</text>
                  <text x="400" y="270" textAnchor="middle" fill="#6B7280" fontSize="12">HumanEval</text>
                  <text x="550" y="270" textAnchor="middle" fill="#6B7280" fontSize="12">GPQA</text>
                  <text x="300" y="25" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">Gemini Pro Benchmark Scores (%)</text>
                </svg>
              </div>
            </section>

            {/* Features */}
            <section id="features" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{content.feature1Title}</h3>
                  <p className="text-sm text-gray-600">{content.feature1Desc}</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{content.feature2Title}</h3>
                  <p className="text-sm text-gray-600">{content.feature2Desc}</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{content.feature3Title}</h3>
                  <p className="text-sm text-gray-600">{content.feature3Desc}</p>
                </div>
                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-800">{content.feature4Title}</h3>
                  <p className="text-sm text-gray-600">{content.feature4Desc}</p>
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.pricingTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-500 mb-2">{content.pricingFree}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">$0</div>
                  <div className="text-sm text-gray-600">{content.pricingDesc1}</div>
                </div>
                <div className="border-2 border-blue-500 rounded-xl p-6 text-center bg-blue-50">
                  <div className="text-sm text-blue-600 font-medium mb-2">{content.pricingPro}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">$19.99</div>
                  <div className="text-sm text-gray-600">{content.pricingDesc2}</div>
                </div>
                <div className="border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-500 mb-2">{content.pricingEnterprise}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{lang === "en" ? "Custom" : "定制"}</div>
                  <div className="text-sm text-gray-600">{content.pricingDesc3}</div>
                </div>
              </div>
            </section>

            {/* Comparison */}
            <section id="comparison" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.comparisonTitle}</h2>
              <p className="text-gray-600 mb-6">{content.comparisonDesc}</p>
              <div className="h-64">
                <svg viewBox="0 0 600 250" className="w-full h-full">
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="377" strokeDashoffset="0" />
                  <text x="100" y="105" textAnchor="middle" fill="#1F2937" fontSize="12" fontWeight="bold">Gemini</text>
                  <circle cx="250" cy="100" r="50" fill="none" stroke="#10B981" strokeWidth="8" strokeDasharray="314" strokeDashoffset="94" />
                  <text x="250" y="105" textAnchor="middle" fill="#1F2937" fontSize="12" fontWeight="bold">Claude</text>
                  <circle cx="380" cy="100" r="45" fill="none" stroke="#F59E0B" strokeWidth="8" strokeDasharray="283" strokeDashoffset="113" />
                  <text x="380" y="105" textAnchor="middle" fill="#1F2937" fontSize="12" fontWeight="bold">GPT-4</text>
                  <text x="300" y="200" textAnchor="middle" fill="#6B7280" fontSize="12">Model Capability Comparison (Radar View)</text>
                </svg>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}