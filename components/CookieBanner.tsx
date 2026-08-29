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

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0E0E0C] text-[#FAFAF7] px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[11px] sm:text-[12px] font-light tracking-wide leading-relaxed text-[#D0CECB] max-w-[800px]">
        Мы используем файлы cookie для персонализации сервисов и улучшения опыта использования сайта. 
        Продолжая работу с сайтом, вы даете согласие на обработку файлов cookie.
      </p>
      <button
        onClick={acceptCookies}
        className="shrink-0 bg-[#C9501E] hover:bg-[#B24316] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all duration-300"
      >
        Принять
      </button>
    </div>
  );
}
