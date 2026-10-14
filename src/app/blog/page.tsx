import Link from "next/link";
import Image from "next/image";
import { articles } from "~/lib/articles";
import { Icon } from "~/components/Icon";
export const metadata = { title: "Dicas e Artigos", description: "Orientações sobre planejamento de reformas, cuidados com vidros e manutenção hidráulica, com fontes para consulta." };
export default function BlogPage() {
  return <><section className="page-heading"><div className="container"><p className="eyebrow">Dicas e artigos</p><h1>Cuide melhor do seu espaço.</h1><p>Informação útil para planejar uma reforma e manter seu imóvel em boas condições.</p></div></section>
    <section className="container grid gap-10 py-20 md:grid-cols-3">{articles.map(p => <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
      <Image src={p.coverImageUrl} alt="" width={1600} height={900} className="aspect-[4/3] rounded object-cover" />
      <p className="eyebrow mt-6">{p.category} · {p.readTime}</p><h2 className="mt-3 text-xl font-semibold group-hover:text-orange-600">{p.title}</h2><p className="mt-3 text-sm leading-7 text-slate-500">{p.excerpt}</p><span className="mt-5 inline-flex items-center gap-2 text-sm">Ler artigo <Icon name="arrow" className="h-4 w-4" /></span>
    </Link>)}</section></>;
}
