import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Termos de Uso Institucional | Almaris Trade',
  description: 'Condições de navegação e termos de utilização das informações institucionais e técnicas da Almaris International Trade.'
};

export default function TermsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Termos de Uso' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-6 text-gray-600 leading-relaxed text-sm">
          <span className="overline">Termos Legais</span>
          <h1 className="font-display text-4xl font-semibold text-navy-800">
            Termos de Uso
          </h1>
          <p>
            Ao acessar o site da ALMARIS INTERNATIONAL TRADE, o usuário concorda em cumprir os presentes termos de uso e todas as leis e regulamentos aplicáveis ao comércio internacional.
          </p>
          <h2 className="font-display text-2xl font-semibold text-navy-800 pt-4">Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste portal, incluindo marcas, logotipos, textos editoriais, boletins de especificação técnica e elementos visuais, é de propriedade exclusiva da Almaris International Trade.
          </p>
          <h2 className="font-display text-2xl font-semibold text-navy-800 pt-4">Informações de Especificação Técnica</h2>
          <p>
            Os parâmetros apresentados nas fichas de produto representam especificações padrão de exportação e estão sujeitos a confirmação final no contrato de compra e venda internacional.
          </p>
        </div>
      </section>
    </div>
  );
}
