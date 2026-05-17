"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🎋" },
  { id: "bamboo", title: "竹林小徑", emoji: "🎍" },
  { id: "nomiya", title: "野宮神社", emoji: "⛩️" },
  { id: "bridge", title: "渡月橋", emoji: "🌉" },
  { id: "train", title: "小火車", emoji: "🚂" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const arashiyamaImages = [
  "https://photo53.com/img/chikurin15.jpg",
  "https://photo53.com/img/chikurin7.jpg",
  "https://photo53.com/img/chikurin1.jpg",
  "https://photo53.com/img/togetsukyou42.jpg",
  "https://photo53.com/img/arashiyama1.jpg",
];

export default function ArashiyamaPage() {
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
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#4a7c59]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#4a7c59]/10">
          <h3 className="text-sm font-bold text-[#4a7c59] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white shadow-lg shadow-[#4a7c59]/30"
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
          className="inline-flex items-center gap-2 text-[#4a7c59] hover:text-[#1a2a3a] mb-8 transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#4a7c59]/20"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#4a7c59]/30">
            🎋 京都大自然
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            京都避世仙境：嵐山竹林小徑
          </h1>
          <h2 className="text-xl text-[#4a7c59] font-semibold mb-4">深度散策！尋找那一抹翠綠與心靈寧靜</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#4a7c59]/20">
          <img
            src="https://photo53.com/img/chikurin15.jpg"
            alt="嵐山竹林小徑"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80";
            }}
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          ▲ 置身於被日本環境省評選為「環境省選定聲音風景100選」之一的嵯峨野竹林小徑
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify">
            如果想暫時遠離都市的喧囂，尋找一個能讓靈魂呼吸的地方，京都的<strong>嵐山（Arashiyama）</strong>絕對是首選。而在嵐山眾多美景當中，最令人心馳神往的，莫過於那條彷彿通往異次元世界的<strong>竹林小徑（Bamboo Grove）</strong>。當微風吹過，千萬竿翠竹隨風搖曳，發出沙沙的輕響，那一瞬間的空靈與療癒，真的能撫平所有的疲憊。
          </p>
          <p className="text-[#2c3e50] text-justify">
            今天這篇Blog就帶大家漫步這條傳說中的綠色隧道，並附上周邊必訪的經典路線與完美避開人潮的實用攻略！
          </p>

          <h2 id="bamboo" className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">🍃 嵐山散策：不可錯過的 3 大核心景點</h2>
          
          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">1. 嵯峨野竹林小徑 —— 走進大自然的綠色屏障</h3>
          <p className="text-[#2c3e50] text-justify">
            這條小徑長約 400 米，從天龍寺北側一直延伸到大河內山莊附近。道路兩旁長滿了挺拔筆直的野宮竹，它們高聳得幾乎遮天蔽日，把外界的光線過濾成溫和的淡綠色。<strong>心靈體驗：</strong>來到這裡不妨閉上眼睛，細心聆聽竹葉摩擦的聲音與竹竿撞擊的沉穩聲響，這裡可是被評為日本百大最想保留的聲音風景之一呢。
          </p>

          <div className="my-8">
            <img
              src="https://photo53.com/img/chikurin7.jpg"
              alt="嵐山竹林"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 晨光穿透兩側高聳入雲的翠綠竹林，一條筆直木欄杆小徑無限延伸的空靈畫面
            </p>
          </div>

          <h3 id="nomiya" className="text-[#2c3e50] text-xl font-semibold mt-8">2. 野宮神宮 —— 隱藏竹林中的結緣與學業聖地</h3>
          <p className="text-[#2c3e50] text-justify">
            順著竹林小徑前行，你會遇見一座精緻古樸的神社 —— <strong>野宮神社</strong>。這裏最出名的是它擁有全日本最古老、保留了樹皮的木造「黑木鳥居」。神社規模雖小，但香火極盛，這裡供奉的「野宮大黑天」據說祈求姻緣（良緣）超級靈驗；而一旁的「龜石」更傳說只要一邊撫摸一邊許願，願望在一年內就會實現！
          </p>

          <h3 id="bridge" className="text-[#2c3e50] text-xl font-semibold mt-8">3. 渡月橋 —— 飽覽嵐山山水畫卷</h3>
          <p className="text-[#2c3e50] text-justify">
            在進入竹林前或離開後，必定會經過這座跨越桂川的<strong>渡月橋</strong>。這座橋的名字非常浪漫，源於龜山天皇曾讚嘆月亮移動時就如同「月亮正在渡橋」一般。站在橋上，清澈的江水在腳下流淌，遠處是綿延不絕的嵐山山脈，春天賞櫻、夏天翠綠、秋天漫山紅葉、冬天銀裝素裹，四季皆美得像一幅潑墨山水畫。
          </p>

          <div className="my-8">
            <img
              src="https://photo53.com/img/togetsukyou42.jpg"
              alt="渡月橋"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 橫跨桂川的渡月橋，是嵐山最具代表性的風景明信片
            </p>
          </div>

          <div className="bg-[#f4f6f9] border-l-4 border-[#4a7c59] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#4a7c59] font-bold mb-4 text-xl">🚂 加碼體驗：嵯峨野觀光小火車 (Sagano Romantic Train)</h4>
            <p className="text-[#2c3e50] mb-4">
              來到嵐山，非常強烈推薦順道搭乘紅黃相間的「嵐山小火車」！這是一條沿著保津川溪谷行駛的復古鐵道，全長 7.3 公里。沿途你可以一邊吹著山風，一邊欣賞溪谷的奇岩怪石與急流。建議可以在「小火車嵐山站」下车，步行一分鐘就能無縫接軌直接進入竹林小徑！
            </p>
          </div>

          <div className="bg-[#4a7c59] text-white p-6 my-10 rounded-xl" id="tips">
            <h3 className="font-bold mb-4 text-xl">💡 嵐山竹林 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3">
              <li><strong>黃金防人潮時間：</strong>由於竹林小徑全天免費開放，這裡日校時間通常人山人海。如果想拍到完全冇人、極具禪意的空靈大片，唯一的秘诀就是<strong>清晨 7:30 之前抵達</strong>！這時候的晨光剛灑落，竹林散發著淡淡的霧氣，美得無法言喻。</li>
              <li><strong>順遊天龍寺：</strong>竹林小徑的起點就在世界文化遺產「天龍寺」的北門。建議可以購買天龍寺「曹源池庭園」的門票，欣賞完完美的借景枯山水園林後，直接從北門出站進入竹林，路線最順暢。</li>
              <li><strong>交通方式：</strong>從京都站出發最快的方法是搭乘 <strong>JR 山手/山陰本線（嵯峨野線）</strong> 至「嵯峨嵐山站」，出站步行約 10-15 分鐘即可抵達竹林。</li>
            </ul>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#4a7c59] pb-2 mt-10 mb-4">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">📍 地址</span>
              <p className="text-[#2c3e50] text-sm mt-1">Kyoto, Ukyo Ward, Arashiyama</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">🕐 開放時間</span>
              <p className="text-[#2c3e50] text-sm mt-1">24小時開放（免費）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">💰 費用</span>
              <p className="text-[#2c3e50] text-sm mt-1">竹林免費 / 天龍寺 ¥500</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">⭐ 評分</span>
              <p className="text-[#2c3e50] text-sm mt-1">4.7/5.0（56,321 評論）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">🚇 交通</span>
              <p className="text-[#2c3e50] text-sm mt-1">JR 嵯峨嵐山站 步行10分鐘</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#4a7c59] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2c3e50] text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-[#f4f6f9] border border-[#4a7c59]/30 rounded-2xl p-6 my-10">
            <h3 className="text-[#4a7c59] font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-[#2c3e50] text-lg mb-4">
              👇 留言分享：你喜歡清晨幽靜的綠色竹林，還是秋天滿山轟烈的大紅楓葉呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white border border-[#e5d4bc] rounded-xl px-4 py-3 text-[#2c3e50] placeholder-[#94a3b8] focus:outline-none focus:border-[#4a7c59] transition-colors"
              />
              <button className="bg-gradient-to-r from-[#4a7c59] to-[#6b9b7a] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
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
      </div>
    </div>
  );
}
