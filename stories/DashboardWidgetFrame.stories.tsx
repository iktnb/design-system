import type { Meta, StoryObj } from "@storybook/react-vite";
import { DashboardWidgetFrame } from "../components/DashboardWidgetFrame";

const meta: Meta<typeof DashboardWidgetFrame> = {
  title: "Components/DashboardWidgetFrame",
  component: DashboardWidgetFrame,
  tags: ["autodocs"],
  args: {
    title: "Widget title",
    children: (
      <p className="ds-text-muted m-0 text-sm">Widget content goes here.</p>
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
        className="ds-inner-panel ds-text cursor-pointer px-2 py-1 text-xs"
        type="button"
      >
        Action
      </button>
    ),
  },
};
