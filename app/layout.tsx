import type { Metadata } from "next";
import { Manrope, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  title: "ВОСТОЧНЫЙ ТИМОР · ТОЧКА ОБНУЛЕНИЯ · Экспедиции Валерия Латыпова",
  description: "Приватная авторская экспедиция в Восточный Тимор. Камерный формат: 2-4 гостя. Архитектура безупречного комфорта и экзистенциальная перезагрузка для лидеров.",
  metadataBase: new URL("https://timor.valerylatypov.com"),
  openGraph: {
    title: "ВОСТОЧНЫЙ ТИМОР · ТОЧКА ОБНУЛЕНИЯ",
    description: "Приватная авторская экспедиция в Восточный Тимор. Камерный формат: 2-4 гостя.",
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

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D5SSNPC94P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5SSNPC94P');
          `}
        </Script>

        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(56052163, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/56052163"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className="font-sans bg-[#FAFAF7] text-[#0E0E0C] selection:bg-[#C9501E] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
