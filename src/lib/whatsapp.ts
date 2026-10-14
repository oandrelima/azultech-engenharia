import { company } from "./company";

export interface QuoteRequest {
  name: string;
  address: string;
  serviceType: string;
  projectType: string;
  message: string;
}

export function buildWhatsAppUrl(request: QuoteRequest) {
  const message = [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    "*Nome Completo:* " + request.name.trim(),
    "*Endereço:* " + request.address.trim(),
    "*Serviço desejado:* " + request.serviceType.trim(),
    "*Tipo de imóvel:* " + request.projectType.trim(),
    "*Descrição adicional:* " + (request.message.trim() || "Não informada"),
  ].join("\n");

  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
