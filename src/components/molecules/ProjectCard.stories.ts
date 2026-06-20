import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectCard from './ProjectCard.astro';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Grid-based project card. Displays title, description, a list of technology tags, and a status indicator (Live, Completed, or In Development) which affects the color of the badge.',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => `
      <div style="width: 400px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: 'text', description: 'Project title' },
    description: { control: 'text', description: 'Project description' },
    tags: { control: 'object', description: 'Array of tag strings' },
    status: {
      control: 'select',
      options: ['Live', 'Completed', 'In Development'],
      description: 'Project status affecting the badge color',
    },
    link: { control: 'text', description: 'Destination URL' },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const LiveStatus: Story = {
  args: {
    title: 'Bala Swecha',
    description: 'An educational operating system designed for school children, loaded with learning tools and localized content.',
    tags: ['Education', 'Linux', 'Kids'],
    status: 'Live',
    link: '#',
  },
};

export const CompletedStatus: Story = {
  args: {
    title: 'EHRS',
    description: 'Electronic Health Record System deployed during the pandemic for local hospitals.',
    tags: ['Healthcare', 'Web', 'React'],
    status: 'Completed',
    link: '#',
  },
};

export const InDevelopmentStatus: Story = {
  args: {
    title: 'Vishwam AI',
    description: 'Training an open-source large language model specialized in Telugu and other local languages.',
    tags: ['AI/ML', 'Python', 'NLP'],
    status: 'In Development',
    link: '#',
  },
};

export const ProjectGrid: Story = {
  decorators: [
    (Story) => `
      <div style="width: 850px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      <a href="#" class="project-card group relative flex flex-col h-full bg-card-bg/40 backdrop-blur-xl border border-structural-borders rounded-2xl p-6 transition-all hover:bg-elevated-surface/90 hover:-translate-y-1 hover:border-primary-brand/50">
        <div class="flex justify-between items-start mb-6">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border text-secondary-accent bg-secondary-accent/10 border-secondary-accent/20">
            <span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span></span>
            Live
          </span>
          <svg class="w-5 h-5 text-slate-500 group-hover:text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>
        <div class="flex-grow">
          <h3 class="text-xl font-bold text-text-main mb-3 group-hover:text-primary-brand">Bala Swecha</h3>
          <p class="text-sm text-text-muted mb-6">Educational OS for schools.</p>
        </div>
        <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-structural-borders/50">
          <span class="px-2.5 py-1 text-xs font-medium text-text-muted bg-secondary-bg rounded-md border border-structural-borders/80">Linux</span>
        </div>
      </a>
      <a href="#" class="project-card group relative flex flex-col h-full bg-card-bg/40 backdrop-blur-xl border border-structural-borders rounded-2xl p-6 transition-all hover:bg-elevated-surface/90 hover:-translate-y-1 hover:border-primary-brand/50">
        <div class="flex justify-between items-start mb-6">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border text-amber-600 bg-amber-600/10 border-amber-600/20">
            <span class="relative flex h-1.5 w-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span><span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-current"></span></span>
            In Development
          </span>
          <svg class="w-5 h-5 text-slate-500 group-hover:text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>
        <div class="flex-grow">
          <h3 class="text-xl font-bold text-text-main mb-3 group-hover:text-primary-brand">Vishwam AI</h3>
          <p class="text-sm text-text-muted mb-6">Local language LLM training.</p>
        </div>
        <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-structural-borders/50">
          <span class="px-2.5 py-1 text-xs font-medium text-text-muted bg-secondary-bg rounded-md border border-structural-borders/80">AI/ML</span>
        </div>
      </a>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'Example of how project cards look when placed in a CSS grid.' } },
  },
};
