import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "~/lib/articles";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map(p => ({slug:p.slug})); }
export async function generateMetadata({params}: Props) { const {slug}=await params; const p=articles.find(p=>p.slug===slug); return { title:p?.title ?? "Artigo não encontrado", description:p?.excerpt }; }
export default async function BlogPostPage({params}:Props) {
 const {slug}=await params; const p=articles.find(p=>p.slug===slug); if(!p)notFound();
 return <><section className="page-heading"><div className="container"><Link href="/blog" className="text-sm text-slate-500">← Todas as dicas</Link><p className="eyebrow mt-8">{p.category} · {p.readTime}</p><h1>{p.title}</h1><p>{p.excerpt}</p></div></section>
 <article className="container py-12"><figure className="mx-auto max-w-[900px]"><Image src={p.coverImageUrl} alt={"Imagem ilustrativa — "+p.category} width={1600} height={900} className="aspect-[2/1] w-full rounded object-cover" /><figcaption className="mt-2 text-xs text-slate-400">Imagem ilustrativa</figcaption></figure>
 <div className="article-body mt-10" dangerouslySetInnerHTML={{__html:p.content}} />
 <aside className="article-body mt-10 border-t border-slate-200 pt-6"><h2 className="!mt-0 !text-base">Fontes para consultar</h2>{p.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="block text-sm text-[#0c3561] underline underline-offset-4">{s.label}</a>)}</aside>
 <div className="article-body mt-10"><Link href="/contato" className="button-primary">Converse sobre o seu projeto</Link></div></article></>;
}
