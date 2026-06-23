import type { Meta, StoryObj } from "@storybook-astro/framework";
import SocialIcon from "./SocialIcon.astro";

const meta: Meta<typeof SocialIcon> = {
  title: "Atoms/SocialIcon",
  component: SocialIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Social media icon link used in the footer. Supports GitHub, GitLab, Twitter/X, and Email with platform-specific SVG icons.",
      },
    },
  },
  argTypes: {
    href: { control: "text", description: "Link URL" },
    label: {
      control: "text",
      description: "Accessible label for screen readers",
    },
    platform: {
      control: "select",
      options: ["github", "gitlab", "twitter", "email"],
      description: "Social media platform",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialIcon>;

export const GitHub: Story = {
  args: {
    href: "https://github.com/nicedayy",
    label: "GitHub",
    platform: "github",
  },
};

export const GitLab: Story = {
  args: {
    href: "https://code.swecha.org",
    label: "GitLab",
    platform: "gitlab",
  },
};

export const Twitter: Story = {
  args: {
    href: "https://twitter.com/nicedayy",
    label: "Twitter / X",
    platform: "twitter",
  },
};

export const Email: Story = {
  args: {
    href: "mailto:reachus@swecha.org",
    label: "Email",
    platform: "email",
  },
};

export const AllPlatforms: Story = {
  render: () => `
    <div style="display: flex; gap: 16px; padding: 24px; align-items: center;">
      <a href="https://github.com" class="footer-icon" aria-label="GitHub" style="display:inline-flex;color:var(--text-muted);opacity:0.5;transition:all 0.2s ease;">
        <svg viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><g fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></g></svg>
      </a>
      <a href="https://code.swecha.org" class="footer-icon" aria-label="GitLab" style="display:inline-flex;color:var(--text-muted);opacity:0.5;transition:all 0.2s ease;">
        <svg viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><g fill="currentColor"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.387 9.452.045 13.587a.924.924 0 00.331 1.023L12 23.054l11.624-8.443a.92.92 0 00.331-1.024z"/></g></svg>
      </a>
      <a href="https://twitter.com" class="footer-icon" aria-label="Twitter" style="display:inline-flex;color:var(--text-muted);opacity:0.5;transition:all 0.2s ease;">
        <svg viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><g fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></g></svg>
      </a>
      <a href="mailto:reachus@swecha.org" class="footer-icon" aria-label="Email" style="display:inline-flex;color:var(--text-muted);opacity:0.5;transition:all 0.2s ease;">
        <svg viewBox="0 0 24 24" style="width:1.25rem;height:1.25rem;"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></g></svg>
      </a>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "All social icons side by side as they appear in the footer.",
      },
    },
  },
};
