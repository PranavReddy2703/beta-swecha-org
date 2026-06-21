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
  "nav.initiatives": navbarData.links.find(l => l.id === "initiatives")?.label || "",
  "nav.initiatives.vishwamai": "VISHWAM.ai",
  "nav.initiatives.devdays": "DevDays",
  "nav.initiatives.publichealth": "Public Health",
  "nav.initiatives.more": "More",
  "nav.events": navbarData.links.find(l => l.id === "events")?.label || "",
  "nav.news": navbarData.links.find(l => l.id === "news")?.label || "",
  "nav.donations": navbarData.links.find(l => l.id === "donations")?.label || "Donations",
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
  "initiatives.dev.desc": siteData.dev.initiatives.desc,
  "projects.dev.desc": siteData.dev.projects.desc,

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
  "contact.map.navigate": "Open in Google Maps",
  "contact.map.open_osm": "Open in OSM",
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
  "news.update3.desc": "Expanding digital literacy and access.",

  // ── Event Experience Page ──
  "event.badge": "AI GOVERNANCE EVENT",
  "event.title": "Understanding Trust & Safety in AI",
  "event.subtitle": "From Code to Creativity",
  "event.description": "A stakeholder consultation event exploring responsible AI development, governance, transparency, and community participation.",
  
  "event.info.date.label": "Date",
  "event.info.date.value": "31 January 2026",
  "event.info.time.label": "Time",
  "event.info.time.value": "9:30 AM – 2:00 PM",
  "event.info.venue.label": "Venue",
  "event.info.venue.value": "IIIT Hyderabad",
  "event.info.mode.label": "Mode",
  "event.info.mode.value": "In-Person",

  "event.about.title": "About The Event",
  "event.about.desc": "Artificial Intelligence is rapidly reshaping our world, from the code that powers our systems to the creative works that define our culture. As AI models become more integrated into daily life, understanding the frameworks for trust, safety, and governance is paramount.\n\nThis stakeholder consultation event at IIIT Hyderabad brings together developers, academicians, policymakers, and open-source advocates to explore the path forward. By focusing on transparency, accountability, and community participation, we aim to bridge the gap between rapid technological innovation and responsible societal impact. Join us to discuss how open-source technologies can ensure that the benefits of AI are shared equitably and developed ethically.",

  "event.tracks.title": "Discussion Tracks",
  "event.track1.title": "Harnessing Open Source AI",
  "event.track1.desc": "Exploring transparent, accountable, and inclusive AI through open technologies and community collaboration.",
  "event.track2.title": "Balancing AI Innovation & Copyright",
  "event.track2.desc": "Examining licensing frameworks, governance models, copyright implications, and responsible AI innovation.",

  "event.highlights.title": "Event Highlights",
  "event.highlight1": "Open Source AI",
  "event.highlight2": "Responsible Innovation",
  "event.highlight3": "AI Governance",
  "event.highlight4": "Community Participation",
  "event.highlight5": "Policy Discussions",
  "event.highlight6": "Industry Collaboration",

  "event.cta.title": "Join the Consultation",
  "event.cta.desc": "Be part of shaping the future of AI governance. Register to reserve your seat at IIIT Hyderabad.",
  "event.btn.register": "Register Now",
  "event.btn.readMore": "Read More",

  // ── Events Platform Listing Page ──
  "events.title": "Events",
  "events.subtitle": "Explore upcoming conferences, hackathons, workshops, meetups, and open-source community programs organized by Swecha.",
  "events.filter.all": "All",
  "events.filter.upcoming": "Upcoming",
  "events.filter.ongoing": "Ongoing",
  "events.filter.past": "Past",
  "events.filter.workshops": "Workshops",
  "events.filter.hackathons": "Hackathons",
  "events.filter.meetups": "Meetups",
  "events.search.placeholder": "Search events...",
  "events.btn.register": "Register Now",
  "events.btn.viewDetails": "View Details",
  "events.btn.viewEvent": "View Event",
  "events.btn.viewSummary": "View Summary",
  "events.active.title": "Active Events",
  "events.upcoming.title": "Upcoming Events",
  "events.past.title": "Past Events",
  "events.empty": "No events match your search or filter.",

  // ── Donations Page ──
  "donations.badge": "SUPPORT FREE SOFTWARE",
  "donations.title": "Support Swecha",
  "donations.title2": "Empower Digital Freedom",
  "donations.subtitle": "Your contribution helps Swecha bridge the digital divide, build free software solutions, and empower communities across India with open-source technology and digital literacy.",

  "donations.impact.students": "Students Trained",
  "donations.impact.workshops": "Workshops Conducted",
  "donations.impact.projects": "FOSS Projects",
  "donations.impact.years": "Years of Impact",

  "donations.why.title": "Why Donate to Swecha?",
  "donations.why.desc": "Swecha is a community-driven organization dedicated to providing free software solutions and bridging the digital divide. Every donation directly supports our mission of digital inclusion, education, and community-driven open-source development.",
  "donations.why.education.title": "Digital Education",
  "donations.why.education.desc": "Fund digital literacy programs in government schools and rural communities across Telangana.",
  "donations.why.foss.title": "Free Software Development",
  "donations.why.foss.desc": "Support development of Telugu-localized free software, Swecha OS, and AI initiatives like VISHWAM.ai.",
  "donations.why.community.title": "Community Building",
  "donations.why.community.desc": "Enable workshops, hackathons, DevDays, and community meetups that bring together developers and students.",

  "donations.methods.title": "How to Donate",
  "donations.methods.subtitle": "Choose your preferred method to make a contribution to Swecha.",

  "donations.method.bank.title": "Bank Transfer (NEFT/RTGS)",
  "donations.method.bank.desc": "Make a direct bank transfer to Swecha's official account.",
  "donations.method.upi.title": "UPI Payment",
  "donations.method.upi.desc": "Instant payment via any UPI-enabled app.",
  "donations.method.cheque.title": "Cheque / Demand Draft",
  "donations.method.cheque.desc": "Send a cheque or DD payable to Swecha at our registered address.",

  "donations.bank.name": "Bank Name",
  "donations.bank.account": "Account No.",
  "donations.bank.ifsc": "IFSC Code",
  "donations.bank.branch": "Branch",

  "donations.upi.id": "UPI ID",
  "donations.upi.scan": "Scan QR code in any UPI app to pay",

  "donations.cheque.payee": "Payable To",
  "donations.cheque.address": "Send To",

  "donations.tax.title": "Tax Exemption under 80G",
  "donations.tax.desc": "Donations to Swecha are eligible for tax exemption under Section 80G of the Income Tax Act. A receipt will be issued for all donations. Please contact us at reachus@swecha.net for your tax exemption certificate.",

  "donations.cta.title": "Every Contribution Counts",
  "donations.cta.desc": "Whether big or small, your donation makes a real difference in empowering communities with free software and digital literacy.",
  "donations.cta.btn.email": "Donate Now",
  "donations.cta.btn.contact": "Contact Us"
};

export const ui = {
  en,
  te,
  hi,
} as const;

export type UI = typeof ui;
export type Lang = keyof UI;
export type UIKey = keyof typeof en;
