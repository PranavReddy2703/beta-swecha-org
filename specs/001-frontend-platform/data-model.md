# Data Model: Swecha.org Frontend Platform

## 1. i18n Translation Dictionary Schema
Dictionary translation structure stored in `src/i18n/locales/{en|te|hi}.json`. All translation JSON files must implement the following structure:

```json
{
  "nav": {
    "about": "About",
    "projects": "Projects",
    "programs": "Programs",
    "resources": "Resources",
    "news": "News"
  },
  "home": {
    "hero_title": "Free Software, Free Society",
    "hero_subtitle": "Empowering communities through open source technology.",
    "mission_header": "Our Mission",
    "mission_text": "Swecha is a vibrant community..."
  },
  "projects": {
    "search_placeholder": "Search projects...",
    "no_results": "No projects found."
  }
}
```

---

## 2. API Data Contracts
Data structures for content fetched from backend/CMS APIs.

### Project Interface
```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  logoUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'hardware';
  tags: string[];
  contributorsCount: number;
  featured: boolean;
}
```

### Program Interface
```typescript
export interface Program {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  startDate: string;
  endDate?: string;
  registrationOpen: boolean;
  registrationUrl?: string;
}
```

---

## 3. Component Hierarchy & Flow

```text
MainLayout (i18n Context)
 ├── Navigation (locale, currentPath)
 │    └── LanguageSwitcher (locale) -> updates URL route prefix
 ├── Slot (Page content)
 │    └── PageComponent
 │         └── InteractiveIslands (hydrated with React components)
 └── Footer (locale)
```
