import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactMap from './ContactMap.astro';

const meta: Meta<typeof ContactMap> = {
  title: 'Organisms/ContactMap',
  component: ContactMap,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactMap>;

export const Default: Story = {
  args: {
    title: 'Interactive Office Locator',
  },
};
