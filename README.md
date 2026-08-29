# Timor-Leste Expedition — «Последняя Тишина»
Автономный премиальный веб-проект экспедиций Валерия Латыпова в Восточный Тимор (UHNW / C-Level сегмент).

## Стек технологий
- **Фреймворк:** Next.js 14 (App Router)
- **Стилизация:** Tailwind CSS + Custom CSS Variables
- **Типографика:** Inter / SF Pro Display
- **Деплой:** Vercel
- **Кастомный домен:** `timor.valerylatypov.com`

## Локальный запуск (при необходимости)
```bash
npm install
npm run dev
```

## Привязка домена в Vercel
1. Зайти в проект на Vercel → **Settings** → **Domains**.
2. Ввести домен: `timor.valerylatypov.com`.
3. Добавить в DNS вашего домена `valerylatypov.com`:
   - **Type:** `CNAME`
   - **Name:** `timor`
   - **Value:** `cname.vercel-dns.com`
