import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import astroPwa from "@vite-pwa/astro";

export default defineConfig({
  output: "static",
  site: "https://swecha.org",

  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },

  integrations: [
    astroPwa({
      registerType: "prompt",
      injectRegister: false,
      manifest: {
        name: "Swecha Org Platform",
        short_name: "Swecha",
        theme_color: "#111111",
        background_color: "#111111",
        display: "standalone",
        icons: [
          {
            src: "/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/mobile.png",
            sizes: "720x1280",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globDirectory: "dist",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,avif,woff,woff2}"],
        navigateFallback: "/404.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],

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
