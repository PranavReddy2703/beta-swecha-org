import type { Meta, StoryObj } from '@storybook-astro/framework';
import IndexPage from './index.astro';

const meta: Meta<typeof IndexPage> = {
  title: 'Pages/Home',
  component: IndexPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The main landing page (Home) of the Swecha website.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof IndexPage>;

export const Default: Story = {};
