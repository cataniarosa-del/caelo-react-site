export const EDITORIAL_LANGUAGES = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
] as const;

export type EditorialLanguage =
  (typeof EDITORIAL_LANGUAGES)[number]["code"];

export type ArticleStatus = "draft" | "published";
export type TranslationStatus = "empty" | "draft" | "reviewed" | "published";

export type EditorialTranslation = {
  id?: string;
  article_id?: string;
  language: EditorialLanguage;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  meta_description: string;
  translation_status: TranslationStatus;
  machine_generated: boolean;
  reviewed_at?: string | null;
};

export type EditorialArticle = {
  id: string;
  slug: string;
  author: string;
  publication_date: string;
  status: ArticleStatus;
  featured: boolean;
  created_by?: string | null;
  created_at?: string;
  updated_at?: string;
  editorial_translations?: EditorialTranslation[];
};

export const emptyTranslation = (
  language: EditorialLanguage,
): EditorialTranslation => ({
  language,
  title: "",
  category: "",
  excerpt: "",
  body: "",
  meta_description: "",
  translation_status: language === "it" ? "draft" : "empty",
  machine_generated: false,
});
