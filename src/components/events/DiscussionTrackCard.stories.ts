import type { Meta, StoryObj } from '@storybook-astro/framework';
import DiscussionTrackCard from './DiscussionTrackCard.astro';

const meta: Meta<typeof DiscussionTrackCard> = {
  title: 'Events/DiscussionTrackCard',
  component: DiscussionTrackCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof DiscussionTrackCard>;

export const Default: Story = {
  args: {
    title: 'Harnessing Open Source AI',
    description: 'Exploring transparent, accountable, and inclusive AI through open technologies and community collaboration.',
    index: 0,
  },
};

export const SecondTrack: Story = {
  args: {
    title: 'Balancing AI Innovation & Copyright',
    description: 'Examining licensing frameworks, governance models, copyright implications, and responsible AI innovation.',
    index: 1,
  },
};
