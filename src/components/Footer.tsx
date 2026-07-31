import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Coluna 1: Marca & Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center mb-2">
              <img src="/assets/images/logo-almaris.png" alt="Almaris International Trade" className="h-12 w-auto" />
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Empresa brasileira de comércio internacional fundada em 2016. Operação B2B ponta a ponta em originação, logística, aduana e inspeção de matérias-primas.
            </p>
            <div className="text-[11px] text-gold-600 font-semibold uppercase tracking-widest pt-2">
              Sede Operacional: São Paulo • Brasil
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 mb-4">
              Navegação Institucional
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/a-almaris" className="hover:text-white transition-colors">A Almaris</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços de IMP/EXP</Link></li>
              <li><Link href="/produtos" className="hover:text-white transition-colors">Catálogo de Produtos</Link></li>
              <li><Link href="/qualidade-e-credenciais" className="hover:text-white transition-colors">Qualidade & Credenciais</Link></li>
              <li><Link href="/alcance-global" className="hover:text-white transition-colors">Alcance Global</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato B2B</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Portfólio Principal */}
          <div>
            <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 mb-4">
              Portfólio Principal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/produtos/pimenta-preta" className="hover:text-white transition-colors">Pimenta Preta (ASTA/FAQ)</Link></li>
              <li><Link href="/produtos/acucar" className="hover:text-white transition-colors">Açúcar (Exportação)</Link></li>
              <li><Link href="/produtos/farelo-de-soja-46" className="hover:text-white transition-colors">Farelo de Soja 46%</Link></li>
              <li><Link href="/produtos/cafe" className="hover:text-white transition-colors">Café Arábica & Conilon</Link></li>
              <li><Link href="/produtos/rochas-ornamentais" className="hover:text-white transition-colors">Placas de Rochas Ornamentais</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Governança & Contato */}
          <div className="space-y-4">
            <h4 className="font-interface text-xs font-semibold uppercase tracking-[0.15em] text-gold-600 mb-4">
              Governança & Due Diligence
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Operações conduzidas sob conformidade regulatória perante o SISCOMEX, RADAR e MAPA. Inspeções pré-embarque por certificadoras independentes.
            </p>
            <div className="pt-2">
              <Link href="/contato" className="btn-outline-light text-[11px] py-2 px-4">
                Solicitar Cotação B2B
              </Link>
            </div>
          </div>
        </div>

        {/* Rodapé Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © 2016–2026 ALMARIS INTERNATIONAL TRADE. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
