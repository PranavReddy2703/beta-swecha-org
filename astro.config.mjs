import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://swecha.org",

  build: {
    format: "directory",
    inlineStylesheets: "always",
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "te", "hi"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
