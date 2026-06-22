# Technical Plan: Swecha.org Frontend Platform

## 1. Architectural Design

The platform uses a hybrid-rendered frontend based on the **Astro Island Architecture** pattern. This ensures the majority of the pages compile down to static HTML, while dynamic interactive sections are selectively hydrated as islands on the client side.

```text
Users
   |
   v
Frontend Platform (Astro SSG)
   |
   v
API Layer / Service Layer
   |
   v
Backend Services / CMS (Drupal)
```

### Directory Structure & Organization

```text
src/
├── components/   # Reusable UI component blocks (Astro/React)
├── layouts/      # Site layouts (Header, Footer, Head metadata)
├── pages/        # File-based routing pages
├── styles/       # Tailwind and global styles
├── i18n/         # Translation keys and configuration
├── services/     # API request fetching layer
└── utils/        # Helper functions
```

---

## 2. Technology Stack & Dependencies

| Layer                 | Technology        | Purpose                                          |
| :-------------------- | :---------------- | :----------------------------------------------- |
| **Framework**         | Astro             | High-performance static site generation          |
| **Styling**           | Tailwind CSS      | Utility-first styling architecture               |
| **Component Library** | daisyUI           | Base UI styles (buttons, inputs, menus)          |
| **Interactive UI**    | shadcn/ui (React) | Accessible complex primitives (combobox, select) |
| **Language**          | TypeScript        | Strong typing and safety                         |
| **Runtime**           | Node.js 22        | Modern JS execution environment                  |

---

## 3. Rendering & Hydration Strategy

To achieve a Lighthouse score of `90+`, client hydration is used only when interaction is required.

- **Static Elements (SSG):** Hero sections, text, cards, layouts, icons, and menus.
- **Hydrated Elements (Astro Islands):**
  - `LanguageSwitcher` (`client:visible` or `client:idle`)
  - `ProjectSearch` and `Filters` (`client:visible`)
  - `ResourceDownloader` (`client:idle`)

---

## 4. Internationalization (i18n) & Routing

Astro's native i18n routing strategy is used to localize the site.

- **URL Prefix Routing:**
  - `/` (Default: English)
  - `/te/` (Telugu)
  - `/hi/` (Hindi)
- **Data Structures:** Translation keys are stored under `src/i18n/locales/{en|te|hi}.json`.
- **Routing Fallback:** If a requested route/page is missing a locale translation, the router redirects to the English version.

---

## 5. Security & Build Validation

### Security Configurations

- **Environment Variables:** All secrets and API keys are stored in `.env` and loaded using Astro's built-in env handler. Sensitive configurations are never exposed to the browser.
- **Content Security Policy (CSP):** The server header will implement strict CSP policies.
- **XSS Protection:** Astro automatically escapes HTML tags rendered in curly braces.

### CI/CD Pipeline

On push to GitLab, the runner triggers validation scripts:

1.  **Linter check:** `npm run lint` (ESLint)
2.  **Type check:** `npm run check` (TypeScript compilation validation)
3.  **Tests run:** `npm run test` (Unit and E2E tests check)
4.  **Translation integrity check:** Ensures keys in localized `.json` files match the English base.
