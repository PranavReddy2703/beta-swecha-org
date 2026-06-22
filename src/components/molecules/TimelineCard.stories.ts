import type { Meta, StoryObj } from "@storybook-astro/framework";
import TimelineCard from "./TimelineCard.astro";

const meta: Meta<typeof TimelineCard> = {
  title: "Molecules/TimelineCard",
  component: TimelineCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Wide card used in the history timeline. Shows an image on the left and a description on the right with a year badge.",
      },
    },
    layout: "padded",
  },
  argTypes: {
    year: { control: "text", description: "Year or date string" },
    title: { control: "text", description: "Event title" },
    description: { control: "text", description: "Event description" },
    previewImage: { control: "text", description: "URL for the image" },
    tags: { control: "object", description: "Array of tag strings" },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineCard>;

export const WithImage: Story = {
  args: {
    year: "2005",
    title: "The Inception",
    description:
      "Swecha started as a project to provide a Telugu operating system. It quickly grew into a vibrant community movement promoting free software.",
    previewImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    tags: ["Community", "OS Development"],
  },
};

export const WithoutImage: Story = {
  args: {
    year: "2010",
    title: "Expanding Horizons",
    description:
      "We started our state-wide campaigns to bring engineering students into the open source fold, conducting workshops across 50+ colleges.",
    tags: ["Workshops", "Education"],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fallback view with a glowing gradient placeholder when no image is provided.",
      },
    },
  },
};
