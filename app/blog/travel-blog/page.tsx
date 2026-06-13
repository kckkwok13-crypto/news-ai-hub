'use client'

import Link from 'next/link'
import { MapPin, Camera, Utensils, Building2, Clock, Globe, Home, Map, User, Award, BookOpen, Heart, Star, Send, Instagram, Youtube } from 'lucide-react'

// 博主資料
const bloggerProfile = {
  name: '純粹旅人',
  title: '旅行博主 · 深度遊記作者',
  avatar: '🌍',
  avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
  coverBg: 'from-orange-600 via-red-600 to-blue-600',
  bio: '熱愛探索世界的旅行攝影師，足跡遍佈 30+ 個國家。用文字記錄旅程，用鏡頭捕捉感動，每篇遊記都係實地考察後嘅第一手分享。',
  motto: '「旅行唔係走馬觀花，而係用心感受每個城市嘅溫度。」',
  stats: {
    countries: 32,
    posts: 33,
    cities: 128,
    years: 8,
  },
  expertise: [
    { icon: '📸', title: '旅行攝影', desc: '專業風景同人文攝影技巧分享' },
    { icon: '🍜', title: '美食探索', desc: '當地人都幫襯嘅隱世美食' },
    { icon: '🏯', title: '文化深度', desc: '歷史古蹟背後嘅故事' },
    { icon: '🚶', title: '路線規劃', desc: '最佳時間同路線建議' },
  ],
  badges: ['原創遊記', '深度攻略', '實地考察', '良心推薦'],
  social: [
    { platform: 'Email', icon: Send, handle: 'hello@newskingdom.store' },
  ],
}

// 地方遊記 - 日本 + 大灣區 (橙紅色系)
const localTravel = {
  title: '🏡 地方遊記',
  subtitle: '日本深度遊 · 粵港澳大灣區',
  color: 'orange',
  groups: [
    { name: '🗾 日本深度遊', subTitle: '東京、大阪、京都：傳統與現代的完美融合', count: 6, places: [
      { name: '澀谷十字路口', slug: 'shibuya-crossing', desc: '世界最繁忙嘅十字路口', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400', duration: '1-2小時' },
      { name: '明治神宮', slug: 'meiji-shrine', desc: '東京市中心嘅森林神社', image: 'https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg', duration: '1-2小時' },
      { name: '淺草寺', slug: 'sensoji', desc: '東京最古老嘅佛教寺廟', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400', duration: '2-3小時' },
      { name: '道頓堀', slug: 'dotonbori', desc: '大阪美食天堂', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400', duration: '3-4小時' },
      { name: '嵐山', slug: 'arashiyama', desc: '竹林與渡月橋嘅詩意風光', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400', duration: '半日遊' },
      { name: '關西之旅', slug: 'kansai-trip', desc: '大阪、京都、奈良深度攻略', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400', duration: '3-5日遊' },
    ]},
    { name: '🌏 粵港澳大灣區', subTitle: '香港、澳門、深圳、廣州：大灣區一小時生活圈', count: 9, places: [
      { name: '香港3日遊', slug: 'gba-hongkong-3days', desc: '都市繁華與自然風光', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400', duration: '3日遊' },
      { name: '澳門2日遊', slug: 'gba-macau-2days', desc: '葡國風情與美食天堂', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', duration: '2日遊' },
      { name: '珠海3日遊', slug: 'gba-zhuhai-3days', desc: '長隆海洋王國與海島風光', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '3日遊' },
      { name: '深圳攻略', slug: 'gba-shenzhen', desc: '科技之城與主題樂園', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400', duration: '2-3日遊' },
      { name: '廣州攻略', slug: 'gba-guangzhou', desc: '嶺南文化與美食之都', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', duration: '2-3日遊' },
      { name: '東莞2日遊', slug: 'gba-dongguan-2days', desc: '製造業之城嘅另一面', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '2日遊' },
      { name: '佛山2日遊', slug: 'gba-foshan-2days', desc: '武術之鄉與嶺南水鄉', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', duration: '2日遊' },
      { name: '虎門2日遊', slug: 'gba-humen-2days', desc: '歷史古蹟與海岸風光', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '2日遊' },
      { name: '珠海長隆3日遊', slug: 'gba-chimelong-3days', desc: '海洋王國與野生動物世界', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '3日遊' },
    ]},
  ]
}

// 世界任我行 - 歐洲 (藍紫色系)
const worldTravel = {
  title: '🌍 世界任我行',
  subtitle: '歐洲經典遊',
  color: 'blue',
  groups: [
    { name: '🏰 歐洲經典遊', subTitle: '倫敦、羅馬、巴黎：感受歷史與浪漫', count: 18, places: [
      { name: '大笨鐘', slug: 'big-ben', desc: '倫敦標誌性鐘樓', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '倫敦塔橋', slug: 'tower-bridge', desc: '維多利亞時期哥德式橋樑', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80', duration: '1-2小時' },
      { name: '倫敦眼', slug: 'london-eye', desc: '俯瞰倫敦全景', image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '羅馬鬥獸場', slug: 'colosseum', desc: '古羅馬建築代表作', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
      { name: '特萊維噴泉', slug: 'trevi', desc: '羅馬最靚嘅巴洛克噴泉', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '西斯汀小堂', slug: 'sistine-chapel', desc: '米開朗基羅壁畫嘅所在地', image: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?auto=format&fit=crop&w=400&q=80', duration: '1-2小時' },
      { name: '聖伯多祿大殿', slug: 'st-peters-basilica', desc: '世界上最大嘅教堂', image: 'https://images.unsplash.com/photo-1548585744-3e3c7f4f0f79?auto=format&fit=crop&w=400&q=80', duration: '1-2小時' },
      { name: '佛羅倫斯大教堂', slug: 'florence-cathedral', desc: '以紅磚圓頂聞名', image: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?auto=format&fit=crop&w=400&q=80', duration: '1-2小時' },
      { name: '老橋', slug: 'ponte-vecchio', desc: '中世紀石橋，達芬奇都讚過', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '聖馬可廣場', slug: 'st-marks-square', desc: '歐洲最美廣場', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=400&q=80', duration: '1-2小時' },
      { name: '里奧托橋', slug: 'rialto-bridge', desc: '威尼斯最古老嘅橋', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '愛丁堡城堡', slug: 'edinburgh-castle', desc: '火山岩上嘅古老城堡', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
      { name: '布蘭登堡門', slug: 'brandenburg-gate', desc: '柏林標誌性建築', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=400&q=80', duration: '30分鐘' },
      { name: '瑪利亞廣場', slug: 'marienplatz-munich', desc: '慕尼黑市中心廣場', image: 'https://images.unsplash.com/photo-1590561622217-9c6c5a7e32aa?auto=format&fit=crop&w=400&q=80', duration: '1小時' },
      { name: '英國花園', slug: 'english-garden-munich', desc: '世界上最大城市公園之一', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
      { name: '聖家堂', slug: 'sagrada-familia', desc: '高迪未完成嘅遺作', image: 'https://images.unsplash.com/photo-1583779457264-4c1ec95d662c?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
      { name: '古埃爾公園', slug: 'park-guell', desc: '高迪設計嘅彩色童話公園', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
      { name: '馬德里皇宮', slug: 'royal-palace-madrid', desc: '歐洲最大皇宮之一', image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?auto=format&fit=crop&w=400&q=80', duration: '2-3小時' },
    ]},
  ]
}

// 顏色配置
const colorConfig = {
  orange: {
    cardBorder: 'hover:border-orange-500/70',
    cardAccent: 'group-hover:from-orange-500 group-hover:to-red-500',
    badgeBg: 'bg-orange-500/80',
    iconBg: 'from-orange-500 to-red-600',
    iconShadow: 'shadow-orange-500/30',
    textAccent: 'text-orange-400',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30',
  },
  blue: {
    cardBorder: 'hover:border-blue-500/70',
    cardAccent: 'group-hover:from-blue-500 group-hover:to-indigo-500',
    badgeBg: 'bg-blue-500/80',
    iconBg: 'from-blue-500 to-indigo-600',
    iconShadow: 'shadow-blue-500/30',
    textAccent: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
  },
}

export default function TravelBlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* ========== Hero Section with Blogger Profile ========== */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-950"></div>

        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16">
          {/* Blogger Profile Card */}
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-gray-700/50">
                    <img
                      src={bloggerProfile.avatarImage}
                      alt={bloggerProfile.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${bloggerProfile.coverBg} flex items-center justify-center text-6xl">${bloggerProfile.avatar}</div>`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-4 justify-center lg:justify-start">
                  {bloggerProfile.badges.map((badge) => (
                    <span key={badge} className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs border border-gray-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">{bloggerProfile.name}</h1>
                    <p className="text-gray-400">{bloggerProfile.title}</p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex gap-6 lg:ml-auto justify-center lg:justify-end">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{bloggerProfile.stats.countries}</div>
                      <div className="text-xs text-gray-500">國家</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{bloggerProfile.stats.posts}</div>
                      <div className="text-xs text-gray-500">遊記</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{bloggerProfile.stats.cities}</div>
                      <div className="text-xs text-gray-500">城市</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{bloggerProfile.stats.years}+</div>
                      <div className="text-xs text-gray-500">年經驗</div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {bloggerProfile.bio}
                </p>

                {/* Motto */}
                <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-xl p-4 mb-6 border border-orange-500/20">
                  <p className="text-gray-300 italic">"{bloggerProfile.motto}"</p>
                </div>

                {/* Expertise */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {bloggerProfile.expertise.map((item) => (
                    <div key={item.title} className="bg-gray-800/50 rounded-xl p-3 text-center border border-gray-700/50">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Blog Content ========== */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* ========== 地方遊記 ========== */}
        <section>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorConfig.orange.iconBg} flex items-center justify-center shadow-lg ${colorConfig.orange.iconShadow}`}>
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{localTravel.title}</h2>
              <p className="text-gray-400 text-sm">{localTravel.subtitle}</p>
            </div>
            <div className="ml-auto px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-medium">
              15 篇遊記
            </div>
          </div>

          {/* 日本深度遊 (獨立外框) */}
          <div className="mb-8">
            <div className="rounded-2xl bg-gray-800/60 border border-gray-700/50 p-6 shadow-xl shadow-black/30">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorConfig.orange.iconBg} flex items-center justify-center shadow-md ${colorConfig.orange.iconShadow}`}>
                  <Map className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">🗾 日本深度遊</h3>
                <span className={`px-3 py-1 rounded-full ${colorConfig.orange.badgeBg} text-white text-xs font-medium`}>
                  6 篇
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-5 -mt-1">東京、大阪、京都：傳統與現代的完美融合</p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {localTravel.groups[0].places.map((place) => (
                  <Link
                    key={place.slug}
                    href={`/blog/${place.slug}`}
                    className={`group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 ${colorConfig.orange.cardBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10`}
                  >
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${colorConfig.orange.badgeBg} backdrop-blur-sm text-xs flex items-center gap-1 text-white`}>
                        <Clock className="w-3 h-3" />
                        {place.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-orange-400 transition-colors">
                        {place.name}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {place.desc}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorConfig.orange.cardAccent} w-0 group-hover:w-full transition-all duration-300`}></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 粵港澳大灣區 (獨立外框) */}
          <div className="mb-8 last:mb-0">
            <div className="rounded-2xl bg-gray-800/60 border border-gray-700/50 p-6 shadow-xl shadow-black/30">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorConfig.orange.iconBg} flex items-center justify-center shadow-md ${colorConfig.orange.iconShadow}`}>
                  <Map className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">🌏 粵港澳大灣區</h3>
                <span className={`px-3 py-1 rounded-full ${colorConfig.orange.badgeBg} text-white text-xs font-medium`}>
                  9 篇
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-5 -mt-1">香港、澳門、深圳、廣州：大灣區一小時生活圈</p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {localTravel.groups[1].places.map((place) => (
                  <Link
                    key={place.slug}
                    href={`/blog/${place.slug}`}
                    className={`group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 ${colorConfig.orange.cardBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10`}
                  >
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${colorConfig.orange.badgeBg} backdrop-blur-sm text-xs flex items-center gap-1 text-white`}>
                        <Clock className="w-3 h-3" />
                        {place.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-orange-400 transition-colors">
                        {place.name}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {place.desc}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorConfig.orange.cardAccent} w-0 group-hover:w-full transition-all duration-300`}></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== 世界任我行 ========== */}
        <section>
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${colorConfig.blue.iconBg} flex items-center justify-center shadow-lg ${colorConfig.blue.iconShadow}`}>
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{worldTravel.title}</h2>
              <p className="text-gray-400 text-sm">{worldTravel.subtitle}</p>
            </div>
            <div className="ml-auto px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-medium">
              18 篇遊記
            </div>
          </div>

          {/* 歐洲經典遊 (獨立外框) */}
          <div>
            <div className="rounded-2xl bg-gray-800/60 border border-gray-700/50 p-6 shadow-xl shadow-black/30">
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorConfig.blue.iconBg} flex items-center justify-center shadow-md ${colorConfig.blue.iconShadow}`}>
                  <Map className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">🏰 歐洲經典遊</h3>
                <span className={`px-3 py-1 rounded-full ${colorConfig.blue.badgeBg} text-white text-xs font-medium`}>
                  18 篇
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-5 -mt-1">倫敦、羅馬、巴黎：感受歷史與浪漫</p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {worldTravel.groups[0].places.map((place) => (
                  <Link
                    key={place.slug}
                    href={`/blog/${place.slug}`}
                    className={`group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 ${colorConfig.blue.cardBorder} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10`}
                  >
                    {/* Image */}
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      <div className={`absolute top-2 right-2 px-2 py-1 rounded-full ${colorConfig.blue.badgeBg} backdrop-blur-sm text-xs flex items-center gap-1 text-white`}>
                        <Clock className="w-3 h-3" />
                        {place.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">
                        {place.name}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {place.desc}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorConfig.blue.cardAccent} w-0 group-hover:w-full transition-all duration-300`}></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== 博主優勢 ========== */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">點解選擇我哋嘅遊記？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 hover:border-orange-500/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/30">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">📸 專業拍攝</h3>
              <p className="text-gray-400 text-sm">每個景點都有專業拍攝技巧同最佳時間建議，用心捕捉每個精彩瞬間</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-500/30 hover:border-blue-500/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">📚 深度攻略</h3>
              <p className="text-gray-400 text-sm">唔係走馬觀花，而係深入探索每個地方嘅歷史、文化同埋人情味</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 hover:border-green-500/50 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">❤️ 良心推薦</h3>
              <p className="text-gray-400 text-sm">當地人都幫襯嘅餐廳、性價比最高嘅酒店，唔會呃你</p>
            </div>
          </div>
        </section>

        {/* ========== 聯絡博主 ========== */}
        <section className="py-8">
          <div className="bg-gradient-to-r from-orange-900/40 via-gray-900/80 to-blue-900/40 rounded-3xl p-8 border border-gray-700/50">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">與博主互動</h2>
              <p className="text-gray-400">如果你有任何問題，或者想了解更多旅遊資訊，歡迎聯絡我哋</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {bloggerProfile.social.map((item) => (
                <a
                  key={item.platform}
                  href={item.platform === 'Email' ? `mailto:${item.handle}` : item.handle}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500/50 transition-all text-white"
                >
                  <item.icon className="w-5 h-5 text-orange-400" />
                  <span>{item.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
