import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactCard from './ContactCard.astro';

const meta: Meta<typeof ContactCard> = {
  title: 'Molecules/ContactCard',
  component: ContactCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    icon: {
      control: 'select',
      options: ['MapPin', 'Mail', 'Phone', 'GraduationCap'],
    },
    link: { control: 'text' },
    index: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactCard>;

export const Email: Story = {
  args: {
    title: 'Email Us',
    value: 'contact@swecha.org',
    icon: 'Mail',
    link: 'mailto:contact@swecha.org',
    index: 0,
  },
};

export const Phone: Story = {
  args: {
    title: 'Call Us',
    value: '+91 12345 67890',
    icon: 'Phone',
    link: 'tel:+911234567890',
    index: 1,
  },
};
