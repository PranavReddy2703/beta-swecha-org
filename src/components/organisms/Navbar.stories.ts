import type { Meta, StoryObj } from '@storybook-astro/framework';
import Navbar from './Navbar.astro';

const meta: Meta<typeof Navbar> = {
  title: 'Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
