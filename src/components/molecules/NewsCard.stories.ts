import type { Meta, StoryObj } from "@storybook-astro/framework";
import NewsCard from "./NewsCard.astro";

const meta: Meta<typeof NewsCard> = {
  title: "Molecules/NewsCard",
  component: NewsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "News preview card used in the homepage news section. Contains an image, title, description, and action link.",
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => `
      <div style="width: 380px; height: 420px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text", description: "News headline" },
    description: {
      control: "text",
      description: "Brief preview of the news content",
    },
    buttonText: { control: "text", description: "Call to action text" },
    link: { control: "text", description: "Destination URL" },
    image: { control: "text", description: "Thumbnail image URL" },
    index: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description: "Animation stagger index",
    },
    gridClass: {
      control: "text",
      description: "Optional CSS class for grid positioning",
    },
  },
};

export default meta;

type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
  args: {
    title: "Swecha DevDays 2024 Concludes with Record Participation",
    description:
      "Over 1,000 developers, students, and open source enthusiasts gathered for three days of hacking, workshops, and community building.",
    buttonText: "Read More",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    index: 0,
  },
};

export const Announcement: Story = {
  args: {
    title: "Vishwam AI Beta Released",
    description:
      "We are thrilled to announce the open beta of Vishwam AI, focused on bringing native AI capabilities to local languages.",
    buttonText: "View Announcement",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    index: 1,
  },
};
