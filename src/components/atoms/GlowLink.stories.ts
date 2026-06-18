import type { Meta, StoryObj } from '@storybook-astro/framework';
import GlowLink from './GlowLink.astro';

const meta: Meta<typeof GlowLink> = {
  title: 'Atoms/GlowLink',
  component: GlowLink,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    class: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof GlowLink>;

export const Default: Story = {
  args: {
    href: '#',
  },
  render: (args) => ({
    components: { GlowLink },
    setup: `import GlowLink from './GlowLink.astro';`,
    template: `<GlowLink href="${args.href}">Click me for a glow effect</GlowLink>`,
  }),
};
