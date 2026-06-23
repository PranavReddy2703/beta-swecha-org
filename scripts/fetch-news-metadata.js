import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import translate from "google-translate-api-x";

const NEWS_JSON_PATH = path.join(process.cwd(), "src/data/organisms/news.json");
const FEATURED_JSON_PATH = path.join(
  process.cwd(),
  "src/data/organisms/featured-news.json",
);
const SOURCE_JSON_PATH = path.join(process.cwd(), "src/data/news-source.json");

// Initialize dummy source file if it doesn't exist
if (!fs.existsSync(SOURCE_JSON_PATH)) {
  fs.writeFileSync(
    SOURCE_JSON_PATH,
    JSON.stringify(
      {
        featured: [
          "https://government.economictimes.indiatimes.com/news/technology/telangana-itec-dept-announces-datathon-in-association-with-swecha-to-create-telugu-large-language-model/111597202",
          "https://telanganatoday.com/hyderabad-swecha-to-digitize-local-folklore-via-telugu-llm",
          "https://www.thehindu.com/news/cities/Hyderabad/swecha-ai-days-2025-ai-for-society/article8872656.ece",
        ],
        articles: [
          "https://themachinemaker.com/news/iiit-hyderabad-and-swecha-org-host-ai-hackday-empowering-2000-students-to-build-ai-for-social-good/",
          "https://www.newindianexpress.com/cities/hyderabad/swecha-ehrs-project-digital-health-empowerment",
        ],
      },
      null,
      2,
    ),
  );
  console.log("Created dummy news-source.json");
}

async function fetchMetadata(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });
    const html = await res.text();
    const $ = cheerio.load(html);

    const title =
      $('meta[property="og:title"]').attr("content") ||
      $("title").text() ||
      "Unknown Title";
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $('meta[name="description"]').attr("content") ||
      "No description available.";
    const image =
      $('meta[property="og:image"]').attr("content") ||
      "/images/news-placeholder.webp";
    const siteName =
      $('meta[property="og:site_name"]').attr("content") ||
      new URL(url).hostname;

    // Attempt to extract reading time or date from standard tags
    const pubDateStr =
      $('meta[property="article:published_time"]').attr("content") ||
      new Date().toISOString();
    const dateObj = new Date(pubDateStr);

    // Dynamically extract author
    const author =
      $('meta[name="author"]').attr("content") ||
      $('meta[property="article:author"]').attr("content") ||
      "Editorial Desk";

    // Dynamically extract category
    const category =
      $('meta[property="article:section"]').attr("content") || "News";

    // Use Google Favicon service to consistently get high-quality site icons
    let pubLogo = "/images/logos/default_pub.svg";
    try {
      const hostname = new URL(url).hostname;
      pubLogo = `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
    } catch (e) {
      console.warn("Could not parse hostname for favicon:", url);
    }

    // Estimate reading time
    const textContent = $("body").text() || "";
    const wordCount = textContent.split(/\\s+/).length;
    const readingTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    return {
      title,
      description,
      image,
      siteName,
      dateObj,
      url,
      author,
      category,
      pubLogo,
      readingTimeMins,
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return {
      title: "Failed to Fetch",
      description: "Could not retrieve data from URL",
      image: "/images/news-placeholder.webp",
      siteName: new URL(url).hostname,
      dateObj: new Date(),
      url,
    };
  }
}

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
    return { en: text, te: text, hi: text }; // Fallback
  }
}

async function processUrls(urls) {
  const processed = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Processing [${i + 1}/${urls.length}]: ${url}`);

    // 1. Fetch Metadata
    const meta = await fetchMetadata(url);

    // 2. Translate
    const titleObj = await translateText(meta.title);
    const descObj = await translateText(meta.description);
    const authorObj = await translateText(meta.author);
    const categoryObj = await translateText(meta.category);

    // Format Date
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const dateEn = meta.dateObj.toLocaleDateString("en-US", dateOptions);
    const dateTe = await translateText(dateEn);
    const dateHi = await translateText(dateEn);

    const readingTimeObj = {
      en: `${meta.readingTimeMins} min read`,
      te: `${meta.readingTimeMins} ని. పఠనం`,
      hi: `${meta.readingTimeMins} मिनट`,
    };

    // 3. Construct Article Object
    processed.push({
      id: `article-${Date.now()}-${i}`,
      year: meta.dateObj.getFullYear(),
      date: {
        en: dateEn,
        te: dateTe.te,
        hi: dateHi.hi,
      },
      readingTime: readingTimeObj,
      publication: meta.siteName,
      publicationLogo: meta.pubLogo,
      category: categoryObj,
      author: authorObj,
      title: titleObj,
      description: descObj,
      summary: descObj,
      image: meta.image,
      url: meta.url,
    });

    // Respect API rate limits
    await new Promise((r) => setTimeout(r, 1000));
  }

  return processed;
}

async function main() {
  const sourceData = JSON.parse(fs.readFileSync(SOURCE_JSON_PATH, "utf-8"));

  console.log("--- Fetching Featured News ---");
  if (sourceData.featured && sourceData.featured.length > 0) {
    const featuredArticles = await processUrls(sourceData.featured);
    fs.writeFileSync(
      FEATURED_JSON_PATH,
      JSON.stringify(featuredArticles, null, 2),
    );
    console.log("Updated featured-news.json");
  }

  console.log("--- Fetching Regular News ---");
  if (sourceData.articles && sourceData.articles.length > 0) {
    const regularArticles = await processUrls(sourceData.articles);

    // Preserve existing milestones
    let currentNews = { articles: [], milestones: [] };
    if (fs.existsSync(NEWS_JSON_PATH)) {
      currentNews = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, "utf-8"));
    }

    currentNews.articles = regularArticles;
    fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(currentNews, null, 2));
    console.log("Updated news.json");
  }

  console.log("Metadata extraction complete!");
}

main().catch(console.error);
