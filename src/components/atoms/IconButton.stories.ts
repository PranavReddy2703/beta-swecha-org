import type { Meta, StoryObj } from "@storybook-astro/framework";
import IconButton from "./IconButton.astro";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Circular icon button with radial gradient hover glow. Used for toolbar actions (theme toggle, language switcher, hamburger menu).",
      },
    },
  },
  argTypes: {
    id: { control: "text", description: "Button ID for JS targeting" },
    title: { control: "text", description: "Tooltip text" },
    ariaLabel: {
      control: "text",
      description: "Accessible label for screen readers",
    },
    class: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    title: "Settings",
    ariaLabel: "Open settings",
  },
  render: (args) => `
    <button class="action-btn" title="${args.title}" aria-label="${args.ariaLabel}" style="
      display: inline-flex; align-items: center; justify-content: center;
      width: 2.25rem; height: 2.25rem; border-radius: 9999px;
      border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05);
      color: var(--text-muted); cursor: pointer; transition: all 0.3s ease;
    ">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
  `,
};

export const ThemeToggle: Story = {
  args: {
    title: "Toggle theme",
    ariaLabel: "Switch between dark and light mode",
  },
  render: (args) => `
    <button class="action-btn" title="${args.title}" aria-label="${args.ariaLabel}" style="
      display: inline-flex; align-items: center; justify-content: center;
      width: 2.25rem; height: 2.25rem; border-radius: 9999px;
      border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05);
      color: var(--text-muted); cursor: pointer;
    ">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  `,
};

export const ButtonGroup: Story = {
  render: () => `
    <div style="display: flex; gap: 8px; padding: 24px;">
      <button class="action-btn" title="Language" style="display: inline-flex; align-items: center; justify-content: center; width: 2.25rem; height: 2.25rem; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: var(--text-muted); cursor: pointer;">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
      </button>
      <button class="action-btn" title="Theme" style="display: inline-flex; align-items: center; justify-content: center; width: 2.25rem; height: 2.25rem; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.05); color: var(--text-muted); cursor: pointer;">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
      </button>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Navbar action button group as it appears in the toolbar.",
      },
    },
  },
};
