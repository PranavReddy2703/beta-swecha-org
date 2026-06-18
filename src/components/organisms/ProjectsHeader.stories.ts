import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectsHeader from './ProjectsHeader.astro';

const meta: Meta<typeof ProjectsHeader> = {
  title: 'Organisms/ProjectsHeader',
  component: ProjectsHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsHeader>;

export const Default: Story = {
  args: {
    title: 'Our Projects',
    description: 'Explore the various open source initiatives, tools, and platforms built by the Swecha community to empower people and promote software freedom.',
  },
};
