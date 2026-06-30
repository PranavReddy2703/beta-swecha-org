import type { Meta, StoryObj } from "@storybook-astro/framework";
import ActionPill from "./ActionPill.astro";

const meta: Meta<typeof ActionPill> = {
  title: "Atoms/ActionPill",
  component: ActionPill,
  tags: ["autodocs"],
  argTypes: {
    href: { control: "text" },
    label: { control: "text" },
    iconPath: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ActionPill>;

export const EmailAction: Story = {
  args: {
    href: "mailto:reachus@swecha.net",
    label: "Email Us",
    iconPath:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
};

export const PhoneAction: Story = {
  args: {
    href: "tel:+918977503615",
    label: "Call Office",
    iconPath:
      "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
  },
};

export const DirectionsAction: Story = {
  args: {
    href: "https://maps.google.com/?q=Swecha+Gachibowli+Hyderabad",
    label: "Get Directions",
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
  },
};
