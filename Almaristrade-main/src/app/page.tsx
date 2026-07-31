import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import LogoSlider from '@/components/LogoSlider';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* --------------------------------------------------------------------------
          BLOCO 1: HERO (80vh a 92vh no desktop)
          -------------------------------------------------------------------------- */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-navy-900 text-white overflow-hidden">
        <Image
          src="/assets/images/hero-port.png"
          alt="Operação portuária de exportação e infraestrutura logistica"
          fill
          priority
          className="object-cover object-center opacity-35 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />

        <div className="container-custom relative z-10 py-16">
          <div className="max-w-3xl space-y-6">
            <span className="overline text-gold-600">Desde 2016 • São Paulo, Brasil</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white tracking-tight">
              Fornecimento consistente.<br />Alcance global.
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light text-white/85 leading-relaxed max-w-2xl">
              A Almaris atua no comércio internacional B2B como parceira estratégica na originação, execução comercial, documentação aduaneira e logística de matérias-primas e commodities agrícolas brasileiras para compradores e indústrias globais.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/contato" className="btn-gold">
                Agendar uma conversa
              </Link>
              <Link href="/produtos" className="btn-outline-light">
                Conhecer nossos produtos
              </Link>
            </div>
          </div>

          {/* Faixa Discreta de Informações Confirmadas */}
          <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Fundação</span>
              <span className="font-display text-xl font-semibold text-white">Desde 2016</span>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Sede Operacional</span>
              <span className="font-display text-xl font-semibold text-white">São Paulo, Brasil</span>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Escopo de Atuação</span>
              <span className="font-display text-xl font-semibold text-white">Importação e Exportação</span>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block">Sectores</span>
              <span className="font-display text-xl font-semibold text-white">Agronegócio & Minerais</span>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          CARROSSEL CONTÍNUO DE LOGOS INSTITUCIONAIS
          -------------------------------------------------------------------------- */}
      <LogoSlider />

      {/* --------------------------------------------------------------------------
          BLOCO 2: MANIFESTO DE MARCA
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-ivory-50 text-graphite-900 border-b border-border-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="overline">Valores Institucionais</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-800 leading-tight">
                Comércio construído na confiança.
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                Acreditamos que o comércio internacional transcede simples transações spot. É uma relação contínua fundada no respeito mútuo e na integridade. Por trás de cada contrato assinado, há nomes, famílias e reputações que dependem da execução exata do que foi acordado na origem.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-border-200 p-8 border-l-4 border-l-gold-600 space-y-4">
              <p className="font-display text-xl sm:text-2xl italic text-navy-800 leading-snug">
                "Não medimos nosso sucesso pela quantidade de contratos, mas pela longevidade das parcerias que construímos em cada continente."
              </p>
              <div className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                Almaris International Trade • Compromisso Corporativo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          BLOCO 3: CAPACIDADES OPERACIONAIS (DA ORIGEM AO DESTINO)
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="overline">Execução Integrada</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800">
              Da origem ao destino.
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Gerenciamos cada fase do fluxo de exportação com rigor governamental e rastreabilidade total.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">01</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Originação</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Seleção e auditoria de fontes produtoras qualificadas no Brasil, garantindo especificação técnica adequada.
              </p>
            </div>

            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">02</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Execução Comercial</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Contratos internacionais alinhados aos padrões contratuais multilaterais (GAFTA, FOSFA, Incoterms 2020).
              </p>
            </div>

            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">03</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Documentação & Aduana</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Emissão e conformidade aduaneira de certificados fitossanitários, de origem e desembaraço.
              </p>
            </div>

            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">04</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Logística Multimodal</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Operação marítima e terrestre multimodal em contêineres FCL, navios a granel (Bulk) e Flexitanks.
              </p>
            </div>

            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">05</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Estrutura Financeira</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Operação com instrumentos de pagamento internacionais seguros (Cartas de Crédito L/C e CAD).
              </p>
            </div>

            <div className="p-6 bg-white border border-border-200 hover:border-gold-600 transition-all space-y-3 group">
              <span className="font-display text-3xl font-semibold text-gold-600">06</span>
              <h3 className="font-interface text-lg font-semibold text-navy-800">Inspeção Pré-embarque</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Coleta de amostras e laudos emitidos por auditorias independentes (SGS/Control Union) na origem.
              </p>
            </div>
          </div>

          <div className="mt-8 text-right">
            <Link href="/servicos" className="btn-link-editorial">
              Detalhar serviços operacionais &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          BLOCO 4: PRODUTOS SELECIONADOS NA ORIGEM
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-ivory-50 border-t border-border-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="overline">Portfólio de Exportação</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800">
                Produtos selecionados na origem.<br />Preparados para o mercado global.
              </h2>
            </div>
            <Link href="/produtos" className="btn-primary py-3 text-xs">
              Ver catálogo completo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.slug} className="bg-white border border-border-200 overflow-hidden flex flex-col group hover:border-navy-800 transition-all">
                <div className="relative h-48 w-full bg-ivory-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-navy-900 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                    {product.categoryLabel}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-display text-xl font-semibold text-navy-800 mb-2">{product.title}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">{product.summary}</p>
                  
                  {product.validationStatus?.isPending && (
                    <span className="inline-block bg-gold-100 text-gold-600 text-[10px] font-semibold px-2 py-1 mb-3">
                      {product.validationStatus.badgeLabel}
                    </span>
                  )}

                  <div className="mt-auto pt-3 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-[11px] text-gray-600 font-medium">{product.origin.split(' ')[0]}</span>
                    <Link href={`/produtos/${product.slug}`} className="text-xs font-semibold text-navy-800 hover:text-gold-600 transition-colors">
                      Especificações &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          BLOCO 5: QUALIDADE (REPUTAÇÃO: O ATIVO POR TRÁS DE CADA EMBARQUE)
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline">Governança & Rastreabilidade</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800 leading-tight">
                Reputação: o ativo por trás de cada embarque.
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed">
                O compromisso com a especificação acordada é inegociável. Cada lote exportado passa por rigorosa verificação de padrão, garantindo amostragem independente no porto de carregamento e conformidade documental completa.
              </p>

              <ul className="space-y-3 text-sm text-graphite-900 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Origem 100% auditada e qualificada no Brasil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Laudos de peso e qualidade por certificadoras independentes (SGS/Control Union).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-600 font-bold">✓</span>
                  <span>Cadeia documental completa com conformidade fitossanitária e aduaneira.</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link href="/qualidade-e-credenciais" className="btn-link-editorial">
                  Ver protocolo de credenciais &rarr;
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 border border-border-200 p-3 bg-ivory-50">
              <div className="relative h-[360px] w-full">
                <Image
                  src="/assets/images/operation-inspection.png"
                  alt="Inspeção de qualidade e amostragem na origem"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          BLOCO 6: ALCANCE (ANCORADOS NO BRASIL. EXPANDINDO PARA A EUROPA.)
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="overline text-gold-600">Presença Geográfica</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Ancorados no Brasil. Expandindo para a Europa.
            </h2>
            <p className="text-white/80 text-base font-light leading-relaxed">
              A partir de nossa sede em São Paulo, articulamos o escoamento de commodities pelos principais portos brasileiros, preparando a expansão de nossa estrutura operacional para Valência *(data sob protocolo de confirmação institucional)* para fortalecer a conexão entre a América do Sul e a União Europeia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white/5 border border-white/10 p-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Sede Estratégica</span>
              <h3 className="font-display text-xl text-white">São Paulo • Brasil</h3>
              <p className="text-xs text-white/70">Gestão comercial, governança contratual e coordenação aduaneira centralizada.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Polos Portuários</span>
              <h3 className="font-display text-xl text-white">Santos, Vitória & Paranaguá</h3>
              <p className="text-xs text-white/70">Complexos logísticos principais para exportação marítima de grãos, café e rochas.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">Expansão Futura</span>
              <h3 className="font-display text-xl text-white">Valência • Espanha*</h3>
              <p className="text-xs text-white/70">*Polo de apoio na União Europeia sob planejamento de cronograma institucional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------
          BLOCO 7: CTA FINAL (VAMOS COMECAR COM UMA CONVERSA)
          -------------------------------------------------------------------------- */}
      <section className="section-padding bg-ivory-50 border-t border-border-200">
        <div className="container-custom text-center max-w-3xl space-y-6">
          <span className="overline mx-auto">Atendimento Consultivo</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-800">
            Vamos começar com uma conversa.
          </h2>
          <p className="text-gray-600 text-base font-light leading-relaxed">
            Nossa equipe comercial e de operações está à disposição para analisar demandas de fornecimento, requisitos técnicos e viabilidade logística para o seu mercado.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contato" className="btn-gold">
              Agendar uma videochamada
            </Link>
            <Link href="/contato" className="btn-primary">
              Solicitar uma cotação
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
