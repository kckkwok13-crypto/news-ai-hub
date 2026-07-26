'use client'

import { useState } from 'react';
import { MessageCircle, Send, User } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentsProps {
  postId: string;
  initialComments?: Comment[];
}

export default function Comments({ postId, initialComments = [] }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newComment.trim() || !authorName.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      date: new Date().toLocaleDateString('zh-HK')
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
        <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
        留言 ({comments.length})
      </h3>

      {/* 留言列表 */}
      {comments.length > 0 ? (
        <div className="space-y-4 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-slate-50 rounded-xl p-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-slate-800">{comment.author}</span>
                <span className="text-slate-400 text-sm ml-2">{comment.date}</span>
              </div>
              <p className="text-slate-600 ml-10">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-center py-8 mb-8">
          暫時未有留言，成為第一個留言嘅人！ ✍️
        </p>
      )}

      {/* 留言表单 */}
      <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl p-6">
        <h4 className="font-semibold text-slate-800 mb-4">發表留言</h4>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            你的名字
          </label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="輸入你嘅名字"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            留言內容
          </label>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="分享你嘅想法..."
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center transition-colors"
        >
          <Send className="w-4 h-4 mr-2" />
          發送留言
        </button>
      </form>
    </div>
  );
}
