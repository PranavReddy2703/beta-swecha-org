import type { Meta, StoryObj } from '@storybook-astro/framework';
import HeroSection from './HeroSection.astro';

const meta: Meta<typeof HeroSection> = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
