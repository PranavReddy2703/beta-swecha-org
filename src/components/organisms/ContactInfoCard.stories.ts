import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactInfoCard from './ContactInfoCard.astro';

const meta: Meta<typeof ContactInfoCard> = {
  title: 'Organisms/ContactInfoCard',
  component: ContactInfoCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    icon: {
      control: 'select',
      options: ['MapPin', 'Mail', 'Phone', 'GraduationCap'],
    },
    link: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactInfoCard>;

export const OfficeLocation: Story = {
  args: {
    title: 'Our Office',
    content: 'Swecha, Gachibowli,\nHyderabad, Telangana, India',
    icon: 'MapPin',
    link: 'https://maps.google.com/?q=Swecha+Gachibowli+Hyderabad',
  },
};

export const GeneralEmail: Story = {
  args: {
    title: 'General Inquiries',
    content: 'reachus@swecha.net',
    icon: 'Mail',
    link: 'mailto:reachus@swecha.net',
  },
};

export const OfficePhone: Story = {
  args: {
    title: 'Phone Support',
    content: '+91 89775 03615',
    icon: 'Phone',
    link: 'tel:+918977503615',
  },
};

export const Internships: Story = {
  args: {
    title: 'Internships',
    content: 'internships@swecha.org',
    icon: 'GraduationCap',
    link: 'mailto:internships@swecha.org',
  },
};
