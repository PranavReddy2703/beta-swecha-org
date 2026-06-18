import type { Meta, StoryObj } from '@storybook-astro/framework';
import NavLink from './NavLink.astro';

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
    isActive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: '#',
    label: 'About',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: '#',
    label: 'Projects',
    isActive: true,
  },
};
