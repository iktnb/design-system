export const designThemeNames = ["neon", "admin-dark", "admin-light"] as const;

export type DesignThemeName = (typeof designThemeNames)[number];

const themeFonts = {
  neon: {
    heading: '"Orbitron", system-ui, sans-serif',
    body: '"Exo 2", system-ui, sans-serif',
  },
  admin: {
    heading: "Inter, ui-sans-serif, system-ui, sans-serif",
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
} as const;

export const designThemes = {
  neon: {
    colors: {
      background: "#0B0F19",
      surface: "#111827",
      surfaceMuted: "#0F172A",
      primary: "#38BDF8",
      secondary: "#A78BFA",
      text: "#E5E7EB",
      textMuted: "#9CA3AF",
      success: "#34D399",
      warning: "#FBBF24",
      danger: "#FB7185",
    },
    fonts: themeFonts.neon,
    radii: {
      card: 14,
      control: 10,
    },
  },
  "admin-dark": {
    colors: {
      background: "#0F172A",
      surface: "#111827",
      surfaceMuted: "#1F2937",
      primary: "#2DD4BF",
      secondary: "#60A5FA",
      text: "#F8FAFC",
      textMuted: "#94A3B8",
      success: "#22C55E",
      warning: "#F59E0B",
      danger: "#F43F5E",
    },
    fonts: themeFonts.admin,
    radii: {
      card: 10,
      control: 8,
    },
  },
  "admin-light": {
    colors: {
      background: "#F8FAFC",
      surface: "#FFFFFF",
      surfaceMuted: "#F1F5F9",
      primary: "#0F766E",
      secondary: "#2563EB",
      text: "#0F172A",
      textMuted: "#64748B",
      success: "#15803D",
      warning: "#B45309",
      danger: "#BE123C",
    },
    fonts: themeFonts.admin,
    radii: {
      card: 10,
      control: 8,
    },
  },
} as const;

export const defaultDesignTheme: DesignThemeName = "neon";

export const tokens = {
  defaultTheme: defaultDesignTheme,
  themeNames: designThemeNames,
  themes: designThemes,
  colors: {
    background: designThemes.neon.colors.background,
    card: designThemes.neon.colors.surface,
    accentCyan: designThemes.neon.colors.primary,
    accentViolet: designThemes.neon.colors.secondary,
    primary: designThemes.neon.colors.text,
  },
  fonts: designThemes.neon.fonts,
  neon: {
    cyan: {
      icon:
        "drop-shadow(0 0 4px #38BDF8) drop-shadow(0 0 12px #38BDF8) drop-shadow(0 0 24px #38BDF8)",
      glow:
        "0 0 20px rgba(56, 189, 248, 0.15), 0 0 40px rgba(56, 189, 248, 0.08)",
      textGlow:
        "0 0 12px rgba(56, 189, 248, 0.6), 0 0 24px rgba(56, 189, 248, 0.3)",
    },
    violet: {
      icon:
        "drop-shadow(0 0 4px #A78BFA) drop-shadow(0 0 12px #A78BFA) drop-shadow(0 0 24px #A78BFA)",
      glow:
        "0 0 20px rgba(167, 139, 250, 0.15), 0 0 40px rgba(167, 139, 250, 0.08)",
      textGlow:
        "0 0 12px rgba(167, 139, 250, 0.6), 0 0 24px rgba(167, 139, 250, 0.3)",
    },
  },
} as const;

export type DesignTokens = typeof tokens;
