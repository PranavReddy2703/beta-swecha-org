import type { Meta, StoryObj } from "@storybook-astro/framework";
import StatItem from "./StatItem.astro";

const meta: Meta<typeof StatItem> = {
  title: "Atoms/StatItem",
  component: StatItem,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StatItem>;

export const Default: Story = {
  args: {
    value: "50K+",
    label: "Students Trained",
  },
};

export const LargeNumber: Story = {
  args: {
    value: "1200+",
    label: "Workshops Conducted",
  },
};

export const SmallNumber: Story = {
  args: {
    value: "18+",
    label: "Years of Impact",
  },
};
