import type { Meta, StoryObj } from "@storybook-astro/framework";
import SectionHeading from "./SectionHeading.astro";

const meta: Meta<typeof SectionHeading> = {
  title: "Atoms/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    align: { control: "select", options: ["center", "left"] },
    underline: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  args: {
    title: "Our Initiatives",
    underline: true,
    align: "center",
  },
};

export const WithSubtitle: Story = {
  args: {
    title: "Featured Projects",
    subtitle: "Explore what the community is building together.",
    underline: true,
    align: "center",
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Latest News",
    underline: true,
    align: "left",
  },
};

export const NoUnderline: Story = {
  args: {
    title: "Quick Links",
    underline: false,
    align: "center",
  },
};
