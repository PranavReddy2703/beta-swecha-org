import type { Meta, StoryObj } from '@storybook-astro/framework';
import Badge from './Badge.astro';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Multi-variant badge component used for hero labels, status indicators, tags, and featured markers.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Badge text content' },
    variant: {
      control: 'select',
      options: ['hero', 'status', 'tag', 'featured'],
      description: 'Visual variant of the badge',
      table: { defaultValue: { summary: 'tag' } },
    },
    class: { control: 'text', description: 'Additional CSS classes' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Hero: Story = {
  args: { label: 'SYSTEM ACTIVE: ELECTRIC CYAN MATRIX', variant: 'hero' },
};

export const Status: Story = {
  args: { label: 'Active', variant: 'status' },
};

export const Tag: Story = {
  args: { label: 'Astro', variant: 'tag' },
};

export const Featured: Story = {
  args: { label: 'FEATURED', variant: 'featured' },
};

export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding: 24px;">
      <span class="inline-flex items-center gap-1.5 rounded-full border border-secondary-accent/30 bg-secondary-accent/10 px-3 py-1 text-xs font-semibold tracking-wider text-secondary-accent uppercase animate-pulse">Hero Badge</span>
      <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full border"><span class="w-1.5 h-1.5 rounded-full bg-current"></span>Active</span>
      <span class="badge badge-outline border-structural-borders/60 text-text-muted text-[11px] font-semibold px-2.5 py-1">Tag</span>
      <span class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-black bg-primary-brand rounded-full shadow-[0_0_15px_rgba(0,212,255,0.6)]">FEATURED</span>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'All badge variants displayed side by side for comparison.' } },
  },
};
