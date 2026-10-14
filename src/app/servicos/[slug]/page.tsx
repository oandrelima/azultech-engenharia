import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { serviceCatalog } from "~/lib/services";
import { company } from "~/lib/company";
import { LeadForm } from "~/components/LeadForm";
import { Icon } from "~/components/Icon";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return serviceCatalog.map(s=>({slug:s.slug}));}
export async function generateMetadata({params}:Props){const {slug}=await params;const s=serviceCatalog.find(s=>s.slug===slug);return {title:s?.title ?? "Serviço não encontrado",description:s?.shortDescription};}
export default async function ServicePage({params}:Props){
 const {slug}=await params;const s=serviceCatalog.find(s=>s.slug===slug);if(!s)notFound();
 const related=serviceCatalog.filter(r=>r.categoryName===s.categoryName && r.slug!==s.slug);
 return <>
 <section className="bg-[#f7f8fa]"><div className="container grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16"><div><nav aria-label="Caminho da página" className="mb-8 flex gap-2 text-xs text-slate-500"><Link href="/">Início</Link><span>/</span><Link href="/servicos">Serviços</Link></nav><p className="eyebrow">{s.categoryName}</p><h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-5xl">{s.title}</h1><p className="mt-5 max-w-md leading-8 text-slate-500">{s.shortDescription}</p><a href="#orcamento" className="button-primary mt-8">Solicitar orçamento <Icon name="arrow" /></a></div><figure><Image src={s.imageUrl} alt={"Conceito ilustrativo de "+s.title} width={1600} height={900} priority sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/3] w-full rounded-lg object-cover" /><figcaption className="mt-2 text-right text-[11px] text-slate-400">Imagem ilustrativa</figcaption></figure></div></section>
 <section className="container grid items-start gap-12 py-16 lg:grid-cols-[1.2fr_1fr]"><div><h2 className="text-2xl font-semibold">Uma solução para o seu espaço.</h2><p className="mt-5 leading-8 text-slate-500">{s.fullDescription}</p><ul className="my-8 grid gap-4">{s.benefits.map(b=><li key={b} className="flex gap-3 text-sm leading-7 text-slate-600"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[#0c3561]" />{b}</li>)}</ul><div className="border-t border-slate-200 pt-6"><h3 className="font-semibold">Como funciona o orçamento</h3><p className="mt-3 text-sm leading-7 text-slate-500">{s.differentials}</p><p className="mt-3 text-sm leading-7 text-slate-500">{company.paymentMethods}</p></div><div className="mt-8 border-t border-slate-200 pt-6"><h3 className="font-semibold">Atendimento em São Paulo e região</h3><p className="mt-3 text-sm leading-7 text-slate-500">Zona Sul, Morumbi, Campo Limpo, Santo Amaro e demais regiões atendidas. Consulte a disponibilidade para o seu endereço.</p><Link href="/sobre" className="mt-3 inline-block text-sm underline underline-offset-4">Consultar regiões atendidas</Link></div></div>
 <aside id="orcamento" className="rounded-lg border border-slate-200 bg-slate-50 p-2 lg:sticky lg:top-24"><div className="px-6 pt-6"><h2 className="text-2xl font-semibold">Conte sobre seu projeto.</h2><p className="mt-3 text-sm leading-7 text-slate-500">Informe as medidas, o bairro e o que você precisa.</p></div><LeadForm defaultService={s.title} /></aside></section>
 {related.length>0 && <section className="container border-t border-slate-200 py-12"><h2 className="text-xl font-semibold">Conheça também</h2><div className="mt-6 grid gap-6 sm:grid-cols-2">{related.map(r=><Link key={r.slug} href={`/servicos/${r.slug}`} className="flex items-center justify-between border-b border-slate-200 py-5">{r.title}<Icon name="arrow" /></Link>)}</div></section>}
 </>;
}
