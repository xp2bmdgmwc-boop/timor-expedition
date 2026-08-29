"use client";

import React, { useState } from "react";
import CookieBanner from "../components/CookieBanner"; // We will move CookieBanner here to pass lang, or just keep it in layout and use localstorage event. But it's easier to put it here if layout doesn't use it.

const t = {
  ru: {
    nav: {
      brand: "ЛАТЫПОВ · ЭКСПЕДИЦИИ",
      point: "Исходная точка",
      experience: "Опыт",
      guide: "Проводник",
      investment: "Инвестиция",
      write: "Написать",
    },
    hero: {
      format: "КАМЕРНЫЙ ФОРМАТ: 2–4 ГОСТЯ",
      title1: "ВОСТОЧНЫЙ ТИМОР.",
      title2: "ТОЧКА ОБНУЛЕНИЯ.",
      desc: "Восемь дней на краю земли для тех, кто управляет большим и устал от этого по-настоящему. Последний нетронутый фронтир Азии — без массового туризма, без лишних глаз, без социального шума. Место, где нервная система наконец замолкает и возвращается ясность.",
      cta: "Начать разговор",
      wa: "Написать в WhatsApp",
      locLabel: "Локация",
      locVal: "Восточный Тимор",
      fmtLabel: "Формат",
      fmtVal: "Приватная экспедиция · 8 дней",
      accLabel: "Доступ",
      accVal: "Камерный формат: 2–4 гостя",
    },
    point: {
      tag: "01 / ИСХОДНАЯ ТОЧКА",
      title: "ВЫ ДАВНО НЕ ОТДЫХАЛИ ПО-НАСТОЯЩЕМУ.",
      p1: "Пятизвёздочные отели перестали работать. Мальдивы — фон для рабочих звонков. Бали — очередная декорация, в которой вы всё равно открываете ноутбук к обеду.",
      p2: "Вам нужно не место покрасивее, а полное изъятие из привычного контекста — среда, в которой физически невозможно оставаться на связи и контролировать всё.",
      stat1: "путешественников в год на всю страну по данным Всемирной туристской организации",
      stat2: "глубина пролива Омбай и коридор миграции карликовых синих китов",
      stat3: "возраст нетронутых наскальных святилищ и сакральных зон Лулик",
    },
    panorama: {
      tag: "ПРОСТРАНСТВО БЕЗ ГРАНИЦ",
      title: "Горизонт, где взгляд отдыхает и наполняется заново.",
      desc: "Масштаб, который невозможно сфотографировать. Здесь возвращается ощущение собственного размера — и тишина, в которой наконец слышно себя.",
    },
    exp: {
      tag: "02 / ОПЫТ",
      title: "АРХИТЕКТУРА БЕЗУПРЕЧНОГО КОМФОРТА.",
      subtitle: "Приватная экспедиция. Камерный формат: 2–4 гостя. Абсолютная конфиденциальность.",
      oceanTag: "ОКЕАН · МИГРАЦИЯ КИТОВ",
      oceanTitle: "Открытый океан.",
      oceanDesc: "Скоростной катер в пролив глубиной три километра. Карликовые синие киты проходят в десятках метров. Вода такого цвета, что забываешь, зачем доставал телефон.",
      jacoTag: "САКРАЛЬНЫЙ ОСТРОВ ЖАКО",
      jacoTitle: "Остров, где нет людей.",
      jacoDesc: "Жако — священный необитаемый остров. Дикие горные побережья, вода до горизонта и ощущение, что ты первый человек, который здесь оказался.",
      rockTag: "40 000 ЛЕТ САКРАЛЬНОЙ ПАМЯТИ",
      rockTitle: "Места, куда не водят туристов.",
      rockDesc: "Петроглифы, которым сорок тысяч лет. Пещерные святилища, куда пускают только со старейшинами. Ритуальные камни, которые до сих пор живут. Валерий знает этих людей лично — и они открывают двери, которых нет на картах.",
      rock1: "Наскальные петроглифы",
      rock2: "Святилище Лулик",
      rock3: "Сакральный камень",
      discTag: "ПЕРВОЗДАННАЯ ПРИРОДА · ПОЛНОЕ ОТКЛЮЧЕНИЕ",
      discTitle: "Вы ни о чём не думаете.",
      discDesc: "С момента прилёта мы забираем на себя всё — от быта до дипломатических доступов. Ваша единственная задача: отпустить контроль и дать нервной системе наконец выдохнуть.",
    },
    guide: {
      tag: "03 / ПРОВОДНИК",
      title: "ВАШ ПРОВОДНИК.",
      name: "Валерий Латыпов",
      role: "Архитектор визуального капитала",
      p1: "Валерий Латыпов. 25 лет рядом с первыми лицами списков Форбс и людьми, создающими мировую культуру.",
      p2: "Он не гид. Художник, визионер, человек, говорящий на индонезийском языке. Общается со старейшинами напрямую и открывает двери, которых нет в путеводителях.",
      p3: "Он понимает, что такое настоящая усталость от ответственности. Это разговор равного с равным — без необходимости что-либо объяснять.",
      link: "Смотреть полный визуальный капитал: valerylatypov.com",
    },
    inv: {
      tag: "04 / ИНВЕСТИЦИЯ",
      title: "ВКЛАД В СВОЁ СОСТОЯНИЕ.",
      price: "От €14,000",
      subprice: "за одного гостя · 8 дней приватной экспедиции",
      desc: "Это не плата за маршрут. Это вклад в себя и полная гармонизация своего состояния. Участие — через личное интервью с Валерием.",
      noTag: "Кого мы не берём",
      noDesc: "Мы отказываем при клинической депрессии. Экспедиция — для здоровых, но предельно уставших людей, готовых на восемь дней полностью отключиться от связи.",
    },
    contact: {
      tag: "05 / КОНТАКТ",
      title: "ПОГОВОРИМ ЛИЧНО.",
      desc: "Экспедиция — не массовый продукт. Я лично разговариваю с каждым, чтобы понять, подходит ли вам этот формат. Напишите, и я расскажу вам подробности путешествия.",
      wa: "Написать в WhatsApp",
      copy: "© 2026 ВАЛЕРИЙ ЛАТЫПОВ · АВТОРСКИЕ ЭКСПЕДИЦИИ",
    }
  },
  en: {
    nav: {
      brand: "LATYPOV · EXPEDITIONS",
      point: "Starting Point",
      experience: "Experience",
      guide: "The Guide",
      investment: "Investment",
      write: "Contact",
    },
    hero: {
      format: "INTIMATE FORMAT: 2–4 GUESTS",
      title1: "EAST TIMOR.",
      title2: "THE ZERO POINT.",
      desc: "Eight days at the edge of the world for those who manage the immense and are truly exhausted by it. Asia’s last untouched frontier — no mass tourism, no prying eyes, no social noise. A place where the nervous system finally falls silent and clarity returns.",
      cta: "Start a conversation",
      wa: "WhatsApp Us",
      locLabel: "Location",
      locVal: "East Timor",
      fmtLabel: "Format",
      fmtVal: "Private Expedition · 8 days",
      accLabel: "Access",
      accVal: "Intimate format: 2–4 guests",
    },
    point: {
      tag: "01 / THE STARTING POINT",
      title: "YOU HAVEN'T TRULY RESTED IN A LONG TIME.",
      p1: "Five-star hotels no longer work. The Maldives are just a backdrop for business calls. Bali is merely another set where you inevitably open your laptop by noon.",
      p2: "You don't need a prettier location; you need a complete extraction from your usual context — an environment where it is physically impossible to stay connected and control everything.",
      stat1: "travelers per year across the entire country, according to the World Tourism Organization",
      stat2: "the depth of the Ombai Strait and the migration corridor for pygmy blue whales",
      stat3: "the age of untouched rock art sanctuaries and sacred Lulik zones",
    },
    panorama: {
      tag: "SPACE WITHOUT BORDERS",
      title: "A horizon where the gaze rests and replenishes anew.",
      desc: "A scale that cannot be captured in a photograph. Here, the sense of your true proportion returns — along with a silence where you can finally hear yourself.",
    },
    exp: {
      tag: "02 / EXPERIENCE",
      title: "THE ARCHITECTURE OF FLAWLESS COMFORT.",
      subtitle: "A private expedition. Intimate format: 2–4 guests. Absolute confidentiality.",
      oceanTag: "THE OCEAN · WHALE MIGRATION",
      oceanTitle: "The open ocean.",
      oceanDesc: "A speedboat into a strait three kilometers deep. Pygmy blue whales passing just dozens of meters away. Water of a color so profound you forget why you even reached for your phone.",
      jacoTag: "THE SACRED ISLAND OF JACO",
      jacoTitle: "An island devoid of humans.",
      jacoDesc: "Jaco is a sacred, uninhabited island. Wild mountainous coastlines, water stretching to the horizon, and the distinct feeling that you are the very first person to ever set foot here.",
      rockTag: "40,000 YEARS OF SACRED MEMORY",
      rockTitle: "Places untouched by tourism.",
      rockDesc: "Petroglyphs that are forty thousand years old. Cave sanctuaries accessible only with village elders. Ritual stones that are still alive today. Valery knows these people personally — and they open doors that don't exist on any map.",
      rock1: "Rock Petroglyphs",
      rock2: "Lulik Sanctuary",
      rock3: "Sacred Stone",
      discTag: "PRISTINE NATURE · TOTAL DISCONNECTION",
      discTitle: "You think about absolutely nothing.",
      discDesc: "From the moment you land, we take over everything — from daily logistics to diplomatic access. Your only task is to relinquish control and finally allow your nervous system to exhale.",
    },
    guide: {
      tag: "03 / THE GUIDE",
      title: "YOUR GUIDE.",
      name: "Valery Latypov",
      role: "Architect of Visual Capital",
      p1: "Valery Latypov. 25 years alongside Forbes list leaders and the individuals who shape global culture.",
      p2: "He is not a tour guide. He is an artist, a visionary, and an Indonesian speaker. He communicates directly with village elders and opens doors absent from any guidebook.",
      p3: "He inherently understands the true exhaustion of responsibility. This is a conversation between equals — without the need to explain anything.",
      link: "View the complete visual capital: valerylatypov.com",
    },
    inv: {
      tag: "04 / INVESTMENT",
      title: "AN INVESTMENT IN YOUR STATE OF MIND.",
      price: "From €14,000",
      subprice: "per guest · 8 days of private expedition",
      desc: "This is not a fee for an itinerary. It is an investment in yourself and the complete harmonization of your state of being. Participation is by personal interview with Valery only.",
      noTag: "Who we do not accept",
      noDesc: "We decline participation in cases of clinical depression. This expedition is for healthy yet profoundly exhausted individuals, ready to completely disconnect for eight days.",
    },
    contact: {
      tag: "05 / CONTACT",
      title: "LET'S SPEAK PERSONALLY.",
      desc: "This expedition is not a mass-market product. I speak personally with everyone to ensure this format is right for you. Write to me, and I will share the details of the journey.",
      wa: "Message on WhatsApp",
      copy: "© 2026 VALERY LATYPOV · AUTHOR'S EXPEDITIONS",
    }
  }
};

export default function TimorHomePage() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru');
  const d = t[lang];

  // We change the message slightly based on language.
  const whatsappTextRu = "Здравствуйте, Валерий. Хочу узнать об экспедиции в Восточный Тимор.";
  const whatsappTextEn = "Hello Valery. I would like to learn more about the East Timor expedition.";
  const whatsappUrl = "https://wa.me/79852246789?text=" + encodeURIComponent(lang === 'ru' ? whatsappTextRu : whatsappTextEn);

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#0E0E0C]">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#0E0E0C]/10 px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between transition-all">
        <a href="#" className="font-extrabold text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#0E0E0C] hover:text-[#C9501E] transition-colors">
          {d.nav.brand}
        </a>

        <div className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-[0.14em] uppercase text-[#6F6E66]">
          <a href="#point" className="hover:text-[#0E0E0C] transition-colors">{d.nav.point}</a>
          <a href="#experience" className="hover:text-[#0E0E0C] transition-colors">{d.nav.experience}</a>
          <a href="#guide" className="hover:text-[#0E0E0C] transition-colors">{d.nav.guide}</a>
          <a href="#investment" className="hover:text-[#0E0E0C] transition-colors">{d.nav.investment}</a>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Переключатель языков перемещен сюда */}
          <div className="flex items-center text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase">
            <button 
              onClick={() => setLang('ru')} 
              className={lang === 'ru' ? "text-[#0E0E0C]" : "text-[#6F6E66] hover:text-[#0E0E0C] transition-colors"}
            >
              RU
            </button>
            <span className="mx-1 sm:mx-2 text-[#0E0E0C]/30">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={lang === 'en' ? "text-[#0E0E0C]" : "text-[#6F6E66] hover:text-[#0E0E0C] transition-colors"}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="bg-[#0E0E0C] text-[#FAFAF7] hover:bg-[#C9501E] text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-4 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            {d.nav.write}
          </a>
        </div>
      </nav>

      <header className="relative min-h-[100svh] sm:min-h-screen flex items-end sm:items-center pb-12 sm:pb-28 pt-28 sm:pt-40 px-5 sm:px-12 overflow-hidden bg-[#0E0E0C] text-[#FAFAF7]">
        <div className="absolute inset-0 z-0 bg-[#0E0E0C]">
          <img
            src="/images/timor_hero_main.jpg"
            alt={lang === 'ru' ? "Атмосферный пейзаж Восточного Тимора" : "Atmospheric landscape of East Timor"}
            className="w-full h-full object-cover filter contrast-105"
          />
          <div className="absolute inset-0 bg-[#0E0E0C]/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C] via-[#0E0E0C]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0C]/60 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-[1060px] mx-auto text-left w-full">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.3em] uppercase text-[#E29D7D] mb-4 sm:mb-6">
            {d.hero.format}
          </span>
          <h1 className="font-serif text-[36px] sm:text-[72px] md:text-[92px] font-normal leading-[1.05] sm:leading-[1.02] tracking-[-0.02em] text-white mb-6 sm:mb-8">
            {d.hero.title1}<br />
            <span className="italic font-light">{d.hero.title2}</span>
          </h1>
          <p className="text-[16px] sm:text-[22px] text-[#D0CECB] font-light leading-[1.65] max-w-[800px] mb-10 sm:mb-14 tracking-[-0.01em]">
            {d.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              {d.hero.cta}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#1A1A18] hover:bg-[#C9501E] border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              {d.hero.wa}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-14 mt-14 sm:mt-20 border-t border-white/15">
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">{d.hero.locLabel}</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">{d.hero.locVal}</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">{d.hero.fmtLabel}</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">{d.hero.fmtVal}</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">{d.hero.accLabel}</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">{d.hero.accVal}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Экран 2: Исходная точка */}
      <section id="point" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4 sm:mb-6">
            {d.point.tag}
          </span>
          <h2 className="font-serif text-[30px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-6 sm:mb-8">
            {d.point.title}
          </h2>
          <p className="text-[18px] sm:text-[28px] text-[#2E2E2A] font-light leading-[1.5] tracking-[-0.015em] mb-6 sm:mb-8 max-w-[920px]">
            {d.point.p1}
          </p>
          <p className="text-[15px] sm:text-[19px] text-[#6F6E66] leading-[1.8] max-w-[860px]">
            {d.point.p2}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-12 sm:pt-16 mt-14 sm:mt-20 border-t border-[#0E0E0C]/10">
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">&lt; 10 000</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">{d.point.stat1}</div>
            </div>
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">3 000 м</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">{d.point.stat2}</div>
            </div>
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">40 000 {lang === 'ru' ? 'лет' : 'years'}</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">{d.point.stat3}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Панорамная вставка: Пространство */}
      <section className="border-b border-[#0E0E0C]/10 bg-[#FAFAF7]">
        <div className="w-full h-[280px] sm:h-[640px] md:h-[760px] overflow-hidden bg-[#0E0E0C]">
          <img
            src="/images/timor_vast_space.jpg"
            alt={d.panorama.tag}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-[1060px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 items-start">
            <span className="block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E]">
              {d.panorama.tag}
            </span>
            <div>
              <h3 className="font-serif text-[22px] sm:text-[32px] font-normal leading-[1.35] text-[#0E0E0C] mb-3 sm:mb-4">
                {d.panorama.title}
              </h3>
              <p className="text-[15px] sm:text-[18px] text-[#6F6E66] leading-[1.75] font-light max-w-[65ch]">
                {d.panorama.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 3: Опыт */}
      <section id="experience" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-16 sm:mb-24">
            <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4 sm:mb-6">
              {d.exp.tag}
            </span>
            <h2 className="font-serif text-[30px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-4">
              {d.exp.title}
            </h2>
            <p className="text-[16px] sm:text-[18px] font-medium text-[#2E2E2A]">
              {d.exp.subtitle}
            </p>
          </div>

          <div className="space-y-20 sm:space-y-32">
            {/* Пункт 1: Океан */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first md:order-last">
                <img
                  src="/images/timor_ocean_new.jpg"
                  alt={d.exp.oceanTag}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-last md:order-first">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">{d.exp.oceanTag}</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">{d.exp.oceanTitle}</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  {d.exp.oceanDesc}
                </p>
              </div>
            </div>

            {/* Пункт 2: Жако */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first">
                <img
                  src="/images/timor_jaco_new.jpeg"
                  alt={d.exp.jacoTag}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">{d.exp.jacoTag}</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">{d.exp.jacoTitle}</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  {d.exp.jacoDesc}
                </p>
              </div>
            </div>

            {/* Блок Наскальной Живописи */}
            <div className="p-5 sm:p-14 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
              <div className="max-w-[760px] mb-8 sm:mb-12">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">{d.exp.rockTag}</span>
                <h3 className="font-serif text-[22px] sm:text-[32px] font-normal text-[#0E0E0C] mb-3 sm:mb-4">{d.exp.rockTitle}</h3>
                <p className="text-[14px] sm:text-[16px] text-[#6F6E66] leading-[1.75]">
                  {d.exp.rockDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img src="/images/timor_rock_art.jpg" alt={d.exp.rock1} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    {d.exp.rock1}
                  </p>
                </div>
                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img src="/images/timor_sacred_cave.jpg" alt={d.exp.rock2} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    {d.exp.rock2}
                  </p>
                </div>
                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img src="/images/timor_sacred_stone.jpg" alt={d.exp.rock3} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    {d.exp.rock3}
                  </p>
                </div>
              </div>
            </div>

            {/* Пункт 3: Полное отключение */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first md:order-last">
                <img
                  src="/images/timor_disconnection.jpg"
                  alt={d.exp.discTag}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-last md:order-first">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">{d.exp.discTag}</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">{d.exp.discTitle}</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  {d.exp.discDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 4: Проводник */}
      <section id="guide" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 sm:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[520px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
            <img
              src="/images/valery_latypov_portrait.jpg"
              alt={d.guide.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="font-serif text-[16px] sm:text-[18px] font-medium text-white block">{d.guide.name}</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#E29D7D] mt-1 sm:mt-1.5 block">
                {d.guide.role}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4 sm:mb-6">
              {d.guide.tag}
            </span>
            <h2 className="font-serif text-[30px] sm:text-[54px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-5 sm:mb-6">
              {d.guide.title}
            </h2>
            <p className="text-[17px] sm:text-[22px] font-medium text-[#2E2E2A] leading-[1.5] mb-5 sm:mb-6">
              {d.guide.p1}
            </p>
            <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-4 sm:mb-5">
              {d.guide.p2}
            </p>
            <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-8">
              {d.guide.p3}
            </p>
            <div>
              <a
                href="https://valerylatypov.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#0E0E0C] hover:text-[#C9501E] transition-colors border-b border-[#0E0E0C]/20 hover:border-[#C9501E] pb-1"
              >
                {d.guide.link}
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 5: Инвестиция */}
      <section id="investment" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[940px] mx-auto p-6 sm:p-10 md:p-16 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            {d.inv.tag}
          </span>
          <h2 className="font-serif text-[30px] sm:text-[54px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-4">
            {d.inv.title}
          </h2>

          <div className="font-serif text-[36px] sm:text-[64px] font-normal tracking-[-0.02em] text-[#0E0E0C] leading-none my-5 sm:my-6">
            {d.inv.price}
            <span className="block font-sans text-[13px] sm:text-[14px] font-medium text-[#6F6E66] tracking-normal mt-2 sm:mt-3">
              {d.inv.subprice}
            </span>
          </div>

          <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-8 sm:mb-10">
            {d.inv.desc}
          </p>

          <div className="p-5 sm:p-12 bg-transparent border border-[#C9501E]/40">
            <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-3">
              {d.inv.noTag}
            </h4>
            <p className="text-[14px] sm:text-[16px] text-[#2E2E2A] leading-[1.75] font-light max-w-[65ch]">
              {d.inv.noDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Экран 6: Контакт */}
      <footer id="contact" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7]">
        <div className="max-w-[940px] mx-auto text-center">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            {d.contact.tag}
          </span>
          <h2 className="font-serif text-[30px] sm:text-[60px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-5 sm:mb-6">
            {d.contact.title}
          </h2>
          <p className="text-[16px] sm:text-[21px] text-[#3A3935] leading-[1.7] max-w-[760px] mx-auto mb-10 sm:mb-14 font-light">
            {d.contact.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 max-w-[660px] mx-auto mb-12 sm:mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              {d.contact.wa}
            </a>

            <a
              href="mailto:vision@valerylatypov.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0E0E0C] hover:bg-[#C9501E] text-[#FAFAF7] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              vision@valerylatypov.com
            </a>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#0E0E0C]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6F6E66]">
              {d.contact.copy}
            </div>
            
            <div className="flex items-center gap-6 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#0E0E0C]">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9501E] transition-colors">LinkedIn</a>
              <a href="https://t.me/valerylatypov" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9501E] transition-colors">Telegram</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9501E] transition-colors">WhatsApp</a>
            </div>
            
            {/* Языки убраны отсюда наверх */}
            <div className="hidden md:block w-[100px]"></div>
          </div>
        </div>
      </footer>

      {/* Плавающий круглый значок WhatsApp */}
      <aside aria-label="Прямая связь в WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-round-float w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C9501E] hover:bg-[#B24316] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group border border-white/20"
          title={d.contact.wa}
          aria-label={d.contact.wa}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </aside>

      <CookieBanner lang={lang} />
    </div>
  );
}
