import type { Meta, StoryObj } from '@storybook-astro/framework';
import BackgroundDecorations from './BackgroundDecorations.astro';

const meta: Meta<typeof BackgroundDecorations> = {
  title: 'Organisms/BackgroundDecorations',
  component: BackgroundDecorations,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Procedural bird flight simulation with natural physics. Used as a dynamic background layer on the home page.',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => `
      <div style="min-height: 100vh; background: var(--canvas-base); position: relative; overflow: hidden;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 20; color: var(--text-main); font-family: 'Outfit', sans-serif; font-size: 2rem; font-weight: 800; text-align: center; pointer-events: none;">
          Background Simulation Running
        </div>
        ${Story()}
      </div>
    `,
  ],
};

export default meta;

type Story = StoryObj<typeof BackgroundDecorations>;

export const Default: Story = {};
