# IKnow Design System

Themeable React UI kit for portfolio and admin-style applications. The default
look is `neon`, with quieter `admin-dark` and `admin-light` modes available
through the same components.

## Contents

- `theme.css` - Tailwind v4 entrypoint, theme variables, base styles, and
  component classes.
- `tokens.ts` - JS theme tokens for charts, canvas, and non-CSS consumers.
- `components/` - `Card`, `Button`/`GlowButton`, `Select`/`NeonSelect`,
  `ProgressButton`/`NeonProgressButton`, dashboard widgets, steppers, and cards.
- `icons/` - SVG React icons.
- `stories/` - Storybook examples with a theme toolbar.

## Theme Contract

Set the active theme on any parent element, usually `<html>`:

```html
<html data-ds-theme="neon">
```

Supported values:

- `neon` - default cyan/violet dark theme with glow.
- `admin-dark` - restrained dark dashboard theme.
- `admin-light` - light dashboard theme.

If `data-ds-theme` is missing, `neon` is used by the `:root` defaults.

## Using in a Project

Install the peer dependencies in the consuming app:

```bash
npm install tailwindcss @tailwindcss/postcss react react-dom
```

Import the theme from the app's main CSS file:

```css
@import "../design-system/theme.css";
```

If the consuming app has Tailwind classes outside the design-system folder,
add explicit sources near the import:

```css
@source "./";
@source "../design-system";
```

Use components from the package or copied/submodule path:

```tsx
import { Button, Card, Select, tokens } from "@/design-system";
```

Legacy names remain available:

```tsx
import { GlowButton, NeonProgressButton, NeonSelect } from "@/design-system";
```

## Tokens

```ts
import { designThemeNames, designThemes, tokens } from "./design-system";

console.log(tokens.defaultTheme); // "neon"
console.log(designThemeNames); // ["neon", "admin-dark", "admin-light"]
console.log(designThemes["admin-light"].colors.primary);
```

The old `tokens.colors` and `tokens.neon` fields still point to the default
neon values for backwards compatibility.

## Storybook

```bash
npm install
npm run storybook
npm run build-storybook
```

Use the toolbar theme picker to preview `neon`, `admin-dark`, and
`admin-light`.

## Submodule Usage

```bash
git submodule add https://github.com/iktnb/design-system.git design-system
git submodule update --init --recursive
```
