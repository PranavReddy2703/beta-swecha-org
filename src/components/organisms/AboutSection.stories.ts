import type { Meta, StoryObj } from "@storybook-astro/framework";
import AboutSection from "./AboutSection.astro";

const meta: Meta<typeof AboutSection> = {
  title: "Organisms/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Similar to AboutIntro, but includes background glow decorations. Relies on i18n for text content.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AboutSection>;

export const Default: Story = {};
