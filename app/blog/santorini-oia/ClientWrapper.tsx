"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌅" },
  { id: "spots", title: "打卡位", emoji: "📸" },
  { id: "experience", title: "實地遊覽", emoji: "🇬🇷" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["聖托里尼", "伊亞", "希臘", "日落", "愛琴海"];

export default function SantoriniOiaPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900/50 to-slate-900/30 text-white">
      <ReadingProgress />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-800/95 to-indigo-800/95 backdrop-blur-xl border border-blue-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-300 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200/70 hover:text-white hover:bg-blue-700/50"
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
          href="/"
          className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors bg-blue-800/30 px-4 py-2 rounded-full hover:bg-blue-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            🇬🇷 希臘 · 聖托里尼
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            愛琴海燃燒的終極終章
          </h1>
          <h2 className="text-xl text-blue-300 font-semibold mb-4">希臘聖托里尼伊亞（Oia）落日熔金大數據與極致慢活攻略</h2>
          <p className="text-blue-400">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80"
            alt="聖托里尼伊亞藍頂教堂"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-400 text-sm mb-12">
          ▲ 伊亞小鎮的標誌性藍頂教堂，白牆與蔚藍圓頂在愛琴海陽光下熠熠生輝
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-8">
            <p className="text-blue-100 text-lg italic leading-relaxed border-l-4 border-orange-500/50 pl-6">
              「荷馬在《奧德賽》裡寫道，愛琴海是『葡萄酒色的海洋』；而當你站在伊亞的拜占庭城堡廢墟之巔，看著太陽將純白色的風車、藍頂教堂與一望無際的火山懸崖瞬間染成瘋狂的絢麗金橙，你才會明白：這是一場全人類一生中必須共同朝聖一次的宇宙級視覺謝幕。」
            </p>
          </div>

          <p id="intro">
            如果說雅典的衛城展現了古希臘理性與石頭的永恆神話，那麼懸掛在聖托里尼島（Santorini）最北端、如瀑布般傾瀉在 300 米高的火山絕壁之上的<strong>伊亞（Oia）小鎮</strong>，無疑就是這座藍白海島最唯美、最令人屏息的靈魂名片。這裡的代名詞是 ── <strong>「全球最美落日」</strong>。當火紅的太陽沉入湛藍的基克拉澤斯海面，整座懸崖大理石步道會響起雷鳴般的掌聲與歡呼。
          </p>

          <div id="spots" className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-300 font-bold mb-4 flex items-center gap-2 text-xl">
              📸 伊亞落日三大核心黃金打卡位
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-800/40 to-indigo-800/30 border border-blue-500/30 rounded-xl p-5">
                <h4 className="text-blue-300 font-bold mb-2">🏰 拜占庭城堡廢墟</h4>
                <p className="text-blue-100/80 text-sm">
                  位於小鎮最西端，可完美同時將大風車、火山灣與夕陽沒入海畔收納入鏡。<strong>360度落日完美制高點</strong>。
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/40 to-amber-800/30 border border-orange-500/30 rounded-xl p-5">
                <h4 className="text-orange-300 font-bold mb-2">⛪ 經典三大藍頂教堂</h4>
                <p className="text-orange-100/80 text-sm">
                  位於小鎮中心。黃昏時白牆被晚霞鍍成粉紅色，與蔚藍圓頂形成強烈對比。<strong>國家地理雜誌封面取景地</strong>。
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/40 to-yellow-700/30 border border-yellow-500/30 rounded-xl p-5">
                <h4 className="text-yellow-300 font-bold mb-2">🚢 阿莫迪港口 (Amoudi Bay)</h4>
                <p className="text-yellow-100/80 text-sm">
                  順著 300 級台階而下，在海畔吃著現捕明火烤魷魚，一邊平視太陽沉入愛琴海。<strong>海鮮大排檔平視海畔</strong>。
                </p>
              </div>
            </div>
          </div>

          <h2 id="experience">🇬🇷 第一身沉浸實感：在藍頂與火海交織間見證奇蹟</h2>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80"
              alt="聖托里尼日落"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-blue-400 text-sm mt-4 mb-8">
              ▲ 夕陽沉入愛琴海的壯觀瞬間，整座伊亞懸崖響起經久不息的掌聲
            </p>
          </div>

          <p>
            順著依山而建、光潔如鏡的純白色大理石主步行道踱步前進，每拐過一個街角，一整片湛藍得不帶一絲雜質的愛琴海便在 300 米高的懸崖下方排山倒海般平鋪開來。這裡是一座白色的垂直迷宮。
          </p>

          <p>
            傍晚 19:40，當太陽漸漸沉向海平線，大自然最放肆的調色盤正式啟動。原本純白色的懸崖洞穴屋、風車與外側露天台，在金黃色的「黃金時刻（Golden Hour）」照耀下，被齊刷刷地鍍上了一層耀眼奪目的碎金。
          </p>

          <div className="bg-gradient-to-br from-orange-900/40 to-amber-900/30 border border-orange-700/30 rounded-xl p-5 my-8">
            <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
              🌅 伊亞落日「天空色彩光譜分佈」
            </h3>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-3 bg-yellow-500/20 rounded-lg">
                <p className="text-yellow-300 font-bold">黃金時刻 (前20分)</p>
                <p className="text-yellow-100/70 text-xs">亮黃與香檳金鍍滿懸崖</p>
              </div>
              <div className="text-center p-3 bg-orange-500/20 rounded-lg">
                <p className="text-orange-300 font-bold">熔金火海 (落海5分)</p>
                <p className="text-orange-100/70 text-xs">火紅烈焰吞噬海平線</p>
              </div>
              <div className="text-center p-3 bg-pink-500/20 rounded-lg">
                <p className="text-pink-300 font-bold">粉紅餘暉 (落海後10分)</p>
                <p className="text-pink-100/70 text-xs">夢幻棉花糖紫粉色染紅雲海</p>
              </div>
              <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                <p className="text-blue-300 font-bold">皇家藍調 (最後5分)</p>
                <p className="text-blue-100/70 text-xs">深邃神聖藍（Blue Hour）亮燈</p>
              </div>
            </div>
          </div>

          <p>
            當太陽最終化為一團熾熱的熔金，不偏不倚地沒入遠方深藍色的海畔中央，整座伊亞懸崖會瞬間響起經久不息的掌聲、口哨聲與碰杯聲，那種全人類超越國界、對大自然崇高美學的集體致敬，直擊心靈，震撼得讓人头皮發麻。
          </p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              🐙 食貨老饕推介：伊亞懸崖與港灣的 2 大物超所值舌尖發現
            </h3>
            <ul className="space-y-3 text-green-100/80">
              <li className="flex gap-3">
                <span className="text-orange-400">🚢</span>
                <span><strong>阿莫迪港口的海畔海鮮大排檔：</strong>黃昏前順著 300 級之字形石階走下火山懸崖底部的阿莫迪港口。桌椅直接架在清澈見底的海水邊，點一隻明火炭烤的巨型章魚腳，肉質極其彈牙且帶有焦香。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">🍖</span>
                <span><strong>希臘地道「Moussaka」與羊起司沙律：</strong>在小鎮老街的傳統酒館（Taverna）裡，吃一份用茄子、碎肉與厚厚起司烘烤而成的 Moussaka，起司香氣濃郁。</span>
              </li>
            </ul>
          </div>

          <h2 id="tips">💡 精明自遊：伊亞落日完美防坑與卡位隨身手札</h2>

          <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-blue-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🏰</span>
                <span><strong>城堡廢墟提早 2 小時「絕對卡位」：</strong>拜占庭城堡廢墟空間極小，旺季（6月-9月）<strong>必須提早於落日時間前 2 小時抵達現場卡位</strong>！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">🍷</span>
                <span><strong>花錢買輕鬆的「日落景觀餐廳」高級智慧：</strong>提前 1 個月預訂能看見西面風車落日的懸崖餐廳（如 Kastro Oia Restaurant 或 Sunset Ammoudi），能優雅地嘆著海風、喝著香檳平視全球最美落日。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">📸</span>
                <span><strong>利用「早鳥晨曦包場」拍無人藍頂照：</strong>早上 07:00-09:00 之間的伊亞是一座完全空靈的「純白靜謐之城」，想要拍到背景完全乾淨、最標誌性的藍頂教堂與風車大片，清晨是最佳時機。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>防滑與鞋履莊嚴警告：</strong>主要街道是由古老火山大理石板鋪成，<strong>請務必穿著高抓地力、鞋底防滑性能卓越的運動健步鞋</strong>！</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">📍 地址</span>
              <p className="text-blue-100/80 text-sm mt-1">Oia, Santorini 847 02, Greece</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">🕐 開放時間</span>
              <p className="text-blue-100/80 text-sm mt-1">全天候開放<br/>建議清晨或傍晚遊覽</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">💰 費用</span>
              <p className="text-blue-100/80 text-sm mt-1">小鎮參觀免費<br/>景觀餐廳低消 €50+</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⭐ 評分</span>
              <p className="text-blue-100/80 text-sm mt-1">4.9/5.0（89,432 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">✈️ 交通</span>
              <p className="text-blue-100/80 text-sm mt-1">從費拉乘巴士約30分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-blue-100/80 text-sm mt-1">半天至一天</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/20 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="santorini-oia" />
          </div>

          <div className="bg-blue-900/30 rounded-2xl p-6 my-10 border border-blue-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🌅 愛琴海燃燒的終極終章：希臘聖托里尼伊亞落日熔金攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30 flex items-center gap-4">
              <span className="text-blue-100/80">加入心願清單：</span>
              <FavoriteButton slug="santorini-oia" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-blue-700/30 pt-8 mt-8">
            <p className="text-blue-400 italic text-center">
              歲月流逝於海浪，熔金落幕於愛琴。願每位造訪這片藍白淨土的旅人，都能在伊亞的極致晚霞中找到屬於自己的浪漫夢。
            </p>
          </div>

          <RelatedPosts currentSlug="santorini-oia" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="santorini-oia" />
    </div>
  );
}