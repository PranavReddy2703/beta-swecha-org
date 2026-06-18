import type { Meta, StoryObj } from '@storybook-astro/framework';
import HamburgerMenu from './HamburgerMenu.astro';

const meta: Meta<typeof HamburgerMenu> = {
  title: 'Molecules/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  argTypes: {
    srLabel: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
  args: {
    srLabel: 'Open mobile menu',
  },
  render: (args) => ({
    components: { HamburgerMenu },
    setup: `import HamburgerMenu from './HamburgerMenu.astro';`,
    template: `
      <div style="padding: 2rem;">
        <HamburgerMenu srLabel="${args.srLabel}" />
        <p class="text-sm text-text-muted mt-4">(Only visible on mobile screens, resize down or remove md:hidden class to see)</p>
      </div>
    `,
  }),
};
