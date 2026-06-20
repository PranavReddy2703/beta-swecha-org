import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactCTA from './ContactCTA.astro';

const meta: Meta<typeof ContactCTA> = {
  title: 'Organisms/ContactCTA',
  component: ContactCTA,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Call to Action section typically used at the bottom of the Contact page. Includes mesh gradient backgrounds and interactive shine effects.',
      },
    },
    layout: 'padded',
  },
  decorators: [
    (Story) => `
      <div style="max-width: 1200px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: 'text', description: 'Main CTA heading' },
    description: { control: 'text', description: 'Supporting text below the heading' },
    projectsButtonText: { control: 'text', description: 'Text for primary projects button' },
    joinButtonText: { control: 'text', description: 'Text for secondary join button' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactCTA>;

export const Default: Story = {
  args: {
    title: 'Ready to Make an Impact?',
    description: 'Join thousands of volunteers contributing to open-source software, digital freedom campaigns, and technology education.',
    projectsButtonText: 'Explore Projects',
    joinButtonText: 'Join the Community',
  },
};
