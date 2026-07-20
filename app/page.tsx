'use client'

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Play, Globe, Compass, MapPin, Camera, Utensils, Mountain,
  ChevronDown, Clock, ArrowRight, Star, Menu, X, Volume2, VolumeX,
  Quote, Heart, Share2, Calendar, Users, Award, Target, Zap, Sparkles
} from "lucide-react"

// 旅遊統計數據
const travelStats = [
  { number: "32+", label: "國家", icon: Globe },
  { number: "69", label: "遊記", icon: MapPin },
  { number: "128", label: "城市", icon: Compass },
  { number: "8+", label: "年經驗", icon: Award },
]

// 精選文章
const featuredArticles = [
  {
    id: 1,
    title: "南意大利19天慢活：拿坡里、龐貝、阿瑪菲海岸全景",
    excerpt: "一家三口地中海陽光之旅，探索千年古蹟與蔚藍海岸的完美結合",
    location: "意大利",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    slug: "southern-italy-18-days",
    featured: true
  },
  {
    id: 2,
    title: "聖托里尼伊亞：全球最美落日的熔金時刻",
    excerpt: "藍頂教堂、白牆洞穴屋與熔金晚霞的浪漫極致慢活之旅",
    location: "希臘",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    slug: "santorini-oia"
  },
  {
    id: 3,
    title: "巴塞隆納聖家堂：高第傾注43年的傳奇神作",
    excerpt: "深度解讀兩大經典立面與黃昏日落夢幻拍攝時刻",
    location: "西班牙",
    image: "https://images.unsplash.com/photo-1583779457168-ad7e2544a133?w=800&q=80",
    slug: "sagrada-familia"
  },
  {
    id: 4,
    title: "布拉格城堡：全球最大古堡群的千年史詩",
    excerpt: "聖維特大教堂、黃金巷、舊皇宮與慕夏彩繪玻璃窗",
    location: "捷克",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80",
    slug: "prague-castle"
  },
  {
    id: 5,
    title: "京都嵐山：竹林深處的禪意時光",
    excerpt: "穿越千年竹林、踏足渡月橋、乘搭嵐山小火車",
    location: "日本京都",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    slug: "arashiyama"
  },
  {
    id: 6,
    title: "維也納美泉宮：哈布斯堡皇室的黃金夏日",
    excerpt: "瑪麗亞·特蕾莎與茜茜公主的傳奇、1441房僅45間開放",
    location: "奧地利",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
    slug: " schonbrunn-palace"
  }
]

// 目的地分類
const destinations = [
  {
    region: "歐洲",
    emoji: "🏰",
    gradient: "from-blue-600 to-purple-600",
    countries: ["英國", "法國", "意大利", "西班牙", "德國", "瑞士", "奧地利", "捷克", "希臘", "葡萄牙", "荷蘭"],
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80"
  },
  {
    region: "亞洲",
    emoji: "🌸",
    gradient: "from-red-500 to-orange-500",
    countries: ["日本", "韓國", "泰國", "台灣"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80"
  },
  {
    region: "大灣區",
    emoji: "🌆",
    gradient: "from-emerald-500 to-teal-500",
    countries: ["香港", "澳門", "深圳", "廣州", "珠海", "東莞", "佛山"],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80"
  }
]

// 視頻展示內容
const videoShowcase = [
  {
    id: 1,
    title: "歐洲鐵路之旅",
    description: "乘坐火車穿越阿爾卑斯山脈，欣賞雪山與湖泊的絕美風光",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    duration: "12:34",
    views: "25.3K"
  },
  {
    id: 2,
    title: "日本櫻花季",
    description: "東京、京都賞櫻指南，捕捉最美的粉色瞬間",
    thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",
    duration: "8:45",
    views: "18.7K"
  },
  {
    id: 3,
    title: "地中海風情",
    description: "沿著蔚藍海岸線，探索義大利與希臘的浪漫港灣",
    thumbnail: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
    duration: "15:20",
    views: "32.1K"
  },
  {
    id: 4,
    title: "城市夜景延时",
    description: "紐約、巴黎、東京、香港的璀璨夜景",
    thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80",
    duration: "6:18",
    views: "45.6K"
  }
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      {/* 頂部導航 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">純粹旅人</span>
                <span className="block text-xs text-white/60">Journey</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 遊記攻略
              </Link>
              <Link href="/videos" className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-2">
                <Play className="w-4 h-4" /> 視頻專區
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-2">
                <Camera className="w-4 h-4" /> 關於作者
              </Link>
              <Link href="/contact" className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                開始旅程
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10 py-4">
            <div className="px-4 space-y-3">
              <Link href="/blog" className="block py-3 text-white/80 hover:text-white font-medium">遊記攻略</Link>
              <Link href="/videos" className="block py-3 text-white/80 hover:text-white font-medium">視頻專區</Link>
              <Link href="/about" className="block py-3 text-white/80 hover:text-white font-medium">關於作者</Link>
              <Link href="/contact" className="block py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full text-center">開始旅程</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero 區域 - 全屏幕視頻/圖片背景 */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* 背景圖片 + 視差效果 */}
        <div
          className="absolute inset-0 scale-110 transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
            alt="Travel Adventure"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 多層漸變疊加 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30" />

        {/* 動態粒子效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Hero 內容 */}
        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">69篇原創深度遊記</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              用雙腳丈量世界
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            退休熱血旅人，足迹遍佈 <strong className="text-white">32+ 國家</strong>，
            用文字記錄旅程，用鏡頭捕捉感動
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/blog"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                探索遊記
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/videos"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              觀看視頻
            </Link>
          </div>

          {/* 滾動指示器 */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>

        {/* 底部過渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
      </section>

      {/* 統計數據橫幅 */}
      <section className="relative -mt-16 z-20 px-4 mb-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {travelStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 精選遊記 */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
              Featured Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              精選遊記
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              每一篇都是實地考察後的第一手分享，帶你深入體驗每個目的地的獨特魅力
            </p>
          </div>

          {/* 特色文章 - 大卡片 */}
          <div className="mb-12">
            <Link href={`/blog/${featuredArticles[0].slug}`} className="group block relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 text-white/60 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{featuredArticles[0].location}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-transparent bg-gradient-to-r from-white to-white bg-clip-text">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-4 max-w-2xl">
                  {featuredArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    閱讀全文 <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* 其他文章網格 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {article.location}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent bg-gradient-to-r from-white to-white bg-clip-text line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-sm">閱讀更多</span>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              查看全部遊記 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 視頻專區 */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-4">
                Video Zone
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                視頻專區
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                用影像記錄旅程，每一幀都是珍貴的回憶
              </p>
            </div>
            <Link
              href="/videos"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium"
            >
              查看全部視頻 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoShowcase.map((video) => (
              <div key={video.id} className="group">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => setActiveVideo(video.id)}
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-white transition-all"
                    >
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2 group-hover:text-transparent bg-gradient-to-r from-white to-white bg-clip-text">
                  {video.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 mb-2">{video.description}</p>
                <div className="flex items-center gap-1 text-white/40 text-sm">
                  <Play className="w-3 h-3" />
                  <span>{video.views} 觀看</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 目的地探索 */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">
              Destinations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              探索目的地
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              從歐洲古堡到亞洲街頭，從繁華都市到靜謐海島，開啟你的下一段旅程
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.region} className="group relative">
                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.region}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${dest.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-5xl mb-4">{dest.emoji}</div>
                    <h3 className="text-3xl font-bold text-white mb-4">{dest.region}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.countries.slice(0, 4).map((country) => (
                        <span key={country} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                          {country}
                        </span>
                      ))}
                      {dest.countries.length > 4 && (
                        <span className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full">
                          +{dest.countries.length - 4}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/blog?region=${dest.region}`}
                      className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all"
                    >
                      探索 <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 作者簡介 */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* 背景裝飾 */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl" />

            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* 作者頭像 */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                      <span className="text-7xl">✈️</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                    純粹旅人
                  </div>
                </div>

                {/* 作者資訊 */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    純粹旅人 <span className="text-2xl">✈️</span>
                  </h2>
                  <p className="text-xl text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    退休熱血旅人 · 深度遊記作者
                  </p>
                  <p className="text-white/80 leading-relaxed mb-6">
                    退休後全心投入旅行探索嘅自由靈魂！足迹遍佈 <strong className="text-white">32+ 個國家</strong>，
                    用文字記錄旅程，用鏡頭捕捉感動，每篇遊記都係實地考察後嘅第一手分享。
                  </p>

                  {/* 專長標籤 */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                    {[
                      { icon: Utensils, label: "美食探索" },
                      { icon: Mountain, label: "文化深度" },
                      { icon: Compass, label: "路綫規劃" },
                      { icon: Camera, label: "旅行攝影" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                        <item.icon className="w-4 h-4 text-blue-400" />
                        <span className="text-white/80 text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* 語錄 */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border-l-4 border-blue-500">
                    <Quote className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-xl italic text-white/90 leading-relaxed">
                      「旅行唔係走馬觀花，而係用心感受每個城市嘅溫度。」
                    </p>
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    了解更多關於我 <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區域 */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-[40px] p-12 relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative">
              <Target className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                準備好開始你的旅程了嗎？
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                訂閱我們的電子報，第一時間收到最新遊記更新通知
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="輸入你的電郵地址"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm rounded-full text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-white/90 transition-colors shadow-xl"
                >
                  立即訂閱
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-slate-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">純粹旅人</span>
                  <span className="block text-xs text-white/60">Journey</span>
                </div>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                用心感受每一個城市的溫度。69篇原創遊記，帶你走遍全球47個目的地。
              </p>
              <div className="flex items-center gap-4">
                {['🏠', '✈️', '📸'].map((emoji, i) => (
                  <span key={i} className="text-2xl hover:scale-110 transition-transform cursor-pointer">{emoji}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">遊記分類</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/blog?region=歐洲" className="hover:text-white transition-colors">歐洲遊記</Link></li>
                <li><Link href="/blog?region=亞洲" className="hover:text-white transition-colors">亞洲遊記</Link></li>
                <li><Link href="/blog?region=大灣區" className="hover:text-white transition-colors">大灣區遊記</Link></li>
                <li><Link href="/videos" className="hover:text-white transition-colors">視頻專區</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">關於</h4>
              <ul className="space-y-2 text-white/60">
                <li><Link href="/about" className="hover:text-white transition-colors">關於作者</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">聯繫我們</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">隱私政策</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">使用條款</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/40">
            <p>© 2024 純粹旅人 Journey · 用心感受每一個城市的溫度</p>
          </div>
        </div>
      </footer>

      {/* 視頻彈窗 */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">視頻加載中...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 全域樣式 */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #60a5fa, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  )
}
