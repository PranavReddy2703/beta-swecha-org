import type { Meta, StoryObj } from '@storybook-astro/framework';
import ProjectsGrid from './ProjectsGrid.astro';

const meta: Meta<typeof ProjectsGrid> = {
  title: 'Organisms/ProjectsGrid',
  component: ProjectsGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Container for ProjectCards on the Projects page. Provides responsive grid layout.',
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsGrid>;

export const Default: Story = {
  render: () => `
    <section class="py-16 md:py-24 relative">
      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div style="height: 250px; background: var(--card-bg); border: 1px solid var(--structural-borders); border-radius: 16px; display: flex; align-items: center; justify-content: center;">Project Card</div>
          <div style="height: 250px; background: var(--card-bg); border: 1px solid var(--structural-borders); border-radius: 16px; display: flex; align-items: center; justify-content: center;">Project Card</div>
          <div style="height: 250px; background: var(--card-bg); border: 1px solid var(--structural-borders); border-radius: 16px; display: flex; align-items: center; justify-content: center;">Project Card</div>
          <div style="height: 250px; background: var(--card-bg); border: 1px solid var(--structural-borders); border-radius: 16px; display: flex; align-items: center; justify-content: center;">Project Card</div>
        </div>
      </div>
    </section>
  `,
};
