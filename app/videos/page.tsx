'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, ArrowLeft, Clock, Eye, Heart, Share2, Filter, Search } from "lucide-react"

// 視頻分類
const categories = [
  { id: "all", name: "全部", count: 24 },
  { id: "europe", name: "歐洲", count: 12 },
  { id: "asia", name: "亞洲", count: 8 },
  { id: "bay", name: "大灣區", count: 4 },
]

// 視頻列表
const videos = [
  {
    id: 1,
    title: "歐洲鐵路之旅：阿爾卑斯山脈全景",
    description: "乘坐火車穿越瑞士、阿根廷、奧地利，飽覽阿爾卑斯山脈的雪山、湖泊和小鎮風光",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "europe",
    duration: "12:34",
    views: "25.3K",
    likes: "1.2K",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "日本櫻花季：東京京都賞櫻攻略",
    description: "2024年日本賞櫻最佳時間、地點推薦，以及拍攝櫻花的技巧分享",
    thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
    category: "asia",
    duration: "8:45",
    views: "18.7K",
    likes: "890",
    date: "2024-03-20"
  },
  {
    id: 3,
    title: "地中海風情：意大利與希臘海岸線",
    description: "沿著蔚藍海岸線，從阿瑪菲到聖托里尼，探索地中海最浪漫的港灣",
    thumbnail: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    category: "europe",
    duration: "15:20",
    views: "32.1K",
    likes: "2.1K",
    date: "2024-02-10"
  },
  {
    id: 4,
    title: "城市夜景：全球璀璨之夜",
    description: "紐約、巴黎、東京、香港的璀璨夜景延時攝影，感受都市的無限魅力",
    thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80",
    category: "all",
    duration: "6:18",
    views: "45.6K",
    likes: "3.4K",
    date: "2024-01-28"
  },
  {
    id: 5,
    title: "巴黎浪漫之旅：埃菲爾鐵塔日落",
    description: "在巴黎最浪漫的時刻記錄鐵塔風情，從夏樂宮到战神广场的完美視角",
    thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    category: "europe",
    duration: "10:22",
    views: "28.9K",
    likes: "1.8K",
    date: "2024-02-15"
  },
  {
    id: 6,
    title: "香港維港風情：都市霓虹",
    description: "從太平山頂到維多利亞港，感受香港這個東方之珠的璀璨夜景",
    thumbnail: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    category: "bay",
    duration: "7:45",
    views: "15.3K",
    likes: "756",
    date: "2024-03-05"
  },
  {
    id: 7,
    title: "瑞士少女峰：冰川奇觀",
    description: "乘坐齒軌火車登上歐洲之巔，探索千年冰川的壯麗與神秘",
    thumbnail: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    category: "europe",
    duration: "11:08",
    views: "22.4K",
    likes: "1.5K",
    date: "2024-01-20"
  },
  {
    id: 8,
    title: "泰國曼谷：大皇宮金碧輝煌",
    description: "走進泰國皇室聖地，感受佛教文化與皇家氣派的完美結合",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    category: "asia",
    duration: "9:33",
    views: "12.1K",
    likes: "654",
    date: "2024-02-28"
  }
]

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "all" || video.category === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-900">
      {/* 頂部導航 */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">純粹旅人</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-white/60 hover:text-white font-medium transition-colors">遊記攻略</Link>
              <Link href="/videos" className="text-white font-medium">視頻專區</Link>
              <Link href="/about" className="text-white/60 hover:text-white font-medium transition-colors">關於作者</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 頁面標題 */}
      <div className="pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">視頻專區</h1>
          <p className="text-white/60 text-lg">用影像記錄旅程，每一幀都是珍貴的回憶</p>
        </div>
      </div>

      {/* 搜索和篩選 */}
      <div className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-md py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* 搜索框 */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="搜索視頻..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* 分類標籤 */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 視頻列表 */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer" onClick={() => setSelectedVideo(video.id)}>
                {/* 視頻縮略圖 */}
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </div>
                  </div>
                  {/* 時長標籤 */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-sm font-medium rounded">
                    {video.duration}
                  </div>
                  {/* 分類標籤 */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                  </div>
                </div>

                {/* 視頻資訊 */}
                <h3 className="text-white font-bold mb-2 group-hover:text-transparent bg-gradient-to-r from-white to-white bg-clip-text transition-all">
                  {video.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 mb-3">{video.description}</p>

                {/* 統計數據 */}
                <div className="flex items-center gap-4 text-white/40 text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {video.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-white mb-2">找不到相關視頻</h3>
              <p className="text-white/60">嘗試調整搜索條件或瀏覽其他分類</p>
            </div>
          )}
        </div>
      </div>

      {/* 視頻播放彈窗 */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-2"
            >
              關閉 <span className="text-sm opacity-60">ESC</span>
            </button>
            <div className="bg-black rounded-2xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Play className="w-10 h-10 ml-1" />
                  </div>
                  <p className="text-xl font-medium mb-2">
                    {videos.find(v => v.id === selectedVideo)?.title}
                  </p>
                  <p className="text-white/60">
                    視頻播放功能即將上線，敬請期待！
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-6 rounded-b-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {videos.find(v => v.id === selectedVideo)?.title}
              </h3>
              <p className="text-white/60 mb-4">
                {videos.find(v => v.id === selectedVideo)?.description}
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                  <Heart className="w-4 h-4" /> 喜歡
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4" /> 分享
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 頁腳 */}
      <footer className="bg-slate-950 text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">純粹旅人</span>
          </div>
          <p className="text-white/40">© 2024 純粹旅人 Journey · 用心感受每一個城市的溫度</p>
        </div>
      </footer>
    </div>
  )
}
