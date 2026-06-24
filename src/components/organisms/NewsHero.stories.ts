import type { Meta, StoryObj } from "@storybook-astro/framework";
import NewsHero from "./NewsHero.astro";

const meta: Meta<typeof NewsHero> = {
  title: "Organisms/NewsHero",
  component: NewsHero,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewsHero>;

export const Default: Story = {
  args: {
    lang: "en",
  },
};
