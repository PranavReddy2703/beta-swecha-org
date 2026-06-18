import type { Meta, StoryObj } from '@storybook-astro/framework';
import FilterPill from './FilterPill.astro';

const meta: Meta<typeof FilterPill> = {
  title: 'Atoms/FilterPill',
  component: FilterPill,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    iconSvg: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof FilterPill>;

export const Default: Story = {
  args: {
    category: 'Education',
    iconSvg: '<path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>',
  },
};
