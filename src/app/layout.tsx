import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./_components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://SEU-DOMINIO.com.br"),
  title: {
    default: "WC Refrigeração | Instalação e Manutenção de Ar-Condicionado em Valença",
    template: "%s | WC Refrigeração",
  },
  description:
    "Instalação, manutenção e higienização de ar-condicionado em Valença e região. Visita técnica e orçamento, com testes e garantia.",
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