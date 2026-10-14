import Link from "next/link";
import Image from "next/image";
import { company } from "~/lib/company";
import { coverage } from "~/lib/coverage";
import { CoverageMap } from "~/components/CoverageMap";
import { Icon } from "~/components/Icon";
import { ScrollReveal } from "~/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Azultech",
  description: "Conheça a equipe da Azultech Engenharia e nosso jeito de trabalhar com estruturas metálicas, vidros e reformas em São Paulo.",
};

export default function SobrePage() {
  return <>
    <section className="relative overflow-hidden bg-[#0c3561] py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <nav className="mb-5 flex gap-2 text-xs text-blue-200"><Link href="/">Início</Link><span>/</span><span className="text-white">Sobre</span></nav>
        <h1 className="font-head text-3xl font-black text-white sm:text-4xl lg:text-5xl">Sobre a <span className="text-orange-300">Azultech</span></h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/85">Gente que entende de transformar ideias em espaços para viver e trabalhar.</p>
      </div>
    </section>

    <section className="py-16 lg:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="right"><Image src="/images/equipe-oficina.webp" alt="Equipe reunida na oficina industrial" width={1396} height={1127} sizes="(max-width: 1023px) 100vw, 50vw" className="h-auto w-full rounded-2xl" /></ScrollReveal>
        <ScrollReveal direction="left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-orange-600">Quem faz acontecer</p>
          <h2 className="font-head text-3xl font-black leading-tight text-slate-900 sm:text-4xl">Desde <span className="text-orange-500">2017</span> transformando espaços.</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>Por trás de cada estrutura, encaixe e acabamento, existe uma equipe que gosta de ver uma ideia ganhar forma. É esse cuidado com o trabalho que aproxima a Azultech de quem quer renovar ou aproveitar melhor um ambiente.</p>
            <p>Nosso jeito de trabalhar começa pela conversa: entender como você usa o espaço, ouvir suas referências e pensar nas possibilidades junto com você. Da oficina à instalação, cada etapa faz parte do mesmo projeto.</p>
            <p>Reunimos soluções em estruturas metálicas, vidros e reformas com atenção aos detalhes e respeito pelo seu imóvel. Queremos que você se sinta à vontade para perguntar, acompanhar e participar das decisões.</p>
          </div>
          <Link href="/contato" className="mt-7 inline-flex items-center gap-3 font-bold text-[#0c3561]">Converse com a nossa equipe <Icon name="arrow" /></Link>
        </ScrollReveal>
      </div>
    </section>

    <section className="commitment-section bg-[#f5f7fa] py-16 lg:py-24">
      <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal direction="right">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-orange-600">Nosso jeito de trabalhar</p>
          <h2 className="font-head text-3xl font-black leading-tight text-slate-900 sm:text-4xl">Nosso <span className="text-orange-500">compromisso</span> começa nos detalhes.</h2>
          <p className="mb-7 mt-5 max-w-lg text-base leading-8 text-slate-600">Uma boa entrega é construída em cada escolha. Por isso, valorizamos uma conversa clara, o cuidado na execução e soluções que façam sentido para você.</p>
          <div className="commitment-values">
            {[
              ["01","Conversa clara","Alinhamos o que será feito e esclarecemos suas dúvidas antes de começar."],
              ["02","Cuidado em cada etapa","Dedicamos atenção às medidas, aos materiais e ao acabamento."],
              ["03","Planejamento conjunto","Definimos o escopo e conversamos sobre as condições e os prazos do projeto."],
              ["04","Respeito pelo seu espaço","Consideramos o uso do ambiente e a rotina de quem vive ou trabalha nele."],
            ].map(([number,title,description]) => <div key={number} className="commitment-value"><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}
          </div>
        </ScrollReveal>
        <ScrollReveal direction="left">
          <figure className="commitment-photo">
            <Image src="/images/compromisso-oficina.webp" alt="Imagem ilustrativa do cuidado na medição de uma estrutura na oficina" width={1600} height={1000} sizes="(max-width: 1023px) 100vw, 50vw" className="h-full w-full object-cover" />
            <figcaption>Precisão no trabalho. Cuidado com o resultado.<span>Imagem ilustrativa</span></figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-16 lg:py-24" id="atendimento">
      <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-[.8fr_1.4fr] lg:gap-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-orange-600">Perto do seu projeto</p>
          <h2 className="font-head text-3xl font-black leading-tight text-slate-900 sm:text-4xl">São Paulo e <span className="text-orange-500">região.</span></h2>
          <p className="mt-5 text-base leading-8 text-slate-600">Partimos do Jardim Umarizal, na Zona Sul, para atender projetos residenciais e comerciais.</p>
          <div className="my-6 flex items-baseline gap-2"><span className="text-4xl font-black text-[#0c3561]">{coverage.radiusKm} km</span><span className="text-sm text-slate-500">de raio de referência</span></div>
          <p className="text-sm leading-7 text-slate-500">Raio calculado a partir dos pontos de referência das {coverage.locationsCount} localidades atendidas, em linha reta. Consulte a disponibilidade para o seu endereço.</p>
          <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de consultar o atendimento para o meu endereço.")}`} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-sm font-bold text-white hover:bg-orange-600">Consultar meu endereço <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
        <CoverageMap />
      </div>
    </section>
  </>;
}
