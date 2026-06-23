import type { Meta, StoryObj } from "@storybook-astro/framework";
import EditorialNewsCard from "./EditorialNewsCard.astro";

const meta: Meta<typeof EditorialNewsCard> = {
  title: "Molecules/EditorialNewsCard",
  component: EditorialNewsCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditorialNewsCard>;

export const MainStory: Story = {
  args: {
    article: {
      id: "1",
      title: { en: "Main Story Title" },
      description: { en: "Main story description" },
      summary: { en: "Main story summary" },
      author: { en: "Author Name" },
      date: { en: "2024-01-01" },
      readingTime: { en: "5 min" },
      category: { en: "Technology" },
      publication: "Tech Publication",
      url: "#",
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    },
    lang: "en",
    isLarge: true,
  },
};

export const SecondaryStory: Story = {
  args: {
    article: {
      id: "2",
      title: { en: "Secondary Story Title" },
      description: { en: "Secondary story description" },
      summary: { en: "Secondary story summary" },
      author: { en: "Author Name" },
      date: { en: "2024-01-02" },
      readingTime: { en: "3 min" },
      category: { en: "Community" },
      publication: "Community Publication",
      url: "#",
      year: 2024,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    },
    lang: "en",
    isLarge: false,
  },
};
