import type { Meta, StoryObj } from '@storybook-astro/framework';
import MobileNavLink from './MobileNavLink.astro';

const meta: Meta<typeof MobileNavLink> = {
  title: 'Atoms/MobileNavLink',
  component: MobileNavLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
    isActive: { control: 'boolean' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof MobileNavLink>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'Home',
    isActive: false,
    index: 0,
  },
};

export const Active: Story = {
  args: {
    href: '#',
    label: 'Projects',
    isActive: true,
    index: 1,
  },
};
