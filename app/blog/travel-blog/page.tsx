import Link from 'next/link'
import { MapPin, Camera, Utensils, Building2, Mountain, Landmark, Star, Clock, Users } from 'lucide-react'

export const metadata = {
  title: '旅行博客 - NewsKingdom',
  description: '探索世界各地的旅行故事、景點推薦和旅遊攻略',
}

const categories = [
  {
    id: 'japan',
    name: '日本深度遊',
    emoji: '🗾',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    description: '東京、大阪、京都：傳統與現代的完美融合',
    stats: '6 篇遊記',
    places: [
      { name: '澀谷十字路口', slug: 'shibuya-crossing', desc: '世界最繁忙嘅十字路口', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400', duration: '1-2小時' },
      { name: '明治神宮', slug: 'meiji-shrine', desc: '東京市中心嘅森林神社', image: 'https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg', duration: '1-2小時' },
      { name: '淺草寺', slug: 'sensoji', desc: '東京最古老嘅佛教寺廟', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400', duration: '2-3小時' },
      { name: '道頓堀', slug: 'dotonbori', desc: '大阪美食天堂', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400', duration: '3-4小時' },
      { name: '嵐山', slug: 'arashiyama', desc: '竹林與渡月橋嘅詩意風光', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400', duration: '半日遊' },
      { name: '關西之旅', slug: 'kansai-trip', desc: '大阪、京都、奈良深度攻略', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400', duration: '3-5日遊' },
    ]
  },
  {
    id: 'europe',
    name: '歐洲經典遊',
    emoji: '🏰',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: '倫敦、羅馬、巴黎：感受歷史與浪漫',
    stats: '18 篇遊記',
    places: [
      { name: '大笨鐘', slug: 'big-ben', desc: '倫敦標誌性鐘樓', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=400', duration: '30分鐘' },
      { name: '倫敦塔橋', slug: 'tower-bridge', desc: '維多利亞時期哥德式橋樑', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400', duration: '1-2小時' },
      { name: '倫敦眼', slug: 'london-eye', desc: '俯瞰倫敦全景', image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400', duration: '30分鐘' },
      { name: '羅馬鬥獸場', slug: 'colosseum', desc: '古羅馬建築代表作', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400', duration: '2-3小時' },
      { name: '特萊維噴泉', slug: 'trevi', desc: '羅馬最靚嘅巴洛克噴泉', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=400', duration: '30分鐘' },
      { name: '西斯汀小堂', slug: 'sistine-chapel', desc: '米開朗基羅壁畫嘅所在地', image: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=400', duration: '1-2小時' },
      { name: '聖伯多祿大殿', slug: 'st-peters-basilica', desc: '世界上最大嘅教堂', image: 'https://images.unsplash.com/photo-1548585744-3e3c7f4f0f79?w=400', duration: '1-2小時' },
      { name: '佛羅倫斯大教堂', slug: 'florence-cathedral', desc: '以紅磚圓頂聞名', image: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=400', duration: '1-2小時' },
      { name: '老橋', slug: 'ponte-vecchio', desc: '中世紀石橋，達芬奇都讚過', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400', duration: '30分鐘' },
      { name: '聖馬可廣場', slug: 'st-marks-square', desc: '歐洲最美廣場', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400', duration: '1-2小時' },
      { name: '里奧托橋', slug: 'rialto-bridge', desc: '威尼斯最古老嘅橋', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=400', duration: '30分鐘' },
      { name: '愛丁堡城堡', slug: 'edinburgh-castle', desc: '火山岩上嘅古老城堡', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400', duration: '2-3小時' },
      { name: '布蘭登堡門', slug: 'brandenburg-gate', desc: '柏林標誌性建築', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400', duration: '30分鐘' },
      { name: '瑪利亞廣場', slug: 'marienplatz-munich', desc: '慕尼黑市中心廣場', image: 'https://images.unsplash.com/photo-1590561622217-9c6c5a7e32aa?w=400', duration: '1小時' },
      { name: '英國花園', slug: 'english-garden-munich', desc: '世界上最大城市公園之一', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400', duration: '2-3小時' },
      { name: '聖家堂', slug: 'sagrada-familia', desc: '高迪未完成嘅遺作', image: 'https://images.unsplash.com/photo-1583779457264-4c1ec95d662c?w=400', duration: '2-3小時' },
      { name: '古埃爾公園', slug: 'park-guell', desc: '高迪設計嘅彩色童話公園', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400', duration: '2-3小時' },
      { name: '馬德里皇宮', slug: 'royal-palace-madrid', desc: '歐洲最大皇宮之一', image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=400', duration: '2-3小時' },
    ]
  },
  {
    id: 'gba',
    name: '粵港澳大灣區',
    emoji: '🌏',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    description: '香港、澳門、深圳、廣州：大灣區一小時生活圈',
    stats: '9 篇遊記',
    places: [
      { name: '香港3日遊', slug: 'gba-hongkong-3days', desc: '都市繁華與自然風光', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400', duration: '3日遊' },
      { name: '澳門2日遊', slug: 'gba-macau-2days', desc: '葡國風情與美食天堂', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', duration: '2日遊' },
      { name: '珠海3日遊', slug: 'gba-zhuhai-3days', desc: '長隆海洋王國與海島風光', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '3日遊' },
      { name: '深圳攻略', slug: 'gba-shenzhen', desc: '科技之城與主題樂園', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400', duration: '2-3日遊' },
      { name: '廣州攻略', slug: 'gba-guangzhou', desc: '嶺南文化與美食之都', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', duration: '2-3日遊' },
      { name: '東莞2日遊', slug: 'gba-dongguan-2days', desc: '製造業之城嘅另一面', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '2日遊' },
      { name: '佛山2日遊', slug: 'gba-foshan-2days', desc: '武術之鄉與嶺南水鄉', image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400', duration: '2日遊' },
      { name: '虎門2日遊', slug: 'gba-humen-2days', desc: '歷史古蹟與海岸風光', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '2日遊' },
      { name: '珠海長隆3日遊', slug: 'gba-chimelong-3days', desc: '海洋王國與野生動物世界', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', duration: '3日遊' },
    ]
  }
]

export default function TravelBlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Travel Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ✈️ 旅行博客
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              探索世界各地的旅行故事、景點推薦和實用攻略<br />
              <span className="text-blue-400">33 篇深度遊記</span>，帶你體驗不一樣的旅程
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {categories.map((category) => (
          <section key={category.id} className="relative">
            {/* Category Header */}
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${category.bgColor} ${category.borderColor} border mb-6`}>
              <span className="text-2xl">{category.emoji}</span>
              <span className="font-bold text-lg">{category.name}</span>
              <span className="text-gray-400 text-sm">({category.stats})</span>
            </div>

            {/* Category Description */}
            <p className="text-gray-400 mb-8 -mt-2 ml-2">{category.description}</p>

            {/* Grid of Places */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.places.map((place) => (
                <Link
                  key={place.slug}
                  href={`/blog/${place.slug}`}
                  className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {place.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                      {place.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {place.desc}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                      <span>閱讀遊記</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-300`}></div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Coming Soon Section */}
        <section className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-950 text-gray-500 text-sm">更多目的地即將推出</span>
          </div>
        </section>

        {/* Features Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
            <Camera className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">拍攝攻略</h3>
            <p className="text-gray-400 text-sm">每個景點都有專業拍攝技巧同最佳時間建議</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
            <Utensils className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">美食推薦</h3>
            <p className="text-gray-400 text-sm">當地人帶路，唔使做遊客被劏</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800">
            <Building2 className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">交通指南</h3>
            <p className="text-gray-400 text-sm">詳細交通指引，唔使擔心迷路</p>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
              🌍
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold mb-2">關於作者</h3>
              <p className="text-gray-300 mb-3">
                呢啲遊記全部由 NewsKingdom 編輯團隊實地考察後撰寫。我哋希望用第一身視角，
                帶你感受每個地方最真實嘅一面。
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">📸 旅行攝影</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">✈️ 深度遊記</span>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">📚 文化探索</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}