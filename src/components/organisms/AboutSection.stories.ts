import type { Meta, StoryObj } from '@storybook-astro/framework';
import AboutSection from './AboutSection.astro';

const meta: Meta<typeof AboutSection> = {
  title: 'Organisms/AboutSection',
  component: AboutSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
