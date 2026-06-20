import type { Meta, StoryObj } from '@storybook-astro/framework';
import TimelineConnector from './TimelineConnector.astro';

const meta: Meta<typeof TimelineConnector> = {
  title: 'Events/TimelineConnector',
  component: TimelineConnector,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Visual connector lines and dots used in the EventTimeline to connect cards to the central timeline spine. (Note: Primarily visible in desktop views)',
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story) => `
      <div style="position: relative; width: 600px; height: 100px; background: var(--canvas-base); border: 1px dashed var(--structural-borders);">
        <!-- Mock center line -->
        <div style="position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: var(--primary-brand); transform: translateX(-50%);"></div>
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    isLeft: { control: 'boolean' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineConnector>;

export const LeftConnector: Story = {
  args: {
    isLeft: true,
    index: 0,
  },
};

export const RightConnector: Story = {
  args: {
    isLeft: false,
    index: 1,
  },
};
