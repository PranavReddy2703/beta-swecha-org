import type { Meta, StoryObj } from "@storybook-astro/framework";
import Button from "./Button.astro";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Primary and secondary CTA button component. Primary uses the brand cyan fill, secondary uses a glass outline style.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Button visual variant",
      table: { defaultValue: { summary: "primary" } },
    },
    label: { control: "text", description: "Button text label" },
    href: { control: "text", description: "Link destination" },
    target: {
      control: "select",
      options: ["_self", "_blank"],
      description: "Link target",
    },
    class: {
      control: "text",
      description: "Additional CSS classes for size/shadow overrides",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Explore Projects",
    variant: "primary",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    label: "Learn More",
    variant: "secondary",
    href: "#",
  },
};

export const PrimaryWithGlow: Story = {
  args: {
    label: "Register Now",
    variant: "primary",
    href: "#",
    class:
      "px-8 py-4 shadow-[0_0_30px_rgba(0,212,255,0.25)] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)]",
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button with enhanced glow shadow, used in hero CTAs.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    variant: "secondary",
    href: "#",
    class: "opacity-50 pointer-events-none cursor-not-allowed",
  },
  parameters: {
    docs: {
      description: { story: "Simulated disabled state via CSS classes." },
    },
  },
};

export const ButtonPair: Story = {
  render: () => `
    <div style="display: flex; gap: 16px; padding: 24px;">
      <a href="#" class="inline-flex items-center justify-center rounded-lg bg-primary-brand px-6 py-3.5 text-base font-bold text-[var(--primary-btn-text)] shadow-lg shadow-primary-brand/20 transition-all duration-300 hover:bg-hover-brand hover:shadow-hover-brand/30 hover:-translate-y-0.5 active:translate-y-0">Primary Action</a>
      <a href="#" class="inline-flex items-center justify-center rounded-lg border border-structural-borders bg-card-bg/50 px-6 py-3.5 text-base font-bold text-text-main backdrop-blur-sm transition-all duration-300 hover:bg-elevated-surface hover:text-primary-brand hover:-translate-y-0.5 active:translate-y-0">Secondary Action</a>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Typical CTA pair layout as seen in hero sections.",
      },
    },
  },
};
