import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const servicesRouter = createTRPCRouter({
  getCategories: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.serviceCategory.findMany({
      orderBy: { order: "asc" },
      include: {
        services: {
          select: {
            id: true,
            title: true,
            slug: true,
            shortDescription: true,
            imageUrl: true,
            icon: true,
          },
          where: { active: true },
          orderBy: { order: "asc" },
        },
      },
    });
  }),

  getAll: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        neighborhood: z.string().optional(),
        search: z.string().optional(),
      }).optional(),
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = { active: true };
      if (input?.category) where.category = { slug: input.category };
      if (input?.neighborhood)
        where.targetNeighborhoods = { contains: input.neighborhood };
      if (input?.search) {
        const term = input.search;
        where.OR = [
          { title: { contains: term } },
          { shortDescription: { contains: term } },
        ];
      }
      const services = await ctx.db.service.findMany({
        where,
        orderBy: { order: "asc" },
        include: { category: { select: { name: true, slug: true } } },
      });
      return services.map((s) => ({
        ...s,
        benefits: JSON.parse(s.benefits ?? "[]") as string[],
        targetNeighborhoods: JSON.parse(s.targetNeighborhoods ?? "[]") as string[],
      }));
    }),

  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const service = await ctx.db.service.findUnique({
        where: { slug: input.slug },
        include: { category: true },
      });
      if (!service) throw new Error("Serviço não encontrado");

      const relatedServices = await ctx.db.service.findMany({
        where: {
          categoryId: service.categoryId,
          id: { not: service.id },
          active: true,
        },
        take: 3,
        select: { id: true, title: true, slug: true, shortDescription: true },
      });

      return {
        ...service,
        benefits: JSON.parse(service.benefits ?? "[]") as string[],
        targetNeighborhoods: JSON.parse(service.targetNeighborhoods ?? "[]") as string[],
        relatedServices,
      };
    }),

  getAllSlugs: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.service.findMany({
      where: { active: true },
      select: { slug: true },
    });
  }),
});
