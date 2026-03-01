import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  IconAbout,
  IconContact,
  IconEmail,
  IconGithub,
  IconLinkedIn,
  IconProjects,
  IconTech,
  IconTelegram,
} from '../icons'

function IconGrid({ size = 28 }: { size?: number }) {
  const items = [
    { name: 'IconAbout', Icon: IconAbout },
    { name: 'IconTech', Icon: IconTech },
    { name: 'IconProjects', Icon: IconProjects },
    { name: 'IconContact', Icon: IconContact },
    { name: 'IconEmail', Icon: IconEmail },
    { name: 'IconLinkedIn', Icon: IconLinkedIn },
    { name: 'IconGithub', Icon: IconGithub },
    { name: 'IconTelegram', Icon: IconTelegram },
  ]

  return (
    <div className="grid w-[520px] grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map(({ name, Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-card p-3"
        >
          <Icon size={size} className="text-accent-cyan neon-icon-cyan" />
          <span className="text-xs text-secondary">{name}</span>
        </div>
      ))}
    </div>
  )
}

const meta: Meta<typeof IconGrid> = {
  title: 'Icons/All Icons',
  component: IconGrid,
  tags: ['autodocs'],
  args: {
    size: 28,
  },
}

export default meta
type Story = StoryObj<typeof IconGrid>

export const Gallery: Story = {}

export const Large: Story = {
  args: {
    size: 40,
  },
}
