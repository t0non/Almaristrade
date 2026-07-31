import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Atendimento Comercial B2B & Contato | Almaris Trade',
  description: 'Agende uma conversa corporativa, solicite cotação de commodities ou consulte a viabilidade logística e técnica com a equipe da Almaris.'
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Contato' }]} />

      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Atendimento Comercial B2B</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
              Diálogo direto com nossa equipe de operações.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Estamos prontos para analisar os requisitos específicos da sua empresa, apresentar laudos técnicos e estruturar uma proposta de fornecimento consistente.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Informações da Sede & Protocolos */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-ivory-50 p-6 border border-border-200 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Sede Operacional</span>
                <h3 className="font-display text-2xl font-semibold text-navy-800">São Paulo • Brasil</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Centralização das decisões contratuais, coordenação aduaneira e atendimento internacional.
                </p>
              </div>

              <div className="space-y-4 text-xs text-gray-600">
                <div>
                  <strong className="block text-navy-800 uppercase text-[11px] tracking-wider mb-1">Horário de Atendimento</strong>
                  <span>Segunda a Sexta • 08:00 às 18:00 (Fuso horário UTC-3)</span>
                </div>
                <div>
                  <strong className="block text-navy-800 uppercase text-[11px] tracking-wider mb-1">Confidencialidade Comercial</strong>
                  <span>Todas as solicitações enviadas são tratadas sob estrito sigilo corporativo e termos de confidencialidade B2B.</span>
                </div>
              </div>
            </div>

            {/* Componente Interativo de Formulário B2B */}
            <div className="lg:col-span-8">
              <ContactForm initialPathway="cotacao" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
