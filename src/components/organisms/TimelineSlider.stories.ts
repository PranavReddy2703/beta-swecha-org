import type { Meta, StoryObj } from '@storybook-astro/framework';
import TimelineSlider from './TimelineSlider.astro';

const meta: Meta<typeof TimelineSlider> = {
  title: 'Organisms/TimelineSlider',
  component: TimelineSlider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive horizontal node graph representing the timeline. Connects to the vertical scroll observer in the main Timeline.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    events: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineSlider>;

export const Default: Story = {
  args: {
    events: [
      { year: '2005', title: 'The Inception', description: 'Started the first Telugu OS' },
      { year: '2010', title: 'Community Growth', description: '100+ workshops' },
      { year: '2015', title: 'Bala Swecha', description: 'OS for schools' },
      { year: '2020', title: 'AI for Local Languages', description: 'Vishwam AI initiated' },
    ],
  },
  decorators: [
    (Story) => `
      <div style="padding: 48px 24px; max-width: 1000px; margin: 0 auto; background: var(--canvas-base);">
        ${Story()}
      </div>
    `,
  ],
};
