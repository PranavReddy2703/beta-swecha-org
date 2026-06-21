import type { Meta, StoryObj } from '@storybook-astro/framework';
import NavDropdown from './NavDropdown.astro';

const meta: Meta<typeof NavDropdown> = {
  title: 'Atoms/NavDropdown',
  component: NavDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Desktop navigation dropdown with hover-triggered menu. Shows a list of child links with icons, used for the Initiatives section.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Dropdown trigger label' },
    isActive: { control: 'boolean', description: 'Whether the parent route is active' },
    items: { control: 'object', description: 'Array of dropdown items with name, href, and optional icon SVG' },
  },
};

export default meta;

type Story = StoryObj<typeof NavDropdown>;

const starIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-slate-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>';
const calendarIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-slate-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>';

export const Default: Story = {
  args: {
    label: 'Initiatives',
    isActive: false,
    items: [
      { name: 'Vishwam AI', href: '/initiatives/vishwam-ai', icon: starIcon },
      { name: 'DevDays', href: '/initiatives/devdays', icon: calendarIcon },
      { name: 'Public Health', href: '/initiatives/public-health', icon: starIcon },
      { name: 'More', href: '/initiatives/more', icon: starIcon },
    ],
  },
};

export const ActiveParent: Story = {
  args: {
    label: 'Initiatives',
    isActive: true,
    items: [
      { name: 'Vishwam AI', href: '/initiatives/vishwam-ai', icon: starIcon },
      { name: 'DevDays', href: '/initiatives/devdays', icon: calendarIcon },
    ],
  },
  parameters: {
    docs: { description: { story: 'Dropdown with active parent indicator (shows underline and brand color).' } },
  },
};

export const SingleItem: Story = {
  args: {
    label: 'Resources',
    isActive: false,
    items: [
      { name: 'Documentation', href: '/docs', icon: starIcon },
    ],
  },
};
