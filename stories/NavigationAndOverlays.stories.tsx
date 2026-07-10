import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Dialog, Pagination, TabPanel, Tabs } from "../components";

const meta = {
  title: "Decision Desk/Navigation and overlays",
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function NavigationExample() {
  const [page, setPage] = useState(4);
  const [tab, setTab] = useState("basics");
  return (
    <div className="grid max-w-3xl gap-6">
      <Tabs
        id="storybook-editor-sections"
        label="Editor sections"
        value={tab}
        onChange={setTab}
        items={[
          { value: "basics", label: "Basics" },
          { value: "competitors", label: "Competitors", badge: 4 },
          { value: "suppliers", label: "Suppliers", badge: 12 },
        ]}
      />
      <TabPanel value="basics" activeValue={tab} tabListId="storybook-editor-sections">Basics content</TabPanel>
      <TabPanel value="competitors" activeValue={tab} tabListId="storybook-editor-sections">Competitor content</TabPanel>
      <TabPanel value="suppliers" activeValue={tab} tabListId="storybook-editor-sections">Supplier content</TabPanel>
      <Pagination page={page} pageCount={12} onPageChange={setPage} />
    </div>
  );
}

export const Navigation: Story = { render: () => <NavigationExample /> };

function DialogExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open product editor</Button>
      <Dialog
        open={open}
        title="Edit a product with an exceptionally long name that must wrap safely"
        description="Focus is contained, Escape closes, and focus returns to the opener."
        size="large"
        onClose={() => setOpen(false)}
        footer={<><Button variant="quiet" onClick={() => setOpen(false)}>Cancel</Button><Button>Save changes</Button></>}
      >
        <div className="grid gap-4">
          {Array.from({ length: 10 }, (_, index) => (
            <p key={index}>Scrollable dialog content line {index + 1} keeps actions visible.</p>
          ))}
        </div>
      </Dialog>
    </>
  );
}

export const AccessibleDialog: Story = { render: () => <DialogExample /> };
