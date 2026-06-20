import type { Meta, StoryObj } from '@storybook-astro/framework';
import MobileNavLink from './MobileNavLink.astro';

const meta: Meta<typeof MobileNavLink> = {
  title: 'Atoms/MobileNavLink',
  component: MobileNavLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Mobile navigation link with staggered slide-in animation and a vertical indicator bar. Used inside the mobile drawer menu.',
      },
    },
  },
  argTypes: {
    href: { control: 'text', description: 'Navigation target URL' },
    label: { control: 'text', description: 'Link label text' },
    isActive: { control: 'boolean', description: 'Whether this page is currently active' },
    index: { control: { type: 'range', min: 0, max: 10, step: 1 }, description: 'Item index for staggered animation delay' },
  },
};

export default meta;

type Story = StoryObj<typeof MobileNavLink>;

export const Default: Story = {
  args: { href: '/about', label: 'About', isActive: false, index: 0 },
};

export const Active: Story = {
  args: { href: '/projects', label: 'Projects', isActive: true, index: 1 },
};

export const NavigationStack: Story = {
  render: () => `
    <div style="padding: 16px; max-width: 320px; background: var(--secondary-bg); border-radius: 16px;">
      <a href="/about" class="mobile-nav-link mobile-nav-link-active" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;margin-bottom:0.25rem;border-radius:0.75rem;font-size:1rem;font-weight:600;color:var(--primary-brand);text-decoration:none;background:color-mix(in srgb, var(--elevated-surface) 40%, transparent);">
        <span style="width:3px;height:1.25rem;border-radius:2px;background:var(--primary-brand);box-shadow:0 0 10px rgba(0,212,255,0.5);flex-shrink:0;"></span>
        About
      </a>
      <a href="/projects" class="mobile-nav-link" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;margin-bottom:0.25rem;border-radius:0.75rem;font-size:1rem;font-weight:600;color:var(--text-primary);text-decoration:none;">
        <span style="width:3px;height:0;border-radius:2px;background:var(--primary-brand);flex-shrink:0;"></span>
        Projects
      </a>
      <a href="/events" class="mobile-nav-link" style="display:flex;align-items:center;gap:0.75rem;padding:0.75rem 1rem;margin-bottom:0.25rem;border-radius:0.75rem;font-size:1rem;font-weight:600;color:var(--text-primary);text-decoration:none;">
        <span style="width:3px;height:0;border-radius:2px;background:var(--primary-brand);flex-shrink:0;"></span>
        Events
      </a>
    </div>
  `,
  parameters: {
    docs: { description: { story: 'Stack of mobile nav links as displayed in the mobile drawer.' } },
  },
};
