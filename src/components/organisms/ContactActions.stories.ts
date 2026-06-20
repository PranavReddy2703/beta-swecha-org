import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactActions from './ContactActions.astro';

const meta: Meta<typeof ContactActions> = {
  title: 'Organisms/ContactActions',
  component: ContactActions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Horizontal row of contact action pills used on the Contact page. Includes glowing background effects.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    emailLabel: { control: 'text', description: 'Label for email action' },
    phoneLabel: { control: 'text', description: 'Label for phone action' },
    internshipLabel: { control: 'text', description: 'Label for internship action' },
    directionsLabel: { control: 'text', description: 'Label for map directions action' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactActions>;

export const Default: Story = {
  args: {
    emailLabel: 'Email Us',
    phoneLabel: 'Call Office',
    internshipLabel: 'Internship Queries',
    directionsLabel: 'Get Directions',
  },
};
