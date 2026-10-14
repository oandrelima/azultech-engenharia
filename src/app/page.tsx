import Link from "next/link";
import Image from "next/image";
import { serviceCatalog } from "~/lib/services";
import { company } from "~/lib/company";
import { Icon } from "~/components/Icon";
import { LeadForm } from "~/components/LeadForm";
import { ScrollReveal } from "~/components/ScrollReveal";
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

export default function HomePage() {
  const services = serviceCatalog;
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[calc(100svh-72px)] flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/mezanino.png"
            alt="Mezanino metálico Azultech Engenharia"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay – stronger at bottom left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e]/90 via-[#0c3561]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060f1e]/80 via-[#060f1e]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-12 pt-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col gap-10">

              {/* Left – main text */}
              <ScrollReveal direction="up" className="max-w-2xl">
                <p className="text-orange-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                  Mezaninos e Serralheria
                </p>
                <h1 className="font-head text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6">
                  Projetos sob medida,{" "}
                  <span className="italic font-normal text-orange-300" style={{fontFamily:"Georgia, serif"}}>do alicerce</span>
                  <br />ao acabamento.
                </h1>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  Especialistas em mezaninos metálicos, coberturas de vidro, esquadrias Blindex e reformas residenciais e comerciais. Atendemos toda a Zona Sul de São Paulo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#orcamento"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-center transition-all duration-300 text-base btn-glow shadow-lg"
                  >
                    Solicitar Orçamento Grátis
                  </Link>
                  <Link
                    href="#servicos"
                    className="border border-white/30 hover:border-white/70 text-white font-semibold px-8 py-4 rounded-xl text-center transition-all duration-300 text-base hover:bg-white/10 backdrop-blur-sm"
                  >
                    Ver Serviços
                  </Link>
                </div>

                {/* Stats bar */}
                <div className="flex flex-wrap gap-8 mt-10 pt-6 border-t border-white/15">
                  {[["18x", "Sem juros"], ["2017", "Desde"], ["SP", "Atendimento"]].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl sm:text-3xl font-black text-white font-head leading-none">{num}</div>
                      <div className="text-xs text-white/50 mt-1 font-medium uppercase tracking-wider">{label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <section className="py-20 bg-gray-50" id="servicos">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Conheça nossos <span className="text-orange-500">serviços</span>
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Da estrutura metálica ao acabamento fino, somos especialistas em transformar espaços residenciais e comerciais.
            </p>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 50} direction="up" className="w-full">
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-300 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between block"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center font-bold mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <CheckSVG />
                    </div>
                    <h3 className="font-head font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-wider pt-2 border-t border-gray-50">
                    Saiba mais <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10"><Link href="/servicos" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors">Todos os serviços →</Link></div>
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
          <div className="absolute inset-0 bg-[#0c3561]/90 backdrop-blur-xs"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                    alt="Imagem ilustrativa de reforma residencial"
                    width={700} height={500}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-2xl p-5 shadow-xl">
                  <div className="text-3xl font-black font-head">2017</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Desde</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <div>
                <h2 className="font-head text-3xl sm:text-4xl font-black text-white mb-4">
                  Trabalhe com os melhores,<br />
                  <span className="text-orange-400">receba o melhor.</span>
                </h2>
                <p className="text-blue-100 text-base leading-relaxed mb-8">
                  Desde 8 de agosto de 2017, a Azultech Engenharia atua com fabricação, instalação e manutenção para imóveis residenciais e comerciais em São Paulo.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    ["Transparência em cada etapa", "Converse com a equipe sobre o escopo e as etapas do seu projeto."],
                    ["Soluções completas", "Mezaninos, coberturas, vidros, portões e reformas para o seu imóvel."],
                    ["Materiais de primeira linha", "Materiais e acabamentos definidos conforme a necessidade de cada ambiente."],
                    ["Parcelamento em até 18x sem juros", "Consulte as condições de parcelamento para o seu projeto."],
                  ].map(([title, desc]) => (
                    <li key={title} className="flex gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"><Icon name="check" className="h-3 w-3" /></span>
                      <div>
                        <strong className="text-white text-sm block font-head">{title}</strong>
                        <span className="text-blue-200 text-xs">{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sobre"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 text-base btn-glow shadow-md"
                >
                  Conheça nossa equipe
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO DE ORÇAMENTO ===== */}
      <section className="py-20 bg-[#0c3561]" id="orcamento">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="right">
              <div className="text-white">
                <h2 className="font-head text-3xl sm:text-4xl font-black mb-4">
                  Solicite seu <span className="text-orange-400">orçamento grátis</span>
                </h2>
                <p className="text-blue-100 text-base leading-relaxed mb-8">
                  Preencha o formulário e um de nossos especialistas entrará em contato para conversar sobre o projeto. Ou se preferir, fale diretamente pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511939217592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 text-base mb-8 shadow-lg hover:shadow-green-900/40"
                >
                  <WhatsAppSVG />
                  (11) 93921-7592
                </a>
                <div className="space-y-3 text-blue-200 text-sm border-t border-blue-400/20 pt-6">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Endereço:</span> {company.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-white">Horário:</span> {company.workingHours}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <LeadForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
