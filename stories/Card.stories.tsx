import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "Card content",
  },
  decorators: [
    (Story) => (
      <div className="w-[320px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithBody: Story = {
  args: {
    children: (
      <div className="space-y-2">
        <h3 className="font-heading text-lg text-primary">Project Card</h3>
        <p className="text-sm text-secondary">
          Reusable card with glassmorphism and subtle neon hover.
        </p>
      </div>
    ),
  },
};
