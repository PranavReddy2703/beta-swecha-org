import type { Meta, StoryObj } from "@storybook-astro/framework";
import Footer from "./Footer.astro";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Site-wide footer component containing copyright info and social media icons. Automatically dynamically updates the year.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
