"use client";

import { useState, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { languageInfo, TravelLanguage } from "@/data/travelTranslations";

interface LanguageSwitcherProps {
  currentLang?: TravelLanguage;
  onLanguageChange?: (lang: TravelLanguage) => void;
  variant?: "default" | "minimal";
}

export default function LanguageSwitcher({
  currentLang = "zh-TW",
  onLanguageChange,
  variant = "default"
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<TravelLanguage>(currentLang);
  const dropdownRef = { current: null as HTMLDivElement | null };

  useEffect(() => {
    // Load saved language preference
    const saved = localStorage.getItem("travel_language") as TravelLanguage;
    if (saved && languageInfo[saved]) {
      setSelectedLang(saved);
      onLanguageChange?.(saved);
    }
  }, [onLanguageChange]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: TravelLanguage) => {
    setSelectedLang(lang);
    localStorage.setItem("travel_language", lang);
    onLanguageChange?.(lang);
    setIsOpen(false);
  };

  const currentInfo = languageInfo[selectedLang];

  if (variant === "minimal") {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1 text-sm bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-300"
      >
        <Globe className="w-4 h-4" />
        <span>{currentInfo.flag}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#4a7c59]/20 to-[#6b9b7a]/20 hover:from-[#4a7c59]/30 hover:to-[#6b9b7a]/30 border border-[#4a7c59]/30 rounded-lg transition-all text-[#4a7c59] font-medium"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentInfo.native}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {(Object.keys(languageInfo) as TravelLanguage[]).map((lang) => {
            const info = languageInfo[lang];
            const isSelected = selectedLang === lang;
            return (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 transition-colors ${
                  isSelected ? "bg-[#4a7c59]/10 text-[#4a7c59]" : "text-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{info.flag}</span>
                  <div className="text-left">
                    <div className="font-medium text-sm">{info.native}</div>
                    <div className="text-xs text-slate-500">{info.label}</div>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-[#4a7c59]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
