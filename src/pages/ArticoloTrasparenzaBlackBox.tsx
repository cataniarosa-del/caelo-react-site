import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const intro = ['Negli ultimi anni, l\'avvento dei modelli linguistici (LLM) e il problema della "scatola nera" hanno generato una naturale diffidenza verso l\'Intelligenza Artificiale.', 'Di fronte a risposte imprecise o allucinazioni imprevedibili, la reazione immediata di molte organizzazioni è stata la paura.', 'Oggi il rischio principale è il pregiudizio di categoria: la fretta di catalogare qualsiasi innovazione basata su AI nello stesso binario della prima generazione generativa, rendendo difficile distinguere i prodotti tradizionali da architetture completamente nuove.', 'Ogni giorno, nelle organizzazioni complesse e nella Pubblica Amministrazione, decisioni e procedimenti critici subiscono rallentamenti, sospensioni o continue rilavorazioni.', "La tentazione iniziale è stata quella di affidarsi all'AI generativa per velocizzare il lavoro. Eppure, quando si passa dai test di laboratorio ai procedimenti operativi regolati, emerge una forte resistenza da parte di dirigenti e funzionari.", "Perché è così difficile fidarsi dell'AI quando c'è di mezzo una responsabilità amministrativa, contabile o giuridica?"];
const criticalPoints = [{'title': 'Mancanza di un mandato procedurale', 'text': "Serve sapere chi può fare cosa, quando e con quale responsabilità. L'AI generativa tradizionale non possiede un mandato procedurale: genera un testo plausibile, ma non conosce i propri limiti di autorità, quali credenziali richieda il passaggio successivo e chi risponda legalmente dell'atto."}, {'title': "La governance del procedimento viene prima dell'automazione", 'text': 'Automatizzare un processo senza averne governato le regole, i vincoli deterministici, le eccezioni e le fonti ufficiali significa soltanto velocizzare il caos e moltiplicare i rischi di errore o allucinazione.'}, {'title': 'Assenza di auditabilità e tracciabilità', 'text': 'Un operatore o un dirigente non può assumersi la responsabilità di una decisione se il sistema funziona come una scatola nera e non lascia un registro chiaro e verificabile delle regole e dei controlli applicati.'}];
const closing = ['Solo dopo aver chiarito questa necessità fondamentale diventa evidente quale debba essere il ruolo della tecnologia.', "È precisamente da questo cambio di paradigma che nasce CAELO: non come l'ennesimo assistente conversazionale o generatore di testi, ma come risposta architetturalmente diversa a un problema di governance.", "CAELO interviene prima dell'automazione per ricostruire e governare il procedimento sul caso concreto, garantendo tracciabilità, rispetto dei vincoli e controllo umano nei punti decisionali.", "I procedimenti non si sbloccano chiedendo all'AI di sostituirsi al giudizio umano, ma fornendo alle organizzazioni un'infrastruttura in cui fiducia, responsabilità e regole rimangono al centro.", '#AIGovernance #IntelligenzaArtificiale #GovernanceProcedurale #PubblicaAmministrazione #ResponsibleAI #HumanInTheLoop #Auditabilità #ComplianceByDesign #DigitalTransformation #CAELO #GlassBox'];

export default function ArticoloTrasparenzaBlackBox() {
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer,width=760,height=720");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f2eee4] text-[#171714]">
        <main className="mx-auto max-w-[1180px] px-4 py-8 md:px-8 md:py-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Link
              to="/la-voce"
              className="inline-flex border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              ← La Voce di CAELO
            </Link>

            <button
              type="button"
              onClick={shareOnLinkedIn}
              className="inline-flex items-center gap-2 border border-black bg-[#faf7ef] px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Condividi su LinkedIn
            </button>
          </div>

          <article className="mt-6 border border-black/70 bg-[#faf7ef] px-5 py-8 md:px-14 md:py-14">
            <header className="border-b border-black/50 pb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                Glass Box · Audit trail procedurale
              </p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                L'infrastruttura della trasparenza: oltre la black box
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                Perché nei procedimenti regolati la fiducia non nasce da una risposta plausibile, ma da tracciabilità, auditabilità, regole verificabili e supervisione umana.
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 3 agosto 2026</p>
            </header>

            <figure className="mx-auto mt-10 max-w-6xl">
              <img
                src="/images/infrastruttura-trasparenza-black-box.webp"
                alt="Infografica che confronta la black box con la glass box di CAELO, mostrando acquisizione input, fonti e regole, controlli tracciati, eccezioni, intervento umano e decisione motivata."
                className="w-full border border-black/20"
              />
            </figure>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              {intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0
                    ? "first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]"
                    : "mt-5"}
                >
                  {paragraph}
                </p>
              ))}

              <section className="mt-12 border-t border-black/50 pt-6">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  La radice della sfiducia
                </h2>
                <p className="mt-5">
                  Il problema non è soltanto la qualità o la precisione formale delle risposte.
                  Nei contesti ad alta complessità e regolamentazione, la sfiducia nasce da una lacuna ben più profonda.
                </p>
                <div className="mt-6 space-y-6">
                  {criticalPoints.map((point) => (
                    <div key={point.title}>
                      <h3 className="font-serif text-2xl font-semibold">{point.title}</h3>
                      <p className="mt-2">{point.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 border-t border-black/50 pt-6">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Il cambio di paradigma
                </h2>
                {closing.map((paragraph) => (
                  <p key={paragraph} className="mt-5">{paragraph}</p>
                ))}
              </section>
            </div>

            <footer className="mt-12 border-t border-black/50 pt-7">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-serif text-xl font-semibold">Claudia Catania</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
                    Co-Founder di CAELO. Si occupa di governance procedurale, auditabilità,
                    tracciabilità, controllo umano e architetture AI per procedimenti regolati.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={shareOnLinkedIn}
                  className="inline-flex shrink-0 items-center justify-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Pubblica su LinkedIn
                </button>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </Layout>
  );
}
