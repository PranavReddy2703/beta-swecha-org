import type { Meta, StoryObj } from '@storybook-astro/framework';
import ThemeToggle from './ThemeToggle.astro';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Molecules/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {
    title: 'Toggle Theme',
  },
};
