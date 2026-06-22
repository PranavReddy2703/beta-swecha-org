import type { Meta, StoryObj } from "@storybook-astro/framework";
import ContactHero from "./ContactHero.astro";

const meta: Meta<typeof ContactHero> = {
  title: "Organisms/ContactHero",
  component: ContactHero,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Hero section for the Contact page with animated underline.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ContactHero>;

export const Default: Story = {
  args: {
    title: "Get in Touch",
    subtitle:
      "Whether you want to contribute, partner, or just say hello—we are all ears.",
  },
};
