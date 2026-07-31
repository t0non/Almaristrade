"use client";

import React, { useState, useRef, useEffect } from 'react';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
  country: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: 'PT', label: 'Português', flag: 'br', country: 'Brasil' },
  { code: 'EN', label: 'English', flag: 'us', country: 'Estados Unidos / UK' },
  { code: 'ES', label: 'Español', flag: 'es', country: 'Espanha' },
  { code: 'ZH', label: '中文 (Chinese)', flag: 'cn', country: 'China' },
  { code: 'FR', label: 'Français', flag: 'fr', country: 'França' },
  { code: 'RU', label: 'Русский', flag: 'ru', country: 'Rússia' },
  { code: 'AR', label: 'العربية (Arabic)', flag: 'ae', country: 'Liga Árabe' },
];

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(LANGUAGES[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: LanguageOption) => {
    setSelectedLang(lang);
    setIsOpen(false);
    
    // Dispara a tradução do Google Translate
    if (typeof window !== 'undefined') {
      const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (gtCombo) {
        // Mapeamento dos nossos códigos para os códigos do Google Translate
        const langMap: Record<string, string> = {
          PT: 'pt',
          EN: 'en',
          ES: 'es',
          ZH: 'zh-CN',
          FR: 'fr',
          RU: 'ru',
          AR: 'ar'
        };
        
        gtCombo.value = langMap[lang.code] || 'pt';
        gtCombo.dispatchEvent(new Event('change', { bubbles: true }));
      }
      
      window.dispatchEvent(new CustomEvent('almaris-lang-change', { detail: { lang: lang.code } }));
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Botão Widget de Idiomas */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 bg-ivory-50 hover:bg-white border border-border-200 hover:border-navy-800 px-3 py-1.5 rounded-sm text-xs font-interface font-semibold text-navy-800 transition-all shadow-xs"
        aria-expanded={isOpen}
        aria-label="Seletor Multilíngue de Idiomas"
      >
        <img
          src={`https://flagcdn.com/w20/${selectedLang.flag}.png`}
          srcSet={`https://flagcdn.com/w40/${selectedLang.flag}.png 2x`}
          alt={selectedLang.country}
          className="block h-auto w-4"
        />
        <span className="font-bold text-navy-800">{selectedLang.code}</span>
        <svg
          className={`w-3 h-3 text-gold-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menu Dropdown com Bandeiras */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-border-200 shadow-xl rounded-sm py-2 z-50 animate-fade-in-up">
          <div className="px-3 py-1.5 border-b border-border-subtle mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-600 block">
              Idiomas Atendidos & Regiões
            </span>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang)}
                className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-ivory-50 transition-colors ${
                  selectedLang.code === lang.code ? 'bg-navy-900/5 font-bold text-navy-800' : 'text-graphite-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={`https://flagcdn.com/w20/${lang.flag}.png`}
                    srcSet={`https://flagcdn.com/w40/${lang.flag}.png 2x`}
                    alt={lang.country}
                    className="block h-auto w-4"
                  />
                  <span>{lang.label}</span>
                </div>
                <span className="text-[10px] text-gray-600 font-semibold">{lang.code}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
