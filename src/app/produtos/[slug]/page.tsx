import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PRODUCTS, ProductData } from '@/data/products';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.title} (Exportação) | Almaris Trade`,
    description: product.summary,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: 'Produtos', href: '/produtos' },
          { label: product.title }
        ]}
      />

      {/* Hero do Produto */}
      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="overline">{product.categoryLabel}</span>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
                {product.title}
              </h1>
              {product.scientificName && (
                <p className="text-sm italic text-gray-600">Nome Científico: {product.scientificName}</p>
              )}
              <p className="text-gray-600 text-lg font-light leading-relaxed">{product.summary}</p>

              <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-graphite-900 border-t border-border-200">
                <div>
                  <span className="font-semibold text-gold-600 block uppercase">Origem Brasileira</span>
                  <span>{product.origin}</span>
                </div>
                <div>
                  <span className="font-semibold text-gold-600 block uppercase">Código NCM</span>
                  <span className="font-mono">{product.ncm}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/contato" className="btn-gold">
                  Solicitar cotação deste produto
                </Link>
                <Link href="/contato" className="btn-primary">
                  Consultar disponibilidade
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-border-200 p-3">
              <div className="relative h-[320px] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviso de Pendência de Validação se houver (ex: Açúcar VHP) */}
      {product.validationStatus?.isPending && (
        <section className="bg-gold-100 border-y border-gold-600 py-4">
          <div className="container-custom flex items-start gap-3">
            <span className="text-gold-600 font-bold text-lg">ℹ</span>
            <div className="text-xs text-navy-800 font-medium leading-relaxed">
              <strong>{product.validationStatus.badgeLabel}:</strong> {product.validationStatus.noticeMessage}
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo Detalhado & Especificações Técnicas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              {/* Visão Geral */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy-800 mb-4">Visão Geral</h2>
                <p className="text-gray-600 text-base leading-relaxed font-light">{product.overview}</p>
              </div>

              {/* Aplicações Industriais */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy-800 mb-4">Aplicações Industriais</h2>
                <ul className="space-y-2">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-graphite-900">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tabela de Especificações Técnicas (Responsiva e Acessível) */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy-800 mb-4">Especificações Técnicas Padrão</h2>
                <div className="overflow-x-auto border border-border-200 rounded-sm">
                  <table className="w-full text-left border-collapse text-xs md:text-sm" aria-label={`Especificações Técnicas de ${product.title}`}>
                    <thead>
                      <tr className="bg-ivory-50 text-navy-800 border-b border-border-200">
                        <th scope="col" className="p-3.5 font-semibold">Parâmetro Analítico</th>
                        <th scope="col" className="p-3.5 font-semibold">Especificação Padrão de Exportação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-200">
                      {product.specs.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-ivory-50/50 transition-colors">
                          <th scope="row" className="p-3.5 font-medium text-graphite-900">{spec.parameter}</th>
                          <td className="p-3.5 text-gray-600">{spec.specification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Embalagem & Acondicionamento */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy-800 mb-4">Opções de Embalagem & Logística</h2>
                <ul className="space-y-2">
                  {product.packaging.map((pack, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-graphite-900">
                      <span className="text-gold-600 font-bold">•</span>
                      <span>{pack}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coluna Lateral: Qualidade & Observações Comerciais */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-ivory-50 p-6 border border-border-200 space-y-4">
                <h3 className="font-display text-xl font-semibold text-navy-800">Qualidade & Inspeção</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{product.qualityNotes}</p>
              </div>

              <div className="bg-navy-900 text-white p-6 border border-white/10 space-y-4">
                <h3 className="font-display text-xl font-semibold text-white">Observações Comerciais</h3>
                <p className="text-xs text-white/80 leading-relaxed">{product.tradeNotes}</p>
                <div className="pt-2">
                  <Link href="/contato" className="btn-gold w-full text-center text-xs py-3">
                    Solicitar proposta B2B
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Relacionados */}
      <section className="section-padding bg-ivory-50 border-t border-border-200">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-semibold text-navy-800 mb-8">Outros Produtos do Portfólio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.slug} className="bg-white border border-border-200 p-5 space-y-3">
                <span className="text-[10px] font-semibold uppercase text-gold-600">{rel.categoryLabel}</span>
                <h3 className="font-display text-xl font-semibold text-navy-800">{rel.title}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{rel.summary}</p>
                <Link href={`/produtos/${rel.slug}`} className="btn-link-editorial text-xs block">
                  Ver detalhes &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
