import type { Meta, StoryObj } from '@storybook-astro/framework';
import SocialIcon from './SocialIcon.astro';

const meta: Meta<typeof SocialIcon> = {
  title: 'Atoms/SocialIcon',
  component: SocialIcon,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
    platform: { 
      control: 'select',
      options: ['github', 'gitlab', 'twitter', 'email']
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialIcon>;

export const Github: Story = {
  args: {
    href: 'https://github.com',
    label: 'GitHub',
    platform: 'github',
  },
};

export const Gitlab: Story = {
  args: {
    href: 'https://gitlab.com',
    label: 'GitLab',
    platform: 'gitlab',
  },
};

export const Twitter: Story = {
  args: {
    href: 'https://twitter.com',
    label: 'Twitter',
    platform: 'twitter',
  },
};

export const Email: Story = {
  args: {
    href: 'mailto:test@example.com',
    label: 'Email',
    platform: 'email',
  },
};
