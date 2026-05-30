'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Globe, Share2, Bookmark, Sparkles } from 'lucide-react'

type Lang = 'zh-TW' | 'en' | 'zh-CN'

interface ArticleContent {
  title: string
  subtitle?: string
  sections: Array<{
    heading?: string
    text: string | string[]
  }>
  conclusion?: string
}

interface EditorialArticleProps {
  id: string
  image: string
  date: string
  readTime: number
  emoji: string
  translations: Record<Lang, ArticleContent>
}

export default function EditorialArticle({ id, image, date, readTime, emoji, translations }: EditorialArticleProps) {
  const [lang, setLang] = useState<Lang>('zh-TW')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="min-h-screen bg-[#0a0a0b]" />

  const content = translations[lang]

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-100 font-sans selection:bg-amber-500/30">
      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/editorial" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-widest">Back to Editorial</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
              {(['zh-TW', 'en', 'zh-CN'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all duration-300 ${lang === l ? 'bg-amber-500 text-black shadow-lg' : 'text-gray-500 hover:bg-white/5 hover:text-white'}`}
                >
                  {l === 'zh-TW' ? '繁' : l === 'en' ? 'EN' : '简'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} className="w-full h-full object-cover" alt={content.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/30 to-transparent" />
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-6 flex flex-col justify-end pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} />
            Editor&apos;s Pick
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6 text-balance">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-light">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-amber-500" /> {date}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-amber-500" /> {readTime} MIN READ</span>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-amber max-w-none">
          {content.subtitle && (
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed italic border-l-2 border-amber-500 pl-6 mb-12">
              {content.subtitle}
            </p>
          )}

          <div className="space-y-12 text-gray-300">
            {content.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                    {section.heading}
                  </h2>
                )}
                {Array.isArray(section.text) ? (
                  <div className="space-y-6">
                    {section.text.map((p, i) => (
                      <p key={i} className="text-lg leading-relaxed font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-lg leading-relaxed font-light">
                    {section.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          {content.conclusion && (
            <div className="mt-20 p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bookmark className="text-amber-500" size={20} />
                {lang === 'en' ? 'Conclusion' : '結論'}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light italic">
                {content.conclusion}
              </p>
            </div>
          )}
        </article>

        {/* Footer actions */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors">
              <Share2 size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Share Article</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-amber-500 transition-colors">
              <Bookmark size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Save for later</span>
            </button>
          </div>
          
          <Link href="/editorial" className="px-8 py-3 rounded-xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-amber-400 transition-all">
            Explore More Insights
          </Link>
        </div>
      </main>
    </div>
  )
}
