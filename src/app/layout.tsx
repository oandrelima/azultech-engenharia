import "~/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { WhatsAppFloat } from "~/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Azultech Engenharia | Estruturas Metálicas e Esquadrias | Zona Sul SP",
    template: "%s | Azultech Engenharia",
  },
  description:
    "Mezaninos metálicos, coberturas de vidro, esquadrias Blindex, automatização de portões e reformas residenciais e comerciais na Zona Sul de São Paulo. Parcelamento em até 18x.",
  keywords: [
    "mezanino metálico São Paulo",
    "cobertura de vidro Zona Sul SP",
    "reforma residencial Campo Limpo",
    "Blindex",
    "box banheiro",
    "fechamento sacada",
    "Azultech Engenharia",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://azultechengenharia.com.br",
    siteName: "Azultech Engenharia",
    title: "Azultech Engenharia | Estruturas Metálicas e Esquadrias",
    description:
      "Soluções completas em engenharia para sua residência ou empresa na Zona Sul de São Paulo.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <TRPCReactProvider>
          <Navbar />
          <main className="pt-[72px]">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
