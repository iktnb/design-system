/**
 * Design tokens (JS) — use for charts, canvas, or non-Tailwind code.
 * CSS theme lives in theme.css (@theme + neon utilities).
 */
export const tokens = {
  colors: {
    background: '#0B0F19',
    card: '#111827',
    accentCyan: '#38BDF8',
    accentViolet: '#A78BFA',
    primary: '#E5E7EB',
  },
  fonts: {
    heading: '"Orbitron", system-ui, sans-serif',
    body: '"Exo 2", system-ui, sans-serif',
  },
  neon: {
    cyan: {
      icon: 'drop-shadow(0 0 4px #38BDF8) drop-shadow(0 0 12px #38BDF8) drop-shadow(0 0 24px #38BDF8)',
      glow: '0 0 20px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.08)',
      textGlow: '0 0 12px rgba(56, 189, 248, 0.6), 0 0 24px rgba(56, 189, 248, 0.3)',
    },
    violet: {
      icon: 'drop-shadow(0 0 4px #A78BFA) drop-shadow(0 0 12px #A78BFA) drop-shadow(0 0 24px #A78BFA)',
      glow: '0 0 20px rgba(167, 139, 250, 0.15), 0 0 40px rgba(167, 139, 250, 0.08)',
      textGlow: '0 0 12px rgba(167, 139, 250, 0.6), 0 0 24px rgba(167, 139, 250, 0.3)',
    },
  },
} as const

export type DesignTokens = typeof tokens
