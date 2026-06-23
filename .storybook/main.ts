import type { StorybookConfig } from "@storybook-astro/framework";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: {
    name: "@storybook-astro/framework",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    const path = await import("path");
    if (!config.resolve) config.resolve = {};
    if (!config.resolve.alias) config.resolve.alias = {};

    // Alias the virtual PWA module to our mock file
    config.resolve.alias["virtual:pwa-info"] = path.resolve(
      process.cwd(),
      "src/mock-pwa.ts",
    );
    config.resolve.alias["virtual:pwa-register"] = path.resolve(
      process.cwd(),
      "src/mock-pwa.ts",
    );

    return config;
  },
};

export default config;
