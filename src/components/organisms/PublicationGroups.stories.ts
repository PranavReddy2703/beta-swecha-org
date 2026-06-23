import type { Meta, StoryObj } from "@storybook-astro/framework";
import PublicationGroups from "./PublicationGroups.astro";

const meta: Meta<typeof PublicationGroups> = {
  title: "Organisms/PublicationGroups",
  component: PublicationGroups,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PublicationGroups>;

export const Default: Story = {
  args: {
    lang: "en",
    articles: [
      {
        id: "1",
        title: { en: "Story 1" },
        description: { en: "Description 1" },
        summary: { en: "Summary 1" },
        author: { en: "Admin" },
        date: { en: "Jan 1" },
        readingTime: { en: "5 min" },
        category: { en: "Tech" },
        publication: "Tech Group",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
        url: "#",
        year: 2024,
      },
      {
        id: "2",
        title: { en: "Story 2" },
        description: { en: "Description 2" },
        summary: { en: "Summary 2" },
        author: { en: "Admin" },
        date: { en: "Jan 2" },
        readingTime: { en: "5 min" },
        category: { en: "Community" },
        publication: "Community Group",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
        url: "#",
        year: 2024,
      },
    ],
  },
};
