import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'A Almaris | Nossa História e Governança Corporativa',
  description: 'Conheça a história da Almaris International Trade desde 2016. Filosofia de negócios de longo prazo e compromisso com a originação transparente no Brasil.'
};

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'A Almaris' }]} />

      {/* Hero Institucional */}
      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Institucional • Desde 2016</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800 leading-tight">
              A longevidade das relações como pilar do comércio exterior.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              A Almaris foi fundada em 2016 com uma premissa clara: o comércio internacional de commodities deve ser conduzido com a solidez de uma grande corporação e o compromisso ético de uma gestão transparente e orientada no longo prazo.
            </p>
          </div>
        </div>
      </section>

      {/* Composição Editorial: Visão, Propósito & Manifesto */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline">Filosofia de Negócios</span>
              <h2 className="font-display text-3xl font-semibold text-navy-800">
                Responsabilidade pessoal em negociações B2B de alto valor.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                No comércio internacional de alta escala, por trás de cada especificação técnica e de cada lote de exportação há o nome e a reputação das partes envolvidas. Preservamos um modelo de governança onde a liderança participa diretamente da estruturação das operações.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Não atuamos com intermediários desnecessários. Conectamos origens agrícolas e minerais brasileiras qualificadas a refinarias, indústrias e compradores internacionais de forma direta, transparente e rastreável.
              </p>
            </div>

            <div className="lg:col-span-6 bg-navy-900 text-white p-8 md:p-10 border border-white/10 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Manifesto Corporativo</span>
              <p className="font-display text-2xl italic leading-snug">
                "Uma reputação leva anos para ser construída no comércio exterior e pode ser comprometida em um único embarque sem conformidade. Por isso, a especificação contratual é o nosso compromisso inegociável."
              </p>
              <div className="pt-4 border-t border-white/15 text-xs text-white/70">
                Almaris International Trade • Governança na Origem
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo (Desde 2016) */}
      <section className="section-padding bg-ivory-50 border-y border-border-200">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="overline">Evolução Histórica</span>
            <h2 className="font-display text-3xl font-semibold text-navy-800">
              Uma década de construção contínua no Brasil.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-border-200 space-y-3">
              <span className="font-display text-2xl font-bold text-gold-600">2016</span>
              <h3 className="font-interface text-base font-semibold text-navy-800">Fundação</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Início das atividades em São Paulo com foco na originação de especiarias e produtos agrícolas regionais.
              </p>
            </div>

            <div className="bg-white p-6 border border-border-200 space-y-3">
              <span className="font-display text-2xl font-bold text-gold-600">2019</span>
              <h3 className="font-interface text-base font-semibold text-navy-800">Expansão de Produtos</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Inclusão de nutrição animal (farelo de soja, DDGs) e rochas ornamentais de jazidas brasileiras.
              </p>
            </div>

            <div className="bg-white p-6 border border-border-200 space-y-3">
              <span className="font-display text-2xl font-bold text-gold-600">2022</span>
              <h3 className="font-interface text-base font-semibold text-navy-800">Acordos Portuários</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Consolidação da logística nos complexos de Santos, Paranaguá, Vitória e Vila do Conde.
              </p>
            </div>

            <div className="bg-white p-6 border border-border-200 space-y-3">
              <span className="font-display text-2xl font-bold text-gold-600">Presente</span>
              <h3 className="font-interface text-base font-semibold text-navy-800">Alcance Multilateral</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Fornecimento para importadores das Américas, Europa e Oriente Médio com total rastreabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="font-display text-3xl font-semibold text-navy-800">
            Conheça nossos padrões operacionais.
          </h2>
          <p className="text-gray-600 text-sm">
            Nossa equipe de diretores e especialistas em comércio exterior está disponível para agendamento de reuniões corporativas.
          </p>
          <div className="pt-2">
            <Link href="/contato" className="btn-gold">
              Falar com nossa equipe comercial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
