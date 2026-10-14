import { PrismaClient } from "@prisma/client";
import { company, mapsUrl } from "../src/lib/company";
import { serviceCatalog } from "../src/lib/services";

const rawUrl = process.env.DATABASE_URL ?? "file:./prisma/dev.db";
const prisma = new PrismaClient({ datasources: { db: { url: rawUrl.startsWith("file:./") ? "file:" + process.cwd().replace(/\\/g, "/") + "/" + rawUrl.slice(7) : rawUrl } } });
async function main() {
  const { founded: _f, foundedLabel: _fl, website: _w, ...details } = company;
  const info = { ...details, googleMapsEmbed: mapsUrl, crea: null, coverageNeighborhoods: JSON.stringify(company.coverageNeighborhoods) };
  await prisma.companyInfo.upsert({ where: { id: "default" }, update: info, create: { id: "default", ...info } });
  for (const item of serviceCatalog) {
    const category = await prisma.serviceCategory.upsert({
      where: { slug: item.categorySlug }, update: { name: item.categoryName },
      create: { slug: item.categorySlug, name: item.categoryName, description: "Soluções sob medida para o seu imóvel.", order: item.order },
    });
    const data = {
      title: item.title, shortDescription: item.shortDescription, fullDescription: item.fullDescription,
      categoryId: category.id, imageUrl: item.imageUrl, benefits: JSON.stringify(item.benefits),
      differentials: item.differentials, targetNeighborhoods: JSON.stringify(company.coverageNeighborhoods),
      seoTitle: item.title + " em São Paulo | Azultech Engenharia", seoDescription: item.shortDescription,
      active: true, order: item.order,
    };
    await prisma.service.upsert({ where: { slug: item.slug }, update: data, create: { slug: item.slug, ...data } });
  }
  console.log("Dados institucionais e serviços atualizados. Leads e demais registros preservados.");
}
main().catch(e => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
