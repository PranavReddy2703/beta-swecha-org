import fs from "fs";
import path from "path";

const NEWS_JSON_PATH = path.join(process.cwd(), "src/data/organisms/news.json");
const FEATURED_JSON_PATH = path.join(
  process.cwd(),
  "src/data/organisms/featured-news.json",
);
const IMAGES_DIR = path.join(process.cwd(), "public/images/news");

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function downloadImage(url, filename) {
  const destPath = path.join(IMAGES_DIR, filename);

  // If image already exists, don't download it again
  if (fs.existsSync(destPath)) {
    console.log(`Already exists: ${filename}`);
    return `/images/news/${filename}`;
  }

  try {
    console.log(`Downloading: ${url}`);
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved: ${filename}`);
    return `/images/news/${filename}`;
  } catch (error) {
    console.error(`Failed to download ${url}:`, error.message);
    // Fallback to placeholder if download fails
    return "/images/news-placeholder.webp";
  }
}

async function run() {
  // Process news.json
  if (fs.existsSync(NEWS_JSON_PATH)) {
    console.log("Reading news.json...");
    const newsData = JSON.parse(fs.readFileSync(NEWS_JSON_PATH, "utf-8"));
    if (newsData.articles) {
      for (const article of newsData.articles) {
        if (article.image && article.image.startsWith("http")) {
          const extension =
            article.image.split("?")[0].split(".").pop() || "jpg";
          const safeExt = ["jpg", "jpeg", "png", "webp", "gif"].includes(
            extension.toLowerCase(),
          )
            ? extension
            : "jpg";
          const filename = `${article.id}.${safeExt}`;
          const localPath = await downloadImage(article.image, filename);
          article.image = localPath;
        }
      }
    }
    fs.writeFileSync(NEWS_JSON_PATH, JSON.stringify(newsData, null, 2));
    console.log("Updated news.json with local image paths");
  }

  // Process featured-news.json
  if (fs.existsSync(FEATURED_JSON_PATH)) {
    console.log("Reading featured-news.json...");
    const featuredArticles = JSON.parse(
      fs.readFileSync(FEATURED_JSON_PATH, "utf-8"),
    );
    for (const article of featuredArticles) {
      if (article.image && article.image.startsWith("http")) {
        const extension = article.image.split("?")[0].split(".").pop() || "jpg";
        const safeExt = ["jpg", "jpeg", "png", "webp", "gif"].includes(
          extension.toLowerCase(),
        )
          ? extension
          : "jpg";
        const filename = `${article.id}.${safeExt}`;
        const localPath = await downloadImage(article.image, filename);
        article.image = localPath;
      }
    }
    fs.writeFileSync(
      FEATURED_JSON_PATH,
      JSON.stringify(featuredArticles, null, 2),
    );
    console.log("Updated featured-news.json with local image paths");
  }
}

run().catch(console.error);
