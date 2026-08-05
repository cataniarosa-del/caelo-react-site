import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Languages, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import {
  EDITORIAL_LANGUAGES,
  emptyTranslation,
  type ArticleStatus,
  type EditorialArticle,
  type EditorialLanguage,
  type EditorialTranslation,
} from "@/types/editorial-admin";

type ArticleEditorProps = {
  article: EditorialArticle | null;
  onSaved: () => void;
  onCancel: () => void;
};

type TranslationMap = Record<EditorialLanguage, EditorialTranslation>;

function createTranslationMap(
  article: EditorialArticle | null,
): TranslationMap {
  const map = Object.fromEntries(
    EDITORIAL_LANGUAGES.map(({ code }) => [code, emptyTranslation(code)]),
  ) as TranslationMap;

  for (const translation of article?.editorial_translations ?? []) {
    map[translation.language] = {
      ...emptyTranslation(translation.language),
      ...translation,
    };
  }

  return map;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function ArticleEditor({
  article,
  onSaved,
  onCancel,
}: ArticleEditorProps) {
  const [activeLanguage, setActiveLanguage] =
    useState<EditorialLanguage>("it");
  const [slug, setSlug] = useState(article?.slug ?? "");
  const [author, setAuthor] = useState(article?.author ?? "Claudia Catania");
  const [publicationDate, setPublicationDate] = useState(
    article?.publication_date ?? new Date().toISOString().slice(0, 10),
  );
  const [status, setStatus] = useState<ArticleStatus>(
    article?.status ?? "draft",
  );
  const [featured, setFeatured] = useState(article?.featured ?? false);
  const [translations, setTranslations] = useState<TranslationMap>(() =>
    createTranslationMap(article),
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSlug(article?.slug ?? "");
    setAuthor(article?.author ?? "Claudia Catania");
    setPublicationDate(
      article?.publication_date ?? new Date().toISOString().slice(0, 10),
    );
    setStatus(article?.status ?? "draft");
    setFeatured(article?.featured ?? false);
    setTranslations(createTranslationMap(article));
    setActiveLanguage("it");
    setMessage("");
  }, [article]);

  const current = translations[activeLanguage];

  const missingLanguages = useMemo(
    () =>
      EDITORIAL_LANGUAGES.filter(
        ({ code }) => code !== "it" && !translations[code].body.trim(),
      ).map(({ label }) => label),
    [translations],
  );

  const updateCurrent = (
    field: keyof EditorialTranslation,
    value: string | boolean,
  ) => {
    setTranslations((previous) => ({
      ...previous,
      [activeLanguage]: {
        ...previous[activeLanguage],
        [field]: value,
      },
    }));
  };

  const handleItalianTitle = (value: string) => {
    updateCurrent("title", value);
    if (!article && !slug.trim()) setSlug(slugify(value));
  };

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage("Supabase non è configurato.");
      return;
    }

    if (!slug.trim() || !translations.it.title.trim()) {
      setMessage("Slug e titolo italiano sono obbligatori.");
      return;
    }

    setSaving(true);

    try {
      if (featured) {
        const { error: resetError } = await supabase
          .from("editorial_articles")
          .update({ featured: false })
          .neq("id", article?.id ?? "00000000-0000-0000-0000-000000000000");

        if (resetError) throw resetError;
      }

      const articlePayload = {
        slug: slugify(slug),
        author: author.trim() || "Claudia Catania",
        publication_date: publicationDate,
        status,
        featured,
      };

      let articleId = article?.id;

      if (articleId) {
        const { error } = await supabase
          .from("editorial_articles")
          .update(articlePayload)
          .eq("id", articleId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("editorial_articles")
          .insert(articlePayload)
          .select("id")
          .single();

        if (error) throw error;
        articleId = data.id;
      }

      const translationPayload = EDITORIAL_LANGUAGES.map(({ code }) => ({
        article_id: articleId,
        language: code,
        title: translations[code].title.trim(),
        category: translations[code].category.trim(),
        excerpt: translations[code].excerpt.trim(),
        body: translations[code].body,
        meta_description:
          translations[code].meta_description.trim() ||
          translations[code].excerpt.trim(),
        translation_status: translations[code].body.trim()
          ? translations[code].translation_status === "empty"
            ? "draft"
            : translations[code].translation_status
          : "empty",
        machine_generated: translations[code].machine_generated,
        reviewed_at:
          translations[code].translation_status === "reviewed" ||
          translations[code].translation_status === "published"
            ? new Date().toISOString()
            : null,
      }));

      const { error: translationError } = await supabase
        .from("editorial_translations")
        .upsert(translationPayload, {
          onConflict: "article_id,language",
        });

      if (translationError) throw translationError;

      setMessage("Articolo salvato correttamente.");
      onSaved();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Errore durante il salvataggio.",
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className="space-y-7" onSubmit={handleSave}>
      <section className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 lg:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm font-semibold">Slug</span>
          <input
            required
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
            placeholder="titolo-dell-articolo"
          />
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold">Autrice</span>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold">
            Data di pubblicazione
          </span>
          <input
            type="date"
            required
            value={publicationDate}
            onChange={(event) => setPublicationDate(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </label>

        <label>
          <span className="mb-2 block text-sm font-semibold">Stato</span>
          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as ArticleStatus)
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option value="draft">Bozza</option>
            <option value="published">Pubblicato</option>
          </select>
        </label>

        <label className="flex items-center gap-3 lg:col-span-2">
          <input
            type="checkbox"
            checked={featured}
            onChange={(event) => setFeatured(event.target.checked)}
            className="h-5 w-5"
          />
          <span className="font-semibold">Articolo in evidenza</span>
        </label>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <div className="flex flex-wrap gap-2 border-b border-slate-200 p-4">
          {EDITORIAL_LANGUAGES.map(({ code, label }) => {
            const hasContent = Boolean(translations[code].body.trim());
            return (
              <button
                key={code}
                type="button"
                onClick={() => setActiveLanguage(code)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeLanguage === code
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {label}
                <span
                  className={`ml-2 inline-block h-2 w-2 rounded-full ${
                    hasContent ? "bg-emerald-400" : "bg-slate-400"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                Versione {activeLanguage.toUpperCase()}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {activeLanguage === "it"
                  ? "Testo originale"
                  : "Traduzione modificabile"}
              </p>
            </div>

            {activeLanguage === "it" && (
              <button
                type="button"
                disabled
                title="La funzione sarà collegata nella seconda fase"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-400"
              >
                <Languages className="h-4 w-4" />
                Genera traduzioni
              </button>
            )}
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">Titolo</span>
            <input
              value={current.title}
              onChange={(event) =>
                activeLanguage === "it"
                  ? handleItalianTitle(event.target.value)
                  : updateCurrent("title", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">Categoria</span>
            <input
              value={current.category}
              onChange={(event) =>
                updateCurrent("category", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">Sommario</span>
            <textarea
              rows={3}
              value={current.excerpt}
              onChange={(event) =>
                updateCurrent("excerpt", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">
              Corpo dell’articolo
            </span>
            <textarea
              rows={18}
              value={current.body}
              onChange={(event) => updateCurrent("body", event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 font-serif leading-7"
              placeholder="Scrivi qui il testo dell’articolo…"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">
              Meta description
            </span>
            <textarea
              rows={2}
              value={current.meta_description}
              onChange={(event) =>
                updateCurrent("meta_description", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold">
              Stato della traduzione
            </span>
            <select
              value={current.translation_status}
              onChange={(event) =>
                updateCurrent("translation_status", event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="empty">Vuota</option>
              <option value="draft">Bozza</option>
              <option value="reviewed">Revisionata</option>
              <option value="published">Pubblicata</option>
            </select>
          </label>
        </div>
      </section>

      {missingLanguages.length > 0 && (
        <p className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          Versioni ancora vuote: {missingLanguages.join(", ")}.
        </p>
      )}

      {message && (
        <p className="rounded-2xl border border-slate-300 bg-slate-50 p-4 text-sm">
          {message}
        </p>
      )}

      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-slate-300 px-5 py-3 font-semibold"
        >
          Annulla
        </button>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {saving ? "Salvataggio…" : "Salva articolo"}
        </button>
      </div>
    </form>
  );
}
