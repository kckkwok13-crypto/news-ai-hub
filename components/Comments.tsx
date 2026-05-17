"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

interface CommentsProps {
  slug: string;
  accentColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function Comments({ slug, accentColor = "rose-400", borderColor = "rose-500/30", textColor = "zinc-300" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadComments();
  }, [slug]);

  const loadComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/comments?slug=${slug}`);
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
    if (!author.trim() || !content.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, author: author.trim(), content: content.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        setComments([...comments, data.comment]);
        setContent("");
      }
    } catch (error) {
      console.error("Failed to post comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-${accentColor}/10 to-${accentColor}/5 border border-${borderColor} rounded-2xl p-6 my-10`}>
      <h3 className={`text-${accentColor} font-bold mb-4 flex items-center gap-2 text-xl`}>
        💬 留言分享 ({comments.length})
      </h3>

      {/* Comments List */}
      {loading ? (
        <p className={`text-${textColor} text-sm`}>載入留言中...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-4 mb-6">
          {comments.map((comment) => (
            <div key={comment.id} className={`bg-zinc-800/30 rounded-xl p-4 border border-zinc-700/30`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-${accentColor} font-bold text-sm`}>{comment.author}</span>
                <span className="text-zinc-500 text-xs">
                  {new Date(comment.createdAt).toLocaleDateString("zh-HK")}
                </span>
              </div>
              <p className={`text-${textColor} text-sm`}>{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className={`text-${textColor} text-sm mb-4`}>暫時沒有留言，歡迎發表第一留言！</p>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="你的名字"
          className="w-full bg-zinc-800/40 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500/50 transition-colors"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="輸入你的留言..."
          rows={3}
          className="w-full bg-zinc-800/40 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-rose-500/50 transition-colors resize-none"
          required
        />
        <button
          type="submit"
          disabled={submitting || !author.trim() || !content.trim()}
          className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {submitting ? "提交中..." : "提交留言"}
        </button>
      </form>
    </div>
  );
}
