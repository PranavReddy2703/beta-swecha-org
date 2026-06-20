import type { Meta, StoryObj } from '@storybook-astro/framework';
import Navbar from './Navbar.astro';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Site-wide navigation bar. Features responsive glassmorphism, dropdowns, theme toggling, and language switching. In light mode, uses a soft sky blue glass theme (`rgba(224, 242, 254, 0.45)`).',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => `
      <div style="min-height: 400px; background: var(--canvas-base);">
        ${Story()}
      </div>
    `,
  ],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
