import type { Meta, StoryObj } from "@storybook-astro/framework";
import EventCard from "./EventCard.astro";

const meta: Meta<typeof EventCard> = {
  title: "Events/EventCard",
  component: EventCard,
  tags: ["autodocs"],
  argTypes: {
    event: { control: "object" },
    isGlow: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof EventCard>;

export const Default: Story = {
  args: {
    event: {
      slug: "os-ai-hackday",
      title: "Open Source AI Hackday",
      shortDescription:
        "Collaborate with fellow developers, build innovative solutions, and explore the future of open-source AI technologies during this 24-hour hackathon.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      date: "15 February 2026",
      venue: "Swecha Office, Hyderabad",
      category: "Hackathon",
      ongoing: false,
    },
    isGlow: false,
  },
};

export const ActiveWithGreenGlow: Story = {
  args: {
    event: {
      slug: "telugu-llm-datathon",
      title: "Telugu LLM Datathon",
      shortDescription:
        "Join the statewide data collection initiative to build the largest open-source Telugu language dataset for training next-generation AI models.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
      date: "18 June 2026",
      venue: "CGG Gachibowli, Hyderabad",
      category: "Workshop",
      ongoing: true,
    },
    isGlow: true,
  },
};
