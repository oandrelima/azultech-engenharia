import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";
import { staticCaller } from "~/trpc/static-caller";
import type { Metadata, ResolvingMetadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await api.blog.getBySlug({ slug });
    return { title: post.title, description: post.excerpt };
  } catch {
    return { title: "Artigo não encontrado" };
  }
}

export async function generateStaticParams() {
  const slugs = await staticCaller.blog.getAllSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await api.blog.getBySlug({ slug }).catch(() => null);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-800 mb-4">Artigo não encontrado</h1>
          <Link href="/blog" className="text-orange-500 font-semibold hover:underline">← Voltar para Dicas</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Compact Hero */}
      <section className="relative bg-[#0c3561] py-10 lg:py-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.coverImageUrl ?? "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091f3a]/90 via-[#0c3561]/80 to-[#060f1e]/90" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <nav className="text-xs text-blue-200 mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Dicas</Link>
            <span>/</span>
            <span className="text-white font-medium truncate">{post.title}</span>
          </nav>
          <span className="inline-block bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            {post.category}
          </span>
          <h1 className="font-head text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-blue-200 text-xs">
            {post.readTime && <span>Tempo de leitura: {post.readTime}</span>}
            <span>•</span>
            <time dateTime={post.publishedAt.toISOString()}>
              {post.publishedAt.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImageUrl && (
        <div className="container mx-auto px-4 max-w-4xl -mt-6 relative z-10 mb-8">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={900} height={500}
            className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-xl"
          />
        </div>
      )}

      {/* Content */}
      <article className="container mx-auto px-4 max-w-4xl py-8 mb-12">
        <div
          className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed text-base space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200 text-center bg-gray-50 p-8 rounded-2xl">
          <h3 className="font-head text-2xl font-bold text-gray-900 mb-2">Gostou do conteúdo?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">Fale com a Azultech e solicite um orçamento grátis para seu projeto.</p>
          <Link
            href="/contato"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Solicitar Orçamento Grátis
          </Link>
        </div>
      </article>
    </>
  );
}
