import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Check,
  Copy,
  Facebook,
  Languages,
  Linkedin,
  Mail,
  MessageCircle,
  Rss,
  Youtube,
} from "lucide-react";
import {
  editorialArticles,
  getEditorialArticle,
  getRelatedArticles,
} from "@/data/editorial";

const SITE_URL = "https://caelo.it";
const SITE_NAME = "La Voce di CAELO";
const DEFAULT_DESCRIPTION =
  "Analisi, casi concreti e architetture di fiducia per governare l’intelligenza artificiale nei procedimenti regolati.";

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

function setStructuredData(data: Record<string, unknown> | null) {
  const id = "caelo-article-structured-data";
  document.getElementById(id)?.remove();
  if (!data) return;

  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export function EditorialSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const article = getEditorialArticle(pathname);
    const isEditorialHome = pathname === "/la-voce";
    if (!article && !isEditorialHome) return;

    const title = article ? `${article.title} | ${SITE_NAME}` : `${SITE_NAME} | CAELO`;
    const description = article?.excerpt ?? DEFAULT_DESCRIPTION;
    const canonical = `${SITE_URL}${pathname}`;

    document.title = title;
    setCanonical(canonical);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", article ? "article" : "website");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:site_name"]', "content", "CAELO");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    if (article) {
      setMeta('meta[property="article:published_time"]', "content", article.isoDate);
      setMeta('meta[property="article:author"]', "content", "Claudia Catania");
      setStructuredData({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.isoDate,
        dateModified: article.isoDate,
        mainEntityOfPage: canonical,
        author: {
          "@type": "Person",
          name: "Claudia Catania",
        },
        publisher: {
          "@type": "Organization",
          name: "CAELO",
          url: SITE_URL,
        },
        keywords: article.topics.join(", "),
      });
    } else {
      setStructuredData(null);
    }
  }, [pathname]);

  return null;
}

export function TranslateArticle({ path }: { path: string }) {
  const articleUrl = `${SITE_URL}${path}`;
  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
  ];

  const openTranslation = (language: string) => {
    const translatedUrl = `https://translate.google.com/translate?sl=it&tl=${language}&u=${encodeURIComponent(articleUrl)}`;
    window.open(translatedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="border border-black/60 bg-[#faf7ef] p-5 md:flex md:items-center md:justify-between md:gap-6" aria-label="Traduci l’articolo">
      <div>
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
          <Languages className="h-4 w-4" /> Traduci l’articolo
        </p>
        <p className="mt-2 text-sm leading-6 text-black/60">
          Leggi una traduzione automatica dell’articolo nella lingua scelta.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
        {languages.map((language) => (
          <button
            key={language.code}
            type="button"
            onClick={() => openTranslation(language.code)}
            className="border border-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition hover:bg-black hover:text-[#faf7ef]"
          >
            {language.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export function ShareArticle({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_URL}${path}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const itemClass =
    "inline-flex items-center gap-2 border border-black/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition hover:bg-black hover:text-[#faf7ef]";

  return (
    <section className="border-y border-black/35 py-5" aria-label="Condividi questo articolo">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]">Condividi</p>
      <div className="flex flex-wrap gap-2">
        <a className={itemClass} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a className={itemClass} href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noreferrer">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a className={itemClass} href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer">
          <Facebook className="h-4 w-4" /> Facebook
        </a>
        <a className={itemClass} href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}>
          <Mail className="h-4 w-4" /> Email
        </a>
        <button className={itemClass} type="button" onClick={copyLink}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiato" : "Copia link"}
        </button>
      </div>
    </section>
  );
}

export function EditorialArticleFooter() {
  const { pathname } = useLocation();
  const article = getEditorialArticle(pathname);
  if (!article) return null;

  const related = getRelatedArticles(pathname);

  return (
    <div className="bg-[#f2eee4] px-4 pb-12 text-[#171714] md:px-8">
      <div className="mx-auto max-w-[1180px] space-y-6">
        <TranslateArticle path={article.path} />
        <ShareArticle title={article.title} path={article.path} />

        <section className="border border-black/60 bg-[#faf7ef] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">Continua la lettura</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold">Argomenti correlati</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.path} to={item.path} className="border-t border-black/50 pt-4 transition-opacity hover:opacity-60">
                <p className="text-xs uppercase tracking-[0.12em] text-black/55">{item.category}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">{item.title}</h3>
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
    </div>
  );
}

export function FollowCaelo() {
  return (
    <section className="border border-black/70 bg-[#faf7ef] p-6">
      <h2 className="border-b border-black/60 pb-3 font-serif text-2xl font-semibold">Segui CAELO</h2>
      <div className="mt-5 grid gap-2">
        <a href="https://www.linkedin.com/in/claudia-catania-044a8b366" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-black/35 px-4 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
          <Linkedin className="h-5 w-5" /> LinkedIn
        </a>
        <div className="flex items-center gap-3 border border-black/20 px-4 py-3 text-sm text-black/50" aria-label="Canale YouTube in apertura">
          <Youtube className="h-5 w-5" /> YouTube · in apertura
        </div>
        <a href="/rss.xml" className="flex items-center gap-3 border border-black/35 px-4 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">
          <Rss className="h-5 w-5" /> Feed RSS
        </a>
      </div>
    </section>
  );
}

export function NewsletterSignup() {
  const [message, setMessage] = useState("");

  return (
    <section className="border border-black/70 bg-[#faf7ef] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">Nuovi articoli</p>
      <h2 className="mt-2 font-serif text-2xl font-semibold">Ricevi La Voce di CAELO</h2>
      <p className="mt-3 text-sm leading-6 text-black/65">Inserisci la tua email per ricevere gli aggiornamenti editoriali.</p>
      <form
        className="mt-5 space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage("Campo predisposto. L’iscrizione sarà attiva al collegamento del servizio newsletter.");
        }}
      >
        <label className="sr-only" htmlFor="newsletter-email">Email</label>
        <input id="newsletter-email" type="email" required placeholder="Scrivi la tua email" className="w-full border border-black/40 bg-transparent px-3 py-3 text-sm outline-none focus:border-black" />
        <button type="submit" className="w-full bg-black px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white">Iscriviti</button>
      </form>
      {message && <p className="mt-3 text-xs leading-5 text-black/55">{message}</p>}
    </section>
  );
}

export function TopicLinks() {
  const topics = Array.from(new Set(editorialArticles.flatMap((article) => article.topics)));
  return (
    <details className="group border border-black/70 bg-[#faf7ef]">
      <summary className="cursor-pointer list-none p-6 font-serif text-2xl font-semibold [&::-webkit-details-marker]:hidden">Argomenti correlati</summary>
      <div className="flex flex-wrap gap-2 border-t border-black/50 p-6">
        {topics.map((topic) => (
          <span key={topic} className="border border-black/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em]">{topic}</span>
        ))}
      </div>
    </details>
  );
}
