import React from "react";

export default function TimorHomePage() {
  const whatsappUrl = "https://wa.me/79852246789?text=" + encodeURIComponent("Здравствуйте, Валерий. Хочу узнать об экспедиции в Восточный Тимор.");

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#0E0E0C]">
      {/* Плавающая навигация — строгие острые углы */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FAFAF7]/90 backdrop-blur-md border-b border-[#0E0E0C]/10 px-6 sm:px-12 py-4 flex items-center justify-between transition-all">
        <a href="#" className="font-extrabold text-[11px] tracking-[0.2em] uppercase text-[#0E0E0C] hover:text-[#C9501E] transition-colors">
          ВАЛЕРИЙ ЛАТЫПОВ · ЭКСПЕДИЦИИ
        </a>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-semibold tracking-[0.05em] text-[#6F6E66]">
          <a href="#point" className="hover:text-[#0E0E0C] transition-colors">Исходная точка</a>
          <a href="#experience" className="hover:text-[#0E0E0C] transition-colors">Опыт</a>
          <a href="#guide" className="hover:text-[#0E0E0C] transition-colors">Проводник</a>
          <a href="#investment" className="hover:text-[#0E0E0C] transition-colors">Инвестиция</a>
        </div>

        <a
          href="#contact"
          className="bg-[#0E0E0C] text-[#FAFAF7] hover:bg-[#C9501E] text-[11px] font-bold tracking-[0.16em] uppercase px-6 py-2.5 transition-all duration-200"
        >
          Связаться
        </a>
      </nav>

      {/* Экран 1: Главный экран (Hero) */}
      <header className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-36 pb-24 px-6 overflow-hidden bg-[#0E0E0C] text-[#FAFAF7]">
        {/* Фоновое видео / Фото */}
        <div className="absolute inset-0 z-0 bg-[#0E0E0C]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/IMG_2240.jpg"
            className="w-full h-full object-cover opacity-40 filter contrast-110 saturate-90"
          >
            <source src="/videos/timor_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C] via-[#0E0E0C]/60 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-[1040px] mx-auto text-left w-full">
          <span className="inline-block text-[11px] font-bold tracking-[0.24em] uppercase text-[#E29D7D] mb-6">
            ПРИВАТНАЯ ЭКСПЕДИЦИЯ · СТРОГО ДО 4 ГОСТЕЙ
          </span>
          <h1 className="text-[42px] sm:text-[68px] md:text-[88px] font-bold leading-[1.0] tracking-[-0.035em] text-white mb-8">
            ВОСТОЧНЫЙ ТИМОР.<br />ПОСЛЕДНЯЯ ТИШИНА.
          </h1>
          <p className="text-[18px] sm:text-[22px] text-[#D0CECB] font-light leading-[1.6] max-w-[780px] mb-12 tracking-[-0.01em]">
            Экзистенциальный ретрит на краю географии для руководителей высшего звена и основателей бизнеса, перегруженных операционной матрицей. 
            Последний нетронутый фронтир Азии, где нет массового туризма, лишних глаз и социального шума. 
            Восемь дней, чтобы обнулить сенсорную перегрузку и вернуть предельную резкость мышления.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C9501E] hover:bg-[#E05C26] text-white text-[12px] font-bold tracking-[0.16em] uppercase transition-all duration-200"
            >
              Инициировать экспедицию
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[12px] font-bold tracking-[0.16em] uppercase transition-all duration-200 backdrop-blur-md"
            >
              Связаться в WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-20 border-t border-white/15">
            <div>
              <span className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#A6A59D]">Локация</span>
              <span className="text-[15px] font-semibold text-white mt-1 block">Восточный Тимор</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#A6A59D]">Формат</span>
              <span className="text-[15px] font-semibold text-white mt-1 block">Приватная экспедиция · 8 дней</span>
            </div>
            <div>
              <span className="block text-[11px] font-bold tracking-[0.16em] uppercase text-[#A6A59D]">Доступ</span>
              <span className="text-[15px] font-semibold text-white mt-1 block">Строго до 4 гостей</span>
            </div>
          </div>
        </div>
      </header>

      {/* Экран 2: Исходная точка (Контекст реальности) */}
      <section id="point" className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1040px] mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-5">
            01 / ИСХОДНАЯ ТОЧКА
          </span>
          <h2 className="text-[36px] sm:text-[54px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0E0E0C] mb-8">
            ИЛЛЮЗИЯ КОНТРОЛЯ.
          </h2>
          <p className="text-[20px] sm:text-[26px] text-[#2E2E2A] font-light leading-[1.5] tracking-[-0.015em] mb-8">
            Вы управляете масштабными системами, но цена этого — непрерывное напряжение 24/7. Пятизвездочный комфорт больше не восстанавливает: фоновый шум и ответственность следуют за вами повсюду.
          </p>
          <p className="text-[16px] sm:text-[18px] text-[#6F6E66] leading-[1.75] max-w-[840px]">
            Вам нужен не очередной отпуск, а полное изъятие из привычного контекста, где невозможно оставаться в роли функционера.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14 mt-16 border-t border-[#0E0E0C]/10">
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-3">&lt; 10 000</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed">путешественников в год на всю страну по данным Всемирной туристской организации</div>
            </div>
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-3">3 000 м</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed">глубина пролива Омбай и коридор миграции карликовых синих китов</div>
            </div>
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-3">40 000 лет</div>
              <div className="text-[13px] text-[#6F6E66] leading-relaxed">возраст нетронутых наскальных святилищ и сакральных зон Лулик</div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 3: Опыт (Архитектура безупречного комфорта) */}
      <section id="experience" className="py-28 md:py-36 px-6 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1040px] mx-auto">
          <div className="mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-5">
              02 / ОПЫТ
            </span>
            <h2 className="text-[36px] sm:text-[54px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0E0E0C] mb-4">
              АРХИТЕКТУРА БЕЗУПРЕЧНОГО КОМФОРТА.
            </h2>
            <p className="text-[18px] font-semibold text-[#2E2E2A]">
              Приватная экспедиция. Строго до 4 гостей. Абсолютная конфиденциальность.
            </p>
          </div>

          <div className="space-y-24">
            {/* Пункт 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] block mb-3">01 / ОКЕАН</span>
                <h3 className="text-[26px] sm:text-[30px] font-bold text-[#0E0E0C] mb-4">Океаническая бездна.</h3>
                <p className="text-[16px] text-[#3A3935] leading-[1.75]">
                  Выход на скоростном катере в пролив глубиной 3000 метров. Наблюдение за карликовыми синими китами. Прямой контакт с природой, от которого замирает время.
                </p>
              </div>
              <div className="relative h-[380px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
                <img
                  src="/images/IMG_2240.jpg"
                  alt="Океаническая бездна Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Пункт 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:[direction:rtl]">
              <div className="md:[direction:ltr]">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] block mb-3">02 / САКРАЛЬНОЕ</span>
                <h3 className="text-[26px] sm:text-[30px] font-bold text-[#0E0E0C] mb-4">Терапия пространством.</h3>
                <p className="text-[16px] text-[#3A3935] leading-[1.75]">
                  Священный необитаемый остров Жако. Петроглифы, которым 40 000 лет. Прямой диалог со старейшинами. Вы попадаете в мир, живущий по другим законам.
                </p>
              </div>
              <div className="relative h-[380px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md md:[direction:ltr]">
                <img
                  src="/images/IMG_3124.jpg"
                  alt="Священный остров Жако"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Пункт 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] block mb-3">03 / БЕЗЗАБОТНОСТЬ</span>
                <h3 className="text-[26px] sm:text-[30px] font-bold text-[#0E0E0C] mb-4">Полное отключение.</h3>
                <p className="text-[16px] text-[#3A3935] leading-[1.75]">
                  С момента прилета мы забираем на себя всё: от быта и безопасности до дипломатических доступов. Ваша единственная задача — выключить связь и позволить первозданному масштабу восстановить нервную систему.
                </p>
              </div>
              <div className="relative h-[380px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
                <img
                  src="/images/IMG_3120.jpg"
                  alt="Первозданный масштаб Восточного Тимора"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 4: Проводник (Валерий Латыпов) */}
      <section id="guide" className="py-28 md:py-36 px-6 bg-[#FAFAF7] border-b border-[#0E0E0C]/10">
        <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-[380px_1fr] gap-14 items-center">
          <div className="relative h-[500px] border border-[#0E0E0C]/15 bg-[#E8E6DF] shadow-md">
            <img
              src="/images/IMG_3246.jpg"
              alt="Валерий Латыпов"
              className="w-full h-full object-cover grayscale contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0C]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[17px] font-bold text-white block">Валерий Латыпов</span>
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#E29D7D] mt-1 block">
                Архитектор визуального капитала
              </span>
            </div>
          </div>

          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-5">
              03 / ПРОВОДНИК
            </span>
            <h2 className="text-[36px] sm:text-[50px] font-bold tracking-[-0.03em] leading-[1.08] text-[#0E0E0C] mb-6">
              АРХИТЕКТОР СМЫСЛОВ.
            </h2>
            <p className="text-[20px] font-medium text-[#2E2E2A] leading-[1.5] mb-6">
              Валерий Латыпов. 25 лет работы с первыми лицами списков Форбс и мировыми деятелями культуры.
            </p>
            <p className="text-[16px] text-[#3A3935] leading-[1.75] mb-5">
              Валерий — не гид. Он художник, визионер и человек, говорящий на индонезийском языке. Он общается со старейшинами напрямую, открывая двери, которых не существует в путеводителях.
            </p>
            <p className="text-[16px] text-[#3A3935] leading-[1.75]">
              Он понимает цену успеха и перегрузки. Это диалог равного с равным без необходимости что-либо доказывать.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 5: Инвестиция & Фильтр */}
      <section id="investment" className="py-28 md:py-36 px-6 bg-[#F2F0EA] border-b border-[#0E0E0C]/10">
        <div className="max-w-[920px] mx-auto p-10 md:p-16 bg-[#FAFAF7] border border-[#0E0E0C]/15 shadow-sm">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-4">
            04 / ИНВЕСТИЦИЯ
          </span>
          <h2 className="text-[36px] sm:text-[50px] font-bold tracking-[-0.03em] text-[#0E0E0C] mb-4">
            СТОИМОСТЬ ЯСНОСТИ.
          </h2>

          <div className="text-[44px] sm:text-[60px] font-bold tracking-[-0.03em] text-[#0E0E0C] leading-none my-6">
            От €14,000
            <span className="block text-[14px] font-medium text-[#6F6E66] tracking-normal mt-3">
              за одного гостя · 8 дней приватной экспедиции
            </span>
          </div>

          <p className="text-[16px] text-[#3A3935] leading-[1.75] mb-8">
            Это не плата за маршрут — это инвестиция в ваш ключевой актив: точность управленческих решений. Закрытый персональный набор через короткое интервью лично с Валерием.
          </p>

          <div className="p-6 bg-[#C9501E]/10 border-l-4 border-[#C9501E]">
            <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C9501E] mb-2">
              Квалификационный критерий
            </h4>
            <p className="text-[14px] text-[#2E2E2A] leading-[1.6]">
              Мы отказываем при клинической депрессии: экспедиция создана для здоровых, но предельно уставших лидеров, готовых к полному отключению связи.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 6: Личный Контакт (Прямой доступ, острые углы) */}
      <footer id="contact" className="py-28 md:py-36 px-6 bg-[#FAFAF7]">
        <div className="max-w-[920px] mx-auto text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-4">
            05 / КОНТАКТ
          </span>
          <h2 className="text-[36px] sm:text-[56px] font-bold tracking-[-0.03em] text-[#0E0E0C] mb-6">
            ЛИЧНЫЙ КОНТАКТ.
          </h2>
          <p className="text-[17px] sm:text-[20px] text-[#3A3935] leading-[1.7] max-w-[720px] mx-auto mb-12 font-light">
            Формат экспедиции не подразумевает потоковых продаж. Я лично отбираю участников, чтобы гарантировать правильную динамику и безопасность для вашей психики. Свяжитесь со мной напрямую для согласования короткого интервью.
          </p>

          {/* Кнопки прямого доступа со строгими углами */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[640px] mx-auto mb-16">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#25D366] hover:bg-[#1faa4f] text-black text-[12px] font-bold tracking-[0.16em] uppercase transition-all duration-200 shadow-md"
            >
              Связаться в WhatsApp
            </a>

            <a
              href="mailto:vision@valerylatypov.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-[#0E0E0C] hover:bg-[#C9501E] text-[#FAFAF7] text-[12px] font-bold tracking-[0.16em] uppercase transition-all duration-200"
            >
              vision@valerylatypov.com
            </a>
          </div>

          <div className="pt-10 border-t border-[#0E0E0C]/10 text-center space-y-2">
            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#6F6E66]">
              Семейные офисы и доверенные управляющие капиталом
            </div>
            <div className="text-[15px] font-semibold text-[#0E0E0C]">
              Валерий Латыпов. Архитектор визуального капитала.
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#0E0E0C]/10 flex flex-wrap justify-between items-center text-[11px] tracking-[0.1em] uppercase text-[#6F6E66]">
            <div>© 2026 ВАЛЕРИЙ ЛАТЫПОВ · АВТОРСКИЕ ЭКСПЕДИЦИИ</div>
            <div>КОНФИДЕНЦИАЛЬНО · ТОЛЬКО ДЛЯ ЧАСТНЫХ ДОВЕРИТЕЛЕЙ</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
