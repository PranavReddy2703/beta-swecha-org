import type { Meta, StoryObj } from "@storybook-astro/framework";
import ContactForm from "./ContactForm.astro";

const meta: Meta<typeof ContactForm> = {
  title: "Organisms/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Contact form with client-side validation and simulated success state.",
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => `
      <div style="width: 450px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    nameLabel: { control: "text" },
    emailLabel: { control: "text" },
    subjectLabel: { control: "text" },
    messageLabel: { control: "text" },
    sendButtonText: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {
    title: "Establish Contact",
    subtitle: "Transmit a message directly to Swecha central.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendButtonText: "Transmit Message",
  },
};
