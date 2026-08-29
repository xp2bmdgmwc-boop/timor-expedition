import React from "react";

export default function TimorHomePage() {
  const whatsappUrl = "https://wa.me/79852246789?text=" + encodeURIComponent("Здравствуйте, Валерий. Хочу узнать об экспедиции в Восточный Тимор.");

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#0E0E0C]">
      {/* Плавающая навигация — строгие острые углы */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#0E0E0C]/10 px-6 sm:px-12 py-4 flex items-center justify-between transition-all">
        <a href="#" className="font-extrabold text-[11px] tracking-[0.28em] uppercase text-[#0E0E0C] hover:text-[#C9501E] transition-colors">
          ВАЛЕРИЙ ЛАТЫПОВ · ЭКСПЕДИЦИИ
        </a>

        <div className="hidden md:flex items-center gap-10 text-[12px] font-medium tracking-[0.14em] uppercase text-[#6F6E66]">
          <a href="#point" className="hover:text-[#0E0E0C] transition-colors">Исходная точка</a>
          <a href="#experience" className="hover:text-[#0E0E0C] transition-colors">Опыт</a>
          <a href="#guide" className="hover:text-[#0E0E0C] transition-colors">Проводник</a>
          <a href="#investment" className="hover:text-[#0E0E0C] transition-colors">Инвестиция</a>
        </div>

        <a
          href="#contact"
          className="bg-[#0E0E0C] text-[#FAFAF7] hover:bg-[#C9501E] text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-3 transition-all duration-300 shadow-sm"
        >
          Связаться
        </a>
      </nav>

      {/* Экран 1: Главный экран (Hero) со статичным атмосферным фоном */}
      <header className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-40 pb-28 px-6 sm:px-12 overflow-hidden bg-[#0E0E0C] text-[#FAFAF7]">
        {/* Статичное премиальное фоновое изображение */}
        <div className="absolute inset-0 z-0 bg-[#0E0E0C]">
          <img
            src="/images/timor_space_therapy.jpg"
            alt="Атмосферный пейзаж Восточного Тимора"
            className="w-full h-full object-cover opacity-35 filter contrast-110 saturate-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C] via-[#0E0E0C]/40 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-[1060px] mx-auto text-left w-full">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.3em] uppercase text-[#E29D7D] mb-6">
            КАМЕРНЫЙ ФОРМАТ: 2–4 ГОСТЯ
          </span>
          <h1 className="font-serif text-[44px] sm:text-[72px] md:text-[92px] font-normal leading-[1.02] tracking-[-0.02em] text-white mb-8">
            ВОСТОЧНЫЙ ТИМОР.<br />
            <span className="italic font-light">ТОЧКА ОБНУЛЕНИЯ.</span>
          </h1>
          <p className="text-[18px] sm:text-[22px] text-[#D0CECB] font-light leading-[1.65] max-w-[800px] mb-14 tracking-[-0.01em]">
            Экзистенциальный ретрит на краю географии для руководителей высшего звена и основателей бизнеса, перегруженных операционной матрицей. 
            Последний нетронутый фронтир Азии, где нет массового туризма, лишних глаз и социального шума. 
            Восемь дней, чтобы обнулить сенсорную перегрузку и вернуть предельную резкость мышления.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              Инициировать экспедицию
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#1A1A18] hover:bg-[#C9501E] border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              Связаться в WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-14 mt-20 border-t border-white/15">
            <div>
              <span className="block text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Локация</span>
              <span className="text-[16px] font-medium text-white mt-1.5 block">Восточный Тимор</span>
            </div>
            <div>
              <span className="block text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Формат</span>
              <span className="text-[16px] font-medium text-white mt-1.5 block">Приватная экспедиция · 8 дней</span>
            </div>
            <div>
              <span className="block text-[11px] font-medium tracking-[0.24em] uppercase text-[#A6A59D]">Доступ</span>
              <span className="text-[16px] font-medium text-white mt-1.5 block">Камерный формат: 2–4 гостя</span>
            </div>
          </div>
        </div>
      </header>

      {/* Экран 2: Исходная точка (Контекст реальности) */}
      <section id="point" className="py-32 md:py-44 px-6 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-6">
            01 / ИСХОДНАЯ ТОЧКА
          </span>
          <h2 className="font-serif text-[38px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.08] text-[#0E0E0C] mb-8">
            ИЛЛЮЗИЯ КОНТРОЛЯ.
          </h2>
          <p className="text-[21px] sm:text-[28px] text-[#2E2E2A] font-light leading-[1.5] tracking-[-0.015em] mb-8 max-w-[920px]">
            Вы управляете масштабными системами, но цена этого — непрерывное напряжение 24/7. Пятизвездочный комфорт больше не восстанавливает: фоновый шум и ответственность следуют за вами повсюду.
          </p>
          <p className="text-[17px] sm:text-[19px] text-[#6F6E66] leading-[1.8] max-w-[860px]">
            Вам нужен не очередной отпуск, а полное изъятие из привычного контекста, где невозможно оставаться заложником непрерывного контроля.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 mt-20 border-t border-[#0E0E0C]/10">
            <div>
              <div className="font-serif text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-3">&lt; 10 000</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">путешественников в год на всю страну по данным Всемирной туристской организации</div>
            </div>
            <div>
              <div className="font-serif text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-3">3 000 м</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">глубина пролива Омбай и коридор миграции карликовых синих китов</div>
            </div>
            <div>
              <div className="font-serif text-[48px] font-normal tracking-[-0.02em] text-[#C9501E] leading-none mb-3">40 000 лет</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed tracking-wide">возраст нетронутых наскальных святилищ и сакральных зон Лулик</div>
            </div>
          </div>
        </div>
      </section>

      {/* Панорамная вставка: Пространство без агрессивных рамок */}
      <section className="relative w-full h-[500px] sm:h-[640px] md:h-[720px] overflow-hidden border-b border-[#0E0E0C]/10 bg-[#0E0E0C]">
        <img
          src="/images/timor_vast_space.jpg"
          alt="Пространство и первозданный горизонт Восточного Тимора"
          className="w-full h-full object-cover object-center"
        />
        {/* Элегантная полупрозрачная стеклянная карточка в правом верхнем углу */}
        <div className="absolute top-8 right-6 sm:top-14 sm:right-14 z-10 max-w-[340px] sm:max-w-[440px] text-left bg-[#0E0E0C]/80 backdrop-blur-xl p-8 sm:p-10 border border-white/10 shadow-2xl text-[#FAFAF7]">
          <span className="block text-[11px] font-semibold tracking-[0.28em] uppercase text-[#E29D7D] mb-3">
            ПРОСТРАНСТВО БЕЗ ГРАНИЦ
          </span>
          <p className="font-serif text-[18px] sm:text-[21px] font-normal leading-[1.5] text-white/95 mb-3">
            Горизонт, где взгляд не упирается в чужие стены.
          </p>
          <p className="text-[13px] sm:text-[14px] text-[#A6A59D] leading-[1.7] font-light">
            Масштаб, возвращающий истинный размер вещам и освобождающий ум от операционного шума.
          </p>
        </div>
      </section>

      {/* Экран 3: Опыт (Архитектура безупречного комфорта) */}
      <section id="experience" className="py-32 md:py-44 px-6 sm:px-12 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-24">
            <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-6">
              02 / ОПЫТ
            </span>
            <h2 className="font-serif text-[38px] sm:text-[58px] font-normal tracking-[-0.02em] leading-[1.08] text-[#0E0E0C] mb-4">
              АРХИТЕКТУРА БЕЗУПРЕЧНОГО КОМФОРТА.
            </h2>
            <p className="text-[18px] font-medium text-[#2E2E2A]">
              Приватная экспедиция. Камерный формат: 2–4 гостя. Абсолютная конфиденциальность.
            </p>
          </div>

          <div className="space-y-32">
            {/* Пункт 1: Океан */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">01 / ОКЕАН</span>
                <h3 className="font-serif text-[28px] sm:text-[34px] font-normal text-[#0E0E0C] mb-5">Океаническая бездна.</h3>
                <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  Выход на скоростном катере в пролив глубиной 3000 метров. Наблюдение за карликовыми синими китами. Прямой контакт с природой, от которого замирает время.
                </p>
              </div>
              <div className="relative h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
                <img
                  src="/images/timor_ocean_boat.jpg"
                  alt="Лодка в лазурном океане Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Пункт 2: Терапия пространством */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center md:[direction:rtl]">
              <div className="md:[direction:ltr]">
                <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">02 / САКРАЛЬНОЕ</span>
                <h3 className="font-serif text-[28px] sm:text-[34px] font-normal text-[#0E0E0C] mb-5">Терапия пространством.</h3>
                <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  Священный необитаемый остров Жако. Дикие горные побережья. Вы попадаете в мир первозданной тишины, живущий по другим законам.
                </p>
              </div>
              <div className="relative h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md md:[direction:ltr]">
                <img
                  src="/images/timor_space_therapy.jpg"
                  alt="Побережье и терапия пространством Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Блок Наскальной Живописи и Сакрального Наследия */}
            <div className="p-8 sm:p-14 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
              <div className="max-w-[760px] mb-10">
                <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">40 000 ЛЕТ САДРАЛЬНОЙ ПАМЯТИ</span>
                <h3 className="font-serif text-[26px] sm:text-[32px] font-normal text-[#0E0E0C] mb-4">Наскальная живопись и святилища Лулик.</h3>
                <p className="text-[15px] sm:text-[16px] text-[#6F6E66] leading-[1.75]">
                  Древнейшие петроглифы региона, ритуальные камни и сакральные пещерные своды. Прямой диалог со старейшинами и доступ к местам силы, скрытым от туристических карт.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="relative h-[300px] border border-[#0E0E0C]/10 bg-[#E8E6DF]">
                  <img
                    src="/images/timor_rock_art.jpg"
                    alt="Наскальная живопись возрастом 40 000 лет"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 right-2 bg-[#0E0E0C]/80 text-white text-[10px] font-medium px-2.5 py-1.5 tracking-[0.14em] uppercase backdrop-blur-sm">
                    Наскальные петроглифы
                  </span>
                </div>

                <div className="relative h-[300px] border border-[#0E0E0C]/10 bg-[#E8E6DF]">
                  <img
                    src="/images/timor_sacred_cave.jpg"
                    alt="Сакральное пещерное святилище"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 right-2 bg-[#0E0E0C]/80 text-white text-[10px] font-medium px-2.5 py-1.5 tracking-[0.14em] uppercase backdrop-blur-sm">
                    Святилище Лулик
                  </span>
                </div>

                <div className="relative h-[300px] border border-[#0E0E0C]/10 bg-[#E8E6DF]">
                  <img
                    src="/images/timor_sacred_stone.jpg"
                    alt="Ритуальный артефакт"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 right-2 bg-[#0E0E0C]/80 text-white text-[10px] font-medium px-2.5 py-1.5 tracking-[0.14em] uppercase backdrop-blur-sm">
                    Сакральный камень
                  </span>
                </div>
              </div>
            </div>

            {/* Пункт 3: Полное отключение */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] block mb-3">03 / БЕЗЗАБОТНОСТЬ</span>
                <h3 className="font-serif text-[28px] sm:text-[34px] font-normal text-[#0E0E0C] mb-5">Полное отключение.</h3>
                <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
                  С момента прилета мы забираем на себя всё: от быта и безопасности до дипломатических доступов. Ваша единственная задача — выключить связь и позволить первозданному масштабу восстановить нервную систему.
                </p>
              </div>
              <div className="relative h-[400px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
                <img
                  src="/images/timor_disconnection.jpg"
                  alt="Первозданная дикая природа Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 4: Проводник (Валерий Латыпов) */}
      <section id="guide" className="py-32 md:py-44 px-6 sm:px-12 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] gap-16 items-center">
          <div className="relative h-[520px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
            <img
              src="/images/valery_latypov_portrait.jpg"
              alt="Валерий Латыпов"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-serif text-[18px] font-medium text-white block">Валерий Латыпов</span>
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#E29D7D] mt-1.5 block">
                Архитектор визуального капитала
              </span>
            </div>
          </div>

          <div>
            <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-6">
              03 / ПРОВОДНИК
            </span>
            <h2 className="font-serif text-[38px] sm:text-[54px] font-normal tracking-[-0.02em] leading-[1.08] text-[#0E0E0C] mb-6">
              АРХИТЕКТОР СМЫСЛОВ.
            </h2>
            <p className="text-[20px] sm:text-[22px] font-medium text-[#2E2E2A] leading-[1.5] mb-6">
              Валерий Латыпов. 25 лет работы с первыми лицами списков Форбс и мировыми деятелями культуры.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-5">
              Валерий — не гид. Он художник, визионер и человек, говорящий на индонезийском языке. Он общается со старейшинами напрямую, открывая двери, которых не существует в путеводителях.
            </p>
            <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8]">
              Он понимает цену успеха и перегрузки. Это диалог равного с равным без необходимости что-либо доказывать.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 5: Инвестиция & Фильтр */}
      <section id="investment" className="py-32 md:py-44 px-6 sm:px-12 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[940px] mx-auto p-10 md:p-16 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            04 / ИНВЕСТИЦИЯ
          </span>
          <h2 className="font-serif text-[38px] sm:text-[54px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-4">
            СТОИМОСТЬ ЯСНОСТИ.
          </h2>

          <div className="font-serif text-[48px] sm:text-[64px] font-normal tracking-[-0.02em] text-[#0E0E0C] leading-none my-6">
            От €14,000
            <span className="block font-sans text-[14px] font-medium text-[#6F6E66] tracking-normal mt-3">
              за одного гостя · 8 дней приватной экспедиции
            </span>
          </div>

          <p className="text-[16px] sm:text-[17px] text-[#3A3935] leading-[1.8] mb-10">
            Это не плата за маршрут — это инвестиция в ваш ключевой актив: точность управленческих решений. Закрытый персональный набор через короткое интервью лично с Валерием.
          </p>

          <div className="p-6 sm:p-8 bg-[#C9501E]/10 border-l-4 border-[#C9501E]">
            <h4 className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#C9501E] mb-2">
              Квалификационный критерий
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#2E2E2A] leading-[1.7]">
              Мы отказываем при клинической депрессии: экспедиция создана для здоровых, но предельно уставших лидеров, готовых к полному отключению связи.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 6: Личный Контакт */}
      <footer id="contact" className="py-32 md:py-44 px-6 sm:px-12 bg-[#FAFAF7]">
        <div className="max-w-[940px] mx-auto text-center">
          <span className="inline-block text-[11px] sm:text-[12px] font-semibold tracking-[0.28em] uppercase text-[#C9501E] mb-4">
            05 / КОНТАКТ
          </span>
          <h2 className="font-serif text-[38px] sm:text-[60px] font-normal tracking-[-0.02em] text-[#0E0E0C] mb-6">
            ЛИЧНЫЙ КОНТАКТ.
          </h2>
          <p className="text-[18px] sm:text-[21px] text-[#3A3935] leading-[1.7] max-w-[760px] mx-auto mb-14 font-light">
            Формат экспедиции не подразумевает потоковых продаж. Я лично отбираю участников, чтобы гарантировать правильную динамику и безопасность для вашей психики. Свяжитесь со мной напрямую для согласования короткого интервью.
          </p>

          {/* Кнопки прямого доступа: медная и темная монохромная */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-[660px] mx-auto mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#C9501E] hover:bg-[#B24316] text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl"
            >
              Связаться в WhatsApp
            </a>

            <a
              href="mailto:vision@valerylatypov.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0E0E0C] hover:bg-[#C9501E] text-[#FAFAF7] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
            >
              vision@valerylatypov.com
            </a>
          </div>

          <div className="pt-12 border-t border-[#0E0E0C]/10 text-center">
            <div className="text-[16px] font-medium text-[#0E0E0C]">
              Валерий Латыпов. Архитектор визуального капитала.
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#0E0E0C]/10 flex flex-wrap justify-between items-center text-[11px] tracking-[0.14em] uppercase text-[#6F6E66]">
            <div>© 2026 ВАЛЕРИЙ ЛАТЫПОВ · АВТОРСКИЕ ЭКСПЕДИЦИИ</div>
            <div>КОНФИДЕНЦИАЛЬНО · ТОЛЬКО ДЛЯ ЧАСТНЫХ ДОВЕРИТЕЛЕЙ</div>
          </div>
        </div>
      </footer>

      {/* Плавающий круглый значок WhatsApp справа внизу (в фирменном терракотовом цвете) */}
      <aside aria-label="Прямая связь в WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-round-float w-14 h-14 bg-[#C9501E] hover:bg-[#B24316] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group border border-white/20"
          title="Написать Валерию Латыпову в WhatsApp"
          aria-label="Написать в WhatsApp"
        >
          <svg
            className="w-6 h-6 fill-current"
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
