import { Layout } from "@/components/Layout";

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
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
            <article className="border border-black/70 bg-[#faf7ef] p-5 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Primo editoriale · Etica dell’IA
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

              <p className="mt-8 border-t border-black/40 pt-5 text-sm font-semibold uppercase tracking-[0.16em]">
                Articolo completo in preparazione
              </p>
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

              <section className="border border-black/70 bg-[#faf7ef] p-6">
                <h2 className="border-b border-black/60 pb-3 font-serif text-2xl font-semibold">
                  Temi
                </h2>

                <ul className="mt-5 space-y-4 font-serif text-lg">
                  <li>Etica dell’IA</li>
                  <li>Governance procedurale</li>
                  <li>Case popolari</li>
                  <li>Procedimenti pubblici</li>
                  <li>Glass box procedurale</li>
                </ul>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
