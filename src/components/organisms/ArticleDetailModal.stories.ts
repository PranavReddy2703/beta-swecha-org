import type { Meta, StoryObj } from "@storybook-astro/framework";
import ArticleDetailModal from "./ArticleDetailModal.astro";

const meta: Meta<typeof ArticleDetailModal> = {
  title: "Organisms/ArticleDetailModal",
  component: ArticleDetailModal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailModal>;

export const Default: Story = {
  args: {
    id: "article-modal-1",
  },
};
