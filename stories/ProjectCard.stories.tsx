import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ProjectCard,
  ProjectCardHealth,
  ProjectCardLinkedActionStatus,
  ProjectCardStatus,
} from "../components/ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[520px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Healthy: Story = {
  args: {
    title: "Launch portfolio site",
    status: ProjectCardStatus.Active,
    health: ProjectCardHealth.Healthy,
    linkedActions: [
      {
        id: "1",
        title: "Write homepage copy",
        status: ProjectCardLinkedActionStatus.Active,
        meta: "@computer",
      },
      {
        id: "2",
        title: "Collect hero images",
        status: ProjectCardLinkedActionStatus.Done,
        meta: "@home",
      },
    ],
  },
};

export const MissingAction: Story = {
  args: {
    title: "Prepare taxes",
    status: ProjectCardStatus.Active,
    health: ProjectCardHealth.MissingNextAction,
    linkedActions: [],
  },
};

export const Done: Story = {
  args: {
    title: "Renew passport",
    status: ProjectCardStatus.Done,
    health: ProjectCardHealth.Healthy,
    linkedActions: [
      {
        id: "3",
        title: "Submit appointment form",
        status: ProjectCardLinkedActionStatus.Done,
        meta: "@computer",
      },
    ],
  },
};
