"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

export default function ClientWrapper() {
  const [lang, setLang] = useState<TravelLanguage>("yue");

  useEffect(() => {
    const stored = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (stored) setLang(stored);

    const handleLangChange = (e: CustomEvent<TravelLanguage>) => setLang(e.detail);
    window.addEventListener("travel-lang-change", handleLangChange as EventListener);
    return () => window.removeEventListener("travel-lang-change", handleLangChange as EventListener);
  }, []);

  const tocItems = {
    yue: [
      { id: "overview", label: "市場概覽" },
      { id: "tools", label: "主流工具比較" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "價格方案" },
      { id: "benchmarks", label: "效能測試" },
      { id: "recommendation", label: "選擇建議" },
    ],
    "zh-TW": [
      { id: "overview", label: "市場概覽" },
      { id: "tools", label: "主流工具比較" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "價格方案" },
      { id: "benchmarks", label: "效能測試" },
      { id: "recommendation", label: "選擇建議" },
    ],
    "zh-CN": [
      { id: "overview", label: "市场概览" },
      { id: "tools", label: "主流工具比较" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "价格方案" },
      { id: "benchmarks", label: "性能测试" },
      { id: "recommendation", label: "选择建议" },
    ],
    en: [
      { id: "overview", label: "Market Overview" },
      { id: "tools", label: "Tool Comparison" },
      { id: "features", label: "Core Features" },
      { id: "pricing", label: "Pricing Plans" },
      { id: "benchmarks", label: "Performance Tests" },
      { id: "recommendation", label: "Recommendations" },
    ],
  };

  const tContent = {
    yue: {
      title: "AI 程式碼工具全面比較 2026 | GitHub Copilot vs Cursor vs 其他",
      description: "深度比較主流 AI 程式碼生成工具，涵蓋 GitHub Copilot、Cursor、Codeium 等，助你選擇最適合的開發助手。",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      overviewTitle: "市場概覽：AI 程式碼工具的黃金時代",
      overviewContent: `<p>AI 程式碼工具市場正在經歷爆發式增長。根據最新數據，<strong>GitHub Copilot</strong> 已擁有超過 <strong>1,500 萬</strong>開發者用戶，而新興工具 <strong>Cursor</strong> 也迅速崛起，達到 <strong>500 萬</strong>用戶規模。</p><p>整個市場年增長率達 <strong>45%</strong>，平均每位開發者使用 AI 工具每周節省 <strong>2.5 小時</strong>編碼時間。</p><p>主流工具分為三類：</p><ul><li><strong>IDE 插件型</strong>：GitHub Copilot、Codeium、Tabnine</li><li><strong>AI 優先 IDE</strong>：Cursor、Windsurf、Augment</li><li><strong>網頁/雲端型</strong>：Amazon CodeWhisperer、Sourcegraph Cody</li></ul>`,
      toolsTitle: "主流工具詳細比較",
      copilotName: "GitHub Copilot",
      copilotDesc: "微軟與 OpenAI 合作開發，是市場領導者，深度整合 VS Code、Visual Studio 等主流 IDE。",
      copilotStrength: "生態完善、代碼補全準確率高、企業版功能強大",
      cursorName: "Cursor",
      cursorDesc: "專為 AI 設計的 IDE，支援多模型切換、對話式編程、代碼庫索引。",
      cursorStrength: "原生 AI 優先設計、支援多個 AI 模型、界面直觀",
      codeiumName: "Codeium",
      codeiumDesc: "免費且開源的 AI 程式碼加速工具，提供企業版。",
      codeiumStrength: "完全免費、支援 70+ 語言、無用量限制",
      tabnineName: "Tabnine",
      tabnineDesc: "老牌 AI 程式碼補全工具，支援本地部署。",
      tabnineStrength: "本地部署選項、隱私保護強企業級安全",
      featuresTitle: "核心功能對比",
      feature1Name: "代碼補全",
      feature1Desc: "根據上下文自動補全代碼片段，減少重複編碼工作。",
      feature2Name: "代碼解釋",
      feature2Desc: "解釋現有代碼的功能和邏輯，幫助理解陌生代碼庫。",
      feature3Name: "Bug 修復",
      feature3Desc: "自動識別 Bug 並提供修復建議，提升調試效率。",
      feature4Name: "代碼重構",
      feature4Desc: "幫助重構代碼，提升可讀性和性能。",
      feature5Name: "測試生成",
      feature5Desc: "自動生成單元測試和集成測試。",
      feature6Name: "對話式編程",
      feature6Desc: "通過自然語言描述需求，AI 生成對應代碼。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各工具的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["基本代碼補全", "有限用量", "基礎功能"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["無限補全", "優先響應", "高級模型", "團隊共享"],
      teamName: "Team/Enterprise",
      teamPrice: "HK$195/用戶/月",
      teamFeatures: ["管理控制台", "使用量分析", "SSO 整合", "優先支援"],
      benchmarkTitle: "效能基準測試",
      benchmarkDesc: "我們對各工具在真實開發場景中進行測試：",
      benchmark1Label: "代碼補全準確率",
      benchmark1Value: "GitHub Copilot: 87%",
      benchmark2Label: "Bug 修復成功率",
      benchmark2Value: "Cursor: 82%",
      benchmark3Label: "代碼生成速度",
      benchmark3Value: "Codeium: 0.3s",
      benchmark4Label: "多語言支援",
      benchmark4Value: "Codeium: 70+",
      benchmark5Label: "企業安全評級",
      benchmark5Value: "Tabnine: AAA",
      benchmark6Label: "用戶滿意度",
      benchmark6Value: "Cursor: 4.8/5",
      rec1Title: "個人開發者",
      rec1Desc: "從 Codeium 免費版開始，體驗 AI 編碼輔助。如需更高質量補全，可升級 Copilot Pro。",
      rec2Title: "小型團隊",
      rec2Desc: "Cursor Team 版提供最佳性價比，原生 AI IDE 體驗提升團隊協作效率。",
      rec3Title: "大型企業",
      rec3Desc: "GitHub Copilot Enterprise 或 Tabnine Enterprise，強調數據安全和合規性。",
      rec4Title: "開源貢獻者",
      rec4Desc: "Codeium 免費版無用量限制，適合開源項目開發。",
      verdictTitle: "最終建議",
      verdictSummary: "選擇 AI 程式碼工具需要根據團隊規模、預算和安全需求綜合考慮",
      verdictNote: "建議先試用各工具的免費版，找到最適合自己工作流程的工具再長期訂閱。",
    },
    "zh-TW": {
      title: "AI 程式碼工具全面比較 2026 | GitHub Copilot vs Cursor vs 其他",
      description: "深度比較主流 AI 程式碼生成工具，涵蓋 GitHub Copilot、Cursor、Codeium 等，助你選擇最適合的開發助手。",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      overviewTitle: "市場概覽：AI 程式碼工具的黃金時代",
      overviewContent: `<p>AI 程式碼工具市場正在經歷爆發式增長。根據最新數據，<strong>GitHub Copilot</strong> 已擁有超過 <strong>1,500 萬</strong>開發者用戶，而新興工具 <strong>Cursor</strong> 也迅速崛起，達到 <strong>500 萬</strong>用戶規模。</p><p>整個市場年增長率達 <strong>45%</strong>，平均每位開發者使用 AI 工具每周節省 <strong>2.5 小時</strong>編碼時間。</p><p>主流工具分為三類：</p><ul><li><strong>IDE 插件型</strong>：GitHub Copilot、Codeium、Tabnine</li><li><strong>AI 優先 IDE</strong>：Cursor、Windsurf、Augment</li><li><strong>網頁/雲端型</strong>：Amazon CodeWhisperer、Sourcegraph Cody</li></ul>`,
      toolsTitle: "主流工具詳細比較",
      copilotName: "GitHub Copilot",
      copilotDesc: "微軟與 OpenAI 合作開發，是市場領導者，深度整合 VS Code、Visual Studio 等主流 IDE。",
      copilotStrength: "生態完善、代碼補全準確率高、企業版功能強大",
      cursorName: "Cursor",
      cursorDesc: "專為 AI 設計的 IDE，支援多模型切換、對話式編程、代碼庫索引。",
      cursorStrength: "原生 AI 優先設計、支援多個 AI 模型、界面直觀",
      codeiumName: "Codeium",
      codeiumDesc: "免費且開源的 AI 程式碼加速工具，提供企業版。",
      codeiumStrength: "完全免費、支援 70+ 語言、無用量限制",
      tabnineName: "Tabnine",
      tabnineDesc: "老牌 AI 程式碼補全工具，支援本地部署。",
      tabnineStrength: "本地部署選項、隱私保護強企業級安全",
      featuresTitle: "核心功能對比",
      feature1Name: "代碼補全",
      feature1Desc: "根據上下文自動補全代碼片段，減少重複編碼工作。",
      feature2Name: "代碼解釋",
      feature2Desc: "解釋現有代碼的功能和邏輯，幫助理解陌生代碼庫。",
      feature3Name: "Bug 修復",
      feature3Desc: "自動識別 Bug 並提供修復建議，提升調試效率。",
      feature4Name: "代碼重構",
      feature4Desc: "幫助重構代碼，提升可讀性和性能。",
      feature5Name: "測試生成",
      feature5Desc: "自動生成單元測試和集成測試。",
      feature6Name: "對話式編程",
      feature6Desc: "通過自然語言描述需求，AI 生成對應代碼。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各工具的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["基本代碼補全", "有限用量", "基礎功能"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["無限補全", "優先響應", "高級模型", "團隊共享"],
      teamName: "Team/Enterprise",
      teamPrice: "HK$195/用戶/月",
      teamFeatures: ["管理控制台", "使用量分析", "SSO 整合", "優先支援"],
      benchmarkTitle: "效能基準測試",
      benchmarkDesc: "我們對各工具在真實開發場景中進行測試：",
      benchmark1Label: "代碼補全準確率",
      benchmark1Value: "GitHub Copilot: 87%",
      benchmark2Label: "Bug 修復成功率",
      benchmark2Value: "Cursor: 82%",
      benchmark3Label: "代碼生成速度",
      benchmark3Value: "Codeium: 0.3s",
      benchmark4Label: "多語言支援",
      benchmark4Value: "Codeium: 70+",
      benchmark5Label: "企業安全評級",
      benchmark5Value: "Tabnine: AAA",
      benchmark6Label: "用戶滿意度",
      benchmark6Value: "Cursor: 4.8/5",
      rec1Title: "個人開發者",
      rec1Desc: "從 Codeium 免費版開始，體驗 AI 編碼輔助。如需更高質量補全，可升級 Copilot Pro。",
      rec2Title: "小型團隊",
      rec2Desc: "Cursor Team 版提供最佳性價比，原生 AI IDE 體驗提升團隊協作效率。",
      rec3Title: "大型企業",
      rec3Desc: "GitHub Copilot Enterprise 或 Tabnine Enterprise，強調數據安全和合規性。",
      rec4Title: "開源貢獻者",
      rec4Desc: "Codeium 免費版無用量限制，適合開源項目開發。",
      verdictTitle: "最終建議",
      verdictSummary: "選擇 AI 程式碼工具需要根據團隊規模、預算和安全需求綜合考慮",
      verdictNote: "建議先試用各工具的免費版，找到最適合自己工作流程的工具再長期訂閱。",
    },
    "zh-CN": {
      title: "AI 代码工具全面比较 2026 | GitHub Copilot vs Cursor vs 其他",
      description: "深度比较主流 AI 代码生成工具，涵盖 GitHub Copilot、Cursor、Codeium 等，助你选择最适合的开发助手。",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      overviewTitle: "市场概览：AI 代码工具的黄金时代",
      overviewContent: `<p>AI 代码工具市场正在经历爆发式增长。根据最新数据，<strong>GitHub Copilot</strong> 已拥有超过 <strong>1,500 万</strong>开发者用户，而新兴工具 <strong>Cursor</strong> 也迅速崛起，达到 <strong>500 万</strong>用户规模。</p><p>整个市场年增长率为 <strong>45%</strong>，平均每位开发者使用 AI 工具每周节省 <strong>2.5 小时</strong>编码时间。</p><p>主流工具分为三类：</p><ul><li><strong>IDE 插件型</strong>：GitHub Copilot、Codeium、Tabnine</li><li><strong>AI 优先 IDE</strong>：Cursor、Windsurf、Augment</li><li><strong>网页/云端型</strong>：Amazon CodeWhisperer、Sourcegraph Cody</li></ul>`,
      toolsTitle: "主流工具详细比较",
      copilotName: "GitHub Copilot",
      copilotDesc: "微软与 OpenAI 合作开发，是市场领导者，深度整合 VS Code、Visual Studio 等主流 IDE。",
      copilotStrength: "生态完善、代码补全准确率高、企业版功能强大",
      cursorName: "Cursor",
      cursorDesc: "专为 AI 设计的 IDE，支持多模型切换、对话式编程、代码库索引。",
      cursorStrength: "原生 AI 优先设计、支持多个 AI 模型、界面直观",
      codeiumName: "Codeium",
      codeiumDesc: "免费且开源的 AI 代码加速工具，提供企业版。",
      codeiumStrength: "完全免费、支持 70+ 语言、无用量限制",
      tabnineName: "Tabnine",
      tabnineDesc: "老牌 AI 代码补全工具，支持本地部署。",
      tabnineStrength: "本地部署选项、隐私保护强企业级安全",
      featuresTitle: "核心功能对比",
      feature1Name: "代码补全",
      feature1Desc: "根据上下文自动补全代码片段，减少重复编码工作。",
      feature2Name: "代码解释",
      feature2Desc: "解释现有代码的功能和逻辑，帮助理解陌生代码库。",
      feature3Name: "Bug 修复",
      feature3Desc: "自动识别 Bug 并提供修复建议，提升调试效率。",
      feature4Name: "代码重构",
      feature4Desc: "帮助重构代码，提升可读性和性能。",
      feature5Name: "测试生成",
      feature5Desc: "自动生成单元测试和集成测试。",
      feature6Name: "对话式编程",
      feature6Desc: "通过自然语言描述需求，AI 生成对应代码。",
      pricingTitle: "价格方案比较",
      pricingDesc: "各工具的订阅方案：",
      freeName: "免费版",
      freePrice: "HK$0",
      freeFeatures: ["基本代码补全", "有限用量", "基础功能"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["无限补全", "优先响应", "高级模型", "团队共享"],
      teamName: "Team/Enterprise",
      teamPrice: "HK$195/用户/月",
      teamFeatures: ["管理控制台", "使用量分析", "SSO 整合", "优先支持"],
      benchmarkTitle: "性能基准测试",
      benchmarkDesc: "我们对各工具在真实开发场景中进行测试：",
      benchmark1Label: "代码补全准确率",
      benchmark1Value: "GitHub Copilot: 87%",
      benchmark2Label: "Bug 修复成功率",
      benchmark2Value: "Cursor: 82%",
      benchmark3Label: "代码生成速度",
      benchmark3Value: "Codeium: 0.3s",
      benchmark4Label: "多语言支持",
      benchmark4Value: "Codeium: 70+",
      benchmark5Label: "企业安全评级",
      benchmark5Value: "Tabnine: AAA",
      benchmark6Label: "用户满意度",
      benchmark6Value: "Cursor: 4.8/5",
      rec1Title: "个人开发者",
      rec1Desc: "从 Codeium 免费版开始，体验 AI 编码辅助。如需更高质量补全，可升级 Copilot Pro。",
      rec2Title: "小型团队",
      rec2Desc: "Cursor Team 版提供最佳性价比，原生 AI IDE 体验提升团队协作效率。",
      rec3Title: "大型企业",
      rec3Desc: "GitHub Copilot Enterprise 或 Tabnine Enterprise，强调数据安全和合规性。",
      rec4Title: "开源贡献者",
      rec4Desc: "Codeium 免费版无用量限制，适合开源项目开发。",
      verdictTitle: "最终建议",
      verdictSummary: "选择 AI 代码工具需要根据团队规模、预算和安全需求综合考虑",
      verdictNote: "建议先试用各工具的免费版，找到最适合自己工作流程的工具再长期订阅。",
    },
    en: {
      title: "AI Code Tools Comparison 2026 | GitHub Copilot vs Cursor vs Others",
      description: "In-depth comparison of mainstream AI code generation tools, covering GitHub Copilot, Cursor, Codeium and more.",
      heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      overviewTitle: "Market Overview: The Golden Age of AI Code Tools",
      overviewContent: `<p>The AI code tools market is experiencing explosive growth. According to latest data, <strong>GitHub Copilot</strong> has over <strong>15 million</strong> developer users, while emerging tool <strong>Cursor</strong> has rapidly grown to <strong>5 million</strong> users.</p><p>The overall market has an annual growth rate of <strong>45%</strong>, with each developer saving an average of <strong>2.5 hours</strong> of coding time per week using AI tools.</p><p>Mainstream tools are divided into three categories:</p><ul><li><strong>IDE Plugins</strong>: GitHub Copilot, Codeium, Tabnine</li><li><strong>AI-First IDEs</strong>: Cursor, Windsurf, Augment</li><li><strong>Web/Cloud Based</strong>: Amazon CodeWhisperer, Sourcegraph Cody</li></ul>`,
      toolsTitle: "Mainstream Tools Comparison",
      copilotName: "GitHub Copilot",
      copilotDesc: "Developed by Microsoft and OpenAI, the market leader deeply integrated with VS Code, Visual Studio and other mainstream IDEs.",
      copilotStrength: "Complete ecosystem, high code completion accuracy, powerful enterprise features",
      cursorName: "Cursor",
      cursorDesc: "An IDE designed specifically for AI, supporting multi-model switching, conversational programming, and codebase indexing.",
      cursorStrength: "Native AI-first design, supports multiple AI models, intuitive interface",
      codeiumName: "Codeium",
      codeiumDesc: "Free and open-source AI code acceleration tool with enterprise version available.",
      codeiumStrength: "Completely free, supports 70+ languages, unlimited usage",
      tabnineName: "Tabnine",
      tabnineDesc: "Established AI code completion tool with local deployment support.",
      tabnineStrength: "Local deployment options, strong privacy protection, enterprise-grade security",
      featuresTitle: "Core Features Comparison",
      feature1Name: "Code Completion",
      feature1Desc: "Automatically complete code snippets based on context, reducing repetitive coding.",
      feature2Name: "Code Explanation",
      feature2Desc: "Explain the functionality and logic of existing code, helping understand unfamiliar codebases.",
      feature3Name: "Bug Fixing",
      feature3Desc: "Automatically identify bugs and provide fix suggestions, improving debugging efficiency.",
      feature4Name: "Code Refactoring",
      feature4Desc: "Help refactor code to improve readability and performance.",
      feature5Name: "Test Generation",
      feature5Desc: "Automatically generate unit tests and integration tests.",
      feature6Name: "Conversational Coding",
      feature6Desc: "Describe requirements in natural language, AI generates corresponding code.",
      pricingTitle: "Pricing Plans Comparison",
      pricingDesc: "Subscription plans for each tool:",
      freeName: "Free",
      freePrice: "HK$0",
      freeFeatures: ["Basic code completion", "Limited usage", "Basic features"],
      proName: "Pro",
      proPrice: "HK$130/month",
      proFeatures: ["Unlimited completion", "Priority response", "Advanced models", "Team sharing"],
      teamName: "Team/Enterprise",
      teamPrice: "HK$195/user/month",
      teamFeatures: ["Admin console", "Usage analytics", "SSO integration", "Priority support"],
      benchmarkTitle: "Performance Benchmark",
      benchmarkDesc: "We tested each tool in real development scenarios:",
      benchmark1Label: "Code Completion Accuracy",
      benchmark1Value: "GitHub Copilot: 87%",
      benchmark2Label: "Bug Fix Success Rate",
      benchmark2Value: "Cursor: 82%",
      benchmark3Label: "Code Generation Speed",
      benchmark3Value: "Codeium: 0.3s",
      benchmark4Label: "Language Support",
      benchmark4Value: "Codeium: 70+",
      benchmark5Label: "Enterprise Security",
      benchmark5Value: "Tabnine: AAA",
      benchmark6Label: "User Satisfaction",
      benchmark6Value: "Cursor: 4.8/5",
      rec1Title: "Individual Developers",
      rec1Desc: "Start with Codeium free version to experience AI coding assistance. Upgrade to Copilot Pro if you need higher quality completion.",
      rec2Title: "Small Teams",
      rec2Desc: "Cursor Team version offers the best value, native AI IDE experience improves team collaboration efficiency.",
      rec3Title: "Large Enterprises",
      rec3Desc: "GitHub Copilot Enterprise or Tabnine Enterprise, emphasizing data security and compliance.",
      rec4Title: "Open Source Contributors",
      rec4Desc: "Codeium free version has no usage limits, suitable for open source project development.",
      verdictTitle: "Final Recommendations",
      verdictSummary: "Choosing AI code tools requires comprehensive consideration based on team size, budget, and security needs",
      verdictNote: "Recommended to try each tool's free version first, find the one that best fits your workflow before subscribing long-term.",
    },
  };

  const tc = tContent[lang];

  // SVG Charts
  const MarketShareChart = () => (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto my-6">
      <circle cx="200" cy="100" r="80" fill="#e5e7eb" />
      <path d="M200,100 L200,20 A80,80 0 0,1 270,140 Z" fill="#3b82f6" />
      <path d="M200,100 L270,140 A80,80 0 0,1 100,160 Z" fill="#8b5cf6" />
      <path d="M200,100 L100,160 A80,80 0 0,1 130,30 Z" fill="#10b981" />
      <path d="M200,100 L130,30 A80,80 0 0,1 200,20 Z" fill="#f59e0b" />
      <text x="220" y="50" className="text-xs fill-white font-bold">Copilot 45%</text>
      <text x="180" y="150" className="text-xs fill-white font-bold">Cursor 25%</text>
      <text x="100" y="80" className="text-xs fill-white font-bold">Codeium 20%</text>
      <text x="140" y="35" className="text-xs fill-white font-bold">Others 10%</text>
    </svg>
  );

  const GrowthChart = () => (
    <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="130" width="60" height="30" fill="#3b82f6" rx="4" />
      <rect x="110" y="100" width="60" height="60" fill="#3b82f6" rx="4" />
      <rect x="190" y="60" width="60" height="100" fill="#8b5cf6" rx="4" />
      <rect x="270" y="20" width="60" height="140" fill="#10b981" rx="4" />
      <text x="60" y="120" textAnchor="middle" className="text-sm font-bold fill-white">5M</text>
      <text x="140" y="90" textAnchor="middle" className="text-sm font-bold fill-white">10M</text>
      <text x="220" y="50" textAnchor="middle" className="text-sm font-bold fill-white">15M</text>
      <text x="300" y="10" textAnchor="middle" className="text-sm font-bold fill-white">20M</text>
      <text x="60" y="165" textAnchor="middle" className="text-xs fill-gray-500">2024</text>
      <text x="140" y="165" textAnchor="middle" className="text-xs fill-gray-500">2025</text>
      <text x="220" y="165" textAnchor="middle" className="text-xs fill-gray-500">2026</text>
      <text x="300" y="165" textAnchor="middle" className="text-xs fill-gray-500">2027</text>
    </svg>
  );

  const PricingChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="80" width="100" height="50" fill="#10b981" rx="4" />
      <rect x="150" y="50" width="100" height="80" fill="#3b82f6" rx="4" />
      <rect x="270" y="20" width="100" height="110" fill="#8b5cf6" rx="4" />
      <text x="80" y="55" textAnchor="middle" className="text-xl font-bold fill-white">Free</text>
      <text x="200" y="25" textAnchor="middle" className="text-xl font-bold fill-white">HK$130</text>
      <text x="320" y="5" textAnchor="middle" className="text-xl font-bold fill-white">HK$195</text>
      <text x="80" y="70" textAnchor="middle" className="text-xs fill-white/80">Codeium</text>
      <text x="200" y="40" textAnchor="middle" className="text-xs fill-white/80">Copilot Pro</text>
      <text x="320" y="20" textAnchor="middle" className="text-xs fill-white/80">Team</text>
    </svg>
  );

  const FeatureComparisonChart = () => (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto my-6">
      <rect x="20" y="20" width="360" height="30" fill="#3b82f6" rx="4" />
      <rect x="150" y="20" width="100" height="30" fill="#10b981" rx="4" />
      <rect x="260" y="20" width="60" height="30" fill="#f59e0b" rx="4" />
      <text x="200" y="40" textAnchor="middle" className="text-xs fill-white font-bold">Code Completion</text>
      <rect x="20" y="60" width="360" height="30" fill="#10b981" rx="4" />
      <rect x="150" y="60" width="100" height="30" fill="#3b82f6" rx="4" />
      <rect x="260" y="60" width="60" height="30" fill="#3b82f6" rx="4" />
      <text x="200" y="80" textAnchor="middle" className="text-xs fill-white font-bold">Conversational</text>
      <rect x="20" y="100" width="360" height="30" fill="#3b82f6" rx="4" />
      <rect x="150" y="100" width="100" height="30" fill="#10b981" rx="4" />
      <rect x="260" y="100" width="60" height="30" fill="#3b82f6" rx="4" />
      <text x="200" y="120" textAnchor="middle" className="text-xs fill-white font-bold">Bug Fixing</text>
      <rect x="20" y="140" width="360" height="30" fill="#e5e7eb" rx="4" />
      <rect x="150" y="140" width="100" height="30" fill="#3b82f6" rx="4" />
      <rect x="260" y="140" width="60" height="30" fill="#10b981" rx="4" />
      <text x="200" y="160" textAnchor="middle" className="text-xs fill-gray-600 font-bold">Local Deploy</text>
      <text x="80" y="185" textAnchor="middle" className="text-xs fill-gray-600">Copilot</text>
      <text x="200" y="185" textAnchor="middle" className="text-xs fill-gray-600">Cursor</text>
      <text x="290" y="185" textAnchor="middle" className="text-xs fill-gray-600">Codeium</text>
      <text x="355" y="185" textAnchor="middle" className="text-xs fill-gray-600">Tabnine</text>
    </svg>
  );

  const TimeSavedChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <polyline points="30,120 80,100 130,70 180,50 230,35 280,25 330,15" fill="none" stroke="#8b5cf6" strokeWidth="3" />
      <circle cx="30" cy="120" r="5" fill="#8b5cf6" />
      <circle cx="80" cy="100" r="5" fill="#8b5cf6" />
      <circle cx="130" cy="70" r="5" fill="#8b5cf6" />
      <circle cx="180" cy="50" r="5" fill="#8b5cf6" />
      <circle cx="230" cy="35" r="5" fill="#8b5cf6" />
      <circle cx="280" cy="25" r="5" fill="#8b5cf6" />
      <circle cx="330" cy="15" r="6" fill="#ef4444" />
      <text x="330" y="5" className="text-xs fill-gray-500">2.5h/week</text>
      <text x="30" y="140" className="text-xs fill-gray-500">No AI</text>
      <text x="330" y="140" className="text-xs fill-gray-500">Copilot</text>
    </svg>
  );

  const AccuracyChart = () => (
    <svg viewBox="0 0 350 120" className="w-full max-w-sm mx-auto my-6">
      <rect x="20" y="50" width="60" height="50" fill="#3b82f6" rx="4" />
      <rect x="100" y="35" width="60" height="65" fill="#8b5cf6" rx="4" />
      <rect x="180" y="55" width="60" height="45" fill="#10b981" rx="4" />
      <rect x="260" y="20" width="60" height="80" fill="#f59e0b" rx="4" />
      <text x="50" y="45" textAnchor="middle" className="text-lg font-bold fill-white">87%</text>
      <text x="130" y="30" textAnchor="middle" className="text-lg font-bold fill-white">92%</text>
      <text x="210" y="50" textAnchor="middle" className="text-lg font-bold fill-white">85%</text>
      <text x="290" y="15" textAnchor="middle" className="text-lg font-bold fill-white">95%</text>
      <text x="50" y="110" textAnchor="middle" className="text-xs fill-gray-500">Copilot</text>
      <text x="130" y="110" textAnchor="middle" className="text-xs fill-gray-500">Cursor</text>
      <text x="210" y="110" textAnchor="middle" className="text-xs fill-gray-500">Codeium</text>
      <text x="290" y="110" textAnchor="middle" className="text-xs fill-gray-500">Tabnine</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-blue-600">NewsKingdom</a>
            <nav className="flex gap-6">
              <a href="/travel" className="text-gray-600 hover:text-blue-600">旅遊</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600">博客</a>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <img src={tc.heroImage} alt={tc.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{tc.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">15M+</div>
            <div className="text-sm text-gray-500">Copilot Users</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">5M+</div>
            <div className="text-sm text-gray-500">Cursor Users</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">45%</div>
            <div className="text-sm text-gray-500">Market Growth</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">2.5h</div>
            <div className="text-sm text-gray-500">Time Saved/Week</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">目錄</h3>
              <nav className="space-y-2">
                {tocItems[lang].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-blue-600 py-1">{item.label}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.overviewTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: tc.overviewContent }} />
              <MarketShareChart />
              <p className="text-sm text-gray-500 text-center">Chart: AI Code Tools Market Share</p>
              <GrowthChart />
              <p className="text-sm text-gray-500 text-center">Chart: GitHub Copilot User Growth</p>
            </section>

            <section id="tools" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.toolsTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🔵</div>
                    <h3 className="font-bold text-lg">{tc.copilotName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.copilotDesc}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-xs text-blue-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.copilotStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">🟣</div>
                    <h3 className="font-bold text-lg">{tc.cursorName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.cursorDesc}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-xs text-purple-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.cursorStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">🟢</div>
                    <h3 className="font-bold text-lg">{tc.codeiumName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.codeiumDesc}</p>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.codeiumStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">🟠</div>
                    <h3 className="font-bold text-lg">{tc.tabnineName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.tabnineDesc}</p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <span className="text-xs text-orange-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.tabnineStrength}</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.featuresTitle}</h2>
              <FeatureComparisonChart />
              <p className="text-sm text-gray-500 text-center">Chart: Feature Support Comparison</p>
            </section>

            <section id="pricing" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.pricingTitle}</h2>
              <p className="text-gray-600 mb-6">{tc.pricingDesc}</p>
              <PricingChart />
              <p className="text-sm text-gray-500 text-center mb-6">Chart: Pricing Comparison</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.freeName}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{tc.freePrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.freeFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.proName}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{tc.proPrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.proFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.teamName}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{tc.teamPrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.teamFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="benchmarks" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.benchmarkTitle}</h2>
              <p className="text-gray-600 mb-6">{tc.benchmarkDesc}</p>
              <AccuracyChart />
              <p className="text-sm text-gray-500 text-center mb-6">Chart: Code Completion Accuracy</p>
              <TimeSavedChart />
              <p className="text-sm text-gray-500 text-center mb-6">Chart: Time Saved Per Week</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center"><div className="text-xl font-bold text-blue-600">{tc.benchmark1Value}</div></div>
                <div className="bg-purple-50 rounded-lg p-4 text-center"><div className="text-xl font-bold text-purple-600">{tc.benchmark2Value}</div></div>
                <div className="bg-green-50 rounded-lg p-4 text-center"><div className="text-xl font-bold text-green-600">{tc.benchmark3Value}</div></div>
                <div className="bg-orange-50 rounded-lg p-4 text-center"><div className="text-xl font-bold text-orange-600">{tc.benchmark4Value}</div></div>
                <div className="bg-red-50 rounded-lg p-4 text-center"><div className="text-xl font-bold text-red-600">{tc.benchmark5Value}</div></div>
                <div className="bg-gray-100 rounded-lg p-4 text-center"><div className="text-xl font-bold text-gray-700">{tc.benchmark6Value}</div></div>
              </div>
            </section>

            <section id="recommendation" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.verdictTitle}</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <p className="text-lg font-medium text-gray-800">{tc.verdictSummary}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.rec1Title}</h3>
                  <p className="text-sm opacity-90">{tc.rec1Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.rec2Title}</h3>
                  <p className="text-sm opacity-90">{tc.rec2Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.rec3Title}</h3>
                  <p className="text-sm opacity-90">{tc.rec3Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.rec4Title}</h3>
                  <p className="text-sm opacity-90">{tc.rec4Desc}</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">{tc.verdictNote}</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 NewsKingdom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}