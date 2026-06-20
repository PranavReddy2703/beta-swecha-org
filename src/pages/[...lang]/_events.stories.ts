import type { Meta, StoryObj } from '@storybook-astro/framework';
import EventsPage from './events.astro';

const meta: Meta<typeof EventsPage> = {
  title: 'Pages/Events',
  component: EventsPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Events index page. Lists upcoming and past events with a timeline layout.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof EventsPage>;

export const Default: Story = {};
