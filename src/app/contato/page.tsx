import { LeadForm } from "~/components/LeadForm";
import { company, mapsUrl } from "~/lib/company";
import { Icon } from "~/components/Icon";
export const metadata = { title: "Contato e Orçamento", description: "Fale com a Azultech Engenharia pelo (11) 93921-7592. Avenida Anacé, 136, Jardim Umarizal, São Paulo – SP." };
export default function ContatoPage() {
 return <>
  <section className="page-heading"><div className="container"><p className="eyebrow">Contato</p><h1>Vamos tirar sua ideia do papel.</h1><p>Envie seu projeto e solicite uma proposta sem compromisso.</p></div></section>
  <section className="container grid gap-12 py-20 lg:grid-cols-2"><div><h2 className="text-2xl font-semibold">Fale com a equipe.</h2><div className="mt-8 grid gap-6 text-slate-600">
   <a href={`https://wa.me/${company.whatsapp}`} className="flex items-center gap-4"><Icon name="phone" />{company.phone}</a>
   <a href={`mailto:${company.email}`} className="flex items-center gap-4 break-all"><Icon name="mail" className="h-5 w-5 shrink-0" />{company.email}</a>
   <p className="flex gap-4"><Icon name="pin" className="h-5 w-5 shrink-0" /><span>{company.address}<br />CEP {company.cep}</span></p>
   <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex gap-4"><Icon name="instagram" />@azultechengenharia</a>
  </div><div className="mt-10 border-t border-slate-200 pt-6 text-sm leading-7 text-slate-500"><p>{company.paymentMethods}</p><p className="mt-4">Atendimento: {company.workingHours}</p><p className="mt-4">{company.companyName}<br />CNPJ {company.cnpj}</p></div></div><LeadForm /></section>
  <iframe src={mapsUrl} width="100%" height="400" style={{border:0,display:"block"}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" title="Localização da Azultech Engenharia — Avenida Anacé, 136, Jardim Umarizal" />
 </>;
}
