"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

const tocItems = [
  { id: "intro", title: "介紹", emoji: "📖" },
  { id: "landmarks", title: "歷史地標", emoji: "⛪" },
  { id: "photography", title: "攝影攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function StMarksSquarePage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments?slug=st-marks-square");
      const data = await res.json();
      if (data.comments) setComments(data.comments);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "st-marks-square",
          author: "Visitor",
          content: newComment,
        }),
      });
      const data = await res.json();
      if (data.success && data.comment) {
        setComments((prev) => [data.comment, ...prev]);
        setNewComment("");
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        alert("留言失敗：" + (data.error || "未知錯誤"));
      }
    } catch (err) {
      setSubmitStatus("error");
      alert("提交失敗，請稍後再試");
      console.error("Failed to post comment", err);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="bg-gradient-to-br from-[#f4f6f9] to-[#e8eaed] backdrop-blur-xl border border-[#8b0000]/30 rounded-2xl p-5 w-60 shadow-2xl shadow-[#8b0000]/10">
          <h3 className="text-sm font-bold text-[#8b0000] mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-[#8b0000] to-[#b22222] text-white shadow-lg shadow-[#8b0000]/30"
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
          className="inline-flex items-center gap-2 text-[#8b0000] hover:text-[#1a2a3a] mb-8 transition-colors bg-[#f4f6f9] px-4 py-2 rounded-full hover:bg-[#e8eaed] border border-[#8b0000]/20"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12 border-b border-[#e5d4bc]">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8b0000] to-[#b22222] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-[#8b0000]/30">
            🦁 水上都市 · 世界遺產
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2a3a]">
            漫步歐洲最美的客廳：威尼斯聖馬可廣場
          </h1>
          <h2 className="text-xl text-[#8b0000] font-semibold mb-4">Piazza San Marco 深度一日遊全攻略</h2>
          <p className="text-[#94a3b8]">May 2026 · 作者：純粹旅人</p>
        </header>

        <div className="my-12 rounded-2xl overflow-hidden shadow-2xl shadow-[#8b0000]/20">
          <img
            src="/images/st-marks-square-hero.jpg"
            alt="威尼斯聖馬可廣場"
            className="w-full"
            onError={(e) => {
              e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg";
            }}
          />
        </div>
        <p className="text-center text-[#718096] text-sm mb-12">
          ▲ 曾被拿破崙由衷讚嘆為「歐洲最美客廳」的威尼斯核心 —— 聖馬可廣場
        </p>

        <article className="prose prose-lg max-w-none">
          <p id="intro" className="text-[#2c3e50] text-justify">
            如果說威尼斯是一條優雅游動的魚，那麼<strong>聖馬可廣場（Piazza San Marco）</strong>無疑就是這條魚最耀眼的眼睛。作為威尼斯唯一被稱為「Piazza」（廣場）的至高聖地（其他小廣場只能叫 Campi），這裡幾個世紀以來都是威尼斯共和國的政治、宗教與文化核心。當你搭乘水上巴士穿過拜占庭風格的建築群，腳步踏上這片鋪滿拜占庭碎石的廣闊廣場，四周環繞著金碧輝煌的教堂與哥德式宮殿，那種由海洋帝國堆砌出來的極致奢華，絕對會讓你屏住呼吸。
          </p>
          <p className="text-[#2c3e50] text-justify">
            今天這篇 Blog 就帶大家深度走入這個奇幻的水上都市核心，解鎖不可錯過的文藝藝術地標，並送上防淹水、防鴿子和百年咖啡館的超強自由行秘笈！
          </p>

          <h2 id="landmarks" className="text-[#1a2a3a] border-b-2 border-[#d4af37] pb-2 mt-10 mb-4">⛪ 水上帝國的榮耀：3 大必看歷史地標</h2>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">1. 聖馬可大教堂（St. Mark's Basilica）—— 黃金搭建的黃金聖殿</h3>
          <p className="text-[#2c3e50] text-justify">
            矗立在廣場東側的聖馬可大教堂，是東方拜占庭藝術與西方羅曼式建築融合的巔峰之作。教堂頂部擁有五個巨大的洋蔥頭穹窿，而最讓人驚嘆的是它內部和外牆頂部貼滿了數不清的純金馬賽克壁畫，總面積高達 8000 平方米！當陽光透過窗戶灑進來，整座大教堂內部金光閃閃，因此它也被浪漫地稱為「黃金大教堂」（Chiesa d'Oro）。
          </p>

          <div className="my-8">
            <img
              src="/images/stmark-basilica-domes.jpg"
              alt="聖馬可大教堂外觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 聖馬可大教堂的金色穹頂在亞德里亞海的陽光下熠熠生輝
            </p>
          </div>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">2. 總督宮（Doge's Palace）—— 威尼斯最高權力的粉紅宮殿</h3>
          <p className="text-[#2c3e50] text-justify">
            緊鄰大教堂的是歷代威尼斯總督的府邸 —— 總督宮。這座建築非常獨特，外牆採用了粉紅色和白色的大理石，拼貼出精緻的幾何圖案，下層則是優雅的哥德式拱廊。在總督宮的後方，連接了惡名昭彰的監獄，而那條橫跨在運河上、無數戀人慕名而來的<strong>「嘆息橋」（Bridge of Sighs）</strong>，正隱藏於此。當年死囚在走過這條封閉的橋時，透過小窗看最後一眼美麗的威尼斯，總會發出絕望的嘆息，因而得名。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1200&q=80"
              alt="嘆息橋與貢多拉"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 嘆息橋是威尼斯最浪漫也最憂傷的建築，無數戀人在橋下許下誓言
            </p>
          </div>

          <h3 className="text-[#2c3e50] text-xl font-semibold mt-8">3. 聖馬可鐘樓（Campanile di San Marco）—— 威尼斯的紅色燈塔</h3>
          <p className="text-[#2c3e50] text-justify">
            在廣場中央拔地而起、高達 98.6 米的紅色磚造鐘樓，是威尼斯無可爭議的最高地標。它在古代曾充當照亮海上船隻的燈塔。強烈建議乘搭電梯登上鐘樓頂部！站在觀景台上，你可以毫無遮擋地俯瞰整座威尼斯主島錯落有致的紅磚屋頂、交織如網的運河，以及遠處蔚藍的亞德里亞海，美得讓人心醉。
          </p>

          <div className="bg-[#fdfaf2] border-l-4 border-[#d4af37] p-6 my-10 rounded-r-lg">
            <h4 className="text-[#8b0000] font-bold mb-3 text-xl">☕ 文藝朝聖：在全歐洲最古老的「花神咖啡館」聽一場露天交響樂</h4>
            <p className="text-[#2c3e50] mb-4">
              位於廣場行政官邸拱廊下的 <strong>花神咖啡館 (Caffè Florian)</strong>，創立於 1720 年，是全歐洲歷史最悠久的咖啡館。這裡曾是海明威、拜倫、卡薩諾瓦等無數文學巨匠最流連忘返的地方。雖然在這裡坐下喝一杯咖啡價格不菲（包含每人約 6 歐元的音樂費），但當老牌樂隊在廣場上優雅地拉起小提琴，看著眼前的聖馬可大教堂與飛鴿，那一刻你買下的是幾個世紀沉澱下來的浪漫威尼斯時光。
            </p>
          </div>

          <h2 id="photography" className="text-[#1a2a3a] border-b-2 border-[#d4af37] pb-2 mt-10 mb-4">📸 攝影師私藏：夢幻倒影與黃金藍調時刻</h2>
          <p className="text-[#2c3e50] text-justify">
            由於威尼斯特殊的地理位置，當遇到大潮（Aqua Alta）或者大雨時，聖馬可廣場的水位往往會上升，在廣場上形成一層淺淺的積水。這時候千萬別沮喪！<strong>這反而是攝影師夢寐以求的黃金時刻。</strong> 帶上一雙防水靴，在日落後的「藍調時刻（Blue Hour）」來到廣場，平靜的水面會像一面巨大的天空之鏡，將金黃色的聖馬可大教堂與路燈完美倒影在水面上，拍出來的照片如夢似幻，彷彿魔幻現實主義的電影劇場。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&q=80"
              alt="威尼斯夜景與運河"
              className="w-full rounded-2xl"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80";
              }}
            />
            <p className="text-center text-[#718096] text-sm mt-4 mb-8">
              ▲ 威尼斯的藍調時刻，水面的倒影如夢似幻
            </p>
          </div>

          <div className="bg-[#1a2a3a] text-[#f8fafc] p-6 my-10 rounded-xl" id="tips">
            <h3 className="text-[#d4af37] font-bold mb-4 text-xl">💡 聖馬可廣場 旅遊實用小貼士 (Travel Tips)</h3>
            <ul className="space-y-3 text-[#f8fafc]">
              <li><strong>絕對不要在廣場餵鴿子（嚴厲罰款）：</strong>廣場上雖然有成千上萬隻鴿子，但威尼斯政府為了保護古蹟免受鳥糞侵蝕，已經<strong>嚴格立法禁止餵飼鴿子</strong>！一旦被警察發現，會面臨高達數百歐元的鉅額罰款。另外，也要小心手裡的食物或雪糕，這裡的鴿子和海鷗非常兇猛，隨時會從你手中搶走食物。</li>
              <li><strong>防洪警報須知：</strong>如果是在秋冬季節（10月至次年2月）前往，遇到大潮時廣場會被水淹。不過不用擔心，市政府會迅速在廣場上搭建臨時的高架木棧道（Walkways）供遊客步行，記得出發前下載 "Hi!Tide Venice" App 查看即時水位。</li>
              <li><strong>參拜服裝與大件行李限制：</strong>進入聖馬可大教堂同樣有嚴格的服裝檢查（不能露肩、露膝）。另外，<strong>大教堂內嚴禁攜帶任何大背包或手提行李箱</strong>，必須提前去教堂附近的免費行李寄存處寄存才能排隊進場。</li>
              <li><strong>交通方式：</strong>在威尼斯主島完全不能開車。最方便的方法是搭乘威尼斯 ACTV 水上巴士（Vaporetto）1號、2號或 5.1 號線，在 <strong>San Marco Vallaresso</strong> 或 <strong>San Zaccaria 站</strong> 下船，步行 2 分鐘即可直達廣場。</li>
            </ul>
          </div>

          <h2 className="text-[#1a2a3a] border-b-2 border-[#d4af37] pb-2 mt-10 mb-4">📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">📍 地址</span>
              <p className="text-[#2c3e50] text-sm mt-1">Piazza San Marco, Venice, Italy</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">🕐 開放時間</span>
              <p className="text-[#2c3e50] text-sm mt-1">大教堂 10:00-17:00 / 鐘樓 9:00-19:00</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">💰 費用</span>
              <p className="text-[#2c3e50] text-sm mt-1">廣場免費 / 大教堂免費 / 鐘樓 12歐元</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">⭐ 評分</span>
              <p className="text-[#2c3e50] text-sm mt-1">4.7/5.0（52,891 評論）</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">🚤 交通</span>
              <p className="text-[#2c3e50] text-sm mt-1">水上巴士 San Marco Vallaresso 站</p>
            </div>
            <div className="bg-[#f4f6f9] rounded-xl p-4 border border-[#e5d4bc]">
              <span className="text-[#8b0000] font-bold">⏱️ 建議遊覽</span>
              <p className="text-[#2c3e50] text-sm mt-1">3-4小時</p>
            </div>
          </div>

                              <p className="text-[#2c3e50]">{comment.content}</p>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="space-y-3">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="輸入你的留言..."
                rows={3}
                className="w-full bg-white border border-[#e5d4bc] rounded-xl px-4 py-3 text-[#2c3e50] placeholder-[#94a3b8] focus:outline-none focus:border-[#8b0000] transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting || !newComment.trim()}
                className="bg-gradient-to-r from-[#8b0000] to-[#b22222] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "提交中..." : "提交留言"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-600 font-medium">✅ 留言成功提交！</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 font-medium">❌ 提交失敗，請稍後再試</p>
              )}
            </form>
          </div>
        </article>

        <footer className="text-center mt-16 py-8 border-t border-[#e5d4bc]">
          <p className="text-[#8b0000] font-bold">👇 留言分享：你更想在晴天和愛人坐著貢多拉吹海風，還是渴望遇上一場大潮、在聖馬可廣場拍下一張浪漫的「天空之鏡」呢？</p>
        </footer>
      </div>
    

        {/* Comments Section */}
        <Comments slug="st-marks-square" />
</div>
  );
}
