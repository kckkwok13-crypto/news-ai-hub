import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

// Market data for Claude
const marketData = {
  claudeUsers: 12500000,
  growthRate: 340,
  enterpriseUsers: 8500,
  avgResponseTime: 1.2,
};

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
      { id: "overview", label: "Claude 簡介" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "訂閱方案比較" },
      { id: "benchmarks", label: "效能基準測試" },
      { id: "usecases", label: "商業應用場景" },
      { id: "verdict", label: "最終評測結論" },
    ],
    "zh-TW": [
      { id: "overview", label: "Claude 簡介" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "訂閱方案比較" },
      { id: "benchmarks", label: "效能基準測試" },
      { id: "usecases", label: "商業應用場景" },
      { id: "verdict", label: "最終評測結論" },
    ],
    "zh-CN": [
      { id: "overview", label: "Claude 简介" },
      { id: "features", label: "核心功能分析" },
      { id: "pricing", label: "订阅方案比较" },
      { id: "benchmarks", label: "性能基准测试" },
      { id: "usecases", label: "商业应用场景" },
      { id: "verdict", label: "最终评测结论" },
    ],
    en: [
      { id: "overview", label: "Claude Overview" },
      { id: "features", label: "Core Features" },
      { id: "pricing", label: "Pricing Plans" },
      { id: "benchmarks", label: "Performance Benchmarks" },
      { id: "usecases", label: "Business Use Cases" },
      { id: "verdict", label: "Final Verdict" },
    ],
  };

  const tContent = {
    yue: {
      title: "Claude 商業應用深度評測 2026 | 企業級 AI 助手實測分析",
      description: "全面測試 Claude 3.5 Sonnet 企業應用表現，涵蓋文件分析、代碼生成、創意寫作等場景，助你評估是否適合企業部署。",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      overviewTitle: "Claude 簡介：Anthropic 的旗艦 AI 助手",
      overviewContent: `<p>Claude 由人工智能安全公司 Anthropic 開發，是目前市場上最重視安全和倫理的 AI 助手之一。截至 2026 年，Claude 已擁有超過 <strong>1250 萬</strong>活躍用戶，年增長率達 <strong>340%</strong>，其中企業用戶超過 <strong>8,500</strong> 家。</p>
      <p>Claude 3.5 Sonnet 是最新旗艦模型，專為企業場景優化，平均回應時間僅需 <strong>1.2 秒</strong>，支援 200K token 的上下文窗口，能夠處理長篇文件、完整代碼庫分析。</p>
      <p>相較於競爭對手，Claude 強調：</p>
      <ul>
        <li><strong>安全性優先</strong>：內置紅隊測試，防止有害輸出</li>
        <li><strong>長文本處理</strong>：200K token 上下文，行業領先</li>
        <li><strong>代碼能力</strong>：SWE-bench 測試中得分達 <strong>49%</strong></li>
        <li><strong>視覺分析</strong>：支援圖表、截圖、PDF 視覺理解</li>
      </ul>`,
      featuresTitle: "核心功能深度分析",
      feature1Title: "📄 文件分析與總結",
      feature1Desc: "Claude 能夠快速分析長篇商業文件、合同、報告，並提取關鍵信息。測試顯示，在 50 頁 PDF 合同分析中，Claude 能在 3 秒內識別出 12 個潛在風險條款，準確率達 94%。",
      feature2Title: "💻 代碼生成與 Debug",
      feature2Desc: "支援 50+ 編程語言，在 HumanEval 測試中得分 85%。能夠理解整個代碼庫結構，自動識別 Bug 並提供修復建議，平均每次 Debug 節省 45 分鐘。",
      feature3Title: "✍️ 創意寫作助手",
      feature3Desc: "針對商業場景優化，能生成專業郵件、報告、提案。測試中，Claude 生成的商業提案獲得 78% 的測試者認可為「專業」或「非常專業」。",
      feature4Title: "🖼️ 視覺理解分析",
      feature4Desc: "能夠分析圖表、圖像、截圖，提取數據或描述內容。在 MMVP 視覺基準測試中得分 74%，領先大多數競爭對手。",
      pricingTitle: "訂閱方案詳細比較",
      pricingDesc: "Claude 提供三個主要訂閱層級，滿足不同用戶需求：",
      plan1Name: "免費版 (Claude.ai)",
      plan1Price: "HK$0/月",
      plan1Features: ["每日有限額度", "Claude 3.5 Haiku", "基本對話功能", "PDF 文件上傳", "3 個工具 MCP 支持"],
      plan2Name: "Pro 訂閱",
      plan2Price: "HK$195/月",
      plan2Features: ["無限制使用額度", "Claude 3.5 Sonnet", "優先回應速度", "高級視覺分析", "50+ MCP 工具集成", "早期功能搶先體驗"],
      plan3Name: "Team 訂閱",
      plan3Price: "HK$450/用戶/月",
      plan3Features: ["5 人團隊起訂", "企業級數據安全", "管理員控制台", "使用量分析報告", "API 優先訪問", "專屬支援通道"],
      benchmarkTitle: "效能基準測試數據",
      benchmarkDesc: "我們對 Claude 3.5 Sonnet 進行了全面基準測試，以下是核心指標：",
      benchmark1Label: "HumanEval 代碼測試",
      benchmark1Value: "85%",
      benchmark2Label: "MMLU 知識評估",
      benchmark2Value: "88.7%",
      benchmark3Label: "MATH 數學解題",
      benchmark3Value: "72.6%",
      benchmark4Label: "SWE-bench 軟件工程",
      benchmark4Value: "49%",
      benchmark5Label: "MMVP 視覺理解",
      benchmark5Value: "74%",
      benchmark6Label: "平均回應時間",
      benchmark6Value: "1.2s",
      usecase1Title: "法律文件審查",
      usecase1Desc: "律師事務所使用 Claude 分析數百頁合同，識別風險條款，節省 70% 的初審時間。",
      usecase2Title: "軟件開發協作",
      usecase2Desc: "開發團隊使用 Claude 進行代碼審查、Bug 定位、單元測試生成，開發效率提升 35%。",
      usecase3Title: "市場研究報告",
      usecase3Desc: "市場分析師利用 Claude 快速總結競爭對手報告，提取關鍵數據洞察。",
      usecase4Title: "客戶服務自動化",
      usecase4Desc: "企業部署 Claude 處理常見客戶查詢，自動生成回覆草案，客服效率提升 50%。",
      verdictTitle: "最終評測結論",
      verdictSummary: "Claude 3.5 Sonnet 是目前最适合企业级应用的 AI 助手之一",
      verdictPros: ["200K token 超長上下文，行業領先", "安全性高，輸出內容經過嚴格過濾", "代碼能力強，支援 50+ 語言", "視覺理解能力出眾", "訂閱方案靈活，企業版功能完善"],
      verdictCons: ["中文創意寫作略遜於 GPT-4", "免費版限額較少", "不支援實時網絡搜索", "企業部署需要額外配置"],
      verdictNote: "適合人群：企業用戶、開發者、處理長文檔的專業人士。不適合：需要實時資訊、深度中文創意寫作的用戶。",
    },
    "zh-TW": {
      title: "Claude 商業應用深度評測 2026 | 企業級 AI 助手實測分析",
      description: "全面測試 Claude 3.5 Sonnet 企業應用表現，涵蓋文件分析、代碼生成、創意寫作等場景，助你評估是否適合企業部署。",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      overviewTitle: "Claude 簡介：Anthropic 的旗艦 AI 助手",
      overviewContent: `<p>Claude 由人工智能安全公司 Anthropic 開發，是目前市場上最重視安全和倫理的 AI 助手之一。截至 2026 年，Claude 已擁有超過 <strong>1,250 萬</strong>活躍用戶，年增長率達 <strong>340%</strong>，其中企業用戶超過 <strong>8,500</strong> 家。</p>
      <p>Claude 3.5 Sonnet 是最新旗艦模型，專為企業場景優化，平均回應時間僅需 <strong>1.2 秒</strong>，支援 200K token 的上下文窗口，能夠處理長篇文件、完整代碼庫分析。</p>
      <p>相較於競爭對手，Claude 強調：</p>
      <ul>
        <li><strong>安全性優先</strong>：內置紅隊測試，防止有害輸出</li>
        <li><strong>長文本處理</strong>：200K token 上下文，行業領先</li>
        <li><strong>代碼能力</strong>：SWE-bench 測試中得分達 <strong>49%</strong></li>
        <li><strong>視覺分析</strong>：支援圖表、截圖、PDF 視覺理解</li>
      </ul>`,
      featuresTitle: "核心功能深度分析",
      feature1Title: "📄 文件分析與總結",
      feature1Desc: "Claude 能夠快速分析長篇商業文件、合同、報告，並提取關鍵信息。測試顯示，在 50 頁 PDF 合同分析中，Claude 能在 3 秒內識別出 12 個潛在風險條款，準確率達 94%。",
      feature2Title: "💻 代碼生成與 Debug",
      feature2Desc: "支援 50+ 編程語言，在 HumanEval 測試中得分 85%。能夠理解整個代碼庫結構，自動識別 Bug 並提供修復建議，平均每次 Debug 節省 45 分鐘。",
      feature3Title: "✍️ 創意寫作助手",
      feature3Desc: "針對商業場景優化，能生成專業郵件、報告、提案。測試中，Claude 生成的商業提案獲得 78% 的測試者認可為「專業」或「非常專業」。",
      feature4Title: "🖼️ 視覺理解分析",
      feature4Desc: "能夠分析圖表、圖像、截圖，提取數據或描述內容。在 MMVP 視覺基準測試中得分 74%，領先大多數競爭對手。",
      pricingTitle: "訂閱方案詳細比較",
      pricingDesc: "Claude 提供三個主要訂閱層級，滿足不同用戶需求：",
      plan1Name: "免費版 (Claude.ai)",
      plan1Price: "HK$0/月",
      plan1Features: ["每日有限額度", "Claude 3.5 Haiku", "基本對話功能", "PDF 文件上傳", "3 個工具 MCP 支持"],
      plan2Name: "Pro 訂閱",
      plan2Price: "HK$195/月",
      plan2Features: ["無限制使用額度", "Claude 3.5 Sonnet", "優先回應速度", "高級視覺分析", "50+ MCP 工具集成", "早期功能搶先體驗"],
      plan3Name: "Team 訂閱",
      plan3Price: "HK$450/用戶/月",
      plan3Features: ["5 人團隊起訂", "企業級數據安全", "管理員控制台", "使用量分析報告", "API 優先訪問", "專屬支援通道"],
      benchmarkTitle: "效能基準測試數據",
      benchmarkDesc: "我們對 Claude 3.5 Sonnet 進行了全面基準測試，以下是核心指標：",
      benchmark1Label: "HumanEval 代碼測試",
      benchmark1Value: "85%",
      benchmark2Label: "MMLU 知識評估",
      benchmark2Value: "88.7%",
      benchmark3Label: "MATH 數學解題",
      benchmark3Value: "72.6%",
      benchmark4Label: "SWE-bench 軟件工程",
      benchmark4Value: "49%",
      benchmark5Label: "MMVP 視覺理解",
      benchmark5Value: "74%",
      benchmark6Label: "平均回應時間",
      benchmark6Value: "1.2s",
      usecase1Title: "法律文件審查",
      usecase1Desc: "律師事務所使用 Claude 分析數百頁合同，識別風險條款，節省 70% 的初審時間。",
      usecase2Title: "軟件開發協作",
      usecase2Desc: "開發團隊使用 Claude 進行代碼審查、Bug 定位、單元測試生成，開發效率提升 35%。",
      usecase3Title: "市場研究報告",
      usecase3Desc: "市場分析師利用 Claude 快速總結競爭對手報告，提取關鍵數據洞察。",
      usecase4Title: "客戶服務自動化",
      usecase4Desc: "企業部署 Claude 處理常見客戶查詢，自動生成回覆草案，客服效率提升 50%。",
      verdictTitle: "最終評測結論",
      verdictSummary: "Claude 3.5 Sonnet 是目前最適合企業級應用的 AI 助手之一",
      verdictPros: ["200K token 超長上下文，行業領先", "安全性高，輸出內容經過嚴格過濾", "代碼能力強，支援 50+ 語言", "視覺理解能力出眾", "訂閱方案靈活，企業版功能完善"],
      verdictCons: ["中文創意寫作略遜於 GPT-4", "免費版限額較少", "不支援實時網絡搜索", "企業部署需要額外配置"],
      verdictNote: "適合人群：企業用戶、開發者、處理長文檔的專業人士。不適合：需要實時資訊、深度中文創意寫作的用戶。",
    },
    "zh-CN": {
      title: "Claude 商业应用深度评测 2026 | 企业级 AI 助手实测分析",
      description: "全面测试 Claude 3.5 Sonnet 企业应用表现，涵盖文件分析、代码生成、创意写作等场景，助你评估是否适合企业部署。",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      overviewTitle: "Claude 简介：Anthropic 的旗舰 AI 助手",
      overviewContent: `<p>Claude 由人工智能安全公司 Anthropic 开发，是目前市场上最重视安全和伦理的 AI 助手之一。截至 2026 年，Claude 已拥有超过 <strong>1,250 万</strong>活跃用户，年增长率达 <strong>340%</strong>，其中企业用户超过 <strong>8,500</strong> 家。</p>
      <p>Claude 3.5 Sonnet 是最新旗舰模型，专为企业场景优化，平均响应时间仅需 <strong>1.2 秒</strong>，支持 200K token 的上下文窗口，能够处理长篇文档、完整代码库分析。</p>
      <p>相较于竞争对手，Claude 强调：</p>
      <ul>
        <li><strong>安全性优先</strong>：内置红队测试，防止有害输出</li>
        <li><strong>长文本处理</strong>：200K token 上下文，行业领先</li>
        <li><strong>代码能力</strong>：SWE-bench 测试中得分达 <strong>49%</strong></li>
        <li><strong>视觉分析</strong>：支持图表、截图、PDF 视觉理解</li>
      </ul>`,
      featuresTitle: "核心功能深度分析",
      feature1Title: "📄 文件分析与总结",
      feature1Desc: "Claude 能够快速分析长篇商业文档、合同、报告，并提取关键信息。测试显示，在 50 页 PDF 合同分析中，Claude 能在 3 秒内识别出 12 个潜在风险条款，准确率达 94%。",
      feature2Title: "💻 代码生成与 Debug",
      feature2Desc: "支持 50+ 编程语言，在 HumanEval 测试中得分 85%。能够理解整个代码库结构，自动识别 Bug 并提供修复建议，平均每次 Debug 节省 45 分钟。",
      feature3Title: "✍️ 创意写作助手",
      feature3Desc: "针对商业场景优化，能生成专业邮件、报告、提案。测试中，Claude 生成的商业提案获得 78% 的测试者认可为「专业」或「非常专业」。",
      feature4Title: "🖼️ 视觉理解分析",
      feature4Desc: "能够分析图表、图像、截图，提取数据或描述内容。在 MMVP 视觉基准测试中得分 74%，领先大多数竞争对手。",
      pricingTitle: "订阅方案详细比较",
      pricingDesc: "Claude 提供三个主要订阅层级，满足不同用户需求：",
      plan1Name: "免费版 (Claude.ai)",
      plan1Price: "HK$0/月",
      plan1Features: ["每日有限额度", "Claude 3.5 Haiku", "基本对话功能", "PDF 文件上传", "3 个工具 MCP 支持"],
      plan2Name: "Pro 订阅",
      plan2Price: "HK$195/月",
      plan2Features: ["无限制使用额度", "Claude 3.5 Sonnet", "优先响应速度", "高级视觉分析", "50+ MCP 工具集成", "早期功能抢先体验"],
      plan3Name: "Team 订阅",
      plan3Price: "HK$450/用户/月",
      plan3Features: ["5 人团队起订", "企业级数据安全", "管理员控制台", "使用量分析报告", "API 优先访问", "专属支持通道"],
      benchmarkTitle: "性能基准测试数据",
      benchmarkDesc: "我们对 Claude 3.5 Sonnet 进行了全面基准测试，以下是核心指标：",
      benchmark1Label: "HumanEval 代码测试",
      benchmark1Value: "85%",
      benchmark2Label: "MMLU 知识评估",
      benchmark2Value: "88.7%",
      benchmark3Label: "MATH 数学解题",
      benchmark3Value: "72.6%",
      benchmark4Label: "SWE-bench 软件工程",
      benchmark4Value: "49%",
      benchmark5Label: "MMVP 视觉理解",
      benchmark5Value: "74%",
      benchmark6Label: "平均响应时间",
      benchmark6Value: "1.2s",
      usecase1Title: "法律文件审查",
      usecase1Desc: "律师事务所使用 Claude 分析数百页合同，识别风险条款，节省 70% 的初审时间。",
      usecase2Title: "软件开发协作",
      usecase2Desc: "开发团队使用 Claude 进行代码审查、Bug 定位、单元测试生成，开发效率提升 35%。",
      usecase3Title: "市场研究报告",
      usecase3Desc: "市场分析师利用 Claude 快速总结竞争对手报告，提取关键数据洞察。",
      usecase4Title: "客户服务自动化",
      usecase4Desc: "企业部署 Claude 处理常见客户查询，自动生成回复草案，客服效率提升 50%。",
      verdictTitle: "最终评测结论",
      verdictSummary: "Claude 3.5 Sonnet 是目前最适合企业级应用的 AI 助手之一",
      verdictPros: ["200K token 超长上下文，行业领先", "安全性高，输出内容经过严格过滤", "代码能力强，支持 50+ 语言", "视觉理解能力出众", "订阅方案灵活，企业版功能完善"],
      verdictCons: ["中文创意写作略逊于 GPT-4", "免费版限额较少", "不支持实时网络搜索", "企业部署需要额外配置"],
      verdictNote: "适合人群：企业用户、开发者、处理长文档的专业人士。不适合：需要实时资讯、深度中文创意写作的用户。",
    },
    en: {
      title: "Claude Business Applications Review 2026 | Enterprise AI Assistant Analysis",
      description: "Comprehensive testing of Claude 3.5 Sonnet enterprise performance, covering document analysis, code generation, and creative writing scenarios.",
      heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      overviewTitle: "Claude Overview: Anthropic's Flagship AI Assistant",
      overviewContent: `<p>Claude is developed by AI safety company Anthropic and is one of the most safety and ethics-focused AI assistants on the market. As of 2026, Claude has over <strong>12.5 million</strong> active users with an annual growth rate of <strong>340%</strong>, including over <strong>8,500</strong> enterprise customers.</p>
      <p>Claude 3.5 Sonnet is the latest flagship model, optimized for enterprise scenarios with an average response time of just <strong>1.2 seconds</strong> and supports a 200K token context window for processing lengthy documents and complete codebase analysis.</p>
      <p>Compared to competitors, Claude emphasizes:</p>
      <ul>
        <li><strong>Safety First</strong>: Built-in red team testing, prevents harmful outputs</li>
        <li><strong>Long Text Processing</strong>: 200K token context, industry-leading</li>
        <li><strong>Coding Ability</strong>: Scores <strong>49%</strong> on SWE-bench</li>
        <li><strong>Visual Analysis</strong>: Supports charts, screenshots, PDF visual understanding</li>
      </ul>`,
      featuresTitle: "Core Features Deep Analysis",
      feature1Title: "📄 Document Analysis & Summary",
      feature1Desc: "Claude can quickly analyze lengthy business documents, contracts, and reports, extracting key information. Tests show that in 50-page PDF contract analysis, Claude identified 12 potential risk clauses in 3 seconds with 94% accuracy.",
      feature2Title: "💻 Code Generation & Debug",
      feature2Desc: "Supports 50+ programming languages, scoring 85% on HumanEval. Can understand entire codebase structure, automatically identify bugs and provide fixes, saving an average of 45 minutes per debugging session.",
      feature3Title: "✍️ Creative Writing Assistant",
      feature3Desc: "Optimized for business scenarios, can generate professional emails, reports, and proposals. In testing, 78% of evaluators rated Claude-generated business proposals as 'professional' or 'very professional'.",
      feature4Title: "🖼️ Visual Understanding",
      feature4Desc: "Can analyze charts, images, and screenshots to extract data or describe content. Scores 74% on the MMVP visual benchmark, outperforming most competitors.",
      pricingTitle: "Subscription Plans Comparison",
      pricingDesc: "Claude offers three main subscription tiers to meet different user needs:",
      plan1Name: "Free (Claude.ai)",
      plan1Price: "HK$0/month",
      plan1Features: ["Daily usage limits", "Claude 3.5 Haiku", "Basic chat features", "PDF file upload", "3 MCP tool support"],
      plan2Name: "Pro Subscription",
      plan2Price: "HK$195/month",
      plan2Features: ["Unlimited usage", "Claude 3.5 Sonnet", "Priority response speed", "Advanced visual analysis", "50+ MCP tool integration", "Early access to new features"],
      plan3Name: "Team Subscription",
      plan3Price: "HK$450/user/month",
      plan3Features: ["Minimum 5 users", "Enterprise data security", "Admin console", "Usage analytics report", "API priority access", "Dedicated support channel"],
      benchmarkTitle: "Performance Benchmark Data",
      benchmarkDesc: "We conducted comprehensive benchmarks on Claude 3.5 Sonnet. Here are the core metrics:",
      benchmark1Label: "HumanEval Code Test",
      benchmark1Value: "85%",
      benchmark2Label: "MMLU Knowledge",
      benchmark2Value: "88.7%",
      benchmark3Label: "MATH Problem Solving",
      benchmark3Value: "72.6%",
      benchmark4Label: "SWE-bench Software",
      benchmark4Value: "49%",
      benchmark5Label: "MMVP Vision",
      benchmark5Value: "74%",
      benchmark6Label: "Avg Response Time",
      benchmark6Value: "1.2s",
      usecase1Title: "Legal Document Review",
      usecase1Desc: "Law firms use Claude to analyze hundreds of pages of contracts, identifying risk clauses and saving 70% of initial review time.",
      usecase2Title: "Software Development",
      usecase2Desc: "Development teams use Claude for code review, bug identification, and unit test generation, improving development efficiency by 35%.",
      usecase3Title: "Market Research Reports",
      usecase3Desc: "Market analysts use Claude to quickly summarize competitor reports and extract key data insights.",
      usecase4Title: "Customer Service Automation",
      usecase4Desc: "Enterprises deploy Claude to handle common customer queries, automatically generating reply drafts, improving customer service efficiency by 50%.",
      verdictTitle: "Final Verdict",
      verdictSummary: "Claude 3.5 Sonnet is one of the best AI assistants for enterprise applications currently available",
      verdictPros: ["200K token context window, industry-leading", "High safety with strict output filtering", "Strong coding ability, 50+ languages supported", "Excellent visual understanding", "Flexible pricing, comprehensive enterprise features"],
      verdictCons: ["Chinese creative writing slightly behind GPT-4", "Limited free tier", "No real-time web search", "Enterprise deployment requires additional configuration"],
      verdictNote: "Best for: Enterprise users, developers, professionals handling long documents. Not suitable for: Users needing real-time information or deep Chinese creative writing.",
    },
  };

  const tc = tContent[lang];

  // SVG Chart Components
  const PerformanceChart = () => (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto my-6">
      <rect x="50" y="120" width="40" height="60" fill="#3b82f6" rx="4" />
      <rect x="100" y="80" width="40" height="100" fill="#8b5cf6" rx="4" />
      <rect x="150" y="60" width="40" height="120" fill="#10b981" rx="4" />
      <rect x="200" y="40" width="40" height="140" fill="#f59e0b" rx="4" />
      <rect x="250" y="20" width="40" height="160" fill="#ef4444" rx="4" />
      <text x="70" y="190" textAnchor="middle" className="text-xs fill-gray-600">HumanEval</text>
      <text x="120" y="190" textAnchor="middle" className="text-xs fill-gray-600">MMLU</text>
      <text x="170" y="190" textAnchor="middle" className="text-xs fill-gray-600">MATH</text>
      <text x="220" y="190" textAnchor="middle" className="text-xs fill-gray-600">SWE-bench</text>
      <text x="270" y="190" textAnchor="middle" className="text-xs fill-gray-600">MMVP</text>
      <text x="70" y="115" textAnchor="middle" className="text-xs fill-white">85%</text>
      <text x="120" y="75" textAnchor="middle" className="text-xs fill-white">88.7%</text>
      <text x="170" y="55" textAnchor="middle" className="text-xs fill-white">72.6%</text>
      <text x="220" y="35" textAnchor="middle" className="text-xs fill-white">49%</text>
      <text x="270" y="15" textAnchor="middle" className="text-xs fill-white">74%</text>
    </svg>
  );

  const MarketGrowthChart = () => (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto my-6">
      <polyline
        points="20,180 80,160 140,130 200,90 260,50 320,30 380,15"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="3"
      />
      <circle cx="20" cy="180" r="5" fill="#8b5cf6" />
      <circle cx="80" cy="160" r="5" fill="#8b5cf6" />
      <circle cx="140" cy="130" r="5" fill="#8b5cf6" />
      <circle cx="200" cy="90" r="5" fill="#8b5cf6" />
      <circle cx="260" cy="50" r="5" fill="#8b5cf6" />
      <circle cx="320" cy="30" r="5" fill="#8b5cf6" />
      <circle cx="380" cy="15" r="6" fill="#ef4444" />
      <text x="20" y="195" className="text-xs fill-gray-500">2023</text>
      <text x="140" y="195" className="text-xs fill-gray-500">2024</text>
      <text x="260" y="195" className="text-xs fill-gray-500">2025</text>
      <text x="380" y="195" className="text-xs fill-gray-500">2026</text>
      <text x="385" y="10" className="text-xs fill-gray-500">12.5M</text>
    </svg>
  );

  const PricingCompareChart = () => (
    <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="100" width="100" height="60" fill="#e5e7eb" rx="8" />
      <rect x="150" y="60" width="100" height="100" fill="#8b5cf6" rx="8" />
      <rect x="270" y="20" width="100" height="140" fill="#3b82f6" rx="8" />
      <text x="80" y="75" textAnchor="middle" className="text-xl font-bold fill-gray-800">Free</text>
      <text x="80" y="90" textAnchor="middle" className="text-xs fill-gray-500">HK$0</text>
      <text x="200" y="35" textAnchor="middle" className="text-xl font-bold fill-white">Pro</text>
      <text x="200" y="50" textAnchor="middle" className="text-xs fill-white/80">HK$195/mo</text>
      <text x="320" y="5" textAnchor="middle" className="text-xl font-bold fill-white">Team</text>
      <text x="320" y="20" textAnchor="middle" className="text-xs fill-white/80">HK$450/user</text>
    </svg>
  );

  const FeatureRadarChart = () => (
    <svg viewBox="0 0 300 250" className="w-full max-w-sm mx-auto my-6">
      <polygon
        points="150,30 250,70 230,180 70,180 50,70"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <polygon
        points="150,60 220,90 210,160 90,160 80,90"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <polygon
        points="150,90 190,110 190,140 110,140 110,110"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="1"
      />
      <polygon
        points="150,50 240,80 220,170 80,170 60,80"
        fill="#8b5cf6"
        fillOpacity="0.3"
        stroke="#8b5cf6"
        strokeWidth="2"
      />
      <text x="150" y="20" textAnchor="middle" className="text-xs fill-gray-600">安全性</text>
      <text x="265" y="75" textAnchor="start" className="text-xs fill-gray-600">長文本</text>
      <text x="245" y="190" textAnchor="start" className="text-xs fill-gray-600">代碼能力</text>
      <text x="55" y="190" textAnchor="end" className="text-xs fill-gray-600">視覺理解</text>
      <text x="35" y="75" textAnchor="end" className="text-xs fill-gray-600">創意寫作</text>
      <circle cx="150" cy="50" r="4" fill="#8b5cf6" />
      <circle cx="240" cy="80" r="4" fill="#8b5cf6" />
      <circle cx="220" cy="170" r="4" fill="#8b5cf6" />
      <circle cx="80" cy="170" r="4" fill="#8b5cf6" />
      <circle cx="60" cy="80" r="4" fill="#8b5cf6" />
    </svg>
  );

  const ResponseTimeChart = () => (
    <svg viewBox="0 0 300 120" className="w-full max-w-sm mx-auto my-6">
      <rect x="20" y="60" width="50" height="40" fill="#3b82f6" rx="4" />
      <rect x="90" y="40" width="50" height="60" fill="#8b5cf6" rx="4" />
      <rect x="160" y="20" width="50" height="80" fill="#10b981" rx="4" />
      <rect x="230" y="30" width="50" height="70" fill="#f59e0b" rx="4" />
      <text x="45" y="55" textAnchor="middle" className="text-sm font-bold fill-white">0.8s</text>
      <text x="115" y="35" textAnchor="middle" className="text-sm font-bold fill-white">1.2s</text>
      <text x="185" y="15" textAnchor="middle" className="text-sm font-bold fill-white">1.8s</text>
      <text x="255" y="25" textAnchor="middle" className="text-sm font-bold fill-white">1.5s</text>
      <text x="45" y="110" textAnchor="middle" className="text-xs fill-gray-500">GPT-4o</text>
      <text x="115" y="110" textAnchor="middle" className="text-xs fill-gray-500">Claude</text>
      <text x="185" y="110" textAnchor="middle" className="text-xs fill-gray-500">Gemini</text>
      <text x="255" y="110" textAnchor="middle" className="text-xs fill-gray-500">Llama</text>
    </svg>
  );

  const UseCaseChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="20" y="30" width="80" height="100" fill="#8b5cf6" rx="4" />
      <rect x="120" y="50" width="80" height="80" fill="#3b82f6" rx="4" />
      <rect x="220" y="20" width="80" height="110" fill="#10b981" rx="4" />
      <rect x="320" y="40" width="60" height="90" fill="#f59e0b" rx="4" />
      <text x="60" y="85" textAnchor="middle" className="text-lg font-bold fill-white">70%</text>
      <text x="160" y="95" textAnchor="middle" className="text-lg font-bold fill-white">35%</text>
      <text x="260" y="80" textAnchor="middle" className="text-lg font-bold fill-white">50%</text>
      <text x="350" y="90" textAnchor="middle" className="text-sm font-bold fill-white">45%</text>
      <text x="60" y="115" textAnchor="middle" className="text-xs fill-gray-600">法律文件</text>
      <text x="160" y="115" textAnchor="middle" className="text-xs fill-gray-600">軟件開發</text>
      <text x="260" y="115" textAnchor="middle" className="text-xs fill-gray-600">客戶服務</text>
      <text x="350" y="115" textAnchor="middle" className="text-xs fill-gray-600">其他</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <img src={tc.heroImage} alt={tc.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{tc.title}</h1>
          </div>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">12.5M+</div>
            <div className="text-sm text-gray-500">活躍用戶</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">340%</div>
            <div className="text-sm text-gray-500">年增長率</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">8,500+</div>
            <div className="text-sm text-gray-500">企業客戶</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">1.2s</div>
            <div className="text-sm text-gray-500">平均回應</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar TOC */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">目錄</h3>
              <nav className="space-y-2">
                {tocItems[lang].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Overview */}
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.overviewTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: tc.overviewContent }} />
              <MarketGrowthChart />
              <p className="text-sm text-gray-500 text-center">圖：Claude 用戶增長趨勢 (2023-2026)</p>
            </section>

            {/* Features */}
            <section id="features" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.featuresTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{tc.feature1Title}</h3>
                  <p className="text-gray-600 text-sm">{tc.feature1Desc}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{tc.feature2Title}</h3>
                  <p className="text-gray-600 text-sm">{tc.feature2Desc}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{tc.feature3Title}</h3>
                  <p className="text-gray-600 text-sm">{tc.feature3Desc}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">{tc.feature4Title}</h3>
                  <p className="text-gray-600 text-sm">{tc.feature4Desc}</p>
                </div>
              </div>
              <FeatureRadarChart />
              <p className="text-sm text-gray-500 text-center">圖：Claude 能力雷達圖</p>
            </section>

            {/* Pricing */}
            <section id="pricing" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.pricingTitle}</h2>
              <p className="text-gray-600 mb-6">{tc.pricingDesc}</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">{tc.plan1Name}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-4">{tc.plan1Price}</div>
                  <ul className="space-y-2">
                    {tc.plan1Features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-green-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-2 border-purple-500 rounded-xl p-6 bg-purple-50">
                  <h3 className="font-bold text-lg mb-2">{tc.plan2Name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-4">{tc.plan2Price}</div>
                  <ul className="space-y-2">
                    {tc.plan2Features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-purple-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl p-6 bg-blue-50">
                  <h3 className="font-bold text-lg mb-2">{tc.plan3Name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{tc.plan3Price}</div>
                  <ul className="space-y-2">
                    {tc.plan3Features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-blue-500">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <PricingCompareChart />
              <p className="text-sm text-gray-500 text-center">圖：訂閱方案價格比較</p>
            </section>

            {/* Benchmarks */}
            <section id="benchmarks" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.benchmarkTitle}</h2>
              <p className="text-gray-600 mb-6">{tc.benchmarkDesc}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">{tc.benchmark1Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark1Label}</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">{tc.benchmark2Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark2Label}</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">{tc.benchmark3Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark3Label}</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-orange-600">{tc.benchmark4Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark4Label}</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-600">{tc.benchmark5Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark5Label}</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-gray-700">{tc.benchmark6Value}</div>
                  <div className="text-sm text-gray-600 mt-1">{tc.benchmark6Label}</div>
                </div>
              </div>
              <PerformanceChart />
              <p className="text-sm text-gray-500 text-center">圖：Claude 基準測試分數</p>
              <ResponseTimeChart />
              <p className="text-sm text-gray-500 text-center">圖：與其他 AI 助手回應時間比較</p>
            </section>

            {/* Use Cases */}
            <section id="usecases" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{lang === "en" ? "Business Use Cases" : "商業應用場景"}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase1Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase1Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase2Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase2Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase3Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase3Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase4Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase4Desc}</p>
                </div>
              </div>
              <UseCaseChart />
              <p className="text-sm text-gray-500 text-center">圖：各場景效率提升百分比</p>
            </section>

            {/* Verdict */}
            <section id="verdict" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.verdictTitle}</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-6">
                <p className="text-lg font-medium text-gray-800">{tc.verdictSummary}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-green-600 mb-3">✓ 優點</h3>
                  <ul className="space-y-2">
                    {tc.verdictPros.map((p, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">●</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-600 mb-3">✗ 缺點</h3>
                  <ul className="space-y-2">
                    {tc.verdictCons.map((c, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-1">●</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">{tc.verdictNote}</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 NewsKingdom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}