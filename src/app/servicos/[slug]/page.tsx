import Link from "next/link";
import { api } from "~/trpc/server";
import { staticCaller } from "~/trpc/static-caller";
import { LeadForm } from "~/components/LeadForm";
import { ScrollReveal } from "~/components/ScrollReveal";
import type { Metadata, ResolvingMetadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const service = await api.services.getBySlug({ slug });
    return {
      title: service.seoTitle ?? service.title,
      description: service.seoDescription ?? service.shortDescription,
    };
  } catch {
    return { title: "Serviço não encontrado" };
  }
}

export async function generateStaticParams() {
  const slugs = await staticCaller.services.getAllSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = await api.services.getBySlug({ slug }).catch(() => null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4 text-gray-800 font-head">Serviço não encontrado</h1>
          <Link href="/servicos" className="text-orange-500 font-semibold hover:underline">
            ← Voltar para Todos os Serviços
          </Link>
        </div>
      </div>
    );
  }

  const heroBgImage = service.imageUrl ?? "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80";

  return (
    <>
      {/* Compact Hero with low opacity background image */}
      <section className="relative bg-[#004488] py-10 lg:py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroBgImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#004488]/80 to-[#002244]/90" />

        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-xs text-blue-200 mb-3 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">{service.title}</span>
          </nav>

          <ScrollReveal direction="up" className="max-w-3xl">
            <span className="inline-block bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {service.category.name}
            </span>
            <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              {service.title}
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content + Right Sidebar Layout */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            
            {/* Left Column: Detailed Service Text & Information */}
            <div className="lg:col-span-2 space-y-8">
              {/* Detailed Description */}
              <ScrollReveal direction="up">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h2 className="font-head text-2xl font-black text-gray-900 mb-4 pb-3 border-b border-gray-100">
                    Descrição do Serviço
                  </h2>
                  <div
                    className="prose prose-blue text-gray-600 leading-relaxed text-base space-y-4"
                    dangerouslySetInnerHTML={{ __html: service.fullDescription.replace(/\n/g, "<br>") }}
                  />
                </div>
              </ScrollReveal>

              {/* Advantages / Benefits */}
              {service.benefits.length > 0 && (
                <ScrollReveal direction="up" delay={100}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <h3 className="font-head text-xl font-bold text-gray-900 mb-6">
                      Vantagens e Benefícios
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 hover:bg-orange-50/50 p-4 rounded-xl border border-gray-100 transition-colors">
                          <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 shadow-xs">
                            ✓
                          </span>
                          <span className="text-gray-700 text-sm font-medium leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Technical Differentials */}
              {service.differentials && (
                <ScrollReveal direction="up" delay={150}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <h3 className="font-head text-xl font-bold text-gray-900 mb-3">
                      Diferencial Técnico Azultech
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {service.differentials}
                    </p>
                  </div>
                </ScrollReveal>
              )}

              {/* Target Neighborhoods */}
              {service.targetNeighborhoods.length > 0 && (
                <ScrollReveal direction="up" delay={200}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <h3 className="font-head text-lg font-bold text-gray-900 mb-3">
                      Regiões com Atendimento Prioritário
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.targetNeighborhoods.map((neighborhood) => (
                        <span
                          key={neighborhood}
                          className="bg-blue-50 border border-blue-100 hover:border-orange-300 hover:text-orange-600 text-[#004488] text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-default"
                        >
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Related Services */}
              {service.relatedServices.length > 0 && (
                <ScrollReveal direction="up" delay={250}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                    <h3 className="font-head text-xl font-bold text-gray-900 mb-6">
                      Serviços Relacionados
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {service.relatedServices.map((s) => (
                        <Link
                          key={s.id}
                          href={`/servicos/${s.slug}`}
                          className="block bg-gray-50 hover:bg-orange-50 border border-gray-100 hover:border-orange-200 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 group"
                        >
                          <h4 className="font-head font-bold text-gray-900 text-sm group-hover:text-orange-600 mb-1 transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">{s.shortDescription}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Right Column: Sticky Budget Form Sidebar */}
            <div className="lg:col-span-1 sticky top-24">
              <ScrollReveal direction="left" delay={100}>
                <div className="bg-[#004488] rounded-2xl p-6 shadow-xl text-white mb-6">
                  <h3 className="font-head text-2xl font-black mb-2">
                    Solicite seu Orçamento
                  </h3>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Preencha os dados abaixo para receber uma proposta rápida sem compromisso.
                  </p>
                  <LeadForm defaultService={service.title} />
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Dúvidas Rápidas?
                  </p>
                  <a
                    href={`https://wa.me/5511939217592?text=Olá! Quero tirar dúvidas sobre ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl w-full transition-all duration-300 text-sm shadow-md hover:shadow-green-900/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
                    </svg>
                    Falar no WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
