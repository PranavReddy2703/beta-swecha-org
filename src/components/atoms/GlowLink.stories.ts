import type { Meta, StoryObj } from "@storybook-astro/framework";
import GlowLink from "./GlowLink.astro";

const meta: Meta<typeof GlowLink> = {
  title: "Atoms/GlowLink",
  component: GlowLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Gradient-colored hyperlink with a neon glow effect on hover. Uses the brand cyan-to-emerald gradient and a drop-shadow glow.",
      },
    },
  },
  argTypes: {
    href: { control: "text", description: "Link destination URL" },
    class: { control: "text", description: "Additional CSS classes" },
  },
};

export default meta;

type Story = StoryObj<typeof GlowLink>;

export const Default: Story = {
  args: { href: "#" },
  render: (args) => `<a href="${args.href}" class="glow-link" style="
    background: linear-gradient(135deg, #00D4FF, #4DFFB8) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    font-weight: 700;
    display: inline-block;
    filter: drop-shadow(0 0 2px rgba(0, 212, 255, 0.5));
    font-size: 16px;
  ">Swecha Project</a>`,
};

export const InParagraph: Story = {
  render: () => `
    <p style="color: var(--text-muted); font-family: 'Inter', system-ui, sans-serif; max-width: 640px; padding: 24px; line-height: 1.7;">
      Swecha was founded in 2005 to support the
      <a href="#" style="
        background: linear-gradient(135deg, #00D4FF, #4DFFB8) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        font-weight: 700;
        display: inline;
        filter: drop-shadow(0 0 2px rgba(0, 212, 255, 0.5));
        transition: filter 0.3s ease;
      ">Swecha project</a>, it is now a vibrant community of software users, students, and professionals.
    </p>
  `,
  parameters: {
    docs: {
      description: {
        story:
          "GlowLink used inline within a paragraph of text, as seen on the About page.",
      },
    },
  },
};
