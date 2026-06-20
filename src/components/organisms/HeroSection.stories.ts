import type { Meta, StoryObj } from '@storybook-astro/framework';
import HeroSection from './HeroSection.astro';

const meta: Meta<typeof HeroSection> = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The main hero section of the home page. Retrieves translations via i18n and renders FeatureCards.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
