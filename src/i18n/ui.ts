// src/i18n/ui.ts
import siteData from '../data/site.json';
import navbarData from '../data/organisms/navbar.json';
import heroData from '../data/organisms/hero.json';
import timelineData from '../data/organisms/timeline.json';
import featureCardsData from '../data/molecules/featureCards.json';
import te from './locales/te.json';
import hi from './locales/hi.json';

export const languages = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिन्दी',
};

export const defaultLang = 'en';

const en = {
  "nav.about": navbarData.links.find(l => l.id === "about")?.label || "",
  "nav.projects": navbarData.links.find(l => l.id === "projects")?.label || "",
  "nav.programs": navbarData.links.find(l => l.id === "programs")?.label || "",
  "nav.resources": navbarData.links.find(l => l.id === "resources")?.label || "",
  "nav.news": navbarData.links.find(l => l.id === "news")?.label || "",
  "nav.contact": navbarData.links.find(l => l.id === "contact")?.label || "Contact Us",
  "nav.selectLanguage": siteData.layout.selectLanguage,
  "nav.toggleTheme": siteData.layout.toggleTheme,

  "hero.badge": heroData.badge,
  "hero.title1": heroData.heading[0],
  "hero.title2": heroData.heading[1],
  "hero.desc": heroData.subheading,
  "hero.btn.explore": heroData.buttons.explore,
  "hero.btn.learn": heroData.buttons.learn,

  "card.island.title": featureCardsData.find(c => c.id === "island")?.title || "",
  "card.island.desc": featureCardsData.find(c => c.id === "island")?.description || "",
  "card.i18n.title": featureCardsData.find(c => c.id === "i18n")?.title || "",
  "card.i18n.desc": featureCardsData.find(c => c.id === "i18n")?.description || "",
  "card.responsive.title": featureCardsData.find(c => c.id === "responsive")?.title || "",
  "card.responsive.desc": featureCardsData.find(c => c.id === "responsive")?.description || "",

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
  "contact.cta.btn.join": "Join Community",
  "timeline.title": "Our Journey",
  "timeline.0.title": timelineData[0].title,
  "timeline.0.description": timelineData[0].description,
  "timeline.1.title": timelineData[1].title,
  "timeline.1.description": timelineData[1].description,
  "timeline.2.title": timelineData[2].title,
  "timeline.2.description": timelineData[2].description,
  "timeline.3.title": timelineData[3].title,
  "timeline.3.description": timelineData[3].description,
  "timeline.4.title": timelineData[4].title,
  "timeline.4.description": timelineData[4].description,

  // ── News & Updates (upstream merge) ──
  "news.title": "News & Updates",
  "news.subtitle": "Latest announcements, community initiatives, AI developments, open-source projects, events, and technology updates from Swecha.",
  "news.btn.explore": "Explore Initiatives",
  "news.btn.learn": "Learn More",
  "news.btn.read": "Read Article",
  "news.btn.view": "View Event",
  "news.btn.join": "Join Meetup",
  "news.btn.readMore": "Read More",
  "news.latest.title": "Latest Updates",

  "news.featured.category": "FEATURED",
  "news.featured.headline": "Building India's Open AI Future",
  "news.featured.desc": "Swecha is helping shape India's open and community-driven AI ecosystem.",

  "news.card1.category": "DATATHON",
  "news.card1.headline": "Telangana Launches Datathon for Telugu LLM",
  "news.card1.desc": "Statewide initiative to build a Telugu Large Language Model.",

  "news.card2.category": "OPEN SOURCE AI",
  "news.card2.headline": "VISWAM.AI Releases Draft Open AI License",
  "news.card2.desc": "Draft framework promoting responsible and community-owned AI.",

  "news.card3.category": "AI HACKDAY",
  "news.card3.headline": "AI Hackday Empowers 2,000 Students",
  "news.card3.desc": "Over 2,000 students collaborated on AI solutions for social impact.",

  "news.card4.category": "COMMUNITY",
  "news.card4.headline": "Join the Swecha Open Source Community",
  "news.card4.desc": "Join developers, educators, and contributors across India.",

  "news.card5.category": "DIGITAL FREEDOM",
  "news.card5.headline": "Promoting Digital Freedom Through Open Technology",
  "news.card5.desc": "Advancing open technology, digital rights, and free software.",

  "news.update1.headline": "Understanding Trust & Safety in AI",
  "news.update1.desc": "Responsible AI governance and transparency.",

  "news.update2.headline": "Open Source Fellowship Program",
  "news.update2.desc": "Mentorship-driven contributor program.",

  "news.update3.headline": "Rural Technology Initiative",
  "news.update3.desc": "Expanding digital literacy and access."
};

export const ui = {
  en,
  te,
  hi,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
export type UIKey = keyof typeof en;
