import type { Meta, StoryObj } from "@storybook-astro/framework";
import FeaturedEvent from "./FeaturedEvent.astro";

const meta: Meta<typeof FeaturedEvent> = {
  title: "Events/FeaturedEvent",
  component: FeaturedEvent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          'Large featured event card for the upcoming event. Includes a "Register Now" button and prominent imagery.',
      },
    },
    layout: "padded",
  },
  argTypes: {
    event: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedEvent>;

export const Default: Story = {
  args: {
    event: {
      slug: "summer-camp-2025",
      title: "Swecha Summer Camp 2025",
      subtitle: "15 Days of Code, Community & Open Source",
      shortDescription:
        "Join hundreds of engineering students in our intensive summer bootcamp focusing on modern web technologies, AI, and digital freedom.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      date: "May 15 - May 30, 2025",
      venue: "Swecha Office, Gachibowli",
      category: "Camp",
      registrationLink: "#",
    },
  },
  decorators: [
    (Story) => `
      <div style="max-width: 1200px; margin: 0 auto; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
};
