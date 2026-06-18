import type { Meta, StoryObj } from '@storybook-astro/framework';
import PastEventCard from './PastEventCard.astro';

const meta: Meta<typeof PastEventCard> = {
  title: 'Events/PastEventCard',
  component: PastEventCard,
  tags: ['autodocs'],
  argTypes: {
    event: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof PastEventCard>;

export const Default: Story = {
  args: {
    event: {
      slug: 'swecha-os-meetup',
      title: 'Swecha OS Community Meetup',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
      date: '10 January 2026',
      venue: 'Ravindra Bharathi, Hyderabad',
    },
  },
};
