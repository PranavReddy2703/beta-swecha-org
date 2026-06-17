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
  "resources.dev.desc": siteData.dev.resources.desc,

  "nav.contact": "Contact Us",
  "contact.title": "Contact Us",
  "contact.subtitle": "We'd love to hear from you. Connect with the Swecha community through any of the channels below.",
  "contact.address.title": "Address",
  "contact.address.value": "Swecha\nSy No. 91\nBeside Centre for Good Governance\nGreenlands Colony\nSVM\nJawaharlal\nNehru Outer Ring Road\nMadhava Reddy Colony\nGachibowli\nHyderabad\nTelangana 500032",
  "contact.email.title": "Email Us",
  "contact.email.value": "reachus@swecha.net",
  "contact.phone.title": "Call Us",
  "contact.phone.value": "+91 89775 03615",
  "contact.internship.title": "Internship Queries",
  "contact.internship.value": "internships@swecha.org",
  "contact.map.title": "Office Location",
  "contact.location.directions": "Get Directions",
  "contact.location.open_maps": "Open Google Maps",
  "contact.location.copy": "Copy Address",
  "contact.location.copied": "Copied!",
  "contact.form.title": "Send Us a Message",
  "contact.form.subtitle": "We'll get back to you as soon as possible.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.subject": "Subject",
  "contact.form.message": "Message",
  "contact.form.send": "Send Message",
  "contact.cta.title": "Want to collaborate with Swecha?",
  "contact.cta.desc": "We're always excited to work with contributors, volunteers, educators, and open-source enthusiasts.",
  "contact.cta.btn.email": "Email Us",
  "contact.cta.btn.projects": "Explore Projects",
  "contact.cta.btn.join": "Join Community"
};

export const ui = {
  en,
  te,
  hi,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
export type UIKey = keyof typeof en;
