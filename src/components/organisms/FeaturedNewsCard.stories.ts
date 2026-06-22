import type { Meta, StoryObj } from "@storybook-astro/framework";
import FeaturedNewsCard from "./FeaturedNewsCard.astro";

const meta: Meta<typeof FeaturedNewsCard> = {
  title: "Organisms/FeaturedNewsCard",
  component: FeaturedNewsCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Large featured card in the Bento grid with an integrated automatic carousel of slides. Used for major news stories.",
      },
    },
    layout: "padded",
  },
  decorators: [
    (Story) => `
      <div style="max-width: 1000px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    category: { control: "text" },
    buttonText: { control: "text" },
    index: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof FeaturedNewsCard>;

export const Default: Story = {
  args: {
    category: "Top Story",
    buttonText: "Read More",
    index: 0,
    slides: [
      {
        title: "Swecha DevDays 2024 Huge Success",
        description:
          "Over 2000 participants from across 50 colleges gathered for our annual technical festival celebrating open source.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "New GLUG Formed at CVR College",
        description:
          "Expanding our footprint to foster local engineering talent with a brand new GNU/Linux User Group.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
};
