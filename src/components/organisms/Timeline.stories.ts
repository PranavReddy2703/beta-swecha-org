import type { Meta, StoryObj } from '@storybook-astro/framework';
import Timeline from './Timeline.astro';

const meta: Meta<typeof Timeline> = {
  title: 'Organisms/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {},
};
