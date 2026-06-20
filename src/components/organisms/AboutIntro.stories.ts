import type { Meta, StoryObj } from '@storybook-astro/framework';
import AboutIntro from './AboutIntro.astro';

const meta: Meta<typeof AboutIntro> = {
  title: 'Organisms/AboutIntro',
  component: AboutIntro,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Introduction section for the About page. Features staggered text animations and a random ambient outline glow. Relies on i18n for text content.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AboutIntro>;

export const Default: Story = {};
