import type { Meta, StoryObj } from '@storybook-astro/framework';
import LanguageSwitcher from './LanguageSwitcher.astro';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdown component for selecting the site language. Uses the LangOption atom and i18n utilities.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text', description: 'Tooltip text for the toggle button' },
  },
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  args: {
    title: 'Select Language',
  },
};
