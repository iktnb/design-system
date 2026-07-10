import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Alert,
  CompletenessMeter,
  EmptyState,
  FreshnessBadge,
  PricingSummary,
  ScoreBadge,
  SemanticBadge,
  SignalBreakdown,
  Skeleton,
  StatusBadge,
  Toast,
} from "../components";

const meta = {
  title: "Decision Desk/Research semantics",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const KnownUnknownAndPartial: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-6">
      <div className="flex flex-wrap gap-2">
        <SemanticBadge tone="unknown">Unknown</SemanticBadge>
        <SemanticBadge tone="negative">Known zero</SemanticBadge>
        <SemanticBadge tone="partial">Partial evidence</SemanticBadge>
        <SemanticBadge tone="positive">Confirmed</SemanticBadge>
        <FreshnessBadge updatedAt={new Date(Date.now() - 100 * 86400000)} />
      </div>
      <div className="flex flex-wrap gap-2">
        {(["draft", "researching", "ready", "rejected", "archived"] as const).map(
          (status) => <StatusBadge key={status} status={status} />,
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <ScoreBadge points={null} checked={false} />
        <ScoreBadge points={0} />
        <ScoreBadge points={2.25} />
        <ScoreBadge points={4.5} />
      </div>
      <CompletenessMeter known={2.5} total={5} />
      <SignalBreakdown
        items={[
          { label: "TikTok views", value: "1.8M", tone: "positive" },
          { label: "Google Trends", value: "Not checked", tone: "unknown" },
          { label: "Amazon rating", value: "3.6 / 5", tone: "negative" },
        ]}
      />
      <PricingSummary
        items={[
          { label: "Landed cost", value: "$8.40" },
          { label: "Selling price", value: "$29.00" },
          { label: "Gross profit", value: "$20.60", emphasis: "positive" },
        ]}
      />
    </div>
  ),
};

export const OperationalStates: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-4">
      <Alert title="Background refresh" tone="info">Existing results stay stable while fresh data loads.</Alert>
      <Alert title="Could not load products" tone="danger">Retry without losing the current filters.</Alert>
      <Skeleton className="h-24 w-full" label="Loading product rows" />
      <EmptyState title="No matching products" description="Clear one or more filters to broaden the queue." />
      <Toast title="Product archived" description="The product moved to the archived view." actionLabel="Undo" onAction={() => undefined} />
    </div>
  ),
};
