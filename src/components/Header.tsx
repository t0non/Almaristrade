"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import { PRODUCTS } from '@/data/products';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-border-200 h-[88px] z-50">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <img src="/assets/images/logo-almaris.png" alt="Almaris International Trade" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
          <Link href="/a-almaris" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-600 hover:after:w-full after:transition-all">
            A Almaris
          </Link>

          <Link href="/servicos" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-600 hover:after:w-full after:transition-all">
            Serviços
          </Link>

          {/* Megamenu Produtos */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegamenuOpen(true)}
            onMouseLeave={() => setIsMegamenuOpen(false)}
          >
            <Link href="/produtos" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 flex items-center gap-1.5">
              Produtos
              <svg className={`w-3.5 h-3.5 transition-transform ${isMegamenuOpen ? 'rotate-180 text-gold-600' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Megamenu Dropdown Card */}
            {isMegamenuOpen && (
              <div className="absolute top-full -left-12 w-[680px] bg-white border border-border-200 shadow-xl p-6 grid grid-cols-2 gap-6 animate-fade-in-up">
                <div>
                  <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-widest block mb-3 border-b border-border-subtle pb-1">
                    Commodities Agrícolas & Nutrição
                  </span>
                  <ul className="space-y-2">
                    {PRODUCTS.filter(p => p.category === 'agri' || p.category === 'oils').map(prod => (
                      <li key={prod.slug}>
                        <Link href={`/produtos/${prod.slug}`} className="text-xs text-graphite-900 hover:text-gold-600 transition-colors flex items-center justify-between group">
                          <span>{prod.title}</span>
                          <span className="text-[10px] text-gray-600 group-hover:text-gold-600">{prod.origin.split(' ')[0]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-widest block mb-3 border-b border-border-subtle pb-1">
                    Especiarias, Bebidas & Rochas
                  </span>
                  <ul className="space-y-2">
                    {PRODUCTS.filter(p => p.category === 'spices' || p.category === 'beverage' || p.category === 'stones').map(prod => (
                      <li key={prod.slug}>
                        <Link href={`/produtos/${prod.slug}`} className="text-xs text-graphite-900 hover:text-gold-600 transition-colors flex items-center justify-between group">
                          <span>{prod.title}</span>
                          <span className="text-[10px] text-gray-600 group-hover:text-gold-600">{prod.origin.split(' ')[0]}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-border-subtle">
                    <Link href="/produtos" className="text-xs font-semibold text-navy-800 hover:text-gold-600 flex items-center gap-1">
                      Ver catálogo completo &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/qualidade-e-credenciais" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-600 hover:after:w-full after:transition-all">
            Qualidade & Credenciais
          </Link>

          <Link href="/alcance-global" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-600 hover:after:w-full after:transition-all">
            Alcance Global
          </Link>

          <Link href="/contato" className="text-sm font-medium text-graphite-900 hover:text-navy-800 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-600 hover:after:w-full after:transition-all">
            Contato
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <LanguageSelector />
          <Link href="/contato" className="btn-primary py-2.5 px-5 text-xs">
            Agendar uma conversa
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSelector />
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-navy-800 hover:text-gold-600 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-white border-b border-border-200 shadow-2xl p-6 flex flex-col gap-4 animate-fade-in-up">
          <nav className="flex flex-col gap-3 font-interface text-sm font-medium">
            <Link href="/" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              Home
            </Link>
            <Link href="/a-almaris" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              A Almaris
            </Link>
            <Link href="/servicos" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              Serviços
            </Link>
            <Link href="/produtos" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              Catálogo de Produtos
            </Link>
            <Link href="/qualidade-e-credenciais" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              Qualidade & Credenciais
            </Link>
            <Link href="/alcance-global" onClick={() => setIsMobileOpen(false)} className="py-2 border-b border-border-subtle text-navy-800">
              Alcance Global
            </Link>
            <Link href="/contato" onClick={() => setIsMobileOpen(false)} className="py-2 text-navy-800 font-semibold">
              Contato B2B
            </Link>
          </nav>

          <Link href="/contato" onClick={() => setIsMobileOpen(false)} className="btn-gold w-full text-center text-xs py-3 mt-2">
            Agendar uma conversa
          </Link>
        </div>
      )}
    </header>
  );
}
