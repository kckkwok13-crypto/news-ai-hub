'use client'

import { useState, useEffect } from "react";
import { X, Mail, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Check if user has already subscribed or dismissed
  useEffect(() => {
    const hasSubscribed = localStorage.getItem("newsletter_subscribed");
    const dismissedAt = localStorage.getItem("newsletter_dismissed");
    const dismissedDate = dismissedAt ? new Date(parseInt(dismissedAt)) : null;
    const now = new Date();

    // Show popup if not subscribed and not dismissed in the last 7 days
    if (!hasSubscribed && (!dismissedDate || (now.getTime() - dismissedDate.getTime()) > 7 * 24 * 60 * 60 * 1000)) {
      // Delay showing popup by 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter_dismissed", Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("請輸入有效的電子郵件地址");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success!
    setIsSubmitting(false);
    setIsSuccess(true);
    localStorage.setItem("newsletter_subscribed", "true");

    // Auto close after success
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">訂閱成功！</h3>
            <p className="text-slate-400">多謝你訂閱我們的電子報</p>
            <p className="text-slate-500 text-sm mt-2">記得查看你的郵箱確認訂閱</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="relative h-32 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-600">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAwIEwgMTAwIDAgTCAxMDAgMTAwIEwgMCAxMDAgTSAxMCAxMDAgTCAwIDEwMCAwIDAgTCAwIDAgTCAxMCAwIFIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Mail className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 -mt-4">
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                訂閱電子報
              </h3>
              <p className="text-slate-400 text-center mb-6">
                接收最新文章通知，同時獲得獨家內容
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-6 h-6 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400">✓</span>
                  最新文章搶先看
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-6 h-6 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400">✓</span>
                  獨家優惠資訊
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-6 h-6 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400">✓</span>
                  每週精選摘要
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-6 h-6 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400">✓</span>
                  免費理財建議
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="輸入你的電子郵件"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm mb-4">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      訂閱中...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      立即訂閱
                    </>
                  )}
                </button>
              </form>

              <p className="text-slate-500 text-xs text-center mt-4">
                我們尊重你的隱私，不會發送垃圾郵件。你可以隨時取消訂閱。
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
