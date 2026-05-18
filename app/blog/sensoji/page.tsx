"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "📖" },
  { id: "kaminarimon", title: "雷門", emoji: "🏮" },
  { id: "nakamise", title: "仲見世通", emoji: "🍡" },
  { id: "hondo", title: "本堂", emoji: "⛩️" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const reliableImages = [
  "https://photo53.com/img/arashiyama23.jpg",
  "https://photo53.com/img/togetsukyou42.jpg",
  "https://photo53.com/img/arashiyama1.jpg",
  "https://photo53.com/img/chikurin7.jpg",
  "https://photo53.com/img/chikurin1.jpg",
];

export default function SensojiPage() {
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
    <div className="min-h-screen bg-[#fbfbf9] text-[#2c3e50]">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#b8975a]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#b8975a]/10">
          <h3 className="text-sm font-bold text-[#b8975a] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#b8975a] to-[#d4a574] text-white shadow-lg shadow-[#b8975a]/30"
                      : "text-[#2c3e50]/70 hover:text-[#1a2a3a] hover:bg-[#e8eaed]"
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
          className="inline-flex items-center gap-2 text-[#b8975a] hover:text-[#1a2a3a] mb-8 transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#b8975a]/20"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#b8975a] to-[#d4a574] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#b8975a]/30">
            🏮 東京寺廟
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            東京最古老寺廟：淺草寺（Sensō-ji）
          </h1>
          <h2 className="text-xl text-[#b8975a] font-semibold mb-4">深度一日遊全攻略</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#b8975a]/20">
          <img
            src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80"
            alt="淺草寺雷門"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          ▲ 寫著「雷門」二字的巨大紅燈籠，是無數旅客對東京的第一印象
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify">
            如果想在現代化的東京尋找一抹傳統的江戶風情，<strong>淺草寺（Sensō-ji）</strong>絕對是不可錯過的第一站。創建於公元 628 年的淺草寺，是東京都內最古老的寺廟。這裡常年香火鼎盛，無論是莊嚴的佛教建築，還是充滿下町活力的商店街，都讓人彷彿穿越時空，回到了數百年前的江戶時代。
          </p>
          <p className="text-[#2c3e50] text-justify">
            今天這篇Blog就為大家整理了淺草寺的經典必看亮點、傳統參拜與求籤流程，帶你玩轉這個東京最經典的地標！
          </p>

          <h2 id="kaminarimon" className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">🗺️ 淺草寺經典散策路線：從雷門走到本堂</h2>
          
          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">1. 第一站：震撼力十足的「雷門」與巨大燈籠</h3>
          <p className="text-[#2c3e50] text-justify">
            淺草寺的正門就是大名鼎鼎的「雷門」（正式名稱為風雷神門）。門的右側供奉著風神，左側則是雷神。而正中央懸掛著那個重達 700 公斤的巨大紅燈籠，是由松下電器（Panasonic）創辦人松下幸之助在病癒後奉納的。<strong>拍照小貼士：</strong>走到燈籠正下方抬頭看，底部雕刻了一條栩栩如生的飛龍，非常精緻！
          </p>

          <h3 id="nakamise" className="text-[#2c3e50] text-xl font-semibold mt-8">2. 第二站：好吃好逛的「仲見世通」商店街</h3>
          <p className="text-[#2c3e50] text-justify">
            穿過雷門，迎接你的是一條長約 250 米的「仲見世通」。這是日本最古老的商店街之一，兩旁開滿了售賣傳統手工藝品、紀念品以及各式江戶小食的店舖。在這裡，你可以品嚐到現烤的<strong>人形燒</strong>、香脆的<strong>仙貝</strong>以及色彩繽紛的<strong>吉備糰子</strong>。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80"
              alt="仲見世通商店街熱鬧景象"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 仲見世通兩旁店鋪林立、人山人海的熱鬧景象
            </p>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80"
              alt="仲見世通與寶藏門"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 宏偉的寶藏門與左側高聳的五重塔互相輝映
            </p>
          </div>

          <h3 id="hondo" className="text-[#2c3e50] text-xl font-semibold mt-8">3. 第三站：本堂參拜與常香爐的神秘力量</h3>
          <p className="text-[#2c3e50] text-justify">
            穿過第二道大門「寶藏門」後，就會看到供奉本尊聖觀音菩薩的「本堂」（大殿）。在進入本堂前，你會經過一個煙霧繚繞的<strong>常香爐</strong>。日本信眾相信，將香爐排出的煙霧撥到自己身上，能夠驅除百病、帶來智慧與健康。來到這裡記得學著當地人，把福氣「撥」向自己喔！
          </p>

          <div className="bg-[#f4f6f9] border-l-4 border-[#1a2a3a] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#b8975a] font-bold mb-3 text-xl">🔮 實用教學：淺草寺「觀音靈籤」求籤步驟</h4>
            <p className="text-[#2c3e50] mb-4">
              淺草寺的「觀音靈籤」非常有名，據說這裡抽到「凶」的機率相對比較高，但不用擔心，這才是最真實的指引！求籤流程如下：
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[#2c3e50]">
              <li>在心裡默默向觀音菩薩許願、詢問你想請教的事情。</li>
              <li>投入 100 日圓硬幣到油錢箱。</li>
              <li>拿起木製籤筒，誠心搖晃直到其中一根籤「御籤」從小孔掉出。</li>
              <li>看清籤上的數字，到對應的小木櫃抽屜中拿取你的籤詩。</li>
              <li><strong>如果是吉：</strong>把喜悅帶回家；<strong>如果是凶：</strong>別擔心！將籤詩摺好，綁在寺廟專用的鐵架上，代表將厄運留在寺廟，由神明為你化解。</li>
            </ol>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1547425260-76bc27fb7f26?w=1200&q=80"
              alt="淺草寺本堂內陣金箔裝飾"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 供奉聖觀音菩薩的本堂內陣，金箔天花與精緻佛具令人嘆為觀止
            </p>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
              alt="仲見世通人形燒現烤美食"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-155864-2455-103a1a64d809?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 仲見世通必吃的現烤人形燒，是淺草最具人氣的江戶小吃
            </p>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">🗼 隱藏加碼：新舊交織的絕佳拍照位</h2>
          <p className="text-[#2c3e50] text-justify">
            在淺草寺境內，你可以拍到一個非常奇妙的畫面 —— 古色古香的<strong>五重塔</strong>與現代科技感十足的<strong>東京晴空塔（Tokyo Skytree）</strong>同框！這種歷史與現代在空中交匯的強烈對比，是淺草獨有的浪漫景致，千萬不要錯過這個構圖。
          </p>

          <div className="bg-[#1a2a3a] text-[#f8fafc] p-6 my-10 rounded-xl" id="tips">
            <h3 className="text-[#b8975a] font-bold mb-4 text-xl">💡 淺草寺 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3 text-[#f8fafc]">
              <li><strong>開放時間：</strong>淺草寺境內是 24 小時免費開放的。不過本堂的開門時間為每日早上 6:00（10月至3月為6:30）至傍晚 17:00。</li>
              <li><strong>強烈推薦夜遊：</strong>每天日落後至晚上 23:00，雷門、寶藏門、五重塔和本堂都會亮起金黃色的燈光。此時遊客散去，散步起來非常舒服，拍起照來更有一種神祕而莊嚴的美感！</li>
              <li><strong>交通方式：</strong>搭乘東京地下鐵銀座線、都營淺草線或東武晴空塔線至「淺草站」，步行約 5 分鐘即可抵達雷門。</li>
            </ul>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#b8975a] pb-2 mt-10 mb-4">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">📍 地址</span>
              <p className="text-[#2c3e50] text-sm mt-1">2-3-1 Asakusa, Taito City, Tokyo</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">🕐 開放時間</span>
              <p className="text-[#2c3e50] text-sm mt-1">境內24小時 / 本堂 6:00-17:00</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">💰 費用</span>
              <p className="text-[#2c3e50] text-sm mt-1">免費</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">⭐ 評分</span>
              <p className="text-[#2c3e50] text-sm mt-1">4.6/5.0（89,432 評論）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">🚇 交通</span>
              <p className="text-[#2c3e50] text-sm mt-1">東京Metro 淺草站 步行5分鐘</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#b8975a] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2c3e50] text-sm mt-1">1-2小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-[#f4f6f9] border border-[#b8975a]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#b8975a] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#2c3e50] text-lg mb-4">
              👇 留言分享：你來淺草寺求過籤嗎？抽到的是「吉」還是「凶」呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-[#e5d4bc] rounded-xl px-4 py-3 text-[#2c3e50] placeholder-[#94a3b8] focus:outline-none focus:border-[#b8975a] transition-colors"
              />
              <button className="bg-gradient-to-r from-[#b8975a] to-[#d4a574] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <script type="text/javascript">
              {`var infolinks_pid = 3445528; var infolinks_wsid = 0;`}
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>
        </article>

        <footer className="text-center mt-16 py-8 border-t border-[#e5d4bc]">
          <p className="text-[#b8975a] font-bold">👇 留言分享：如果去巴黎，你最想和誰一起在鐵塔下看一場整點的鑽石閃爍騷呢？</p>
        </footer>
      </div>
    </div>
  );
}