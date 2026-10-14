import Link from "next/link";
import Image from "next/image";
import { company } from "~/lib/company";
import { Icon } from "~/components/Icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Azultech",
  description:
    "Conheça a história, missão e equipe da Azultech Engenharia, especialistas em reformas e estruturas metálicas na Zona Sul de São Paulo.",
};

const stats = [{ num: "2017", label: "Fundação" }, { num: "18x", label: "Parcelamento" }, { num: "SP", label: "Atendimento" }];

const areas = company.coverageNeighborhoods;

export default function SobrePage() {
  return (
    <>
      {/* Compact Hero */}
      <section className="relative bg-[#0c3561] py-10 lg:py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091f3a]/90 via-[#0c3561]/80 to-[#060f1e]/90" />

        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-xs text-blue-200 mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <span className="text-white font-medium">Sobre</span>
          </nav>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Sobre a <span className="text-orange-400">Azultech</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Engenharia civil com propósito: transformar espaços com segurança, qualidade e transparência.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Imagem ilustrativa de obra"
                width={800} height={500}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Desde <span className="text-orange-500">2017</span> transformando espaços
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  A Azultech Engenharia Ltda foi fundada em 8 de agosto de 2017 e atua com estruturas metálicas, vidros e reformas para residências e empresas.
                </p>
                <p>
                  Nossa sede fica na Avenida Anacé, 136, Jardim Umarizal, São Paulo – SP. CNPJ 28.366.602/0001-86. Realizamos fabricação, instalação e manutenção conforme a necessidade de cada imóvel.
                </p>
                <p>
                  Nossa missão é unir eficiência técnica, inovação e compromisso com a satisfação do cliente em cada projeto.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="font-head text-2xl sm:text-3xl font-black text-orange-500">{s.num}</div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                Nosso <span className="text-orange-500">compromisso</span> com você
              </h2>
              <ul className="space-y-4">
                {[
                  ["Transparência", "Converse com a equipe sobre o escopo e as etapas do projeto."],
                  ["Qualidade", "Materiais e acabamentos definidos para cada ambiente."],
                  ["Agilidade", "Consulte a disponibilidade e os prazos para o seu projeto."],
                  ["Segurança", "A solução deve considerar o uso do espaço e as condições do imóvel."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"><Icon name="check" className="h-3 w-3" /></span>
                    <div>
                      <strong className="text-gray-900 text-base block">{title}</strong>
                      <span className="text-gray-500 text-sm">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=700&q=80"
                alt="Imagem ilustrativa de reforma"
                width={700} height={500}
                className="w-full h-[380px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-head text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Regiões onde <span className="text-orange-500">atendemos</span>
            </h2>
            <p className="text-gray-500 text-base">Atendemos toda a Grande São Paulo, com foco na Zona Sul.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-[#0c3561] font-semibold px-3.5 py-1.5 rounded-lg text-sm transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contato"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
