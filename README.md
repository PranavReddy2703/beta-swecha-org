# Swecha.org Frontend Platform

This repository contains the decoupled, high-performance presentation layer for the swecha.org overhaul platform. The architecture is designed around rendering speed, localization stability, and modern web standards.

---

## Table of Contents

- [Overview](#overview)
- [Core Technical Stack](#core-technical-stack)
- [Design Tokens](#design-tokens)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Documentation](#documentation)
- [Contributing](#contributing)

---

## Overview

The swecha.org frontend is a statically-optimized, hybrid-rendered web platform built to serve a multilingual, community-driven audience. It leverages Astro's island architecture to minimize client-side JavaScript while selectively hydrating interactive components only where required.

---

## Core Technical Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Astro | Hybrid SSR configuration |
| Styling | Tailwind CSS | Utility-first, zero unused CSS in production |
| UI Primitives | daisyUI | Pure CSS components, 0KB client JS overhead |
| Interactive Islands | shadcn/ui | React primitives, hydrated on demand via Astro client directives |
| Language | TypeScript | Strict mode enabled across all modules |
| Runtime | Node.js v22 | Alpine-based containerization |

---

## Design Tokens

All component layers strictly adhere to the following semantic color primitives, defined under the **Electric Cyan Tech Matrix** design system.

| Token | Hex Value | Usage |
|---|---|---|
| Canvas Base | `#080B10` | Primary background layer |
| Secondary Background | `#111827` | Section breaks and grouping panels |
| Card Background | `#1B2432` | Block layout wrappers |
| Elevated Surface | `#263445` | High-elevation modules (tooltips, popovers) |
| Primary Brand | `#00D4FF` | Interactive targets, links, and focal text |
| Hover Brand | `#33E4FF` | Cursor focus and micro-interaction states |
| Secondary Accent | `#4DFFB8` | Alerts and community tag indicators |
| Structural Borders | `#273449` | 1px mechanical wireframe dividers |

> All design tokens are configured as CSS custom properties and mapped directly to Tailwind's theme extension in `tailwind.config.ts`.

---

## Getting Started

### Prerequisites

Ensure the following are installed before proceeding:

- Node.js v22 or later
- npm v10 or later (or a compatible package manager)
- Git

### Installation

```bash
# Clone the repository
git clone https://gitlab.com/swecha/swecha-org-frontend.git
cd swecha-org-frontend

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:4321` by default.

### Build

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```text
swecha-org-frontend/
├── src/
│   ├── components/         
│   ├── layouts/            
│   ├── pages/              
│   ├── styles/             
│   └── i18n/               
├── public/              
├── tailwind.config.ts     
├── astro.config.mjs       
├── tsconfig.json           
├── .gitlab-ci.yml          
└── CONTRIBUTING.md         
```
---

## Documentation

Operational guides are maintained as dedicated modules to keep the root codebase clean:

- **Contribution and Branching Guidelines:** See [CONTRIBUTING.md](./CONTRIBUTING.md) for the 4-developer GitFlow workflow, local environment setup commands, and runtime version requirements.
- **CI/CD Configuration:** See [.gitlab-ci.yml](./.gitlab-ci.yml) for the static linting pipeline (`knip`), i18n validation checks, and test coverage configuration.

---

## Contributing

All contributions must follow the GitFlow branching model documented in [CONTRIBUTING.md](./CONTRIBUTING.md). Direct commits to `main` or `develop` are not permitted. All changes are submitted via merge requests and require at least one peer review before merge.

---

> Built and maintained by the Swecha community.