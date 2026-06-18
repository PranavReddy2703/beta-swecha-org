import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactActions from './ContactActions.astro';

const meta: Meta<typeof ContactActions> = {
  title: 'Organisms/ContactActions',
  component: ContactActions,
  tags: ['autodocs'],
  argTypes: {
    emailLabel: { control: 'text' },
    phoneLabel: { control: 'text' },
    internshipLabel: { control: 'text' },
    directionsLabel: { control: 'text' },
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
