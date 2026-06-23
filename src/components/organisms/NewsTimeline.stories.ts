import type { Meta, StoryObj } from "@storybook-astro/framework";
import NewsTimeline from "./NewsTimeline.astro";

const meta: Meta<typeof NewsTimeline> = {
  title: "Organisms/NewsTimeline",
  component: NewsTimeline,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NewsTimeline>;

export const Default: Story = {
  args: {
    lang: "en",
    events: [
      {
        id: "1",
        title: { en: "Event 1" },
        date: "2024-01-01",
        description: { en: "Description 1" },
      },
      {
        id: "2",
        title: { en: "Event 2" },
        date: "2024-02-01",
        description: { en: "Description 2" },
      },
    ],
  },
};
