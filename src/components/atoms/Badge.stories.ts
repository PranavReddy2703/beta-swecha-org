import type { Meta, StoryObj } from '@storybook-astro/framework';
import Badge from './Badge.astro';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: 'select',
      options: ['hero', 'status', 'tag', 'featured'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Hero: Story = {
  args: {
    text: 'SYSTEM ACTIVE: ELECTRIC CYAN MATRIX',
    variant: 'hero',
  },
};

export const Status: Story = {
  args: {
    text: 'Active',
    variant: 'status',
  },
};

export const Tag: Story = {
  args: {
    text: 'Astro',
    variant: 'tag',
  },
};

export const Featured: Story = {
  args: {
    text: 'FEATURED',
    variant: 'featured',
  },
};