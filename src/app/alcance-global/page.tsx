import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import MinimalVectorMap from '@/components/MinimalVectorMap';

export const metadata = {
  title: 'Alcance Global & Rotas Comerciais | Almaris Trade',
  description: 'Conectando as origens produtoras brasileiras aos mercados da Europa, Oriente Médio e Américas através dos principais complexos portuários.'
};

export default function GlobalReachPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Alcance Global' }]} />

      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Presença Internacional</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
              Origem estratégica no Brasil. Destinos mundiais.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              A partir de nossa sede em São Paulo, operamos o escoamento marítimo pelos principais portos do Brasil para atender compradores no Mercosul, União Europeia, Oriente Médio e Ásia.
            </p>
          </div>
        </div>
      </section>

      {/* Seção do Mapa Vetorial Minimalista */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-12">
          <MinimalVectorMap />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-border-200 space-y-3">
              <span className="text-xs font-semibold uppercase text-gold-600">Américas & Mercosul</span>
              <h3 className="font-display text-xl font-semibold text-navy-800">Origens & Fluxos Regionais</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Integração direta com lavouras do Centro-Oeste e Sudeste do Brasil para fornecimento a parceiros do Mercosul e América do Norte.
              </p>
            </div>

            <div className="p-6 border border-border-200 space-y-3">
              <span className="text-xs font-semibold uppercase text-gold-600">União Europeia</span>
              <h3 className="font-display text-xl font-semibold text-navy-800">Expansão para Valência*</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Estruturação de apoio operacional em Valência *(data sob protocolo de confirmação)* para acelerar conexões logísticas europeias.
              </p>
            </div>

            <div className="p-6 border border-border-200 space-y-3">
              <span className="text-xs font-semibold uppercase text-gold-600">Oriente Médio & MENA</span>
              <h3 className="font-display text-xl font-semibold text-navy-800">Mercados de Commodities</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Exportação de café, pimenta preta, gergelim e farelo de soja para refinarias e indústrias da região MENA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-50 border-t border-border-200 text-center">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="font-display text-3xl font-semibold text-navy-800">
            Deseja verificar rotas marítimas para o seu porto de destino?
          </h2>
          <div>
            <Link href="/contato" className="btn-primary">
              Consultar viabilidade de rota
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
