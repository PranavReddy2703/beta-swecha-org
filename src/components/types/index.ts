// src/components/types/index.ts
// Shared TypeScript interfaces for all atomic components and JSON data structures.

// ─── Atom Types ────────────────────────────────────────────────

export interface NavLinkItem {
  id: string;
  label: string;
}

export interface SocialIconData {
  href: string;
  label: string;
  platform:
    | "github"
    | "gitlab"
    | "twitter"
    | "email"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "facebook"
    | "huggingface";
}

export type BadgeVariant = "hero" | "status" | "tag" | "featured";

export type ButtonVariant = "primary" | "secondary";

export type ProjectStatus = "Active" | "Completed" | "Ongoing";

// ─── Molecule Types ────────────────────────────────────────────

export interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  iconSvg: string;
  accentColor: "primary" | "secondary";
}

export interface ContactCardData {
  title: string;
  value: string;
  icon: "MapPin" | "Mail" | "Phone" | "GraduationCap";
  link?: string;
}

export interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  link: string;
}

export interface FeaturedProjectData {
  title: string;
  description: string;
  imageLabel: string;
  image?: string;
  link: string;
}

export interface CategoryData {
  title: string;
  iconSvg: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  tags?: string[];
  previewImage?: string;
}

export type CategoryBadgeVariant = "cyan" | "green";

export interface NewsSlideData {
  titleKey: string;
  descKey: string;
  link: string;
  image: string;
}

export interface NewsCardData {
  titleKey: string;
  descKey: string;
  buttonTextKey: string;
  link: string;
  image: string;
  gridClass?: string;
}

export interface LatestUpdateData {
  titleKey: string;
  descKey: string;
  link: string;
}

// ─── Organism Types ────────────────────────────────────────────

export interface HeroData {
  badge: string;
  heading: [string, string];
  subheading: string;
  buttons: {
    explore: string;
    learn: string;
  };
}

export interface FooterData {
  copyrightTemplate: string;
}

export interface ContactChannelData {
  title: string;
  value: string;
  icon: "MapPin" | "Mail" | "Phone" | "GraduationCap";
  link?: string;
}

export interface ContactPageData {
  address: {
    raw: string;
    display: string;
  };
  channels: ContactChannelData[];
  gmailRedirects: {
    reachus: string;
    internships: string;
  };
  map: {
    title: string;
    coordinates: string;
    googleMapsUrl: string;
    embedUrl: string;
  };
}

// ─── Global / Layout Types ─────────────────────────────────────

export interface BrandData {
  name: string;
  suffix: string;
  tagline: string;
}

export interface LayoutData {
  defaultTitle: string;
  defaultDesc: string;
  openMenu: string;
  selectLanguage: string;
  toggleTheme: string;
}

export interface DevPageData {
  stage: string;
  returnHome: string;
  news: { desc: string };
  initiatives: { desc: string };
  projects: { desc: string };
}

export interface SiteData {
  brand: BrandData;
  layout: LayoutData;
  dev: DevPageData;
}
