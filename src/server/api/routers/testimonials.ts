import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const testimonialSchema = z.object({
  clientName: z.string().min(2, "Nome é obrigatório"),
  neighborhood: z.string().min(2, "Bairro é obrigatório"),
  serviceProvided: z.string().min(2, "Serviço é obrigatório"),
  rating: z.number().int().min(1).max(5).default(5),
  comment: z.string().min(5, "Comentário deve ter pelo menos 5 caracteres"),
});


export const testimonialsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => ctx.db.testimonial.findMany({
    where: { verified: true, source: "Website" }, orderBy: { createdAt: "desc" }, select: { id: true, clientName: true, neighborhood: true, serviceProvided: true, rating: true, comment: true, verified: true, source: true },
  })),
  create: publicProcedure.input(testimonialSchema).mutation(({ ctx, input }) =>
    ctx.db.testimonial.create({ data: { ...input, verified: false, source: "Website" } })),
});
