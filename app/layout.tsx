import type { Metadata } from "next";
import { Manrope, Cinzel } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter", // Keep variable name so Tailwind config works
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif", // Keep variable name so Tailwind config works
  display: "swap"
});

export const metadata: Metadata = {
  title: "Восточный Тимор. Последняя Тишина | Валерий Латыпов",
  description: "Закрытый экзистенциальный ретрит на краю географии для руководителей высшего звена и фаундеров. Камерный формат, полная конфиденциальность.",
  metadataBase: new URL("https://timor.valerylatypov.com"),
  openGraph: {
    title: "Восточный Тимор. Последняя Тишина | Валерий Латыпов",
    description: "Закрытый экзистенциальный ретрит на краю географии для руководителей высшего звена и фаундеров. Камерный формат, полная конфиденциальность.",
    url: "https://timor.valerylatypov.com",
    siteName: "Валерий Латыпов · Экспедиции",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        <Analytics />
      </head>
      <body className="font-sans bg-[#FAFAF7] text-[#0E0E0C] selection:bg-[#C9501E] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
