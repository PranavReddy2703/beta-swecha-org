import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeatureCard from './FeatureCard.astro';

const meta: Meta<typeof FeatureCard> = {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    iconSvg: { control: 'text' },
    accentColor: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

export const Primary: Story = {
  args: {
    id: 'feature-1',
    title: 'Decentralized Architecture',
    description: 'A modern Astro build providing optimal performance.',
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />',
    accentColor: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    id: 'feature-2',
    title: 'Community Driven',
    description: 'Built by and for the open source community.',
    iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />',
    accentColor: 'secondary',
  },
};
