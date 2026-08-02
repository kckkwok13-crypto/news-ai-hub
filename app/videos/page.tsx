'use client'

import { useState } from "react"
import Link from "next/link"
import { Play, ArrowLeft, Clock, Eye, Heart, Share2, Search, X, ExternalLink } from "lucide-react"

// 視頻分類
const categories = [
  { id: "all", name: "全部", count: 8 },
  { id: "europe", name: "歐洲", count: 4 },
  { id: "asia", name: "亞洲", count: 2 },
  { id: "bay", name: "大灣區", count: 2 },
]

// 視頻列表 - 包含真實 YouTube 嵌入
const videos = [
  {
    id: 1,
    title: "歐洲鐵路之旅：阿爾卑斯山脈全景",
    description: "乘坐火車穿越瑞士、阿根廷、奧地利，飽覽阿爾卑斯山脈的雪山、湖泊和小鎮風光",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    youtubeId: "ZueJhG3Vv3s", // Swiss Alps scenic train
    category: "europe",
    duration: "12:34",
    views: "25.3K",
    likes: "1.2K",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "日本賞櫻攻略：東京京都之美",
    description: "2024年日本賞櫻最佳時間、地點推薦，以及拍攝櫻花的技巧分享",
    thumbnail: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
    youtubeId: "YT7lQ-5W3fU", // Japan cherry blossom
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
    youtubeId: "mSfZnTmQM1k", // Mediterranean coast
    category: "europe",
    duration: "15:20",
    views: "32.1K",
    likes: "2.1K",
    date: "2024-02-10"
  },
  {
    id: 4,
    title: "香港維港風情：都市霓虹夜景",
    description: "從太平山頂到維多利亞港，感受香港這個東方之珠的璀璨夜景",
    thumbnail: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    youtubeId: "kX-YmZL7R9s", // Hong Kong nightscape
    category: "bay",
    duration: "7:45",
    views: "15.3K",
    likes: "756",
    date: "2024-03-05"
  },
  {
    id: 5,
    title: "瑞士少女峰：冰川奇觀",
    description: "乘坐齒軌火車登上歐洲之巔，探索千年冰川的壯麗與神秘",
    thumbnail: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    youtubeId: "4-rJvT3_GqU", // Swiss Alps
    category: "europe",
    duration: "11:08",
    views: "22.4K",
    likes: "1.5K",
    date: "2024-01-20"
  },
  {
    id: 6,
    title: "泰國曼谷：大皇宮金碧輝煌",
    description: "走進泰國皇室聖地，感受佛教文化與皇家氣派的完美結合",
    thumbnail: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
    youtubeId: "8K3C5NkzWqI", // Bangkok Grand Palace
    category: "asia",
    duration: "9:33",
    views: "12.1K",
    likes: "654",
    date: "2024-02-28"
  },
  {
    id: 7,
    title: "巴黎浪漫之旅：埃菲爾鐵塔日落",
    description: "在巴黎最浪漫的時刻記錄鐵塔風情，從夏樂宮到战神广场的完美視角",
    thumbnail: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    youtubeId: "9XjnhjBt5h8", // Paris Eiffel Tower
    category: "europe",
    duration: "10:22",
    views: "28.9K",
    likes: "1.8K",
    date: "2024-02-15"
  },
  {
    id: 8,
    title: "澳門大三巴：歷史與美食",
    description: "探索澳門世界文化遺產，品嚐地道葡式美食，感受中西文化交融",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    youtubeId: "p8X9YJX4S5k", // Macau ruins
    category: "bay",
    duration: "8:12",
    views: "9.8K",
    likes: "520",
    date: "2024-03-10"
  }
]

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === "all" || video.category === activeCategory
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const currentVideo = selectedVideo ? videos.find(v => v.id === selectedVideo) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 頂部導航 */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Play className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">純粹旅人</span>
                <span className="block text-xs text-white/60">Journey</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-white/60 hover:text-white font-medium transition-colors flex items-center gap-2">
                <span>📝</span> 遊記攻略
              </Link>
              <Link href="/videos" className="text-white font-bold flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
                <span>▶</span> 視頻專區
              </Link>
              <Link href="/about" className="text-white/60 hover:text-white font-medium transition-colors flex items-center gap-2">
                <span>👤</span> 關於作者
              </Link>
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
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl shadow-pink-500/30">
              <Play className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">視頻專區</h1>
              <p className="text-pink-400/80 text-lg">用影像記錄旅程，每一幀都是珍貴的回憶</p>
            </div>
          </div>
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
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all"
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
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 精選視頻 - 大卡片 */}
      {activeCategory === "all" && filteredVideos.length > 0 && (
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-pink-500">⭐</span> 精選視頻
              </h2>
              <div
                className="relative rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedVideo(filteredVideos[0].id)}
              >
                <img
                  src={filteredVideos[0].thumbnail}
                  alt={filteredVideos[0].title}
                  className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-slate-900 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-pink-500 text-white text-sm font-bold rounded-full">
                    精選
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-2 text-white/60 mb-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.id === filteredVideos[0].category)?.name}
                    </span>
                    <span>{filteredVideos[0].duration}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {filteredVideos[0].title}
                  </h3>
                  <p className="text-white/80 text-lg max-w-2xl line-clamp-2">
                    {filteredVideos[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 視頻列表 */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-rose-500">🎬</span> 全部視頻
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                {/* 視頻縮略圖 */}
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
                      <Play className="w-6 h-6 text-slate-900 ml-1" />
                    </div>
                  </div>
                  {/* 時長標籤 */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-sm font-medium rounded">
                    {video.duration}
                  </div>
                  {/* 分類標籤 */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-pink-500/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {categories.find(c => c.id === video.category)?.name}
                    </span>
                  </div>
                  {/* 播放指示器 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-slate-900 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* 視頻資訊 */}
                <h3 className="text-white font-bold mb-2 group-hover:text-pink-400 transition-colors line-clamp-2">
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
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">找不到相關視頻</h3>
              <p className="text-white/60">嘗試調整搜索條件或瀏覽其他分類</p>
            </div>
          )}
        </div>
      </div>

      {/* 視頻播放彈窗 */}
      {selectedVideo && currentVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => {
            setSelectedVideo(null)
            setIsPlaying(false)
          }}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => {
                setSelectedVideo(null)
                setIsPlaying(false)
              }}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-2 z-10"
            >
              <X className="w-6 h-6" />
              <span className="text-sm opacity-60">ESC 關閉</span>
            </button>

            {/* YouTube 嵌入式播放器 */}
            <div className="bg-black rounded-2xl overflow-hidden aspect-video relative">
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-slate-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white">{currentVideo.title}</h3>
                    <p className="text-white/60 mt-1">點擊播放視頻</p>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={currentVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="bg-slate-800 p-6 rounded-b-2xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {currentVideo.title}
                  </h3>
                  <p className="text-white/60 mb-4">
                    {currentVideo.description}
                  </p>
                  <div className="flex items-center gap-4 text-white/50 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {currentVideo.views} 觀看
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {currentVideo.likes} 喜歡
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentVideo.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    YouTube
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    喜歡
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 頁腳 */}
      <footer className="bg-slate-950 text-white py-12 px-4 mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">純粹旅人 Journey</span>
          </div>
          <p className="text-white/40 mb-4">用影像記錄旅程，每一幀都是珍貴的回憶</p>
          <p className="text-white/30 text-sm">© 2024 純粹旅人 Journey · 用心感受每一個城市的溫度</p>
        </div>
      </footer>
    </div>
  )
}
