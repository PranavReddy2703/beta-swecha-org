import type { Meta, StoryObj } from "@storybook-astro/framework";
import TopStoriesCarousel from "./TopStoriesCarousel.astro";

const meta: Meta<typeof TopStoriesCarousel> = {
  title: "Organisms/TopStoriesCarousel",
  component: TopStoriesCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TopStoriesCarousel>;

export const Default: Story = {
  args: {
    lang: "en",
    articles: [
      {
        id: "1",
        title: { en: "Story 1" },
        excerpt: { en: "Excerpt 1" },
        category: { en: "Tech" },
        date: "2024-01-01",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
      },
      {
        id: "2",
        title: { en: "Story 2" },
        excerpt: { en: "Excerpt 2" },
        category: { en: "Community" },
        date: "2024-01-02",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
      },
    ],
  },
};
