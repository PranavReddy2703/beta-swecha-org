import type { Meta, StoryObj } from "@storybook-astro/framework";
import ContactCard from "./ContactCard.astro";

const meta: Meta<typeof ContactCard> = {
  title: "Molecules/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Contact information card with hover effects and icons. Can be an anchor tag if a link is provided, or a div if not.",
      },
    },
    layout: "padded",
  },
  decorators: [
    (Story) => `
      <div style="max-width: 400px; padding: 24px;">
        ${Story()}
      </div>
    `,
  ],
  argTypes: {
    title: { control: "text", description: "Label for the contact method" },
    value: {
      control: "text",
      description: "The contact value (email, phone, address)",
    },
    icon: {
      control: "select",
      options: ["MapPin", "Mail", "Phone", "GraduationCap"],
      description: "Icon to display",
    },
    link: { control: "text", description: "Optional href for the card" },
    index: {
      control: { type: "range", min: 0, max: 5, step: 1 },
      description: "Animation stagger index",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContactCard>;

export const Email: Story = {
  args: {
    title: "Email Us",
    value: "reachus@swecha.org",
    icon: "Mail",
    link: "mailto:reachus@swecha.org",
    index: 0,
  },
};

export const Phone: Story = {
  args: {
    title: "Call Us",
    value: "+91 99999 99999",
    icon: "Phone",
    link: "tel:+919999999999",
    index: 1,
  },
};

export const Location: Story = {
  args: {
    title: "Visit Us",
    value: "Swecha Headquarters, Hyderabad",
    icon: "MapPin",
    link: "https://maps.google.com",
    index: 2,
  },
};

export const CardGrid: Story = {
  decorators: [
    (Story) => `
      <div style="max-width: 800px; padding: 24px; background: var(--canvas-base); border-radius: 12px;">
        ${Story()}
      </div>
    `,
  ],
  render: () => `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
      <a href="mailto:contact@example.com" class="group relative block overflow-hidden rounded-xl border border-structural-borders/70 bg-card-bg/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-brand/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.12)] hover:-translate-y-1 cursor-pointer select-none reveal-card" style="animation-delay: 0ms">
        <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary-brand/3 blur-md group-hover:bg-primary-brand/6 transition-all duration-300"></div>
        <div class="flex items-center space-x-3.5">
          <div class="flex-shrink-0 p-2 rounded-lg bg-secondary-bg/80 text-primary-brand border border-structural-borders/50 transition-colors duration-300 group-hover:bg-primary-brand/10 group-hover:border-primary-brand/30 group-hover:text-hover-brand">
            <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <span class="block text-xs font-semibold text-text-muted group-hover:text-text-main/80 transition-colors duration-300">Email Us</span>
            <span class="block text-sm font-bold text-text-main mt-0.5 truncate select-all">reachus@swecha.org</span>
          </div>
          <div class="flex-shrink-0 text-text-muted/40 transition-all duration-300 group-hover:text-primary-brand group-hover:translate-x-0.5">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </a>
      <a href="tel:123" class="group relative block overflow-hidden rounded-xl border border-structural-borders/70 bg-card-bg/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary-brand/50 hover:shadow-[0_0_15px_rgba(0,212,255,0.12)] hover:-translate-y-1 cursor-pointer select-none reveal-card" style="animation-delay: 80ms">
        <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary-brand/3 blur-md group-hover:bg-primary-brand/6 transition-all duration-300"></div>
        <div class="flex items-center space-x-3.5">
          <div class="flex-shrink-0 p-2 rounded-lg bg-secondary-bg/80 text-primary-brand border border-structural-borders/50 transition-colors duration-300 group-hover:bg-primary-brand/10 group-hover:border-primary-brand/30 group-hover:text-hover-brand">
            <svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <span class="block text-xs font-semibold text-text-muted group-hover:text-text-main/80 transition-colors duration-300">Call Us</span>
            <span class="block text-sm font-bold text-text-main mt-0.5 truncate select-all">+91 99999 99999</span>
          </div>
          <div class="flex-shrink-0 text-text-muted/40 transition-all duration-300 group-hover:text-primary-brand group-hover:translate-x-0.5">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </a>
    </div>
  `,
};
