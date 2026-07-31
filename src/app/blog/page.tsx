import Link from "next/link";
import Image from "next/image";
import { api } from "~/trpc/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dicas e Artigos",
  description:
    "Dicas sobre reformas, mezaninos, coberturas e manutenção da sua casa ou empresa na Zona Sul de SP.",
};

export default async function BlogPage() {
  const posts = await api.blog.getAll().catch(() => [] as Awaited<ReturnType<typeof api.blog.getAll>>);

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
            <span className="text-white font-medium">Dicas</span>
          </nav>
          <h1 className="font-head text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-2">
            Dicas & <span className="text-orange-400">Artigos</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl">
            Conteúdo especializado sobre reformas, manutenção e engenharia civil para sua casa ou empresa.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl p-8 border border-gray-100 max-w-lg mx-auto">
              <h2 className="font-head text-2xl font-bold text-gray-800 mb-3">Em breve, novos artigos</h2>
              <p className="text-gray-500 text-sm mb-6">Estamos preparando conteúdo informativo e técnico.</p>
              <Link href="/contato" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm">
                Fale Conosco
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  {post.coverImageUrl && (
                    <div className="relative h-48 bg-gray-100">
                      <Image src={post.coverImageUrl} alt={post.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">{post.category}</span>
                      {post.readTime && (
                        <>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </>
                      )}
                    </div>
                    <h2 className="font-head font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-1 text-orange-500 text-xs font-bold uppercase tracking-wider">
                      Ler artigo <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
