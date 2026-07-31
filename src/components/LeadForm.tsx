"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

const SERVICE_TYPES = [
  "Mezanino Metálico", "Mezanino Residencial", "Mezanino para Apartamento",
  "Cobertura Metálica", "Cobertura de Vidro", "Janelas Blindex",
  "Portas de Vidro Blindex", "Automatização de Portão", "Reforma de Portão",
  "Box para Banheiro", "Fechamento de Sacadas", "Elétrica", "Hidráulica",
  "Forro de Gesso", "Outro",
];

interface LeadFormProps {
  defaultService?: string;
}

export function LeadForm({ defaultService }: LeadFormProps) {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", neighborhood: "",
    serviceType: defaultService ?? "", projectType: "Residencial", message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const createLead = api.leads.create.useMutation({
    onSuccess: () => setSuccess(true),
    onError: (err) => setError(err.message || "Erro ao enviar. Tente novamente."),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    createLead.mutate(form);
  };

  if (success) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-xl text-gray-800">
        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-[#0c3561] mb-2">Recebemos sua solicitação!</h3>
        <p className="text-gray-600 mb-6 text-sm">Nossa equipe entrará em contato em até 24 horas. Ou se preferir, fale agora pelo WhatsApp.</p>
        <a
          href="https://wa.me/5511939217592"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z" />
          </svg>
          Falar no WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 text-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Nome completo <span className="text-orange-500">*</span>
          </label>
          <input
            type="text" required placeholder="Seu nome"
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Telefone / WhatsApp <span className="text-orange-500">*</span>
          </label>
          <input
            type="tel" required placeholder="(11) 99999-9999"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">E-mail</label>
          <input
            type="email" placeholder="seu@email.com"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Bairro</label>
          <input
            type="text" placeholder="Ex: Morumbi, Campo Limpo..."
            value={form.neighborhood} onChange={(e) => setForm({ ...form, neighborhood: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Serviço desejado <span className="text-orange-500">*</span>
          </label>
          <select
            required value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Selecione um serviço</option>
            {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Tipo de imóvel</label>
          <select
            value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Industrial">Industrial</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
          Descrição do projeto <span className="text-orange-500">*</span>
        </label>
        <textarea
          required rows={3} placeholder="Descreva o que você precisa..."
          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0c3561] focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-lg text-xs">{error}</div>
      )}

      <button
        type="submit"
        disabled={createLead.isPending}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-base"
      >
        {createLead.isPending ? "Enviando..." : "Solicitar Orçamento Grátis →"}
      </button>
    </form>
  );
}
