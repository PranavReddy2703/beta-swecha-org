import type { Meta, StoryObj } from '@storybook-astro/framework';
import FilterPill from './FilterPill.astro';

const meta: Meta<typeof FilterPill> = {
  title: 'Atoms/FilterPill',
  component: FilterPill,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive filter pill button used in the events timeline for category-based filtering. Highlights with brand cyan on selection.',
      },
    },
  },
  argTypes: {
    category: { control: 'text', description: 'Filter category label' },
    iconSvg: { control: 'text', description: 'SVG path markup for the icon' },
  },
};

export default meta;

type Story = StoryObj<typeof FilterPill>;

const defaultIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />';

export const Default: Story = {
  args: {
    category: 'AI',
    iconSvg: defaultIcon,
  },
};

export const Workshop: Story = {
  args: {
    category: 'Workshop',
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />',
  },
};

export const Community: Story = {
  args: {
    category: 'Community',
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />',
  },
};

export const FilterRow: Story = {
  render: () => `
    <div style="display: flex; gap: 12px; padding: 24px; flex-wrap: wrap;">
      <button type="button" class="filter-pill group flex items-center gap-2 px-4 py-2 rounded-full border border-structural-borders/50 bg-card-bg/60 text-text-muted font-medium text-sm transition-all duration-300 hover:border-primary-brand/50 hover:text-primary-brand">
        <span class="flex-shrink-0"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span>
        <span>AI</span>
      </button>
      <button type="button" class="filter-pill group flex items-center gap-2 px-4 py-2 rounded-full border border-primary-brand/50 bg-primary-brand/10 text-primary-brand font-medium text-sm">
        <span class="flex-shrink-0"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></span>
        <span>Workshop</span>
      </button>
      <button type="button" class="filter-pill group flex items-center gap-2 px-4 py-2 rounded-full border border-structural-borders/50 bg-card-bg/60 text-text-muted font-medium text-sm">
        <span class="flex-shrink-0"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span>
        <span>Community</span>
      </button>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'A row of filter pills showing default and active states.' } },
  },
};
