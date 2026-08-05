import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  FollowCaelo,
  NewsletterSignup,
  ShareArticle,
  TopicLinks,
} from "@/components/EditorialTools";
import { editorialArticles } from "@/data/editorial";

const featured = editorialArticles[0];

export default function LaVoce() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#f2eee4] text-[#171714]">
        <header className="border-y border-black/70 bg-[#f7f3ea]">
          <div className="mx-auto max-w-[1500px] px-5 py-8 text-center md:px-10">
            <p className="border-t border-black/80 pt-5 text-[11px] uppercase tracking-[0.34em]">
              Governance procedurale · Etica dell’IA · Pubblica amministrazione
            </p>
            <h1 className="mt-2 font-serif text-5xl font-medium tracking-tight md:text-8xl">
              La Voce di CAELO
            </h1>
            <p className="mt-3 font-serif text-base italic text-black/70 md:text-lg">
              Analisi, casi concreti e architetture di fiducia per i procedimenti regolati
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-[1500px] px-4 py-6 md:px-8">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-4">
              <article className="border border-black/70 bg-[#faf7ef] p-5 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                  Editoriale in evidenza · AI Governance
                </p>
                <h2 className="mt-5 max-w-6xl font-serif text-5xl font-semibold leading-[0.96] md:text-7xl xl:text-8xl">
                  {featured.title}
                </h2>
                <div className="my-6 flex items-center gap-4" aria-hidden="true">
                  <span className="h-px flex-1 bg-black/50" />
                  <span className="h-2 w-2 rotate-45 bg-black" />
                  <span className="h-px flex-1 bg-black/50" />
                </div>
                <p className="max-w-5xl font-serif text-2xl italic leading-snug text-black/75 md:text-3xl">
                  La conformità non sarà più soltanto una raccolta di policy, registri e valutazioni: occorre dimostrare come ogni decisione assistita dall’AI sia stata formata, controllata e assunta.
                </p>
                <p className="mt-6 text-sm">Di Claudia Catania · {featured.date}</p>

                <div className="mt-6">
                  <ShareArticle title={featured.title} path={featured.path} />
                </div>

                <div className="mt-7 columns-1 gap-8 font-serif text-[17px] leading-7 md:columns-2 xl:columns-3">
                  <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8]">
                    Il 2 agosto 2026 non è stato il giorno in cui l’Europa ha concluso il proprio lavoro sull’intelligenza artificiale. È stato il giorno in cui è diventato più difficile separare le dichiarazioni dalle pratiche.
                  </p>
                  <p className="mt-4">
                    Il vero passaggio non è dalla non conformità alla conformità. È dalla compliance documentale alla prova procedurale.
                  </p>
                  <p className="mt-4">
                    Una decisione non coincide con l’output del modello: nasce dall’incontro tra regole, competenze, dati, controlli e responsabilità. La vera black box, in molti casi, non è il modello. È l’organizzazione.
                  </p>
                </div>

                <Link
                  to={featured.path}
                  className="mt-8 inline-flex border-b-2 border-black pb-1 text-sm font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
                >
                  Leggi l’articolo completo
                </Link>
              </article>

              <section className="border border-black/70 bg-[#faf7ef] p-5 md:p-8">
                <div className="border-b border-black/50 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]">Ultime pubblicazioni</p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">Continua la lettura</h2>
                </div>
                <div className="grid gap-5 pt-6 md:grid-cols-3">
                  {editorialArticles.slice(1, 4).map((article) => (
                    <Link key={article.path} to={article.path} className="border-t border-black/40 pt-4 transition-opacity hover:opacity-60">
                      <p className="text-xs uppercase tracking-[0.12em] text-black/55">{article.date}</p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">{article.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/65">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="border border-black/70 bg-[#171714] p-7 text-[#faf7ef] md:flex md:items-center md:justify-between md:gap-8 md:p-10">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Dall’analisi all’architettura</p>
                  <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                    Il problema descritto riguarda anche la tua organizzazione?
                  </h2>
                  <p className="mt-4 font-serif text-lg leading-7 text-white/75">
                    Scopri come CAELO governa procedure, regole, ruoli, controlli ed eccezioni nei processi regolati.
                  </p>
                </div>
                <Link to="/funzionalita" className="mt-6 inline-flex shrink-0 border border-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-black md:mt-0">
                  Scopri l’architettura
                </Link>
              </section>
            </div>

            <aside className="space-y-4">
              <section className="border border-black/70 bg-[#faf7ef] p-6">
                <h2 className="border-b border-black/60 pb-3 font-serif text-2xl font-semibold">In evidenza</h2>
                <p className="mt-5 font-serif text-xl leading-snug">Dalla compliance documentale alla prova procedurale.</p>
                <p className="mt-3 text-sm text-black/60">5 agosto 2026</p>
              </section>

              <FollowCaelo />
              <NewsletterSignup />

              <details className="group border border-black/70 bg-[#faf7ef]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">Storico completo</p>
                    <h2 className="mt-1 font-serif text-2xl font-semibold">Archivio articoli</h2>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="max-h-[70vh] overflow-y-auto border-t border-black/60 px-6 pb-2">
                  <div className="divide-y divide-black/25">
                    {editorialArticles.map((article) => (
                      <article key={article.path} className="py-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/55">{article.date}</p>
                        <Link to={article.path} className="mt-2 block font-serif text-xl font-semibold leading-snug transition-opacity hover:opacity-60">
                          {article.title}
                        </Link>
                        <p className="mt-2 text-xs leading-5 text-black/60">{article.category}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </details>

              <TopicLinks />
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
