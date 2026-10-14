import Link from "next/link";
import Image from "next/image";
import { serviceCatalog } from "~/lib/services";
import { Icon } from "~/components/Icon";
export const metadata = {title:"Serviços",description:"Mezaninos, coberturas, esquadrias, vidraçaria, portões e reformas sob medida em São Paulo."};
export default function ServicesPage() {
 return <><section className="page-heading"><div className="container"><p className="eyebrow">Nossos serviços</p><h1>Da estrutura ao acabamento.</h1><p>Encontre a solução para o seu imóvel e conheça os detalhes de cada serviço.</p></div></section>
 <section className="container py-16">{Array.from(new Set(serviceCatalog.map(s=>s.categoryName))).map(category=><div key={category} className="mb-16"><h2 className="mb-8 text-2xl font-semibold">{category}</h2><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{serviceCatalog.filter(s=>s.categoryName===category).map(s=><Link key={s.slug} href={`/servicos/${s.slug}`} className="group"><Image src={s.imageUrl} alt={"Conceito ilustrativo de "+s.title} width={1600} height={900} className="aspect-[16/10] w-full rounded object-cover" /><h3 className="mt-5 font-semibold group-hover:text-orange-600">{s.title}</h3><p className="mt-2 text-sm leading-7 text-slate-500">{s.shortDescription}</p><span className="mt-4 inline-flex items-center gap-2 text-sm">Ver serviço <Icon name="arrow" className="h-4 w-4" /></span></Link>)}</div></div>)}<p className="text-xs text-slate-400">Imagens ilustrativas dos serviços.</p></section></>;
}
