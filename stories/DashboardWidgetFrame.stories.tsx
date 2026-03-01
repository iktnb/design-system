import type { Meta, StoryObj } from "@storybook/react-vite";
import { DashboardWidgetFrame } from "../components/DashboardWidgetFrame";

const meta: Meta<typeof DashboardWidgetFrame> = {
  title: "Components/DashboardWidgetFrame",
  component: DashboardWidgetFrame,
  tags: ["autodocs"],
  args: {
    title: "Widget title",
    children: (
      <p className="m-0 text-sm text-slate-300">Widget content goes here.</p>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DashboardWidgetFrame>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: (
      <button
        className="cursor-pointer rounded-md border border-slate-400/40 bg-slate-900/40 px-2 py-1 text-xs text-slate-100"
        type="button"
      >
        Action
      </button>
    ),
  },
};
