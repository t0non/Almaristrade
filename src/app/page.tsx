import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';
import LogoSlider from '@/components/LogoSlider';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />

      {/* â”€â”€ CARROSSEL LOGOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <LogoSlider />

      {/* â”€â”€ BLOCO: IDENTIDADE CORPORATIVA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white border-b border-border-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="overline">Identidade Corporativa</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-navy-800 leading-tight">
                Uma trading brasileira construída sobre quase uma década de compromisso no comércio exterior.
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                A <strong className="text-graphite-900 font-semibold">Almaris International Trade Ltda.</strong> foi constituída em 24 de fevereiro de 2016, com sede em São Paulo/SP e CNPJ nº 24.249.746/0001-00. Com capital social de <strong className="text-graphite-900 font-semibold">R$ 1,25 milhão</strong> e situação cadastral ativa, operamos como elo direto entre produtores brasileiros qualificados e compradores institucionais em quatro continentes.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Nossa atuação é exclusivamente <strong className="text-graphite-900 font-semibold">B2B</strong> — atendemos refinarias, indústrias alimentícias, distribuidores internacionais e trading companies que exigem fornecimento consistente, documentação impecável e relacionamento de longo prazo.
              </p>

              {/* Ficha técnica */}
              <div className="mt-6 border border-border-200 divide-y divide-border-200">
                {[
                  { label: 'Razão Social', value: 'Almaris International Trade Ltda.' },
                  { label: 'CNPJ', value: '24.249.746/0001-00' },
                  { label: 'Constituição', value: '24 de fevereiro de 2016' },
                  { label: 'Situação Cadastral', value: 'Ativa' },
                  { label: 'Sede', value: 'São Paulo / SP — Brasil' },
                  { label: 'Capital Social', value: 'R$ 1.250.000,00' },
                  { label: 'Segmento', value: 'Agronegócio, Minerais e Serviços de Comex' },
                ].map(item => (
                  <div key={item.label} className="grid grid-cols-2 px-5 py-3 text-sm">
                    <span className="text-gray-600 font-medium">{item.label}</span>
                    <span className="text-graphite-900 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-navy-900 text-white p-8 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 block mb-4">Manifesto Corporativo</span>
                <p className="font-interface text-xl italic leading-snug text-white">
                  {`"Não medimos nosso sucesso pela quantidade de contratos, mas pela longevidade das parcerias que construímos em cada continente."`}
                </p>
                <div className="pt-5 border-t border-white/15 mt-5 text-xs text-white/60">
                  Almaris International Trade • Comprometimento Corporativo
                </div>
              </div>

              <div className="grid grid-cols-3 border border-border-200">
                {[
                  { num: '9+', label: 'Anos de operação' },
                  { num: 'B2B', label: 'Exclusivamente institucional' },
                  { num: '4', label: 'Continentes atendidos' },
                ].map((item, i) => (
                  <div key={i} className={`p-5 text-center ${i < 2 ? 'border-r border-border-200' : ''}`}>
                    <div className="font-interface text-2xl font-bold text-gold-600">{item.num}</div>
                    <div className="text-[11px] text-gray-600 mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/a-almaris" className="btn-link-editorial mt-2 inline-flex">
                Conheça nossa história institucional â†’
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ BLOCO: PORTFÓLIO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-ivory-50 border-t border-border-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="overline">Portfólio de Exportação</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800">
                Agronegócio e minerais.<br />Produtos originados no Brasil.
              </h2>
              <p className="text-gray-600 text-base mt-3 max-w-xl">
                Açúcar de cana, pimenta-preta, café, farelo de soja, gergelim, granito, mármore e quartzito — todos rastreados com documentação completa de exportação.
              </p>
            </div>
            <Link href="/produtos" className="btn-primary py-3 text-xs shrink-0">
              Ver catálogo completo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.slug} className="bg-white border border-border-200 overflow-hidden flex flex-col group hover:border-navy-800 transition-all">
                <div className="relative h-48 w-full bg-ivory-50">
                  <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-navy-900 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                    {product.categoryLabel}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-interface text-xl font-semibold text-navy-800 mb-1">{product.title}</h3>
                  <p className="text-[11px] text-gold-600 font-semibold uppercase tracking-wider mb-2">{product.origin}</p>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">{product.summary}</p>
                  <div className="mt-auto pt-3 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-[10px] text-gray-600 font-mono">NCM {product.ncm.split('/')[0].trim()}</span>
                    <Link href={`/produtos/${product.slug}`} className="text-xs font-semibold text-navy-800 hover:text-gold-600 transition-colors">
                      Especificações â†’
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Destaque minerais */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 border border-border-200 bg-white overflow-hidden">
            <div className="col-span-1 flex flex-col justify-center p-8 space-y-3">
              <span className="overline">Materiais Naturais</span>
              <h3 className="font-interface text-2xl font-semibold text-navy-800">Rochas ornamentais brasileiras</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Granito, mármore e quartzito exótico das jazidas do Espírito Santo e Ceará para distribuidores e marmorarias internacionais de alto padrão.
              </p>
              <Link href="/produtos/rochas-ornamentais" className="btn-link-editorial mt-2 inline-flex">
                Ver especificações técnicas â†’
              </Link>
            </div>
            <div className="col-span-2 relative h-52 md:h-auto min-h-[200px]">
              <Image
                src="/assets/images/commodity-stones.png"
                alt="Rochas ornamentais brasileiras — granito, mármore e quartzito"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ BLOCO: SERVIÇOS DE COMEX â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <span className="overline">Soluções B2B de Comércio Exterior</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800">
              Assessoria completa de importação e exportação.
            </h2>
            <p className="text-gray-600 text-base mt-3">
              Além do fornecimento de commodities, estruturamos e executamos operações completas de comércio exterior para empresas que precisam de parceiros confiáveis no Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-border-200">
            {[
              { num: '01', title: 'Assessoria de Comércio Exterior', desc: 'Consultoria em regulamentações aduaneiras, Incoterms 2020, câmbio e compliance exportador para empresas que iniciam ou expandem operações internacionais.' },
              { num: '02', title: 'Inteligência de Mercado', desc: 'Análise de preços internacionais, mapeamento de concorrência e identificação de oportunidades por país e setor para produtos brasileiros.' },
              { num: '03', title: 'Qualificação de Fornecedores', desc: 'Busca, due diligence e qualificação de produtores no Brasil — verificação fiscal, capacidade produtiva e regularidade junto ao MAPA e SISCOMEX.' },
              { num: '04', title: 'Operação de Exportação', desc: 'Gestão ponta a ponta: frete internacional, despacho aduaneiro, certificados fitossanitários e de origem, conhecimento de embarque (B/L) e câmbio.' },
              { num: '05', title: 'Operação de Importação', desc: 'Estruturação e execução de importações com DI, LI e licenças necessárias. Gerenciamento de fornecedores internacionais e conformidade regulatória.' },
              { num: '06', title: 'Documentação e Aduana', desc: 'Emissão e revisão de Invoice, Packing List, Certificado de Origem, BL, Phytosanitary Certificate e credenciais RADAR perante a Receita Federal.' },
            ].map((s, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              return (
                <div key={s.num} className={`p-7 space-y-3 hover:bg-ivory-50 transition-colors ${col < 2 ? 'border-r border-border-200' : ''} ${row === 0 ? 'border-b border-border-200' : ''}`}>
                  <span className="font-interface text-3xl font-semibold text-gold-600">{s.num}</span>
                  <h3 className="text-base font-semibold text-navy-800">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <Link href="/servicos" className="btn-link-editorial">
              Ver todas as soluções operacionais â†’
            </Link>
          </div>
        </div>
      </section>

      {/* â”€â”€ BLOCO: GOVERNANÇA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-ivory-50 border-y border-border-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="overline">Governança e Rastreabilidade</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy-800 leading-tight">
                Conformidade regulatória em cada embarque.
              </h2>
              <p className="text-gray-600 text-base font-light leading-relaxed">
                Todas as operações são conduzidas em plena conformidade com o SISCOMEX, RADAR e MAPA. Inspeções pré-embarque por certificadoras internacionais independentes com emissão de laudo oficial de peso e qualidade.
              </p>

              <ul className="space-y-3 text-sm text-graphite-900 font-medium">
                {[
                  'Contratos sob Incoterms 2020 (GAFTA / FOSFA / ICC)',
                  'Origem 100% auditada e qualificada no Brasil',
                  'Laudos SGS / Control Union em todos os embarques',
                  'Cartas de Crédito (L/C) e Cobrança Documentária (CAD)',
                  'Certificados fitossanitários emitidos pelo MAPA',
                  'Habilitação RADAR ativa perante a Receita Federal',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold-600 font-bold mt-0.5">âœ“</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link href="/qualidade-e-credenciais" className="btn-link-editorial">
                  Ver protocolo de credenciais â†’
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 border border-border-200 p-3 bg-white">
              <div className="relative h-[360px] w-full">
                <Image src="/assets/images/operation-inspection.png" alt="Inspeção de qualidade pré-embarque" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ BLOCO: ALCANCE GEOGRÃFICO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="overline text-gold-600">Presença Geográfica</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Ancorados no Brasil. Compradores em quatro continentes.
            </h2>
            <p className="text-white/80 text-base font-light leading-relaxed">
              A partir de nossa sede em São Paulo, articulamos o escoamento de commodities agrícolas e minerais pelos principais complexos portuários brasileiros para importadores nas Américas, Europa, Ãsia e Oriente Médio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { badge: 'Sede Estratégica', title: 'São Paulo • Brasil', desc: 'Gestão comercial, governança contratual, documentação e coordenação aduaneira centralizadas.' },
              { badge: 'Polos Portuários', title: 'Santos, Vitória, Paranaguá', desc: 'Escoamento FCL, granel e flexitank de grãos, café e rochas ornamentais.' },
              { badge: 'Destinos Ativos', title: 'Europa e Américas', desc: 'Importadores institucionais na UE, EUA e América Latina com relacionamentos continuados.' },
              { badge: 'Expansão Futura', title: 'Valência • Espanha*', desc: '*Polo de apoio na União Europeia em planejamento para fortalecer a ponte Sul Américaâ€“UE.' },
            ].map(item => (
              <div key={item.badge} className="bg-white/5 border border-white/10 p-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">{item.badge}</span>
                <h3 className="font-interface text-lg text-white">{item.title}</h3>
                <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ CTA FINAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <section className="section-padding bg-ivory-50 border-t border-border-200">
        <div className="container-custom text-center max-w-3xl space-y-6">
          <span className="overline mx-auto">Atendimento Consultivo B2B</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-800">
            Vamos estruturar sua próxima operação.
          </h2>
          <p className="text-gray-600 text-base font-light leading-relaxed">
            Nossa equipe comercial analisa demandas de fornecimento, avalia viabilidade de importação e estrutura propostas técnicas sem compromisso inicial.
          </p>
          <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
            Atendimento exclusivo para empresas e compradores institucionais.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contato" className="btn-gold">Agendar videochamada comercial</Link>
            <Link href="/contato" className="btn-primary">Solicitar proposta técnica</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
