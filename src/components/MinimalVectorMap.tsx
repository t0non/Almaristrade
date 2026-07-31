import React from 'react';

export default function MinimalVectorMap() {
  return (
    <div className="relative w-full bg-navy-900 border border-white/10 p-6 md:p-10 rounded-sm overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5870E_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Rotas Multilaterais & Conexões
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-white mt-1">
              Origem Brasil • Conexão Europa & Oriente Médio
            </h3>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" /> Sede / Origem (SP)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-gold-600" /> Expansão Estratégica (Valência)
            </span>
          </div>
        </div>

        {/* SVG Minimalist Vector Map Lines & Points */}
        <div className="w-full h-[320px] md:h-[400px] relative flex items-center justify-center">
          <svg viewBox="0 0 1000 500" className="w-full h-full stroke-white/20 fill-none" aria-label="Mapa de Rotas Comerciais da Almaris">
            {/* World Continent Silhouettes (Minimalist Polygons) */}
            {/* Americas */}
            <path d="M 200,120 L 280,100 L 320,160 L 290,220 L 240,240 L 190,190 Z" className="fill-white/5 stroke-white/15" />
            <path d="M 280,260 L 340,280 L 380,360 L 350,440 L 300,420 L 270,330 Z" className="fill-white/5 stroke-white/15" />
            
            {/* Europe & Africa */}
            <path d="M 460,110 L 540,100 L 570,160 L 510,180 L 460,150 Z" className="fill-white/5 stroke-white/15" />
            <path d="M 480,200 L 580,220 L 600,340 L 540,400 L 470,300 Z" className="fill-white/5 stroke-white/15" />
            
            {/* Asia & Middle East */}
            <path d="M 590,120 L 780,100 L 850,220 L 720,280 L 610,200 Z" className="fill-white/5 stroke-white/15" />

            {/* Trade Route Arcs */}
            {/* Brazil to Europe Arc */}
            <path
              d="M 330,330 Q 420,180 500,160"
              className="stroke-gold-600 stroke-[2] [stroke-dasharray:6] animate-[dash_20s_linear_infinite]"
            />

            {/* Brazil to MENA Arc */}
            <path
              d="M 330,330 Q 520,240 640,210"
              className="stroke-gold-600/70 stroke-[1.5] [stroke-dasharray:4]"
            />

            {/* Key Nodes / Markers */}
            {/* São Paulo / Ports Node */}
            <g transform="translate(330, 330)">
              <circle r="6" className="fill-gold-600 animate-ping opacity-75" />
              <circle r="4" className="fill-gold-600" />
              <text x="12" y="4" className="fill-white text-[11px] font-interface font-semibold">São Paulo (Sede) / Portos BR</text>
            </g>

            {/* Valencia Node */}
            <g transform="translate(500, 160)">
              <circle r="4" className="fill-none stroke-gold-600 stroke-2" />
              <text x="12" y="4" className="fill-gold-600 text-[11px] font-interface font-semibold">Valência (Polo Europa)*</text>
            </g>

            {/* MENA Node */}
            <g transform="translate(640, 210)">
              <circle r="3" className="fill-white/80" />
              <text x="10" y="4" className="fill-white/70 text-[10px] font-interface">Oriente Médio & Ásia</text>
            </g>
          </svg>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-2">
          <span>* Operação em Valência sob protocolo de confirmação de cronograma institucional.</span>
          <span className="text-gold-600 font-semibold">Complexos Portuários: Santos • Paranaguá • Vitória • Vila do Conde • Rio Grande</span>
        </div>
      </div>
    </div>
  );
}
