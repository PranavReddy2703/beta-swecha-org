import type { Meta, StoryObj } from '@storybook-astro/framework';
import LanguageSwitcher from './LanguageSwitcher.astro';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  args: {
    title: 'Select Language',
  },
  render: (args) => ({
    components: { LanguageSwitcher },
    setup: `import LanguageSwitcher from './LanguageSwitcher.astro';`,
    template: `
      <div style="padding: 2rem; min-height: 200px;">
        <LanguageSwitcher title="${args.title}" />
      </div>
    `,
  }),
};
