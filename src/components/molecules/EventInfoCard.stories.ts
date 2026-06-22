import type { Meta, StoryObj } from "@storybook-astro/framework";
import EventInfoCard from "./EventInfoCard.astro";

const meta: Meta<typeof EventInfoCard> = {
  title: "Events/EventInfoCard",
  component: EventInfoCard,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: ["date", "time", "venue", "mode"],
    },
    label: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof EventInfoCard>;

export const DateInfo: Story = {
  args: {
    icon: "date",
    label: "Date",
    value: "31 January 2026",
  },
};

export const VenueInfo: Story = {
  args: {
    icon: "venue",
    label: "Venue",
    value: "IIIT Hyderabad",
  },
};

export const ModeInfo: Story = {
  args: {
    icon: "mode",
    label: "Mode",
    value: "In-Person",
  },
};
