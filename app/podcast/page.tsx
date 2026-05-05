'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Upload, Play, Pause, Trash2, Music, Radio, Clock, FileAudio,
  AlertCircle, CheckCircle2, Loader2, Download, Sparkles, X, Sun, Moon, Menu
} from "lucide-react";

interface Podcast {
  id: string;
  name: string;
  size: number;
  duration: number;
  uploadedAt: number;
  audioUrl: string;
  transcript?: string;
  analysis?: PodcastAnalysis;
  transcriptionStatus?: 'pending' | 'processing' | 'done' | 'error';
}

interface PodcastAnalysis {
  summary: string;
  topics: string[];
  sentiment: { positive: number; negative: number; neutral: number };
  keyPoints: string[];
  duration: string;
}

type Lang = "zh-TW" | "zh-CN" | "en";

const LABELS = {
  "zh-TW": {
    title: "Podcast 音頻分析",
    subtitle: "上傳 · 轉錄 · AI 分析",
    upload: "上傳音頻",
    uploading: "處理中...",
    dropzone: "拖放檔案或點擊上傳",
    formats: "支援 MP3, WAV, M4A, MP4 (最大 25MB)",
    noPodcasts: "尚無上傳音頻",
    noPodcastsDesc: "點擊「上傳音頻」添加文件",
    transcribe: "轉錄",
    transcribing: "轉錄中...",
    analyze: "AI 分析",
    analyzing: "分析中...",
    downloadTranscript: "下載文字稿",
    duration: "時長",
    size: "大小",
    uploaded: "上傳時間",
    ready: "就緒",
    processing: "處理中",
    done: "完成",
    error: "錯誤",
    noTranscript: "尚未轉錄",
    summary: "摘要",
    topics: "話題分類",
    sentiment: "情緒分析",
    keyPoints: "重點",
    positive: "正面",
    negative: "負面",
    neutral: "中立",
    stats: "統計",
    totalPodcasts: "音頻數量",
    totalDuration: "總時長",
    totalSize: "總大小",
    storageNote: "數據儲存於瀏覽器本地，換機或清緩存會消失",
    transcribeError: "轉錄失敗，請稍後重試",
    analyzeError: "分析失敗，請稍後重試",
    apikeyRequired: "需要 API Key 才能使用 AI 功能",
    close: "關閉",
  },
  "zh-CN": {
    title: "Podcast 音频分析",
    subtitle: "上传 · 转录 · AI 分析",
    upload: "上传音频",
    uploading: "处理中...",
    dropzone: "拖放文件或点击上传",
    formats: "支持 MP3, WAV, M4A, MP4 (最大 25MB)",
    noPodcasts: "尚无上传音频",
    noPodcastsDesc: "点击「上传音频」添加文件",
    transcribe: "转录",
    transcribing: "转录中...",
    analyze: "AI 分析",
    analyzing: "分析中...",
    downloadTranscript: "下载文字稿",
    duration: "时长",
    size: "大小",
    uploaded: "上传时间",
    ready: "就绪",
    processing: "处理中",
    done: "完成",
    error: "错误",
    noTranscript: "尚未转录",
    summary: "摘要",
    topics: "话题分类",
    sentiment: "情绪分析",
    keyPoints: "重点",
    positive: "正面",
    negative: "负面",
    neutral: "中立",
    stats: "统计",
    totalPodcasts: "音频数量",
    totalDuration: "总时长",
    totalSize: "总大小",
    storageNote: "数据储存于浏览器本地，换机或清缓存会消失",
    transcribeError: "转录失败，请稍后重试",
    analyzeError: "分析失败，请稍后重试",
    apikeyRequired: "需要 API Key 才能使用 AI 功能",
    close: "关闭",
  },
  "en": {
    title: "Podcast Audio Analysis",
    subtitle: "Upload · Transcribe · AI Analyze",
    upload: "Upload Audio",
    uploading: "Processing...",
    dropzone: "Drop files or click to upload",
    formats: "Supports MP3, WAV, M4A, MP4 (max 25MB)",
    noPodcasts: "No podcasts uploaded",
    noPodcastsDesc: "Click \"Upload Audio\" to add files",
    transcribe: "Transcribe",
    transcribing: "Transcribing...",
    analyze: "AI Analyze",
    analyzing: "Analyzing...",
    downloadTranscript: "Download Transcript",
    duration: "Duration",
    size: "Size",
    uploaded: "Uploaded",
    ready: "Ready",
    processing: "Processing",
    done: "Done",
    error: "Error",
    noTranscript: "Not transcribed",
    summary: "Summary",
    topics: "Topics",
    sentiment: "Sentiment",
    keyPoints: "Key Points",
    positive: "Positive",
    negative: "Negative",
    neutral: "Neutral",
    stats: "Statistics",
    totalPodcasts: "Total Podcasts",
    totalDuration: "Total Duration",
    totalSize: "Total Size",
    storageNote: "Data stored locally in browser, will be lost on cache clear",
    transcribeError: "Transcription failed, please try again",
    analyzeError: "Analysis failed, please try again",
    apikeyRequired: "API Key required for AI features",
    close: "Close",
  },
};

const STORAGE_KEY = "podcast_library_v2";

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDuration(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatDate(ms: number, lang: string) {
  return new Date(ms).toLocaleString(lang === "en" ? "en-US" : lang === "zh-CN" ? "zh-CN" : "zh-TW", {
    month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}

// ─── Audio Player ──────────────────────────────────────────────────────────────

function AudioPlayer({ audioUrl, darkMode }: { audioUrl: string; darkMode: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => setDuration(audio.duration || 0);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Number(e.target.value);
    setCurrentTime(audio.currentTime);
  };

  return (
    <div className={`flex items-center gap-3 rounded-xl px-4 py-3 ${darkMode ? "bg-gray-800/50" : "bg-gray-100"}`}>
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <button
        onClick={toggle}
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
          playing 
            ? "bg-pink-500 hover:bg-pink-600" 
            : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
        }`}
      >
        {playing
          ? <Pause className="w-5 h-5 text-white" fill="currentColor" />
          : <Play className="w-5 h-5 text-white" fill="currentColor" />
        }
      </button>
      <span className={`text-xs font-mono w-12 shrink-0 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        {formatDuration(currentTime)}
      </span>
      <input
        type="range"
        min={0}
        max={duration || 1}
        value={currentTime}
        onChange={seek}
        className="flex-1 h-1.5 cursor-pointer accent-pink-500"
        style={{ accentColor: "#ec4899" }}
      />
      <span className={`text-xs font-mono w-12 shrink-0 text-right ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
        {formatDuration(duration)}
      </span>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export default function PodcastPage() {
  const [lang, setLang] = useState<Lang>("zh-TW");
  const [darkMode, setDarkMode] = useState(true);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const t = LABELS[lang];

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPodcasts(JSON.parse(raw));
    } catch {}
    const savedLang = localStorage.getItem("newsLang") as Lang;
    if (savedLang && ["zh-TW", "zh-CN", "en"].includes(savedLang)) setLang(savedLang);
    const dark = localStorage.getItem("darkMode");
    if (dark) setDarkMode(dark === "true");
  }, []);

  // Save to localStorage
  const savePodcasts = (list: Podcast[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    setPodcasts(list);
  };

  // Upload handler
  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadError(null);
    const newPods: Podcast[] = [];
    
    for (const file of Array.from(files)) {
      if (!file.type.startsWith("audio/") && !file.type.startsWith("video/")) {
        setUploadError(`「${file.name}」唔係音頻文件，已跳過`);
        continue;
      }
      if (file.size > 25 * 1024 * 1024) {
        setUploadError(`「${file.name}」超過 25MB，已跳過`);
        continue;
      }

      const audioUrl = URL.createObjectURL(file);
      const audio = new Audio();
      let duration = 0;
      
      try {
        audio.src = audioUrl;
        await new Promise((res, rej) => {
          audio.onloadedmetadata = () => { duration = audio.duration; res(true); };
          audio.onerror = () => rej(new Error("metadata"));
          setTimeout(() => rej(new Error("timeout")), 5000);
        });
      } catch { duration = 0; }

      newPods.push({
        id: crypto.randomUUID(),
        name: file.name.replace(/\.[^.]+$/, ""),
        size: file.size,
        duration,
        uploadedAt: Date.now(),
        audioUrl,
        transcriptionStatus: 'pending',
      });
    }

    savePodcasts([...podcasts, ...newPods]);
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  // Delete handler
  const handleDelete = (id: string) => {
    const pod = podcasts.find(p => p.id === id);
    if (pod) URL.revokeObjectURL(pod.audioUrl);
    savePodcasts(podcasts.filter(p => p.id !== id));
    if (selectedPodcast?.id === id) setSelectedPodcast(null);
  };

  // Transcribe handler
  const handleTranscribe = async (podcast: Podcast) => {
    const updated = podcasts.map(p => 
      p.id === podcast.id ? { ...p, transcriptionStatus: 'processing' as const } : p
    );
    savePodcasts(updated);

    try {
      // Get audio file from URL
      const response = await fetch(podcast.audioUrl);
      const blob = await response.blob();
      const file = new File([blob], `${podcast.name}.mp3`, { type: blob.type });

      const formData = new FormData();
      formData.append('file', file);
      formData.append('lang', lang);

      const res = await fetch('/api/podcast/transcribe', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success && data.transcript) {
        const updated2 = podcasts.map(p => 
          p.id === podcast.id ? { 
            ...p, 
            transcript: data.transcript,
            transcriptionStatus: 'done' as const 
          } : p
        );
        savePodcasts(updated2);
        setSelectedPodcast(prev => prev ? { ...prev, transcript: data.transcript, transcriptionStatus: 'done' } : null);
      } else {
        throw new Error(data.error || t.transcribeError);
      }
    } catch (err: any) {
      const updated3 = podcasts.map(p => 
        p.id === podcast.id ? { ...p, transcriptionStatus: 'error' as const } : p
      );
      savePodcasts(updated3);
      setUploadError(t.transcribeError);
    }
  };

  // Analyze handler
  const handleAnalyze = async (podcast: Podcast) => {
    if (!podcast.transcript) return;
    setAnalyzing(podcast.id);

    try {
      const res = await fetch('/api/podcast/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          transcript: podcast.transcript, 
          name: podcast.name,
          lang 
        }),
      });

      const data = await res.json();

      if (data.success && data.analysis) {
        const updated = podcasts.map(p => 
          p.id === podcast.id ? { ...p, analysis: data.analysis } : p
        );
        savePodcasts(updated);
        setSelectedPodcast(prev => prev ? { ...prev, analysis: data.analysis } : null);
      } else {
        throw new Error(data.error || t.analyzeError);
      }
    } catch (err) {
      setUploadError(t.analyzeError);
    }

    setAnalyzing(null);
  };

  // Download transcript
  const downloadTranscript = (podcast: Podcast) => {
    if (!podcast.transcript) return;
    const blob = new Blob([podcast.transcript], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${podcast.name}-transcript.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalDuration = podcasts.reduce((acc, p) => acc + (p.duration || 0), 0);
  const totalSize = podcasts.reduce((acc, p) => acc + p.size, 0);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl ${darkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"} border-b`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowMobileMenu(true)} className={`p-2 rounded-xl md:hidden ${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                <Menu size={24} />
              </button>
              <Link href="/" className="text-2xl md:text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">NewsFlow</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setDarkMode(v => !v)} className={`p-3 rounded-xl transition ${darkMode ? "hover:bg-gray-800 text-yellow-400" : "hover:bg-gray-100 text-gray-600"}`}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="relative">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Lang)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium cursor-pointer ${
                    darkMode ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-gray-100 text-gray-700 border-gray-200"
                  } border`}
                >
                  <option value="zh-TW">🇭🇰 廣東話</option>
                  <option value="zh-CN">🇨🇳 简体</option>
                  <option value="en">🇺🇸 English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Title Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Radio className="w-10 h-10 text-pink-500" />
            <h1 className="text-3xl md:text-4xl font-black">{t.title}</h1>
          </div>
          <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{t.subtitle}</p>
        </div>

        {/* Upload Section */}
        <div className={`rounded-2xl border-2 border-dashed p-8 text-center transition-all ${
          darkMode ? "border-gray-700 hover:border-pink-500/50" : "border-gray-300 hover:border-pink-400"
        }`}>
          <input
            ref={fileRef}
            type="file"
            accept="audio/*,video/mp4"
            multiple
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
              uploading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white"
            }`}
          >
            {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
            {uploading ? t.uploading : t.upload}
          </button>
          <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.dropzone}</p>
          <p className={`mt-1 text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.formats}</p>
        </div>

        {/* Error Alert */}
        {uploadError && (
          <div className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-yellow-50 border border-yellow-200"}`}>
            <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0" />
            <p className={`text-sm ${darkMode ? "text-yellow-300" : "text-yellow-700"}`}>{uploadError}</p>
            <button onClick={() => setUploadError(null)} className="ml-auto"><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Stats */}
        {podcasts.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            <div className={`rounded-xl p-4 ${darkMode ? "bg-gray-800/50" : "bg-white shadow-sm"}`}>
              <p className={`text-xs uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.totalPodcasts}</p>
              <p className="text-2xl font-bold text-pink-500 mt-1">{podcasts.length}</p>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? "bg-gray-800/50" : "bg-white shadow-sm"}`}>
              <p className={`text-xs uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.totalDuration}</p>
              <p className="text-2xl font-bold mt-1">{formatDuration(totalDuration)}</p>
            </div>
            <div className={`rounded-xl p-4 ${darkMode ? "bg-gray-800/50" : "bg-white shadow-sm"}`}>
              <p className={`text-xs uppercase ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.totalSize}</p>
              <p className="text-2xl font-bold mt-1">{formatSize(totalSize)}</p>
            </div>
          </div>
        )}

        {/* Empty State */}
        {podcasts.length === 0 && (
          <div className={`flex flex-col items-center justify-center py-16 rounded-2xl ${darkMode ? "bg-gray-800/30" : "bg-white"}`}>
            <div className={`w-20 h-20 rounded-full flex items-center justify-center ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <Music className="w-10 h-10 text-pink-500" />
            </div>
            <p className={`mt-4 font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{t.noPodcasts}</p>
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-400"}`}>{t.noPodcastsDesc}</p>
          </div>
        )}

        {/* Podcast List */}
        <div className="space-y-4">
          {podcasts.map((pod) => (
            <div
              key={pod.id}
              className={`rounded-2xl p-5 transition-all cursor-pointer ${
                darkMode 
                  ? "bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-pink-500/30" 
                  : "bg-white hover:shadow-lg border border-gray-100"
              }`}
              onClick={() => setSelectedPodcast(pod)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  }`}>
                    <FileAudio className="w-7 h-7 text-pink-500" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg truncate">{pod.name}</h3>
                    <div className={`flex flex-wrap items-center gap-3 mt-1 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      <span className="flex items-center gap-1">
                        <Music className="w-4 h-4" />{formatSize(pod.size)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />{formatDuration(pod.duration)}
                      </span>
                      <span>{formatDate(pod.uploadedAt, lang)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium ${
                    pod.transcriptionStatus === 'done' 
                      ? "bg-green-500/20 text-green-400"
                      : pod.transcriptionStatus === 'processing'
                      ? "bg-yellow-500/20 text-yellow-400"
                      : pod.transcriptionStatus === 'error'
                      ? "bg-red-500/20 text-red-400"
                      : darkMode ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-500"
                  }`}>
                    {pod.transcriptionStatus === 'done' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {pod.transcriptionStatus === 'processing' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    {pod.transcriptionStatus === 'done' ? t.done : pod.transcriptionStatus === 'processing' ? t.processing : t.ready}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(pod.id); }}
                    className={`p-2 rounded-lg transition-colors ${
                      darkMode ? "hover:bg-red-500/20 text-gray-400 hover:text-red-400" : "hover:bg-red-50 text-gray-400 hover:text-red-500"
                    }`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                <AudioPlayer audioUrl={pod.audioUrl} darkMode={darkMode} />
              </div>
            </div>
          ))}
        </div>

        {/* Storage Note */}
        {podcasts.length > 0 && (
          <p className={`text-xs text-center ${darkMode ? "text-gray-600" : "text-gray-400"}`}>{t.storageNote}</p>
        )}
      </main>

      {/* Detail Modal */}
      {selectedPodcast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPodcast(null)}>
          <div 
            className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 ${
              darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">{selectedPodcast.name}</h2>
                <p className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {formatDuration(selectedPodcast.duration)} · {formatSize(selectedPodcast.size)}
                </p>
              </div>
              <button onClick={() => setSelectedPodcast(null)} className={`p-2 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Player */}
            <div className="mb-6">
              <AudioPlayer audioUrl={selectedPodcast.audioUrl} darkMode={darkMode} />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              {selectedPodcast.transcriptionStatus !== 'done' && selectedPodcast.transcriptionStatus !== 'processing' && (
                <button
                  onClick={() => handleTranscribe(selectedPodcast)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90"
                >
                  <Sparkles className="w-4 h-4" />
                  {t.transcribe}
                </button>
              )}
              {selectedPodcast.transcriptionStatus === 'processing' && (
                <button disabled className="flex items-center gap-2 px-4 py-2.5 bg-gray-600 text-white rounded-xl font-medium cursor-not-allowed">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t.transcribing}
                </button>
              )}
              {selectedPodcast.transcript && !selectedPodcast.analysis && (
                <button
                  onClick={() => handleAnalyze(selectedPodcast)}
                  disabled={analyzing === selectedPodcast.id}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium ${
                    analyzing === selectedPodcast.id
                      ? "bg-gray-600 cursor-not-allowed text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {analyzing === selectedPodcast.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                  {analyzing === selectedPodcast.id ? t.analyzing : t.analyze}
                </button>
              )}
              {selectedPodcast.transcript && (
                <button
                  onClick={() => downloadTranscript(selectedPodcast)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium ${
                    darkMode ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  {t.downloadTranscript}
                </button>
              )}
            </div>

            {/* Transcript */}
            {selectedPodcast.transcript && (
              <div className={`rounded-xl p-4 mb-6 ${darkMode ? "bg-gray-800/50" : "bg-gray-50"}`}>
                <h3 className={`font-bold mb-3 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>📝 {lang === 'en' ? 'Transcript' : '文字稿'}</h3>
                <p className={`text-sm leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedPodcast.transcript}
                </p>
              </div>
            )}

            {/* Analysis */}
            {selectedPodcast.analysis && (
              <div className="space-y-4">
                {/* Summary */}
                <div className={`rounded-xl p-4 ${darkMode ? "bg-pink-500/10 border border-pink-500/20" : "bg-pink-50 border border-pink-200"}`}>
                  <h3 className="font-bold mb-2 text-pink-500">📋 {t.summary}</h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {selectedPodcast.analysis.summary}
                  </p>
                </div>

                {/* Topics */}
                <div className={`rounded-xl p-4 ${darkMode ? "bg-purple-500/10 border border-purple-500/20" : "bg-purple-50 border border-purple-200"}`}>
                  <h3 className="font-bold mb-2 text-purple-500">🏷️ {t.topics}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPodcast.analysis.topics.map((topic: string, i: number) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-purple-600"
                      }`}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sentiment */}
                <div className={`rounded-xl p-4 ${darkMode ? "bg-blue-500/10 border border-blue-500/20" : "bg-blue-50 border border-blue-200"}`}>
                  <h3 className="font-bold mb-3 text-blue-500">😊 {t.sentiment}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">{t.positive}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${selectedPodcast.analysis.sentiment.positive}%` }} />
                      </div>
                      <span className="text-sm font-mono w-10">{selectedPodcast.analysis.sentiment.positive}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">{t.neutral}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400" style={{ width: `${selectedPodcast.analysis.sentiment.neutral}%` }} />
                      </div>
                      <span className="text-sm font-mono w-10">{selectedPodcast.analysis.sentiment.neutral}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">{t.negative}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500" style={{ width: `${selectedPodcast.analysis.sentiment.negative}%` }} />
                      </div>
                      <span className="text-sm font-mono w-10">{selectedPodcast.analysis.sentiment.negative}%</span>
                    </div>
                  </div>
                </div>

                {/* Key Points */}
                <div className={`rounded-xl p-4 ${darkMode ? "bg-orange-500/10 border border-orange-500/20" : "bg-orange-50 border border-orange-200"}`}>
                  <h3 className="font-bold mb-2 text-orange-500">🔑 {t.keyPoints}</h3>
                  <ul className="space-y-2">
                    {selectedPodcast.analysis.keyPoints.map((point: string, i: number) => (
                      <li key={i} className={`text-sm flex items-start gap-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        <span className="text-orange-500">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={`mt-12 py-8 text-center border-t ${darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"}`}>
        <div className="flex justify-center gap-6 mb-4 text-sm">
          <Link href="/" className="hover:text-pink-500">🏠 {lang === 'en' ? 'Home' : '首頁'}</Link>
          <Link href="/about" className="hover:text-pink-500">📖 {lang === 'en' ? 'About' : '關於'}</Link>
        </div>
        <p className="text-sm">NewsFlow Podcast · AI-Powered Audio Analysis © 2026</p>
      </footer>
    </div>
  );
}
