import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Política de Privacidade & Proteção de Dados | Almaris Trade',
  description: 'Diretrizes de proteção e tratamento confidencial de dados de contato comerciais B2B da Almaris International Trade.'
};

export default function PrivacyPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl space-y-6 text-gray-600 leading-relaxed text-sm">
          <span className="overline">Governança de Dados</span>
          <h1 className="font-display text-4xl font-semibold text-navy-800">
            Política de Privacidade
          </h1>
          <p>
            A ALMARIS INTERNATIONAL TRADE compromete-se com a proteção e a privacidade dos dados corporativos fornecidos por clientes, fornecedores e parceiros de negócios através de seus canais institucionais.
          </p>
          <h2 className="font-display text-2xl font-semibold text-navy-800 pt-4">Tratamento de Dados B2B</h2>
          <p>
            Todas as informações enviadas por meio de formulários de contato, solicitações de cotação ou agendamentos corporativos são utilizadas exclusivamente para a análise de viabilidade de fornecimento, elaboração de ofertas comerciais e comunicação entre as partes.
          </p>
          <h2 className="font-display text-2xl font-semibold text-navy-800 pt-4">Confidencialidade Comercial</h2>
          <p>
            Nenhuma informação corporativa ou técnica compartilhada com a Almaris é vendida, alugada ou cedida a terceiros sem prévia autorização por escrito, salvo quando exigido por órgãos alfandegários ou judiciais do comércio multilateral.
          </p>
        </div>
      </section>
    </div>
  );
}
