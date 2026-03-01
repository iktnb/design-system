import { fn } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { NeonProgressButton } from '../components/NeonProgressButton'

const meta: Meta<typeof NeonProgressButton> = {
  title: 'Components/NeonProgressButton',
  component: NeonProgressButton,
  tags: ['autodocs'],
  args: {
    progress: 0.75,
    ariaLabel: 'Scroll to next section',
    onClick: fn(),
    children: <span aria-hidden>&darr;</span>,
  },
}

export default meta
type Story = StoryObj<typeof NeonProgressButton>

export const Default: Story = {}

export const Empty: Story = {
  args: {
    progress: 0,
  },
}

export const Full: Story = {
  args: {
    progress: 1,
  },
}
