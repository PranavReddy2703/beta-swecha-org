import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeaturedProjectCard from './FeaturedProjectCard.astro';

const meta: Meta<typeof FeaturedProjectCard> = {
  title: 'Molecules/FeaturedProjectCard',
  component: FeaturedProjectCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageLabel: { control: 'text' },
    image: { control: 'text' },
    link: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedProjectCard>;

export const Default: Story = {
  args: {
    title: 'Viswam AI',
    description: 'An open-source Telugu language model project designed to democratize artificial intelligence and local language processing for the Telugu community.',
    imageLabel: 'VISWAM_AI_PREVIEW',
    link: '#',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Swecha OS',
    description: 'A customized, localized GNU/Linux operating system built specifically for Telugu-speaking communities, empowering schools and rural areas with free software tools.',
    imageLabel: 'SWECHA_OS_PREVIEW',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1248&auto=format&fit=crop&q=80',
    link: '#',
  },
};
