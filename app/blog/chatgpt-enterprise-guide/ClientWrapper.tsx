"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tContent = {
  yue: {
    title: "ChatGPT Enterprise 企業版完整指南",
    subtitle: "無限GPT-4訪問、Advanced Data Analysis、SAML SSO",
    overview: `ChatGPT Enterprise 係OpenAI喺2023年8月推出嘅企業級AI解決方案，專為大型組織設計，提供無限嘅GPT-4訪問、優先使用新功能、同埋企業級安全同合規保障。

 Enterprise版本相比Plus版本有住顯著嘅優勢：無限使用GPT-4（Plus版每3小時50次）、更快嘅響應速度（最高快2倍）、優先訪問Advanced Data Analysis同其他新功能。

 目前已經有超過80%嘅财富500強企業採用咗ChatGPT Enterprise，包括Microsoft、Expedia、Carlyle等知名企業。呢個數據顯示AI企業應用已經成為大企業數字化轉型嘅重要组成部分。`,
    features: "企業版核心功能",
    feature1: "無限GPT-4訪問：解除使用次數限制",
    feature2: "Advanced Data Analysis：強大嘅數據分析能力",
    feature3: "SAML SSO：企業級單一登入認證",
    feature4: "Admin Console：集中管理同用量分析",
    security: "安全與合規",
    securityDesc: "SOC 2合規、數據加密傳輸、不用於模型訓練",
    pricing: "定價：每人每月$30美元（最少150位用戶）"
  },
  "zh-TW": {
    title: "ChatGPT Enterprise 企業版完整指南",
    subtitle: "無限GPT-4訪問、Advanced Data Analysis、SAML SSO",
    overview: `ChatGPT Enterprise 是OpenAI在2023年8月推出的企業級AI解決方案，專為大型組織設計，提供無限的GPT-4訪問、優先使用新功能和企業級安全及合規保障。

 Enterprise版本相比Plus版本有著顯著優勢：無限使用GPT-4（Plus版每3小時50次）、更快的響應速度（最高快2倍）、優先訪問Advanced Data Analysis和其他新功能。

 目前已有超過80%的财富500強企業採用了ChatGPT Enterprise，包括Microsoft、Expedia、Carlyle等知名企業。這個數據顯示AI企業應用已成為大企業數字化轉型的重要組成部分。`,
    features: "企業版核心功能",
    feature1: "無限GPT-4訪問：解除使用次數限制",
    feature2: "Advanced Data Analysis：強大的數據分析能力",
    feature3: "SAML SSO：企業級單一登入認證",
    feature4: "Admin Console：集中管理和用量分析",
    security: "安全與合規",
    securityDesc: "SOC 2合規、數據加密傳輸、不用於模型訓練",
    pricing: "定價：每人每月$30美元（最少150位用戶）"
  },
  "zh-CN": {
    title: "ChatGPT Enterprise 企业版完整指南",
    subtitle: "无限GPT-4访问、Advanced Data Analysis、SAML SSO",
    overview: `ChatGPT Enterprise 是OpenAI在2023年8月推出的企业级AI解决方案，专为大型组织设计，提供无限的GPT-4访问、优先使用新功能和企业级安全及合规保障。

 Enterprise版本相比Plus版本有着显著优势：无限使用GPT-4（Plus版每3小时50次）、更快的响应速度（最高快2倍）、优先访问Advanced Data Analysis和其他新功能。

 目前已有超过80%的财富500强企业采用了ChatGPT Enterprise，包括Microsoft、Expedia、Carlyle等知名企业。这个数据显示AI企业应用已成为大企业数字化转型的重要组成部分。`,
    features: "企业版核心功能",
    feature1: "无限GPT-4访问：解除使用次数限制",
    feature2: "Advanced Data Analysis：强大的数据分析能力",
    feature3: "SAML SSO：企业级单一登入认证",
    feature4: "Admin Console：集中管理和用量分析",
    security: "安全与合规",
    securityDesc: "SOC 2合规、数据加密传输、不用于模型训练",
    pricing: "定价：每人每月$30美元（最少150位用户）"
  },
  en: {
    title: "ChatGPT Enterprise Complete Guide",
    subtitle: "Unlimited GPT-4 Access, Advanced Data Analysis, SAML SSO",
    overview: `ChatGPT Enterprise is the enterprise-level AI solution launched by OpenAI in August 2023, designed for large organizations with unlimited GPT-4 access, priority access to new features, and enterprise-grade security and compliance guarantees.

 The Enterprise version has significant advantages over Plus: unlimited GPT-4 usage (vs 50 messages per 3 hours in Plus), faster response speeds (up to 2x faster), and priority access to Advanced Data Analysis and other new features.

 Currently, over 80% of Fortune 500 companies have adopted ChatGPT Enterprise, including Microsoft, Expedia, Carlyle and other well-known enterprises. This data shows that AI enterprise applications have become an important part of large enterprise digital transformation.`,
    features: "Enterprise Core Features",
    feature1: "Unlimited GPT-4: No usage limits",
    feature2: "Advanced Data Analysis: Powerful data analysis",
    feature3: "SAML SSO: Enterprise single sign-on",
    feature4: "Admin Console: Centralized management",
    security: "Security & Compliance",
    securityDesc: "SOC 2 compliant, encrypted data, not used for training",
    pricing: "Pricing: $30/user/month (min 150 users)"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-3">Enterprise</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.features}</h2>
          <div className="h-64">
            <svg viewBox="0 0 600 250" className="w-full h-full">
              <circle cx="100" cy="100" r="70" fill="#10B981" />
              <text x="100" y="95" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">80%</text>
              <text x="100" y="120" textAnchor="middle" fill="white" fontSize="10">Fortune 500</text>
              <circle cx="280" cy="100" r="50" fill="#3B82F6" />
              <text x="280" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2x</text>
              <text x="280" y="115" textAnchor="middle" fill="white" fontSize="9">Speed</text>
              <circle cx="430" cy="100" r="40" fill="#F59E0B" />
              <text x="430" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">∞</text>
              <text x="430" y="115" textAnchor="middle" fill="white" fontSize="8">GPT-4</text>
              <text x="300" y="200" textAnchor="middle" fill="#6B7280" fontSize="12">ChatGPT Enterprise Adoption Stats</text>
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.security}</h2>
          <p className="text-gray-600">{content.securityDesc}</p>
        </section>

        <div className="bg-green-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">{content.pricing}</h3>
        </div>
      </div>
    </div>
  );
}