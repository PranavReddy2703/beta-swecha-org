import fs from "fs";
import path from "path";

const NEWS_JSON_PATH = path.join(process.cwd(), "src/data/organisms/news.json");
const FEATURED_JSON_PATH = path.join(
  process.cwd(),
  "src/data/organisms/featured-news.json",
);

const fallbackMap = {
  // news.json articles
  "article-1782181308912-4": "/images/news-datathon.webp",
  "article-1782181318592-5": "/images/news-community.webp",
  "article-1782181326034-6": "/images/news-featured.webp",
  "article-1782181333684-7": "/images/news-license.webp",
  "article-1782181339891-8": "/images/news-license.webp",

  // featured-news.json articles
  "article-1782181295389-2": "/images/news-license.webp",
  "article-1782181301434-3": "/images/news-community.webp",
};

async function run() {
  // Process news.json
  if (fs.existsSync(NEWS_JSON_PATH)) {
    const newsData = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, "utf-8"));
    if (newsData.articles) {
      for (const article of newsData.articles) {
        if (fallbackMap[article.id]) {
          article.image = fallbackMap[article.id];
        } else if (
          article.image === "/images/news-placeholder.webp" ||
          !article.image
        ) {
          article.image = "/images/news-featured.webp";
        }
      }
    }
    fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(newsData, null, 2));
    console.log("Updated news.json with fallback image paths");
  }

  // Process featured-news.json
  if (fs.existsSync(FEATURED_JSON_PATH)) {
    const featuredArticles = JSON.parse(
      fs.readFileSync(FEATURED_JSON_PATH, "utf-8"),
    );
    for (const article of featuredArticles) {
      if (fallbackMap[article.id]) {
        article.image = fallbackMap[article.id];
      } else if (
        article.image === "/images/news-placeholder.webp" ||
        !article.image
      ) {
        article.image = "/images/news-featured.webp";
      }
    }
    fs.writeFileSync(
      FEATURED_JSON_PATH,
      JSON.stringify(featuredArticles, null, 2),
    );
    console.log("Updated featured-news.json with fallback image paths");
  }
}

run().catch(console.error);
