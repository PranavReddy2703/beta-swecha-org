import type { Meta, StoryObj } from "@storybook-astro/framework";
import UpdatesIsland from "./UpdatesIsland.astro";

const meta: Meta<typeof UpdatesIsland> = {
  title: "Organisms/UpdatesIsland",
  component: UpdatesIsland,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UpdatesIsland>;

export const Default: Story = {};
