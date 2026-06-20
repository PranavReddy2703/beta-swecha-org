import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactMap from './ContactMap.astro';

const meta: Meta<typeof ContactMap> = {
  title: 'Organisms/ContactMap',
  component: ContactMap,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive Google map component for the Contact page, featuring custom monochrome/invert filters and hover reveals.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactMap>;

export const Default: Story = {
  args: {
    title: 'Coordinates established',
  },
  decorators: [
    (Story) => `
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
};
