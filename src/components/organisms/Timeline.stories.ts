import type { Meta, StoryObj } from "@storybook-astro/framework";
import Timeline from "./Timeline.astro";

const meta: Meta<typeof Timeline> = {
  title: "Organisms/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Full Timeline section for the About page. Features an interactive slider and vertical scrolling card sequence.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {};
