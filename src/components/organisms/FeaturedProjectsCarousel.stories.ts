import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel.astro';

const meta: Meta<typeof FeaturedProjectsCarousel> = {
  title: 'Organisms/FeaturedProjectsCarousel',
  component: FeaturedProjectsCarousel,
  tags: ['autodocs'],
  argTypes: {
    projects: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedProjectsCarousel>;

export const Default: Story = {
  args: {
    projects: [
      {
        title: 'Viswam AI',
        description: 'An open-source Telugu language model project designed to democratize artificial intelligence and local language processing for the Telugu community.',
        imageLabel: 'VISWAM_AI_PREVIEW',
        link: '#',
      },
      {
        title: 'Swecha OS',
        description: 'A customized, localized GNU/Linux operating system built specifically for Telugu-speaking communities, empowering schools and rural areas with free software tools.',
        imageLabel: 'SWECHA_OS_PREVIEW',
        image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1248&auto=format&fit=crop&q=80',
        link: '#',
      },
      {
        title: 'Bala Swecha',
        description: 'An educational initiative providing free software tools, interactive educational games, and learning resources specifically adapted for primary school students.',
        imageLabel: 'BALA_SWECHA_PREVIEW',
        link: '#',
      }
    ],
  },
};
