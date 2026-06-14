# Swecha Frontend — Contribution & Workflow Guide

This guide defines the development standards, environment setup, and branching workflow for the Swecha.org Frontend Platform. The repository is maintained by a core team of 4 developers. All contributors must adhere to this framework to ensure performance, i18n stability, and UI consistency.

---

## Table of Contents

- [Environment Prerequisites](#1-environment-prerequisites)
- [Local Setup](#2-local-setup)
- [Script Reference](#script-reference)
- [Design Tokens](#3-design-tokens)
- [i18n Rules](#4-i18n-rules)
- [Branch Workflow](#5-branch-workflow)
- [Definition of Done](#6-definition-of-done)

---

## 1. Environment Prerequisites

All contributors must align with the following runtime baselines to ensure consistent execution across development environments:

| Requirement | Version |
|---|---|
| Node.js | `v22.x` (LTS) |
| npm | `v10.x` or later |
| Editor | VS Code (with Prettier, ESLint, and Astro extensions) |

---

## 2. Local Setup

Run the following commands from the project root in order:

```bash
# Clear any cache anomalies from a previous or broken branch state
npm cache clean --force

# Install exact, deterministic dependencies from the lockfile
npm ci

# Start the local development server
npm run dev
```

### Script Reference

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server at `http://localhost:4321` with HMR |
| `npm run build` | Compiles the production SSR/Static output |
| `npm run typecheck` | Runs the TypeScript engine to surface type errors |
| `npm run lint` | Validates syntax, formatting rules, and dead code |
| `npm run knip` | Audits for unused exports, components, and dangling dependencies |

---

## 3. Design Tokens

All interface components must strictly use the **Electric Cyan Tech Matrix** semantic color tokens. Arbitrary hex values and default Tailwind colors are not permitted.

| Token | Hex | Usage |
|---|---|---|
| Canvas Base | `#080B10` | Primary background layer |
| Secondary Background | `#111827` | Section breaks, footer trays, header blocks |
| Card Background | `#1B2432` | Discrete component wrapper containers |
| Elevated Surface | `#263445` | Dropdowns, modals, and popover elements |
| Primary Brand | `#00D4FF` | Interactive links, active nav markers, focal targets |
| Hover Brand | `#33E4FF` | Focus and hover interaction states |
| Secondary Accent | `#4DFFB8` | Notifications, verified labels, milestone indicators |
| Structural Borders | `#273449` | 1px layout dividers and wireframe partitions |

---

## 4. i18n Rules

The frontend uses Astro's native subdirectory routing architecture for multi-language support.

- **No hardcoded text.** User-facing strings must never be written directly inside layout elements (e.g., `<h3>Welcome</h3>`).
- **Translation mapping.** All text content must be extracted into localized JSON dictionaries within the designated translation asset directories.
- **Validation.** Run internal cross-checks to ensure no missing fallback keys cause layout shifts or blank render frames.

---

## 5. Branch Workflow

Direct commits to `dev` or `main` are blocked by server-side hooks. All work must follow the isolated feature branch model below.

### Step 1 — Sync the Local Dev Trunk

```bash
git checkout dev
git pull origin dev
```

### Step 2 — Create a Feature Branch

Branch names must reference the associated GitLab issue ID:

```bash
# Pattern: feature/issue-[ID]-[short-description]
git checkout -b feature/issue-12-navigation-bar
```

### Step 3 — Commit with Semantic Prefixes

Each commit must be scoped and descriptive. Do not bundle unrelated changes into a single commit.

| Prefix | Usage |
|---|---|
| `feat:` | New component, utility, or feature asset |
| `fix:` | Bug resolution or error handling |
| `infra:` | Pipeline, configuration, or environment changes |
| `docs:` | Documentation updates or code annotations |

**Example:**
```bash
git commit -m "feat: implement localized drawer for mobile navigation"
```

### Step 4 — Push to Remote

```bash
git push origin feature/issue-12-navigation-bar
```

### Step 5 — Open a Merge Request

1. Navigate to `code.swecha.org` and select **New Merge Request**.
2. Set the source branch to your feature branch and the target branch to `dev`.
3. Assign at least one team member for peer review and architectural validation.

---

## 6. Definition of Done

A Merge Request may not be merged into `dev` until all of the following criteria are satisfied:

- [ ] Codebase compiles without TypeScript errors or warnings (`npm run typecheck`)
- [ ] Code style and syntax conform to project linting standards (`npm run lint`)
- [ ] No unused imports, dead components, or orphaned exports are present (`npm run knip`)
- [ ] All layout layers use Electric Cyan Tech Matrix tokens exclusively — no arbitrary color overrides
- [ ] Component renders and scales correctly across mobile and desktop breakpoints without layout distortion
- [ ] All user-facing strings are mapped to translation lookups and i18n renders safely across all supported locales