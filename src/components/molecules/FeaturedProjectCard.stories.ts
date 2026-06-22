import type { Meta, StoryObj } from "@storybook-astro/framework";
import FeaturedProjectCard from "./FeaturedProjectCard.astro";

const meta: Meta<typeof FeaturedProjectCard> = {
  title: "Molecules/FeaturedProjectCard",
  component: FeaturedProjectCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Large featured project card used in the horizontal scrolling carousel. Includes a background image, gradient overlay, and brand-colored hover effects.",
      },
    },
    layout: "padded",
  },
  decorators: [
    (Story) => `
      <div style="max-width: 1248px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text", description: "Project title" },
    description: { control: "text", description: "Project description" },
    imageLabel: {
      control: "text",
      description: "Fallback text if image is missing",
    },
    image: { control: "text", description: "URL of the background image" },
    link: { control: "text", description: "Link to project details" },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedProjectCard>;

export const WithImage: Story = {
  args: {
    title: "Vishwam AI",
    description:
      "An advanced AI model focused on language processing and native language support for the local population. Developed entirely with open source tools.",
    imageLabel: "VISHWAM_AI_PREVIEW",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Swecha OS",
    description:
      "A GNU/Linux distribution tailored for the Telugu speaking population. Comes pre-loaded with educational software and local language computing tools.",
    imageLabel: "SWECHA_OS_SCREENSHOT",
    link: "#",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fallback state when no image is provided, displaying the `imageLabel`.",
      },
    },
  },
};
