'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin, Globe, Compass, Plane, Mountain, Sun,
  Camera, Utensils, Palmtree, Building, Castle, TreePine,
  ArrowRight, Clock, Heart, Share2, Mail, Menu, X,
  Search, ChevronRight, Star, Map, Ticket, PlaneTakeoff
} from "lucide-react";

// 旅游目的地数据
const destinations = {
  asia: {
    name: "亞洲",
    emoji: "🌏",
    color: "from-red-500 to-orange-500",
    countries: [
      { name: "日本", slug: "japan", flag: "🇯🇵", highlights: ["東京", "大阪", "京都", "北海道"] },
      { name: "韓國", slug: "korea", flag: "🇰🇷", highlights: ["首爾", "釜山", "濟州島"] },
      { name: "台灣", slug: "taiwan", flag: "🇹🇼", highlights: ["台北", "高雄", "花蓮"] },
      { name: "泰國", slug: "thailand", flag: "🇹🇭", highlights: ["曼谷", "清邁", "普吉島"] },
    ]
  },
  europe: {
    name: "歐洲",
    emoji: "🏰",
    color: "from-blue-500 to-purple-500",
    countries: [
      { name: "法國", slug: "france", flag: "🇫🇷", highlights: ["巴黎", "里昂", "馬賽"] },
      { name: "英國", slug: "uk", flag: "🇬🇧", highlights: ["倫敦", "愛丁堡", "曼徹斯特"] },
      { name: "意大利", slug: "italy", flag: "🇮🇹", highlights: ["羅馬", "佛羅倫斯", "威尼斯"] },
      { name: "西班牙", slug: "spain", flag: "🇪🇸", highlights: ["巴塞羅那", "馬德里", "塞維利亞"] },
      { name: "德國", slug: "germany", flag: "🇩🇪", highlights: ["慕尼黑", "柏林", "法蘭克福"] },
      { name: "瑞士", slug: "switzerland", flag: "🇨🇭", highlights: ["蘇黎世", "日內瓦", "少女峰"] },
      { name: "奧地利", slug: "austria", flag: "🇦🇹", highlights: ["維也納", "薩爾茨堡", "茵斯布魯克"] },
      { name: "捷克", slug: "czech", flag: "🇨🇿", highlights: ["布拉格", "克魯姆洛夫"] },
    ]
  },
  greaterBay: {
    name: "大灣區",
    emoji: "🌆",
    color: "from-green-500 to-teal-500",
    countries: [
      { name: "香港", slug: "hongkong", flag: "🇭🇰", highlights: ["港島", "九龍", "新界"] },
      { name: "澳門", slug: "macau", flag: "🇲🇴", highlights: ["澳門半島", "路氹", "氹仔"] },
      { name: "深圳", slug: "shenzhen", flag: "🇨🇳", highlights: ["市區", "周邊"] },
      { name: "廣州", slug: "guangzhou", flag: "🇨🇳", highlights: ["市區", "周邊"] },
      { name: "珠海", slug: "zhuhai", flag: "🇨🇳", highlights: ["市區", "長隆"] },
    ]
  }
};

// 精选文章数据
const featuredArticles = [
  {
    id: "1",
    title: "京都嵐山：竹林深處的禪意時光",
    excerpt: "穿過翠綠竹林，漫步渡月橋畔，體驗京都最詩意的自然風光。包含完整的一日遊路線與附近溫泉旅館推薦。",
    destination: "日本京都",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    slug: "arashiyama",
    readTime: "8 分鐘",
    category: "亞洲"
  },
  {
    id: "2",
    title: "巴黎聖家堂：高迪的永恆樂章",
    excerpt: "深入探索巴塞羅那這座仍在建造中的世界文化遺產，從建築美學到購票攻略，完整解讀這座上帝的教堂。",
    destination: "西班牙巴塞羅那",
    image: "https://images.unsplash.com/photo-1583779457168-ad7e2544a133?w=800&q=80",
    slug: "sagrada-familia",
    readTime: "12 分鐘",
    category: "歐洲"
  },
  {
    id: "3",
    title: "羅馬鬥獸場：千年競技場的歷史迴響",
    excerpt: "從凱旋門到真理之口，追隨古羅馬的腳步，探索這座永恆之城的必遊景點與美食攻略。",
    destination: "意大利羅馬",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    slug: "colosseum",
    readTime: "10 分鐘",
    category: "歐洲"
  },
  {
    id: "4",
    title: "倫敦大笨鐘：英倫優雅的心跳",
    excerpt: "走進國會大廈，登上大笨鐘頂層，從威斯敏斯特到泰晤士河畔，完整攻略倫敦最經典的地標。",
    destination: "英國倫敦",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80",
    slug: "big-ben",
    readTime: "9 分鐘",
    category: "歐洲"
  },
  {
    id: "5",
    title: "香港三日遊：維港風情的經典之旅",
    excerpt: "從山頂纜車到南丫島風情，結合本地人推薦的美食與隱藏景點，帶你發現不一樣的香港。",
    destination: "香港",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    slug: "gba-hongkong-3days",
    readTime: "7 分鐘",
    category: "大灣區"
  },
  {
    id: "6",
    title: "澳門兩日遊：葡韻風情的魅力小城",
    excerpt: "大三巴牌坊、葡撻美食、赌场体验，結合歷史文化與現代娛樂的澳門精華攻略。",
    destination: "澳門",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    slug: "gba-macau-2days",
    readTime: "6 分鐘",
    category: "大灣區"
  },
  {
    id: "7",
    title: "大阪道頓堀：美食地獄的終極攻略",
    excerpt: "章魚燒、串炸、拉麵，從道頓堀到心齋橋，徹底探索大阪的美食宇宙。",
    destination: "日本大阪",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80",
    slug: "dotonbori",
    readTime: "8 分鐘",
    category: "亞洲"
  },
  {
    id: "8",
    title: "布拉格城堡：走進童話般的千塔之城",
    excerpt: "漫步查理大橋，俯瞰整座城市，探索這個歐洲最美麗的首都之一。",
    destination: "捷克布拉格",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    slug: "prague-castle",
    readTime: "11 分鐘",
    category: "歐洲"
  },
];

// 旅游工具数据
const travelTools = [
  {
    id: "visa",
    name: "簽證查詢",
    icon: "🛂",
    description: "各國簽證要求一網打盡",
    color: "bg-blue-500"
  },
  {
    id: "currency",
    name: "貨幣換算",
    icon: "💱",
    description: "即時匯率快速換算",
    color: "bg-green-500"
  },
  {
    id: "weather",
    name: "天氣查詢",
    icon: "🌤️",
    description: "目的地天氣預報",
    color: "bg-yellow-500"
  },
  {
    id: "budget",
    name: "預算計算",
    icon: "💰",
    description: "旅行預算輕鬆規劃",
    color: "bg-purple-500"
  },
  {
    id: "itinerary",
    name: "行程規劃",
    icon: "📅",
    description: "智能行程建議",
    color: "bg-pink-500"
  },
  {
    id: "packing",
    name: "行李清單",
    icon: "🧳",
    description: "出發前必備檢查",
    color: "bg-orange-500"
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<keyof typeof destinations>("asia");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                旅遊王國
              </span>
            </Link>

            {/* 桌面导航 */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                遊記攻略
              </Link>
              <Link href="/destinations" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                目的地
              </Link>
              <Link href="/tools" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                旅行工具
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                關於我們
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4">
            <div className="px-4 space-y-3">
              <Link href="/blog" className="block py-2 text-slate-600 font-medium">遊記攻略</Link>
              <Link href="/destinations" className="block py-2 text-slate-600 font-medium">目的地</Link>
              <Link href="/tools" className="block py-2 text-slate-600 font-medium">旅行工具</Link>
              <Link href="/about" className="block py-2 text-slate-600 font-medium">關於我們</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            探索世界，記錄旅程
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            純粹旅人的原創深度遊記，帶你走遍全球每一個值得駐足的角落
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              開始閱讀遊記
            </Link>
            <Link
              href="/destinations"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-full transition-all border border-white/30"
            >
              探索目的地
            </Link>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white/70 rotate-90" />
        </div>
      </section>

      {/* 目的地分类 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              按目的地探索
            </h2>
            <p className="text-slate-600 text-lg">
              選擇你想前往的地區，發現精彩遊記
            </p>
          </div>

          {/* 地区切换标签 */}
          <div className="flex justify-center gap-4 mb-10">
            {Object.entries(destinations).map(([key, region]) => (
              <button
                key={key}
                onClick={() => setActiveRegion(key as keyof typeof destinations)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeRegion === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="mr-2">{region.emoji}</span>
                {region.name}
              </button>
            ))}
          </div>

          {/* 国家卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations[activeRegion].countries.map((country) => (
              <Link
                key={country.slug}
                href={`/destinations/${country.slug}`}
                className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {country.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {country.highlights.map((city) => (
                    <span
                      key={city}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                精選遊記
              </h2>
              <p className="text-slate-600">
                最受讀者喜愛的原創深度遊記
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              查看全部 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-slate-500 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {article.destination}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-full"
            >
              查看全部遊記 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 旅游工具 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              旅行工具箱
            </h2>
            <p className="text-white/80 text-lg">
              實用工具讓你的旅行更輕鬆
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {travelTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold mb-1">{tool.name}</h3>
                <p className="text-sm text-white/70">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 关于博主 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-5xl">✈️</span>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  關於純粹旅人
                </h2>
                <p className="text-white/80 mb-4 leading-relaxed">
                  你好！我係純粹旅人，一個熱愛探索世界的旅行者。呢個網站記錄咗我過去十年嘅旅程，
                  從日本嘅古鎮小巷到歐洲嘅宏偉建築，每一篇遊記都係我嘅親身經歷同深刻感悟。
                </p>
                <p className="text-white/80 mb-6 leading-relaxed">
                  我希望透過分享，將旅行嘅快樂同大家連結，一齊探索呢個美麗嘅世界！
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  了解更多關於我 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 订阅通讯 */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6 text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            訂閱最新遊記
          </h2>
          <p className="text-slate-600 mb-8">
            每週精選遊記直送到你郵箱，唔好錯過任何精彩內容！
          </p>

          {subscribed ? (
            <div className="bg-green-100 text-green-700 px-6 py-4 rounded-xl">
              <span className="text-xl mr-2">✅</span>
              感謝訂閱！我哋會盡快發送最新遊記俾你！
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="輸入你嘅電郵地址"
                required
                className="flex-1 px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
              >
                訂閱
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">旅遊王國</span>
              </div>
              <p className="text-slate-400 text-sm">
                純粹旅人原創深度遊記，帶你探索世界每一個角落。
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">遊記分類</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/blog?region=asia" className="hover:text-white">亞洲遊記</Link></li>
                <li><Link href="/blog?region=europe" className="hover:text-white">歐洲遊記</Link></li>
                <li><Link href="/blog?region=bay" className="hover:text-white">大灣區遊記</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">實用工具</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/tools/visa" className="hover:text-white">簽證查詢</Link></li>
                <li><Link href="/tools/currency" className="hover:text-white">貨幣換算</Link></li>
                <li><Link href="/tools/itinerary" className="hover:text-white">行程規劃</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">關於</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/about" className="hover:text-white">關於博主</Link></li>
                <li><Link href="/contact" className="hover:text-white">聯繫我們</Link></li>
                <li><Link href="/privacy" className="hover:text-white">隱私政策</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 旅遊王國 · 純粹旅人 · All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
