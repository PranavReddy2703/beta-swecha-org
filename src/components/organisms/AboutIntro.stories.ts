import type { Meta, StoryObj } from '@storybook-astro/framework';
import AboutIntro from './AboutIntro.astro';

const meta: Meta<typeof AboutIntro> = {
  title: 'Organisms/AboutIntro',
  component: AboutIntro,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AboutIntro>;

export const Default: Story = {};
