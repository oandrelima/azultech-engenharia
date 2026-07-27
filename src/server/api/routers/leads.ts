import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";
import { sendLeadNotificationEmail } from "~/lib/email";

const leadSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(8, "Telefone inválido"),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  neighborhood: z.string().optional(),
  serviceType: z.string().min(2, "Tipo de serviço é obrigatório"),
  projectType: z.string().optional(),
  message: z.string().min(5, "Mensagem deve conter mais detalhes"),
});

export const leadsRouter = createTRPCRouter({
  create: publicProcedure
    .input(leadSchema)
    .mutation(async ({ ctx, input }) => {
      const lead = await ctx.db.lead.create({
        data: {
          name: input.name,
          phone: input.phone,
          email: input.email ?? null,
          neighborhood: input.neighborhood ?? null,
          serviceType: input.serviceType,
          projectType: input.projectType ?? "Residencial",
          message: input.message,
        },
      });
      // Fire and forget email notification
      sendLeadNotificationEmail(input).catch((err: unknown) =>
        console.error("Erro e-mail:", err),
      );
      return { id: lead.id, createdAt: lead.createdAt };
    }),

  list: publicProcedure
    .input(
      z.object({
        adminKey: z.string(),
        status: z.string().optional(),
        page: z.number().int().min(1).default(1),
        limit: z.number().int().min(1).max(100).default(20),
      }),
    )
    .query(async ({ ctx, input }) => {
      if (input.adminKey !== env.ADMIN_API_KEY) {
        throw new Error("Acesso não autorizado");
      }
      const where = input.status ? { status: input.status } : {};
      const [leads, total] = await Promise.all([
        ctx.db.lead.findMany({
          where,
          orderBy: { createdAt: "desc" },
          skip: (input.page - 1) * input.limit,
          take: input.limit,
        }),
        ctx.db.lead.count({ where }),
      ]);
      return {
        leads,
        pagination: {
          page: input.page,
          limit: input.limit,
          total,
          totalPages: Math.ceil(total / input.limit),
        },
      };
    }),

  updateStatus: publicProcedure
    .input(
      z.object({
        adminKey: z.string(),
        id: z.string(),
        status: z.enum([
          "NOVO",
          "EM_ATENDIMENTO",
          "ORCAMENTO_ENVIADO",
          "CONCLUIDO",
          "CANCELADO",
        ]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.adminKey !== env.ADMIN_API_KEY) {
        throw new Error("Acesso não autorizado");
      }
      return ctx.db.lead.update({
        where: { id: input.id },
        data: { status: input.status },
      });
    }),
});
