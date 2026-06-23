# Swecha Frontend — Contribution & Workflow Guide

This guide defines the development standards, environment setup, and branching workflow for the Swecha.org Frontend Platform. The repository is maintained by a core team of 4 developers. All contributors must adhere to this framework to ensure performance, i18n stability, and UI consistency.

---

## Table of Contents

- [Environment Prerequisites](#1-environment-prerequisites)
- [Local Setup](#2-local-setup)
- [Design Tokens](#3-design-tokens)
- [i18n Rules](#4-i18n-rules)
- [Branch Workflow](#5-branch-workflow)
- [Naming Conventions](#6-naming-conventions)
- [Definition of Done](#7-definition-of-done)

---

## 1. Environment Prerequisites

All contributors must align with the following runtime baselines to ensure consistent execution across development environments:

| Requirement | Version                                               |
| ----------- | ----------------------------------------------------- |
| Node.js     | `v22.x` (LTS)                                         |
| npm         | `v10.x` or later                                      |
| Editor      | VS Code (with Prettier, ESLint, and Astro extensions) |

---

## 2. Local Setup

Execute the following commands from the repository root sequentially:

```bash
# Purge local package manager cache to prevent dependency resolution issues
npm cache clean --force

# Install project dependencies based on package-lock.json
npm ci

# Launch local development server
npm run dev
```

### Script Reference

| Command             | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| `npm run dev`       | Starts the development server at `http://localhost:4321` with HMR |
| `npm run build`     | Compiles the production SSR/Static output                         |
| `npm run typecheck` | Runs the TypeScript engine to surface type errors                 |
| `npm run lint`      | Validates syntax, formatting rules, and dead code                 |
| `npm run knip`      | Audits for unused exports, components, and dangling dependencies  |

---

## 3. Design Tokens

All interface components must strictly use the **Electric Cyan Tech Matrix** semantic color tokens. Arbitrary hex values and default Tailwind colors are not permitted.

| Token                | Hex       | Usage                                                |
| -------------------- | --------- | ---------------------------------------------------- |
| Canvas Base          | `#080B10` | Primary background layer                             |
| Secondary Background | `#111827` | Section breaks, footer trays, header blocks          |
| Card Background      | `#1B2432` | Discrete component wrapper containers                |
| Elevated Surface     | `#263445` | Dropdowns, modals, and popover elements              |
| Primary Brand        | `#00D4FF` | Interactive links, active nav markers, focal targets |
| Hover Brand          | `#33E4FF` | Focus and hover interaction states                   |
| Secondary Accent     | `#4DFFB8` | Notifications, verified labels, milestone indicators |
| Structural Borders   | `#273449` | 1px layout dividers and wireframe partitions         |

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

Branch names must reference the associated GitLab issue ID. See [Section 6](#6-naming-conventions) for the full branch naming specification.

```bash
# Pattern: feature/issue-[ID]-[short-description]
git checkout -b feature/issue-12-navigation-bar
```

### Step 3 — Commit with Semantic Prefixes

Each commit must be scoped and descriptive. Do not bundle unrelated changes into a single commit. See [Section 6](#6-naming-conventions) for the full commit message specification.

```bash
git commit -m "feat(ui): implement localized drawer for mobile navigation (#12)"
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

## 6. Naming Conventions

All branch names and commit messages must conform to the issue tracking categories defined below to maintain repository traceability and cleanliness.

### Branch Naming

All branches must fork from `dev` and conform to the following lowercase, hyphenated structural template:

```
Pattern: <type>/issue-<ID>-<kebab-case-summary>
```

| Type        | Pattern                                 | Example                                          |
| ----------- | --------------------------------------- | ------------------------------------------------ |
| New Feature | `feature/issue-[ID]-short-description`  | `feature/issue-104-electric-cyan-cards`          |
| Bug Fix     | `bugfix/issue-[ID]-short-description`   | `bugfix/issue-89-i18n-routing-dropdown`          |
| Refactor    | `refactor/issue-[ID]-short-description` | `refactor/issue-45-cleanup-unused-astro-islands` |
| Performance | `perf/issue-[ID]-short-description`     | `perf/issue-112-optimize-daisyui-asset-loading`  |
| Chore / CI  | `chore/issue-[ID]-short-description`    | `chore/issue-12-update-gitlab-ci-node-cache`     |

Generic branch naming patterns (e.g., `pranav-fix` or `updated-ui`) are prohibited.

### Commit Message Format

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <short description> (#<issue-id>)
```

| Type       | Usage                                                                     |
| ---------- | ------------------------------------------------------------------------- |
| `feat`     | New user-facing component, utility, or feature asset                      |
| `fix`      | Corrective patch resolving a bug or console error                         |
| `refactor` | Code restructuring with no change to user-facing behavior                 |
| `perf`     | Hydration strategy changes, bundle reduction, or speed improvements       |
| `docs`     | Documentation updates, markdown edits, or inline code annotations         |
| `infra`    | Changes to `.gitlab-ci.yml`, `package.json`, or environment configuration |

**Examples:**

```bash
feat(ui): implement glassmorphic sidebar panel (#24)
fix(i18n): correct missing translation fallback arrays (#67)
refactor(core): purge orphaned dependencies using knip (#41)
infra(ci): scale node container runner execution timeout (#03)
```

---

## 7. Definition of Done

A Merge Request may not be merged into `dev` until all of the following criteria are satisfied:

- [ ] Codebase compiles without TypeScript errors or warnings (`npm run typecheck`)
- [ ] Code style and syntax conform to project linting standards (`npm run lint`)
- [ ] No unused imports, dead components, or orphaned exports are present (`npm run knip`)
- [ ] All layout layers use Electric Cyan Tech Matrix tokens exclusively — no arbitrary color overrides
- [ ] Component renders and scales correctly across mobile and desktop breakpoints without layout distortion
- [ ] All user-facing strings are mapped to translation lookups and i18n renders safely across all supported locales
