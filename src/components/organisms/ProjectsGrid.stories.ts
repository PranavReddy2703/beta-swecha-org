import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectsGrid from './ProjectsGrid.astro';

const meta: Meta<typeof ProjectsGrid> = {
  title: 'Organisms/ProjectsGrid',
  component: ProjectsGrid,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProjectsGrid>;

export const Default: Story = {};
