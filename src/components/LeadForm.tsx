"use client";

import { useId, useState, type FormEvent } from "react";
import { serviceCatalog } from "~/lib/services";
import { buildWhatsAppUrl } from "~/lib/whatsapp";
import { Icon } from "./Icon";

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const id = useId();
  const [form, setForm] = useState({
    name: "", address: "", serviceType: defaultService ?? "",
    projectType: "Residencial", message: "",
  });

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    window.location.assign(buildWhatsAppUrl(form));
  }

  return <form onSubmit={submit} className="quote-form">
    <div>
      <label htmlFor={id + "-name"}>Nome Completo <span>*</span></label>
      <input id={id + "-name"} name="name" autoComplete="name" required minLength={2} maxLength={150}
        placeholder="Como podemos chamar você?"
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
    </div>
    <div>
      <label htmlFor={id + "-address"}>Endereço <span>*</span></label>
      <input id={id + "-address"} name="address" autoComplete="street-address" required minLength={5} maxLength={300}
        placeholder="Rua, número, bairro e cidade"
        value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
    </div>
    <div>
      <label htmlFor={id + "-service"}>Serviço desejado <span>*</span></label>
      <select id={id + "-service"} name="serviceType" required
        value={form.serviceType} onChange={e => setForm({ ...form, serviceType: e.target.value })}>
        <option value="">Selecione um serviço</option>
        {serviceCatalog.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
        <option value="Outro">Outro</option>
      </select>
    </div>
    <div>
      <label htmlFor={id + "-type"}>Tipo de imóvel <span>*</span></label>
      <select id={id + "-type"} name="projectType" required
        value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })}>
        <option value="Residencial">Residencial</option>
        <option value="Comercial">Comercial</option>
        <option value="Industrial">Industrial</option>
        <option value="Condomínio">Condomínio</option>
      </select>
    </div>
    <div>
      <label htmlFor={id + "-message"}>Descrição adicional <small>Opcional</small></label>
      <textarea id={id + "-message"} name="message" rows={3} maxLength={5000}
        placeholder="Medidas aproximadas, referências ou outras informações..."
        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
    </div>
    <button type="submit" className="quote-submit">Solicitar orçamento pelo WhatsApp <Icon name="arrow" className="h-5 w-5 shrink-0" /></button>
    <p className="text-center text-xs leading-5 text-slate-500">O WhatsApp abrirá com os dados preenchidos. Basta enviar a mensagem.</p>
  </form>;
}
