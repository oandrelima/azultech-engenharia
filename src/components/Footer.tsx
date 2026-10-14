import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icon";
import { company } from "~/lib/company";
export function Footer() {
  return <footer className="bg-[#091f3a] text-white">
    <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1.1fr]">
      <div><Brand /><p className="mt-6 max-w-sm text-sm leading-7 text-white/60">Engenharia, estruturas metálicas e reformas sob medida. Em São Paulo, desde 2017.</p><p className="mt-5 text-xs leading-6 text-white/50">{company.companyName}<br />CNPJ {company.cnpj}</p></div>
      <div><h2 className="mb-5 text-sm font-semibold">Explore</h2><div className="grid gap-3 text-sm text-white/60">{([["Sobre a Azultech","/sobre"],["Serviços","/servicos"],["Dicas e artigos","/blog"],["Contato","/contato"]] as const).map(([label,href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</div></div>
      <div><h2 className="mb-5 text-sm font-semibold">Vamos conversar</h2><div className="grid gap-4 text-sm text-white/60">
        <a href={`https://wa.me/${company.whatsapp}`} className="flex gap-3"><Icon name="phone" className="h-4 w-4 shrink-0" />{company.phone}</a>
        <a href={`mailto:${company.email}`} className="flex gap-3 break-all"><Icon name="mail" className="h-4 w-4 shrink-0" />{company.email}</a>
        <p className="flex gap-3"><Icon name="pin" className="h-4 w-4 shrink-0" /><span>{company.address}<br />CEP {company.cep}</span></p>
        <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-3"><Icon name="instagram" className="h-4 w-4 shrink-0" />@azultechengenharia</a>
      </div></div>
    </div>
    <div className="border-t border-white/10"><div className="container flex flex-col justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row"><p>© {new Date().getFullYear()} Azultech Engenharia. Todos os direitos reservados.</p><p>Desenvolvido por <a href="https://struturestudios.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 underline-offset-4 hover:underline">Struture Studios</a></p></div></div>
  </footer>;
}
