import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import LogoSlider from '@/components/LogoSlider';

export const metadata = {
  title: 'Qualidade & Credenciais | Due Diligence Institucional',
  description: 'Processos auditados de amostragem pré-embarque, certificadoras independentes (SGS/Control Union) e habilitação regulatória perante o SISCOMEX e MAPA.'
};

export default function QualityPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Qualidade & Credenciais' }]} />

      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Due Diligence & Governança</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
              Processos auditados para garantir a integridade da carga.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              A credibilidade da Almaris apoia-se em procedimentos rigorosos de qualificação da origem e conferência técnica em cada contrato executado no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Carrossel Infinito de Filiações Institucionais */}
      <LogoSlider />

      {/* Due Diligence Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline">Amostragem & Análise</span>
              <h2 className="font-display text-3xl font-semibold text-navy-800">
                Inspeção pré-embarque por entidades independentes.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Antes de qualquer desatracação ou fechamento de contêiner nos portos brasileiros, submetemos a carga a testes de amostragem conduzidos por empresas globais de auditoria independente, como SGS ou Control Union (ou entidade indicada no contrato).
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Os laudos oficiais emitidos atestam parâmetros como umidade, densidade, teor de proteína, granulometria e pesagem aferida na balança do recinto alfandegado.
              </p>
            </div>

            <div className="lg:col-span-6 border border-border-200 p-3 bg-ivory-50">
              <div className="relative h-[340px] w-full">
                <Image
                  src="/assets/images/operation-inspection.png"
                  alt="Inspeção de amostragem em terminal agrícola"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Registros Regulares Confirmados */}
          <div className="border-t border-border-200 pt-12">
            <span className="overline mb-6">Habilitação Regulatória no Brasil</span>
            <h3 className="font-display text-2xl font-semibold text-navy-800 mb-8">
              Registros e conformidade legal auditada
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-ivory-50 p-6 border border-border-200 border-t-2 border-t-gold-600 space-y-2">
                <span className="text-xs font-semibold uppercase text-gold-600">Receita Federal</span>
                <h4 className="font-interface text-base font-semibold text-navy-800">SISCOMEX / RADAR</h4>
                <p className="text-xs text-gray-600">Habilitação ativa para operações ilimitadas de exportação e importação.</p>
              </div>

              <div className="bg-ivory-50 p-6 border border-border-200 border-t-2 border-t-gold-600 space-y-2">
                <span className="text-xs font-semibold uppercase text-gold-600">Ministério da Agricultura</span>
                <h4 className="font-interface text-base font-semibold text-navy-800">Conformidade MAPA</h4>
                <p className="text-xs text-gray-600">Emissão de Certificados Fitossanitários de origem vegetal.</p>
              </div>

              <div className="bg-ivory-50 p-6 border border-border-200 border-t-2 border-t-gold-600 space-y-2">
                <span className="text-xs font-semibold uppercase text-gold-600">Regularidade Fiscal</span>
                <h4 className="font-interface text-base font-semibold text-navy-800">CNPJ Ativo & Regular</h4>
                <p className="text-xs text-gray-600">Cadastro de Pessoa Jurídica ativo desde a fundação em 2016.</p>
              </div>

              <div className="bg-ivory-50 p-6 border border-border-200 border-t-2 border-t-gold-600 space-y-2">
                <span className="text-xs font-semibold uppercase text-gold-600">Inspeção Independente</span>
                <h4 className="font-interface text-base font-semibold text-navy-800">SGS / Control Union</h4>
                <p className="text-xs text-gray-600">Emissão de laudos de amostragem pré-embarque no porto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 text-white text-center">
        <div className="container-custom max-w-2xl space-y-6">
          <h2 className="font-display text-3xl font-semibold text-white">
            Solicite o protocolo de due diligence para a sua equipe jurídica.
          </h2>
          <div>
            <Link href="/contato" className="btn-gold">
              Falar com nossa equipe de compliance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
