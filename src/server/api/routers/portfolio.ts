import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        neighborhood: z.string().optional(),
        featured: z.boolean().optional(),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input?.category) where.serviceCategory = { contains: input.category };
      if (input?.neighborhood) where.neighborhood = { contains: input.neighborhood };
      if (input?.featured) where.featured = true;

      return ctx.db.portfolioItem.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const item = await ctx.db.portfolioItem.findUnique({
        where: { slug: input.slug },
      });
      if (!item) throw new Error("Obra não encontrada");
      return item;
    }),
});
