import type { Meta, StoryObj } from "@storybook-astro/framework";
import ThemeToggle from "./ThemeToggle.astro";

const meta: Meta<typeof ThemeToggle> = {
  title: "Molecules/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Interactive button to toggle between Light and Dark mode. Includes a spinning animation and icon swap (Sun/Moon).",
      },
    },
    layout: "centered",
  },
  argTypes: {
    title: { control: "text", description: "Accessible title for the button" },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {
    title: "Toggle Theme",
  },
};
