import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./_components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wcrefrigeracao.com.br"),
  title: {
    default:
      "WC Refrigeração | Ar-Condicionado em Valença e Região — Instalação e Manutenção",
    template: "%s | WC Refrigeração",
  },
  description:
    "Especialistas em ar-condicionado em Valença e região. A WC Refrigeração realiza instalação, manutenção preventiva e corretiva, higienização com bolsa coletora e infraestrutura.",
  keywords: [
    "ar condicionado",
    "ar condicionado Valença",
    "ar condicionado Valença RJ",
    "WC",
    "WC Refrigeração",
    "WC Refrigeração e Climatização",
    "instalação de ar condicionado",
    "manutenção de ar condicionado",
    "higienização de ar condicionado",
    "conserto de ar condicionado Valença",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "WC Refrigeração e Climatização",
    description:
      "Instalação, manutenção e higienização de ar-condicionado em Valença e região.",
    siteName: "WC Refrigeração e Climatização",
    url: "/",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}