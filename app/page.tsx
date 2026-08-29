import React from "react";

export default function TimorHomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A08] text-[#FAFAF7]">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1100px] bg-[#121210]/85 backdrop-blur-xl border border-white/10 rounded-full px-7 py-3.5 flex items-center justify-between shadow-2xl transition-all">
        <a href="#" className="font-extrabold text-[11px] tracking-[0.18em] uppercase text-white hover:text-[#C9501E] transition-colors">
          LATYPOV · EXPEDITIONS
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#8E8D85]">
          <a href="#diagnosis" className="hover:text-white transition-colors">Диагноз</a>
          <a href="#experience" className="hover:text-white transition-colors">Опыт</a>
          <a href="#guide" className="hover:text-white transition-colors">Проводник</a>
          <a href="#investment" className="hover:text-white transition-colors">Инвестиция</a>
        </div>

        <a
          href="#contact"
          className="bg-white text-[#0A0A08] hover:bg-[#C9501E] hover:text-white text-[11px] font-bold tracking-[0.14em] uppercase px-5 py-2 rounded-full transition-all duration-300"
        >
          Контакт
        </a>
      </nav>

      {/* Экран 1: Hero */}
      <header className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        {/* ПЛЕЙСХОЛДЕР 1: Hero (Океаническая бездна / Киты) */}
        <div className="absolute inset-0 z-0 bg-[#0E0E0C]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/75 to-transparent z-10" />
          <div className="w-full h-full flex flex-col items-center justify-center opacity-30 border border-white/5">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E]">
              [ МЕДИА ПЛЕЙСХОЛДЕР 1 · ОКЕАНИЧЕСКАЯ БЕЗДНА / СИНИЕ КИТЫ ]
            </span>
          </div>
        </div>

        <div className="relative z-20 max-w-[1000px] mx-auto text-left w-full">
          <span className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase text-[#C9501E] mb-6">
            ПРИВАТНАЯ ЭКСПЕДИЦИЯ · СТРОГО ДО 4 ГОСТЕЙ
          </span>
          <h1 className="text-[42px] sm:text-[64px] md:text-[82px] font-bold leading-[1.02] tracking-[-0.035em] text-white mb-8">
            TIMOR-LESTE.<br />ПОСЛЕДНЯЯ ТИШИНА.
          </h1>
          <p className="text-[17px] sm:text-[21px] text-[#A6A59D] font-light leading-[1.6] max-w-[760px] mb-10 tracking-[-0.01em]">
            Экзистенциальный ретрит на краю географии для тех, кто перегружен операционной матрицей. 
            Последний нетронутый фронтир Азии, где нет массового туризма, лишних глаз и социального шума. 
            Восемь дней, чтобы обнулить сенсорный перегруз и вернуть предельную резкость мышления.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-9 py-4 bg-[#C9501E] hover:bg-[#E05C26] text-white text-[12px] font-bold tracking-[0.14em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#C9501E]/20"
          >
            Инициировать экспедицию
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 mt-16 border-t border-white/10">
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#73726B]">Локация</span>
              <span className="text-[14px] font-medium text-white mt-1 block">Восточный Тимор</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#73726B]">Формат</span>
              <span className="text-[14px] font-medium text-white mt-1 block">Приватная экспедиция · 8 дней</span>
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#73726B]">Доступ</span>
              <span className="text-[14px] font-medium text-white mt-1 block">Строго до 4 гостей</span>
            </div>
          </div>
        </div>
      </header>

      {/* Экран 2: Диагноз (Боль выгорания) */}
      <section id="diagnosis" className="py-28 md:py-36 px-6 border-b border-white/5">
        <div className="max-w-[1000px] mx-auto">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] mb-5">
            01 / ДИАГНОЗ
          </span>
          <h2 className="text-[36px] sm:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-8">
            ИЛЛЮЗИЯ КОНТРОЛЯ.
          </h2>
          <p className="text-[20px] sm:text-[26px] text-white/90 font-light leading-[1.5] tracking-[-0.015em] mb-8">
            Вы управляете масштабными системами, но цена этого — непрерывное давление 24/7. Пятизвездочный комфорт больше не восстанавливает: фоновый шум и ответственность следуют за вами повсюду.
          </p>
          <p className="text-[16px] sm:text-[18px] text-[#A6A59D] leading-[1.7] max-w-[820px]">
            Вам нужен не очередной отпуск, а полное изъятие из привычного контекста, где невозможно оставаться в роли функционера.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-16 border-t border-white/10">
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-2">&lt; 10 000</div>
              <div className="text-[13px] text-[#73726B] leading-relaxed">туристов в год на всю страну по официальным данным UNWTO</div>
            </div>
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-2">3 000 м</div>
              <div className="text-[13px] text-[#73726B] leading-relaxed">глубина пролива Омбай и коридор миграции карликовых синих китов</div>
            </div>
            <div>
              <div className="text-[44px] font-bold tracking-[-0.03em] text-[#C9501E] leading-none mb-2">40 000 лет</div>
              <div className="text-[13px] text-[#73726B] leading-relaxed">возраст нетронутых наскальных святилищ и сакральных зон Lulik</div>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 3: Опыт (Zero-Friction) */}
      <section id="experience" className="py-28 md:py-36 px-6 bg-[#0E0E0C] border-b border-white/5">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] mb-5">
              02 / ОПЫТ
            </span>
            <h2 className="text-[36px] sm:text-[52px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-4">
              АРХИТЕКТУРА НУЛЕВОГО ТРЕНИЯ.
            </h2>
            <p className="text-[18px] font-semibold text-white/80">
              Приватная экспедиция. Строго до 4 гостей. Полная приватность.
            </p>
          </div>

          <div className="space-y-24">
            {/* Пункт 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C9501E] block mb-3">01 / ОКЕАН</span>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-4">Океаническая Бездна.</h3>
                <p className="text-[16px] text-[#A6A59D] leading-[1.7]">
                  Выход на скоростном катере в пролив глубиной 3000 метров. Сафари на карликовых синих китов. Контакт с природой, от которого замирает время.
                </p>
              </div>
              {/* ПЛЕЙСХОЛДЕР 2: Природа / Океан */}
              <div className="h-[340px] bg-[#161614] border border-white/10 rounded-xl flex items-center justify-center p-6 text-center shadow-lg">
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#73726B]">
                  [ МЕДИА ПЛЕЙСХОЛДЕР 2 · ОКЕАН И СКАЛЫ ]
                </span>
              </div>
            </div>

            {/* Пункт 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:[direction:rtl]">
              <div className="md:[direction:ltr]">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C9501E] block mb-3">02 / САКРАЛЬНОЕ</span>
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-4">Терапия Пространством.</h3>
                <p className="text-[16px] text-[#A6A59D] leading-[1.7]">
                  Священный необитаемый остров Жако. Петроглифы, которым 40 000 лет. Прямой диалог со старейшинами. Вы попадаете в мир, который живет по другим законам.
                </p>
              </div>
              {/* ПЛЕЙСХОЛДЕР 3: Аутентичные жители / Традиции */}
              <div className="h-[340px] bg-[#161614] border border-white/10 rounded-xl flex items-center justify-center p-6 text-center md:[direction:ltr] shadow-lg">
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#73726B]">
                  [ МЕДИА ПЛЕЙСХОЛДЕР 3 · АУТЕНТИЧНЫЕ МЕСТНЫЕ ЖИТЕЛИ / ОСТРОВ ЖАКО ]
                </span>
              </div>
            </div>

            {/* Пункт 3 */}
            <div className="p-8 md:p-12 bg-[#121210] border border-white/10 rounded-2xl shadow-xl">
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C9501E] block mb-3">03 / БЕЗЗАБОТНОСТЬ</span>
              <h3 className="text-[24px] sm:text-[28px] font-bold text-white mb-4">Полное отключение.</h3>
              <p className="text-[16px] text-[#A6A59D] leading-[1.7] max-w-[800px]">
                С момента прилета мы забираем на себя всё: от быта и безопасности до дипломатических доступов. Ваша единственная задача — выключить связь и позволить первозданному масштабу восстановить нервную систему.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Экран 4: Проводник (Валерий Латыпов) */}
      <section id="guide" className="py-28 md:py-36 px-6 border-b border-white/5">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 items-center">
          {/* ПЛЕЙСХОЛДЕР 4: Вертикальный ч/б портрет фаундера */}
          <div className="h-[460px] bg-[#141412] border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full border border-[#73726B] flex items-center justify-center text-[#73726B] mb-4">
              ●
            </div>
            <span className="text-[15px] font-bold text-white">Валерий Латыпов</span>
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#73726B] mt-1">
              [ ВЕРТИКАЛЬНЫЙ Ч/Б ПОРТРЕТ 3:4 ]
            </span>
          </div>

          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] mb-5">
              03 / ПРОВОДНИК
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.03em] leading-[1.08] text-white mb-6">
              АРХИТЕКТОР СМЫСЛОВ.
            </h2>
            <p className="text-[20px] font-medium text-white/90 leading-[1.5] mb-6">
              Валерий Латыпов. 25 лет работы с лидерами первого эшелона и мировыми брендами (Forbes, Depeche Mode).
            </p>
            <p className="text-[16px] text-[#A6A59D] leading-[1.7] mb-5">
              Валерий — не гид. Он художник, визионер и человек, свободно владеющий индонезийским языком. Он общается со старейшинами напрямую, открывая двери, которых не существует в путеводителях.
            </p>
            <p className="text-[16px] text-[#A6A59D] leading-[1.7]">
              Он понимает цену успеха и перегрузки. Это диалог равного с равным без необходимости что-либо доказывать.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 5: Инвестиция & Фильтр */}
      <section id="investment" className="py-28 md:py-36 px-6 bg-[#0E0E0C] border-b border-white/5">
        <div className="max-w-[880px] mx-auto p-10 md:p-16 bg-[#121210] border border-white/10 rounded-2xl shadow-2xl">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] mb-4">
            04 / ИНВЕСТИЦИЯ
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.03em] text-white mb-4">
            СТОИМОСТЬ ЯСНОСТИ.
          </h2>

          <div className="text-[40px] sm:text-[56px] font-bold tracking-[-0.03em] text-white leading-none my-6">
            €13,000 – €15,000
            <span className="block text-[14px] font-normal text-[#73726B] tracking-normal mt-2">
              за одного гостя · 8 дней приватной экспедиции
            </span>
          </div>

          <p className="text-[16px] text-[#A6A59D] leading-[1.7] mb-8">
            Это не плата за маршрут — это инвестиция в ваш ключевой актив: точность управленческих решений. Закрытый персональный набор через короткое интервью лично с Валерием.
          </p>

          <div className="p-6 bg-[#C9501E]/10 border-l-2 border-[#C9501E] rounded-r-lg">
            <h4 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#C9501E] mb-2">
              Квалификационный фильтр (Important)
            </h4>
            <p className="text-[14px] text-white/90 leading-[1.6]">
              Мы отказываем при клинической депрессии: экспедиция создана для здоровых, но предельно уставших лидеров, готовых к полному отключению связи.
            </p>
          </div>
        </div>
      </section>

      {/* Экран 6: Личный Контакт & Форма */}
      <footer id="contact" className="py-28 md:py-36 px-6 bg-[#0A0A08]">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#C9501E] mb-4">
              05 / КОНТАКТ
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-bold tracking-[-0.03em] text-white mb-6">
              ЛИЧНЫЙ КОНТАКТ.
            </h2>
            <p className="text-[16px] text-[#A6A59D] leading-[1.7] mb-8">
              Формат экспедиции не подразумевает потоковых продаж. Я лично отбираю участников, чтобы гарантировать правильную динамику и безопасность для вашей психики.
            </p>

            <div className="space-y-4 pt-6 border-t border-white/10 text-[14px]">
              <div>
                <span className="text-[#73726B] block text-[11px] uppercase tracking-[0.1em]">Family Offices & Direct Access:</span>
                <a href="tel:+79852246789" className="text-white font-bold text-[16px] hover:text-[#C9501E] transition-colors">
                  +7 (985) 224-67-89
                </a>
              </div>
              <div>
                <span className="text-[#73726B] block text-[11px] uppercase tracking-[0.1em]">Email:</span>
                <a href="mailto:latypov.valery@yandex.ru" className="text-white font-bold hover:text-[#C9501E] transition-colors">
                  latypov.valery@yandex.ru
                </a>
              </div>
              <div className="pt-2 text-[#73726B] text-[13px]">
                Валерий Латыпов. Архитектор визуального капитала.
              </div>
            </div>
          </div>

          <form className="bg-[#121210] border border-white/10 rounded-2xl p-8 space-y-5 shadow-2xl">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#73726B] mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                required
                placeholder="Как к вам обращаться"
                className="w-full bg-[#161614] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] outline-none focus:border-[#C9501E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#73726B] mb-2">
                Телефон / Telegram / WhatsApp
              </label>
              <input
                type="text"
                required
                placeholder="+7 / @handle"
                className="w-full bg-[#161614] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] outline-none focus:border-[#C9501E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#73726B] mb-2">
                Удобное окно для короткого интервью
              </label>
              <input
                type="text"
                placeholder="Например: будни после 18:00"
                className="w-full bg-[#161614] border border-white/10 rounded-lg px-4 py-3 text-white text-[14px] outline-none focus:border-[#C9501E] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#C9501E] hover:bg-[#E05C26] text-white text-[12px] font-bold tracking-[0.14em] uppercase rounded-lg transition-all duration-300 shadow-xl shadow-[#C9501E]/20 mt-4"
            >
              Запросить интервью
            </button>
          </form>
        </div>

        <div className="max-w-[1000px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center text-[11px] tracking-[0.08em] uppercase text-[#73726B]">
          <div>© 2026 ВАЛЕРИЙ ЛАТЫПОВ · АВТОРСКИЕ ЭКСПЕДИЦИИ</div>
          <div>CONFIDENTIAL & PRIVATE CLIENTS ONLY</div>
        </div>
      </footer>
    </div>
  );
}
