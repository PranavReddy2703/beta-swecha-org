import type { Meta, StoryObj } from '@storybook-astro/framework';
import EventTimeline from './EventTimeline.astro';

const meta: Meta<typeof EventTimeline> = {
  title: 'Events/EventTimeline',
  component: EventTimeline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Vertical snake-style timeline for displaying past events. Features a scrolling progress bar and alternating card placements.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    events: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof EventTimeline>;

export const Default: Story = {
  args: {
    events: [
      {
        slug: 'devdays-2024',
        title: 'Swecha DevDays 2024',
        shortDescription: 'The biggest open-source developer conference in the region.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
        date: 'Oct 15 - 17, 2024',
        venue: 'CBIT Campus, Hyderabad',
        category: 'Conference',
        past: true,
      },
      {
        slug: 'ai-hackday',
        title: 'AI for Social Good Hackday',
        shortDescription: '2000+ students building local language models and AI tools.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
        date: 'Aug 22, 2024',
        venue: 'Multiple Venues',
        category: 'AI',
        past: true,
      },
    ],
  },
};
