import type { Meta, StoryObj } from '@storybook-astro/framework';
import OpenStreetMap from './OpenStreetMap.astro';

const meta: Meta<typeof OpenStreetMap> = {
  title: 'Molecules/OpenStreetMap',
  component: OpenStreetMap,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive Leaflet map component with custom dark mode tiles, pulsing cyan marker, and deep-linked action buttons for navigation. Warning: Due to Leaflet\'s reliance on the window object, this might not render fully interactively in the Docs view without a browser environment, but works in the Canvas.',
      },
    },
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof OpenStreetMap>;

export const Default: Story = {
  decorators: [
    (Story) => `
      <div style="max-width: 800px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
};
