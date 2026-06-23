import type { Meta, StoryObj } from "@storybook-astro/framework";
import UpdateCard from "./UpdateCard.astro";

const meta: Meta<typeof UpdateCard> = {
  title: "Molecules/UpdateCard",
  component: UpdateCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Small, compact news update card used in the sidebar list. Shows title, description, and an arrow indicator.",
      },
    },
    layout: "centered",
  },
  decorators: [
    (Story) => `
      <div style="width: 320px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text", description: "Update headline" },
    description: { control: "text", description: "Brief preview text" },
    link: { control: "text", description: "Destination URL" },
    index: {
      control: { type: "range", min: 0, max: 10, step: 1 },
      description: "Animation stagger index",
    },
  },
};

export default meta;

type Story = StoryObj<typeof UpdateCard>;

export const Default: Story = {
  args: {
    title: "New GLUG Formed at CVR College",
    description:
      "Over 100 students joined the newly inaugurated GNU/Linux User Group.",
    link: "#",
    index: 0,
  },
};

export const UpdatesList: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <a href="#" class="group relative block overflow-hidden rounded-xl border border-structural-borders bg-secondary-bg p-4 transition-all duration-300 hover:border-primary-brand/35 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] select-none cursor-pointer">
        <div class="flex items-center justify-between gap-3">
          <div class="space-y-1 flex-1 min-w-0">
            <h4 class="text-sm font-bold text-text-main group-hover:text-primary-brand transition-colors duration-300 leading-snug truncate">Summer Camp Registration Open</h4>
            <p class="text-xs text-text-muted leading-relaxed font-medium line-clamp-1">Register now for the 15-day intensive tech camp.</p>
          </div>
          <div class="flex-shrink-0 text-text-muted/40 transition-all duration-300 group-hover:text-primary-brand group-hover:translate-x-0.5">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </a>
      <a href="#" class="group relative block overflow-hidden rounded-xl border border-structural-borders bg-secondary-bg p-4 transition-all duration-300 hover:border-primary-brand/35 hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] select-none cursor-pointer">
        <div class="flex items-center justify-between gap-3">
          <div class="space-y-1 flex-1 min-w-0">
            <h4 class="text-sm font-bold text-text-main group-hover:text-primary-brand transition-colors duration-300 leading-snug truncate">Open Source Weekend Recap</h4>
            <p class="text-xs text-text-muted leading-relaxed font-medium line-clamp-1">Photos and presentations from last weekend's meetup.</p>
          </div>
          <div class="flex-shrink-0 text-text-muted/40 transition-all duration-300 group-hover:text-primary-brand group-hover:translate-x-0.5">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </a>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Example of how update cards stack vertically in a sidebar.",
      },
    },
  },
};
