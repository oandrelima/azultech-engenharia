import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Veja obras realizadas pela Azultech Engenharia: mezaninos metálicos, coberturas de vidro, esquadrias e reformas na Zona Sul de São Paulo.",
};

export default async function PortfolioPage() {
  const items = await api.portfolio.getAll({}).catch(() => [] as Awaited<ReturnType<typeof api.portfolio.getAll>>);

  return (
    <>
      {/* Compact Hero */}
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
            <span className="text-white font-medium">Portfólio</span>
          </nav>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Portfólio de <span className="text-orange-400">Obras</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Conheça alguns dos projetos que já realizamos para nossos clientes na Zona Sul de São Paulo.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl p-8 border border-gray-100 max-w-lg mx-auto">
              <h2 className="font-head text-2xl font-bold text-gray-800 mb-3">Em breve, novas obras publicadas</h2>
              <p className="text-gray-500 text-sm mb-6">Estamos atualizando a galeria de obras concluídas.</p>
              <Link href="/contato" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm">
                Solicitar Orçamento
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <article key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-56 bg-gray-100">
                    <Image
                      src={item.afterImageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    {item.featured && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded">
                        Destaque
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.serviceCategory}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-xs text-gray-400">{item.neighborhood}</span>
                    </div>
                    <h3 className="font-head font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    {item.executionTime && (
                      <p className="text-xs text-gray-400 mt-3 font-medium">Prazo de execução: {item.executionTime}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004488]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-head text-3xl sm:text-4xl font-black text-white mb-3">
            Quer um projeto assim? <span className="text-orange-400">Fale conosco!</span>
          </h2>
          <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
            Solicite um orçamento grátis e em até 24h um especialista entrará em contato.
          </p>
          <Link href="/contato" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base">
            Solicitar Orçamento Grátis
          </Link>
        </div>
      </section>
    </>
  );
}
