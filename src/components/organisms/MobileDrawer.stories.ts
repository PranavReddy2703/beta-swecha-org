import type { Meta, StoryObj } from '@storybook-astro/framework';
import MobileDrawer from './MobileDrawer.astro';

const meta: Meta<typeof MobileDrawer> = {
  title: 'Organisms/MobileDrawer',
  component: MobileDrawer,
  tags: ['autodocs'],
  argTypes: {
    navItems: { control: 'object' },
    isCurrentPage: { control: 'none' },
  },
};

export default meta;

type Story = StoryObj<typeof MobileDrawer>;

const mockNavItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  {
    name: 'Initiatives',
    href: '/initiatives',
    isDropdown: true,
    children: [
      { name: 'Vishwam AI', href: '/initiatives/vishwam-ai' },
      { name: 'Devdays', href: '/initiatives/devdays' },
      { name: 'EHRS', href: '/initiatives/ehrs' },
    ],
  },
  { name: 'Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const Default: Story = {
  args: {
    navItems: mockNavItems,
    isCurrentPage: (href: string) => href === '/about',
  },
};
