import type { Meta, StoryObj } from "@storybook-astro/framework";
import LangOption from "./LangOption.astro";

const meta: Meta<typeof LangOption> = {
  title: "Atoms/LangOption",
  component: LangOption,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Individual language option in the language switcher dropdown. Features a colored dot indicator and slide-in hover effect.",
      },
    },
  },
  argTypes: {
    href: { control: "text", description: "Link to the page in this language" },
    name: { control: "text", description: "Language display name" },
    isActive: {
      control: "boolean",
      description: "Whether this language is currently selected",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LangOption>;

export const Default: Story = {
  args: { href: "/en", name: "English", isActive: false },
};

export const Active: Story = {
  args: { href: "/te", name: "తెలుగు", isActive: true },
};

export const LanguageList: Story = {
  render: () => `
    <ul style="list-style: none; padding: 8px; margin: 0; min-width: 160px; background: var(--secondary-bg); border: 1px solid var(--structural-borders); border-radius: 12px;">
      <li><a href="/en" class="lang-option lang-option-active" style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border-radius:0.5rem;font-size:0.875rem;font-weight:700;color:var(--primary-brand);text-decoration:none;background:color-mix(in srgb, var(--elevated-surface) 40%, transparent);"><span style="width:6px;height:6px;border-radius:50%;background:var(--primary-brand);box-shadow:0 0 8px rgba(0,212,255,0.5);flex-shrink:0;"></span>English</a></li>
      <li><a href="/te" class="lang-option" style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;border-radius:0.5rem;font-size:0.875rem;font-weight:500;color:var(--text-primary);text-decoration:none;"><span style="width:6px;height:6px;border-radius:50%;background:var(--text-muted);flex-shrink:0;"></span>తెలుగు</a></li>
    </ul>
  `,
  parameters: {
    docs: {
      description: {
        story: "Full language dropdown showing active and default states.",
      },
    },
  },
};
