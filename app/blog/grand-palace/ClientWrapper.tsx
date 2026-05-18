"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🏛️" },
  { id: "temple", title: "玉佛寺", emoji: "⛩️" },
  { id: "chakri", title: "節基殿", emoji: "🏰" },
  { id: "dress", title: "服裝規定", emoji: "👔" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function GrandPalacePage() {
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
    <div className="min-h-screen bg-[#faf8f5] text-[#2b251a]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#fdf8e6] to-[#f4f0e1] backdrop-blur-xl border border-[#d4af37]/40 rounded-2xl p-5 w-60 shadow-2xl shadow-[#d4af37]/10">
          <h3 className="text-sm font-bold text-[#7a5c00] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#d4af37] to-[#b38f00] text-white shadow-lg shadow-[#d4af37]/30"
                      : "text-[#2b251a]/70 hover:text-[#1a2a3a] hover:bg-[#e8eaed]"
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
          className="inline-flex items-center gap-2 text-[#7a5c00] hover:text-[#1a2a3a] mb-8 transition-colors bg-[#fdf8e6] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#d4af37]/30"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12 border-b-2 border-[#d4af37]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b38f00] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#d4af37]/30">
            🇹🇭 泰國漫遊 · 曼谷必去
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7a5c00] leading-tight">
            走進曼谷的金碧輝煌：大皇宮（Grand Palace）與玉佛寺深度一日遊全攻略
          </h1>
          <p className="text-[#9a8c73]">發布日期：2026年5月 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20">
          <img
            src="https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80"
            alt="大皇宮"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#7d6f55] text-sm mb-12">
          ▲ 象徵暹羅帝國輝煌歷史與雕刻工藝巔峰的曼谷地標 —— 大皇宮
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2b251a] text-justify text-lg leading-relaxed">
            如果要在曼谷選一個最能震撼視覺、展現泰國極致雕刻美學的地方，那絕對非<strong>大皇宮（Grand Palace）</strong>莫屬！這座建於 1782 年的宏偉建築群，曾是暹羅王國（今泰國）拉瑪一世至拉瑪五世的正式皇宮。這裡不僅是泰國歷代王室的居所，更是舉辦國家級重大慶典的神聖之地。它那鋪天蓋地的精緻金箔、彩色玻璃鑲嵌以及耀眼的琉璃瓦，美得讓人目不暇給。
          </p>
          <p className="text-[#2b251a] text-justify text-lg">
            今天這篇 Blog 就帶大家深入這座金碧輝煌的東方宮殿，揭開皇室與佛教文化交織的神秘面紗，並送上防曬、防騙與服裝限制的超強實用攻略！
          </p>

          <h2 id="temple" className="text-[#7a5c00] text-2xl font-bold mt-12 mb-4 border-b-2 border-[#d4af37] pb-2">
            ✨ 大皇宮建築群：2 大不可錯過的靈魂核心
          </h2>

          <h3 className="text-[#2b251a] text-xl font-semibold mt-8 mb-3">1. 玉佛寺（Wat Phra Kaew）—— 泰國至高無上的護國寺廟</h3>
          <p className="text-[#2b251a] text-justify">
            進入大皇宮後的第一站，就是佔了整座皇宮約四分之一面積的「玉佛寺」。這裡供奉著由一整塊碧綠翡翠雕刻而成的<strong>泰國國寶 —— 玉佛</strong>。最神奇的是，每逢換季（熱季、雨季、涼季），泰國國王都會親自前來為玉佛更換由黃金與寶石製成的「金縷衣」，以祈求國泰民安。進入大殿內參拜時需要脫鞋，並且絕對保持肅靜。
          </p>

          <h3 id="chakri" className="text-[#2b251a] text-xl font-semibold mt-8 mb-3">2. 節基殿（Chakri Maha Prasat Throne Hall）—— 東西方建築的奇妙交融</h3>
          <p className="text-[#2b251a] text-justify">
            走出宗教色彩濃厚的玉佛寺，映入眼簾的會是一座非常獨特的宮殿 —— 節基殿。它的外觀非常奇妙：建築的下半部是極具歐洲文藝復興風格的維多利亞式石柱與拱門，但屋頂卻保留了最傳統的泰式三層尖頂琉璃瓦屋頂。這種「穿西裝、戴泰帽」的<strong>和洋/東西折衷建築風格</strong>，完美體現了當年泰國皇室積極融入國際卻又不忘本的智慧。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80"
              alt="大皇宮金色舍利塔"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#7d6f55] text-sm mt-4 mb-8">
              ▲ 貼滿金箔的樂達納舍利塔，與兩旁色彩斑斕的夜叉守護神
            </p>
          </div>

          <div id="dress" className="bg-[#fdf8e6] border-l-4 border-[#d4af37] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#a30000] font-bold mb-4 text-xl">🚨 嚴格注意：大皇宮「服裝檢查」魔鬼細節！</h4>
            <p className="text-[#2b251a] mb-4">大皇宮是泰國地位最神聖的地方，其服裝檢查堪稱全泰國最嚴格。如果穿錯服裝，是<strong>絕對會被拒絕參觀</strong>的！請務必嚴格遵守以下守則：</p>
            <ul className="space-y-3 text-[#2b251a]">
              <li><strong>上衣：</strong>必須有袖（短袖可，但背心、吊帶、露肩、深V或露肚短上衣一律禁止）。</li>
              <li><strong>下身：</strong>必須長過膝蓋（長褲或長裙可。短褲、迷你裙、破洞牛仔褲、甚至貼身 Leggings 都不行）。</li>
              <li><strong>鞋子：</strong>以前規定要穿包鞋，現在比較寬鬆，乾淨的涼鞋或拖鞋也可以，但進入大殿內部必須脫鞋。</li>
              <li><em>小貼士：如果當天穿錯了，大皇宮門口有許多商販售賣具泰國特色的「大象褲」（約 100-150 泰銖一條），可以即買即穿以符合規定。</em></li>
            </ul>
          </div>

          <h2 className="text-[#7a5c00] text-2xl font-bold mt-12 mb-4 border-b-2 border-[#d4af37] pb-2">
            📸 攝影師指南：如何拍出避開人潮的宮殿大片
          </h2>
          <p className="text-[#2b251a] text-justify">
            由於大皇宮長年人山人海，想要拍出空曠的奢華感，秘訣在於「利用仰角與微距」。可以將鏡頭對準貼滿無數彩色玻璃與金箔的迴廊柱子，拍出幾何對稱的奢華微距照片；或者站在陽廊下用仰角拍攝高聳的金色舍利塔，將藍天與金塔一同入鏡，就能完美避開地面的人頭攢動。
          </p>

          <div id="tips" className="bg-[#2b251a] text-[#f4efe6] p-6 my-10 rounded-xl">
            <h3 className="text-[#d4af37] font-bold mb-4 text-xl">💡 大皇宮 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3">
              <li><strong>防騙重要警告：</strong>在大皇宮周邊（特別是門口或附近馬路），如果遇到熱心的嘟嘟車司機或路人跟你說：「今天大皇宮有皇家活動不開放 / 早上關門下午才開，我帶你去其他廟逛逛」—— <strong>這100%是騙局！</strong>大皇宮基本上全年不休，請直接無視他們，直接往正門售票處走。</li>
              <li><strong>最佳造訪時間：</strong>強烈建議在<strong>早上 8:30 準時開門時進場</strong>。這時候氣溫相對沒那麼炎熱，而且旅行團大軍尚未抵達，散步拍照最舒服。</li>
              <li><strong>門票與交通：</strong>門票為 500 泰銖（已包含玉佛寺及皇家孔劇表演門票）。最方便的交通方式是乘搭曼谷地鐵 MRT 至「Sanam Chai 站」，從 1 號出口步行約 15 分鐘，或直接搭乘昭披耶河觀光船至「The Chang (N9) 碼頭」出站步行。</li>
            </ul>
          </div>

          <h2 className="text-[#7a5c00] text-2xl font-bold mt-12 mb-4 border-b-2 border-[#d4af37] pb-2">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">📍 地址</span>
              <p className="text-[#2b251a] text-sm mt-1">Na Phra Lan Rd, Grand Palace, Bangkok</p>
            </div>
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">🕐 開放時間</span>
              <p className="text-[#2b251a] text-sm mt-1">8:30-16:30（15:30最後售票）</p>
            </div>
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">💰 費用</span>
              <p className="text-[#2b251a] text-sm mt-1">500 泰銖（含玉佛寺）</p>
            </div>
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">⭐ 評分</span>
              <p className="text-[#2b251a] text-sm mt-1">4.6/5.0（62,341 評論）</p>
            </div>
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">🚇 交通</span>
              <p className="text-[#2b251a] text-sm mt-1">MRT Sanam Chai站 步行15分鐘</p>
            </div>
            <div className="bg-[#fdf8e6] rounded-xl p-4 border border-[#d4af37]/30">
              <span className="text-[#d4af37] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2b251a] text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-[#fdf8e6] border border-[#d4af37]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#7a5c00] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#2b251a] text-lg mb-4">
              👇 留言分享：你行大皇宮嘅時候有冇著過泰國經典嘅「大象褲」？定係你最震撼邊一座宮殿呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-[#d4af37]/30 rounded-xl px-4 py-3 text-[#2b251a] placeholder-[#9a8c73] focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              <button className="bg-gradient-to-r from-[#d4af37] to-[#b38f00] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
            <script type="text/javascript">
              var infolinks_pid = 3445528;
              var infolinks_wsid = 0;
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>
        </article>
      </div>
    </div>
  );
}