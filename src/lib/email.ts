import nodemailer from "nodemailer";
import { env } from "~/env";

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  neighborhood?: string;
  serviceType: string;
  projectType?: string;
  message: string;
}

export async function sendLeadNotificationEmail(leadData: LeadData): Promise<boolean> {
  try {
    if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS) {
      console.log("[MOCK EMAIL] Novo lead recebido:");
      console.log(`${leadData.name} | ${leadData.phone} | ${leadData.serviceType}`);
      return true;
    }

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT ? parseInt(env.SMTP_PORT) : 587,
      secure: parseInt(env.SMTP_PORT ?? "587") === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Azultech Site" <${env.EMAIL_FROM}>`,
      to: env.EMAIL_TO_NOTIFICATION,
      subject: `Novo Orçamento — ${leadData.name} (${leadData.serviceType})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
          <h2 style="color: #0c3561; border-bottom: 2px solid #0c3561; padding-bottom: 8px;">Novo Pedido de Orçamento — Azultech</h2>
          <p><strong>Nome:</strong> ${leadData.name}</p>
          <p><strong>Telefone/WhatsApp:</strong> <a href="https://wa.me/55${leadData.phone.replace(/\D/g, "")}">${leadData.phone}</a></p>
          <p><strong>E-mail:</strong> ${leadData.email ?? "Não informado"}</p>
          <p><strong>Bairro:</strong> ${leadData.neighborhood ?? "Não informado"}</p>
          <p><strong>Serviço Solicitado:</strong> ${leadData.serviceType}</p>
          <p><strong>Tipo de Obra:</strong> ${leadData.projectType ?? "Residencial"}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Mensagem do cliente:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #0c3561; margin: 0;">
            ${leadData.message}
          </blockquote>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 12px; color: #888;">Enviado automaticamente pelo site Azultech Engenharia.</p>
        </div>
      `,
    });
    console.log("E-mail de notificação enviado!");
    return true;
  } catch (error) {
    console.error("Falha ao enviar e-mail (lead salvo no banco):", error);
    return false;
  }
}
