import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReviewStepper } from "../components/ReviewStepper";

const STEPS = [
  {
    id: "inbox",
    title: "Empty Inbox",
    description: "Clarify all captured items.",
  },
  {
    id: "projects",
    title: "Check all Projects",
    description: "Scan active outcomes.",
  },
  {
    id: "next-actions",
    title: "Ensure every Project has NextAction",
    description: "Keep active projects actionable.",
  },
  {
    id: "waiting",
    title: "Review WaitingFor",
    description: "Track delegated loops.",
  },
  {
    id: "someday",
    title: "Clean Someday list",
    description: "Keep options intentional.",
  },
  {
    id: "close-loops",
    title: "Close completed loops",
    description: "Archive done commitments.",
  },
  {
    id: "intent",
    title: "Set intention for next week",
    description: "Define weekly focus.",
  },
];

const meta: Meta<typeof ReviewStepper> = {
  title: "Components/ReviewStepper",
  component: ReviewStepper,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px] p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    steps: STEPS,
    currentStep: 0,
  },
};

export default meta;
type Story = StoryObj<typeof ReviewStepper>;

export const Idle: Story = {};

export const InProgress: Story = {
  args: {
    currentStep: 3,
    completedStepIndexes: [0, 1, 2],
  },
};

export const Completed: Story = {
  args: {
    currentStep: 6,
    completedStepIndexes: [0, 1, 2, 3, 4, 5, 6],
  },
};
