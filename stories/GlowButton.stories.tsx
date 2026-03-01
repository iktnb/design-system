import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlowButton } from "../components/GlowButton";

const meta: Meta<typeof GlowButton> = {
  title: "Components/GlowButton",
  component: GlowButton,
  tags: ["autodocs"],
  args: {
    children: "Open project",
    variant: "cyan",
  },
};

export default meta;
type Story = StoryObj<typeof GlowButton>;

export const Cyan: Story = {};

export const Violet: Story = {
  args: {
    variant: "violet",
    children: "Contact me",
  },
};

export const AsExternalLink: Story = {
  args: {
    href: "https://example.com",
    external: true,
    children: "Visit website",
  },
};
