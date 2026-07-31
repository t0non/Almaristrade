import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Serviços de Exportação e Importação | Operação Integrada',
  description: 'Soluções integradas de comércio exterior: originação de produtos no Brasil, execução contratual, despacho aduaneiro, logística e inspeção pré-embarque.'
};

export default function ServicesPage() {
  const steps = [
    {
      num: '01',
      title: 'Originação e Fornecimento',
      subtitle: 'Mapeamento e qualificação contínua na origem',
      desc: 'Seleção rigorosa de origens agrícolas, minerárias e industriais brasileiras. Auditamos capacidade volumétrica, licenças operacionais e regularidade fiscal antes de qualquer inclusão no portfólio.'
    },
    {
      num: '02',
      title: 'Execução Comercial e Contratos',
      subtitle: 'Segurança jurídica sob padrões multilaterais',
      desc: 'Elaboração e alinhamento de contratos de compra e venda internacional pautados pelas regras da Câmara Internacional de Comércio (Incoterms 2020) e entidades setoriais (GAFTA / FOSFA).'
    },
    {
      num: '03',
      title: 'Documentação e Aduana',
      subtitle: 'Conformidade legal e desembaraço sem entraves',
      desc: 'Gestão da cadeia documental de exportação: Certificados de Origem, Certificados Fitossanitários do MAPA, Faturas Comerciais, Packing Lists e Conhecimentos de Embarque (B/L).'
    },
    {
      num: '04',
      title: 'Logística Internacional Multimodal',
      subtitle: 'Escoamento rodoviário, portuário e marítimo',
      desc: 'Coordenação do frete interno no Brasil, armazenagem em recintos alfandegados e contratação de praça em navios de linha regular (FCL contêineres), flexitanks ou chartering a granel (Bulk).'
    },
    {
      num: '05',
      title: 'Estrutura Financeira e Pagamento',
      subtitle: 'Mitigação do risco cambial e de crédito',
      desc: 'Operação com instrumentos financeiros consolidados no comércio multilateral, incluindo Cartas de Crédito Irrevogáveis e Confirmadas (L/C), Cobranças Documentárias (CAD) e prazos diferidos.'
    },
    {
      num: '06',
      title: 'Qualidade e Inspeção Pré-embarque',
      subtitle: 'Conferência técnica no porto de saída',
      desc: 'Coleta de amostras e emissão de laudos oficiais de peso e qualidade por certificadoras internacionais independentes (SGS, Control Union ou indicada pelo comprador) antes do embarque.'
    }
  ];

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Serviços' }]} />

      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Soluções Integradas B2B</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
              Operação comercial ponta a ponta com gestão de risco.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Oferecemos a gestão completa do fluxo de comércio exterior no Brasil, reduzindo incertezas regulatórias, garantindo a conformidade da carga e organizando a logística internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Narrativa Visual Progressiva das 6 Etapas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-border-200 last:border-0"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  <span className="font-display text-4xl lg:text-5xl font-semibold text-gold-600">
                    {step.num}
                  </span>
                  <div className="h-10 w-[1px] bg-border-200 hidden lg:block" />
                </div>

                <div className="lg:col-span-9 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {step.subtitle}
                  </span>
                  <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy-800">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white text-center">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="font-display text-3xl font-semibold text-white">
            Precisa estruturar uma operação de exportação no Brasil?
          </h2>
          <p className="text-white/80 text-sm">
            Nossa equipe analisa a viabilidade técnica, fiscal e logística sem qualquer compromisso inicial.
          </p>
          <div>
            <Link href="/contato" className="btn-gold">
              Analisar viabilidade operacional
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
