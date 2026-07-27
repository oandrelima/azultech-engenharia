import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados Azultech Engenharia...');

  const neighborhoods = [
    'Campo Limpo', 'Morumbi', 'Butantã', 'Lapa', 'Vila Leopoldina', 
    'Santo Amaro', 'Brooklin', 'Berrini', 'Vila Olímpia', 
    'Vila Nova Conceição', 'Vila Mariana', 'Saúde', 'Paraíso', 'Ipiranga', 
    'Jabaquara', 'Brás', 'Bom Retiro', 'Osasco', 'Cotia', 'Granja Viana', 
    'Taboão da Serra', 'Itapecerica da Serra', 'Capão Redondo', 'Centro'
  ];

  await prisma.companyInfo.upsert({
    where: { id: 'default' },
    update: {
      googleMapsEmbed: 'https://maps.google.com/maps?q=Av.+Anac%C3%A9%2C+136+-+Campo+Limpo%2C+S%C3%A3o+Paulo+-+SP%2C+05755-090&t=&z=16&ie=UTF8&iwloc=&output=embed'
    },
    create: {
      id: 'default',
      companyName: 'Azultech Engenharia e Reformas Ltda',
      tradeName: 'Azultech Engenharia',
      cnpj: '00.000.000/0001-00',
      crea: 'SP-123456789',
      phone: '(11) 93921-7592',
      whatsapp: '5511939217592',
      email: 'contato@azultechengenharia.com.br',
      address: 'Av. Anacé, 136 — Campo Limpo, Zona Sul, São Paulo/SP — CEP 05755-090',
      street: 'Av. Anacé',
      number: '136',
      neighborhood: 'Campo Limpo',
      city: 'São Paulo',
      state: 'SP',
      cep: '05755-090',
      instagram: 'https://instagram.com/azultechengenharia',
      googleMapsEmbed: 'https://maps.google.com/maps?q=Av.+Anac%C3%A9%2C+136+-+Campo+Limpo%2C+S%C3%A3o+Paulo+-+SP%2C+05755-090&t=&z=16&ie=UTF8&iwloc=&output=embed',
      paymentMethods: 'Facilidade de pagamento: Parcelamento em até 18x sem juros no cartão de crédito.',
      coverageNeighborhoods: JSON.stringify(neighborhoods),
      workingHours: 'Segunda a Sexta das 08h às 18h | Sábados das 08h às 13h'
    }
  });

  const categoriesData = [
    {
      name: 'Mezaninos',
      slug: 'mezaninos',
      description: 'Aproveitamento inteligente de espaço com estruturas metálicas e residenciais sob medida.',
      order: 1,
      services: [
        {
          title: 'Mezaninos Metálicos',
          slug: 'mezaninos-metalicos',
          shortDescription: 'Estrutura metálica de alta resistência para galpões, escritórios e comércio.',
          fullDescription: `Na Azultech Engenharia, projetamos e instalamos mezaninos metálicos reforçados de alto desempenho, ideais para otimizar e duplicar a área útil de galpões industriais, escritórios comerciais e estabelecimentos de varejo em toda a Zona Sul de São Paulo.\n\nUtilizamos vigas W de aço estrutural ASTM A36/A572 com cálculo de carga sob medida para atender as necessidades de estoque, sobrecarga por metro quadrado e fluxo de pessoas. Nossa equipe calcula rigorosamente as deformações e vibrações (NBR 8800), garantindo uma estrutura extremamente rígida e segura.\n\nO piso pode ser composto por painel wall amadeirado, chapa xadrez antiderrapante de aço ou laje seca. Oferecemos soluções completas incluindo guarda-corpos normatizados (NBR 14718), escadas metálicas de acesso industrial e pintura anticorrosiva com primer epóxi de alta durabilidade.`,
          benefits: JSON.stringify(['Ganho de área útil sem alteração na estrutura externa', 'Alta capacidade de carga (até 1.000 kg/m² conforme projeto)', 'Instalação rápida e com mínima interferência nas atividades', 'Estrutura totalmente desmontável e modulada', 'Conformidade técnica NBR 8800 com emissão de ART']),
          differentials: 'Projeto estrutural assinado por engenheiro civil com ART, cálculo de carga e parcelamento em até 18x sem juros.',
          targetNeighborhoods: JSON.stringify(['Santo Amaro', 'Berrini', 'Vila Olímpia', 'Campo Limpo', 'Osasco', 'Morumbi']),
          seoTitle: 'Mezaninos Metálicos na Zona Sul, Santo Amaro e Morumbi | Azultech',
          seoDescription: 'Fabricação e instalação de mezaninos metálicos sob medida para indústrias e comércios na Zona Sul de SP. Peça seu orçamento via WhatsApp!'
        },
        {
          title: 'Mezaninos Residenciais',
          slug: 'mezaninos-residenciais',
          shortDescription: 'Crie novos ambientes em sua casa ou sobrado com elegância e segurança.',
          fullDescription: `Transforme o pé-direito alto da sua residência em um novo cômodo funcional, como home office, suíte adicional, closet ou sala de jogos. Nossos mezaninos residenciais unificam a robustez do aço estrutural com o acabamento refinado de madeira nobre ou piso vinílico.\n\nCada projeto é dimensionado respeitando a estética arquitetônica do imóvel, a distribuição de cargas nas paredes de apoio e o conforto acústico dos moradores. Desenvolvemos soluções com fechamentos laterais em vidro temperado ou guarda-corpos em aço escovado, garantindo luminosidade e sensação de amplitude.\n\nA instalação é realizada por equipe treinada para trabalhar com total limpeza e cuidado com o piso e paredes existentes.`,
          benefits: JSON.stringify(['Valorização imediata do valor de mercado do imóvel', 'Design integrado com a decoração interior da residência', 'Solução ideal para sobrados e casas de pé-direito alto', 'Garantia estrutural e acabamento silencioso de alto padrão']),
          differentials: 'Projetos customizados focados no conforto acústico e estético, com engenheiro responsável acompanhando do início ao fim.',
          targetNeighborhoods: JSON.stringify(['Morumbi', 'Moema', 'Vila Nova Conceição', 'Granja Viana', 'Vila Mariana']),
          seoTitle: 'Mezaninos Residenciais em SP | Azultech Engenharia',
          seoDescription: 'Ganhe mais espaço na sua casa com mezaninos residenciais modernos. Atendemos Moema, Morumbi, Vila Mariana e Zona Sul de SP.'
        },
        {
          title: 'Mezaninos para Apartamentos',
          slug: 'mezaninos-para-apartamentos',
          shortDescription: 'Otimização inteligente para apartamentos tipo loft ou com pé-direito duplo.',
          fullDescription: `Desenvolvemos mezaninos ultra leves e resistentes sob medida para apartamentos estilo Loft, Studio e imóveis com pé-direito duplo. Aproveite cada centímetro vertical da sua propriedade sem comprometer a estrutura do edifício.\n\nTodo o projeto leva em consideração a sobrecarga máxima permitida pelas normas de condomínio (NBR 16280), utilizando perfis metálicos estruturais tubulares de espessura reduzida que garantem resistência sem peso excessivo.\n\nFornecemos laudo técnico assinado por engenheiro habilitado para rápida aprovação na administração do seu condomínio.`,
          benefits: JSON.stringify(['Cálculo de sobrecarga compatível com as regras estruturais do condomínio', 'Perfil metálico slim com máximo aproveitamento de pé-direito livre', 'Montagem limpa e rápida com baixo ruído na instalação', 'Emissão de ART para entrega e aprovação no condomínio']),
          differentials: 'Adequação total às normas NBR 16280 com aprovação técnica perante síndicos e administradoras.',
          targetNeighborhoods: JSON.stringify(['Brooklin', 'Vila Olímpia', 'Pinheiros', 'Paraíso', 'Butantã']),
          seoTitle: 'Mezaninos para Apartamento e Loft na Zona Sul SP | Azultech',
          seoDescription: 'Aproveite o pé-direito duplo do seu apartamento com mezaninos modernos. Projeto e aprovação com engenheiros.'
        }
      ]
    },
    {
      name: 'Coberturas sob Medida',
      slug: 'coberturas-sob-medida',
      description: 'Proteção contra sol e chuva com luz natural, elegância e alta resistência térmica.',
      order: 2,
      services: [
        {
          title: 'Cobertura Metálica',
          slug: 'cobertura-metalica',
          shortDescription: 'Estruturas de aço galvanizado e telhas termoacústicas para garagens e quintais.',
          fullDescription: `As coberturas metálicas da Azultech Engenharia são a solução definitiva para proteção de garagens residenciais, corredores laterais, áreas gourmet e pátios industriais.\n\nUtilizamos perfis de aço carbono galvanizado ou alumínio estrutural com tratamento antiferrugem e pintura eletrostática. Oferecemos opções com telhas sanduíche termoacústicas (EPS ou Poliuretano) que reduzem até 90% do calor do sol e o ruído provocado por tempestades de chuva.\n\nNossas calhas e rufos são produzidos sob medida para garantir o escoamento perfeito da água sem infiltrações ou gotejamentos nas paredes.`,
          benefits: JSON.stringify(['Excelente isolamento térmico e redução de ruído de chuva', 'Estrutura leve com alta resistência a ventos fortes', 'Proteção para veículos contra granizo e raios solares UV', 'Acabamento moderno com pintura eletrostática a pó']),
          differentials: 'Dimensionamento correto de inclinação, calhas e rufos dobrados sob medida para vedação 100% estanque.',
          targetNeighborhoods: JSON.stringify(['Campo Limpo', 'Butantã', 'Santo Amaro', 'Cotia', 'Taboão da Serra']),
          seoTitle: 'Coberturas Metálicas e Garagens na Zona Sul SP | Azultech',
          seoDescription: 'Coberturas metálicas termoacústicas para garagens e quintais na Zona Sul de SP. Orçamento em 18x sem juros.'
        },
        {
          title: 'Cobertura de Vidro',
          slug: 'cobertura-de-vidro',
          shortDescription: 'Luz natural com vidro laminado ou temperado de alta segurança.',
          fullDescription: `Ilumine e valorize seu espaço gourmet, sacada, pérgola ou jardim de inverno com coberturas de vidro de alta tecnologia. Unimos elegância arquitetônica e máxima segurança em cada detalhe.\n\nTrabalhamos exclusivamente com vidros laminados e temperados-laminados de segurança (NBR 7199), que evitam o desprendimento de fragmentos em caso de quebra acidental. A estrutura é confeccionada em alumínio naval anodizado ou aço galvanizado reforçado.\n\nA vedação é realizada com silicone de cura neutra estrutural de alto rendimento e borrachas EPDM, garantindo estanqueidade total contra infiltrações de água.`,
          benefits: JSON.stringify(['Máximo aproveitamento da iluminação solar natural', 'Vidro laminado de segurança que bloqueia até 99% dos raios UV', 'Vedação técnica com silicone estrutural de longa durabilidade', 'Disponível em opções fixas ou retráteis automatizadas']),
          differentials: 'Opções de vidros refletivos e de controle térmico que reduzem o calor interno sem perda de luminosidade.',
          targetNeighborhoods: JSON.stringify(['Morumbi', 'Moema', 'Vila Nova Conceição', 'Brooklin', 'Vila Mariana']),
          seoTitle: 'Cobertura de Vidro Retrátil e Fixa Zona Sul SP | Azultech',
          seoDescription: 'Coberturas de vidro laminado para sacadas e áreas gourmet em Moema, Morumbi e Zona Sul. Beleza e proteção.'
        }
      ]
    },
    {
      name: 'Esquadrias Blindex',
      slug: 'esquadrias-blindex',
      description: 'Janelas e portas de vidro temperado Blindex para residências e empresas.',
      order: 3,
      services: [
        {
          title: 'Janelas de Vidro Blindex',
          slug: 'janelas-de-vidro-blindex',
          shortDescription: 'Modernidade, facilidade de limpeza e isolamento para seus ambientes.',
          fullDescription: `Fabricação e instalação de janelas de vidro temperado Blindex de 8mm e 10mm para salas, quartos, cozinhas e escritórios comerciais na Zona Sul de SP.\n\nOferecemos modelos de correr (2, 3 ou 4 folhas), guilhotina, basculante e pivotante. Os perfis de alumínio da linha 25 e 30 possuem acabamento anodizado ou pintura eletrostática em branco, preto, bronze ou fosco.\n\nUtilizamos roldanas com rolamento blindado em aço inox que proporcionam um deslizamento extremamente suave e silencioso.`,
          benefits: JSON.stringify(['Vidro temperado Blindex certificado de altíssima resistência', 'Diversas opções de tonalidade: incolor, fumê, verde e bronze', 'Vedação eficiente contra vento, poeira e respingos de chuva', 'Fácil manutenção e facilidade na higienização diária']),
          differentials: 'Medição a laser no local, vedação profissional e garantia de 1 ano nas ferragens e roldanas.',
          targetNeighborhoods: JSON.stringify(['Campo Limpo', 'Vila Mariana', 'Jabaquara', 'Ipiranga', 'Saúde']),
          seoTitle: 'Janelas de Vidro Blindex na Zona Sul SP | Azultech',
          seoDescription: 'Janelas de vidro temperado Blindex sob medida. Instalação rápida e garantia na Zona Sul de São Paulo.'
        },
        {
          title: 'Portas de Vidro Blindex',
          slug: 'portas-de-vidro-blindex',
          shortDescription: 'Divisão de ambientes e entradas com sofisticação e amplitude visual.',
          fullDescription: `As portas de vidro Blindex da Azultech proporcionam elegância, integração de ambientes e sensação de amplitude em varandas, recepções, salas de reunião e divisórias residenciais.\n\nDisponibilizamos sistemas de portas de correr com trilho superior ou inferior, portas pivotantes com molas de piso hidráulicas Dorma/Haidai e fechaduras de alta segurança.\n\nOs vidros são certificados sob as normas de segurança ABNT NBR 14698, garantindo máxima resistência mecânica e durabilidade.`,
          benefits: JSON.stringify(['Sensação de amplitude e integração visual dos ambientes', 'Ferragens em aço inox escovado ou alumínio anodizado', 'Fechaduras e puxadores de design sofisticado', 'Resistência até 5 vezes maior que o vidro comum']),
          differentials: 'Instalação alinhada com prumo a laser e vedação perimetral contra correntes de ar.',
          targetNeighborhoods: JSON.stringify(['Berrini', 'Vila Olímpia', 'Moema', 'Morumbi', 'Itapecerica']),
          seoTitle: 'Portas de Vidro Blindex e Vidraçaria Zona Sul SP | Azultech',
          seoDescription: 'Portas de vidro temperado de correr e pivotantes para residências e comércios em SP.'
        }
      ]
    },
    {
      name: 'Portões & Automatização',
      slug: 'portoes-e-automatizacao',
      description: 'Fabricação, manutenção, reforma e automação de portões residenciais e comerciais.',
      order: 4,
      services: [
        {
          title: 'Automatização de Portões',
          slug: 'automatizacao-de-portoes',
          shortDescription: 'Motores ultra rápidos para portões basculantes, deslizantes e pivotantes.',
          fullDescription: `Proteja sua família e seu imóvel com sistemas de automatização de portões de rápida velocidade. Instalamos e substituímos motores para portões basculantes, deslizantes e pivotantes.\n\nTrabalhamos com as melhores marcas do mercado (PPA, Rossi, Peccinin), com motores capazes de abrir o portão em até 4 segundos (linhas JetFlex / Fast). Inclui configuração de controles remotos e integração com receptores anti-clonagem.\n\nTambém instalamos módulos Wi-Fi para abertura e monitoramento do portão diretamente pela tela do seu smartphone.`,
          benefits: JSON.stringify(['Motores ultra rápidos com abertura total em até 4 segundos', 'Sistema de destravamento manual simples para quedas de energia', 'Compatibilidade com abertura via smartphone, tag ou controle', 'Sensor anti-esmagamento fotocélula para segurança de crianças e pet']),
          differentials: 'Instalação técnica com fixação reforçada, configuração completa no local e garantia de 1 ano nos equipamentos.',
          targetNeighborhoods: JSON.stringify(['Campo Limpo', 'Morumbi', 'Butantã', 'Santo Amaro', 'Osasco']),
          seoTitle: 'Automatização de Portões Zona Sul SP | Motores Rápidos | Azultech',
          seoDescription: 'Instalação de motor de portão basculante e deslizante na Zona Sul de SP. Segurança e rapidez.'
        },
        {
          title: 'Reforma de Portões de Alumínio',
          slug: 'reforma-de-portoes-de-aluminio',
          shortDescription: 'Restauração completa, troca de roldanas, cabos de aço e pintura.',
          fullDescription: `Restauramos completamente o funcionamento e a estética do seu portão de alumínio ou ferro emperrado, barulhento ou descompensado.\n\nSubstituímos cabos de aço desgastados por modelos de aviação altamente resistentes, trocamos roldanas de náilon/aço, ajustamos travessões, trocamos rolamentos de coluna e realizamos o nivelamento e alinhamento do portão.\n\nSua estrutura volta a funcionar suavemente, sem trancos, prolongando a vida útil do motor de automatização.`,
          benefits: JSON.stringify(['Custo consideravelmente menor que a compra de um portão novo', 'Eliminação completa de ruídos, trancos e travamentos', 'Substituição de peças danificadas por componentes originais reforçados', 'Aumento imediato da segurança de acesso']),
          differentials: 'Atendimento de emergência para portões caídos ou fora do trilho na Zona Sul de SP.',
          targetNeighborhoods: JSON.stringify(['Campo Limpo', 'Capão Redondo', 'Jabaquara', 'Vila Mariana', 'Taboão da Serra']),
          seoTitle: 'Reforma e Conserto de Portão de Alumínio SP | Azultech',
          seoDescription: 'Manutenção e reforma de portão de alumínio na Zona Sul de SP. Troca de cabos, roldanas e alinhamento.'
        }
      ]
    },
    {
      name: 'Vidraçaria & Ambientes',
      slug: 'vidracaria-e-ambientes',
      description: 'Boxes para banheiro e fechamentos de áreas e sacadas com vidro de alta qualidade.',
      order: 5,
      services: [
        {
          title: 'Box para Banheiro',
          slug: 'box-para-banheiro',
          shortDescription: 'Box de vidro temperado frontal, de canto e até o teto.',
          fullDescription: `Fornecemos e instalamos boxes de vidro temperado para banheiros residenciais e suítes com alto padrão de acabamento. Atendemos modelos de correr reto, de canto em L, pivotantes e o moderno Box até o Teto (estilo Spa/Elegance).\n\nTrabalhamos com vidros temperados de 8mm nas opções incolor, fumê, bronze, jateado ou com película de segurança. As ferragens e roldanas estão disponíveis em alumínio anodizado, preto fosco, rose gold ou aço inox escovado.\n\nUtilizamos vedações duplas e silicones antimofo especiais que evitam infiltrações e manchas ao longo do tempo.`,
          benefits: JSON.stringify(['Vedação estanque que evita respingos de água fora do box', 'Roldanas de rolamento blindado para deslize leve e silencioso', 'Tratamento e silicone especial com ação antimofo e antibactéria', 'Opção de box até o teto para efeito térmico tipo sauna']),
          differentials: 'Medição precisa a laser no local e instalação ágil em até 48 horas após a produção do vidro.',
          targetNeighborhoods: JSON.stringify(['Morumbi', 'Moema', 'Brooklin', 'Campo Limpo', 'Saúde']),
          seoTitle: 'Box para Banheiro na Zona Sul SP | Vidro Temperado | Azultech',
          seoDescription: 'Box de vidro para banheiro até o teto e padrão. Instalação rápida em Moema, Morumbi e Zona Sul SP.'
        },
        {
          title: 'Fechamento de Área e Sacadas',
          slug: 'fechamento-de-sacadas',
          shortDescription: 'Envidraçamento panorâmico retrátil para varandas e áreas externas.',
          fullDescription: `O sistema de fechamento de sacadas panorâmico da Azultech permite a abertura total ou parcial das lâminas de vidro através de painéis retráteis que deslizam suavemente pelos trilhos.\n\nProteja sua varanda da chuva, do vento forte, do ruído urbano e da maresia/poeira, transformando o espaço em uma extensão aconchegante da sua sala de estar.\n\nUtilizamos vidros laminados de 8mm ou 10mm certificados perante as exigências da norma NBR 16259, com trava de segurança para crianças e vedação reforçada com escovinhas duplas.`,
          benefits: JSON.stringify(['Isolamento acústico substancial e proteção térmica contra o vento', 'Recolhimento total dos vidros em um único canto da varanda', 'Valorização direta da área útil do apartamento', 'Trava de segurança infantil para proteção da família']),
          differentials: 'Vedação reforçada com borracha EPDM e silicone especial resistente a raios UV sem amarelar.',
          targetNeighborhoods: JSON.stringify(['Vila Andrade', 'Morumbi', 'Vila Olímpia', 'Brooklin', 'Paraíso']),
          seoTitle: 'Fechamento de Sacada e Varanda Zona Sul SP | Azultech',
          seoDescription: 'Envidraçamento de sacada com painéis retráteis na Zona Sul de SP. Aprovação técnica e garantia.'
        }
      ]
    },
    {
      name: 'Reformas e Acabamentos',
      slug: 'reformas-e-acabamentos',
      description: 'Serviços completos de elétrica, hidráulica e acabamentos em gesso e alvenaria.',
      order: 6,
      services: [
        {
          title: 'Serviço de Elétrica',
          slug: 'servico-de-eletrica',
          shortDescription: 'Instalações elétricas residenciais e comerciais, quadros de força e iluminação.',
          fullDescription: `Execução e reforma completa de sistemas elétricos residenciais, comerciais e prediais segundo as exigências da norma ABNT NBR 5410.\n\nRealizamos montagem e reorganização de quadros de distribuição (QDT), instalação de disjuntores DIN, DPS (proteção contra surtos de raios), IDR (proteção contra choques), enfiação completa, circuito independente para ar-condicionado, chuveiros e iluminação decorativa em LED.\n\nEmitimos laudos de conformidade e ART para adequação perante distribuidoras de energia e condomínios.`,
          benefits: JSON.stringify(['Segurança contra curto-circuitos, superaquecimento e incêndios', 'Dimensionamento correto de fiação de cobre conforme carga total', 'Economia de energia com balanceamento correto de fases', 'Laudo técnico e emissão de ART por Engenheiro Eletricista/Civil']),
          differentials: 'Profissionais capacitados NR-10 com ferramentas digitais de testes de isolamento e aterramento.',
          targetNeighborhoods: JSON.stringify(['Santo Amaro', 'Morumbi', 'Moema', 'Lapa', 'Butantã']),
          seoTitle: 'Eletricista e Engenheiro Elétrico Zona Sul SP | Azultech',
          seoDescription: 'Instalações elétricas residenciais e comerciais com engenheiro responsável. Zona Sul de SP.'
        },
        {
          title: 'Serviços de Hidráulica',
          slug: 'servicos-de-hidraulica',
          shortDescription: 'Instalação de redes de água quente/fria, esgoto e caixas d’água.',
          fullDescription: `Planejamento e substituição de instalações hidráulicas de água fria, água quente (tubulações PPR e Cobre) e esgoto sanitário em imóveis antigos e novos.\n\nInstalação de caixas d'água, pressurizadores de rede, torneiras monocomando, duchas, válvulas Hydra e prumadas de prédios. Realizamos também caça vazamentos com detecção precisa de infiltrações.\n\nUtilizamos apenas tubulações e conexões das marcas líderes (Tigre, Amanco, Deca) para garantir durabilidade por décadas.`,
          benefits: JSON.stringify(['Eliminação definitiva de vazamentos e infiltrações nas paredes', 'Pressão de água adequada em todos os pontos do imóvel', 'Instalação limpa com teste de pressão manométrica antes do fechamento', 'Garantia de vedação perfeita em louças e metais']),
          differentials: 'Execução rápida com mínimo quebra-quebra e testes de estanqueidade manométrica comprovados.',
          targetNeighborhoods: JSON.stringify(['Campo Limpo', 'Vila Mariana', 'Moema', 'Morumbi', 'Pinheiros']),
          seoTitle: 'Encanador e Serviços Hidráulicos Zona Sul SP | Azultech',
          seoDescription: 'Reforma hidráulica, troca de tubulação e reparos em água fria e quente na Zona Sul de SP.'
        },
        {
          title: 'Forro de Gesso e Acabamentos em Alvenaria',
          slug: 'forro-de-gesso-e-acabamentos',
          shortDescription: 'Drywall, sancas iluminadas, cortineiros e acabamento fino em pintura e piso.',
          fullDescription: `Instalação profissional de forros de gesso acartonado (Drywall), sancas abertas e fechadas, rasgos de luz, cortineiros embutidos e divisórias estruturais acústicas.\n\nRealizamos também pequenos serviços de alvenaria, assentamento de porcelanatos, pisos vinílicos, revestimentos cerâmicos e pintura fina (massa corrida, tinta acrílica e textura suvinil).\n\nIdeal para quem deseja renovar o visual do imóvel com acabamento de alto padrão e projetos de iluminação embutida.`,
          benefits: JSON.stringify(['Disfarce elegante de tubulações, fiação elétrica e vigas', 'Design moderno com integração de fita LED e spots embutidos', 'Propriedades de isolamento termoacústico para ambientes', 'Superfície perfeitamente lisa e pronta para pintura']),
          differentials: 'Gesso acartonado estruturado com perfis zincados normatizados e recolhimento limpo de resíduos.',
          targetNeighborhoods: JSON.stringify(['Morumbi', 'Vila Leopoldina', 'Butantã', 'Campo Limpo', 'Vila Nova Conceição']),
          seoTitle: 'Forro de Gesso Drywall e Acabamento SP | Azultech',
          seoDescription: 'Forro de gesso, drywall e acabamentos em alvenaria para residências e escritórios em SP.'
        }
      ]
    }
  ];

  for (const cat of categoriesData) {
    const category = await prisma.serviceCategory.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        order: cat.order
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        order: cat.order
      }
    });

    for (const s of cat.services) {
      await prisma.service.upsert({
        where: { slug: s.slug },
        update: {
          title: s.title,
          shortDescription: s.shortDescription,
          fullDescription: s.fullDescription,
          benefits: s.benefits,
          differentials: s.differentials,
          targetNeighborhoods: s.targetNeighborhoods,
          seoTitle: s.seoTitle,
          seoDescription: s.seoDescription
        },
        create: {
          ...s,
          categoryId: category.id
        }
      });
    }
  }

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
