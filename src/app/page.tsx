import Link from "next/link";
import Image from "next/image";
import { serviceCatalog } from "~/lib/services";
import { company } from "~/lib/company";
import { Icon } from "~/components/Icon";
import { ServiceCard } from "~/components/ServiceCard";
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


export default function HomePage() {
  const services = serviceCatalog;
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative w-full min-h-[calc(100svh-60px)] flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/mezanino.png"
            alt="Mezanino metálico Azultech Engenharia"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="hero-shade absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pb-12 pt-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col gap-10">

              {/* Left – main text */}
              <ScrollReveal direction="up" className="max-w-2xl">
                <p className="text-orange-300 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                  Mezaninos e Serralheria
                </p>
                <h1 className="font-head text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6">
                  Projetos sob medida,{" "}
                  <span className="italic font-normal text-orange-300" style={{fontFamily:"Georgia, serif"}}>do alicerce</span>
                  <br />ao acabamento.
                </h1>
                <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
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
                    className="border border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-center transition-all duration-300 text-base bg-[#091f3a]/60 hover:bg-[#091f3a]/85 backdrop-blur-sm"
                  >
                    Ver Serviços
                  </Link>
                </div>

                {/* Stats bar */}
                <div className="hero-stats flex flex-wrap gap-8 mt-8">
                  {[["18x", "Sem juros"], ["2017", "Desde"], ["SP", "Atendimento"]].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-2xl sm:text-3xl font-black text-white font-head leading-none">{num}</div>
                      <div className="text-xs text-white/85 mt-1 font-medium uppercase tracking-wider">{label}</div>
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
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10"><Link href="/servicos" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors">Todos os serviços →</Link></div>
        </div>
      </section>


      <section className="team-section py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="right">
              <figure className="team-photo-frame">
                <Image src="/images/equipe-oficina.webp" alt="Equipe reunida na oficina industrial" width={1396} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" className="w-full h-auto rounded-xl" />
              </figure>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={100}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-orange-300">Da oficina ao seu espaço</p>
              <h2 className="font-head text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.12] text-white">Trabalhe com os melhores,<br /><span className="text-orange-300">receba o melhor.</span></h2>
              <p className="mt-6 text-base leading-8 text-white/90">Fabricação, instalação e manutenção para transformar ambientes residenciais e comerciais. Converse com quem vai ajudar a tirar sua ideia do papel.</p>
              <div className="my-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Transparência", "Escopo e etapas alinhados com você."],
                  ["Soluções completas", "Da estrutura metálica ao acabamento."],
                  ["Sob medida", "Materiais escolhidos para cada ambiente."],
                  ["Até 18x sem juros", "Consulte as condições para o projeto."],
                ].map(([title, description]) => <div key={title} className="team-feature"><Icon name="check" className="mb-3 h-5 w-5 text-orange-300" /><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/80">{description}</p></div>)}
              </div>
              <Link href="/sobre" className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition-colors hover:bg-orange-600">Conheça nossa equipe <Icon name="arrow" /></Link>
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
                  Preencha os dados do projeto e continue a conversa pelo WhatsApp, com todas as informações organizadas.
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
