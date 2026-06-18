import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectCard from './ProjectCard.astro';

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' },
    status: { 
      control: 'select',
      options: ['Active', 'Completed', 'Ongoing']
    },
    link: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Active: Story = {
  args: {
    title: 'Viswam AI',
    description: 'An open-source Telugu language model project.',
    tags: ['AI', 'Telugu', 'Open Source'],
    status: 'Active',
    link: '#',
  },
};

export const Completed: Story = {
  args: {
    title: 'Swecha OS',
    description: 'A localized GNU/Linux distribution for Telugu users.',
    tags: ['OS', 'Linux', 'Localization'],
    status: 'Completed',
    link: '#',
  },
};
