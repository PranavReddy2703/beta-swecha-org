import type { Meta, StoryObj } from "@storybook-astro/framework";
import TimelineModal from "./TimelineModal.astro";

const meta: Meta<typeof TimelineModal> = {
  title: "Molecules/TimelineModal",
  component: TimelineModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimelineModal>;

export const Default: Story = {};
