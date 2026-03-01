import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const portfolioTheme = create({
  base: "dark",
  brandTitle: "IKnow Design System",
  colorPrimary: "#38BDF8",
  colorSecondary: "#A78BFA",
  appBg: "#0B0F19",
  appContentBg: "#111827",
  appBorderColor: "rgba(56, 189, 248, 0.2)",
  appBorderRadius: 12,
  textColor: "#E5E7EB",
  textInverseColor: "#0B0F19",
  barTextColor: "#9CA3AF",
  barSelectedColor: "#38BDF8",
  barBg: "#0F172A",
  inputBg: "#111827",
  inputBorder: "rgba(167, 139, 250, 0.35)",
  inputTextColor: "#E5E7EB",
  inputBorderRadius: 8,
});

addons.setConfig({
  theme: portfolioTheme,
  panelPosition: "right",
  sidebar: {
    showRoots: false,
  },
});
