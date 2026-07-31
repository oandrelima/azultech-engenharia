"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const mezaninoSubItems = [
  { label: "Mezaninos Metálicos", href: "/servicos/mezaninos-metalicos" },
  { label: "Mezaninos Residenciais", href: "/servicos/mezaninos-residenciais" },
  { label: "Mezaninos p/ Apartamentos", href: "/servicos/mezaninos-para-apartamentos" },
];

const coberturaSubItems = [
  { label: "Cobertura Metálica", href: "/servicos/cobertura-metalica" },
  { label: "Cobertura de Vidro", href: "/servicos/cobertura-de-vidro" },
];

const portoesSubItems = [
  { label: "Automatização de Portões", href: "/servicos/automatizacao-de-portoes" },
  { label: "Reforma de Portões", href: "/servicos/reforma-de-portoes-de-aluminio" },
  { label: "Portas de Vidro Blindex", href: "/servicos/portas-de-vidro-blindex" },
];

const outrosSubItems = [
  { label: "Janelas Blindex", href: "/servicos/janelas-de-vidro-blindex" },
  { label: "Box para Banheiro", href: "/servicos/box-para-banheiro" },
  { label: "Fechamento de Sacadas", href: "/servicos/fechamento-de-sacadas" },
  { label: "Elétrica", href: "/servicos/servico-de-eletrica" },
  { label: "Hidráulica", href: "/servicos/servicos-de-hidraulica" },
  { label: "Forro de Gesso", href: "/servicos/forro-de-gesso-e-acabamentos" },
];

type ServiceItem =
  | { label: string; href: string; subItems?: undefined }
  | { label: string; href: string; subItems: { label: string; href: string }[] };

const services: ServiceItem[] = [
  { label: "Mezaninos", href: "/servicos/mezaninos-metalicos", subItems: mezaninoSubItems },
  { label: "Cobertura", href: "/servicos/cobertura-metalica", subItems: coberturaSubItems },
  { label: "Portões e Portas", href: "/servicos/automatizacao-de-portoes", subItems: portoesSubItems },
  { label: "Outros", href: "/servicos", subItems: outrosSubItems },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMezaOpen, setMobileMezaOpen] = useState(false);
  const [mobileCobOpen, setMobileCobOpen] = useState(false);
  const [mobilePrtOpen, setMobilePrtOpen] = useState(false);
  const [mobileOutrosOpen, setMobileOutrosOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 bg-[#0c3561] transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover effect */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/logo.png"
              alt="Azultech Engenharia"
              width={160}
              height={48}
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.6)]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-colors">
              Início
            </Link>
            <Link href="/sobre" className="px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-colors">
              Sobre
            </Link>

            {/* Services Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 px-3 py-1 text-white/90 group-hover:text-white font-medium text-sm transition-colors">
                Serviços
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 hidden group-hover:block z-50">
                {services.map((s, i) => (
                  s.subItems ? (
                    <div key={s.href} className="relative group/sub">
                      <div className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                        <span className="font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                          {s.label}
                        </span>
                        <svg className="w-3.5 h-3.5 text-gray-400 group-hover/sub:text-orange-500 transition-all group-hover/sub:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute left-full top-0 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 hidden group-hover/sub:block z-50 ml-1">
                        {s.subItems.map((sub) => (
                          <Link key={sub.href} href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                      {i < services.length - 1 && !services[i + 1]?.subItems && (
                        <div className="mx-4 my-1 border-t border-gray-100" />
                      )}
                    </div>
                  ) : (
                    <Link key={s.href} href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">
                      {s.label}
                    </Link>
                  )
                ))}
              </div>
            </div>

            <Link href="/portfolio" className="px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-colors">
              Portfólio
            </Link>
            <Link href="/blog" className="px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-colors">
              Dicas
            </Link>
            <Link href="/contato" className="px-3 py-2 text-white/90 hover:text-white font-medium text-sm transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5511939217592?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
              </svg>
              WhatsApp
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden pt-4 pb-2 border-t border-white/20 mt-3 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {[
                { href: "/", label: "Início" },
                { href: "/sobre", label: "Sobre" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors text-left"
              >
                Serviços
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l border-white/20 pl-3">
                  {/* Mezaninos */}
                  <button onClick={() => setMobileMezaOpen(!mobileMezaOpen)}
                    className="flex items-center justify-between px-2 py-1.5 text-white/80 hover:text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors text-left">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                      Mezaninos
                    </span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${mobileMezaOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileMezaOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {mezaninoSubItems.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="px-2 py-1.5 text-white/70 hover:text-white text-xs font-medium rounded-md hover:bg-white/10 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Cobertura */}
                  <button onClick={() => setMobileCobOpen(!mobileCobOpen)}
                    className="flex items-center justify-between px-2 py-1.5 text-white/80 hover:text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors text-left">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                      Cobertura
                    </span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${mobileCobOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileCobOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {coberturaSubItems.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="px-2 py-1.5 text-white/70 hover:text-white text-xs font-medium rounded-md hover:bg-white/10 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Portões e Portas */}
                  <button onClick={() => setMobilePrtOpen(!mobilePrtOpen)}
                    className="flex items-center justify-between px-2 py-1.5 text-white/80 hover:text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors text-left">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                      Portões e Portas
                    </span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${mobilePrtOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobilePrtOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {portoesSubItems.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="px-2 py-1.5 text-white/70 hover:text-white text-xs font-medium rounded-md hover:bg-white/10 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Outros */}
                  <button onClick={() => setMobileOutrosOpen(!mobileOutrosOpen)}
                    className="flex items-center justify-between px-2 py-1.5 text-white/80 hover:text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors text-left">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
                      Outros
                    </span>
                    <svg className={`w-3.5 h-3.5 transition-transform ${mobileOutrosOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOutrosOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {outrosSubItems.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}
                          className="px-2 py-1.5 text-white/70 hover:text-white text-xs font-medium rounded-md hover:bg-white/10 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Plain items if any */}
                  {services.filter(s => !s.subItems).map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                      className="px-2 py-1.5 text-white/80 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {[
                { href: "/portfolio", label: "Portfólio" },
                { href: "/blog", label: "Dicas" },
                { href: "/contato", label: "Contato" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-white/90 hover:text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <a
                href="https://wa.me/5511939217592"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2.5 rounded-lg font-semibold text-sm"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
