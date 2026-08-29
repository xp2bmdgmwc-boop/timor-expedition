"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie_consent", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1A1A18] text-[#FAFAF7] px-6 py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
      <p className="text-[11px] sm:text-[12px] font-light tracking-wide leading-relaxed text-[#D0CECB] max-w-[800px]">
        Мы используем файлы cookie для персонализации сервиса. Продолжая работу с сайтом, вы даете согласие на обработку данных.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button
          onClick={acceptNecessary}
          className="shrink-0 border border-white/20 hover:border-white/50 text-[#D0CECB] hover:text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 w-full sm:w-auto"
        >
          Только необходимые
        </button>
        <button
          onClick={acceptAll}
          className="shrink-0 bg-[#C9501E] hover:bg-[#B24316] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300 shadow-lg w-full sm:w-auto"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
