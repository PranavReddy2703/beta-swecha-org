import type { Meta, StoryObj } from '@storybook-astro/framework';
import UpdateCard from './UpdateCard.astro';

const meta: Meta<typeof UpdateCard> = {
  title: 'Molecules/UpdateCard',
  component: UpdateCard,
  tags: ['autodocs'],
  argTypes: {
    titleKey: { control: 'text' },
    descKey: { control: 'text' },
    link: { control: 'text' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof UpdateCard>;

export const Default: Story = {
  args: {
    titleKey: 'news.update1.headline',
    descKey: 'news.update1.desc',
    link: '#',
    index: 0,
  },
};
