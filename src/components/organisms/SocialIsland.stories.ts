import type { Meta, StoryObj } from "@storybook-astro/framework";
import SocialIsland from "./SocialIsland.astro";

const meta: Meta<typeof SocialIsland> = {
  title: "Organisms/SocialIsland",
  component: SocialIsland,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SocialIsland>;

export const Default: Story = {};
