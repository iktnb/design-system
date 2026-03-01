# Premium Portfolio Design System

A dark-theme design system with cyan/violet accents and neon effects. Copy the `design-system/` folder into another project and wire up the styles and components.

## Contents

- **theme.css** — Tailwind v4 tokens (`@theme`), base styles (`body`, headings), neon utilities (`.neon-icon-cyan`, `.neon-glow-violet`, etc.)
- **tokens.ts** — Same values in JS (for charts, canvas, non-Tailwind code)
- **components/** — `Card`, `GlowButton`, `SectionReveal`
- **hooks/** — `useInView` (for SectionReveal)
- **icons/** — SVG icons (About, Tech, Projects, Contact, Email, LinkedIn, Github, Telegram)

## Using in a New Project

### 1. Dependencies

- **Tailwind CSS v4** (and PostCSS with `@tailwindcss/postcss`)
- **React** (components and hooks target React 18+)
- **TypeScript** (optional, but types are included)

### 2. Styles (Tailwind v4)

In your main CSS file (e.g. `app/globals.css`):

```css
@import "tailwindcss";

/* Paste the contents of design-system/theme.css here
   (@theme { ... }, .neon-* classes, @layer base { ... })
   or import the file if your build supports it:
*/
/* @import "../design-system/theme.css"; */
```

If importing from the folder fails, copy the contents of `theme.css` into your `globals.css` after `@import "tailwindcss";`.

### 3. Fonts

Add Google Fonts in `<head>` or in CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Orbitron:wght@500;700;800&display=swap"
  rel="stylesheet"
/>
```

- **Orbitron** — `--font-heading`
- **Exo 2** — `--font-body`

### 4. Components and Icons

Copy the `design-system` folder into your project and import:

```tsx
import { Card, GlowButton, SectionReveal, useInView } from "@/design-system";
import { IconGithub, IconContact } from "@/design-system";
import { tokens } from "@/design-system";
```

Or use paths to the copied folder, e.g. `./design-system` or `@/design-system`, depending on your aliases.

### 5. Tokens in JS

When you need colors/fonts outside Tailwind (charts, canvas, inline styles):

```ts
import { tokens } from "./design-system";

document.body.style.background = tokens.colors.background;
// or tokens.neon.cyan.glow for boxShadow
```

## Tokens (Summary)

| Token                   | Purpose                              |
| ----------------------- | ------------------------------------ |
| `--color-background`    | Page background                      |
| `--color-card`          | Card/panel background                |
| `--color-accent-cyan`   | Primary accent (buttons, highlights) |
| `--color-accent-violet` | Secondary accent                     |
| `--color-primary`       | Primary text                         |
| `--font-heading`        | Headings (Orbitron)                  |
| `--font-body`           | Body text (Exo 2)                    |

Tailwind exposes classes such as: `bg-background`, `text-primary`, `text-accent-cyan`, `border-accent-violet`, `font-heading`, `bg-card`, etc.

## Neon Utilities

- **Icons:** `.neon-icon-cyan`, `.neon-icon-violet`
- **Blocks:** `.neon-glow-cyan`, `.neon-glow-violet`
- **Text:** `.neon-text-glow-cyan`, `.neon-text-glow-violet`

Use with color classes: `text-accent-cyan neon-icon-cyan`.

## Folder Structure

```
design-system/
  README.md           # this guide
  index.ts            # re-exports components, hooks, icons, tokens
  theme.css           # theme and styles for Tailwind v4
  tokens.ts           # tokens in JS
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
