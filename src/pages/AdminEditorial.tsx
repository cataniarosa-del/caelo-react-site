import { useCallback, useEffect, useState } from "react";
import { FilePlus2, LogOut, Pencil } from "lucide-react";
import { ArticleEditor } from "@/components/admin/ArticleEditor";
import { supabase } from "@/lib/supabase";
import type { EditorialArticle } from "@/types/editorial-admin";

export default function AdminEditorial() {
  const [articles, setArticles] = useState<EditorialArticle[]>([]);
  const [selected, setSelected] = useState<EditorialArticle | null>(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadArticles = useCallback(async () => {
    if (!supabase) return;

    setLoading(true);
    const { data, error } = await supabase
      .from("editorial_articles")
      .select("*, editorial_translations(*)")
      .order("publication_date", { ascending: false });

    if (error) {
      setMessage(error.message);
      setArticles([]);
    } else {
      setMessage("");
      setArticles((data ?? []) as EditorialArticle[]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const startNew = () => {
    setSelected(null);
    setEditing(true);
  };

  const startEdit = (article: EditorialArticle) => {
    setSelected(article);
    setEditing(true);
  };

  const handleSaved = async () => {
    await loadArticles();
    setEditing(false);
    setSelected(null);
  };

  const signOut = async () => {
    await supabase?.auth.signOut();
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              La Voce di CAELO
            </p>
            <h1 className="mt-1 text-2xl font-semibold">Pannello editoriale</h1>
          </div>

          <button
            type="button"
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold"
          >
            <LogOut className="h-4 w-4" />
            Esci
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8">
        {editing ? (
          <>
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {selected ? "Modifica articolo" : "Nuovo articolo"}
              </p>
              <h2 className="mt-2 text-4xl font-semibold">
                {selected
                  ? selected.editorial_translations?.find(
                      (item) => item.language === "it",
                    )?.title || selected.slug
                  : "Crea un nuovo contenuto"}
              </h2>
            </div>

            <ArticleEditor
              article={selected}
              onSaved={handleSaved}
              onCancel={() => {
                setEditing(false);
                setSelected(null);
              }}
            />
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Archivio editoriale
                </p>
                <h2 className="mt-2 text-4xl font-semibold">Articoli</h2>
              </div>

              <button
                type="button"
                onClick={startNew}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white"
              >
                <FilePlus2 className="h-5 w-5" />
                Nuovo articolo
              </button>
            </div>

            {message && (
              <p className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-red-900">
                {message}
              </p>
            )}

            <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              {loading ? (
                <p className="p-8 text-slate-600">Caricamento articoli…</p>
              ) : articles.length === 0 ? (
                <div className="p-8">
                  <h3 className="text-xl font-semibold">
                    Nessun articolo nel nuovo archivio
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Gli articoli attualmente pubblicati saranno importati nella
                    fase di migrazione. Qui puoi già creare una nuova bozza.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-200">
                  {articles.map((article) => {
                    const italian = article.editorial_translations?.find(
                      (item) => item.language === "it",
                    );
                    const completed =
                      article.editorial_translations?.filter((item) =>
                        item.body.trim(),
                      ).length ?? 0;

                    return (
                      <article
                        key={article.id}
                        className="grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center"
                      >
                        <div>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                            <span>{article.publication_date}</span>
                            <span>·</span>
                            <span>
                              {article.status === "published"
                                ? "Pubblicato"
                                : "Bozza"}
                            </span>
                            {article.featured && (
                              <>
                                <span>·</span>
                                <span>In evidenza</span>
                              </>
                            )}
                          </div>
                          <h3 className="mt-2 text-2xl font-semibold">
                            {italian?.title || article.slug}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600">
                            Lingue compilate: {completed}/5
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => startEdit(article)}
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold"
                        >
                          <Pencil className="h-4 w-4" />
                          Modifica
                        </button>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
