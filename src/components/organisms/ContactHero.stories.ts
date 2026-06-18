import type { Meta, StoryObj } from '@storybook-astro/framework';
import ContactHero from './ContactHero.astro';

const meta: Meta<typeof ContactHero> = {
  title: 'Organisms/ContactHero',
  component: ContactHero,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ContactHero>;

export const Default: Story = {
  args: {
    title: 'Connect with Swecha',
    subtitle: 'Have a question, feedback, or want to collaborate? Reach out to us through any of the channels below or fill out the contact form.',
  },
};
