"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { serviceCatalog } from "~/lib/services";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); setServicesOpen(false); }, [pathname]);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c3561]">
    <div className="container flex h-[80px] items-center justify-between gap-6">
      <Brand />
      <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8 text-sm text-white/80">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Início</Link>
        <Link href="/sobre" aria-current={pathname === "/sobre" ? "page" : undefined}>Sobre</Link>
        <div className="relative">
          <button onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="desktop-services" className="flex items-center gap-2">Serviços <Icon name="chevron" className="h-3 w-3" /></button>
          {servicesOpen && <><button className="fixed inset-0 cursor-default" aria-label="Fechar serviços" onClick={() => setServicesOpen(false)} /><div id="desktop-services" className="absolute top-10 -left-40 grid w-[600px] grid-cols-2 gap-1 rounded-lg border border-gray-200 bg-white p-4 text-gray-700 shadow-lg">
            <Link className="col-span-2 border-b border-gray-100 p-2 font-semibold" href="/servicos">Todos os serviços</Link>
            {serviceCatalog.map(s => <Link key={s.slug} href={`/servicos/${s.slug}`} className="rounded p-2 text-sm hover:bg-gray-50 hover:text-orange-600">{s.title}</Link>)}
          </div></>}
        </div>
        <Link href="/blog" aria-current={pathname.startsWith("/blog") ? "page" : undefined}>Dicas</Link>
        <Link href="/contato" aria-current={pathname === "/contato" ? "page" : undefined}>Contato</Link>
      </nav>
      <Link href="/contato" className="hidden sm:inline-flex items-center gap-3 rounded bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600">Solicitar orçamento <Icon name="arrow" className="h-4 w-4" /></Link>
      <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu"><Icon name={open ? "close" : "menu"} /></button>
    </div>
    {open && <nav id="mobile-menu" aria-label="Navegação móvel" className="container max-h-[calc(100dvh-80px)] overflow-auto border-t border-white/10 pb-6 text-sm text-white">
      {([['/', 'Início'], ['/sobre', 'Sobre'], ['/servicos', 'Todos os serviços'], ['/blog', 'Dicas'], ['/contato', 'Contato']] as const).map(([href,label]) => <Link key={href} href={href} className="block border-b border-white/10 py-3">{label}</Link>)}
      <details className="py-3"><summary className="cursor-pointer">Escolha um serviço</summary><div className="mt-3 grid gap-3 pl-3">{serviceCatalog.map(s => <Link key={s.slug} href={`/servicos/${s.slug}`} className="text-white/75">{s.title}</Link>)}</div></details>
    </nav>}
  </header>;
}
