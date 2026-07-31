import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PRODUCTS } from '@/data/products';

export const metadata = {
  title: 'Catálogo Institucional de Produtos & Commodities | Almaris Trade',
  description: 'Portfólio de matérias-primas e commodities de exportação brasileiras: pimenta preta, farelo de soja 46%, café, óleo de milho, gergelim e rochas ornamentais.'
};

export default function ProductsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Produtos' }]} />

      <section className="section-padding bg-ivory-50 border-b border-border-200">
        <div className="container-custom">
          <div className="max-w-3xl space-y-4">
            <span className="overline">Catálogo de Exportação</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy-800">
              Produtos selecionados na origem. Padrão internacional.
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Consulte nosso portfólio institucional de commodities agrícolas, nutrição animal, especialidades e matérias-primas minerais originadas no Brasil para atendimento B2B global.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Editorial de Produtos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.slug} className="bg-white border border-border-200 overflow-hidden flex flex-col group hover:border-navy-800 transition-all">
                <div className="relative h-56 w-full bg-ivory-50">
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

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-navy-800">{product.title}</h2>
                    {product.scientificName && (
                      <span className="text-xs italic text-gray-600 block mt-0.5">{product.scientificName}</span>
                    )}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">{product.summary}</p>

                  {product.validationStatus?.isPending && (
                    <div className="bg-gold-100 border-l-2 border-gold-600 p-2.5 text-[11px] text-navy-800 font-medium">
                      <strong>{product.validationStatus.badgeLabel}:</strong> {product.validationStatus.noticeMessage}
                    </div>
                  )}

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block mb-1">
                      Origem & NCM
                    </span>
                    <div className="text-xs text-graphite-900 flex justify-between">
                      <span>{product.origin}</span>
                      <span className="font-mono text-gray-600">NCM: {product.ncm}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="btn-link-editorial text-xs"
                    >
                      Analisar especificações completas &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
