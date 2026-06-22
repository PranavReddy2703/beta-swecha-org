import type { Meta, StoryObj } from "@storybook-astro/framework";
import HamburgerMenu from "./HamburgerMenu.astro";

const meta: Meta<typeof HamburgerMenu> = {
  title: "Molecules/HamburgerMenu",
  component: HamburgerMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          'Animated hamburger menu toggle button for mobile navigation. Uses a CSS transition to morph into an "X" when active.',
      },
    },
    layout: "centered",
  },
  argTypes: {
    srLabel: { control: "text", description: "Screen reader accessible label" },
  },
};

export default meta;

type Story = StoryObj<typeof HamburgerMenu>;

export const Default: Story = {
  args: { srLabel: "Toggle navigation menu" },
};

export const ActiveState: Story = {
  render: () => `
    <button type="button" class="mobile-hamburger hamburger-active" style="display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border-radius:0.5rem;background:transparent;border:none;cursor:pointer;color:var(--primary-brand);">
      <div class="hamburger-lines" style="display:flex;flex-direction:column;gap:5px;width:20px;">
        <span class="hamburger-line" style="display:block;width:100%;height:2px;border-radius:1px;background:currentColor;transition:all 0.3s ease;transform:translateY(7px) rotate(45deg);"></span>
        <span class="hamburger-line" style="display:block;width:100%;height:2px;border-radius:1px;background:currentColor;transition:all 0.3s ease;opacity:0;width:0;"></span>
        <span class="hamburger-line" style="display:block;width:100%;height:2px;border-radius:1px;background:currentColor;transition:all 0.3s ease;transform:translateY(-7px) rotate(-45deg);"></span>
      </div>
    </button>
  `,
  parameters: {
    docs: { description: { story: "Menu in the opened (active) state." } },
  },
};
