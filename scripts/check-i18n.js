import fs from "fs";
import path from "path";

const localesDir = path.join(process.cwd(), "src/i18n/locales");
const enPath = path.join(localesDir, "en.json");

const flattenKeys = (obj, prefix = "") => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      !Array.isArray(obj[k])
    ) {
      Object.assign(acc, flattenKeys(obj[k], pre + k));
    } else {
      acc[pre + k] = true;
    }
    return acc;
  }, {});
};

try {
  const enData = JSON.parse(fs.readFileSync(enPath, "utf8"));
  const baseKeys = flattenKeys(enData);
  const baseKeyNames = Object.keys(baseKeys);

  const locales = ["hi.json", "te.json"];
  let hasErrors = false;

  for (const locale of locales) {
    const targetPath = path.join(localesDir, locale);
    const targetData = JSON.parse(fs.readFileSync(targetPath, "utf8"));
    const targetKeys = flattenKeys(targetData);

    const missingKeys = baseKeyNames.filter((key) => !targetKeys[key]);
    if (missingKeys.length > 0) {
      console.error(`\x1b[31m[I18N ERROR]\x1b[0m Missing keys in ${locale}:`);
      missingKeys.forEach((k) => console.error(`  - ${k}`));
      hasErrors = true;
    }

    // Also check for empty strings
    for (const key of Object.keys(targetKeys)) {
      // Just evaluate by accessing nested properties to ensure no empty values
      const parts = key.split(".");
      let val = targetData;
      for (const p of parts) {
        val = val?.[p];
      }
      if (val === "" || val === null) {
        console.warn(
          `\x1b[33m[I18N WARNING]\x1b[0m Empty or null value for key "${key}" in ${locale}`,
        );
      }
    }
  }

  if (hasErrors) {
    console.error(
      `\x1b[31mI18N Check Failed! Please provide translations for all missing keys.\x1b[0m`,
    );
    process.exit(1);
  } else {
    console.log(
      `\x1b[32mI18N Check Passed! All locales are synchronized with en.json.\x1b[0m`,
    );
    process.exit(0);
  }
} catch (error) {
  console.error("Failed to parse locale JSON files.", error);
  process.exit(1);
}
