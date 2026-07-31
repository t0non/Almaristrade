"use client";

import React from 'react';

const LOGOS = [
  { name: 'Câmara de Comércio Árabe-Brasileira', src: '/assets/images/logos/camara-arabe-brasileira.png' },
  { name: 'ConnectAmericas', src: '/assets/images/logos/connect-americas.png' },
  { name: 'CECIEX - Conselho das Empresas Importadoras e Exportadoras', src: '/assets/images/logos/ceciex.png' },
  { name: 'Brasil Exportação ApexBrasil', src: '/assets/images/logos/brasil-exportacao.png' },
  { name: 'Associação Comercial de São Paulo', src: '/assets/images/logos/associacao-comercial-sp.png' },
  { name: 'Câmara de Comércio Brasil-Espanha', src: '/assets/images/logos/camara-brasil-espanha.png' },
  { name: 'Exporta SP', src: '/assets/images/logos/exporta-sp.png' },
];

export default function LogoSlider() {
  // Triplicar lista para garantir rotação contínua infinita sem saltos
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <div className="w-full bg-ivory-50 border-y border-border-200/60 py-10 overflow-hidden relative">
      <div className="container-custom mb-6 text-center">
        <h2 
          className="font-interface font-light text-center text-3xl sm:text-4xl lg:text-5xl tracking-tight"
          style={{ color: '#282828' }}
        >
          Filiações Institucionais, Câmaras de Comércio & Redes Globais
        </h2>
      </div>

      {/* Sombra suave e degradê nas bordas laterais */}
      <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-ivory-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-ivory-50 to-transparent z-10 pointer-events-none" />

      {/* Track do Carrossel Contínuo Sem Containers, com Cores Originais e Tamanho Ampliado */}
      <div className="flex items-center gap-16 md:gap-24 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-3">
        {duplicatedLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center h-56 md:h-64 transition-transform hover:scale-105"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-48 md:h-56 w-auto object-contain max-w-[500px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
