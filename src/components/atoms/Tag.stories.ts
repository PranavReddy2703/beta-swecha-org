import type { Meta, StoryObj } from '@storybook-astro/framework';
import Tag from './Tag.astro';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { 
      control: 'select',
      options: ['default', 'project']
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Open Source',
    variant: 'default',
  },
};

export const Project: Story = {
  args: {
    label: 'AI & Machine Learning',
    variant: 'project',
  },
};
