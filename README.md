# Premium Portfolio Design System

Дизайн-система в тёмной теме с акцентами cyan/violet и неоновыми эффектами. Можно скопировать папку `design-system/` в другой проект и подключить стили и компоненты.

## Содержимое

- **theme.css** — токены Tailwind v4 (`@theme`), базовые стили (`body`, заголовки), утилиты неона (`.neon-icon-cyan`, `.neon-glow-violet` и т.д.)
- **tokens.ts** — те же значения в JS (для графиков, canvas, не-Tailwind кода)
- **components/** — `Card`, `GlowButton`, `SectionReveal`
- **hooks/** — `useInView` (для SectionReveal)
- **icons/** — SVG-иконки (About, Tech, Projects, Contact, Email, LinkedIn, Github, Telegram)

## Подключение в новом проекте

### 1. Зависимости

- **Tailwind CSS v4** (и PostCSS с `@tailwindcss/postcss`)
- **React** (компоненты и хуки рассчитаны на React 18+)
- **TypeScript** (опционально, но типы уже есть)

### 2. Стили (Tailwind v4)

В главный CSS файл (например `app/globals.css`):

```css
@import "tailwindcss";

/* Вставь сюда содержимое design-system/theme.css
   (блок @theme { ... }, классы .neon-*, @layer base { ... })
   либо подключи файл, если сборка это поддерживает:
*/
/* @import "../design-system/theme.css"; */
```

Если импорт из папки не срабатывает, скопируй содержимое `theme.css` в свой `globals.css` после `@import "tailwindcss";`.

### 3. Шрифты

В `<head>` или в CSS подключи Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Orbitron:wght@500;700;800&display=swap"
  rel="stylesheet"
/>
```

- **Orbitron** — `--font-heading`
- **Exo 2** — `--font-body`

### 4. Компоненты и иконки

Скопируй папку `design-system` в проект и импортируй:

```tsx
import { Card, GlowButton, SectionReveal, useInView } from '@/design-system'
import { IconGithub, IconContact } from '@/design-system'
import { tokens } from '@/design-system'
```

Либо указывай пути до скопированной папки, например `./design-system` или `@/design-system`, в зависимости от алиасов.

### 5. Токены в JS

Если нужны цвета/шрифты вне Tailwind (графики, canvas, инлайновые стили):

```ts
import { tokens } from './design-system'

document.body.style.background = tokens.colors.background
// или tokens.neon.cyan.glow для boxShadow
```

## Токены (кратко)

| Токен | Назначение |
|-------|------------|
| `--color-background` | Фон страницы |
| `--color-card` | Фон карточек/панелей |
| `--color-accent-cyan` | Основной акцент (кнопки, подсветка) |
| `--color-accent-violet` | Второй акцент |
| `--color-primary` | Основной текст |
| `--font-heading` | Заголовки (Orbitron) |
| `--font-body` | Текст (Exo 2) |

Tailwind даёт классы: `bg-background`, `text-primary`, `text-accent-cyan`, `border-accent-violet`, `font-heading`, `bg-card` и т.д.

## Неоновые утилиты

- **Иконки:** `.neon-icon-cyan`, `.neon-icon-violet`
- **Блоки:** `.neon-glow-cyan`, `.neon-glow-violet`
- **Текст:** `.neon-text-glow-cyan`, `.neon-text-glow-violet`

Используй вместе с цветами: `text-accent-cyan neon-icon-cyan`.

## Структура папки

```
design-system/
  README.md           # эта инструкция
  index.ts            # реэкспорт компонентов, хуков, иконок, tokens
  theme.css           # тема и стили для Tailwind v4
  tokens.ts           # токены в JS
  components/
    Card.tsx
    GlowButton.tsx
    SectionReveal.tsx
    index.ts
  hooks/
    useInView.ts
  icons/
    IconAbout.tsx
    IconContact.tsx
    ...
    index.ts
```
