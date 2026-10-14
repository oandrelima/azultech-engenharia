export const articles = [
  {
    id: "guia-reforma", slug: "antes-de-reformar-apartamento", title: "Vai reformar o apartamento? Comece pelo planejamento.",
    excerpt: "Escopo claro, documentação e alinhamento com o condomínio antes da obra.",
    category: "Planejamento", readTime: "2 min", coverImageUrl: "/images/services/mezaninos-para-apartamentos.webp",
    content: "<p>Antes de comprar materiais, descreva o que pretende alterar e converse com a administração do condomínio. Um orçamento com escopo definido ajuda a comparar propostas e organizar a execução.</p><h2>Verifique quem responde pelo serviço</h2><p>O Crea-SP orienta a conferir a habilitação dos profissionais e a documentação de responsabilidade técnica das atividades de engenharia. A ART identifica o responsável e os serviços contratados.</p><h2>Combine as etapas</h2><p>Registre materiais, prazos e responsabilidades no contrato. Apresente a documentação solicitada pelo condomínio antes de iniciar e esclareça as condições de acesso, circulação e retirada de resíduos.</p><p>Para intervenções como mezaninos, envolva um profissional habilitado na avaliação do imóvel antes de definir a solução.</p>",
    sources: [{ label: "Crea-SP — Reformas em condomínios", url: "https://www.creasp.org.br/arquivos/cartilhas/condominio.pdf" }],
  },
  {
    id: "guia-box", slug: "manutencao-do-box-de-vidro", title: "O box de vidro também precisa de manutenção.",
    excerpt: "O cuidado com o conjunto vai além de manter o vidro limpo.",
    category: "Vidros", readTime: "2 min", coverImageUrl: "/images/services/box-para-banheiro.webp",
    content: "<p>O uso diário do box envolve ferragens, fixações e peças de movimentação. A manutenção preventiva deve fazer parte da rotina de cuidados do banheiro.</p><h2>Guarde as orientações da instalação</h2><p>O programa De Olho no Boxe, da Abravidro, disponibiliza um manual de utilização, limpeza e manutenção para consumidores e instaladores. Peça ao fornecedor as orientações aplicáveis ao seu modelo e programe as revisões.</p><h2>Não improvise ajustes</h2><p>Se perceber dificuldade na abertura, folga ou alteração no funcionamento, procure o instalador para avaliar o conjunto. Evite desmontar ou ajustar ferragens por conta própria.</p><p>Na contratação, combine também como será o atendimento de manutenção e guarde os dados do fornecedor.</p>",
    sources: [{ label: "Abravidro — Programa De Olho no Boxe", url: "https://www.deolhonoboxe.com.br/vidraceiro/o-programa-vidraceiro/" }],
  },
  {
    id: "guia-agua", slug: "consumo-de-agua-e-vazamentos", title: "A conta de água aumentou? Investigue antes de quebrar.",
    excerpt: "Compare o consumo e reúna informações para uma avaliação hidráulica.",
    category: "Manutenção", readTime: "2 min", coverImageUrl: "/images/services/servicos-de-hidraulica.webp",
    content: "<p>Uma variação no consumo merece atenção, mas não aponta sozinha onde está o problema. Compare as leituras e considere mudanças recentes no uso do imóvel.</p><h2>Observe o que está acessível</h2><p>Verifique torneiras, descargas e sinais visíveis de umidade. Anote quando a alteração começou e fotografe manchas ou gotejamentos para apresentar ao profissional.</p><h2>Consulte a orientação da concessionária</h2><p>A Sabesp mantém uma página sobre variações de consumo e testes para investigar possíveis vazamentos. Siga as orientações correspondentes ao tipo de instalação do imóvel.</p><p>Se a origem não estiver clara, solicite uma avaliação hidráulica antes de autorizar intervenções. Isso ajuda a definir o escopo do reparo com mais informação.</p>",
    sources: [{ label: "Sabesp — Variações de consumo", url: "https://www.sabesp.com.br/servicos/variacoes-de-consumo" }],
  },
].map(p => ({ ...p, published: true, publishedAt: new Date("2026-10-14T12:00:00Z") }));

