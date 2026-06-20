import type { Meta, StoryObj } from '@storybook-astro/framework';
import CategoryBadge from './CategoryBadge.astro';

const meta: Meta<typeof CategoryBadge> = {
  title: 'Atoms/CategoryBadge',
  component: CategoryBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Compact category badge with a star icon. Used in news cards and content sections. Supports cyan (primary) and green (secondary) variants.',
      },
    },
  },
  argTypes: {
    text: { control: 'text', description: 'Badge label text' },
    variant: {
      control: 'select',
      options: ['cyan', 'green'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'cyan' } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CategoryBadge>;

export const Cyan: Story = {
  args: { text: 'Technology', variant: 'cyan' },
};

export const Green: Story = {
  args: { text: 'Community', variant: 'green' },
};

export const BothVariants: Story = {
  render: () => `
    <div style="display: flex; gap: 12px; padding: 24px;">
      <span class="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase select-none border-primary-brand/25 bg-primary-brand/10 text-primary-brand">
        <svg class="h-3 w-3 flex-shrink-0 fill-primary-brand text-primary-brand" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/></svg>
        Technology
      </span>
      <span class="inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase select-none border-secondary-accent/25 bg-secondary-accent/10 text-secondary-accent">
        <svg class="h-3 w-3 flex-shrink-0 fill-secondary-accent text-secondary-accent" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z"/></svg>
        Community
      </span>
    </div>
  `,
};
