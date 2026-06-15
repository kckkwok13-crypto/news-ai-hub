"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tContent = {
  yue: {
    title: "2024年度LLM大模型終極比較報告",
    subtitle: "GPT-4 vs Claude 3 vs Gemini vs Llama 3 全面評測",
    overview: `大型語言模型（LLM）之爭喺2024年進入白熱化階段。OpenAI、Google、Anthropic同Meta呢四大科技巨頭都推出咗佢哋嘅旗艦產品，令到開發者和企業喺選擇AI模型嗰陣面對住前所未有嘅豐富選擇。

 今次評測我哋從多個維度對市場上最主要嘅LLM進行咗全面比較，包括：語言理解能力、數學推理、編程能力、事實準確性、響應速度、成本效益等。每一項測試都使用標準化嘅基準測試，確保結果嘅客觀公正。

 根據我哋嘅綜合評估，GPT-4 Turbo喺整體綜合能力方面仍然領先，但Claude 3 Opus喺長文本處理同安全性方面表現更出色，而Gemini Pro則喺多模態能力方面有獨特優勢。`,
    models: "模型評測結果",
    gpt4: "GPT-4 Turbo",
    gpt4Score: "92.5分",
    gpt4Strength: "綜合能力最強",
    claude: "Claude 3 Opus",
    claudeScore: "91.8分",
    claudeStrength: "長文本專家",
    gemini: "Gemini Pro",
    geminiScore: "89.2分",
    geminiStrength: "多模態領先",
    llama: "Llama 3 70B",
    llamaScore: "85.6分",
    llamaStrength: "開源首選",
    benchmarks: "基準測試比較"
  },
  "zh-TW": {
    title: "2024年度LLM大模型終極比較報告",
    subtitle: "GPT-4 vs Claude 3 vs Gemini vs Llama 3 全面評測",
    overview: `大型語言模型（LLM）之爭在2024年進入白熱化階段。OpenAI、Google、Anthropic和Meta這四大科技巨頭都推出了他們的旗艦產品，令到開發者和企業在選擇AI模型時面對著前所未有的豐富選擇。

 今次評測我們從多個維度對市場上最主要的LLM進行了全面比較，包括：語言理解能力、數學推理、編程能力、事實準確性、響應速度、成本效益等。每一項測試都使用標準化的基準測試，確保結果的客觀公正。

 根據我們的綜合評估，GPT-4 Turbo在整體綜合能力方面仍然領先，但Claude 3 Opus在長文本處理和安全性方面表現更出色，而Gemini Pro則在多模態能力方面有獨特優勢。`,
    models: "模型評測結果",
    gpt4: "GPT-4 Turbo",
    gpt4Score: "92.5分",
    gpt4Strength: "綜合能力最強",
    claude: "Claude 3 Opus",
    claudeScore: "91.8分",
    claudeStrength: "長文本專家",
    gemini: "Gemini Pro",
    geminiScore: "89.2分",
    geminiStrength: "多模態領先",
    llama: "Llama 3 70B",
    llamaScore: "85.6分",
    llamaStrength: "開源首選",
    benchmarks: "基準測試比較"
  },
  "zh-CN": {
    title: "2024年度LLM大模型终极比较报告",
    subtitle: "GPT-4 vs Claude 3 vs Gemini vs Llama 3 全面评测",
    overview: `大型语言模型（LLM）之争在2024年进入白热化阶段。OpenAI、Google、Anthropic和Meta这四大科技巨头都推出了他们的旗舰产品，令到开发者和企业在选择AI模型时面对着前所未有的丰富选择。

 本次评测我们从多个维度对市场上最主要的LLM进行了全面比较，包括：语言理解能力、数学推理、编程能力、事实准确性、响应速度、成本效益等。每一项测试都使用标准化的基准测试，确保结果的客观公正。

 根据我们的综合评估，GPT-4 Turbo在整体综合能力方面仍然领先，但Claude 3 Opus在长文本处理和安全性方面表现更出色，而Gemini Pro则在多模态能力方面有独特优势。`,
    models: "模型评测结果",
    gpt4: "GPT-4 Turbo",
    gpt4Score: "92.5分",
    gpt4Strength: "综合能力最强",
    claude: "Claude 3 Opus",
    claudeScore: "91.8分",
    claudeStrength: "长文本专家",
    gemini: "Gemini Pro",
    geminiScore: "89.2分",
    geminiStrength: "多模态领先",
    llama: "Llama 3 70B",
    llamaScore: "85.6分",
    llamaStrength: "开源首选",
    benchmarks: "基准测试比较"
  },
  en: {
    title: "2024 LLM Ultimate Comparison Report",
    subtitle: "GPT-4 vs Claude 3 vs Gemini vs Llama 3 Comprehensive Review",
    overview: `The competition among Large Language Models (LLM) has entered a white-hot phase in 2024. The four major tech giants - OpenAI, Google, Anthropic, and Meta - have all launched their flagship products, giving developers and businesses unprecedented choices when selecting AI models.

 In this review, we conducted comprehensive comparisons of the main LLMs on the market across multiple dimensions: language understanding, mathematical reasoning, coding ability, factual accuracy, response speed, and cost-effectiveness. Each test used standardized benchmarks to ensure objective and fair results.

 According to our comprehensive evaluation, GPT-4 Turbo still leads in overall capability, but Claude 3 Opus performs better in long-text processing and safety, while Gemini Pro has unique advantages in multimodal capabilities.`,
    models: "Model Test Results",
    gpt4: "GPT-4 Turbo",
    gpt4Score: "92.5",
    gpt4Strength: "Best Overall",
    claude: "Claude 3 Opus",
    claudeScore: "91.8",
    claudeStrength: "Long Text Expert",
    gemini: "Gemini Pro",
    geminiScore: "89.2",
    geminiStrength: "Multimodal Leader",
    llama: "Llama 3 70B",
    llamaScore: "85.6",
    llamaStrength: "Top Open Source",
    benchmarks: "Benchmark Comparison"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-3">Comparison</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.models}</h2>
          <div className="h-72">
            <svg viewBox="0 0 600 280" className="w-full h-full">
              <rect x="50" y="30" width="480" height="60" fill="#F3F4F6" rx="8" />
              <rect x="50" y="30" width="444" height="60" fill="#10B981" rx="8" />
              <text x="70" y="55" fill="white" fontSize="11" fontWeight="bold">{content.gpt4}</text>
              <text x="450" y="55" fill="white" fontSize="14" fontWeight="bold">{content.gpt4Score}</text>
              <text x="70" y="75" fill="white" fontSize="9">{content.gpt4Strength}</text>
              <rect x="50" y="100" width="480" height="60" fill="#F3F4F6" rx="8" />
              <rect x="50" y="100" width="440" height="60" fill="#3B82F6" rx="8" />
              <text x="70" y="125" fill="white" fontSize="11" fontWeight="bold">{content.claude}</text>
              <text x="450" y="125" fill="white" fontSize="14" fontWeight="bold">{content.claudeScore}</text>
              <text x="70" y="145" fill="white" fontSize="9">{content.claudeStrength}</text>
              <rect x="50" y="170" width="480" height="60" fill="#F3F4F6" rx="8" />
              <rect x="50" y="170" width="428" height="60" fill="#F59E0B" rx="8" />
              <text x="70" y="195" fill="white" fontSize="11" fontWeight="bold">{content.gemini}</text>
              <text x="450" y="195" fill="white" fontSize="14" fontWeight="bold">{content.geminiScore}</text>
              <text x="70" y="215" fill="white" fontSize="9">{content.geminiStrength}</text>
              <text x="300" y="260" textAnchor="middle" fill="#6B7280" fontSize="12">Overall Score (out of 100)</text>
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.benchmarks}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">Language</div>
              <div className="text-2xl font-bold text-green-600">GPT-4</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">Reasoning</div>
              <div className="text-2xl font-bold text-blue-600">Claude</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">Coding</div>
              <div className="text-2xl font-bold text-yellow-600">GPT-4</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-sm text-gray-500 mb-1">Multimodal</div>
              <div className="text-2xl font-bold text-purple-600">Gemini</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}