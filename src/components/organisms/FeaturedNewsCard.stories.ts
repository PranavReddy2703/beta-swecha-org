import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeaturedNewsCard from './FeaturedNewsCard.astro';

const meta: Meta<typeof FeaturedNewsCard> = {
  title: 'Organisms/FeaturedNewsCard',
  component: FeaturedNewsCard,
  tags: ['autodocs'],
  argTypes: {
    category: { control: 'text' },
    buttonText: { control: 'text' },
    slides: { control: 'object' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedNewsCard>;

export const Default: Story = {
  args: {
    category: 'FEATURED',
    buttonText: 'Read Story',
    index: 0,
    slides: [
      {
        title: "Building India's Open AI Future",
        description: "Swecha is helping shape India's open and community-driven AI ecosystem with localized language models and community datasets.",
        link: "#",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
      },
      {
        title: "Telangana Launches Datathon for Telugu LLM",
        description: "A statewide community data collection drive and hackathon aimed at building the largest open dataset for the Telugu language.",
        link: "#",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=80"
      },
      {
        title: "VISWAM.AI Releases Draft Open AI License",
        description: "A draft licensing framework promoting responsible, transparent, and community-owned AI models for public interest.",
        link: "#",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
      }
    ],
  },
};
