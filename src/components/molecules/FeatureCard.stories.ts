import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeatureCard from './FeatureCard.astro';

const meta: Meta<typeof FeatureCard> = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Bento grid feature card showing an icon, title, and description. Used in the About section to highlight key capabilities.',
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => `
      <div style="width: 320px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: 'text', description: 'Feature title' },
    description: { control: 'text', description: 'Feature description' },
    iconSvg: { control: 'text', description: 'SVG markup for the icon' },
    accentColor: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color theme for the icon and hover state',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

const codeIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />';
const globeIcon = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />';

export const PrimaryVariant: Story = {
  args: {
    title: 'Open Source',
    description: 'We believe in free software and open knowledge sharing for the benefit of everyone.',
    iconSvg: codeIcon,
    accentColor: 'primary',
  },
};

export const SecondaryVariant: Story = {
  args: {
    title: 'Global Community',
    description: 'Connecting developers, students, and professionals across the globe.',
    iconSvg: globeIcon,
    accentColor: 'secondary',
  },
};

export const CardGrid: Story = {
  decorators: [
    (Story) => `
      <div style="width: 700px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      <div class="group glass-white-card relative rounded-xl border border-structural-borders bg-card-bg/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-brand/40 hover:-translate-y-1">
        <div class="mb-4 text-primary-brand">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">${codeIcon}</svg>
        </div>
        <h3 class="text-lg font-bold text-text-main group-hover:text-primary-brand transition duration-200 mb-2">Open Source</h3>
        <p class="text-sm text-text-muted leading-relaxed">We believe in free software and open knowledge sharing for the benefit of everyone.</p>
      </div>
      <div class="group glass-white-card relative rounded-xl border border-structural-borders bg-card-bg/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary-brand/40 hover:-translate-y-1">
        <div class="mb-4 text-secondary-accent">
          <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">${globeIcon}</svg>
        </div>
        <h3 class="text-lg font-bold text-text-main group-hover:text-secondary-accent transition duration-200 mb-2">Global Community</h3>
        <p class="text-sm text-text-muted leading-relaxed">Connecting developers, students, and professionals across the globe.</p>
      </div>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'Example of how multiple feature cards align in a grid.' } },
  },
};
