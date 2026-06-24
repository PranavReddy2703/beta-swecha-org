import type { Meta, StoryObj } from "@storybook-astro/framework";
import BaseIsland from "./BaseIsland.astro";

const meta: Meta<typeof BaseIsland> = {
  title: "Molecules/BaseIsland",
  component: BaseIsland,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseIsland>;

export const TopIsland: Story = {
  args: {
    id: "storybook-top-island",
    position: "top",
    offset: "20px",
    toggleText: "Top Island",
    panelWidth: "300px",
  },
};

export const BottomIsland: Story = {
  args: {
    id: "storybook-bottom-island",
    position: "bottom",
    offset: "20px",
    toggleText: "Bottom Island",
    panelWidth: "300px",
  },
};
