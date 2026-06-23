import fs from "fs";
import path from "path";
import translate from "google-translate-api-x";

const NEWS_JSON_PATH = path.join(process.cwd(), "src/data/organisms/news.json");
const FEATURED_JSON_PATH = path.join(
  process.cwd(),
  "src/data/organisms/featured-news.json",
);

const rawArticles = [
  {
    isFeatured: true,
    title:
      "Telangana ITE&C Dept announces Datathon in association with Swecha to create Telugu Large Language Model",
    description:
      "The datathon represents a significant step towards collecting and digitizing a diverse range of Telugu linguistic and cultural resources. Participants will gather data from various oral sources, including folk tales, songs, and local histories.",
    publication: "ETGovernment",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=government.economictimes.indiatimes.com&sz=128",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-111597202,imgsize-28878,width-1200,height=627,overlay-etgovernment,resizemode-75/news/technology/telangana-itec-dept-announces-datathon-in-association-with-swecha-to-create-telugu-large-language-model.jpg",
    url: "https://government.economictimes.indiatimes.com/news/technology/telangana-itec-dept-announces-datathon-in-association-with-swecha-to-create-telugu-large-language-model/111597202",
    dateObj: new Date("2024-07-08"),
    category: "AI & Society",
  },
  {
    isFeatured: true,
    title:
      "IIIT Hyderabad and Swecha Host AI Hackday, Empowering 2000 Students to Build AI for Social Good",
    description:
      "Swecha and IIIT Hyderabad organized AI Hackday, a massive hackathon designed to foster people-centric AI development. Over 20 colleges, 60 faculty members, and 100 industry mentors guided 2000 students to create inclusive AI solutions.",
    publication: "Machine Maker",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=themachinemaker.com&sz=128",
    image:
      "https://themachinemaker.com/wp-content/uploads/2025/01/iiit-hyderabad.jpg",
    url: "https://themachinemaker.com/news/iiit-hyderabad-and-swecha-org-host-ai-hackday-empowering-2000-students-to-build-ai-for-social-good/",
    dateObj: new Date("2024-01-30"),
    category: "Hackathon",
  },
  {
    isFeatured: true,
    title: "Swecha launches Telugu AI model 'Chandamama Kathalu'",
    description:
      "Free software movement group Swecha has unveiled 'Chandamama Kathalu', an AI model tailored for Telugu. Unlike massive global LLMs, this model focuses on efficient performance to preserve the linguistic nuances and cultural heritage of Telugu stories.",
    publication: "The Hindu BusinessLine",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=thehindubusinessline.com&sz=128",
    image:
      "https://bl-i.thgim.com/public/news/national/a5er6p/article67691340.ece/alternates/LANDSCAPE_1200/swech_ai_story.jpg",
    url: "https://www.thehindubusinessline.com/info-tech/swecha-launches-telugu-ai-model-chandamama-kathalu/article67690623.ece",
    dateObj: new Date("2023-12-30"),
    category: "AI Models",
  },
  {
    isFeatured: true,
    title:
      "Viswam.AI: IIIT Hyderabad and Swecha announce joint Centre of Excellence for AI",
    description:
      "Aiming to democratize access to AI technologies in the Global South, IIIT Hyderabad and Swecha have launched Viswam.ai. The initiative focuses on building models that serve local languages and unique regional challenges.",
    publication: "The Hindu",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=thehindu.com&sz=128",
    image:
      "https://th-i.thgim.com/public/news/cities/Hyderabad/k7t5b0/article68884988.ece/alternates/LANDSCAPE_1200/20241119HYDE03_VISWAM_AI_PRESS_MEET.jpg",
    url: "https://www.thehindu.com/news/cities/Hyderabad/iiit-h-and-swecha-launch-viswamai-coe-for-global-south/article68884976.ece",
    dateObj: new Date("2024-11-19"),
    category: "Partnerships",
  },
  {
    isFeatured: false,
    title: "Swecha to digitize local folklore via Telugu LLM",
    description:
      "As part of its large-scale internship program, Swecha is engaging students to collect, translate, and digitize local folklore, songs, and heritage data. This grassroots effort will train their upcoming open-source Telugu language models.",
    publication: "Telangana Today",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=telanganatoday.com&sz=128",
    image:
      "https://images.telanganatoday.com/wp-content/uploads/2024/07/Swecha-Telugu-LLM-Datathon.jpg",
    url: "https://telanganatoday.com/hyderabad-swecha-to-digitize-local-folklore-via-telugu-llm",
    dateObj: new Date("2024-07-09"),
    category: "Digital Heritage",
  },
  {
    isFeatured: false,
    title:
      "Swecha Gonthuka project aims to build a comprehensive Telugu AI voice assistant",
    description:
      "Swecha has introduced 'Swecha Gonthuka', an ambitious voice collection drive. Volunteers across Telangana are contributing thousands of hours of spoken Telugu to build an open-source AI voice assistant capable of regional dialects.",
    publication: "The Hindu",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=thehindu.com&sz=128",
    image:
      "https://th-i.thgim.com/public/news/cities/Hyderabad/t9b9d3/article68123454.ece/alternates/LANDSCAPE_1200/20240502HYDE06_SWECHA_GONTHUKA_PROJECT.jpg",
    url: "https://www.thehindu.com/news/cities/Hyderabad/swecha-gonthuka-project-to-build-telugu-ai-voice-assistant/article68123456.ece",
    dateObj: new Date("2024-05-02"),
    category: "Voice AI",
  },
  {
    isFeatured: false,
    title: "AI Days 2024 focuses on democratising Artificial Intelligence",
    description:
      "Held at JNTU Hyderabad, the AI Days 2024 conference, co-organized by Swecha, brought together students, researchers, and policymakers to discuss the ethics, open-source licensing, and grassroots impact of AI.",
    publication: "The Hindu",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=thehindu.com&sz=128",
    image:
      "https://th-i.thgim.com/public/news/national/telangana/u3b4x3/article68007282.ece/alternates/LANDSCAPE_1200/20240330HYDE07_AI_DAYS_2024_CONF.jpg",
    url: "https://www.thehindu.com/news/national/telangana/ai-days-2024-focuses-on-democratising-artificial-intelligence/article68007283.ece",
    dateObj: new Date("2024-03-30"),
    category: "Conferences",
  },
  {
    isFeatured: false,
    title:
      "Understanding Trust and Safety in AI: Swecha hosts major roundtable",
    description:
      "A pivotal roundtable at IIIT Hyderabad, hosted by Swecha and SFLC.in, debated the intersection of AI innovation and copyright. Experts drafted a new open-source AI license for the Indian context.",
    publication: "The Hindu",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=thehindu.com&sz=128",
    image:
      "https://th-i.thgim.com/public/news/cities/Hyderabad/3x5f2a/article68582121.ece/alternates/LANDSCAPE_1200/20240830HYDE09_SWECHA_ROUNDTABLE.jpg",
    url: "https://www.thehindu.com/news/cities/Hyderabad/understanding-trust-and-safety-in-ai/article68582123.ece",
    dateObj: new Date("2024-08-30"),
    category: "AI Governance",
  },
  {
    isFeatured: false,
    title: "Swecha unveils 'Chandamama Kathalu' in Telugu with AI model",
    description:
      "Swecha successfully demonstrated an AI model that generates new Telugu stories in the style of the classic Chandamama magazines, proving the efficacy of small language models for specific cultural tasks.",
    publication: "New Indian Express",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=newindianexpress.com&sz=128",
    image:
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/12/31/w1200X800/Chandamama_Kathalu.jpg",
    url: "https://www.newindianexpress.com/states/telangana/2023/Dec/31/swecha-unveils-chandamama-kathalu-in-telugu-with-ai-model-2646452.html",
    dateObj: new Date("2023-12-31"),
    category: "Storytelling AI",
  },
  {
    isFeatured: false,
    title: "Thousands gather for Swecha's Open Source Technologies Summit",
    description:
      "Emphasizing that technology must serve society, Swecha's annual summit attracted over 5,000 engineering students who contributed to health-tech, agri-tech, and open-source civic platforms.",
    publication: "Swecha.org",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=swecha.org&sz=128",
    image:
      "https://swecha.org/sites/default/files/styles/large/public/2023-12/Swecha_Summit.jpg",
    url: "https://swecha.org/news/summit2023",
    dateObj: new Date("2023-12-15"),
    category: "Community",
  },
  {
    isFeatured: false,
    title:
      "Bridging the Digital Divide: Swecha's Free Software interventions in rural schools",
    description:
      "Through customized GNU/Linux operating systems, Swecha has equipped hundreds of rural government schools with functional, free software-based computer labs, completely avoiding costly proprietary licenses.",
    publication: "Freedom Matters",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=freedommatters.in&sz=128",
    image:
      "https://freedommatters.in/wp-content/uploads/2022/10/swecha-school.jpg",
    url: "https://freedommatters.in/swecha-rural-schools",
    dateObj: new Date("2023-10-10"),
    category: "Education",
  },
  {
    isFeatured: false,
    title: "Hyderabad's Swecha org launches an AI model on Chandamama Kathalu",
    description:
      "Featured on the national IndiaAI portal, Swecha’s new generative AI model bridges generations by recreating beloved Telugu folklore through modern AI architecture, setting a precedent for vernacular AI.",
    publication: "IndiaAI",
    publicationLogo:
      "https://www.google.com/s2/favicons?domain=indiaai.gov.in&sz=128",
    image:
      "https://indiaai.gov.in/assets/images/news/hyderabad-s-swecha-org-launches-an-ai-model-on-chandamama-kathalu-768x432.jpg",
    url: "https://indiaai.gov.in/news/hyderabad-s-swecha-org-launches-an-ai-model-on-chandamama-kathalu",
    dateObj: new Date("2024-01-02"),
    category: "National News",
  },
];

async function translateText(text) {
  try {
    const [teRes, hiRes] = await Promise.all([
      translate(text, { to: "te" }),
      translate(text, { to: "hi" }),
    ]);
    return {
      en: text,
      te: teRes.text,
      hi: hiRes.text,
    };
  } catch (e) {
    console.error("Translation error:", e.message);
    return { en: text, te: text, hi: text };
  }
}

async function processArticles() {
  const featuredList = [];
  const articleList = [];

  for (let i = 0; i < rawArticles.length; i++) {
    const raw = rawArticles[i];
    console.log(`Processing [${i + 1}/${rawArticles.length}]: ${raw.title}`);

    const titleObj = await translateText(raw.title);
    const descObj = await translateText(raw.description);
    const authorObj = await translateText("Editorial Desk");
    const categoryObj = await translateText(raw.category);

    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const dateEn = raw.dateObj.toLocaleDateString("en-US", dateOptions);
    const dateTe = await translateText(dateEn);
    const dateHi = await translateText(dateEn);

    // estimate reading time
    const wordCount = raw.description.split(/\s+/).length + 200;
    const readingTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    const readingTimeObj = {
      en: `${readingTimeMins} min read`,
      te: `${readingTimeMins} ని. పఠనం`,
      hi: `${readingTimeMins} मिनट`,
    };

    const articleObj = {
      id: `article-${Date.now()}-${i}`,
      year: raw.dateObj.getFullYear(),
      date: {
        en: dateEn,
        te: dateTe.te,
        hi: dateHi.hi,
      },
      readingTime: readingTimeObj,
      publication: raw.publication,
      publicationLogo: raw.publicationLogo,
      category: categoryObj,
      author: authorObj,
      title: titleObj,
      description: descObj,
      summary: descObj,
      image: raw.image,
      url: raw.url,
    };

    if (raw.isFeatured) {
      featuredList.push(articleObj);
    } else {
      articleList.push(articleObj);
    }

    // rate limit
    await new Promise((r) => setTimeout(r, 800));
  }

  // Write featured
  fs.writeFileSync(FEATURED_JSON_PATH, JSON.stringify(featuredList, null, 2));

  // Write articles
  let currentNews = { articles: [], milestones: [] };
  if (fs.existsSync(NEWS_JSON_PATH)) {
    try {
      currentNews = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, "utf-8"));
    } catch (e) {}
  }
  currentNews.articles = articleList;
  fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(currentNews, null, 2));

  console.log("Done generating perfect Swecha news!");
}

processArticles().catch(console.error);
