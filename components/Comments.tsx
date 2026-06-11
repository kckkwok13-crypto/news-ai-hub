"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  slug: string;
  author: string;
  content: string;
  created_at: string;
}

interface CommentsProps {
  slug: string;
  accentColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function Comments({ slug, accentColor = "emerald-400", borderColor = "emerald-500/30", textColor = "slate-300" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadComments();
  }, [slug]);

  const loadComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data.comments || []);
      }
    } catch (error) {
      console.error("Failed to load comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentContent.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          author: authorName.trim(),
          content: commentContent.trim()
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setComments([data.comment, ...comments]);
          setCommentContent("");
          setSubmitStatus("success");
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-800/50 to-slate-800/20 rounded-3xl p-8 mb-12 border border-slate-700/50">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-2xl">💬</span>
        留言分享 ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="你的名字"
            className="bg-slate-900/50 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-700/50"
            required
          />
          <input
            type="email"
            placeholder="電郵（選填，不會公開）"
            className="bg-slate-900/50 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-700/50"
          />
        </div>
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="分享你的遊記，或問我關於行程的問題..."
          rows={4}
          className="w-full bg-slate-900/50 text-white rounded-xl p-4 mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-700/50 resize-none"
          required
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting || !authorName.trim() || !commentContent.trim()}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:from-slate-600 disabled:to-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            {isSubmitting ? "發布中..." : "發布留言"}
          </button>
          {submitStatus === "success" && (
            <span className="text-green-400 font-medium">✅ 留言已發布！</span>
          )}
          {submitStatus === "error" && (
            <span className="text-red-400 font-medium">❌ 發布失敗，請重試</span>
          )}
        </div>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-slate-400 text-center py-8">載入留言中...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-emerald-400 font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm">👤</span>
                  {comment.author}
                </span>
                <span className="text-slate-500/50 text-sm">
                  {new Date(comment.created_at).toLocaleString('zh-HK')}
                </span>
              </div>
              <p className="text-slate-300/90">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <div className="text-4xl mb-3">💭</div>
          <p>暫時未有留言，成為第一個分享你的遊記吧！</p>
        </div>
      )}
    </section>
  );
}