import type { Meta, StoryObj } from '@storybook-astro/framework';
import CategoryBadge from './CategoryBadge.astro';

const meta: Meta<typeof CategoryBadge> = {
  title: 'Atoms/CategoryBadge',
  component: CategoryBadge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: 'select',
      options: ['cyan', 'green'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CategoryBadge>;

export const Cyan: Story = {
  args: {
    text: 'DATATHON',
    variant: 'cyan',
  },
};

export const Green: Story = {
  args: {
    text: 'FEATURED',
    variant: 'green',
  },
};
