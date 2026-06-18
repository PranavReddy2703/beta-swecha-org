import type { Meta, StoryObj } from '@storybook-astro/framework';
import NewsCard from './NewsCard.astro';

const meta: Meta<typeof NewsCard> = {
  title: 'Molecules/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
  argTypes: {
    titleKey: { control: 'text' },
    descKey: { control: 'text' },
    buttonTextKey: { control: 'text' },
    link: { control: 'text' },
    image: { control: 'text' },
    gridClass: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
  args: {
    titleKey: 'news.card1.headline',
    descKey: 'news.card1.desc',
    buttonTextKey: 'news.btn.read',
    link: '#',
    image: 'https://placehold.co/600x400/222/00d4ff?text=News+Image',
  },
};
