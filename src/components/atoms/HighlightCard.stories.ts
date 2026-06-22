import type { Meta, StoryObj } from "@storybook-astro/framework";
import HighlightCard from "./HighlightCard.astro";

const meta: Meta<typeof HighlightCard> = {
  title: "Events/HighlightCard",
  component: HighlightCard,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof HighlightCard>;

export const Default: Story = {
  args: {
    title: "Open Source AI Ecosystems",
  },
};
