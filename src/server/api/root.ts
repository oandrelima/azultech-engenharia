import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { leadsRouter } from "~/server/api/routers/leads";
import { servicesRouter } from "~/server/api/routers/services";
import { portfolioRouter } from "~/server/api/routers/portfolio";
import { testimonialsRouter } from "~/server/api/routers/testimonials";
import { blogRouter } from "~/server/api/routers/blog";
import { companyRouter } from "~/server/api/routers/company";

export const appRouter = createTRPCRouter({
  leads: leadsRouter,
  services: servicesRouter,
  portfolio: portfolioRouter,
  testimonials: testimonialsRouter,
  blog: blogRouter,
  company: companyRouter,
});

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
