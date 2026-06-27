# Swecha.org Frontend Platform

This repository contains the presentation layer for the swecha.org platform overhaul. The architecture is designed for optimal rendering speed, localization stability, offline capabilities, and compliance with modern web standards.

---

## Project Navigation Map

Repository documentation is organized as follows:

- **Project Specifications:** The [specs/001-frontend-platform/](./specs/001-frontend-platform/) directory defines the technical requirements, research, data models, and implementation phases for the frontend platform overhaul.
- **Operational & Contribution Guidelines:** [CONTRIBUTING.md](./CONTRIBUTING.md) defines the GitFlow branching workflow, local environment configurations, code quality criteria, and commit message formats.
- **CI/CD Configuration:** [.gitlab-ci.yml](./.gitlab-ci.yml) configures the static analysis pipeline, internationalization validation, code style linting, and automated checks.

---

## Core Technical Stack

| Layer               | Technology         | Specification / Configuration                                  |
| :------------------ | :----------------- | :------------------------------------------------------------- |
| **Framework**       | Astro v6           | Static Site Generation (SSG) with client-side island hydration |
| **Styling**         | Tailwind CSS v4    | Integrated via `@tailwindcss/vite` compiler in Astro           |
| **UI Primitives**   | daisyUI v5         | Pure CSS components integrated as a Tailwind plugin            |
| **Component Dev**   | Storybook v10      | Component-driven playground environment for Astro components   |
| **PWA Integration** | Vite PWA for Astro | Service worker-based caching and installable app capabilities  |
| **Language**        | TypeScript         | Strict compiler configuration (`tsconfig.json`)                |
| **Runtime**         | Node.js v22        | Long-Term Support (LTS) environment                            |

---

## Design Tokens

Component layout and style rules strictly follow the **Electric Cyan Tech Matrix** design system. Semantic design tokens are configured as CSS custom variables in the `:root` and `html[data-theme]` blocks within [global.css](./src/styles/global.css), and mapped to custom utility names under Tailwind CSS v4's `@theme` directive.

| Token                    | Hex Value (Dark Mode) | Application                                              |
| :----------------------- | :-------------------- | :------------------------------------------------------- |
| **Canvas Base**          | `#080B10`             | Primary background canvas                                |
| **Secondary Background** | `#111827`             | Structural groupings, header blocks, and footer trays    |
| **Card Background**      | `#1B2432`             | Discrete component wrappers and content cards            |
| **Elevated Surface**     | `#263445`             | Dropdowns, modals, and popover elements                  |
| **Primary Brand**        | `#00D4FF`             | Interactive links, active markers, and focal UI targets  |
| **Hover Brand**          | `#33E4FF`             | Hover and focus interaction states                       |
| **Secondary Accent**     | `#4DFFB8`             | Diagnostic tags, success labels, and verified indicators |
| **Structural Borders**   | `#273449`             | Boundary lines and 1px layout partitions                 |

> [!NOTE]
> The design system also includes a tailored Light Theme activated via the `html[data-theme="light"]` selector, providing accessible and high-contrast color choices (e.g., Canvas Base `#60a5fa`, Primary Brand `#025a9e`).

---

## Getting Started

### Prerequisites

- Node.js v22.x (LTS)
- npm v10.x or later

### Local Setup

To set up a local development environment, clone the repository and execute the following from the root directory:

```bash
# Clean local cache to prevent dependency resolution mismatches
npm cache clean --force

# Perform a clean install of dependencies
npm ci
```

### Script Reference

Run these scripts from the repository root:

| Command                    | Purpose                                                          |
| :------------------------- | :--------------------------------------------------------------- |
| **Development**            |                                                                  |
| `npm run dev`              | Launches the Astro development server at `http://localhost:4321` |
| `npm run storybook`        | Starts the Storybook UI sandbox at `http://localhost:6006`       |
| **Verification & Quality** |                                                                  |
| `npm run typecheck`        | Validates TypeScript compilation and Astro type checks           |
| `npm run lint`             | Runs ESLint syntax and rule verification                         |
| `npm run format:check`     | Verifies project formatting rules with Prettier                  |
| `npm run knip`             | Audits the codebase for unused files, exports, and dependencies  |
| `npm run i18n:check`       | Cross-checks localized dictionary keys for structural parity     |
| **Build & Deploy**         |                                                                  |
| `npm run build`            | Compiles the production-ready static assets                      |
| `npm run preview`          | Runs a local web server previewing the built `dist` folder       |
| `npm run build-storybook`  | Compiles a static Storybook build                                |
| **Data Synchronization**   |                                                                  |
| `npm run fetch-news`       | Automatically crawls and updates news metadata                   |

---

## Repository Structure

The project code is structured following **Atomic Design** principles:

```text
swecha-org-frontend/
├── .husky/                 # Git hooks validation (pre-commit, commit-msg)
├── .storybook/             # Storybook framework configuration
├── specs/                  # Technical plans, specifications, and data models
├── scripts/                # Node utility scripts (i18n check, news crawling)
├── public/                 # Static assets (fonts, icons, images, screenshots)
├── src/
│   ├── assets/             # Global media files and assets
│   ├── components/         # Atomic Design Component Library
│   │   ├── atoms/          # Independent primitives (Buttons, Badges, Links)
│   │   ├── molecules/      # Combined primitives (Cards, Switchers, Dropdowns)
│   │   └── organisms/      # Complex layouts (Headers, Footers, News Carousels)
│   ├── data/               # Local structured JSON data models for static pages
│   ├── layouts/            # Master layout shell templates (supporting pages)
│   ├── pages/              # Astro routing controllers (supporting localization paths)
│   ├── styles/             # Global CSS stylesheets configuring Tailwind & daisyUI
│   │   └── global.css      # CSS entrypoint with custom Tailwind @theme directives
│   ├── i18n/               # Astro native i18n locales, translation keys and utils
│   │   ├── locales/        # Dictionary files (en.json, hi.json, te.json)
│   │   ├── ui.ts           # Translation configuration mapping
│   │   └── utils.ts        # Helper methods for localized routes
│   └── utils/              # General JavaScript/TypeScript utility helpers
├── astro.config.mjs        # Astro configuration (locales, integrations, vite plugins)
├── eslint.config.mjs       # Static analysis and linting rule rulesets
├── tsconfig.json           # Compiler options for strict TypeScript checks
├── package.json            # Script definitions and package manifests
└── CONTRIBUTING.md         # Onboarding guides and developer workflows
```
