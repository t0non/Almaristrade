export interface ProductSpec {
  parameter: string;
  specification: string;
}

export interface ProductData {
  slug: string;
  title: string;
  scientificName?: string;
  category: 'spices' | 'agri' | 'beverage' | 'stones' | 'oils';
  categoryLabel: string;
  origin: string;
  summary: string;
  overview: string;
  applications: string[];
  ncm: string;
  specs: ProductSpec[];
  packaging: string[];
  qualityNotes: string;
  tradeNotes: string;
  validationStatus?: {
    isPending: boolean;
    badgeLabel: string;
    noticeMessage: string;
  };
  image: string;
}

export const PRODUCTS: ProductData[] = [
  {
    slug: 'pimenta-preta',
    title: 'Pimenta Preta',
    scientificName: 'Piper nigrum L.',
    category: 'spices',
    categoryLabel: 'Especiarias & Agrícolas',
    origin: 'Brasil (Espírito Santo / Pará)',
    summary: 'Pimenta preta de alta qualidade submetida a secagem natural e beneficiamento técnico para exportação internacional.',
    overview: 'A pimenta preta brasileira é reconhecida globalmente pela elevada densidade e excelente teor de piperina. Originada de produtores qualificados no Espírito Santo e no Pará, é processada com secagem homogênea e rigorosa limpeza de matérias estranhas.',
    applications: [
      'Indústria alimentícia e de condimentos',
      'Empacotadores para varejo internacional',
      'Processamento de óleos essenciais e oleorresinas'
    ],
    ncm: '0904.11.00',
    specs: [
      { parameter: 'Padrão Comercial', specification: 'ASTA / FAQ (Fair Average Quality)' },
      { parameter: 'Densidade (Gramatura)', specification: '500 g/l a 570 g/l' },
      { parameter: 'Teor de Umidade', specification: 'Máximo 12%' },
      { parameter: 'Matéria Estranha / Impurezas', specification: 'Máximo 0.5% (ASTA) a 1.0% (FAQ)' },
      { parameter: 'Grãos Mofados / Pimenta Miúda', specification: 'Máximo 1.0%' }
    ],
    packaging: [
      'Sacos de juta / ráfia de 25kg ou 50kg',
      'Big Bags de 1.000kg com liner protetor',
      'Estufamento direto em contêineres de 20ft (aprox. 27 a 28 MT)'
    ],
    qualityNotes: 'Inspeção física e amostragem no porto de carregamento conduzida por certificadoras independentes (SGS / Control Union) com emissão de laudo de peso e qualidade.',
    tradeNotes: 'Contratos em Incoterms FOB (Porto de Vitória/Santos) ou CIF/CFR. Modalidade de pagamento via Carta de Crédito Irrevogável (L/C) ou CAD.',
    image: '/assets/images/commodity-pepper.png'
  },
  {
    slug: 'acucar',
    title: 'Açúcar (Exportação)',
    scientificName: 'Saccharum officinarum',
    category: 'agri',
    categoryLabel: 'Commodities Agrícolas',
    origin: 'Brasil (Centro-Sul / São Paulo)',
    summary: 'Fornecimento direto de usinas brasileiras para refinarias e grandes importadores multilaterais.',
    overview: 'O Brasil é o maior produtor e exportador mundial de açúcar. A Almaris atua na articulação comercial entre usinas qualificadas do Centro-Sul e compradores institucionais globais.',
    applications: [
      'Refinarias industriais de açúcar no exterior',
      'Indústria alimentícia de grande escala e bebidas',
      'Distribuição atacadista multilateral'
    ],
    ncm: '1701.14.00 / 1701.99.00',
    specs: [
      { parameter: 'Polarização', specification: 'Mínimo 99.20° a 99.50°' },
      { parameter: 'Umidade', specification: 'Máximo 0.15%' },
      { parameter: 'Cinzas Condutimétricas', specification: 'Máximo 0.15%' },
      { parameter: 'Solubilidade', specification: '100% livre de odores estranhos' }
    ],
    packaging: [
      'A granel (Bulk Carrier) em navios de grande porte',
      'Sacos de polipropileno de 50kg',
      'Big Bags de 1.000kg'
    ],
    qualityNotes: 'Controle de qualidade amparado por certificados laboratoriais emitidos na usina e confirmação de peso e grau RBU por empresa independente no porto de Santos/Paranaguá.',
    tradeNotes: 'Vendas spot ou contratos de fornecimento continuado sob governança contratual internacional.',
    validationStatus: {
      isPending: true,
      badgeLabel: 'Especificação VHP em Validação',
      noticeMessage: 'As especificações detalhadas sobre o Açúcar VHP (600–1200 RBU) da apresentação anterior encontram-se sob protocolo interno de validação contratual e confirmação de disponibilidade de embarque antes do boletim final.'
    },
    image: '/assets/images/hero-port.png'
  },
  {
    slug: 'farelo-de-soja-46',
    title: 'Farelo de Soja 46%',
    scientificName: 'Glycine max (L.) Merr.',
    category: 'agri',
    categoryLabel: 'Nutrição Animal & Grãos',
    origin: 'Brasil (Mato Grosso / Paraná / Goiás)',
    summary: 'Farelo de soja com elevado teor proteico concentrado para a indústria de ração animal de precisão.',
    overview: 'Subproduto nobre resultante do esmagamento do grão de soja para extração de óleo. Com teor proteico mínimo garantido de 46%, é o principal insumo proteico para a formulação de ração animal no mundo.',
    applications: [
      'Fabricantes internacionais de ração para aves, suínos e bovinos',
      'Nutrição aquícola de alta performance',
      'Formulação de concentrados proteicos'
    ],
    ncm: '2304.00.90',
    specs: [
      { parameter: 'Proteína Bruta (Profat)', specification: 'Mínimo 46.0%' },
      { parameter: 'Umidade', specification: 'Máximo 12.5%' },
      { parameter: 'Gordura / Extrato Etéreo', specification: 'Mínimo 1.5%' },
      { parameter: 'Fibra Bruta', specification: 'Máximo 3.5% a 6.0%' },
      { parameter: 'Matéria Mineral / Cinzas', specification: 'Máximo 7.0%' }
    ],
    packaging: [
      'A granel (Bulk) embarcado em navios de carga geral',
      'Big Bags de 1.000kg estufados em contêineres de 40ft'
    ],
    qualityNotes: 'Análise físico-química de proteína e fibra realizada por certificadoras globais credenciadas pelo MAPA durante o carregamento no navio.',
    tradeNotes: 'Contratos estruturados sob regras FOSFA 51 / ANEC, com embarques efetuados a partir dos portos de Paranaguá, Santos e Vila do Conde.',
    image: '/assets/images/operation-inspection.png'
  },
  {
    slug: 'oleo-de-milho-bruto-e-ddgs',
    title: 'Óleo de Milho Bruto & DDGs',
    scientificName: 'Zea mays L.',
    category: 'oils',
    categoryLabel: 'Óleos Vegetais & Subprodutos',
    origin: 'Brasil (Mato Grosso / Goiás)',
    summary: 'Matérias-primas nobres extraídas do processamento de milho para aplicação refinada e nutrição animal.',
    overview: 'Com a expansão da indústria de etanol de milho no Brasil, a Almaris fornece Óleo de Milho Bruto de baixa acidez e DDGs (Distillers Dried Grains with Solubles) com alta digestibilidade e concentração proteica.',
    applications: [
      'Refinarias alimentícias para produção de óleo de milho comestível',
      'Indústria química e de biocombustíveis',
      'Ração para ruminantes e gado de corte (DDGs)'
    ],
    ncm: '1515.21.00 (Óleo) / 2303.30.00 (DDGs)',
    specs: [
      { parameter: 'Óleo de Milho - Ácidos Graxos (FFA)', specification: 'Máximo 3.0%' },
      { parameter: 'Óleo de Milho - Umidade & Impurezas', specification: 'Máximo 0.5%' },
      { parameter: 'DDGs - Proteína Bruta', specification: 'Mínimo 28.0% a 30.0%' },
      { parameter: 'DDGs - Extrato Etéreo (Gordura)', specification: 'Mínimo 6.0% a 8.0%' },
      { parameter: 'DDGs - Profat Total', specification: 'Mínimo 36.0%' }
    ],
    packaging: [
      'Óleo: Flexitank de 24.000 litros instalado em contêiner de 20ft / Navio Tanque',
      'DDGs: A granel em navios graneleiros ou Big Bags'
    ],
    qualityNotes: 'Laudos de acidez, umidade e oxidação para o óleo e boletim de bromatologia para os DDGs fornecidos por auditoria independente.',
    tradeNotes: 'Opções de fornecimento regular com frequência mensal para indústrias de refino.',
    image: '/assets/images/hero-port.png'
  },
  {
    slug: 'cafe',
    title: 'Café Arábica & Conilon',
    scientificName: 'Coffea arabica / Coffea canephora',
    category: 'beverage',
    categoryLabel: 'Bebidas & Especialidades',
    origin: 'Brasil (Sul de Minas / Cerrado Mineiro / Espírito Santo)',
    summary: 'Café verde em grão de origens brasileiras selecionadas para torrefadoras e indústria de café solúvel.',
    overview: 'O Brasil oferece a maior diversidade de perfis sensoriais de café do planeta. A Almaris atua no fornecimento de grãos verdes Arábica e Conilon (Robusta), classificados por tipo, peneira e tolerância de defeitos.',
    applications: [
      'Torrefadoras internacionais de especialidades e comerciais',
      'Indústria de fabricação de café solúvel e extratos',
      'Empacotadores de blends para consumo de massa'
    ],
    ncm: '0901.11.10 (Arábica) / 0901.11.90 (Conilon)',
    specs: [
      { parameter: 'Variedades', specification: 'Café Arábica e Conilon (Robusta)' },
      { parameter: 'Peneiras Comercializadas', specification: 'Peneira 17/18, 15/16, 13up' },
      { parameter: 'Classificação de Defeitos', specification: 'Padrão NY 2/3, 4/5 ou especificação customizada' },
      { parameter: 'Umidade dos Grãos', specification: 'Máximo 12.0%' },
      { parameter: 'Bebida', specification: 'Dura, Apenas Mole (Arábica) / Neutro (Conilon)' }
    ],
    packaging: [
      'Sacos de juta tradicionais de 60kg',
      'Sacos com proteção barreira GrainPro / Ecotact',
      'Big Bags de 1.000kg ou Container Bulk Carrier'
    ],
    qualityNotes: 'Classificação oficial por provadores certificados (Q-Graders) com laudo de tipo, bebida e análise física no embarque.',
    tradeNotes: 'Negociações baseadas nos diferenciais da Bolsa de Nova York (ICE US) para Arábica e Bolsa de Londres (ICE Europe) para Conilon.',
    image: '/assets/images/commodity-coffee.png'
  },
  {
    slug: 'gergelim',
    title: 'Gergelim (Sesame Seeds)',
    scientificName: 'Sesamum indicum L.',
    category: 'agri',
    categoryLabel: 'Agrícolas & Sementes',
    origin: 'Brasil (Mato Grosso)',
    summary: 'Gergelim natural e beneficiado de alta pureza para panificação industrial e óleo comestível.',
    overview: 'Com safras em contínua expansão no Centro-Oeste brasileiro, o gergelim nacional destaca-se pelo elevado teor de óleo e ausência de contaminantes, sendo altamente demandado pelos mercados asiáticos e do Oriente Médio.',
    applications: [
      'Panificação industrial de grande escala e confeitaria',
      'Indústria de extração de óleo vegetal de alta gastronomia',
      'Produção de tahine e pastas alimentícias'
    ],
    ncm: '1207.40.10 / 1207.40.90',
    specs: [
      { parameter: 'Grau de Pureza', specification: 'Mínimo 99.5%' },
      { parameter: 'Teor de Óleo', specification: 'Mínimo 48.0% a 50.0%' },
      { parameter: 'Umidade', specification: 'Máximo 7.0%' },
      { parameter: 'Acidez Livre no Óleo', specification: 'Máximo 1.5%' },
      { parameter: 'Cor da Semente', specification: 'Natural Branco / Creme' }
    ],
    packaging: [
      'Sacos de papel multifoliado ou ráfia de 25kg',
      'Big Bags de 1.000kg estufados em contêineres de 20ft'
    ],
    qualityNotes: 'Certificação fitossanitária emitida pelo Ministério da Agricultura e laudo microbiológico isento de salmonella.',
    tradeNotes: 'Embarques em contêineres de 20ft (aprox. 19 MT por contêiner).',
    image: '/assets/images/commodity-pepper.png'
  },
  {
    slug: 'rochas-ornamentais',
    title: 'Placas de Rochas Ornamentais',
    scientificName: 'Mármores, Granitos e Quartzitos Naturais',
    category: 'stones',
    categoryLabel: 'Materiais Naturais & Arquitetura',
    origin: 'Brasil (Espírito Santo / Ceará)',
    summary: 'Placas polidas de quartzito, granito e mármores exóticos das jazidas brasileiras para o mercado de arquitetura global.',
    overview: 'O Brasil é a maior referência mundial em quartzitos exóticos e granitos nobres. A Almaris atua no fornecimento direto de chapas polidas e escovadas para distribuidores e marmorarias internacionais.',
    applications: [
      'Revestimentos arquitetônicos de alto padrão',
      'Bancadas industriais e superfícies de luxo',
      'Fachadas ventiladas e projetos corporativos'
    ],
    ncm: '6802.23.00 (Granitos) / 6802.99.90 (Quartzitos)',
    specs: [
      { parameter: 'Tipos de Rochas', specification: 'Quartzitos Exóticos, Granitos e Mármores' },
      { parameter: 'Espessuras Padrão', specification: '2cm (3/4") e 3cm (1 1/4")' },
      { parameter: 'Acabamentos de Superfície', specification: 'Polido, Escovado (Leather), Levigado' },
      { parameter: 'Resistência ao Impacto', specification: 'Conforme laudo petrográfico do IPT' },
      { parameter: 'Absorção de Água', specification: 'Baixa porosidade natural (< 0.2%)' }
    ],
    packaging: [
      'Cavaletes de madeira reforçada (A-Frames) tratados para exportação (HT)',
      'Acondicionamento de 6 a 7 cavaletes por contêiner de 20ft (aprox. 450m² a 2cm)'
    ],
    qualityNotes: 'Inspeção de chapas bloco a bloco com medição de espessura, verificação de trincas e controle de tonalidade.',
    tradeNotes: 'Atendimento direto a distribuidores e importadores de rochas ornamentais nos Estados Unidos, Europa e Oriente Médio.',
    image: '/assets/images/commodity-stones.png'
  }
];
