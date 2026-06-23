# Swecha.org Frontend Platform - Project Constitution

This document outlines the core principles, design guidelines, quality standards, and technical rules governing all development on the Swecha.org Frontend Platform. All additions and changes to the platform must adhere to this constitution.

---

## 1. Project Principles & Philosophy

- **Accessibility First:** The platform is built for everyone. Accessibility is not a checklist item; it is a core design constraint.
- **Performance as a Feature:** Fast load times and high responsiveness directly impact user engagement, especially in regions with constrained connectivity.
- **Multilingual Native:** The platform represents a diverse community. All features must support multiple languages from day one.
- **Minimal Client-Side JavaScript:** We prioritize server-side/static generation and progressive hydration to keep the bundle size small.
- **Reusability over Reinvention:** Before building a new component or writing a new utility function, contributors must verify that an existing solution does not already exist. UI components must be designed to be flexible, context-agnostic, and data-driven to maximize reuse across the platform.

---

## 2. Design System: Electric Cyan Tech Matrix

The user interface uses the **Electric Cyan Tech Matrix** design language, characterized by a futuristic, high-contrast, dark-mode-first aesthetic with vibrant cyan accents.

### Color Tokens

| Token                      | HSL / Hex | Purpose                                                          |
| :------------------------- | :-------- | :--------------------------------------------------------------- |
| **Canvas Base**            | `#080B10` | The primary dark background color for the application canvas.    |
| **Secondary Background**   | `#111827` | Section blocks, headers, and container backgrounds.              |
| **Card Surface**           | `#1B2432` | Background surface for cards, modals, and elements.              |
| **Elevated Surface**       | `#263445` | Hovered or highlighted surface blocks.                           |
| **Primary Action (Brand)** | `#00D4FF` | Primary action buttons, links, active borders, and cyan accents. |
| **Hover State**            | `#33E4FF` | Interactive hover highlight for primary components.              |
| **Secondary Accent**       | `#4DFFB8` | Success states, secondary accents, and code highlights.          |
| **Structural Borders**     | `#273449` | Dividers, border states, and input field outlines.               |

### Typography Guidelines

- **Font Selection:** Use a clean, modern sans-serif font (e.g., `Inter` or `Outfit`) loaded with fallback system fonts to prevent flash of unstyled text (FOUT).
- **Headings:** Bold weights, high-contrast colors, and responsive sizing utilizing fluid typography.
- **Body Text:** Minimum body font size of `16px` (`1rem`) to ensure absolute readability.

---

## 3. Technology Stack & Coding Standards

The platform is structured as a hybrid-rendered website using **Astro**.

- **Framework:** Astro (Static Site Generation by default).
- **Component Hydration:** Astro Island Architecture. Hydrate components selectively using `client:visible`, `client:idle`, or `client:only` where appropriate.
- **Styling:** Vanilla Tailwind CSS for utilities + daisyUI for base components + shadcn/ui for complex interactive behaviors.
- **Type Safety:** Strict TypeScript rules apply. Avoid the use of `any`.
- **Semantic HTML:** Use landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`) correctly. Ensure heading tags (`<h1>`-`<h6>`) follow a logical, sequential order (only one `<h1>` per page).

---

## 4. Quality Budgets & Performance Targets

Every release must satisfy the following budget constraints:

### Lighthouse Targets

- **Performance:** `100`
- **Accessibility:** `100` (WCAG 2.1 AA Compliant)
- **Best Practices:** `100`
- **SEO:** `100`

---

## 5. Atomization & Contribution Workflow

To ensure the Swecha platform remains scalable, maintainable, and approachable for all contributors, we strictly adhere to the principle of **atomization** across our UI, codebase, and version control workflows.

Complex systems must be broken down into their smallest, independent, and reusable units.

### Atomic Architecture

- **Modular UI Components:** We follow a component-driven architecture. Build small, single-purpose Astro or UI components (Atoms and Molecules) rather than massive, monolithic page files. Rely on the composability of `shadcn/ui` and Astro layouts to construct complex views.
- **Single Responsibility Principle:** Every component, utility function, and API route should do exactly one thing. If a component is managing state, fetching data, and handling complex UI styling all at once, it must be atomized into smaller files.
- **Decoupled Logic:** Keep business logic and data fetching separate from presentation components whenever possible.

### Atomic Version Control

- **Granular Tasks:** Epic features or major redesigns must be decomposed into small, actionable issues that a contributor can realistically resolve in a short timeframe.
- **Atomic Commits:** Every Git commit must represent a single, logical change. Do not mix feature additions, bug fixes, and formatting tweaks into a single commit.
- **Focused Pull Requests:** Pull Requests (PRs) should address one specific issue or feature. "Kitchen sink" PRs that touch unrelated parts of the codebase will be rejected to ensure thorough and efficient code reviews.

---

## 6. Component-Driven Development (Storybook)

To enforce our atomic architecture and ensure consistency across the Electric Cyan Tech Matrix, all UI development must be driven through **Storybook**. Storybook acts as our interactive component library, documentation hub, and primary UI testing environment.

### Storybook Guidelines & Rules

- **Isolated Development First:** Components (Atoms, Molecules, and Organisms) must be built and tested in Storybook _before_ they are integrated into Astro pages. If a component cannot render in Storybook, it is too tightly coupled to application logic and must be refactored.
- **Mandatory Stories:** Every reusable UI component must have an accompanying `.stories.ts` (or `.tsx`) file. A PR introducing a new component will not be accepted without its corresponding story.
- **Design System Visualization:** Storybook serves as the visual catalog for our design tokens. All colors, typography scales, and base daisyUI/shadcn components must be documented here for easy reference by designers and developers.
- **Automated Accessibility (a11y):** The Storybook environment is configured with the `@storybook/addon-a11y` plugin. Contributors must ensure their component stories pass all automated accessibility checks (WCAG 2.1 AA) in the Storybook panel before submission, directly supporting our "Accessibility First" project principle.
- **Interactive States:** Stories must demonstrate all relevant states of a component, including default, hover (`#33E4FF`), active, disabled, loading, and error states.

### Defect Severity Definitions

All identified issues must be categorized and addressed before release according to these definitions:

- **Critical:** Application crashes, broken main navigation flows, blank pages, or blocking accessibility issues. _Must be fixed immediately; blocks release._
- **Major:** Feature malfunction, localization missing (raw fallback keys shown in UI), or failing lighthouse metrics. _Must be resolved before release._
- **Minor:** Layout misalignment, slight color variances, and missing transition animations. _Can be deferred to post-release chores._
