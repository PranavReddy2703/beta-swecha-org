# Swecha.org Frontend Platform

This repository contains the presentation layer for the swecha.org platform overhaul. The architecture is designed for optimal rendering speed, localization stability, and compliance with modern web standards.

---

## Project Navigation Map

Repository documentation is organized as follows:

*   **Project Specifications:** [spec-kit/README.md](./spec-kit/README.md) defines the product requirements, system architecture, UI/UX contracts, and the Documentation-as-Code workflows.
*   **Operational & Contribution Guidelines:** [CONTRIBUTING.md](./CONTRIBUTING.md) defines the GitFlow branching workflow, local environment configurations, and coding standards.
*   **CI/CD Configuration:** [.gitlab-ci.yml](./.gitlab-ci.yml) configures the static analysis pipeline, internationalization validation, and test execution.

---

## Core Technical Stack

| Layer | Technology | Specification / Configuration |
| :--- | :--- | :--- |
| **Framework** | Astro | Hybrid SSR configuration using island architecture |
| **Styling** | Tailwind CSS | Utility-first compilation |
| **UI Primitives** | daisyUI | Pure CSS component styling |
| **Interactive Components** | shadcn/ui | React primitives hydrated on-demand |
| **Language** | TypeScript | Strict compiler configuration |
| **Runtime** | Node.js v22 | Long-Term Support (LTS) environment |

---

## Design Tokens

Component layout and style rules are bounded by the design system token configurations. Primitives are defined as CSS custom properties and integrated via the Tailwind configuration file (`tailwind.config.ts`).

| Token | Hex Value | Application |
| :--- | :--- | :--- |
| **Canvas Base** | `#080B10` | Primary background canvas |
| **Secondary Background** | `#111827` | Structural groupings and layout panels |
| **Card Background** | `#1B2432` | Component boundaries and content cards |
| **Elevated Surface** | `#263445` | Overlay panels, menus, and modal dialogs |
| **Primary Brand** | `#00D4FF` | Interactive targets, links, and focal UI components |
| **Hover Brand** | `#33E4FF` | Interactive target hover states |
| **Secondary Accent** | `#4DFFB8` | Diagnostic tags, success criteria, and indicators |
| **Structural Borders** | `#273449` | Boundary lines and mechanical partitions |

---

## Getting Started

### Prerequisites

*   Node.js v22 or later
*   npm v10 or later

### Installation

```bash
git clone https://gitlab.com/swecha/swecha-org-frontend.git
cd swecha-org-frontend
npm install
```

### Local Development

```bash
npm run dev
```
The development server is exposed at `http://localhost:4321`.

### Compilation and Deployment Preview

```bash
# Compile the production bundle
npm run build

# Preview the compiled assets locally
npm run preview
```

---

## Repository Structure

```text
swecha-org-frontend/
├── spec-kit/               # Product requirements and technical specifications
├── src/
│   ├── components/         # Astro components and hydrated React components
│   ├── layouts/            # Page shell layout templates
│   ├── pages/              # Routing layers
│   ├── styles/             # Global style configurations and design tokens
│   └── i18n/               # Localization dictionaries
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind CSS configurations
├── astro.config.mjs        # Astro compilation options
├── tsconfig.json           # TypeScript configuration options
├── .gitlab-ci.yml          # GitLab CI/CD pipeline definitions
└── CONTRIBUTING.md         # Operational rules and contribution guidelines
```