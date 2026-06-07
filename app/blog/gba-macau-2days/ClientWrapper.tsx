"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "🌆" },
];

export default function MacauPage() {
  const [activeSection, setActiveSection] = useState("day1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-purple-950/20 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-5 w-56 shadow-2xl shadow-purple-500/10">
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
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/30"
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/30">
            🌴 大灣區退休遊記
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
            澳門2天葡韻慢活之旅
          </h1>
          <h2 className="text-xl text-purple-400 font-semibold mb-4">過大海 · 慢慢行 · 歎世界</h2>
          <p className="text-zinc-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1541599468348-e96984315921?w=1200&q=80"
          alt="澳門大三巴夜景"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-purple-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 澳門夜色，葡式建築與霓虹燈光相映成趣
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* 引言 */}
          <p className="text-xl leading-relaxed text-gray-200 mb-8">
            過大海！呢個係老一輩香港人對去澳門嘅稱呼。澳門雖然細細，但係幾百年中西文化交融，令呢個地方有住獨一無二嘅魅力。對我呢個退休人士來說，澳門最大嘅吸引力係——免費發財巴來回、免費酒店飲品、性價比超高嘅葡國菜！
          </p>
          <p className="text-gray-300 mb-8">
            今次我用兩日一夜，由第一日行到第二日，帶你睇吓真正嘅葡韻風情！
          </p>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-3xl font-bold text-purple-400 mt-16 mb-8 flex items-center gap-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">1</span>
            第一天：港澳碼頭 · 議事亭前地 · 大三巴
          </h2>

          <h3 className="text-xl font-bold text-purple-300 mb-4">⛴️ 早上：由香港出發</h3>
          <p className="text-gray-300 mb-6">
            朝早九點，我響香港港澳碼頭登上高速船。呢個係我最鍾意嘅交通方式，一個鐘頭就到，舒舒服服咁睇住大海發呆。船上有免費Wi-Fi，我刷咗一陣手機就到咗。
          </p>
          <p className="text-gray-300 mb-8">
            到達澳門外港碼頭，我一出關口就見到好多娛樂場嘅發財巴。我選擇咗葡京人嘅免費巴士，因為今晚就入住呢間酒店。
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🏛️ 上午：議事亭前地</h3>
          <p className="text-gray-300 mb-6">
            放低行李之後，我坐發財巴去議事亭前地。呢度係澳門最核心嘅旅遊區域！廣場地面用黑白碎石鋪成波浪形圖案，兩旁係葡式建築，充滿濃郁嘅歐陸風情。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80"
              alt="澳門議事亭前地"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 議事亭前地的波浪形石板路，係澳門最具標誌性嘅畫面
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我響廣場影咗一陣相，然後行去仁慈堂大樓——呢間係1569年建成，係澳門最古老嘅慈善機構，鵝黃色外牆非常靚。
          </p>
          <p className="text-gray-300 mb-8">
            然後轉入玫瑰聖母堂，呢間係1587年建成嘅巴洛克式教堂，入面保存好多宗教藝術品。我响門口畫咗個十字，感受吓莊嚴肅穆嘅氣氛。
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">⛪ 午餐：手信街掃街</h3>
          <p className="text-gray-300 mb-6">
            由議事亭前地去大三巴，係一條出名嘅手信街。我一路行一路試食——杏仁餅、牛肉乾、豬肉乾......試食試到飽！
          </p>
          <p className="text-gray-300 mb-6">
            我响咀香園買咗幾盒杏仁餅做手信，RMB 30一盒，唔算貴。仲響條街度見到好多遊客提住大包小包，大家都係為咗澳門特色美食而嚟。
          </p>
          <p className="text-gray-300 mb-8">
            午餐就响手信街旁邊嘅茶餐廳解決，叫咗個豬扒包，炭烤香味，非常好味！
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🏛️ 下午：大三巴牌坊</h3>
          <p className="text-gray-300 mb-6">
            食完晏，我終於去到今次旅程我最期待嘅地方——大三巴牌坊！呢度係澳門最標誌性嘅建築，1637年建成，經歷過三次大火，僥倖保存咗正面石壁。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590735213920-9f4c5e16f1f5?w=1200&q=80"
              alt="澳門大三巴牌坊"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 大三巴牌坊，澳門最具代表性嘅歷史建築
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我響牌坊正面影咗好耐，嗰三層浮雕真係巧奪天工——有耶穌會、有聖保祿學院、有聖母......每一個細節都值得慢慢欣賞。
          </p>
          <p className="text-gray-300 mb-6">
            然後我去咗地下墓穴，存放住殉道者遺骸，免費參觀。工作人員話，下午三點係最佳拍攝時間，太陽光會照入牌坊，影出嚟特別靚。
          </p>
          <p className="text-gray-300 mb-8">
            大三巴旁邊有一條粉色小巷——戀愛巷，非常適合打卡！我影咗好多相，感覺自己都後生咗幾年。
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🌙 晚上：葡京人check-in · 免費發財巴</h3>
          <p className="text-gray-300 mb-6">
            夜晚六點，我回葡京人check-in。呢間係2021年新開嘅酒店，設施新淨，性價比超高，一晚只係MOP 400-800。
          </p>
          <p className="text-gray-300 mb-6">
            放低行李之後，我坐發財巴去路氹城睇夜景。永利皇宮嘅纜車、威尼斯人嘅天空、巴黎人嘅鐵塔......響免費發財巴上已經可以睇到靚景！
          </p>
          <p className="text-gray-300 mb-8">
            我響永利皇宮門口免費搭咗纜車，俯瞰表演湖嘅音樂噴泉，雖然有啲凍，但係非常浪漫！
          </p>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-3xl font-bold text-purple-400 mt-16 mb-8 flex items-center gap-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">2</span>
            第二天：氹仔舊城 · 官也街 · 滿載而歸
          </h2>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🏘️ 早上：氹仔舊城區</h3>
          <p className="text-gray-300 mb-6">
            朝早八點，我已經起身去氹仔舊城區。呢度係我今次旅程最驚喜嘅發現！保留大量葡式建築，彩色外牆、瓷磚陽台、碎石小路......行行下，彷彿置身葡萄牙小鎮。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1200&q=80"
              alt="澳門氹仔舊城葡式建築"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 氹仔舊城的葡式建築，色彩繽紛，係打卡聖地
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我先去咗龍環葡韻，五幢葡萄牙式別墅，鵝黃、翠綠、粉紅......顏色靚到不得了！呢度現時係住宅式博物館，門票只係MOP 5。
          </p>
          <p className="text-gray-300 mb-8">
            然後行去嘉模聖母堂，氹仔唯一嘅天主教堂，鵝黃色外牆響陽光下特別耀眼。我響附近嘅氹仔花園坐咗一陣，睇住老人家晨運，感受澳門慢活嘅生活節奏。
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🍜 午餐：官也街掃街</h3>
          <p className="text-gray-300 mb-6">
            十一點，我行去官也街。呢度係氹仔最繁華嘅小食街，一條街可以試晒所有澳門美食！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="澳門葡撻"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 澳門葡撻，外脆內嫩，焦糖香味令人回味無窮
            </p>
          </div>

          <p className="text-gray-300 mb-6">
            我先去安德魯餅店買咗兩個葡撻，MOP 10一個，外脆內嫩，焦糖香味令人回味無窮！然後去大利豬扒包叫咗個炭烤豬扒包，MOP 30-40，非常好味！
          </p>
          <p className="text-gray-300 mb-6">
            最後去莫義記食咗個木糠布甸，呢間係1935年老字號，木糠布甸創始店，MOP 25一杯，奶味香濃，入口即溶！
          </p>
          <p className="text-gray-300 mb-8">
            官也街掃街掃到我捧住個肚，行都行唔郁，真係太滿足！
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🎰 下午：路氹城最後巡禮</h3>
          <p className="text-gray-300 mb-6">
            午餐之後，我坐發財巴去路氹城最後巡禮。威尼斯人嘅人造天空、倫敦人嘅英式風情、巴黎人嘅縮小版鐵塔......全部都可以免費打卡！
          </p>
          <p className="text-gray-300 mb-6">
            我响威尼斯人坐咗貢多拉船，MOP 150一位，一邊聽住船夫唱歌，一邊響人造運河上面飘流，彷彿真係去咗意大利！
          </p>
          <p className="text-gray-300 mb-8">
            然後响巴黎人門口影咗張相，縮小版鐵塔雖然冇真嘅咁壯觀，但係夜景一樣靚！如果想省錢，其實响巴黎人花園可以免費影到鐵塔全景。
          </p>

          <h3 className="text-xl font-bold text-purple-300 mb-4">🚄 下午：回程</h3>
          <p className="text-gray-300 mb-6">
            下午四點，我坐發財巴去碼頭，搭五點鐘嘅船回香港。兩日一夜嘅澳門之旅，正式完美結束。
          </p>
          <p className="text-gray-300 mb-8">
            返到香港，我提住幾袋手信——杏仁餅、牛肉乾、葡國雞罐頭......全部都係澳門特色！下次，我會再去路環睇黑沙灘，或者去澳門半島睇東望洋燈塔。
          </p>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">📝 遊記總結</h3>
            <p className="text-gray-300 mb-4">
              兩日一夜，我由港澳碼頭行到大三巴，由氹仔舊城行到路氹城......每一個地方都有佢獨特嘅葡韻風情。
            </p>
            <p className="text-gray-300 mb-4">
              最難忘嘅一定係官也街嘅葡撻——外脆內嫩，焦糖香味令人回味無窮，一試就愛上！
            </p>
            <p className="text-gray-300 mb-4">
              總預算大約 HK$1,500-2,500，包含船票、住宿、餐飲、手信。如果用發財巴，省返唔少交通費！
            </p>
            <p className="text-gray-300">
              澳門係一個好值得慢慢品味嘅地方，下次一定再嚟！
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-purple-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              👇 你去過澳門嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}