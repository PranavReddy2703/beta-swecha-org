import type { Meta, StoryObj } from "@storybook-astro/framework";
import ProjectsPage from "./projects.astro";

const meta: Meta<typeof ProjectsPage> = {
  title: "Pages/Projects",
  component: ProjectsPage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Projects index page. Displays featured projects carousel and a grid of all open source initiatives.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ProjectsPage>;

export const Default: Story = {};
