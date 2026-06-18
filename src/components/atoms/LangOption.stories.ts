import type { Meta, StoryObj } from '@storybook-astro/framework';
import LangOption from './LangOption.astro';

const meta: Meta<typeof LangOption> = {
  title: 'Atoms/LangOption',
  component: LangOption,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    name: { control: 'text' },
    isActive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof LangOption>;

export const Default: Story = {
  args: {
    href: '/te',
    name: 'తెలుగు',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: '/en',
    name: 'English',
    isActive: true,
  },
};
