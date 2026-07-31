"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';

/* ─── Language Selector compacto ───────────────────────────────────── */
const LANGS = [
  { code: 'PT', flag: 'br' },
  { code: 'EN', flag: 'us' },
  { code: 'ES', flag: 'es' },
  { code: 'ZH', flag: 'cn' },
  { code: 'FR', flag: 'fr' },
  { code: 'RU', flag: 'ru' },
  { code: 'AR', flag: 'ae' },
];

const LANG_MAP: Record<string, string> = {
  PT: 'pt', EN: 'en', ES: 'es', ZH: 'zh-CN', FR: 'fr', RU: 'ru', AR: 'ar',
};

function LangToggle({ isScrolled }: { isScrolled?: boolean }) {
  const [selected, setSelected] = useState('PT');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(false);
    const gtCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (gtCombo) {
      gtCombo.value = LANG_MAP[code] || 'pt';
      gtCombo.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const current = LANGS.find((l) => l.code === selected)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 transition-colors ${isScrolled ? 'text-graphite-900 hover:text-gold-600' : 'text-white/80 hover:text-white'}`}
        style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em' }}
        aria-label="Selecionar idioma"
      >
        <img
          src={`https://flagcdn.com/w20/${current.flag}.png`}
          srcSet={`https://flagcdn.com/w40/${current.flag}.png 2x`}
          alt={current.code}
          style={{ width: '16px', height: 'auto', display: 'block' }}
        />
        <span>{current.code}</span>
        <svg style={{ width: 10, height: 10, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-3 bg-white border border-white/10 shadow-2xl py-2 z-50"
          style={{ width: '148px', top: '100%' }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className="w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-gray-50 transition-colors"
              style={{
                fontSize: '12px',
                fontWeight: selected === l.code ? 700 : 400,
                color: selected === l.code ? '#0E2240' : '#20242A',
              }}
            >
              <img
                src={`https://flagcdn.com/w20/${l.flag}.png`}
                srcSet={`https://flagcdn.com/w40/${l.flag}.png 2x`}
                alt={l.code}
                style={{ width: '16px', height: 'auto' }}
              />
              {l.code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Header Principal ─────────────────────────────────────────────── */
export default function HeaderHero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-border-200' : ''}`}
      style={{ height: '80px' }}
    >
      {/* Gradiente de topo para legibilidade do nav */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(14,34,61,0.65) 0%, rgba(14,34,61,0.0) 100%)',
        }}
      />

      <div
        className="relative h-full flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-24"
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0" aria-label="Almaris International Trade – Página inicial">
          <Image
            src="/assets/images/logo-almaris.png"
            alt="Almaris International Trade"
            width={140}
            height={48}
            className={`h-10 w-auto transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
            priority
          />
        </Link>

        {/* ── Nav desktop ── */}
        <nav className="hidden lg:flex items-center gap-12" aria-label="Navegação principal">
          {[
            { href: '/a-almaris', label: 'A Almaris' },
            { href: '/servicos', label: 'Serviços' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-interface transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold-600 hover:after:w-full after:transition-all ${isScrolled ? 'text-graphite-900 hover:text-gold-600' : 'text-white/80 hover:text-white'}`}
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.005em', paddingBottom: '2px' }}
            >
              {label}
            </Link>
          ))}

          {/* Produtos com megamenu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/produtos"
              className={`font-interface transition-colors flex items-center gap-1 ${isScrolled ? 'text-graphite-900 hover:text-gold-600' : 'text-white/80 hover:text-white'}`}
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.005em' }}
            >
              Produtos
              <svg style={{ width: 10, height: 10, transition: 'transform 0.2s', transform: megaOpen ? 'rotate(180deg)' : 'none', color: '#C5870E' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {megaOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[580px] bg-white border border-gray-100 shadow-2xl p-6 grid grid-cols-2 gap-6 animate-fade-in-up">
                <div>
                  <span className="block text-[11px] font-semibold uppercase text-gold-600 mb-3 pb-1 border-b border-gray-100" style={{ letterSpacing: '0.24em' }}>
                    Commodities Agrícolas
                  </span>
                  <ul className="space-y-2">
                    {PRODUCTS.filter(p => p.category === 'agri' || p.category === 'oils').map(prod => (
                      <li key={prod.slug}>
                        <Link href={`/produtos/${prod.slug}`} className="text-[14px] text-graphite-900 hover:text-gold-600 transition-colors flex justify-between group">
                          <span>{prod.title}</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-gold-600">{prod.origin.split(' ')[0]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase text-gold-600 mb-3 pb-1 border-b border-gray-100" style={{ letterSpacing: '0.24em' }}>
                    Especiarias, Bebidas & Rochas
                  </span>
                  <ul className="space-y-2">
                    {PRODUCTS.filter(p => p.category === 'spices' || p.category === 'beverage' || p.category === 'stones').map(prod => (
                      <li key={prod.slug}>
                        <Link href={`/produtos/${prod.slug}`} className="text-[14px] text-graphite-900 hover:text-gold-600 transition-colors flex justify-between group">
                          <span>{prod.title}</span>
                          <span className="text-[10px] text-gray-400 group-hover:text-gold-600">{prod.origin.split(' ')[0]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link href="/produtos" className="text-[14px] font-semibold text-navy-800 hover:text-gold-600 transition-colors">
                      Ver catálogo completo →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            { href: '/qualidade-e-credenciais', label: 'Qualidade' },
            { href: '/alcance-global', label: 'Alcance Global' },
            { href: '/contato', label: 'Contato' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-interface transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold-600 hover:after:w-full after:transition-all ${isScrolled ? 'text-graphite-900 hover:text-gold-600' : 'text-white/80 hover:text-white'}`}
              style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '-0.005em', paddingBottom: '2px' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Ações à direita ── */}
        <div className="hidden lg:flex items-center gap-6">
          <LangToggle isScrolled={isScrolled} />
          <Link
            href="/contato"
            className={`font-interface uppercase transition-all ${isScrolled ? 'border border-border-200 text-navy-800 hover:border-gold-600 hover:text-gold-600' : 'text-white border border-white/30 hover:border-gold-600 hover:text-gold-600'}`}
            style={{ fontSize: '14px', fontWeight: 500, padding: '10px 22px', letterSpacing: '0.01em' }}
          >
            Agendar uma conversa
          </Link>
        </div>

        {/* ── Mobile: lang + hamburger ── */}
        <div className="flex items-center gap-4 lg:hidden">
          <LangToggle isScrolled={isScrolled} />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-1.5 transition-colors ${isScrolled ? 'text-navy-800 hover:text-gold-600' : 'text-white hover:text-gold-600'}`}
            aria-label="Abrir menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Drawer mobile ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 bg-navy-900/98 backdrop-blur-md px-6 pb-8 pt-4 border-t border-white/10 shadow-2xl animate-fade-in-up" style={{ top: '80px' }}>
          <nav className="flex flex-col gap-0 font-interface text-sm font-medium">
            {[
              { href: '/', label: 'Home' },
              { href: '/a-almaris', label: 'A Almaris' },
              { href: '/servicos', label: 'Serviços' },
              { href: '/produtos', label: 'Produtos' },
              { href: '/qualidade-e-credenciais', label: 'Qualidade & Credenciais' },
              { href: '/alcance-global', label: 'Alcance Global' },
              { href: '/contato', label: 'Contato' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 border-b border-white/10 text-white/80 hover:text-white transition-colors"
                style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '0.01em' }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contato"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block w-full text-center font-interface uppercase"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              padding: '14px 24px',
              background: '#C5870E',
              color: '#0E2240',
              letterSpacing: '0.01em',
            }}
          >
            Agendar uma conversa
          </Link>
        </div>
      )}
    </header>
  );
}
