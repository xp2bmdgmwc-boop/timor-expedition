import React from "react";

export default function TimorHomePage() {
  const whatsappUrl = "https://wa.me/79852246789?text=" + encodeURIComponent("Здравствуйте, Валерий. Хочу узнать об экспедиции в Восточный Тимор.");

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#0E0E0C]">
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#0E0E0C]/10 px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between transition-all">
        <a href="#" className="font-extrabold text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-[#0E0E0C] hover:text-[#C9501E] transition-colors">
          ЛАТЫПОВ · ЭКСПЕДИЦИИ
        </a>

        <div className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-[0.14em] uppercase text-[#6F6E66]">
          <a href="#point" className="hover:text-[#0E0E0C] transition-colors">Исходная точка</a>
          <a href="#experience" className="hover:text-[#0E0E0C] transition-colors">Опыт</a>
          <a href="#guide" className="hover:text-[#0E0E0C] transition-colors">Проводник</a>
          <a href="#investment" className="hover:text-[#0E0E0C] transition-colors">Инвестиция</a>
        </div>

        <a
          href="#contact"
          className="bg-[#0E0E0C] text-[#FAFAF7] hover:bg-[#C9501E] text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-4 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 shadow-sm whitespace-nowrap"
        >
          Написать
        </a>
      </nav>

      <header className="relative min-h-[100svh] sm:min-h-screen flex items-end sm:items-center pb-12 sm:pb-28 pt-28 sm:pt-40 px-5 sm:px-12 overflow-hidden bg-[#0E0E0C] text-[#FAFAF7]">
        {/* Статичное премиальное фоновое изображение (IMG_3457) */}
        <div className="absolute inset-0 z-0 bg-[#0E0E0C]">
          <img
            src="/images/timor_hero_main.jpg"
            alt="Атмосферный пейзаж Восточного Тимора"
            className="w-full h-full object-cover opacity-40 filter contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C] via-[#0E0E0C]/50 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-[1060px] mx-auto text-left w-full">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.3em] uppercase text-[#E29D7D] mb-4 sm:mb-6">
            КАМЕРНЫЙ ФОРМАТ: 2–4 ГОСТЯ
          </span>
          <h1 className="font-serif text-[36px] sm:text-[72px] md:text-[92px] font-normal leading-[1.05] sm:leading-[1.02] tracking-[-0.02em] text-white mb-6 sm:mb-8">
            ВОСТОЧНЫЙ ТИМОР.<br />
            <span className="italic font-light">ТОЧКА ОБНУЛЕНИЯ.</span>
          </h1>
          <p className="text-[16px] sm:text-[22px] text-[#D0CECB] font-light leading-[1.65] max-w-[800px] mb-10 sm:mb-14 tracking-[-0.01em]">
            Восемь дней на краю земли для тех, кто управляет большим и устал от этого по-настоящему. 
            Последний нетронутый фронтир Азии — без массового туризма, без лишних глаз, без социального шума. 
            Место, где нервная система наконец замолкает и возвращается ясность.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              Начать разговор
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#1A1A18] hover:bg-[#C9501E] border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              Написать в WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-14 mt-14 sm:mt-20 border-t border-white/15">
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Локация</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">Восточный Тимор</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Формат</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">Приватная экспедиция · 8 дней</span>
            </div>
            <div>
              <span className="block text-[10px] sm:text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Доступ</span>
              <span className="text-[15px] sm:text-[16px] font-medium text-white mt-1 sm:mt-1.5 block">Камерный формат: 2–4 гостя</span>
            </div>
          </div>
        </div>
      </header>

      {/* Экран 2: Исходная точка */}
      <section id="point" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4 sm:mb-6">
            01 / ИСХОДНАЯ ТОЧКА
          </span>
          <h2 className="font-serif text-[30px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-6 sm:mb-8">
            ВЫ ДАВНО НЕ ОТДЫХАЛИ ПО-НАСТОЯЩЕМУ.
          </h2>
          <p className="text-[18px] sm:text-[28px] text-[#2E2E2A] font-light leading-[1.5] tracking-[-0.015em] mb-6 sm:mb-8 max-w-[920px]">
            Пятизвёздочные отели перестали работать. Мальдивы — фон для рабочих звонков. Бали — очередная декорация, в которой вы всё равно открываете ноутбук к обеду.
          </p>
          <p className="text-[15px] sm:text-[19px] text-[#6F6E66] leading-[1.8] max-w-[860px]">
            Вам нужно не место покрасивее, а полное изъятие из привычного контекста — среда, в которой физически невозможно оставаться на связи и контролировать всё.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-12 sm:pt-16 mt-14 sm:mt-20 border-t border-[#0E0E0C]/10">
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">&lt; 10 000</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">путешественников в год на всю страну по данным Всемирной туристской организации</div>
            </div>
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">3 000 м</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">глубина пролива Омбай и коридор миграции карликовых синих китов</div>
            </div>
            <div>
              <div className="font-serif text-[36px] sm:text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-2 sm:mb-3">40 000 лет</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">возраст нетронутых наскальных святилищ и сакральных зон Лулик</div>
            </div>
          </div>
        </div>
      </section>

      {/* Панорамная вставка: Пространство */}
      <section className="border-b border-[#0E0E0C]/10 bg-[#FAFAF7]">
        <div className="w-full h-[280px] sm:h-[640px] md:h-[760px] overflow-hidden bg-[#0E0E0C]">
          <img
            src="/images/timor_vast_space.jpg"
            alt="Пространство и первозданный горизонт Восточного Тимора"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-[1060px] mx-auto px-5 sm:px-12 py-12 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-16 items-start">
            <span className="block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E]">
              ПРОСТРАНСТВО БЕЗ ГРАНИЦ
            </span>
            <div>
              <h3 className="font-serif text-[22px] sm:text-[32px] font-normal leading-[1.35] text-[#0E0E0C] mb-3 sm:mb-4">
                Горизонт, где взгляд отдыхает и наполняется заново.
              </h3>
              <p className="text-[15px] sm:text-[18px] text-[#6F6E66] leading-[1.75] font-light max-w-[65ch]">
                Масштаб, который невозможно сфотографировать. Здесь возвращается ощущение собственного размера — и тишина, в которой наконец слышно себя.
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
              02 / ОПЫТ
            </span>
            <h2 className="font-serif text-[30px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-4">
              АРХИТЕКТУРА БЕЗУПРЕЧНОГО КОМФОРТА.
            </h2>
            <p className="text-[16px] sm:text-[18px] font-medium text-[#2E2E2A]">
              Приватная экспедиция. Камерный формат: 2–4 гостя. Абсолютная конфиденциальность.
            </p>
          </div>

          <div className="space-y-20 sm:space-y-32">
            {/* Пункт 1: Океан — image first on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first md:order-last">
                <img
                  src="/images/timor_ocean_boat.jpg"
                  alt="Лодка в лазурном океане Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-last md:order-first">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">ОКЕАН · МИГРАЦИЯ КИТОВ</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">Открытый океан.</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  Скоростной катер в пролив глубиной три километра. Карликовые синие киты проходят в десятках метров. Вода такого цвета, что забываешь, зачем доставал телефон.
                </p>
              </div>
            </div>

            {/* Пункт 2: Жако — image first on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first">
                <img
                  src="/images/timor_space_therapy.jpg"
                  alt="Побережье и терапия пространством Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">САКРАЛЬНЫЙ ОСТРОВ ЖАКО</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">Остров, где нет людей.</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  Жако — священный необитаемый остров. Дикие горные побережья, вода до горизонта и ощущение, что ты первый человек, который здесь оказался.
                </p>
              </div>
            </div>

            {/* Блок Наскальной Живописи и Сакрального Наследия */}
            <div className="p-5 sm:p-14 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
              <div className="max-w-[760px] mb-8 sm:mb-12">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">40 000 ЛЕТ САКРАЛЬНОЙ ПАМЯТИ</span>
                <h3 className="font-serif text-[22px] sm:text-[32px] font-normal text-[#0E0E0C] mb-3 sm:mb-4">Места, куда не водят туристов.</h3>
                <p className="text-[14px] sm:text-[16px] text-[#6F6E66] leading-[1.75]">
                  Петроглифы, которым сорок тысяч лет. Пещерные святилища, куда пускают только со старейшинами. Ритуальные камни, которые до сих пор живут. Валерий знает этих людей лично — и они открывают двери, которых нет на картах.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img
                      src="/images/timor_rock_art.jpg"
                      alt="Наскальная живопись возрастом 40 000 лет"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    Наскальные петроглифы
                  </p>
                </div>

                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img
                      src="/images/timor_sacred_cave.jpg"
                      alt="Сакральное пещерное святилище"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    Святилище Лулик
                  </p>
                </div>

                <div>
                  <div className="h-[240px] sm:h-[340px] border border-[#0E0E0C]/10 bg-[#E8E6DF] overflow-hidden">
                    <img
                      src="/images/timor_sacred_stone.jpg"
                      alt="Ритуальный артефакт"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-[#6F6E66] tracking-[0.2em] uppercase text-center mt-3 sm:mt-4">
                    Сакральный камень
                  </p>
                </div>
              </div>
            </div>

            {/* Пункт 3: Полное отключение — image first on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 items-center">
              <div className="relative h-[260px] sm:h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md order-first md:order-last">
                <img
                  src="/images/timor_disconnection.jpg"
                  alt="Первозданная дикая природа Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-last md:order-first">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">ПЕРВОЗДАННАЯ ПРИРОДА · ПОЛНОЕ ОТКЛЮЧЕНИЕ</span>
                <h3 className="font-serif text-[24px] sm:text-[34px] font-normal text-[#0E0E0C] mb-4 sm:mb-5">Вы ни о чём не думаете.</h3>
                <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  С момента прилёта мы забираем на себя всё — от быта до дипломатических доступов. Ваша единственная задача: отпустить контроль и дать нервной системе наконец выдохнуть.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 4: Проводник (Валерий Латыпов) */}
      <section id="guide" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 sm:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[520px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
            <img
              src="/images/valery_latypov_portrait.jpg"
              alt="Валерий Латыпов"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
              <span className="font-serif text-[16px] sm:text-[18px] font-medium text-white block">Валерий Латыпов</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#E29D7D] mt-1 sm:mt-1.5 block">
                Архитектор визуального капитала
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4 sm:mb-6">
              03 / ПРОВОДНИК
            </span>
            <h2 className="font-serif text-[30px] sm:text-[54px] font-normal tracking-[-0.02em] leading-[1.1] sm:leading-[1.08] text-[#0E0E0C] mb-5 sm:mb-6">
              ВАШ ПРОВОДНИК.
            </h2>
            <p className="text-[17px] sm:text-[22px] font-medium text-[#2E2E2A] leading-[1.5] mb-5 sm:mb-6">
              Валерий Латыпов. 25 лет рядом с первыми лицами списков Форбс и людьми, создающими мировую культуру.
            </p>
            <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-4 sm:mb-5">
              Он не гид. Художник, визионер, человек, говорящий на индонезийском языке. Общается со старейшинами напрямую и открывает двери, которых нет в путеводителях.
            </p>
            <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
              Он понимает, что такое настоящая усталость от ответственности. Это разговор равного с равным — без необходимости что-либо объяснять.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 5: Инвестиция & Фильтр */}
      <section id="investment" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[940px] mx-auto p-6 sm:p-10 md:p-16 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            04 / ИНВЕСТИЦИЯ
          </span>
          <h2 className="font-serif text-[30px] sm:text-[54px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-4">
            ЧТО ЭТО СТОИТ.
          </h2>

          <div className="font-serif text-[36px] sm:text-[64px] font-normal tracking-[-0.02em] text-[#0E0E0C] leading-none my-5 sm:my-6">
            От €14,000
            <span className="block font-sans text-[13px] sm:text-[14px] font-medium text-[#6F6E66] tracking-normal mt-2 sm:mt-3">
              за одного гостя · 8 дней приватной экспедиции
            </span>
          </div>

          <p className="text-[15px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-8 sm:mb-10">
            Это не плата за маршрут. Это инвестиция в ваш главный актив — ясность мышления и способность принимать точные решения. Участие — через личное интервью с Валерием.
          </p>

          <div className="p-5 sm:p-12 bg-transparent border border-[#C9501E]/40">
            <h4 className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-3">
              Кого мы не берём
            </h4>
            <p className="text-[14px] sm:text-[16px] text-[#2E2E2A] leading-[1.75] font-light max-w-[65ch]">
              Мы отказываем при клинической депрессии. Экспедиция — для здоровых, но предельно уставших людей, готовых на восемь дней полностью отключиться от связи.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 6: Личный Контакт */}
      <footer id="contact" className="py-20 sm:py-32 md:py-44 px-5 sm:px-12 bg-[#FAFAF7]">
        <div className="max-w-[940px] mx-auto text-center">
          <span className="inline-block text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            05 / КОНТАКТ
          </span>
          <h2 className="font-serif text-[30px] sm:text-[60px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-5 sm:mb-6">
            ПОГОВОРИМ ЛИЧНО.
          </h2>
          <p className="text-[16px] sm:text-[21px] text-[#3A3935] leading-[1.7] max-w-[760px] mx-auto mb-10 sm:mb-14 font-light">
            Экспедиция — не массовый продукт. Я лично разговариваю с каждым, чтобы понять, подходит ли вам этот формат. Напишите — и мы найдём время для короткого разговора.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 max-w-[660px] mx-auto mb-12 sm:mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              Написать в WhatsApp
            </a>

            <a
              href="mailto:vision@valerylatypov.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0E0E0C] hover:bg-[#C9501E] text-[#FAFAF7] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              vision@valerylatypov.com
            </a>
          </div>

          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#0E0E0C]/10 text-center text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#6F6E66]">
            © 2026 ВАЛЕРИЙ ЛАТЫПОВ · АВТОРСКИЕ ЭКСПЕДИЦИИ
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
          title="Написать Валерию Латыпову в WhatsApp"
          aria-label="Написать в WhatsApp"
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
    </div>
  );
}
