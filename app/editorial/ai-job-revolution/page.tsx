export const generateMetadata = () => {
  return {
    title: "AI 搶工潮：呢個時代我哋點解自救？",
    description: "當ChatGPT、Midjourney、Claude改變晒遊戲規則，打工仔、freelancer、創業者要點算？",
  };
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose prose-lg max-w-none">
        <p className="text-sm text-gray-500">📝 編輯精選 · 12分鐘閱讀</p>
        <h1 className="text-3xl font-bold mt-4 mb-6">AI 搶工潮：呢個時代我哋點解自救？</h1>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <p className="text-amber-800 text-sm">⚠️ 本文為編輯個人觀點，僅供參考。</p>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          老實講，我係有一定掙扎先寫呢篇文。
          因為我嘅工作——寫稿、做分析——正正是AI擅長嘅範疇。
          但係正因為如此，我覺得更加有責任去搞清楚：究竟我哋呢班創作者，係度渡緊乜嘢？
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">🤖 邊個行業最受威脅？</h2>
        <p className="mb-4">
          我睇到好多人話「AI會取代所有嘢」，呢個係過度簡化。
          實際上，呢三類工作者最受影響：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>翻譯同文員工作</strong> ——AI翻譯已經可以做到七成準，翻譯員要轉型</li>
          <li><strong>基本設計</strong> ——Midjourney可以幾秒出圖，基本freelance設計師生存空間被壓縮</li>
          <li><strong>客戶服務</strong> ——Chatbot搞掂八成問題，人工客服需求大減</li>
        </ul>
        <p className="mb-4">
          但係——有危就有機。我見到一班人已經適應過來，佢哋嘅策略係：
          「唔好做AI可以做到嘅嘢，要做AI做唔到嘅嘢」。
        </p>
        <h2 className="text-xl font-bold mt-8 mb-4">💡 AI取代唔到嘅嘢</h2>
        <p className="mb-4">
          乜嘢係AI取代唔到？我哋試過拆解：
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>真係人類情感连接</strong> ——當你需要一个人明白你、陪伴你，AI仲差得遠</li>
          <li><strong>複雜判斷</strong> ——涉及價值觀、倫理道德嘅決定，AI帮唔到手</li>
          <li><strong>創意火花</strong> ——AI可以組合，但係爆唔到真正嘅新 idea</li>
          <li><strong>信任關係</strong> ——你信你嘅律師/醫生/治療師，因為佢哋有license，有責任</li>
        </ul>
        <h2 className="text-xl font-bold mt-8 mb-4">🛠️ 我哋可以點准備？</h2>
        <p className="mb-4">
          我自己嘅做法係：
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li><strong>學識用AI工具</strong> ——唔係被淘汰，係學會點樣驾馭</li>
          <li><strong>建立個人品牌</strong> ——人係信人，唔係信工具</li>
          <li><strong>保持好奇心</strong> ——不斷學新嘢，唔好assume自己已經識完</li>
        </ol>
        <p className="mb-4">
          老實講，呢個時代令我好迷惘。但係我覺得，
          比起擔心被取代，更加重要嘅係接受轉變，然後問自己：
          「我真正想做嘅嘢係乜？」
        </p>
        <div className="bg-gray-100 p-4 rounded-lg my-6">
          <p className="text-gray-700 text-sm">
            <strong>你呢？你點睇AI對你工作嘅影響？</strong><br/>
            歡迎留言分享你嘅應對策略。
          </p>
        </div>
      </article>
    </main>
  );
}
