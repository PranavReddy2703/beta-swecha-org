import type { Meta, StoryObj } from '@storybook-astro/framework';
import TimelineSlider from './TimelineSlider.astro';

const meta: Meta<typeof TimelineSlider> = {
  title: 'Organisms/TimelineSlider',
  component: TimelineSlider,
  tags: ['autodocs'],
  argTypes: {
    events: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineSlider>;

export const Default: Story = {
  args: {
    events: [
      {
        year: '2005',
        title: 'Founding & Telugu OS Release',
        description: 'Swecha was founded to localize GNU/Linux solutions, bridging the digital divide with Telugu font development.'
      },
      {
        year: '2010',
        title: 'Vast Community Growth',
        description: 'Expanded community networks, hosting workshops and localizing key desktop tools for Telugu users.'
      },
      {
        year: '2015',
        title: 'Digital Literacy Drives',
        description: 'Launched massive education initiatives across schools to empower students using Free Software.'
      },
      {
        year: '2020',
        title: 'Emerging Tech Focus',
        description: 'Began tracks for AI, Python programming, and collaborating on global public data initiatives.'
      },
      {
        year: '2026',
        title: 'Modern Overhaul',
        description: 'Re-engineering the presentation layer using Astro and decoupled design architecture.'
      }
    ],
  },
};
