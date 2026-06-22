// src/i18n/utils.ts
import { ui, defaultLang, languages } from "./ui";

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) {
    return lang as keyof typeof ui;
  }
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const parts = cleanPath.split("/");
    if (parts[1] && parts[1] in languages) {
      parts.splice(1, 1);
    }
    const basePath = parts.join("/") || "/";

    return l === defaultLang
      ? basePath
      : `/${l}${basePath === "/" ? "" : basePath}`;
  };
}
