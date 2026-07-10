import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Checkbox,
  Field,
  Input,
  SearchField,
  Textarea,
  TriStateField,
  type TriStateValue,
} from "../components";

const meta = {
  title: "Decision Desk/Actions and fields",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-6">
      <div className="flex flex-wrap gap-3">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="quiet">Quiet</Button>
        <Button variant="destructive">Archive</Button>
        <Button loading>Saving</Button>
        <Button disabled>Disabled</Button>
      </div>
      <Field label="Product name" required hint="Use a specific, scannable name.">
        <Input defaultValue="Portable mini label printer" />
      </Field>
      <Field label="Supplier URL" error="Enter a complete https:// URL.">
        <Input defaultValue="supplier.example" invalid />
      </Field>
      <Field label="Research notes">
        <Textarea defaultValue="Long-form notes remain readable and resize vertically." />
      </Field>
      <Checkbox
        label="Primary supplier"
        description="Used for pricing and margin calculations."
      />
    </div>
  ),
};

function InteractiveFields() {
  const [query, setQuery] = useState("label printer");
  const [state, setState] = useState<TriStateValue>("unknown");
  return (
    <div className="grid w-full max-w-xl gap-5">
      <SearchField
        label="Search products"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClear={() => setQuery("")}
      />
      <Field label="Checked on Amazon" hint="Unknown is different from No.">
        <TriStateField value={state} onChange={setState} />
      </Field>
    </div>
  );
}

export const Interactive: Story = { render: () => <InteractiveFields /> };
