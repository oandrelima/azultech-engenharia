import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { articles } from "~/lib/articles";
export const blogRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => articles),
  getBySlug: publicProcedure.input(z.object({ slug: z.string() })).query(({ input }) => {
    const post = articles.find(p => p.slug === input.slug);
    if (!post) throw new Error("Artigo não encontrado");
    return post;
  }),
  getAllSlugs: publicProcedure.query(() => articles.map(({ slug }) => ({ slug }))),
});
