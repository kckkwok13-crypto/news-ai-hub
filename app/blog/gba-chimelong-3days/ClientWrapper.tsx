"use client"

import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "prepare", title: "行前準備", emoji: "⚙️" },
  { id: "day1", title: "第一天", emoji: "🌅" },
  { id: "day2", title: "第二天", emoji: "🌆" },
  { id: "day3", title: "第三天", emoji: "🌴" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function ChimelongPage() {
  const [activeSection, setActiveSection] = useState("prepare");

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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-56 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
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
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50"
        >
          ← 返回 Blog
        </Link>

        {/* Top Banner */}
        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-8 mb-8 text-center border-b-4 border-amber-500 shadow-2xl shadow-blue-500/20">
          <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            銀齡相伴 ‧ 奇幻度假
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-slate-100 leading-relaxed">
            琴海相依：一個退休人與太太的橫琴長隆三日奇幻慢活隨筆
          </h1>
          <p className="text-slate-400 italic">二零二六年盛夏 ‧ 偕老同遊海洋王國記述</p>
        </div>

        {/* Hero Image */}
        <img
          src="/images/chimelong-hotel.jpg"
          alt="長隆橫琴灣酒店"
          className="w-full rounded-2xl mb-6 shadow-2xl shadow-blue-500/20"
        />
        <p className="text-center text-slate-500 text-sm mb-10">
          長隆橫琴灣酒店的專屬運河，為退休人士提供了一份從容不迫的尊貴與舒泰
        </p>

        {/* Ad Banner - After Hero */}
        <div className="my-8 flex justify-center">
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '728px', height: '90px' }}
            data-ad-client="ca-pub-4745583996243741"
            data-ad-slot="7843298765"
            data-ad-format="auto"
            data-full-width-responsive="true" />
        </div>

        {/* Intro Quote */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border-l-4 border-blue-600 pl-6 pr-4 py-4 rounded-r-xl mb-10 italic">
          <p className="text-slate-300 text-lg leading-relaxed">
            「大半生都在為家庭、為工作忙忙碌碌，退下火線後，最想做嘅，就是牽著太太嘅手，補回當年未曾好好享受嘅浪漫。今次不帶兒孫，就我同太太兩個人，在橫琴嘅蔚藍世界裡放慢腳步，做回一對悠閒嘅老少年。」
          </p>
        </div>

        {/* Opening Paragraph */}
        <p className="text-lg text-slate-300 leading-loose mb-8 text-justify">
          常聽老朋友講，珠海橫琴長隆只是年輕人同小學生去嘅遊樂場，阿公阿嫲去到實會散骨。其實不然。只要調對了節奏，避開那些驚險嘅過山車，這裏擁有全球最頂級嘅室內巨型水族館與煙花匯演，是一個極之適合我同太太漫步、歎冷氣、看珍奇海洋生物嘅度假勝地。這趟三日兩夜嘅橫琴長隆浪漫行，我帶著老伴，一路上邊走邊歇，在奇幻嘅藍色夢境裡，過得無比舒泰。
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* ===== 行前準備 ===== */}
          <h2 id="prepare" className="text-2xl font-bold text-blue-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            ⚙️ 行前籌劃：老夫老妻的「無痛」接駁智慧
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            老夫妻出門，第一講求不搬行李、不折騰。交通方面，我們選擇由香港口岸坐<strong className="text-blue-400">港珠澳大橋「金巴」直達珠海口岸</strong>。過關後，我們不折騰轉乘公共巴士，直接喺口岸<strong className="text-blue-400">乘搭的士直奔橫琴長隆</strong>（車程大約半小時，收費合理）。橫琴嘅馬路修得極之平坦寬廣，一路上看著沿海風光，太太心情好，我也省心不少。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            今次嘅落腳點，我特意為太太挑選了樂園核心的<strong className="text-blue-400">長隆橫琴灣酒店</strong>（或是性價比極高、有專用通道嘅<strong className="text-blue-400">長隆企鵝酒店</strong>）。橫琴灣酒店充滿了海豚同海洋宮殿風格，最貼心嘅是它擁有一條<strong className="text-blue-400">私家景觀運河</strong>！住客可以優雅地坐著免排隊嘅接駁遊艇，順著運河直接漂流到海洋王國大門口，完全免去了長途步行的勞累。酒店客房寬敞，床鋪舒適，早晨還能看到遠處海天一色的景致，讓太太一進房就讚不絕口。
          </p>

          <div className="my-10">
            <img
              src="/images/chimelong-hotel.jpg"
              alt="長隆橫琴灣酒店"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              長隆橫琴灣酒店的專屬運河，為退休人士提供了一份從容不迫的尊貴與舒泰
            </p>
          </div>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 第一天 ===== */}
          <h2 id="day1" className="text-2xl font-bold text-blue-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌅 第一天：漫步雨林大通道、海象劇場與極致海洋夜生活
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            第一天午後，我們經由住客專道優雅進園。一踏入樂園，巨大的<strong className="text-blue-400">海洋大街天幕</strong>便展現出繽紛璀璨的深海魚群動畫，音效震撼，太太立馬興奮得像個小女孩般拿手機拍個不停。我們不急著去排隊，而是順著平緩的步道慢步至<strong className="text-blue-400">海象山與海獅劇場</strong>。劇場的座椅排列妥當，坐在陰涼的看台上，看著體型龐大卻聰明絕頂的海象海獅跟著音樂做掌聲、敬禮，逗得我和太太哈哈大笑，旅途嘅疲勞一掃而空。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            傍晚時分，樂園內最熱鬧嘅「夜生活」上演了。我們沒有錯過精彩的<strong className="text-blue-400">海洋夜光大巡遊</strong>，一輛輛亮滿萬盞霓虹燈的巨型海洋花車在眼前駛過，氣氛歡快。隨後我們提早來到橫琴海中心湖畔，靜靜等待壓軸的<strong className="text-blue-400">「海洋保衛戰」無人機與煙花匯演</strong>。當數百架無人機在夜空中拼湊出巨型鯨鯊，炫目的煙花在頭頂轟然綻放，配合水上飛人嘅高空特技，整片夜空被點染得金碧輝煌。我輕輕攬著太太嘅肩膀，在煙火倒影下，看著她眼裡的感動，這份浪漫，大半生未曾有過。
          </p>

          <div className="my-10">
            <img
              src="/images/chimelong-fireworks.jpg"
              alt="長隆煙花匯演"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              海洋王國的夜間煙花匯演，在璀璨花火下與太太共度浪漫時光
            </p>
          </div>

          {/* ===== 第二天 ===== */}
          <h2 id="day2" className="text-2xl font-bold text-blue-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌆 第二天：鯨鯊館的深海靜謐、企鵝歎茶與橫琴在地夜市
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            第二天的清晨，自然醒來。這天的重頭戲是樂園的靈魂 —— <strong className="text-blue-400">鯨鯊館</strong>。一走進館內，冷氣充足，光線幽暗，彷彿隔絕了外面的世界。當我們站在那面曾榮獲世界紀錄、高達十多米的<strong className="text-blue-400">巨型亞克力玻璃觀賞窗</strong>前，看著四條身軀龐大、性格溫柔的鯨鯊率領著成千上萬隻魔鬼魚與藍色魚群在眼前緩緩游過，那種深海嘅靜謐與神聖，讓人心靈徹底平靜下來。我和太太在窗前的長椅上坐了足足大半個小時，靜靜地看著這幅活生生的海底畫卷，身心都得到了極大的療癒。
          </p>

          <div className="my-10">
            <img
              src="/images/chimelong-whaleshark.jpg"
              alt="鯨鯊館"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              鯨鯊館的蔚藍神聖光影，是整趟橫琴長隆旅程中最療癒、最洗滌心靈的一幕
            </p>
          </div>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            下午，我帶太太前往企鵝館旁邊的<strong className="text-blue-400">企鵝酒店自助餐廳</strong>歎下午茶。這裡最神奇的體驗莫過於「與企鵝同桌飲茶」。餐廳有一面巨大的玻璃正對著極地企鵝展區，一邊吃著精緻的點心，一邊看著幾十隻肥嘟嘟的帝企鵝在冰面上搖搖晃晃、排隊跳水，模樣治癒到了極點。
          </p>

          <div className="my-10">
            <img
              src="/images/chimelong-penguin.jpg"
              alt="企鵝酒店"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-slate-500 text-sm mt-4">
              企鵝酒店自助餐廳，與可愛的企鵝近距離共度下午茶時光
            </p>
          </div>

          {/* 美食推介框 */}
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-3 text-xl">🌙 在地發現：橫琴中央匯步行街與平民夜市煙火</h3>
            <p className="text-slate-300 mb-4 text-justify">
              到了晚上，如果不想在主題酒店吃高昂的自助餐，聰明的退休人會坐的士前往樂園外的<strong className="text-blue-400">橫琴新區中央匯步行街與橫琴在地夜市</strong>。這裡避開了景區的喧囂，多了一份屬於老珠海街坊的平民煙火氣。這裏的美食鑊氣十足且溫和養生，我和太太吃了這幾樣：
            </p>
            <ul className="space-y-4 text-slate-300">
              <li className="text-justify">
                <strong className="text-blue-400">老字號「橫琴生蠔」火鍋：</strong>橫琴特產的生蠔碩大肥美，隻隻如手掌般大。放入清湯中滾熟，沾一點點薑絲豉油，蠔肉脆嫩爆汁，清甜到了心底，最適合長者補氣。
              </li>
              <li className="text-justify">
                <strong className="text-blue-400">地道西關「順德毋米粥」：</strong>用大米熬到完全不見米粒的綿密白粥作火鍋底，加入鮮雞件和野生菌菇慢火燉煮。粥底吸飽了雞肉的鮮甜，吃起來黏稠順喉，暖胃又極易消化。
              </li>
              <li className="text-justify">
                <strong className="text-blue-400">中央匯老店「廣式薑汁雙皮奶」：</strong>晚飯後慢步步行街，點一碗熱熱的薑汁雙皮奶。奶香極濃，面上結著厚厚的奶皮，淡淡的薑辣味順著食道流落，最適合太太暖宮驅寒。
              </li>
            </ul>
          </div>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 第三天 ===== */}
          <h2 id="day3" className="text-2xl font-bold text-blue-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            🌴 第三天：慢遊宇宙飛船，回歸純真與真諦
          </h2>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            旅程嘅最後一天，我們把時間留給了全新落成的超大型室內主題樂園 —— <strong className="text-blue-400">長隆宇宙飛船</strong>。這是一座名副其實的「巨型太空船」建築，最大的優點是<strong className="text-blue-400">全室內、冷氣超足、完全曬不到太陽</strong>，非常適合我們這個年紀長途慢遊。
          </p>

          <p className="text-slate-300 leading-loose mb-6 text-justify">
            我們在館內參觀了世界最大的室內珊瑚展區，上百種色彩斑斕的活珊瑚在水下如花朵般綻放，太太看著嘖嘖稱奇。隨後我們前往虎鯨劇場，觀看了震撼的虎鯨科普表演。當龐大的海洋霸主躍出水面，掀起巨大的浪花，那種大自然的生命力，讓我們深深感動。在宇宙飛船的平緩步道上慢慢逛、慢慢拍，累了就在裡面的休閒區坐坐，生活就該如此從容。
          </p>

          <p className="text-slate-300 leading-loose mb-8 text-justify">
            下午四點，提著在樂園買給孫兒的手信，我和太太再次坐上的士前往港珠澳大橋口岸。這三天兩夜的橫琴長隆之旅，沒有匆忙的奔波，只有蔚藍的夢境、夢幻的煙花與老街坊的生蠔香。慢下來，才驚覺浪漫從不分年齡，能在這美麗的海洋王國裡陪著太太再做一次童心未泯的少年，這趟退休之旅，值了！
          </p>

          {/* Ad Banner */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* ===== 實用Tips ===== */}
          <h2 id="tips" className="text-2xl font-bold text-blue-400 mt-12 mb-6 flex items-center gap-3 border-b border-amber-500/50 pb-3">
            💡 銀髮相伴 ‧ 橫琴長隆慢活自由行手札
          </h2>

          <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-slate-200">
              <li className="text-justify">
                <strong className="text-amber-400">善用酒店園區福利：</strong>長隆旗下主題酒店（如橫琴灣、企鵝酒店）的住客，均享有<strong className="text-blue-400">提前一小時優先進園</strong>的特權，且有專用通道。長者出行強烈建議利用這寶貴的一小時，此時旅行團大軍未到，拍照最漂亮，天氣也最清涼。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">園區全平地無障礙設計：</strong>無論是海洋王國還是宇宙飛船，所有觀賞展館、劇場都設有完美的無障礙坡道（Ramps）。如果家裡太太腳力一般，樂園門口提供<strong className="text-blue-400">輕便輪椅或代步車租賃</strong>服務，推著逛完全不費力。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">注意劇場冷氣溫差：</strong>鯨鯊館、白鯨館以及宇宙飛船內部由於要維持海洋生物的生態環境，冷氣往往開得極大。出門前，請務必幫太太和自己隨身背包裡帶備一件<strong className="text-blue-400">防風長袖外套或大絲巾</strong>，提防一熱一冷著涼中暑。
              </li>
              <li className="text-justify">
                <strong className="text-amber-400">靈活運用老齡門票優惠：</strong>長隆樂園對 65 歲以上的長者設有非常划算的<strong className="text-blue-400">「長者優惠票」</strong>。網上預訂或現場購票時，記得帶備回鄉證或身份證明文件以備安檢核對，能省下不少手續費。
              </li>
            </ul>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/40 rounded-2xl p-6 my-10">
            <p className="text-slate-300 text-lg leading-relaxed text-center italic">
              ─ 執子之手，慢看海闊天空。願每位退下火線的老朋友，都能在蔚藍的煙花下搵回最初嘅浪漫。 ─
            </p>
          </div>

          {/* Ad Banner - Before Comments */}
          <div className="my-8 flex justify-center">
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '728px', height: '90px' }}
              data-ad-client="ca-pub-4745583996243741"
              data-ad-slot="7843298765"
              data-ad-format="auto"
              data-full-width-responsive="true" />
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-500/40 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              👇 你去過橫琴長隆嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-slate-800/60 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    

        {/* Comments Section */}
        <Comments slug="gba-chimelong-3days" />
</div>
  );
}