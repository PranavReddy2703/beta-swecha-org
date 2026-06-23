import type { Meta, StoryObj } from "@storybook-astro/framework";

// A pure HTML component rendered via Storybook's render function
const meta: Meta = {
  title: "Design System/Color Palette",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Interactive color palette showcasing all CSS custom properties used across the Swecha design system. Toggle between Dark and Light themes using the toolbar to see how each token adapts.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    canvasBase: {
      control: "color",
      name: "--canvas-base",
      description: "Page background",
    },
    secondaryBg: {
      control: "color",
      name: "--secondary-bg",
      description: "Elevated surface background",
    },
    cardBg: {
      control: "color",
      name: "--card-bg",
      description: "Card background",
    },
    elevatedSurface: {
      control: "color",
      name: "--elevated-surface",
      description: "Elevated interactive surface",
    },
    primaryBrand: {
      control: "color",
      name: "--primary-brand",
      description: "Primary action color (CTA, links)",
    },
    hoverBrand: {
      control: "color",
      name: "--hover-brand",
      description: "Hover state of primary brand",
    },
    secondaryAccent: {
      control: "color",
      name: "--secondary-accent",
      description: "Secondary accent (success, highlights)",
    },
    structuralBorders: {
      control: "color",
      name: "--structural-borders",
      description: "Dividers & borders",
    },
    textPrimary: {
      control: "color",
      name: "--text-primary",
      description: "Primary text color",
    },
    textMuted: {
      control: "color",
      name: "--text-muted",
      description: "Muted / secondary text",
    },
    primaryBtnText: {
      control: "color",
      name: "--primary-btn-text",
      description: "Text on primary buttons",
    },
  },
  render: (args) => {
    const tokens = [
      { name: "--canvas-base", label: "Canvas Base", value: args.canvasBase },
      {
        name: "--secondary-bg",
        label: "Secondary BG",
        value: args.secondaryBg,
      },
      { name: "--card-bg", label: "Card BG", value: args.cardBg },
      {
        name: "--elevated-surface",
        label: "Elevated Surface",
        value: args.elevatedSurface,
      },
      {
        name: "--primary-brand",
        label: "Primary Brand",
        value: args.primaryBrand,
      },
      { name: "--hover-brand", label: "Hover Brand", value: args.hoverBrand },
      {
        name: "--secondary-accent",
        label: "Secondary Accent",
        value: args.secondaryAccent,
      },
      {
        name: "--structural-borders",
        label: "Structural Borders",
        value: args.structuralBorders,
      },
      {
        name: "--text-primary",
        label: "Text Primary",
        value: args.textPrimary,
      },
      { name: "--text-muted", label: "Text Muted", value: args.textMuted },
      {
        name: "--primary-btn-text",
        label: "Primary Btn Text",
        value: args.primaryBtnText,
      },
    ];

    // Build inline style overrides
    const overrides = tokens
      .filter((t) => t.value)
      .map((t) => `${t.name}: ${t.value}`)
      .join("; ");

    const swatches = tokens
      .map(
        (t) => `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <div style="
            width: 80px; height: 80px; border-radius: 12px;
            background: var(${t.name});
            border: 2px solid rgba(255,255,255,0.15);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          " title="${t.name}"
          onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.4)'"
          onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)'"
          ></div>
          <code style="font-size: 11px; color: var(--text-muted); font-family: monospace; text-align: center;">${t.name}</code>
          <span style="font-size: 10px; color: var(--text-primary); opacity: 0.6;">${t.label}</span>
        </div>
      `,
      )
      .join("");

    return `
      <div style="${overrides}; padding: 40px; background: var(--canvas-base); min-height: 100vh; transition: all 0.3s ease;">
        <h2 style="color: var(--text-primary); font-family: 'Outfit', system-ui, sans-serif; font-size: 28px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px;">
          Color Palette
        </h2>
        <p style="color: var(--text-muted); font-family: 'Inter', system-ui, sans-serif; font-size: 14px; margin-bottom: 32px;">
          Use the controls below to experiment with color overrides. Toggle theme in the toolbar above.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 24px;">
          ${swatches}
        </div>

        <hr style="border: none; border-top: 1px solid var(--structural-borders); margin: 40px 0;" />

        <h3 style="color: var(--text-primary); font-family: 'Outfit', system-ui, sans-serif; font-size: 20px; font-weight: 700; margin-bottom: 16px;">
          Live Preview
        </h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <div style="
            padding: 24px; border-radius: 12px;
            background: var(--card-bg); border: 1px solid var(--structural-borders);
            backdrop-filter: blur(16px); min-width: 200px;
          ">
            <span style="color: var(--text-primary); font-weight: 600;">Card Preview</span>
            <p style="color: var(--text-muted); font-size: 13px; margin-top: 8px;">This card uses --card-bg, --structural-borders, --text-primary, and --text-muted.</p>
          </div>
          <button style="
            padding: 12px 24px; border-radius: 8px;
            background: var(--primary-brand); color: var(--primary-btn-text);
            border: none; font-weight: 700; font-size: 14px; cursor: pointer;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
            transition: all 0.2s ease;
          "
          onmouseover="this.style.background='var(--hover-brand)'"
          onmouseout="this.style.background='var(--primary-brand)'"
          >Primary Button</button>
          <span style="
            display: inline-flex; align-items: center; gap: 6px;
            padding: 6px 14px; border-radius: 20px;
            background: transparent; border: 1px solid var(--secondary-accent);
            color: var(--secondary-accent); font-size: 12px; font-weight: 600;
          ">● Secondary Accent Badge</span>
        </div>
      </div>
    `;
  },
};

export default meta;

type Story = StoryObj;

export const DarkTheme: Story = {
  args: {},
  parameters: {
    themes: { themeOverride: "dark" },
  },
};

export const LightTheme: Story = {
  args: {},
  parameters: {
    themes: { themeOverride: "light" },
  },
};

export const CustomOverrides: Story = {
  args: {
    primaryBrand: "#FF6B6B",
    secondaryAccent: "#FFD93D",
    hoverBrand: "#EE5A24",
  },
};
