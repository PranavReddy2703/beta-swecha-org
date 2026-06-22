import type { Preview } from "@storybook-astro/framework";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|Color|bg|accent|glow|border)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst",
    },
    backgrounds: {
      disable: true, // We use theme switching instead
    },
    viewport: {
      options: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "812px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "900px" },
        },
        wide: {
          name: "Wide",
          styles: { width: "1536px", height: "960px" },
        },
      },
    },
    docs: {
      toc: true,
    },
    a11y: {
      // WCAG 2.1 AA compliance
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "label", enabled: true },
          { id: "image-alt", enabled: true },
        ],
      },
    },
  },
  decorators: [
    // Theme switching via data-attribute on <html>
    withThemeByDataAttribute({
      themes: {
        dark: "dark",
        light: "light",
      },
      defaultTheme: "dark",
      attributeName: "data-theme",
    }),
  ],
  globalTypes: {
    theme: {
      description: "Toggle between dark and light mode",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "dark", title: "Dark Mode", icon: "moon" },
          { value: "light", title: "Light Mode", icon: "sun" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
