import type { Meta, StoryObj } from '@storybook-astro/framework';
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel.astro';

const meta: Meta<typeof FeaturedProjectsCarousel> = {
  title: 'Organisms/FeaturedProjectsCarousel',
  component: FeaturedProjectsCarousel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Horizontal scrolling carousel for FeaturedProjects. Includes drag to scroll and autoplay functionality.',
      },
    },
    layout: 'fullscreen',
  },
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
        title: 'Bala Swecha',
        description: 'An educational operating system designed for school children, loaded with learning tools and localized content.',
        imageLabel: 'Linux Distro',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Vishwam AI',
        description: 'Training an open-source large language model specialized in Telugu and other local languages.',
        imageLabel: 'AI/ML',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
        link: '#',
      },
      {
        title: 'Swecha GIS',
        description: 'A geographic information system for mapping public resources and enabling data-driven governance.',
        imageLabel: 'Mapping',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop',
        link: '#',
      },
    ],
  },
};
