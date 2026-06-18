import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactCTA from './ContactCTA.astro';

const meta: Meta<typeof ContactCTA> = {
  title: 'Organisms/ContactCTA',
  component: ContactCTA,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    projectsButtonText: { control: 'text' },
    joinButtonText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactCTA>;

export const Default: Story = {
  args: {
    title: 'Ready to build the future together?',
    description: 'Join our vibrant open-source community to work on projects that matter, learn from mentors, and contribute to society.',
    projectsButtonText: 'Explore Projects',
    joinButtonText: 'Join Community',
  },
};
