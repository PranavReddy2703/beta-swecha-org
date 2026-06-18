import type { Meta, StoryObj } from '@storybook-astro/framework';
import NavDropdown from './NavDropdown.astro';

const meta: Meta<typeof NavDropdown> = {
  title: 'Atoms/NavDropdown',
  component: NavDropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    items: { control: 'object' },
    isActive: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof NavDropdown>;

const mockItems = [
  {
    name: 'Vishwam AI',
    href: '/initiatives/vishwam-ai',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-slate-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
  },
  {
    name: 'Devdays',
    href: '/initiatives/devdays',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-slate-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  },
  {
    name: 'EHRS',
    href: '/initiatives/ehrs',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-slate-400"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  },
];

export const Default: Story = {
  args: {
    label: 'Initiatives',
    items: mockItems,
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Initiatives',
    items: mockItems,
    isActive: true,
  },
};
