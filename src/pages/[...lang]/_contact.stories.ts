import type { Meta, StoryObj } from "@storybook-astro/framework";
import ContactPage from "./contact.astro";

const meta: Meta<typeof ContactPage> = {
  title: "Pages/Contact",
  component: ContactPage,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Contact Us page of the Swecha website. Contains map, contact form, and info cards.",
      },
    },
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {};
