import type { Meta, StoryObj } from "@storybook-astro/framework";
import NewsFilter from "./NewsFilter.astro";

const meta: Meta<typeof NewsFilter> = {
  title: "Molecules/NewsFilter",
  component: NewsFilter,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewsFilter>;

export const Default: Story = {
  args: {
    lang: "en",
  },
};
