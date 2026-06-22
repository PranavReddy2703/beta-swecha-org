import type { Meta, StoryObj } from "@storybook-astro/framework";
import MobileDrawer from "./MobileDrawer.astro";

const meta: Meta<typeof MobileDrawer> = {
  title: "Organisms/MobileDrawer",
  component: MobileDrawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Mobile navigation drawer containing links and a language switcher. Needs to be toggled open to be visible.",
      },
    },
    layout: "padded",
  },
  argTypes: {
    navItems: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof MobileDrawer>;

export const Default: Story = {
  args: {
    navItems: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Projects", href: "/projects" },
      { name: "Events", href: "/events" },
      { name: "Contact", href: "/contact" },
    ],
    isCurrentPage: (href: string) => href === "/",
  },
  decorators: [
    (Story) => `
      <div style="width: 320px; border: 1px solid var(--structural-borders); border-radius: 8px;">
        <!-- Force open state for demonstration by adding the class -->
        <div id="demo-wrapper">
          ${Story()}
        </div>
        <script>
          setTimeout(() => {
            const drawer = document.querySelector('.mobile-drawer');
            if (drawer) {
              drawer.classList.add('mobile-drawer-open');
            }
          }, 100);
        </script>
      </div>
    `,
  ],
};
