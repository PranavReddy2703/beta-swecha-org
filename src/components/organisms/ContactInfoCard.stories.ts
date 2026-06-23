import type { Meta, StoryObj } from "@storybook-astro/framework";
import ContactInfoCard from "./ContactInfoCard.astro";

const meta: Meta<typeof ContactInfoCard> = {
  title: "Organisms/ContactInfoCard",
  component: ContactInfoCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Card to display contact methods (Address, Email, Phone, etc.). Supports varied icons and optional links.",
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => `
      <div style="width: 300px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    icon: {
      control: "select",
      options: ["MapPin", "Mail", "Phone", "GraduationCap"],
    },
    link: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ContactInfoCard>;

export const MapPin: Story = {
  args: {
    title: "Headquarters",
    content: "Swecha Office, Gachibowli,\nHyderabad, Telangana\n500032",
    icon: "MapPin",
    link: "https://maps.google.com/?q=Swecha+Gachibowli+Hyderabad",
  },
};

export const Mail: Story = {
  args: {
    title: "General Queries",
    content: "reachus@swecha.net",
    icon: "Mail",
    link: "mailto:reachus@swecha.net",
  },
};

export const Phone: Story = {
  args: {
    title: "Phone",
    content: "+91 8977503615",
    icon: "Phone",
    link: "tel:+918977503615",
  },
};

export const Internship: Story = {
  args: {
    title: "Internships",
    content: "internships@swecha.org",
    icon: "GraduationCap",
    link: "mailto:internships@swecha.org",
  },
};
