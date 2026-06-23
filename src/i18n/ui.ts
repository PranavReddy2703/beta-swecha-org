// src/i18n/ui.ts
import siteData from "../data/site.json";
import navbarData from "../data/organisms/navbar.json";
import heroData from "../data/organisms/hero.json";
import timelineData from "../data/organisms/timeline.json";
import featureCardsData from "../data/molecules/featureCards.json";
import te from "./locales/te.json";
import hi from "./locales/hi.json";

export const languages = {
  en: "English",
  te: "తెలుగు",
  hi: "हिन्दी",
};

export const defaultLang = "en";

import enJson from "./locales/en.json";

const en = {
  ...enJson,

  "nav.about": navbarData.links.find((l) => l.id === "about")?.label || "",
  "nav.projects":
    navbarData.links.find((l) => l.id === "projects")?.label || "",
  "nav.initiatives":
    navbarData.links.find((l) => l.id === "initiatives")?.label || "",
  "nav.events": navbarData.links.find((l) => l.id === "events")?.label || "",
  "nav.news": navbarData.links.find((l) => l.id === "news")?.label || "",
  "nav.donations":
    navbarData.links.find((l) => l.id === "donations")?.label || "Donations",
  "nav.contact":
    navbarData.links.find((l) => l.id === "contact")?.label || "Contact Us",
  "nav.selectLanguage": siteData.layout.selectLanguage,
  "nav.toggleTheme": siteData.layout.toggleTheme,

  "hero.badge": heroData.badge,
  "hero.title1": heroData.heading[0],
  "hero.title2": heroData.heading[1],
  "hero.desc": heroData.subheading,
  "hero.btn.explore": heroData.buttons.explore,
  "hero.btn.learn": heroData.buttons.learn,
  "hero.stats.students.val": heroData.stats.students.val,
  "hero.stats.students.lbl": heroData.stats.students.lbl,
  "hero.stats.workshops.val": heroData.stats.workshops.val,
  "hero.stats.workshops.lbl": heroData.stats.workshops.lbl,
  "hero.stats.projects.val": heroData.stats.projects.val,
  "hero.stats.projects.lbl": heroData.stats.projects.lbl,
  "hero.stats.years.val": heroData.stats.years.val,
  "hero.stats.years.lbl": heroData.stats.years.lbl,
  "hero.pillar.vishwam.title": heroData.pillars.vishwam.title,
  "hero.pillar.vishwam.desc": heroData.pillars.vishwam.desc,
  "hero.pillar.os.title": heroData.pillars.os.title,
  "hero.pillar.os.desc": heroData.pillars.os.desc,
  "hero.pillar.code4change.title": heroData.pillars.code4change.title,
  "hero.pillar.code4change.desc": heroData.pillars.code4change.desc,
  "hero.pillar.health.title": heroData.pillars.health.title,
  "hero.pillar.health.desc": heroData.pillars.health.desc,

  "card.island.title":
    featureCardsData.find((c) => c.id === "island")?.title || "",
  "card.island.desc":
    featureCardsData.find((c) => c.id === "island")?.description || "",
  "card.i18n.title": featureCardsData.find((c) => c.id === "i18n")?.title || "",
  "card.i18n.desc":
    featureCardsData.find((c) => c.id === "i18n")?.description || "",
  "card.responsive.title":
    featureCardsData.find((c) => c.id === "responsive")?.title || "",
  "card.responsive.desc":
    featureCardsData.find((c) => c.id === "responsive")?.description || "",

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
  "initiatives.dev.desc": siteData.dev.initiatives.desc,
  "projects.dev.desc": siteData.dev.projects.desc,

  "contact.subtitle": enJson["contact.subtitle"],
  "contact.address.value": enJson["contact.address.value"],
  "contact.cta.desc": enJson["contact.cta.desc"],

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

  "news.subtitle": enJson["news.subtitle"],
  "news.featured.desc": enJson["news.featured.desc"],
  "news.card1.desc": enJson["news.card1.desc"],
  "news.card2.desc": enJson["news.card2.desc"],
  "news.card3.desc": enJson["news.card3.desc"],
  "news.card4.desc": enJson["news.card4.desc"],
  "news.card5.desc": enJson["news.card5.desc"],

  "event.description": enJson["event.description"],
  "event.about.desc": enJson["event.about.desc"],
  "event.track1.desc": enJson["event.track1.desc"],
  "event.track2.desc": enJson["event.track2.desc"],
  "event.cta.desc": enJson["event.cta.desc"],
  "events.subtitle": enJson["events.subtitle"],
  "donations.subtitle": enJson["donations.subtitle"],
  "donations.why.desc": enJson["donations.why.desc"],
  "donations.why.education.desc": enJson["donations.why.education.desc"],
  "donations.why.foss.desc": enJson["donations.why.foss.desc"],
  "donations.why.community.desc": enJson["donations.why.community.desc"],
  "donations.methods.subtitle": enJson["donations.methods.subtitle"],
  "donations.method.bank.desc": enJson["donations.method.bank.desc"],
  "donations.method.cheque.desc": enJson["donations.method.cheque.desc"],
  "donations.tax.desc": enJson["donations.tax.desc"],
  "donations.cta.desc": enJson["donations.cta.desc"],
};

export const ui = {
  en,
  te,
  hi,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
export type UIKey = keyof typeof en;
