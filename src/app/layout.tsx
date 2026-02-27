import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontrol.base44.app"),
  title: "Kontrol — Organização Financeira Inteligente",
  description:
    "O app que te dá controle total sobre receitas, despesas, investimentos e metas — tudo em um só lugar. Comece grátis por 14 dias.",
  keywords: [
    "finanças pessoais",
    "controle financeiro",
    "orçamento",
    "investimentos",
    "metas financeiras",
    "app financeiro",
  ],
  authors: [{ name: "Kontrol" }],
  openGraph: {
    title: "Kontrol — Organização Financeira Inteligente",
    description:
      "O app que te dá controle total sobre receitas, despesas, investimentos e metas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Kontrol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontrol — Organização Financeira Inteligente",
    description:
      "O app que te dá controle total sobre receitas, despesas, investimentos e metas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
