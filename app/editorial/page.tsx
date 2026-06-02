'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Clock, 
  Calendar, 
  ChevronRight, 
  Filter, 
  Sparkles, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  Tag,
  Globe
} from 'lucide-react'

type Lang = 'zh-TW' | 'en' | 'zh-CN'

const TRANSLATIONS = {
  'zh-TW': {
    title: "深度 原創 分析",
    subtitle: "由專業編輯團隊執筆，深耕科技、金融、AI 及區塊鏈領域，為您解碼複雜世界背後的底層邏輯。",
    search: "搜尋深度文章...",
    categories: "索引分類",
    all: "全部",
    featured: "精選文章",
    readTime: "分鐘閱讀",
    readFull: "閱讀全文",
    readMore: "閱讀更多",
    noFound: "未找到相關文章",
    clear: "清除全部",
    ready: "準備好深入洞察了嗎？",
    ctaDesc: "我們的「編輯精選」系列致力於提供最高質量的原創分析。我們拒絕碎片化信息，堅持深度思考的力量。",
    backHome: "返回主頁",
    subscribe: "每週訂閱",
    original: "原創專欄"
  },
  'en': {
    title: "Deep Original Analysis",
    subtitle: "Authored by a professional editorial team, specializing in technology, finance, AI, and blockchain to decode the underlying logic of a complex world.",
    search: "Search deep articles...",
    categories: "Categories",
    all: "All",
    featured: "Featured",
    readTime: "min read",
    readFull: "Read Full Article",
    readMore: "Read More",
    noFound: "No articles found",
    clear: "Clear All",
    ready: "Ready for Deep Insights?",
    ctaDesc: "Our 'Editor's Pick' series provides strictly verified, logically sound original analysis. We reject fragmented info and believe in deep thinking.",
    backHome: "Back to Home",
    subscribe: "Subscribe Weekly",
    original: "Original Editorial"
  },
  'zh-CN': {
    title: "深度 原创 分析",
    subtitle: "由专业编辑团队执笔，深耕科技、金融、AI 及区块链领域，为您解码复杂世界背后的底层逻辑。",
    search: "搜索深度文章...",
    categories: "索引分类",
    all: "全部",
    featured: "精选文章",
    readTime: "分钟阅读",
    readFull: "阅读全文",
    readMore: "阅读更多",
    noFound: "未找到相关文章",
    clear: "清除全部",
    ready: "准备好深入洞察了吗？",
    ctaDesc: "我们的“编辑精选”系列致力于提供最高质量的原创分析。我们拒绝碎片化信息，坚持深度思考的力量。",
    backHome: "返回主页",
    subscribe: "每周订阅",
    original: "原创专栏"
  }
}

const EDITORIAL_ARTICLES = [
  {
    id: 'bitcoin-etf',
    emoji: '₿',
    readTime: 10,
    date: '2026-05-28',
    link: '/editorial/bitcoin-etf-deep-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '比特幣ETF獲批後：加密貨幣市場結構性改變的深度分析', category: '加密貨幣', excerpt: '比特幣現貨ETF的批准不僅是監管的勝利，更標誌著傳統金融與加密市場之間那道曾經不可逾越的鴻溝正在加速消亡。' },
      'en': { title: 'After Bitcoin ETF Approval: In-depth Analysis of Structural Changes in the Crypto Market', category: 'Crypto', excerpt: 'The approval of spot Bitcoin ETFs is not just a regulatory victory; it marks the accelerating dissolution of the once insurmountable gap between traditional finance and crypto markets.' },
      'zh-CN': { title: '比特币ETF获批后：加密货币市场结构性改变的深度分析', category: '加密货币', excerpt: '比特币现货ETF的批准不仅是监管的胜利，更标志着传统金融与加密市场之间那道曾经不可逾越的鸿沟正在加速消亡。' }
    }
  },
  {
    id: 'ai-translation-ethics',
    emoji: '🤖',
    readTime: 9,
    date: '2026-05-25',
    link: '/editorial/ai-translation-ethics',
    featured: true,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'AI 翻譯新聞的倫理邊界：如何在技術便利與保護原創價值之間取得平衡？', category: '科技評論', excerpt: '當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？本文從編輯政策角度探討AI輔助翻譯的倫理邊界。' },
      'en': { title: 'Ethical Boundaries of AI News Translation: Balancing Tech Convenience and Original Value', category: 'Tech Opinion', excerpt: 'When AI can translate English news into Traditional Chinese in seconds, is the essence of journalism being diluted? This article explores ethical boundaries.' },
      'zh-CN': { title: 'AI 翻译新闻的伦理边界：如何在技术便利与保护原创价值之间取得平衡？', category: '科技评论', excerpt: '当AI能够在数秒内将一篇英文新闻翻译成简体中文，新闻的本质是否正在被稀释？本文从编辑政策角度探讨AI辅助翻译的伦理边界。' }
    }
  },
  {
    id: 'twohumans-vs-ai',
    emoji: '⚖️',
    readTime: 11,
    date: '2026-05-20',
    link: '/editorial/twohumans-vs-ai-analysis',
    featured: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '新聞App的AI分析功能：兩個不同背景的人 VS 一個AI，你信哪個？', category: '科技評論', excerpt: '當演算法可以瞬間總結全球新聞，「人性」與「效率」之間的取捨，究竟誰更能代表真相？' },
      'en': { title: 'AI Analysis in News Apps: Two Humans VS One AI, Who Do You Trust?', category: 'Tech Opinion', excerpt: 'When algorithms can instantly summarize global news, which represents the truth better: humanity or efficiency?' },
      'zh-CN': { title: '新闻App的AI分析功能：两个不同背景的人 VS 一个AI，你信哪个？', category: '科技评论', excerpt: '当算法可以瞬间总结全球新闻，“人性”与“效率”之间的取舍，究竟谁更能代表真相？' }
    }
  },
  {
    id: 'cbdc',
    emoji: '🏦',
    readTime: 10,
    date: '2026-05-15',
    link: '/editorial/cbdc-global-race',
    featured: true,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '全球央行數字貨幣競賽：美元霸權的終結還是進化？', category: '金融', excerpt: '從中國的數字人民幣到歐洲央行的數字歐元，各國央行正在加速布局數字貨幣。這場競賽將如何重塑全球金融秩序？' },
      'en': { title: 'Global CBDC Race: The End or Evolution of Dollar Hegemony?', category: 'Finance', excerpt: 'From China\'s e-CNY to the ECB\'s Digital Euro, central banks are racing to deploy digital currencies. How will this reshape the financial order?' },
      'zh-CN': { title: '全球央行数字货币竞赛：美元霸权的终结还是进化？', category: '金融', excerpt: '从中国的数字人民币到欧洲央行的数字欧元，各国央行正在加速布局数字货币。这场竞赛将如何重塑全球金融秩序？' }
    }
  },
  {
    id: 'stablecoin',
    emoji: '🪙',
    readTime: 11,
    date: '2026-05-12',
    link: '/editorial/stablecoin-war',
    featured: true,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '穩定幣大戰：USDT/USDC/USDJ誰能笑到最後？', category: '加密貨幣', excerpt: '當傳統銀行、加密原生公司、科技巨頭全部湧入穩定幣賽道，這場戰爭將如何改變我們的貨幣體系？' },
      'en': { title: 'Stablecoin War: USDT, USDC, or USDJ—Who Will Prevail?', category: 'Crypto', excerpt: 'As traditional banks and tech giants enter the stablecoin arena, how will this war transform our monetary system?' },
      'zh-CN': { title: '稳定币大战：USDT/USDC/USDJ谁能笑到最后？', category: '加密货币', excerpt: '当传统银行、加密原生公司、科技巨头全部湧入稳定币赛道，这场战争将如何改变我们的货币体系？' }
    }
  },
  {
    id: 'decentralized-finance',
    emoji: '💱',
    readTime: 10,
    date: '2026-05-10',
    link: '/editorial/decentralized-finance-guide',
    featured: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '去中心化金融DeFi：銀行業務的革命還是投機的溫床？', category: '金融科技', excerpt: '去中心化金融協議正在挑戰傳統銀行系統。從借貸到衍生品交易，用戶可以在無需中介的情況下進行金融活動。' },
      'en': { title: 'Decentralized Finance (DeFi): Banking Revolution or Speculative Bubble?', category: 'FinTech', excerpt: 'DeFi protocols are challenging traditional banking. From lending to derivatives, users can transact without intermediaries.' },
      'zh-CN': { title: '去中心化金融DeFi：银业务的革命还是投机的温床？', category: '金融科技', excerpt: '去中心化金融协议正在挑战传统银行系统。从借贷到衍生品交易，用户可以在无需中介的情况下进行金融活动。' }
    }
  },
  {
    id: 'ai-image-generator',
    emoji: '🎨',
    readTime: 9,
    date: '2026-05-08',
    link: '/editorial/ai-image-generators',
    featured: false,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'AI圖像生成器大爆發：Midjourney、DALL-E、Stable Diffusion如何改變創意產業？', category: 'AI應用', excerpt: '當任何人都可以通過文字描述在幾秒鐘內生成專業級圖像，傳統創意工作者如何生存？' },
      'en': { title: 'AI Image Generator Boom: How Midjourney and DALL-E are Changing Creative Industries', category: 'AI Application', excerpt: 'When anyone can generate professional images in seconds via text, how do traditional creators survive?' },
      'zh-CN': { title: 'AI图像生成器大爆发：Midjourney、DALL-E、Stable Diffusion如何改变创意产业？', category: 'AI应用', excerpt: '当任何人都可以通过文字描述在几秒钟内生成专业级图像，传统创意工作者如何生存？' }
    }
  },
  {
    id: 'web3-gaming',
    emoji: '🎮',
    readTime: 10,
    date: '2026-05-06',
    link: '/editorial/web3-gaming-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'Web3遊戲的未來：玩遊戲不再只是消費，而是賺錢？', category: '區塊鏈', excerpt: '區塊鏈遊戲正在重新定義玩家與開發者之間的關係。從「Play-to-Earn」到完全所有權的遊戲資產。' },
      'en': { title: 'Future of Web3 Gaming: Is Playing Games No Longer Just Consumption, But Earning?', category: 'Blockchain', excerpt: 'Blockchain games are redefining player-developer relationships through Play-to-Earn models.' },
      'zh-CN': { title: 'Web3游戏的未来：玩游戏不再只是消费，而是赚钱？', category: '区块链', excerpt: '区块链游戏正在重新定义玩家与开发者之间的关系。从“Play-to-Earn”到完全所有权的游戏资产。' }
    }
  },
  {
    id: 'metaverse-workplace',
    emoji: '🏢',
    readTime: 9,
    date: '2026-05-04',
    link: '/editorial/metaverse-workplace',
    featured: false,
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '元宇宙工作場所：虛擬辦公室的崛起與人力資源管理的未來', category: '科技職場', excerpt: '遠程辦公的普及，而元宇宙技術正在將這一趨勢推向新的維度。虛擬辦公室將是什麼樣子？' },
      'en': { title: 'Metaverse Workplace: Rise of Virtual Offices and the Future of HR Management', category: 'Tech Career', excerpt: 'Metaverse tech is pushing remote work into new dimensions. What will virtual offices look like?' },
      'zh-CN': { title: '元宇宙工作场所：虚拟办公室的崛起与人力资源管理的未来', category: '科技职场', excerpt: '远程办公的普及，而元宇宙技术正在将这一趋势推向新的维度。虚拟办公室将是什么样子？' }
    }
  },
  {
    id: 'quantum-computing',
    emoji: '⚛️',
    readTime: 10,
    date: '2026-05-02',
    link: '/editorial/quantum-computing-ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '量子計算與AI：當兩大革命性技術結合會發生什麼？', category: '前沿科技', excerpt: '量子計算機被譽為解決當前AI瓶頸的關鍵。量子AI的結合可能會徹底改變我們解決複雜問題的方式。' },
      'en': { title: 'Quantum Computing and AI: What Happens When Two Revolutionary Techs Combine?', category: 'Frontier Tech', excerpt: 'Quantum computers are seen as the key to solving AI bottlenecks. Quantum AI could change everything.' },
      'zh-CN': { title: '量子计算与AI：当两大革命性技术结合会发生什么？', category: '前沿科技', excerpt: '量子计算机被誉为解决当前AI瓶颈的关键。量子AI的结合可能会彻底改变我们解决复杂问题的方式。' }
    }
  },
  {
    id: 'space-tourism',
    emoji: '🚀',
    readTime: 9,
    date: '2026-04-30',
    link: '/editorial/space-tourism-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '太空旅遊的平民化：SpaceX、Blue Origin與維珍銀河誰能走得最遠？', category: '太空科技', excerpt: '從百萬美元到數十萬美元，太空旅遊的成本正在快速下降。但這項服務何時才能真正普及？' },
      'en': { title: 'Democratizing Space Tourism: SpaceX, Blue Origin vs Virgin Galactic', category: 'Space Tech', excerpt: 'With costs dropping from millions to hundreds of thousands, when will space travel go mainstream?' },
      'zh-CN': { title: '太空旅游的平民化：SpaceX、Blue Origin与维珍银河谁能走得最远？', category: '太空科技', excerpt: '从百万美元到数十万美元，太空旅游的成本正在快速下降。但这项服务何时才能真正普及？' }
    }
  },
  {
    id: 'sustainable-crypto',
    emoji: '🌱',
    readTime: 10,
    date: '2026-04-28',
    link: '/editorial/sustainable-crypto',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '永續加密貨幣：區塊鏈如何實現碳中和承諾？', category: '環境科技', excerpt: '比特幣挖礦被指責為碳排放大戶，但新的共識機制正在改變這一切。' },
      'en': { title: 'Sustainable Crypto: How Blockchain Can Achieve Carbon Neutrality', category: 'Green Tech', excerpt: 'Bitcoin mining is often blamed for emissions, but new consensus mechanisms are changing that.' },
      'zh-CN': { title: '永续加密货币：区块链如何实现碳中和承诺？', category: '环境科技', excerpt: '比特币挖矿被指责为碳排放大户，但新的共识机制正在改变这一切。' }
    }
  },
  {
    id: 'regenerative-ai',
    emoji: '⚖️',
    readTime: 10,
    date: '2026-04-26',
    link: '/editorial/regenerative-ai',
    featured: false,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '生成式AI的倫理邊界：我們如何確保AI發展符合人類價值觀？', category: 'AI倫理', excerpt: '當AI能夠生成足以欺騙人類的假新聞、假圖片和假視頻，社會需要建立新的規範框架。' },
      'en': { title: 'Ethical Boundaries of Generative AI: Ensuring AI Aligns with Human Values', category: 'AI Ethics', excerpt: 'As AI generates convincing fake news and media, society needs new regulatory frameworks.' },
      'zh-CN': { title: '生成式AI的伦理边界：我们如何确保AI发展符合人类价值观？', category: 'AI伦理', excerpt: '当AI能够生成足以欺骗人类的假新闻、假图片和假视频，社会需要建立新的规范框架。' }
    }
  },
  {
    id: 'tech-giants-ai',
    emoji: '🏆',
    readTime: 10,
    date: '2026-04-24',
    link: '/editorial/tech-giants-ai-race',
    featured: false,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '科技巨頭的AI競賽：Google、Microsoft、Meta誰能勝出？', category: '科技評論', excerpt: '人工智能領域的競爭日益激烈，科技巨頭們都在爭奪AI霸主地位。' },
      'en': { title: 'Tech Giants\' AI Race: Google, Microsoft vs Meta', category: 'Tech Opinion', excerpt: 'Competition in AI is heating up as tech giants battle for dominance in the next frontier.' },
      'zh-CN': { title: '科技巨头的AI竞赛：Google、Microsoft、Meta谁能胜出？', category: '科技评论', excerpt: '人工智能领域的竞争日益激烈，科技巨头们都在争夺AI霸主地位。' }
    }
  },
  {
    id: 'creator-economy',
    emoji: '✍️',
    readTime: 12,
    date: '2026-04-22',
    link: '/editorial/creator-economy-web3',
    featured: false,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '創作者經濟與Web3：去中心化的創作新時代', category: '區塊鏈', excerpt: '區塊鏈技術正在改變創作者與粉絲的關係，這場革命將重新定義創作的價值。' },
      'en': { title: 'Creator Economy and Web3: A New Era of Decentralized Content', category: 'Blockchain', excerpt: 'Blockchain is transforming creator-fan relationships and redefining creative value.' },
      'zh-CN': { title: '创作者经济与Web3：去中心化的创作新时代', category: '区块链', excerpt: '区块链技术正在改变创作者与粉丝的关系，这场革命将重新定义创作的价值。' }
    }
  },
  {
    id: 'neural-interface',
    emoji: '🧠',
    readTime: 11,
    date: '2026-04-20',
    link: '/editorial/neural-interface-future',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '神經接口的未來：人機融合的倫理與可能性', category: '前沿科技', excerpt: 'Neuralink等技術正在打開人機交互新篇章。當大腦可直接與電腦通信，倫理抉擇將至。' },
      'en': { title: 'Future of Neural Interfaces: Ethics and Possibilities of Human-Machine Fusion', category: 'Frontier Tech', excerpt: 'Tech like Neuralink is opening a new chapter in HCI. Ethical choices loom large.' },
      'zh-CN': { title: '神经接口的未来：人机融合的伦理与可能性', category: '前沿科技', excerpt: 'Neuralink等技术正在打开人机交互新篇章。当大脑可直接与电脑通信，伦理抉择将至。' }
    }
  },
  {
    id: 'web3-nft-winter',
    emoji: '🌐',
    readTime: 9,
    date: '2026-04-18',
    link: '/editorial/web3-nft-winter',
    featured: false,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'Web3 寒冬：NFT係咪已經玩完？', category: '區塊鏈', excerpt: '從2021年的瘋狂炒賣到現在一地眼鏡碎，NFT市場究竟發生了什麼？' },
      'en': { title: 'Web3 Winter: Is the NFT Hype Over?', category: 'Blockchain', excerpt: 'From the 2021 craze to today\'s market slump, what really happened to the NFT market?' },
      'zh-CN': { title: 'Web3 寒冬：NFT是不是已经玩完？', category: '区块链', excerpt: '从2021年的疯狂炒卖到现在一地眼镜碎，NFT市场究竟发生了什么？' }
    }
  },
  {
    id: 'ai-job-revolution',
    emoji: '🤖',
    readTime: 12,
    date: '2026-04-16',
    link: '/editorial/ai-job-revolution',
    featured: false,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'AI 搶工潮：這個時代我們如何自救？', category: '科技評論', excerpt: '當ChatGPT改變遊戲規則，打工仔、Freelancer要如何應對？' },
      'en': { title: 'AI Job Revolution: How to Future-Proof Your Career', category: 'Tech Opinion', excerpt: 'As ChatGPT redefines the workplace, how should employees and freelancers adapt?' },
      'zh-CN': { title: 'AI 抢工潮：这个时代我们如何自救？', category: '科技评论', excerpt: '当ChatGPT改变游戏规则，打工仔、Freelancer要如何应对？' }
    }
  },
  {
    id: 'ai-healthcare',
    emoji: '🏥',
    readTime: 10,
    date: '2026-04-14',
    link: '/editorial/ai-healthcare-revolution',
    featured: false,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: 'AI 醫療革命：演算法能比醫生更準確嗎？', category: '健康科技', excerpt: '從早期癌症檢測到藥物研發，AI正在重塑醫療行業。但隱私與責任歸屬仍是難題。' },
      'en': { title: 'AI Healthcare Revolution: Can Algorithms Be More Accurate Than Doctors?', category: 'HealthTech', excerpt: 'From early cancer detection to drug discovery, AI is reshaping medicine. But challenges remain.' },
      'zh-CN': { title: 'AI 医疗革命：算法能比医生更准确吗？', category: '健康科技', excerpt: '从早期癌症检测到药物研发，AI正在重塑医疗行业。但隐私与责任归属仍是难题。' }
    }
  },
  {
    id: 'ev-market',
    emoji: '🚗',
    readTime: 11,
    date: '2026-04-12',
    link: '/editorial/ev-market-analysis',
    featured: false,
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000',
    translations: {
      'zh-TW': { title: '電動車市場大洗牌：特斯拉、比亞迪與小米的世紀對決', category: '商業分析', excerpt: '隨著小米等科技巨頭入場，全球電動車市場正經歷一場前所未有的格局變動。' },
      'en': { title: 'EV Market Reshuffle: Tesla, BYD, and Xiaomi\'s Century Battle', category: 'Business', excerpt: 'With tech giants like Xiaomi entering the fray, the global EV market is facing a radical shift.' },
      'zh-CN': { title: '电动车市场大洗牌：特斯拉、比亚迪与小米的世纪对决', category: '商业分析', excerpt: '随着小米等科技巨头入场，全球电动车市场正经历一场前所未有的格局变动。' }
    }
  }
]

export default function EditorialPage() {
  const [lang, setLang] = useState<Lang>('zh-TW')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')

  const t = TRANSLATIONS[lang]

  const categories = useMemo(() => {
    const cats = new Set(EDITORIAL_ARTICLES.map(a => a.translations[lang].category))
    return Array.from(cats)
  }, [lang])

  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(article => {
      const trans = article.translations[lang]
      const matchesSearch = trans.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          trans.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === '全部' || trans.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory, lang])

  const featuredArticle = EDITORIAL_ARTICLES.find(a => a.featured)

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100 font-sans selection:bg-amber-500/30 pb-20">
      {/* Floating Language Selector */}
      <div className="fixed top-6 right-6 z-[100] flex items-center gap-2 p-1.5 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
        {(['zh-TW', 'en', 'zh-CN'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => { setLang(l); setActiveCategory('全部'); }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 ${lang === l ? 'bg-amber-500 text-black shadow-lg scale-105' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'en' ? 'EN' : '简体'}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/80 to-[#0a0a0b] z-10" />
          <img 
            src={featuredArticle?.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000'} 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Hero background"
          />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
            <Sparkles size={14} className="animate-pulse" />
            {t.original}
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white uppercase text-balance leading-none">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 italic px-2" : ""}>
                {word} 
              </span>
            ))}
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="relative w-full md:w-[28rem] group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-amber-500/50 focus:ring-8 focus:ring-amber-500/5 transition-all text-white placeholder-gray-600 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Index Classification Bar */}
        <div className="sticky top-0 z-40 mb-16 py-6 bg-[#0a0a0b]/90 backdrop-blur-xl border-y border-white/5 -mx-6 px-6">
          <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide pb-2">
            <div className="flex-shrink-0 flex items-center gap-2 pr-6 border-r border-white/10 text-gray-500">
              <Filter size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">{t.categories}</span>
            </div>
            <button 
              onClick={() => setActiveCategory('全部')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === '全部' ? 'bg-amber-500 text-black shadow-[0_10px_20_rgba(245,158,11,0.2)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {t.all}
            </button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat ? 'bg-amber-500 text-black shadow-[0_10px_20_rgba(245,158,11,0.2)] scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card */}
        {activeCategory === '全部' && searchQuery === '' && featuredArticle && (
          <div className="mb-24 group">
            <Link href={featuredArticle.link}>
              <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-amber-500/40">
                <img src={featuredArticle.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={featuredArticle.translations[lang].title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                  <div className="flex flex-wrap items-center gap-4 text-amber-500 text-[10px] md:text-xs font-black mb-6">
                    <span className="px-4 py-1.5 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-500/20 tracking-[0.2em] uppercase">{t.featured}</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 uppercase tracking-widest"><Clock size={14} /> {featuredArticle.readTime} {t.readTime}</span>
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 uppercase tracking-widest"><Calendar size={14} /> {featuredArticle.date}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 max-w-4xl leading-[1.1] tracking-tighter group-hover:text-amber-400 transition-colors text-balance">
                    {featuredArticle.translations[lang].title}
                  </h2>
                  <p className="text-gray-400 md:text-xl max-w-2xl line-clamp-2 mb-8 font-light leading-relaxed">
                    {featuredArticle.translations[lang].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-white text-lg font-black group-hover:gap-5 transition-all">
                    {t.readFull} <ArrowRight size={24} className="text-amber-500" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              const trans = article.translations[lang]
              return (
                <article key={article.id} className="group relative flex flex-col h-full bg-[#111112] rounded-[2rem] overflow-hidden border border-white/5 hover:border-amber-500/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)] hover:-translate-y-3">
                  <Link href={article.link} className="block aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={article.image || `https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800`} 
                      alt={trans.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-1.5 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 text-white text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                        <Tag size={12} className="text-amber-500" />
                        {trans.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111112] to-transparent opacity-60" />
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} {lang === 'en' ? 'MIN' : '分鐘'}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-5 leading-tight group-hover:text-amber-400 transition-colors line-clamp-2">
                      {trans.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-8 line-clamp-3 font-light">
                      {trans.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link href={article.link} className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                        {t.readMore} <ChevronRight size={18} className="text-amber-500" />
                      </Link>
                      <span className="text-3xl filter grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">{article.emoji}</span>
                    </div>
                  </div>
                </article>
              )
            })
          ) : (
            <div className="col-span-full py-32 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 mb-8 border border-white/5">
                <BookOpen size={48} className="text-gray-700" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">{t.noFound}</h3>
              <p className="text-gray-500 text-lg font-light">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveCategory('全部'); setSearchQuery(''); }}
                className="mt-10 px-8 py-3 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors"
              >
                {t.clear}
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-40 relative rounded-[3rem] overflow-hidden p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 animate-gradient-x" />
          <div className="relative bg-[#0a0a0b] rounded-[2.9rem] p-12 md:p-20 text-center border border-white/5">
            <Sparkles size={48} className="text-amber-500 mx-auto mb-10 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              {t.ready.split(' ').map((word, i) => (
                <span key={i} className={word.toLowerCase() === 'deep' || word === '深入' ? "text-amber-500 italic px-2" : ""}>
                  {word} 
                </span>
              ))}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              {t.ctaDesc}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/" className="px-12 py-5 rounded-2xl bg-amber-500 text-black font-black uppercase tracking-widest text-sm hover:bg-amber-400 transition-all transform hover:scale-105 shadow-[0_20px_40px_rgba(245,158,11,0.3)]">
                {t.backHome}
              </Link>
              <button className="px-12 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
