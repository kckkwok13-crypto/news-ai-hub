'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, Sparkles, Bot, User, RefreshCw, Loader2, AlertCircle } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface AINewsChatProps {
  newsTitle?: string
  newsSummary?: string
  onClose?: () => void
}


const TRANSLATIONS = {
  'zh-TW': {
    title: '阿傑 AI 分析師',
    subtitle: '深度解讀新聞事件背後的脈絡與影響',
    placeholder: '輸入你想問的問題...',
    thinking: '阿傑正在思考中...',
    welcome: '👋 你好！我是阿傑，NewsKingdom 的 AI 分析師。\n\n我可以幫你：\n• 分析新聞重點同影響\n• 解答你對呢篇報導嘅疑問\n• 提供深度嘅市場見解\n\n請問你想問咩問題？',
    error: '抱歉，阿傑暂时无法回应。请检查 API Key 是否正确配置。',
    noKey: '⚠️ 未配置 API Key\n\n請在 Vercel 環境變數中設定 `OPENROUTER_API_KEY`\n\n路徑：Settings → Environment Variables → Production\n變數名：OPENROUTER_API_KEY\n值：你的 OpenRouter API Key',
    retry: '重試',
    close: '關閉'
  },
  'en': {
    title: 'AI News Discussion',
    subtitle: 'AI analyst provides deep insights into news events',
    placeholder: 'Ask your question...',
    thinking: 'AI is thinking...',
    welcome: '👋 Hello! I am your AI analyst assistant at NewsKingdom. You can ask me any questions about this news, such as:\n\n• What are the key points?\n• What impact on the market?\n• What are the underlying reasons?\n• What are the future trends?',
    error: 'Sorry, AI response failed. Please try again.',
    noKey: '⚠️ API Key not configured\n\nPlease set `OPENROUTER_API_KEY` in Vercel environment variables\n\nPath: Settings → Environment Variables → Production\nVariable: OPENROUTER_API_KEY\nValue: Your OpenRouter API Key',
    retry: 'Retry',
    close: 'Close'
  },
  'zh-CN': {
    title: '阿杰 AI 分析师',
    subtitle: 'AI 分析师为你深入解读新闻事件背后的脉络与影响',
    placeholder: '输入你想问的问题...',
    thinking: '阿杰正在思考中...',
    welcome: '👋 你好！我是阿杰，NewsKingdom 的 AI 分析助手。你可以问我关于这则新闻的任何问题，例如：\n\n• 这则新闻的重点是什么？\n• 对市场有什么影响？\n• 背后的原因是什么？\n• 未来发展趋势如何？',
    error: '抱歉，阿杰暂时无法回应。请检查 API Key 是否正确配置。',
    noKey: '⚠️ 未配置 API Key\n\n请在 Vercel 环境变量中设定 `OPENROUTER_API_KEY`\n\n路径：Settings → Environment Variables → Production\n变量名：OPENROUTER_API_KEY\n值：你的 OpenRouter API Key',
    retry: '重试',
    close: '关闭'
  }
}

export default function AINewsChat({ newsTitle, newsSummary, onClose }: AINewsChatProps) {
  const [lang, setLang] = useState<'zh-TW' | 'en' | 'zh-CN'>('zh-TW')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const t = TRANSLATIONS[lang]

  useEffect(() => {
    // Show welcome message on mount
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: t.welcome,
        timestamp: new Date()
      }])
    }
  }, [t])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user' as const, content: input.trim(), timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    // Build context with news info if available
    let contextPrompt = `你是阿傑，NewsKingdom 的 AI 新聞分析師。用戶提問時，請用繁體中文/英文回覆。`
    if (newsTitle) {
      contextPrompt += `\n\n相關新聞標題：${newsTitle}`
    }
    if (newsSummary) {
      contextPrompt += `\n\n新聞內容摘要：${newsSummary}`
    }
    contextPrompt += `\n\n用戶問題：${userMessage.content}`
    contextPrompt += `\n\n請提供詳細、深入嘅分析，並用你作為阿傑嘅身份回答。`

    try {
      // Call our API route instead of OpenRouter directly
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: contextPrompt,
          model: 'anthropic/claude-3-haiku'
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`API error ${response.status}: ${errorData.error?.message || response.statusText}`)
      }

      const data = await response.json()
      const assistantContent = data.content || t.error

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date()
      }])
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : t.error
      setError(errorMsg)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `⚠️ 錯誤：${errorMsg}\n\n請確認：\n1. OPENROUTER_API_KEY 已正確設定\n2. API Key 有足夠額度\n3. 網絡連接正常`,
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setError(null)
    const lastUserMessage = messages.filter(m => m.role === 'user').pop()
    if (lastUserMessage) {
      setMessages(prev => prev.filter(m => m !== lastUserMessage))
      setInput(lastUserMessage.content)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-[80vh] mx-4 bg-[#111113] rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0a0a0b]/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Sparkles size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{t.title}</h2>
              <p className="text-sm text-gray-500">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="flex bg-white/5 rounded-xl p-1">
              {(['zh-TW', 'en', 'zh-CN'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === l ? 'bg-amber-500 text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  {l === 'zh-TW' ? '繁' : l === 'en' ? 'EN' : '简'}
                </button>
              ))}
            </div>
            <button onClick={onClose} className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start gap-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${message.role === 'assistant' ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-white/10'}`}>
                  {message.role === 'assistant' ? (
                    <Bot size={20} className="text-white" />
                  ) : (
                    <User size={20} className="text-gray-400" />
                  )}
                </div>
                <div className={`px-5 py-4 rounded-2xl ${message.role === 'user' ? 'bg-amber-500 text-black' : 'bg-white/5 border border-white/10'}`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Loader2 size={18} className="animate-spin text-amber-500" />
                <span className="text-sm text-gray-400">{t.thinking}</span>
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-center">
              <button onClick={handleRetry} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">
                <RefreshCw size={16} />
                <span className="text-sm">{t.retry}</span>
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#0a0a0b]/50">
          <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-5 py-3 border border-white/10 focus-within:border-amber-500/50 transition">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              disabled={isLoading}
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 rounded-xl bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}