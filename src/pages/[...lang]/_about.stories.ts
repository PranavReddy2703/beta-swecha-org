import type { Meta, StoryObj } from "@storybook-astro/framework";
import AboutPage from "./about.astro";

const meta: Meta<typeof AboutPage> = {
  title: "Pages/About",
  component: AboutPage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The About page of the Swecha website. Contains history, mission, and timeline.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {};
