# Research: Technical Frameworks & Setup for Swecha Frontend

Research summary informing design decisions on architectural patterns, framework selections, and localization routes.

---

## 1. Static Site Generation: Astro vs Next.js

We analyzed whether Astro or Next.js is better suited for the Swecha.org frontend redesign.

### Analysis & Comparison

| Criteria | Astro | Next.js |
| :--- | :--- | :--- |
| **Initial Page Load Size** | **Zero KB by default** (Only HTML/CSS sent if no hydration is required) | ~80KB framework overhead (react, react-dom, next/router) |
| **Accessibility & SEO** | Simple, semantic static HTML renders directly | Depends on hydration, heavier DOM setup |
| **Hydration Pattern** | Island Architecture (Selective client hydration) | Complete page rehydration (unless Server Components are used, which add complexity) |
| **Hosting & Deploy** | Can compile to static files hosted on any static hosting provider / server | Requires Node.js hosting runtime (Vercel, Node container) for optimal features |

### Recommendation
**Astro** is selected because Swecha.org is primarily informational and resource-driven. SSG with Astro provides the fastest possible load times for users in regions with poor connectivity.

---

## 2. Localization Strategy in Astro

Astro supports multiple ways of handling localization (i18n). We compared:
1.  **Astro Native i18n configuration** (Astro 4+ built-in `i18n` support).
2.  **Custom Route Parameterization** (using `[locale]` dynamic routing).

### Analysis & Comparison

*   **Option 1: Astro Native i18n:**
    *   *Pros:* Out-of-the-box support for route prefixes, language switching utilities, and automated fallback configurations. Extremely easy to configure in `astro.config.mjs`.
    *   *Cons:* Less control over manual locale rewrite mapping (unnecessary for our use case).
*   **Option 2: Custom Route Parameters:**
    *   *Pros:* Custom redirects and URL rewrites directly mapped in folder routes.
    *   *Cons:* Significant boilerplate code, need to manually inject `locale` into links (`/[locale]/about`), prone to routing errors.

### Recommendation
**Astro Native i18n** is recommended. The built-in config simplifies development and maintains consistent URL routing without custom script overhead.

---

## 3. UI and Utility Styling Framework: Tailwind CSS + daisyUI + shadcn/ui

We evaluated our styling layers to ensure high visual quality while maintaining speed.

*   **Tailwind CSS:** Essential for fast responsive adjustments, micro-interactions, layout alignments, and custom design tokens (Electric Cyan Tech Matrix).
*   **daisyUI:** Adds pre-styled base component classes (buttons, cards, inputs) built entirely on CSS utilities. Prevents styling bloat and speeds up development.
*   **shadcn/ui:** Offers fully accessible React primitives (accessible comboboxes, selects, tabs) using radix-ui underneath. Used selectively as "islands" where heavy keyboard/screen-reader interaction is required.
