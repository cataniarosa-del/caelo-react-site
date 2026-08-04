import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const archiveArticles = [
  {
    date: "4 agosto 2026",
    category: "Etica dell’IA · Procedimenti pubblici",
    title: "Quando l’amministrazione colpisce chi è nel giusto",
    excerpt:
      "Dalle “cartelle pazze” delle case popolari all’etica dell’intelligenza artificiale nei procedimenti pubblici.",
    path: "/la-voce/quando-amministrazione-colpisce-chi-e-nel-giusto",
  },
  {
    date: "3 agosto 2026",
    category: "Glass Box · Audit trail procedurale",
    title: "L’infrastruttura della trasparenza: oltre la black box",
    excerpt:
      "Perché nei procedimenti regolati la fiducia non nasce da una risposta plausibile, ma da tracciabilità, auditabilità, regole verificabili e supervisione umana.",
    path: "/la-voce/linfrastruttura-della-trasparenza-oltre-la-black-box",
  },
  {
    date: "2 agosto 2026",
    category: "Glass Box Procedurale · Responsabilità",
    title: "Chi firma deve poter vedere: dalla Black Box alla Glass Box Procedurale",
    excerpt:
      "La sicurezza di un dirigente nasce dalla possibilità di governare, verificare e ricostruire ogni passaggio che conduce alla decisione.",
    path: "/la-voce/chi-firma-deve-poter-vedere-dalla-black-box-alla-glass-box-procedurale",
  },
  {
    date: "24 luglio 2026",
    category: "AI Governance · Controllo umano",
    title: "Il controllo umano non è un pulsante di emergenza",
    excerpt:
      "Il vero rischio dell’Intelligenza Artificiale non è sostituire l’essere umano, ma renderlo irrilevante nel processo decisionale.",
    path: "/la-voce/il-controllo-umano-non-e-un-pulsante-di-emergenza",
  },
  {
    date: "21 luglio 2026",
    category: "Sovranità tecnologica · Pubblica Amministrazione",
    title: "Il cancello europeo nel giardino tecnologico degli altri",
    excerpt:
      "Regolare l’intelligenza artificiale non basta: servono infrastrutture controllabili, sperimentazioni accessibili e una strada reale verso la Pubblica Amministrazione.",
    path: "/la-voce/il-cancello-europeo-nel-giardino-tecnologico-degli-altri",
  },
  {
    date: "15 luglio 2026",
    category: "Agentic AI · Governance dell’autorità",
    title: "Non basta identificare un agente AI. Bisogna governarne l’autorità",
    excerpt:
      "L’identità digitale e il controllo degli accessi non bastano: l’autorità di un agente deve derivare dal procedimento nel quale opera.",
    path: "/la-voce/non-basta-identificare-un-agente-ai-bisogna-governarne-lautorita",
  },
  {
    date: "13 luglio 2026",
    category: "Governance procedurale · Futuro dell’AI",
    title: "Chi governerà i procedimenti governerà il futuro dell’AI",
    excerpt:
      "Il vero vantaggio competitivo del prossimo decennio nascerà dalla capacità di governare i procedimenti nei quali l’intelligenza artificiale sarà chiamata a operare.",
    path: "/la-voce/chi-governera-i-procedimenti-governera-il-futuro-dell-ai",
  },
];

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
            <article className="border border-black/70 bg-[#faf7ef] p-5 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Editoriale in evidenza · Etica dell’IA
              </p>

              <h2 className="mt-5 max-w-6xl font-serif text-5xl font-semibold leading-[0.96] md:text-7xl xl:text-8xl">
                Quando l’amministrazione colpisce chi è nel giusto
              </h2>

              <div className="my-6 flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-black/50" />
                <span className="h-2 w-2 rotate-45 bg-black" />
                <span className="h-px flex-1 bg-black/50" />
              </div>

              <p className="max-w-5xl font-serif text-2xl italic leading-snug text-black/75 md:text-3xl">
                Dalle “cartelle pazze” delle case popolari all’etica
                dell’intelligenza artificiale nei procedimenti pubblici
              </p>

              <p className="mt-6 border-b border-black/50 pb-5 text-sm">
                Di Claudia Catania · 4 agosto 2026
              </p>

              <div className="mt-7 columns-1 gap-8 font-serif text-[17px] leading-7 md:columns-2 xl:columns-3">
                <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8]">
                  Nel patrimonio abitativo di Roma esiste un problema reale.
                  Esistono occupazioni abusive, morosità e alloggi sottratti a
                  chi ne avrebbe diritto. Ma esiste anche un sistema che può
                  colpire cittadini fragili, anziani e famiglie che sono
                  pienamente nel giusto.
                </p>

                <p className="mt-4">
                  Il problema non è scegliere tra contrasto agli abusi e
                  protezione delle persone. Il problema è costruire
                  un’amministrazione capace di distinguere e di ricondurre ogni
                  atto a una sola realtà amministrativa coerente.
                </p>

                <p className="mt-4">
                  Con l’ingresso dell’intelligenza artificiale nei procedimenti
                  pubblici, il rischio è che errori già presenti vengano
                  moltiplicati. Non serve una macchina che scriva più
                  velocemente: serve una struttura che impedisca al procedimento
                  di avanzare quando emergono contraddizioni.
                </p>
              </div>

              <Link
                to="/la-voce/quando-amministrazione-colpisce-chi-e-nel-giusto"
                className="mt-8 inline-flex border-b-2 border-black pb-1 text-sm font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
              >
                Leggi l’articolo completo
              </Link>
            </article>

            <aside className="space-y-4">
              <section className="border border-black/70 bg-[#faf7ef] p-6">
                <h2 className="border-b border-black/60 pb-3 font-serif text-2xl font-semibold">
                  In evidenza
                </h2>

                <p className="mt-5 font-serif text-xl leading-snug">
                  L’etica è ciò che il sistema impedisce.
                </p>

                <p className="mt-3 text-sm text-black/60">4 agosto 2026</p>
              </section>

              <details className="group border border-black/70 bg-[#faf7ef]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 [&::-webkit-details-marker]:hidden">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/55">
                      Storico completo
                    </p>
                    <h2 className="mt-1 font-serif text-2xl font-semibold">
                      Archivio articoli
                    </h2>
                  </div>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>

                <div className="max-h-[70vh] overflow-y-auto border-t border-black/60 px-6 pb-2">
                  <div className="divide-y divide-black/25">
                    {archiveArticles.map((article) => (
                      <article key={article.path} className="py-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
                          {article.date}
                        </p>
                        <Link
                          to={article.path}
                          className="mt-2 block font-serif text-xl font-semibold leading-snug transition-opacity hover:opacity-60"
                        >
                          {article.title}
                        </Link>
                        <p className="mt-2 text-xs leading-5 text-black/60">
                          {article.category}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </details>
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
