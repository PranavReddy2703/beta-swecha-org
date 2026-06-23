import type { Meta, StoryObj } from "@storybook-astro/framework";
import NavLink from "./NavLink.astro";

const meta: Meta<typeof NavLink> = {
  title: "Atoms/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Desktop navigation link with animated underline indicator and hover background. Uses the brand gradient for the active indicator.",
      },
    },
  },
  argTypes: {
    href: { control: "text", description: "Navigation target URL" },
    label: { control: "text", description: "Link display text" },
    isActive: {
      control: "boolean",
      description: "Whether this page is currently active",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: { href: "/about", label: "About", isActive: false },
};

export const Active: Story = {
  args: { href: "/projects", label: "Projects", isActive: true },
  parameters: {
    docs: {
      description: {
        story:
          "Active state shows a wider underline indicator and brand-colored text.",
      },
    },
  },
};

export const NavigationBar: Story = {
  render: () => `
    <nav style="display: flex; align-items: center; gap: 8px; padding: 16px 24px; background: var(--secondary-bg); border-radius: 12px;">
      <a href="/about" class="nav-link nav-link-active" data-active="true" style="position:relative;display:inline-flex;align-items:center;padding:0.5rem 1rem;font-family:'Outfit',system-ui,sans-serif;font-size:0.95rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--primary-brand);text-decoration:none;border-radius:0.5rem;overflow:hidden;">
        <span style="position:relative;z-index:1;">About</span>
      </a>
      <a href="/projects" class="nav-link" style="position:relative;display:inline-flex;align-items:center;padding:0.5rem 1rem;font-family:'Outfit',system-ui,sans-serif;font-size:0.95rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);text-decoration:none;border-radius:0.5rem;overflow:hidden;">
        <span style="position:relative;z-index:1;">Projects</span>
      </a>
      <a href="/events" class="nav-link" style="position:relative;display:inline-flex;align-items:center;padding:0.5rem 1rem;font-family:'Outfit',system-ui,sans-serif;font-size:0.95rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);text-decoration:none;border-radius:0.5rem;overflow:hidden;">
        <span style="position:relative;z-index:1;">Events</span>
      </a>
      <a href="/contact" class="nav-link" style="position:relative;display:inline-flex;align-items:center;padding:0.5rem 1rem;font-family:'Outfit',system-ui,sans-serif;font-size:0.95rem;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);text-decoration:none;border-radius:0.5rem;overflow:hidden;">
        <span style="position:relative;z-index:1;">Contact</span>
      </a>
    </nav>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "Full desktop navigation bar showing one active link and three default links.",
      },
    },
  },
};
