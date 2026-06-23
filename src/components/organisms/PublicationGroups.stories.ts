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
    groups: [
      {
        id: "group1",
        name: { en: "Tech Group" },
        description: { en: "Tech publications" },
      },
      {
        id: "group2",
        name: { en: "Community Group" },
        description: { en: "Community publications" },
      },
    ],
  },
};
