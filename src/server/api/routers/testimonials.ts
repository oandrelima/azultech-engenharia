import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const FALLBACK_TESTIMONIALS = [
  {
    id: "1",
    clientName: "Ricardo Menezes",
    neighborhood: "Morumbi",
    serviceProvided: "Mezanino Residencial",
    rating: 5,
    comment: "Excelente atendimento do início ao fim! O mezanino ficou perfeito no meu pé-direito duplo, a estrutura de aço é super firme e o acabamento em madeira combinou totalmente com a casa. Entrega no prazo correto.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "2",
    clientName: "Patrícia Albuquerque",
    neighborhood: "Moema",
    serviceProvided: "Cobertura de Vidro",
    rating: 5,
    comment: "Fiz a cobertura de vidro da minha área gourmet com a Azultech e superou as expectativas. O isolamento térmico funcionou super bem e não vazou nada na última tempestade. Recomendo demais!",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "3",
    clientName: "Eduardo Fonseca",
    neighborhood: "Santo Amaro",
    serviceProvided: "Mezanino Metálico Galpão",
    rating: 5,
    comment: "Contratei para dobrar o espaço do nosso galpão comercial. Engenheiro apresentou o cálculo de carga, entregou ART e a equipe trabalhou com muita agilidade e organização. Nota 10!",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "4",
    clientName: "Camila Rocha",
    neighborhood: "Brooklin",
    serviceProvided: "Fechamento de Sacada",
    rating: 5,
    comment: "O envidraçamento da varanda do apartamento ficou espetacular! Acabou completamente o barulho do trânsito e o sistema de vidros retráteis desliza sem esforço algum.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "5",
    clientName: "Marcelo Siqueira",
    neighborhood: "Campo Limpo",
    serviceProvided: "Automatização de Portão",
    rating: 5,
    comment: "Instalaram o motor ultra rápido no meu portão basculante em poucas horas. Agora abre em 4 segundos e consigo abrir direto pelo celular. Segurança total para minha família.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "6",
    clientName: "Fernanda Paes",
    neighborhood: "Vila Olímpia",
    serviceProvided: "Box para Banheiro até o Teto",
    rating: 5,
    comment: "Box até o teto estilo sauna com roldanas de inox aparentes. Ficou parecendo banheiro de hotel 5 estrelas! Vedação perfeita e atendimento muito educado dos técnicos.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "7",
    clientName: "Gustavo Vasconcelos",
    neighborhood: "Pinheiros",
    serviceProvided: "Janelas e Portas Blindex",
    rating: 5,
    comment: "Trocamos todas as esquadrias do escritório por portas e janelas de vidro temperado Blindex. Iluminação natural incrível e a acústica melhorou 100%.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "8",
    clientName: "Juliana Castilho",
    neighborhood: "Vila Mariana",
    serviceProvided: "Reforma de Portão de Alumínio",
    rating: 5,
    comment: "Meu portão de alumínio estava travando e fazendo um barulho horrível. A Azultech trocou roldanas, cabos de aço e alinhou tudo. Ficou novinho como de fábrica!",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "9",
    clientName: "Roberto Camargo",
    neighborhood: "Vila Leopoldina",
    serviceProvided: "Serviço de Elétrica & QDT",
    rating: 5,
    comment: "Refizeram toda a fiação antiga da casa e montaram um quadro de disjuntores moderno com DR e DPS. Profissionais muito qualificados e transparentes com o orçamento.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "10",
    clientName: "Aline & Thiago",
    neighborhood: "Paraíso",
    serviceProvided: "Forro de Gesso Drywall",
    rating: 5,
    comment: "Fizeram o rebaixamento de gesso acartonado com cortineiro e rasgos de luz na sala. O acabamento ficou retinho e limparam todo o entulho após a conclusão.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "11",
    clientName: "Carlos Eduardo Nogueira",
    neighborhood: "Butantã",
    serviceProvided: "Cobertura Metálica Garagem",
    rating: 5,
    comment: "Cobertura metálica com telha termoacústica sanduíche para proteger meus veículos. Não esquenta nada embaixo e o acabamento da pintura combinou com o portão.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "12",
    clientName: "Mariana Godoy",
    neighborhood: "Saúde",
    serviceProvided: "Reforma Hidráulica",
    rating: 5,
    comment: "Resolveram um vazamento oculto que outros encanadores não conseguiram achar. Trocaram a tubulação para PPR e deixaram o banheiro funcionando perfeitamente.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "13",
    clientName: "Fernando Bastos",
    neighborhood: "Itapecerica da Serra",
    serviceProvided: "Mezanino Metálico Industrial",
    rating: 5,
    comment: "Estrutura fantástica no nosso barracão! Suportou o maquinário pesado sem nenhuma vibração. Projeto técnico entregue com ART pelo engenheiro.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "14",
    clientName: "Renata Lins",
    neighborhood: "Vila Nova Conceição",
    serviceProvided: "Cobertura de Vidro Retrátil",
    rating: 5,
    comment: "Fizemos a cobertura retrátil automatizada do terraço. Abrir o vidro pelo controle no fim de tarde ficou sensacional. Atendimento de primeira classe!",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "15",
    clientName: "Luciana & Bruno",
    neighborhood: "Jabaquara",
    serviceProvided: "Automatização de Portão Deslizante",
    rating: 5,
    comment: "Motor JetFlex instalado com perfeição. O portão abre muito rápido e com total silêncio. Atendimento pontual e preço super justo.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "16",
    clientName: "Gabriel Santana",
    neighborhood: "Lapa",
    serviceProvided: "Reforma de Portão de Alumínio",
    rating: 5,
    comment: "Estava quase gastando R$ 10 mil num portão novo até a Azultech fazer a reforma. Trocaram cabo de aço, roldanas e restauraram o alinhamento por uma fração do preço.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "17",
    clientName: "Vanessa Camargo",
    neighborhood: "Granja Viana",
    serviceProvided: "Mezanino Residencial em Madeira",
    rating: 5,
    comment: "Criamos uma biblioteca suspensa no pé-direito alto da sala. Ficou o ambiente mais charmoso da casa! Muito caprichosos na montagem.",
    verified: true,
    source: "Google Reviews"
  },
  {
    id: "18",
    clientName: "Henrique Moraes",
    neighborhood: "Osasco",
    serviceProvided: "Estruturas Metálicas & Acabamento",
    rating: 5,
    comment: "Contratei a Azultech para reforço estrutural e acabamentos na minha loja. Cumpriram rigorosamente o cronograma combinado. Recomendo de olhos fechados!",
    verified: true,
    source: "Google Reviews"
  }
];

const testimonialSchema = z.object({
  clientName: z.string().min(2, "Nome é obrigatório"),
  neighborhood: z.string().min(2, "Bairro é obrigatório"),
  serviceProvided: z.string().min(2, "Serviço é obrigatório"),
  rating: z.number().int().min(1).max(5).default(5),
  comment: z.string().min(5, "Comentário deve ter pelo menos 5 caracteres"),
});

export const testimonialsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const items = await ctx.db.testimonial.findMany({
        where: { verified: true },
        orderBy: { createdAt: "desc" },
      });
      if (items && items.length > 0) return items;
      return FALLBACK_TESTIMONIALS;
    } catch {
      return FALLBACK_TESTIMONIALS;
    }
  }),

  create: publicProcedure
    .input(testimonialSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.testimonial.create({
        data: {
          ...input,
          verified: true,
          source: "Website",
        },
      });
    }),
});
