import Link from "next/link";
import Image from "next/image";
import { LeadForm } from "~/components/LeadForm";
import { Icon } from "~/components/Icon";
import { company } from "~/lib/company";
import { serviceCatalog } from "~/lib/services";
import { articles } from "~/lib/articles";

export default function HomePage() {
  return <>
    <section className="home-hero">
      <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div><p className="eyebrow">São Paulo · Desde 2017</p><h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">Mais espaço.<br />Novas possibilidades.</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">Mezaninos, coberturas e reformas pensados para o seu imóvel. Da primeira ideia à instalação, um projeto sob medida.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="#orcamento" className="button-primary">Solicitar orçamento <Icon name="arrow" /></Link><Link href="/servicos" className="button-secondary">Conhecer serviços</Link></div>
          <p className="mt-7 text-xs text-slate-500">Até 18x sem juros no cartão. Consulte as condições.</p>
        </div>
        <figure><div className="relative aspect-[5/4] overflow-hidden rounded-lg"><Image src="/images/services/mezaninos-residenciais.webp" alt="Conceito de mezanino residencial com estrutura metálica e escada" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><figcaption className="mt-2 text-right text-[11px] text-slate-400">Imagem ilustrativa</figcaption></figure>
      </div>
    </section>
    <section className="container py-20" id="servicos">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">O que fazemos</p><h2 className="mt-3 text-3xl font-semibold">Soluções para cada ambiente.</h2></div><Link href="/servicos" className="text-sm text-[#0c3561]">Explorar todos os serviços <span aria-hidden="true">→</span></Link></div>
      <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">{serviceCatalog.map((s,i) => <Link key={s.slug} href={`/servicos/${s.slug}`} className="service-row group"><span className="text-xs tabular-nums text-slate-400">{String(i+1).padStart(2,"0")}</span><div className="flex-1"><h3 className="font-semibold group-hover:text-orange-600">{s.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{s.shortDescription}</p></div><Icon name="arrow" className="h-4 w-4 shrink-0 text-slate-400" /></Link>)}</div>
    </section>
    <section className="border-y border-slate-100 bg-[#f7f8fa]"><div className="container grid gap-12 py-20 lg:grid-cols-2"><div><p className="eyebrow">Azultech Engenharia</p><h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight">Seu imóvel, pensado em cada detalhe.</h2><p className="mt-5 max-w-lg leading-8 text-slate-500">Desde {company.foundedLabel}, atuamos em São Paulo com fabricação, instalação e manutenção para residências e empresas.</p><Link href="/sobre" className="mt-6 inline-flex items-center gap-3 text-sm font-semibold">Conheça a Azultech <Icon name="arrow" /></Link></div><div className="grid gap-6">{[["01","Sob medida","Uma proposta que parte do seu espaço e da sua necessidade."],["02","Do projeto ao acabamento","Estruturas, vidros, instalações e reformas em um só contato."],["03","Converse com a equipe","Apresente sua ideia e consulte materiais, execução e pagamento."]].map(([n,t,d]) => <div key={n} className="flex gap-5 border-b border-slate-200 pb-6"><span className="text-xs text-orange-600">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p></div></div>)}</div></div></section>
    <section className="container py-20"><div className="mb-10"><p className="eyebrow">Antes de começar</p><h2 className="mt-3 text-3xl font-semibold">Informação para decidir melhor.</h2></div><div className="grid gap-8 md:grid-cols-3">{articles.map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="border-t border-slate-200 pt-5"><p className="eyebrow">{p.category}</p><h3 className="mt-3 text-xl font-semibold leading-snug">{p.title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{p.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-sm">Ler dica <Icon name="arrow" className="h-4 w-4" /></span></Link>)}</div></section>
    <section className="bg-[#0c3561] py-20 text-white" id="orcamento"><div className="container grid items-start gap-12 lg:grid-cols-2"><div><p className="text-xs uppercase tracking-widest text-white/50">Vamos conversar</p><h2 className="mt-4 text-3xl font-semibold">Conte o que você tem em mente.</h2><p className="mt-5 max-w-md leading-8 text-white/70">Envie as informações do seu projeto ou fale diretamente com a equipe pelo WhatsApp.</p><a href={`https://wa.me/${company.whatsapp}`} className="mt-7 inline-flex items-center gap-3 text-lg"><Icon name="phone" />{company.phone}</a><p className="mt-8 max-w-sm text-sm leading-7 text-white/60">{company.address}<br />CEP {company.cep}</p></div><LeadForm /></div></section>
  </>;
}
