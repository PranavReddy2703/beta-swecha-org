import type { Meta, StoryObj } from "@storybook-astro/framework";
import MobileTimelineCard from "./MobileTimelineCard.astro";

const meta: Meta<typeof MobileTimelineCard> = {
  title: "Molecules/MobileTimelineCard",
  component: MobileTimelineCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MobileTimelineCard>;

export const Default: Story = {
  args: {
    year: "2024",
    title: "Mobile Milestone",
    description: "A description of the event that happened.",
    previewImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    tags: ["Mobile", "Design"],
  },
};
