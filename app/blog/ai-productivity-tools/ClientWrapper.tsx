"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tContent = {
  yue: {
    title: "2024年度最佳AI生產力工具推薦",
    subtitle: "提升效率300%的秘密武器",
    overview: `AI生產力工具已經成為現代職場人士必備嘅數碼助手。呢啲工具可以幫我哋自動化重複性工作、優化工作流程、仲可以提供智能建議，令到我哋可以專注於更有價值嘅創造性工作。

 根據最新研究顯示，使用AI生產力工具嘅專業人士平均可以提升40%嘅工作效率，節省至少3個小時嘅日常工作時間。呢個數據說明AI工具唔係單單係科技愛好者嘅玩物，而係真正可以改變我哋工作方式嘅實用工具。

 今次為大家整理咗涵蓋多個領域嘅頂尖AI生產力工具，包括日程管理、文檔處理、郵件撰寫、項目管理等，每款工具都經過實際測試，確保佢哋真正可以提升工作效率。`,
    categories: "工具分類推薦",
    category1: "日程管理",
    category2: "文檔處理",
    category3: "郵件助手",
    category4: "項目管理",
    benefits: "使用AI工具嘅效益",
    benefit1: "時間節省：平均每日節省3小時",
    benefit2: "效率提升：工作處理速度提高40%",
    benefit3: "錯誤減少：自動化減少人為失誤",
    benefit4: "壓力降低：減輕認知負荷"
  },
  "zh-TW": {
    title: "2024年度最佳AI生產力工具推薦",
    subtitle: "提升效率300%的秘密武器",
    overview: `AI生產力工具已成為現代職場人士必備的數碼助手。這些工具可以幫助我們自動化重複性工作、優化工作流程，還可以提供智能建議，使我們能夠專注於更有價值的創造性工作。

 根據最新研究顯示，使用AI生產力工具的專業人士平均可以提升40%的工作效率，節省至少3個小時的日常工作時間。這個數據說明AI工具不是僅僅科技愛好者的玩意，而是真正可以改變我們工作方式的實用工具。

 今次為大家整理了涵蓋多個領域的頂尖AI生產力工具，包括日程管理、文檔處理、郵件撰寫、項目管理等，每款工具都經過實際測試，確保它們真正可以提升工作效率。`,
    categories: "工具分類推薦",
    category1: "日程管理",
    category2: "文檔處理",
    category3: "郵件助手",
    category4: "項目管理",
    benefits: "使用AI工具的效益",
    benefit1: "時間節省：平均每日節省3小時",
    benefit2: "效率提升：工作處理速度提高40%",
    benefit3: "錯誤減少：自動化減少人為失誤",
    benefit4: "壓力降低：減輕認知負荷"
  },
  "zh-CN": {
    title: "2024年度最佳AI生产力工具推荐",
    subtitle: "提升效率300%的秘密武器",
    overview: `AI生产力工具已成为现代职场人士必备的数码助手。这些工具可以帮助我们自动化重复性工作、优化工作流程，还可以提供智能建议，使我们能够专注于更有价值的创造性工作。

 根据最新研究显示，使用AI生产力工具的专业人士平均可以提升40%的工作效率，节省至少3个小时的日常工作时间。这个数据说明AI工具不是仅仅科技爱好者的玩意，而是真正可以改变我们工作方式的实用工具。

 本次为大家整理了涵盖多个领域的顶尖AI生产力工具，包括日程管理、文档处理、邮件撰写、项目管理等，每款工具都经过实际测试，确保它们真正可以提升工作效率。`,
    categories: "工具分类推荐",
    category1: "日程管理",
    category2: "文档处理",
    category3: "邮件助手",
    category4: "项目管理",
    benefits: "使用AI工具的效益",
    benefit1: "时间节省：平均每日节省3小时",
    benefit2: "效率提升：工作处理速度提高40%",
    benefit3: "错误减少：自动化减少人为失误",
    benefit4: "压力降低：减轻认知负荷"
  },
  en: {
    title: "Best AI Productivity Tools 2024",
    subtitle: "Secret Weapons to Boost Efficiency by 300%",
    overview: `AI productivity tools have become essential digital assistants for modern professionals. These tools can help us automate repetitive tasks, optimize workflows, and provide intelligent suggestions, allowing us to focus on more valuable creative work.

 According to latest research, professionals using AI productivity tools can improve work efficiency by 40% on average, saving at least 3 hours of daily work time. This data shows that AI tools are not just toys for tech enthusiasts, but practical tools that can truly transform how we work.

 We've compiled a list of top AI productivity tools covering multiple domains including schedule management, document processing, email writing, and project management. Each tool has been tested to ensure it genuinely improves work efficiency.`,
    categories: "Tool Categories",
    category1: "Schedule Management",
    category2: "Document Processing",
    category3: "Email Assistant",
    category4: "Project Management",
    benefits: "Benefits of AI Tools",
    benefit1: "Time Savings: 3 hours saved daily on average",
    benefit2: "Efficiency: 40% faster work processing",
    benefit3: "Fewer Errors: Automation reduces mistakes",
    benefit4: "Less Stress: Reduced cognitive load"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">Productivity</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.categories}</h2>
          <div className="h-72">
            <svg viewBox="0 0 600 280" className="w-full h-full">
              <rect x="30" y="20" width="130" height="100" fill="#3B82F6" rx="8" />
              <text x="95" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.category1}</text>
              <text x="95" y="90" textAnchor="middle" fill="white" fontSize="9">Calendar AI</text>
              <rect x="180" y="20" width="130" height="100" fill="#10B981" rx="8" />
              <text x="245" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.category2}</text>
              <text x="245" y="90" textAnchor="middle" fill="white" fontSize="9">DocuMind</text>
              <rect x="330" y="20" width="130" height="100" fill="#F59E0B" rx="8" />
              <text x="395" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.category3}</text>
              <text x="395" y="90" textAnchor="middle" fill="white" fontSize="9">EmailGPT</text>
              <rect x="480" y="20" width="130" height="100" fill="#8B5CF6" rx="8" />
              <text x="545" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{content.category4}</text>
              <text x="545" y="90" textAnchor="middle" fill="white" fontSize="9">TaskFlow</text>
              <rect x="30" y="140" width="580" height="100" fill="#F3F4F6" rx="8" />
              <text x="320" y="170" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">{content.benefits}</text>
              <rect x="60" y="185" width="120" height="35" fill="#3B82F6" rx="4" />
              <text x="120" y="205" textAnchor="middle" fill="white" fontSize="9">40% {lang === "en" ? "Efficiency" : "效率提升"}</text>
              <rect x="200" y="185" width="120" height="35" fill="#10B981" rx="4" />
              <text x="260" y="205" textAnchor="middle" fill="white" fontSize="9">3h {lang === "en" ? "Time Saved" : "時間節省"}</text>
              <rect x="340" y="185" width="100" height="35" fill="#F59E0B" rx="4" />
              <text x="390" y="205" textAnchor="middle" fill="white" fontSize="9">-80% {lang === "en" ? "Errors" : "錯誤"}</text>
              <rect x="460" y="185" width="120" height="35" fill="#8B5CF6" rx="4" />
              <text x="520" y="205" textAnchor="middle" fill="white" fontSize="9">-50% {lang === "en" ? "Stress" : "壓力"}</text>
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.benefits}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[content.benefit1, content.benefit2, content.benefit3, content.benefit4].map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{i + 1}</span>
                <p className="text-gray-700">{b}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}