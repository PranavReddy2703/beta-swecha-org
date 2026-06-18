import type { Meta, StoryObj } from '@storybook-astro/framework';
import TimelineCard from './TimelineCard.astro';

const meta: Meta<typeof TimelineCard> = {
  title: 'Molecules/TimelineCard',
  component: TimelineCard,
  tags: ['autodocs'],
  argTypes: {
    year: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' },
    previewImage: { control: 'text' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineCard>;

export const Default: Story = {
  args: {
    year: '2024',
    title: 'Launch of Viswam AI',
    description: 'Swecha announced the draft license for Viswam AI, promoting open-source AI development.',
    tags: ['AI', 'Open Source'],
    index: 0,
  },
};

export const WithImage: Story = {
  args: {
    year: '2005',
    title: 'Swecha OS Released',
    description: 'The first localized Telugu OS was released to the public.',
    tags: ['OS', 'History'],
    previewImage: 'https://placehold.co/400x300/222/00d4ff?text=Swecha+OS',
    index: 1,
  },
};
