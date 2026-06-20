import type { Meta, StoryObj } from '@storybook-astro/framework';
import Tag from './Tag.astro';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Small tag pill for categorizing projects or news. Supports default and project-specific variants.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Tag label text' },
    variant: {
      control: 'select',
      options: ['default', 'project'],
      description: 'Visual variant of the tag',
      table: { defaultValue: { summary: 'default' } },
    },
    class: { control: 'text', description: 'Additional CSS classes' },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { label: 'Tech', variant: 'default' },
};

export const ProjectVariant: Story = {
  args: { label: 'Web', variant: 'project' },
};

export const TagGroup: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; padding: 24px;">
      <span class="badge badge-outline border-structural-borders/60 text-text-muted text-[11px] font-semibold px-2.5 py-1">Community</span>
      <span class="badge badge-outline border-structural-borders/60 text-text-muted text-[11px] font-semibold px-2.5 py-1">Open Source</span>
      <span class="badge badge-outline border-structural-borders/60 text-text-muted text-[11px] font-semibold px-2.5 py-1">Events</span>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'Group of default tags.' } },
  },
};

export const ProjectTagGroup: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; padding: 24px;">
      <span class="px-2.5 py-1 text-xs font-medium text-slate-300 bg-secondary-bg rounded-md border border-structural-borders/80 group-hover:border-primary-brand/30 transition-colors duration-300">Astro</span>
      <span class="px-2.5 py-1 text-xs font-medium text-slate-300 bg-secondary-bg rounded-md border border-structural-borders/80 group-hover:border-primary-brand/30 transition-colors duration-300">Tailwind</span>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'Group of project tags.' } },
  },
};
