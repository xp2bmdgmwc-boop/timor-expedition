import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "TIMOR-LESTE · ПОСЛЕДНЯЯ ТИШИНА · Экспедиции Валерия Латыпова",
  description: "Приватная авторская экспедиция в Восточный Тимор. Строго до 4 гостей. Архитектура нулевого трения и экзистенциальная перезагрузка для лидеров.",
  metadataBase: new URL("https://timor.valerylatypov.com"),
  openGraph: {
    title: "TIMOR-LESTE · ПОСЛЕДНЯЯ ТИШИНА",
    description: "Приватная авторская экспедиция в Восточный Тимор. Строго до 4 гостей.",
    url: "https://timor.valerylatypov.com",
    siteName: "Valery Latypov Expeditions",
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
    <html lang="ru" className={`${inter.variable} scroll-smooth`}>
      <head>
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
      </head>
      <body className="font-sans bg-[#0A0A08] text-[#FAFAF7] selection:bg-[#C9501E] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
