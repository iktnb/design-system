import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionReveal } from '../components/SectionReveal'
import { Card } from '../components/Card'

const meta: Meta<typeof SectionReveal> = {
  title: 'Components/SectionReveal',
  component: SectionReveal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[420px] p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SectionReveal>

export const Default: Story = {
  args: {
    children: (
      <Card className="p-4">
        <p className="text-primary">This block reveals on first viewport entry.</p>
      </Card>
    ),
  },
}
