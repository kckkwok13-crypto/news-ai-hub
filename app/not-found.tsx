'use client';

import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-100">
            頁面未找到
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            抱歉，您訪問的頁面可能已被移除、名稱更改或暫時不可用。
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link
            href="/"
            className="flex flex-col items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Home className="w-8 h-8 mb-2 text-blue-400" />
            <span className="text-sm font-medium">返回首頁</span>
          </Link>

          <Link
            href="/blog"
            className="flex flex-col items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Search className="w-8 h-8 mb-2 text-green-400" />
            <span className="text-sm font-medium">博客文章</span>
          </Link>

          <Link
            href="/finance"
            className="flex flex-col items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <svg className="w-8 h-8 mb-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-sm font-medium">財經資訊</span>
          </Link>
        </div>

        {/* Popular Categories */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm mb-4">或許您想瀏覽：</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/blog" className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
              博客
            </Link>
            <Link href="/finance" className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
              財經
            </Link>
            <Link href="/health" className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
              健康
            </Link>
            <Link href="/food" className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
              美食
            </Link>
            <Link href="/ai-tools" className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-slate-700 transition-colors">
              AI工具
            </Link>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回上一頁
          </button>
        </div>
      </div>
    </div>
  );
}
