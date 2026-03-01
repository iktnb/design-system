import { type ComponentProps, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { NeonSelect } from "../components/NeonSelect";

const demoOptions = [
  { value: "all", label: "All Projects" },
  { value: "active", label: "Active" },
  { value: "on_hold", label: "On Hold" },
  { value: "done", label: "Done" },
] as const;

const meta: Meta<typeof NeonSelect> = {
  title: "Components/NeonSelect",
  component: NeonSelect,
  tags: ["autodocs"],
  args: {
    ariaLabel: "Project status filter",
    options: demoOptions,
    placeholder: "Select status",
  },
};

export default meta;
type Story = StoryObj<typeof NeonSelect>;

function DefaultNeonSelectStory(args: ComponentProps<typeof NeonSelect>) {
  const [value, setValue] = useState<(typeof demoOptions)[number]["value"]>(
    demoOptions[0].value,
  );

  return (
    <div className="w-72">
      <NeonSelect {...args} value={value} onChange={setValue} />
    </div>
  );
}

function DisabledOptionNeonSelectStory(args: ComponentProps<typeof NeonSelect>) {
  const [value, setValue] = useState("active");

  return (
    <div className="w-72">
      <NeonSelect
        {...args}
        value={value}
        onChange={setValue}
        options={[
          { value: "active", label: "Active" },
          { value: "on_hold", label: "On Hold", disabled: true },
          { value: "done", label: "Done" },
        ]}
      />
    </div>
  );
}

export const Default: Story = {
  render: (args) => <DefaultNeonSelectStory {...args} />,
};

export const WithDisabledOption: Story = {
  render: (args) => <DisabledOptionNeonSelectStory {...args} />,
};
