import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from '../components/ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[520px] p-4">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Healthy: Story = {
  args: {
    title: 'Launch portfolio site',
    status: 'active',
    health: 'healthy',
    linkedActions: [
      { id: '1', title: 'Write homepage copy', status: 'active', meta: '@computer' },
      { id: '2', title: 'Collect hero images', status: 'done', meta: '@home' },
    ],
  },
}

export const MissingAction: Story = {
  args: {
    title: 'Prepare taxes',
    status: 'active',
    health: 'missing_next_action',
    linkedActions: [],
  },
}

export const Done: Story = {
  args: {
    title: 'Renew passport',
    status: 'done',
    health: 'healthy',
    linkedActions: [
      { id: '3', title: 'Submit appointment form', status: 'done', meta: '@computer' },
    ],
  },
}
