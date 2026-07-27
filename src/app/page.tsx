import Link from "next/link";
import Image from "next/image";
import { api, HydrateClient } from "~/trpc/server";
import { LeadForm } from "~/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Azultech Engenharia | Estruturas Metálicas e Esquadrias | Zona Sul SP",
  description:
    "Especialistas em mezaninos metálicos, coberturas de vidro, esquadrias Blindex, automatização de portões e reformas residenciais e comerciais na Zona Sul de São Paulo. Parcelamento em até 18x sem juros.",
};

const WhatsAppSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
  </svg>
);

const CheckSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>
);

export default async function HomePage() {
  void api.services.getAll.prefetch({});
  void api.testimonials.getAll.prefetch();

  const [services, testimonials] = await Promise.all([
    api.services.getAll({}),
    api.testimonials.getAll(),
  ]);

  return (
    <HydrateClient>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=30')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Panel */}
            <div>
              <p className="text-orange-400 font-semibold tracking-wider text-xs uppercase mb-3">
                Estruturas Metálicas & Esquadrias em Geral
              </p>
              <h1 className="font-head text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
                Projetos sob medida,<br />
                do <span className="text-orange-400">alicerce</span> ao acabamento.
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Especialistas em mezaninos metálicos, coberturas de vidro, esquadrias Blindex, automatização de portões e reformas residenciais e comerciais. Atendemos toda a Zona Sul de São Paulo com rigor técnico.
              </p>

              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  "Parcelamento em até 18x sem juros",
                  "Projeto e execução com engenheiro responsável",
                  "Orçamento grátis em até 24h",
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-blue-100 text-sm">
                    <span className="text-orange-400 flex-shrink-0"><CheckSVG /></span>
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="#orcamento" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg text-center transition-colors text-base">
                  Solicitar Orçamento Grátis
                </Link>
                <Link href="#servicos" className="border-2 border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-center transition-colors text-base">
                  Ver Serviços
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[["18x", "Sem Juros"], ["500+", "Obras Entregues"], ["15+", "Anos no Mercado"], ["5.0", "Google"]].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black text-white font-head">{num}</div>
                    <div className="text-xs text-blue-200 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=90"
                  alt="Estrutura metálica moderna Azultech"
                  width={800} height={600}
                  className="w-full h-[540px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004488]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="py-20 bg-gray-50" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Conheça nossos <span className="text-orange-500">serviços</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Da estrutura ao acabamento, somos especialistas em transformar espaços residenciais e comerciais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicos/${service.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center font-bold mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  ✓
                </div>
                <h3 className="font-head font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                <div className="flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-wider">
                  Saiba mais <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POR QUE AZULTECH ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
            alt="Profissional de obra"
            fill className="object-cover"
          />
          <div className="absolute inset-0 bg-[#004488]/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                  alt="Engenheiro Azultech"
                  width={700} height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-black font-head">+15</div>
                <div className="text-xs font-semibold uppercase tracking-wider">Anos de experiência</div>
              </div>
            </div>

            <div>
              <h2 className="font-head text-3xl sm:text-4xl font-black text-white mb-4">
                Trabalhe com os melhores,<br />
                <span className="text-orange-400">receba o melhor.</span>
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-8">
                Na Azultech Engenharia, cada projeto é tratado com rigor técnico e atenção ao detalhe. Nossos engenheiros acompanham a obra do início ao fim, garantindo qualidade, segurança e prazo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  ["Transparência em cada etapa", "Acompanhe o progresso da sua obra com comunicação direta com o responsável técnico."],
                  ["Soluções completas", "Do projeto estrutural ao acabamento final, somos o único ponto de contato que você precisa."],
                  ["Materiais de primeira linha", "Trabalhamos apenas com fornecedores certificados: Blindex, PPA, Tigre/Amanco e mais."],
                  ["Parcelamento em até 18x sem juros", "Facilidade de pagamento para que seu projeto saia do papel sem comprometer o orçamento."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <div>
                      <strong className="text-white text-sm block">{title}</strong>
                      <span className="text-blue-200 text-xs">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/sobre" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base">
                Conheça nossa equipe
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-3">
                O que dizem nossos <span className="text-orange-500">clientes</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 6).map((t) => (
                <div key={t.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-orange-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{t.comment}"</p>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.clientName}</div>
                    <div className="text-xs text-gray-400">{t.neighborhood} • {t.serviceProvided}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FORMULÁRIO DE ORÇAMENTO ===== */}
      <section className="py-20 bg-[#004488]" id="orcamento">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="font-head text-3xl sm:text-4xl font-black mb-4">
                Solicite seu <span className="text-orange-400">orçamento grátis</span>
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-8">
                Preencha o formulário e um de nossos especialistas entrará em contato em até 24 horas. Ou se preferir, fale diretamente pelo WhatsApp.
              </p>
              <a
                href="https://wa.me/5511939217592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-base mb-8"
              >
                <WhatsAppSVG />
                (11) 93921-7592
              </a>
              <div className="space-y-3 text-blue-200 text-sm">
                <p>Av. Anacé, 136 — Campo Limpo, SP</p>
                <p>Seg–Sex: 08h–18h | Sábados: 08h–13h</p>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </HydrateClient>
  );
}
