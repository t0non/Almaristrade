"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      // autoplay bloqueado pelo browser – poster cobre
    });
  }, []);

  return (
    <section
      className="hero-section relative w-full overflow-hidden"
      aria-label="Almaris International Trade – Hero"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* ── Vídeo de fundo ─────────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 w-full h-full object-cover object-center"
        poster="/assets/images/hero-port.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/assets/images/hero-almaris.mp4" type="video/mp4" />
        <source src="/assets/images/hero-almaris.mov" type="video/quicktime" />
        <source src="/assets/images/AdobeStock_424553782.mov" type="video/quicktime" />
      </video>

      {/* ── Overlay lateral (esq escuro → dir transparente) ────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(14,34,61,0.93) 0%, rgba(14,34,61,0.76) 36%, rgba(14,34,61,0.40) 65%, rgba(14,34,61,0.18) 100%)',
        }}
      />

      {/* ── Overlay vertical (suaviza topo e rodapé) ───────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(14,34,61,0.30) 0%, transparent 18%, transparent 80%, rgba(14,34,61,0.45) 100%)',
        }}
      />

      {/* ── Conteúdo ───────────────────────────────────────────────── */}
      <div className="hero-content relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="hero-text max-w-[680px]">

          {/* Overline */}
          <div className="hero-overline flex items-center gap-3 mb-7">
            <span
              className="block"
              style={{
                width: '28px',
                height: '1px',
                background: '#C5870E',
              }}
              aria-hidden="true"
            />
            <span
              className="font-interface uppercase text-gold-600"
              style={{ fontSize: '0.75rem', fontWeight: 500, lineHeight: 1.3, letterSpacing: '0.24em' }}
            >
              Desde 2016 · International Trade
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-headline font-display text-white"
            style={{ 
              fontSize: 'clamp(3rem, 6vw, 5.75rem)',
              fontWeight: 300,
              lineHeight: 0.98,
              letterSpacing: '-0.025em'
            }}
          >
            Fornecimento consistente.
            <br />
            Alcance global.
          </h1>

          {/* Texto de apoio */}
          <p
            className="hero-body font-interface text-white/80 mt-7"
            style={{
              fontSize: 'clamp(16px, 1.5vw, 18px)',
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: '-0.005em',
              maxWidth: '560px',
            }}
          >
            Originação, execução comercial, documentação e logística internacional de produtos brasileiros para compradores globais.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4 mt-10">
            <Link
              href="/contato"
              className="hero-btn-primary font-interface uppercase"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 32px',
                background: '#C5870E',
                color: '#0E2240',
                border: '1px solid #C5870E',
                letterSpacing: '0.01em',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#DF9D1C';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#DF9D1C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#C5870E';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C5870E';
              }}
            >
              Agendar uma conversa
            </Link>

            <Link
              href="/produtos"
              className="hero-btn-secondary font-interface uppercase"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                padding: '14px 32px',
                background: 'transparent',
                color: 'rgba(255,255,255,0.90)',
                border: '1px solid rgba(255,255,255,0.35)',
                letterSpacing: '0.01em',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.10)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.65)';
                (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.90)';
              }}
            >
              Conhecer nossos produtos
            </Link>
          </div>
        </div>
      </div>

      {/* ── Indicador de scroll ────────────────────────────────────── */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(197,135,14,0.7), transparent)',
          }}
        />
      </div>
    </section>
  );
}
