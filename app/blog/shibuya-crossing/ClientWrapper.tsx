"use client";

import Link from "next/link";

import Giscus from "@giscus/react";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌍" },
  { id: "crossing", title: "十字路口", emoji: "🚶" },
  { id: "scramble", title: "隨機應變", emoji: "🎯" },
  { id: "surround", title: "周邊攻略", emoji: "🛍️" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function ShibuyaCrossingPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-purple-500/10">
          <h3 className="text-sm font-bold text-purple-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/30">
            🌃 東京繁華
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent">
            走進世界最繁忙的十字路口
          </h1>
          <h2 className="text-xl text-purple-400 font-semibold mb-4">東京澀谷十字路口（Shibuya Crossing）全攻略！</h2>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80"
          alt="澀谷十字路口"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-purple-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://plus.unsplash.com/premium_photo-1766928979242-9750984909f7?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 夜幕下的澀谷十字路口，來自四面八方的行人形成的「人流漩渦」是東京最具代表性的城市景觀
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，<strong>澀谷十字路口（Shibuya Crossing）</strong>絕對當之無愧！呢個每天都會上演「萬人過馬路」的繁忙路口，每次綠燈亮起，就會有數以千計的行人從四面八方同時穿越，形成一個獨一無二、令人血脈沸騰的「人流漩渦」。無論係白天定係深夜，這裡永遠都充滿著絡繹不絕的旅客與東京人。
          </p>
          <p>
            今天呢篇 Blog，就帶你深度攻略呢個世界聞名嘅十字路口，從最佳拍攝位到周邊商場，全部一次過話你知！
          </p>

          <h2 id="crossing">🚶 為何這個路口如此有名？</h2>
          <p>
            澀谷十字路口之所以聞名全世界，係因為佢係<strong>全球最繁忙的行人穿越道</strong>。根據估計，每個綠燈周期大約有 3,000 人同時過馬路，而每日更有多達 50 萬人次经过呢度。當所有行人的步伐在同一瞬間由四面八方匯聚，形成一個好似漩渦咁的奇觀，外國旅客第一次見到都會忍不住「嘩」一聲！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80"
              alt="澀谷十字路口日間人流"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 日間的十字路口，來自世界各地的旅客在此交匯
            </p>
         20          </div>

          <h2 id="scramble">🎯 隨機應變的「澀谷式過馬路」</h2>
          <p>
            如果你第一次行呢個路口，可能會有啲不知所措。放心，等我哋教你！因為人流實在太多，東京人發展出一套獨特嘅<strong>「澀谷式過馬路」</strong>技巧：
          </p>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <ul className="space-y-3 text-zinc-300">
              <li>• <strong>跟隨人流：</strong>唔需要刻意等，等人群聚集到一定數量，綠燈一亮就跟大隊走。</li>
              <li>• <strong>不要停在路中間：</strong>因為人實在太多，如果你停低會阻礙後面的人。</li>
              <li>• <strong>交叉口中央有欄杆：</strong>如果綠燈響起你仲未行完，可以喺中間的安全島稍停。</li>
              <li>• <strong>感受氣氛：</strong>試吓喺人流最旺的時候行過去，體驗一下那種被千人包围的快感！</li>
            </ul>
          </div>

          <h2 id="surround">🛍️ 十字路口周邊商場與美食攻略</h2>
          <p>
            行完十字路口，千祈唔好走！周邊仲有好多好嘢等緊你：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">🛍️ SHIBUYA109</span>
              <p className="text-zinc-300 text-sm mt-1">東京辣妹時尚的地標，商場充斥着最新潮流款式與限定商品。</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">🎮 澀谷Scramble Square</span>
              <p className="text-zinc-300 text-sm mt-1">2019年新開的商業大樓，頂層有景觀台可以俯瞰整個十字路口！</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">🍜 杵屋麵</span>
              <p className="text-zinc-300 text-sm mt-1">百年歷史的日本橋蕎麥麵老店，經濟實惠又好食。</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">☕ 星巴克澀谷店</span>
              <p className="text-zinc-300 text-sm mt-1">二樓有落地玻璃窗，可以270度俯瞰十字路口，是最佳拍攝位！</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-10" id="tips">
            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 澀谷十字路口 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-purple-400">📸</span>
                <span className="text-zinc-300"><strong>最佳拍攝位：</strong>推薦去<strong>星巴克澀谷中央街店二樓</strong>，有落地大玻璃窗，可以影到成個十字路口的全景。同時對面既西武百貨或澀谷Hikarie都有良好的拍攝角度。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🌙</span>
                <span className="text-zinc-300"><strong>夜間拍攝：</strong>夜晚的十字路口閃爍著東京的霓虹燈光，非常有未來感。建議带备脚架或者用手持穩定器拍攝。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🚇</span>
                <span className="text-zinc-300"><strong>交通方式：</strong>搭乘東京Metro地鐵副都心線、半藏門線、銀座線至「澀谷站」，从8號出口一出就到。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">📍 地址</span>
              <p className="text-zinc-300 text-sm mt-1">Shibuya Station, Shibuya, Tokyo</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">🕐 開放時間</span>
              <p className="text-zinc-300 text-sm mt-1">24小時開放</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">💰 費用</span>
              <p className="text-zinc-300 text-sm mt-1">免費參觀</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">⭐ 評分</span>
              <p className="text-zinc-300 text-sm mt-1">4.5/5.0（89,234 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">🚇 交通</span>
              <p className="text-zinc-300 text-sm mt-1">東京Metro 澀谷站 步行1分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-purple-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-zinc-300 text-sm mt-1">1-2小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-zinc-300 text-lg mb-4">
              👇 你試過在澀谷十字路口被「人流漩渦」淹沒過嗎？分享一下你的體驗！
            </p>
            <div className="space-y-3">
              <Giscus
    repo="kckkwok13-crypto/news-ai-hub"
    repoId="1227822003"
    category="Announcements"
    categoryId="DIC_kwDONz6bPM4CnWN7"
    mapping="pathname"
    strict="0"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    theme="light"
    lang="zh-TW"
    loading="lazy"
  />
            </div>
          </div>


        </article>
      </div>
    </div>
  );
}