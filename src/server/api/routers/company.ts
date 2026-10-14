import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { company, mapsUrl, organizationSchema } from "~/lib/company";
export const companyRouter = createTRPCRouter({
  getInfo: publicProcedure.query(() => ({ ...company, googleMapsEmbed: mapsUrl, schemaJsonLd: organizationSchema })),
});
