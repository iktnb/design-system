import "../theme.css";
import React from "react";
import { create } from "storybook/theming";

const docsTheme = create({
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

export const globalTypes = {
  dsTheme: {
    name: "Theme",
    description: "Design system theme mode",
    defaultValue: "neon",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "neon", title: "Neon" },
        { value: "admin-dark", title: "Admin dark" },
        { value: "admin-light", title: "Admin light" },
      ],
      dynamicTitle: true,
    },
  },
};

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.dsTheme || "neon";

      if (typeof document !== "undefined") {
        document.documentElement.dataset.dsTheme = theme;
      }

      return React.createElement(
        "div",
        {
          "data-ds-theme": theme,
          className: "min-h-screen bg-background p-6 text-primary",
        },
        React.createElement(Story),
      );
    },
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "portfolio-dark",
      values: [
        { name: "portfolio-dark", value: "#0a0f1c" },
        { name: "white", value: "#ffffff" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      theme: docsTheme,
    },
  },
};

export default preview;
