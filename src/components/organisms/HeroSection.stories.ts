import type { Meta, StoryObj } from "@storybook-astro/framework";
import HeroSection from "./HeroSection.astro";

const meta: Meta<typeof HeroSection> = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The main hero section of the landing page. Features a centered layout with an animated big Swecha logo, core mission heading and description, impact statistics, and a horizontal row of interactive glassmorphic pillar cards for initiatives at the bottom.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
