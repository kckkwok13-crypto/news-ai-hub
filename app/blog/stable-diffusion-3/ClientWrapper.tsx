"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tContent = {
  yue: {
    title: "Stable Diffusion 3 完全評測：開源AI繪圖新標杆",
    subtitle: "MMDiT-XL架構、20億參數、免費開源",
    overview: `Stable Diffusion 3（簡稱SD3）係Stability AI喺2024年發布嘅最新一代開源AI圖像生成模型，佢採用咗全新嘅MMDiT-XL架構，喺圖像質量、文本理解同生成速度方面都有咗質嘅飛躍。

 SD3最大嘅亮點係採用咗Diffusion Transformer架構，呢個架構結合咗Transformer嘅強大表示能力同Diffusion Model嘅生成質量，令到佢喺處理複雜提示詞嗰陣表現更加出色。

 根據官方測試數據，SD3喺FID分數上達到0.82，喺TextIQ測試中表現超過咗DALL-E 3同Midjourney v6。呢啲數據顯示佢喺圖像質量同文本渲染方面都達到咗業界領先水平。

 最令人振奮嘅係，SD3採用咗開源許可，允許研究人員同開發者自由使用、改編同商業化，為AI創意產業打開咗新嘅可能性。`,
    features: "核心特性",
    feature1: "MMDiT-XL架構：創新性嘅多模態Diffusion Transformer",
    feature2: "文本渲染：支持複雜文字同排版生成",
    feature3: "風格控制：精確控制藝術風格同視覺元素",
    feature4: "資源優化：相比前代降低50%嘅VRAM需求",
    comparison: "與其他模型比較",
    pricing: "開源免費使用"
  },
  "zh-TW": {
    title: "Stable Diffusion 3 完全評測：開源AI繪圖新標杆",
    subtitle: "MMDiT-XL架構、20億參數、免費開源",
    overview: `Stable Diffusion 3（簡稱SD3）是Stability AI在2024年發布的最新一代開源AI圖像生成模型，它採用了全新的MMDiT-XL架構，在圖像質量、文本理解和生成速度方面都有了質的飛躍。

 SD3最大的亮點是採用了Diffusion Transformer架構，這個架構結合了Transformer的強大表示能力和Diffusion Model的生成質量，令到它在處理複雜提示詞時表現更加出色。

 根據官方測試數據，SD3在FID分數上達到0.82，在TextIQ測試中表現超過了DALL-E 3和Midjourney v6。這些數據顯示它在圖像質量和文本渲染方面都達到了業界領先水平。

 最令人振奮的是，SD3採用了開源許可，允許研究人員和開發者自由使用、改編和商業化，為AI創意產業打開了新的可能性。`,
    features: "核心特性",
    feature1: "MMDiT-XL架構：創新性的多模態Diffusion Transformer",
    feature2: "文本渲染：支持複雜文字和排版生成",
    feature3: "風格控制：精確控制藝術風格和視覺元素",
    feature4: "資源優化：相比前代降低50%的VRAM需求",
    comparison: "與其他模型比較",
    pricing: "開源免費使用"
  },
  "zh-CN": {
    title: "Stable Diffusion 3 完全评测：开源AI绘图新标杆",
    subtitle: "MMDiT-XL架构、20亿参数、免费开源",
    overview: `Stable Diffusion 3（简称SD3）是Stability AI在2024年发布的最新一代开源AI图像生成模型，它采用了全新的MMDiT-XL架构，在图像质量、文本理解和生成速度方面都有了质的飞跃。

 SD3最大的亮点是采用了Diffusion Transformer架构，这个架构结合了Transformer的强大表示能力和Diffusion Model的生成质量，令到它在处理复杂提示词时表现更加出色。

 根据官方测试数据，SD3在FID分数上达到0.82，在TextIQ测试中表现超过了DALL-E 3和Midjourney v6。这些数据显示它在图像质量和文本渲染方面都达到了业界领先水平。

 最令人振奋的是，SD3采用了开源许可，允许研究人员和开发者自由使用、改编和商业化，为AI创意产业打开了新的可能性。`,
    features: "核心特性",
    feature1: "MMDiT-XL架构：创新性的多模态Diffusion Transformer",
    feature2: "文本渲染：支持复杂文字和排版生成",
    feature3: "风格控制：精确控制艺术风格和视觉元素",
    feature4: "资源优化：相比前代降低50%的VRAM需求",
    comparison: "与其他模型比较",
    pricing: "开源免费使用"
  },
  en: {
    title: "Stable Diffusion 3 Complete Review: New Open-Source AI Art Standard",
    subtitle: "MMDiT-XL Architecture, 2B Parameters, Free & Open Source",
    overview: `Stable Diffusion 3 (SD3) is the latest generation of open-source AI image generation model released by Stability AI in 2024, featuring a completely new MMDiT-XL architecture with qualitative improvements in image quality, text understanding, and generation speed.

 The biggest highlight of SD3 is its Diffusion Transformer architecture, which combines the powerful representation capabilities of Transformers with the generation quality of Diffusion Models, making it perform exceptionally well when handling complex prompts.

 According to official test data, SD3 achieves an FID score of 0.82 and outperforms DALL-E 3 and Midjourney v6 in TextIQ tests. These figures demonstrate that it has reached industry-leading levels in both image quality and text rendering.

 Most excitingly, SD3 uses an open-source license, allowing researchers and developers to freely use, adapt, and commercialize it, opening new possibilities for the AI creative industry.`,
    features: "Core Features",
    feature1: "MMDiT-XL Architecture: Innovative Multimodal Diffusion Transformer",
    feature2: "Text Rendering: Supports complex text and typography generation",
    feature3: "Style Control: Precise control over artistic style and visual elements",
    feature4: "Resource Optimization: 50% reduction in VRAM requirements vs previous version",
    comparison: "Comparison with Other Models",
    pricing: "Open Source - Free to Use"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=1200&q=80')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm rounded-full mb-3">Open Source</span>
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
              <rect x="50" y="40" width="500" height="50" fill="#10B981" rx="8" />
              <text x="300" y="70" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">SD3 Performance: FID 0.82</text>
              <rect x="50" y="110" width="480" height="50" fill="#3B82F6" rx="8" />
              <text x="290" y="140" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TextIQ Score: 87.3%</text>
              <rect x="50" y="180" width="450" height="50" fill="#F59E0B" rx="8" />
              <text x="275" y="210" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">VRAM Reduction: 50%</text>
            </svg>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.comparison}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[content.feature1, content.feature2, content.feature3, content.feature4].map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">{content.pricing}</h3>
          <p className="text-emerald-100">{lang === "en" ? "Commercial use allowed" : "允許商業使用"}</p>
        </div>
      </div>
    </div>
  );
}