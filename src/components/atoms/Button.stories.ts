import type { Meta, StoryObj } from '@storybook-astro/framework';
import Button from './Button.astro';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Explore Projects',
    variant: 'primary',
    href: '#',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Learn More',
    variant: 'secondary',
    href: '#',
  },
};

export const DisabledHoverSimulation: Story = {
  args: {
    label: 'Disabled state (CSS check)',
    variant: 'secondary',
    href: '#',
    class: 'opacity-50 pointer-events-none',
  },
};
