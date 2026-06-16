// src/i18n/ui.ts
import siteData from '../data/site.json';
import te from './locales/te.json';
import hi from './locales/hi.json';

export const languages = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिन्दी',
};

export const defaultLang = 'en';

const en = {
  "nav.about": siteData.navLinks.find(l => l.id === "about")?.label || "",
  "nav.projects": siteData.navLinks.find(l => l.id === "projects")?.label || "",
  "nav.programs": siteData.navLinks.find(l => l.id === "programs")?.label || "",
  "nav.resources": siteData.navLinks.find(l => l.id === "resources")?.label || "",
  "nav.news": siteData.navLinks.find(l => l.id === "news")?.label || "",
  "nav.selectLanguage": siteData.layout.selectLanguage,
  "nav.toggleTheme": siteData.layout.toggleTheme,
  
  "hero.badge": siteData.hero.badge,
  "hero.title1": siteData.hero.heading[0],
  "hero.title2": siteData.hero.heading[1],
  "hero.desc": siteData.hero.subheading,
  "hero.btn.explore": siteData.hero.buttons.explore,
  "hero.btn.learn": siteData.hero.buttons.learn,

  "card.island.title": siteData.cards.find(c => c.id === "island")?.title || "",
  "card.island.desc": siteData.cards.find(c => c.id === "island")?.desc || "",
  "card.i18n.title": siteData.cards.find(c => c.id === "i18n")?.title || "",
  "card.i18n.desc": siteData.cards.find(c => c.id === "i18n")?.desc || "",
  "card.responsive.title": siteData.cards.find(c => c.id === "responsive")?.title || "",
  "card.responsive.desc": siteData.cards.find(c => c.id === "responsive")?.desc || "",

  "about.title": siteData.about.title,
  "about.p1": siteData.about.paragraphs[0] || "",
  "about.p2": siteData.about.paragraphs[1] || "",
  "about.p3": siteData.about.paragraphs[2] || "",
  "about.p4": siteData.about.paragraphs[3] || "",

  "layout.defaultTitle": siteData.layout.defaultTitle,
  "layout.defaultDesc": siteData.layout.defaultDesc,
  "nav.openMenu": siteData.layout.openMenu,

  "dev.stage": siteData.dev.stage,
  "dev.returnHome": siteData.dev.returnHome,
  "news.dev.desc": siteData.dev.news.desc,
  "programs.dev.desc": siteData.dev.programs.desc,
  "projects.dev.desc": siteData.dev.projects.desc,
  "resources.dev.desc": siteData.dev.resources.desc
};

export const ui = {
  en,
  te,
  hi,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
export type UIKey = keyof typeof en;
