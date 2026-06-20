import type { Meta, StoryObj } from '@storybook-astro/framework';
import NewsPage from './news.astro';

const meta: Meta<typeof NewsPage> = {
  title: 'Pages/News',
  component: NewsPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The News index page. Lists recent news and updates in a grid format.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof NewsPage>;

export const Default: Story = {};
