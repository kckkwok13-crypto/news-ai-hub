"use client";

import Link from "next/link";
import YouTubeEmbed from "./YouTubeEmbed";

const featuredVideos = [
  {
    videoId: "Cqc9P7Dd3D4",
    title: "東京旅遊指南",
    slug: "shibuya-crossing",
    category: "旅遊",
    desc: "探索東京最繁華的十字路口"
  },
  {
    videoId: "fFMpQjh53KI",
    title: "日本旅遊亮點",
    slug: "meiji-shrine",
    category: "旅遊",
    desc: "體驗日本傳統文化魅力"
  },
  {
    videoId: "rseB7XMoFRs",
    title: "全球旅遊勝地",
    slug: "sensoji",
    category: "旅遊",
    desc: "發掘世界最美旅遊目的地"
  }
];

export default function VideoShowcase() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🎬 精選影片介紹
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            透過影片搶先感受旅遊目的地的魅力，點擊觀看完整遊記攻略
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <Link
              key={index}
              href={`/blog/${video.slug}`}
              className="group block bg-slate-800/50 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="relative">
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
              </div>
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-3">
                  {video.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-sm">{video.desc}</p>
                <div className="flex items-center gap-2 text-purple-400 text-sm mt-4 group-hover:text-purple-300">
                  <span>閱讀完整遊記</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-purple-500/20"
          >
            查看更多旅遊影片
          </Link>
        </div>
      </div>
    </div>
  );
}
