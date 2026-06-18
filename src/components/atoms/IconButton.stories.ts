import type { Meta, StoryObj } from '@storybook-astro/framework';
import IconButton from './IconButton.astro';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    icon: { control: 'text' },
    ariaLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    ariaLabel: 'Arrow Right',
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    ariaLabel: 'Arrow Right',
  },
};
