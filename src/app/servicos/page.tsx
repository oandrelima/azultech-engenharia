import Link from "next/link";
import { api } from "~/trpc/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da Azultech Engenharia: mezaninos metálicos, coberturas, esquadrias Blindex, automatização de portões e muito mais na Zona Sul de SP.",
};

export default async function ServicosPage() {
  const categories = await api.services.getCategories();

  return (
    <>
      {/* Compact Hero with background image */}
      <section className="relative bg-[#004488] py-10 lg:py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#004488]/80 to-[#002244]/90" />

        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-xs text-blue-200 mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white font-medium">Serviços</span>
          </nav>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Nossos <span className="text-orange-400">Serviços</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Soluções completas em engenharia civil para residências e empresas na Zona Sul de São Paulo.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {categories.map((category) => (
            <div key={category.id}>
              <h2 className="font-head text-2xl sm:text-3xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-orange-400 inline-block pr-6">
                {category.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-3xl">{category.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicos/${service.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="font-head font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                    <div className="flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-wider">
                      Ver detalhes <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-head text-3xl font-black text-gray-900 mb-3">
            Não encontrou o que procura?
          </h2>
          <p className="text-gray-500 text-base mb-6 max-w-xl mx-auto">
            Entre em contato e nossa equipe técnica desenvolverá a solução ideal para o seu imóvel.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  );
}
