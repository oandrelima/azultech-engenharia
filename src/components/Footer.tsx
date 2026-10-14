import Link from "next/link";
import { Brand } from "./Brand";
import { company } from "~/lib/company";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-[#060f1e] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4"><Brand /></div>
            <p className="text-xs text-gray-400 leading-6 mb-4">{company.companyName}<br />CNPJ {company.cnpj}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Estruturas metálicas, esquadrias e reformas residenciais e comerciais na Zona Sul de São Paulo com qualidade e transparência.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/azultechengenharia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0H8zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
              <a href="https://wa.me/5511939217592" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Serviços</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Mezaninos Metálicos", "/servicos/mezaninos-metalicos"],
                ["Mezaninos Residenciais", "/servicos/mezaninos-residenciais"],
                ["Coberturas de Vidro", "/servicos/cobertura-de-vidro"],
                ["Automatização de Portões", "/servicos/automatizacao-de-portoes"],
                ["Fechamento de Sacadas", "/servicos/fechamento-de-sacadas"],
                ["Forro de Gesso", "/servicos/forro-de-gesso-e-acabamentos"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href!} className="text-gray-400 hover:text-orange-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Início", "/"],
                ["Sobre a Azultech", "/sobre"],
                ["Dicas e Artigos", "/blog"],
                ["Contato e Orçamento", "/contato"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href!} className="text-gray-400 hover:text-orange-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Icon name="phone" className="h-4 w-4" /></span>
                <span>(11) 93921-7592</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Icon name="mail" className="h-4 w-4" /></span>
                <span>contato@azultechengenharia.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Icon name="pin" className="h-4 w-4" /></span>
                <span>{company.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5"><Icon name="clock" className="h-4 w-4" /></span>
                <span>{company.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>© 2026 Azultech Engenharia. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://struturestudios.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400">Struture Studios</a></p>
        </div>
      </div>
    </footer>
  );
}
