import type { Meta, StoryObj } from "@storybook-astro/framework";
import PillarCard from "./PillarCard.astro";

const meta: Meta<typeof PillarCard> = {
  title: "Molecules/PillarCard",
  component: PillarCard,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    iconPath: { control: "text" },
    iconColorClass: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PillarCard>;

export const VishwamAI: Story = {
  args: {
    href: "/initiatives/vishwam-ai",
    title: "VISHWAM.ai",
    description:
      "Open-source AI models built for Indian languages and cultural context.",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    iconColorClass: "bg-violet-600/10 text-violet-400",
  },
};

export const SwechaOS: Story = {
  args: {
    href: "/about/swecha-os",
    title: "Swecha OS",
    description:
      "A privacy-focused GNU/Linux operating system for the people of Telangana.",
    iconPath:
      "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    iconColorClass: "bg-primary-brand/10 text-primary-brand",
  },
};

export const Code4Change: Story = {
  args: {
    href: "/initiatives/code4change",
    title: "Code4Change",
    description:
      "Building open-source software solutions for real-world societal challenges.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    iconColorClass: "bg-amber-500/10 text-amber-500",
  },
};

export const PeoplesHealth: Story = {
  args: {
    href: "/initiatives/peoples-health",
    title: "People's Health",
    description:
      "Technology solutions for accessible and equitable public healthcare.",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconColorClass: "bg-emerald-500/10 text-emerald-500",
  },
};
