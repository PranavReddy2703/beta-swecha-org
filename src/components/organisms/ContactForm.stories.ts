import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactForm from './ContactForm.astro';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    nameLabel: { control: 'text' },
    emailLabel: { control: 'text' },
    subjectLabel: { control: 'text' },
    messageLabel: { control: 'text' },
    sendButtonText: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    title: 'Send a Message',
    subtitle: 'Get in touch with the Swecha core team. We will get back to you shortly.',
    nameLabel: 'Your Name',
    emailLabel: 'Email Address',
    subjectLabel: 'Subject',
    messageLabel: 'Your Message',
    sendButtonText: 'Send Message',
  },
};
