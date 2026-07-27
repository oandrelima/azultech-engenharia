import Link from "next/link";
import { api } from "~/trpc/server";
import { LeadForm } from "~/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato e Orçamento",
  description:
    "Entre em contato com a Azultech Engenharia para solicitar um orçamento de reformas, mezaninos, coberturas e esquadrias na Zona Sul de SP.",
};

export default async function ContatoPage() {
  let companyInfo = null;
  try {
    companyInfo = await api.company.getInfo();
  } catch {
    // fallback
  }

  const mapsUrl = "https://maps.google.com/maps?q=Av.+Anac%C3%A9%2C+136+-+Campo+Limpo%2C+S%C3%A3o+Paulo+-+SP%2C+05755-090&t=&z=16&ie=UTF8&iwloc=&output=embed";

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
            <span className="text-white font-medium">Contato</span>
          </nav>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Fale com a <span className="text-orange-400">Azultech</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Solicite seu orçamento sem compromisso. Respondemos em até 24 horas.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-[#004488]" id="orcamento">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="font-head text-3xl sm:text-4xl font-black mb-4">
                Solicite seu <span className="text-orange-400">orçamento grátis</span>
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-8">
                Preencha o formulário e um de nossos especialistas entrará em contato em até 24 horas.
              </p>
              <a
                href="https://wa.me/5511939217592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-base mb-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
                </svg>
                {companyInfo?.phone ?? "(11) 93921-7592"}
              </a>
              <div className="space-y-3 text-blue-200 text-sm">
                <p><strong>Endereço:</strong> {companyInfo?.address ?? "Av. Anacé, 136 — Campo Limpo, Zona Sul, São Paulo/SP"}</p>
                <p><strong>Horário de Atendimento:</strong> {companyInfo?.workingHours ?? "Segunda a Sexta das 08h às 18h | Sábados das 08h às 13h"}</p>
                <p><strong>E-mail:</strong> {companyInfo?.email ?? "contato@azultechengenharia.com.br"}</p>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Google Maps Embed with accurate location */}
      <section className="py-0">
        <iframe
          src={mapsUrl}
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Azultech Engenharia no Google Maps"
        />
      </section>
    </>
  );
}
