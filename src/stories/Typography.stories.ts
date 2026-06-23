import type { Meta, StoryObj } from "@storybook-astro/framework";

const meta: Meta = {
  title: "Design System/Typography",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Typography system showcasing heading hierarchy, body text, and utility styles. Uses Inter for body and Outfit for headings as per the design constitution.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    headingColor: {
      control: "color",
      name: "Heading Color",
      description: "Color for all headings",
    },
    bodyColor: {
      control: "color",
      name: "Body Text Color",
      description: "Color for body paragraphs",
    },
    mutedColor: {
      control: "color",
      name: "Muted Text Color",
      description: "Color for muted / secondary text",
    },
    accentColor: {
      control: "color",
      name: "Accent / Link Color",
      description: "Color for links and accents",
    },
    fontFamily: {
      control: "select",
      options: [
        "'Outfit', system-ui, sans-serif",
        "'Inter', system-ui, sans-serif",
        "'Roboto', sans-serif",
        "system-ui, sans-serif",
      ],
      name: "Font Family",
    },
    baseFontSize: {
      control: { type: "range", min: 12, max: 24, step: 1 },
      name: "Base Font Size (px)",
    },
  },
  render: (args) => {
    const headingColor = args.headingColor || "var(--text-primary)";
    const bodyColor = args.bodyColor || "var(--text-primary)";
    const mutedColor = args.mutedColor || "var(--text-muted)";
    const accentColor = args.accentColor || "var(--primary-brand)";
    const fontFamily = args.fontFamily || "'Outfit', system-ui, sans-serif";
    const baseFontSize = args.baseFontSize || 16;

    const headings = [
      {
        tag: "h1",
        size: `${baseFontSize * 3}px`,
        weight: 800,
        label: "H1 — Page Title",
      },
      {
        tag: "h2",
        size: `${baseFontSize * 2.25}px`,
        weight: 800,
        label: "H2 — Section Heading",
      },
      {
        tag: "h3",
        size: `${baseFontSize * 1.75}px`,
        weight: 700,
        label: "H3 — Subsection",
      },
      {
        tag: "h4",
        size: `${baseFontSize * 1.375}px`,
        weight: 700,
        label: "H4 — Card Title",
      },
      {
        tag: "h5",
        size: `${baseFontSize * 1.125}px`,
        weight: 600,
        label: "H5 — Label",
      },
      {
        tag: "h6",
        size: `${baseFontSize}px`,
        weight: 600,
        label: "H6 — Small Label",
      },
    ];

    const headingRows = headings
      .map(
        (h) => `
        <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--structural-borders);">
          <div style="display: flex; align-items: baseline; gap: 16px;">
            <${h.tag} style="color: ${headingColor}; font-family: ${fontFamily}; font-size: ${h.size}; font-weight: ${h.weight}; margin: 0; letter-spacing: -0.02em;">
              ${h.label}
            </${h.tag}>
            <code style="font-size: 11px; color: ${mutedColor}; font-family: monospace; white-space: nowrap;">${h.size} / ${h.weight}</code>
          </div>
        </div>
      `,
      )
      .join("");

    return `
      <div style="padding: 40px; background: var(--canvas-base); min-height: 100vh;">
        <h2 style="color: var(--text-primary); font-family: 'Outfit', system-ui, sans-serif; font-size: 28px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px;">
          Typography Scale
        </h2>
        <p style="color: var(--text-muted); font-family: 'Inter', system-ui, sans-serif; font-size: 14px; margin-bottom: 40px;">
          Adjust controls to preview different fonts, sizes, and colors in real-time.
        </p>

        <!-- Heading Scale -->
        <section style="margin-bottom: 48px;">
          <h3 style="color: ${accentColor}; font-family: 'Outfit', system-ui, sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">
            Heading Hierarchy
          </h3>
          ${headingRows}
        </section>

        <!-- Body Text -->
        <section style="margin-bottom: 48px;">
          <h3 style="color: ${accentColor}; font-family: 'Outfit', system-ui, sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">
            Body Text
          </h3>
          <p style="color: ${bodyColor}; font-family: 'Inter', system-ui, sans-serif; font-size: ${baseFontSize}px; line-height: 1.7; max-width: 640px; font-weight: 400;">
            Swecha aims at providing global software solutions to the local people with the Free Software development model by working together with the community of developers and users all over. The prime objective of Swecha OS is to provide a complete computing solution to a population that speaks and understands only Telugu.
          </p>
          <p style="color: ${mutedColor}; font-family: 'Inter', system-ui, sans-serif; font-size: ${baseFontSize * 0.875}px; line-height: 1.6; max-width: 640px; margin-top: 16px; font-weight: 400;">
            This is muted / secondary text. Used for descriptions, captions, timestamps, and supporting information.
          </p>
        </section>

        <!-- Special Styles -->
        <section>
          <h3 style="color: ${accentColor}; font-family: 'Outfit', system-ui, sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 20px;">
            Special Styles
          </h3>
          <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
            <a href="#" style="color: ${accentColor}; font-family: 'Inter', system-ui, sans-serif; font-weight: 600; text-decoration: underline; text-underline-offset: 3px;">
              Hyperlink Style
            </a>
            <span style="font-family: monospace; font-size: 13px; color: ${accentColor}; background: rgba(0,212,255,0.1); padding: 4px 10px; border-radius: 6px; border: 1px solid rgba(0,212,255,0.2);">
              code / monospace
            </span>
            <span style="color: ${bodyColor}; font-family: 'Outfit', system-ui, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em;">
              UPPERCASE LABEL
            </span>
            <span style="background: linear-gradient(90deg, ${accentColor}, var(--secondary-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Outfit', system-ui, sans-serif; font-size: 20px; font-weight: 800;">
              Gradient Text
            </span>
          </div>
        </section>
      </div>
    `;
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    baseFontSize: 16,
  },
};

export const LargeScale: Story = {
  args: {
    baseFontSize: 20,
  },
};

export const CompactScale: Story = {
  args: {
    baseFontSize: 13,
  },
};

export const CustomColors: Story = {
  args: {
    baseFontSize: 16,
    headingColor: "#FF6B6B",
    bodyColor: "#E2E8F0",
    mutedColor: "#718096",
    accentColor: "#48BB78",
  },
};
