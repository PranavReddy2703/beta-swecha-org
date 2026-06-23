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
          "The main hero section of the landing page. Features a two-column layout presenting Swecha's core mission, impact statistics, and interactive glassmorphic pillar cards for key initiatives.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};
