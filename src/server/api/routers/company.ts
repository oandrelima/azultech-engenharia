import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const companyRouter = createTRPCRouter({
  getInfo: publicProcedure.query(async ({ ctx }) => {
    const info = await ctx.db.companyInfo.findUnique({ where: { id: "default" } });
    if (!info) throw new Error("Informações institucionais não encontradas");

    const coverageNeighborhoods = JSON.parse(info.coverageNeighborhoods ?? "[]") as string[];

    const schemaJsonLd = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      name: info.tradeName,
      legalName: info.companyName,
      image: "https://azultechengenharia.com.br/logo.png",
      "@id": "https://azultechengenharia.com.br/#organization",
      url: "https://azultechengenharia.com.br",
      telephone: info.phone,
      email: info.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${info.street}, ${info.number}`,
        addressLocality: info.neighborhood,
        addressRegion: info.state,
        postalCode: info.cep,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.6322,
        longitude: -46.7576,
      },
      areaServed: coverageNeighborhoods.map((n) => ({
        "@type": "AdministrativeArea",
        name: `${n}, São Paulo - SP`,
      })),
      sameAs: [info.instagram],
      priceRange: "$$",
      openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-13:00",
    };

    return { ...info, coverageNeighborhoods, schemaJsonLd };
  }),
});
