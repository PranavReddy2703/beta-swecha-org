import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectsHeader from './ProjectsHeader.astro';

const meta: Meta<typeof ProjectsHeader> = {
  title: 'Organisms/ProjectsHeader',
  component: ProjectsHeader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Header section for the Projects page.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsHeader>;

export const Default: Story = {
  args: {
    title: 'Swecha Projects',
    description: 'We build technology that solves real-world problems. Discover our open-source initiatives and community-driven projects.',
  },
};
