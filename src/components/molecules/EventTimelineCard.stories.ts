import type { Meta, StoryObj } from "@storybook-astro/framework";
import TimelineCard from "./TimelineCard.astro";

const meta: Meta<typeof TimelineCard> = {
  title: "Events/TimelineCard",
  component: TimelineCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Card used in the EventTimeline to display individual past events.",
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
    event: { control: "object" },
    class: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof TimelineCard>;

export const Default: Story = {
  args: {
    event: {
      slug: "devdays-2024",
      title: "Swecha DevDays 2024",
      shortDescription:
        "The biggest open-source developer conference in the region.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      date: "Oct 15 - 17, 2024",
      venue: "CBIT Campus, Hyderabad",
      category: "Conference",
    },
  },
};

export const AICategory: Story = {
  args: {
    event: {
      slug: "ai-hackday",
      title: "AI for Social Good Hackday",
      shortDescription:
        "2000+ students building local language models and AI tools.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      date: "Aug 22, 2024",
      venue: "Multiple Venues",
      category: "AI",
    },
  },
};
