import type { Meta, StoryObj } from '@storybook-astro/framework';
import BackgroundDecorations from './BackgroundDecorations.astro';

const meta: Meta<typeof BackgroundDecorations> = {
  title: 'Organisms/BackgroundDecorations',
  component: BackgroundDecorations,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BackgroundDecorations>;

export const Default: Story = {
  args: {},
};
