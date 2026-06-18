import type { Meta, StoryObj } from '@storybook-astro/framework';
import OpenStreetMap from './OpenStreetMap.astro';

const meta: Meta<typeof OpenStreetMap> = {
  title: 'Molecules/OpenStreetMap',
  component: OpenStreetMap,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof OpenStreetMap>;

export const Default: Story = {
  args: {},
  render: (args) => ({
    components: { OpenStreetMap },
    setup: `import OpenStreetMap from './OpenStreetMap.astro';`,
    template: `
      <div style="height: 400px; width: 100%;">
        <OpenStreetMap />
      </div>
    `,
  }),
};
