import type { Metadata } from "next";
import { Manrope, Cinzel } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import CookieBanner from "../../components/CookieBanner";
import Analytics from "../../components/Analytics";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang || "ru"} className={`${manrope.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        {/* Гео-защита */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
                  if (tz.indexOf('jakarta') !== -1 || tz.indexOf('makassar') !== -1 || tz.indexOf('jayapura') !== -1) {
                    document.documentElement.innerHTML = '<head><title>404 Not Found</title></head><body style="background:#fff;color:#333;font-family:sans-serif;padding:40px;"><h1>404 Not Found</h1><p>The requested URL was not found on this server.</p></body>';
                  }
                } catch(e){}
              })();
            `,
          }}
        />
        <Analytics />
      </head>
      <body className="font-sans bg-[#FAFAF7] text-[#0E0E0C] selection:bg-[#C9501E] selection:text-white antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
