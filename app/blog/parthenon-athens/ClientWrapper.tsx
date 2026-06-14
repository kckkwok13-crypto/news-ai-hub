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
  { id: "intro", title: "介紹", emoji: "🏛️" },
  { id: "architecture", title: "建築奇蹟", emoji: "📐" },
  { id: "history", title: "歷史命運", emoji: "🔑" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["帕特農", "雅典", "希臘", "衛城", "古蹟"];

export default function ParthenonPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-blue-900/50 to-slate-900/30 text-white">
      <ReadingProgress />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-sky-800/95 to-blue-800/95 backdrop-blur-xl border border-sky-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-sky-500/10">
          <h3 className="text-sm font-bold text-sky-300 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-lg shadow-sky-500/30"
                      : "text-sky-200/70 hover:text-white hover:bg-sky-700/50"
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
          className="inline-flex items-center gap-2 text-sky-300 hover:text-white mb-8 transition-colors bg-sky-800/30 px-4 py-2 rounded-full hover:bg-sky-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-sky-500/30">
            🇬🇷 希臘 · 雅典
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-transparent">
            黃金比例的永恆凝視
          </h1>
          <h2 className="text-xl text-sky-300 font-semibold mb-4">雅典衛城帕特農神廟（Parthenon）2500年建築幾何大數據攻略</h2>
          <p className="text-sky-400">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/20">
          <img
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
            alt="雅典衛城帕特農神廟"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-sky-400 text-sm mb-12">
          ▲ 雅典衛城之巔的帕特農神廟，2500年來守望著西方文明的搖籃
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-8">
            <p className="text-sky-100 text-lg italic leading-relaxed border-l-4 border-orange-500/50 pl-6">
              「勒·柯比意說，帕特農神廟是地球上唯一無懈可擊的建築機器；而當你站在高聳的阿提卡懸崖之巔，看著那些在兩千五百年間被戰火、地震與硝煙剝蝕得斑駁的巨型潘特里克大理石柱，在愛琴海的烈日下折射出碎金，你才會明白：希臘人不用一根直線，卻創造了全宇宙最完美的視覺直線。」
            </p>
          </div>

          <p id="intro">
            如果說聖托里尼的伊亞落日燃燒了愛琴海最繾綣的浪漫，那麼巍然挺立在西方文明搖籃 ── 雅典<strong>衛城（Acropolis）</strong>最高峰的<strong>帕特農神廟（Parthenon）</strong>，無疑就是整個人類古典美學史上無可撼動的理性王冠。這座始建於<strong>公元前 447 年</strong>、為了祭祀雅典娜女神而建的偉大神殿，已整整橫跨了 <strong>2,470 多年的歷史滄桑</strong>。
          </p>

          <div id="architecture" className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-sky-300 font-bold mb-4 flex items-center gap-2 text-xl">
              📐 帕特農神廟三大無直線結構：光學視差修正大數據
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-800/40 to-blue-800/30 border border-sky-500/30 rounded-xl p-5">
                <h4 className="text-sky-300 font-bold mb-2">🏛️ 柱身隆起 (Entasis)</h4>
                <p className="text-sky-100/80 text-sm">
                  <strong>杜絕視覺「中間變細」</strong>。46根外側大理石柱，柱身在1/3高度處向外精確微拱<strong>6.5 厘米</strong>，使遠觀無比挺拔。
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/40 to-red-800/30 border border-orange-500/30 rounded-xl p-5">
                <h4 className="text-orange-300 font-bold mb-2">🏛️ 地基向上微弧拱起</h4>
                <p className="text-orange-100/80 text-sm">
                  <strong>杜絕視覺「中段下陷」</strong>。神廟底座基石四角偏低，正中心處向上隆起高達<strong>11 厘米</strong>，以此營造完美地平線。
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-800/40 to-amber-700/30 border border-yellow-500/30 rounded-xl p-5">
                <h4 className="text-yellow-300 font-bold mb-2">🏛️ 石柱集聚內傾</h4>
                <p className="text-yellow-100/80 text-sm">
                  <strong>宇宙金字塔交匯</strong>。所有巨柱皆非垂直，而是向中心微傾。若將軸線向上延伸，將在<strong>5000米高空</strong>聚於一點。
                </p>
              </div>
            </div>
          </div>

          <h2 id="history">🔑 2500年史詩劫難：神廟歷史命運演變</h2>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&q=80"
              alt="雅典衛城與帕特農神廟"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-sky-400 text-sm mt-4 mb-8">
              ▲ 從菲洛帕波斯山丘俯瞰衛城與愛琴海全景
            </p>
          </div>

          <p>
            帕特農神廟不僅是美學奇蹟，更是一面記錄了中歐、地中海文明交織衝突的黑色歷史鏡子。它在兩千多年裡頻繁轉變身份：
          </p>

          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 border border-orange-700/30 rounded-xl p-5 my-8">
            <h3 className="text-orange-400 font-bold mb-3 flex items-center gap-2">
              📊 帕特農神廟歷代政教身份轉變
            </h3>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center p-3 bg-sky-500/20 rounded-lg">
                <p className="text-sky-300 font-bold">900年</p>
                <p className="text-sky-100/70 text-xs">古希臘異教神殿</p>
              </div>
              <div className="text-center p-3 bg-blue-500/20 rounded-lg">
                <p className="text-blue-300 font-bold">400年</p>
                <p className="text-blue-100/70 text-xs">基督教天主堂</p>
              </div>
              <div className="text-center p-3 bg-orange-500/20 rounded-lg">
                <p className="text-orange-300 font-bold">250年</p>
                <p className="text-orange-100/70 text-xs">奧斯曼清真寺</p>
              </div>
            </div>
            <p className="text-orange-100/80 text-sm mt-4">
              <strong>1687年悲劇：</strong>威尼斯軍隊一發炮彈精確引爆了廟內的火藥，直接摧毀了其中心拱頂。
            </p>
          </div>

          <h2>🏛️ 第一身沉浸實感：在金色陰影與千載歷史間站成永恆</h2>

          <p>
            順著衛城西側陡峭、被兩千年來幾千萬雙鞋底磨得如同鏡面般光滑的花崗岩山道拾級而上，穿過氣勢磅礴的<strong>山門（Propylaea）</strong>。當你一腳踏上衛城山頂那片寬闊、荒涼的巨石荒原，那一整面歷經兩千載戰火硝煙、宏偉到不可思議的帕特農神廟主立面便排山倒海般在眼前鋪開。
          </p>

          <p>
            慢步走到神廟巨大的多立克柱廊下方。整座神廟全部採用產自雅典北部的<strong>潘特里克大理石（Pentelic Marble）</strong>手工砌成。這種大理石內含有極微量的鐵元素，在歷經2500年的風化氧化後，石表會泛出一層極其高貴、溫潤、如熟透了的麥穗般的黃金蜂蜜色澤。
          </p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              🎨 東道主私藏手信與衛城下步行街好去處
            </h3>
            <ul className="space-y-3 text-green-100/80">
              <li className="flex gap-3">
                <span className="text-orange-400">🏪</span>
                <span><strong>普拉卡老城步行街（Plaka）：</strong>緊鄰衛城山腳下，雅典最古老、保存最完好的民國/古典騎樓街區。街道兩旁開滿了九重葛與露天咖啡廳，點一杯地道的希臘冰咖啡（Frappé），慢活感十足。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🏛️</span>
                <span><strong>衛城博物館 (Acropolis Museum)：</strong>入口天橋全部採用透明防彈玻璃，低頭就能平視腳下幾米深處正在發掘的古希臘古城遺址。館內 3 樓更是 1:1 複刻了帕特農神廟的命運石雕。</span>
              </li>
            </ul>
          </div>

          <h2 id="tips">💡 精明自遊：雅典衛城完美防坑與卡位隨身手札</h2>

          <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/40 border border-sky-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-sky-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎫</span>
                <span><strong>100% 必須提前 2-4 星期網上預約門票：</strong>為保護世界遺產，衛城實施<strong>每日總量管制與定時進場制</strong>！建議在官網提早買好<strong>早上 08:00-09:00 之間的第一批進場電子票</strong>，氣溫只有 24 度左右，旅行團大軍尚在酒店，你能拍到完全包場的無人神廟大片！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">📸</span>
                <span><strong>「落日雙神廟同框」黃金機位：</strong>最佳全景拍照點是位於衛城對面的<strong>菲洛帕波斯山丘（Philopappos Hill）</strong>。順著黃土步道步行 15 分鐘登頂，無須門票且毫無遮擋，可以用中長焦鏡頭將整座帕特農神廟完美框在落日藍調的愛琴海背景中。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⚠️</span>
                <span><strong>防滑與鞋履嚴格警告：</strong>衛城山頂地面<strong>100% 是兩千年被數億名遊客雙腳摩擦得光滑如鏡的大理石巨石</strong>！不論晴雨都極度濕滑。請務必穿著<strong>高抓地力、鞋底紋路極深、厚底的防滑運動健步鞋</strong>！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">☀️</span>
                <span><strong>防暑防曬大數據警告：</strong>衛城山頂<strong>100% 毫無任何大樹或遮陽棚遮擋</strong>。夏季中午太陽直射時，大理石地面折射溫度可瞬間飆升至<strong>42 度以上</strong>！務必帶足 1 公升以上的礦泉水、防曬大帽子與太陽眼鏡。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">📍 地址</span>
              <p className="text-sky-100/80 text-sm mt-1">Acropolis of Athens, Athens 105 58, Greece</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">🕐 開放時間</span>
              <p className="text-sky-100/80 text-sm mt-1">夏季 08:00-20:00<br/>冬季 08:00-17:00</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">💰 費用</span>
              <p className="text-sky-100/80 text-sm mt-1">€20（需提前網上預約）<br/>每月首個周日免費</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">⭐ 評分</span>
              <p className="text-sky-100/80 text-sm mt-1">4.8/5.0（98,765 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">🚇 交通</span>
              <p className="text-sky-100/80 text-sm mt-1">地鐵至Acropolis站步行5分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-sky-900/50 to-blue-900/60 rounded-xl p-4 border border-sky-700/30">
              <span className="text-sky-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-sky-100/80 text-sm mt-1">2-3小時</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-sky-900/30 to-blue-900/20 border border-sky-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-sky-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="parthenon-athens" />
          </div>

          <div className="bg-sky-900/30 rounded-2xl p-6 my-10 border border-sky-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🏛️ 黃金比例的永恆凝視：雅典衛城帕特農神廟2500年建築幾何大數據攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-sky-900/30 rounded-2xl p-6 border border-sky-700/30 flex items-center gap-4">
              <span className="text-sky-100/80">加入心願清單：</span>
              <FavoriteButton slug="parthenon-athens" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-sky-700/30 pt-8 mt-8">
            <p className="text-sky-400 italic text-center">
              幾何定格美學，黃金留存理智。願每位造訪西方文明搖籃的朋友，都能在衛城的皇家晨曦中找到屬於自己的永恆夢。
            </p>
          </div>

          <RelatedPosts currentSlug="parthenon-athens" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="parthenon-athens" />
    </div>
  );
}