import type { Meta, StoryObj } from '@storybook-astro/framework';
import EventHero from './EventHero.astro';

const meta: Meta<typeof EventHero> = {
  title: 'Events/EventHero',
  component: EventHero,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Hero section for the Events index page. Features neon ambient glows and a prominent image banner.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof EventHero>;

export const Default: Story = {};
