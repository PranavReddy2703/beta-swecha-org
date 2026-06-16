# Swecha.org Frontend Platform - Project Constitution

This document outlines the core principles, design guidelines, quality standards, and technical rules governing all development on the Swecha.org Frontend Platform. All additions and changes to the platform must adhere to this constitution.

---

## 1. Project Principles & Philosophy

*   **Accessibility First:** The platform is built for everyone. Accessibility is not a checklist item; it is a core design constraint.
*   **Performance as a Feature:** Fast load times and high responsiveness directly impact user engagement, especially in regions with constrained connectivity.
*   **Multilingual Native:** The platform represents a diverse community. All features must support multiple languages from day one.
*   **Minimal Client-Side JavaScript:** We prioritize server-side/static generation and progressive hydration to keep the bundle size small.

---

## 2. Design System: Electric Cyan Tech Matrix

The user interface uses the **Electric Cyan Tech Matrix** design language, characterized by a futuristic, high-contrast, dark-mode-first aesthetic with vibrant cyan accents.

### Color Tokens

| Token | HSL / Hex | Purpose |
| :--- | :--- | :--- |
| **Canvas Base** | `#080B10` | The primary dark background color for the application canvas. |
| **Secondary Background** | `#111827` | Section blocks, headers, and container backgrounds. |
| **Card Surface** | `#1B2432` | Background surface for cards, modals, and elements. |
| **Elevated Surface** | `#263445` | Hovered or highlighted surface blocks. |
| **Primary Action (Brand)** | `#00D4FF` | Primary action buttons, links, active borders, and cyan accents. |
| **Hover State** | `#33E4FF` | Interactive hover highlight for primary components. |
| **Secondary Accent** | `#4DFFB8` | Success states, secondary accents, and code highlights. |
| **Structural Borders** | `#273449` | Dividers, border states, and input field outlines. |

### Typography Guidelines

*   **Font Selection:** Use a clean, modern sans-serif font (e.g., `Inter` or `Outfit`) loaded with fallback system fonts to prevent flash of unstyled text (FOUT).
*   **Headings:** Bold weights, high-contrast colors, and responsive sizing utilizing fluid typography.
*   **Body Text:** Minimum body font size of `16px` (`1rem`) to ensure absolute readability.

---

## 3. Technology Stack & Coding Standards

The platform is structured as a hybrid-rendered website using **Astro**.

*   **Framework:** Astro (Static Site Generation by default).
*   **Component Hydration:** Astro Island Architecture. Hydrate components selectively using `client:visible`, `client:idle`, or `client:only` where appropriate.
*   **Styling:** Vanilla Tailwind CSS for utilities + daisyUI for base components + shadcn/ui for complex interactive behaviors.
*   **Type Safety:** Strict TypeScript rules apply. Avoid the use of `any`.
*   **Semantic HTML:** Use landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`) correctly. Ensure heading tags (`<h1>`-`<h6>`) follow a logical, sequential order (only one `<h1>` per page).

---

## 4. Quality Budgets & Performance Targets

Every release must satisfy the following budget constraints:

### Lighthouse Targets

*   **Performance:** `90+`
*   **Accessibility:** `90+` (WCAG 2.1 AA Compliant)
*   **Best Practices:** `90+`
*   **SEO:** `90+`

### Defect Severity Definitions

All identified issues must be categorized and addressed before release according to these definitions:

*   **Critical:** Application crashes, broken main navigation flows, blank pages, or blocking accessibility issues. *Must be fixed immediately; blocks release.*
*   **Major:** Feature malfunction, localization missing (raw fallback keys shown in UI), or failing lighthouse metrics. *Must be resolved before release.*
*   **Minor:** Layout misalignment, slight color variances, and missing transition animations. *Can be deferred to post-release chores.*
