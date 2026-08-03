import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin, FileText, ListChecks, BrainCircuit, GitBranch, TriangleAlert, BadgeCheck, UserRound, Search, SlidersHorizontal, ShieldCheck } from "lucide-react";

const intro = [
  "Negli ultimi mesi una domanda è tornata con forza al centro del dibattito internazionale sull'Intelligenza Artificiale.",
  "L'IA sostituirà il lavoro umano?",
  "È una preoccupazione che attraversa governi, imprese, università e opinione pubblica. L'Organizzazione Internazionale del Lavoro analizza gli effetti della GenAI sull'occupazione. L'OCSE studia come cambieranno le amministrazioni pubbliche. Il NIST statunitense aggiorna continuamente le proprie linee guida sulla gestione del rischio. L'Unione Europea ha dedicato un intero articolo dell'AI Act alla necessità di garantire un controllo umano sui sistemi di Intelligenza Artificiale ad alto rischio.",
  "È un segnale importante. Ma forse stiamo ponendo la domanda sbagliata.",
  "Il vero problema non è stabilire se l'Intelligenza Artificiale sostituirà l'essere umano. Il vero problema è comprendere come l'essere umano possa continuare a esercitare un controllo reale sulle decisioni, in un mondo in cui l'Intelligenza Artificiale entra sempre più profondamente nei procedimenti delle organizzazioni.",
  "Perché ogni organizzazione, pubblica o privata, prende decisioni attraverso procedimenti.",
  "Una pratica amministrativa. L'approvazione di un finanziamento. L'erogazione di una prestazione sanitaria. La liquidazione di una pensione. L'autorizzazione di un pagamento. La gestione di un sinistro assicurativo.",
  "Nessuna di queste decisioni nasce dalla risposta di un modello linguistico. Nasce da una sequenza di verifiche, regole, responsabilità, autorizzazioni, eccezioni e controlli.",
  "Ed è proprio qui che, a mio avviso, il dibattito sull'Intelligenza Artificiale mostra oggi il suo limite principale."
];

const sections = [
  {
    title: "Il controllo umano è diventato uno slogan",
    paragraphs: [
      "Negli ultimi anni un'espressione è entrata stabilmente nel lessico della governance dell'Intelligenza Artificiale: Human in the Loop.",
      "La ritroviamo nell'AI Act europeo. La ritroviamo nei documenti del NIST. La ritroviamo nei report dell'OCSE. La ritroviamo praticamente in ogni framework di AI Governance.",
      "È ormai considerata un principio imprescindibile. Ma c'è una domanda che raramente viene affrontata: che cosa significa davvero esercitare un controllo umano?",
      "Significa leggere il risultato finale prodotto da un sistema? Premere un pulsante “Approva”? Firmare digitalmente una decisione già costruita?",
      "Se fosse così, il controllo umano rischierebbe di diventare poco più di una formalità.",
      "Una persona potrebbe trovarsi davanti a una decisione già confezionata, senza conoscere il percorso che l'ha generata, senza sapere quali dati siano stati utilizzati, quali regole siano state applicate, quali eccezioni siano state valutate e quali passaggi siano stati completamente automatizzati.",
      "In quel momento l'essere umano non sta realmente esercitando un controllo. Sta semplicemente validando un risultato. E tra le due cose esiste una differenza enorme."
    ]
  },
  {
    title: "Il problema non è l'errore dell'IA",
    paragraphs: [
      "Ogni volta che emerge un caso di errore prodotto da un sistema di Intelligenza Artificiale, il dibattito si concentra sulla qualità del modello. Ma gli episodi raccontati dalla stampa internazionale mostrano un'altra realtà.",
      "Citazioni giuridiche inesistenti. Decisioni amministrative supportate da informazioni errate. Indicazioni cliniche discutibili. Errori nei sistemi di valutazione automatica.",
      "Quasi sempre il problema viene individuato alla fine del procedimento. Quando la decisione è già stata presa. Quando il documento è già stato firmato. Quando il cittadino ha già subito gli effetti dell'errore.",
      "A quel punto ci chiediamo come correggere il risultato. Ma forse dovremmo porci una domanda diversa: perché nessuno ha potuto intercettare quell'errore prima?",
      "Perché il vero problema non è che un sistema possa sbagliare. Ogni essere umano sbaglia. Ogni organizzazione sbaglia.",
      "Il vero problema nasce quando il procedimento non offre più punti nei quali il controllo umano possa intervenire efficacemente."
    ]
  },
  {
    title: "La responsabilità non può essere automatizzata",
    paragraphs: [
      "Esiste poi una questione ancora più delicata. Ogni decisione organizzativa produce responsabilità.",
      "Responsabilità amministrative. Responsabilità professionali. Responsabilità civili. Responsabilità penali. Responsabilità politiche.",
      "L'Intelligenza Artificiale può elaborare informazioni. Può confrontare milioni di dati. Può individuare correlazioni. Può proporre scenari. Può suggerire alternative.",
      "Ma non può assumersi la responsabilità delle conseguenze. Quella responsabilità continua ad appartenere alle persone.",
      "Ed è proprio per questo motivo che il controllo umano non può essere confinato all'ultimo passaggio del processo. Deve accompagnare l'intero procedimento."
    ]
  },
  {
    title: "Il controllo umano deve essere progettato",
    paragraphs: [
      "Credo che nei prossimi anni assisteremo a un cambiamento profondo nel modo di intendere la governance dell'Intelligenza Artificiale.",
      "Oggi discutiamo soprattutto di modelli. Di accuratezza. Di bias. Di explainability. Di conformità normativa. Sono temi fondamentali. Ma non sufficienti.",
      "La vera sfida sarà progettare procedimenti nei quali il controllo umano non rappresenti un intervento occasionale, ma una funzione strutturale.",
      "Un controllo umano capace di intervenire quando vengono acquisiti i dati. Quando devono essere verificati i requisiti. Quando emerge un'eccezione. Quando una regola non è soddisfatta. Quando il sistema propone una soluzione alternativa. Quando una decisione deve essere sospesa. Quando una scelta richiede inevitabilmente il giudizio e la responsabilità di una persona.",
      "Solo allora il controllo umano diventa reale. Non un semplice intervento finale. Ma una componente dell'architettura stessa del procedimento."
    ]
  },
  {
    title: "Dalla AI Governance alla Procedural Governance",
    paragraphs: [
      "Forse è proprio qui che il dibattito deve fare un passo avanti.",
      "L'AI Governance ci insegna come governare i sistemi di Intelligenza Artificiale. La Procedural Governance si occupa invece di governare il contesto nel quale quei sistemi operano.",
      "È una prospettiva diversa. Non si limita a chiedere se un modello sia affidabile. Si domanda se il procedimento continui a essere comprensibile, verificabile, tracciabile e governabile.",
      "Perché una decisione organizzativa non è soltanto un risultato. È un percorso. E ogni passaggio di quel percorso deve poter essere controllato, verificato e, quando necessario, corretto da un essere umano."
    ]
  },
  {
    title: "Il futuro non appartiene alle macchine che decidono da sole",
    paragraphs: [
      "Forse il dibattito pubblico continuerà ancora per anni a chiedersi se l'Intelligenza Artificiale sostituirà il lavoro umano. Io credo che questa sia la domanda meno interessante.",
      "La vera domanda è un'altra: come possiamo progettare organizzazioni nelle quali l'Intelligenza Artificiale aumenti la capacità decisionale senza ridurre il ruolo dell'essere umano?",
      "Perché il futuro non apparterrà alle organizzazioni che avranno semplicemente l'Intelligenza Artificiale più potente. Apparterrà a quelle che sapranno progettare procedimenti nei quali il controllo umano resterà sempre esercitabile, documentabile e responsabile.",
      "Non basta inserire una persona alla fine del processo e chiamarlo Human in the Loop.",
      "Il controllo umano non è una firma. Non è un pulsante di emergenza. Non è un'approvazione formale. È un principio architetturale.",
      "Ed è probabilmente su questo principio che si giocherà la prossima evoluzione della governance dell'Intelligenza Artificiale."
    ]
  },
  {
    title: "Il controllo umano deve accompagnare ogni passaggio",
    paragraphs: [
      "È precisamente qui che si colloca CAELO.",
      "CAELO non considera il controllo umano come un’approvazione formale posta alla fine di un processo già compiuto dall’Intelligenza Artificiale. Lo integra, invece, nell’architettura stessa del procedimento.",
      "L’operatore umano può intervenire passo dopo passo: nella verifica delle informazioni, nell’accertamento dei requisiti, nella gestione delle eccezioni, nella valutazione delle alternative e in tutti i momenti nei quali siano necessari giudizio, competenza o assunzione di responsabilità.",
      "Ogni passaggio resta tracciabile. Ogni intervento può essere documentato. Ogni deviazione dal percorso previsto può essere individuata, sospesa e sottoposta a verifica.",
      "L’Intelligenza Artificiale può elaborare dati, supportare l’analisi e proporre possibili percorsi. Ma non sostituisce l’operatore nella responsabilità della decisione.",
      "La decisione finale rimane umana. Non perché l’essere umano venga collocato simbolicamente alla fine del procedimento, ma perché conserva, durante tutto il suo svolgimento, la capacità concreta di comprendere, controllare, correggere e decidere.",
      "È questo il significato più autentico del controllo umano: non una firma apposta sull’output di una macchina, ma una presenza operativa e responsabile lungo l’intero percorso decisionale.",
      "CAELO nasce precisamente per rendere possibile questa forma di controllo: un controllo umano esercitabile passo dopo passo, fino alla decisione finale, che resta nella responsabilità dell’operatore."
    ]
  }
];

const steps = [
  { label: "Acquisizione dei dati", icon: FileText },
  { label: "Verifica requisiti", icon: ListChecks },
  { label: "Elaborazione AI", icon: BrainCircuit },
  { label: "Valutazione e alternative", icon: GitBranch },
  { label: "Gestione eccezioni", icon: TriangleAlert },
  { label: "Decisione", icon: BadgeCheck }
];

function HumanControlGraphic() {
  return (
    <figure className="mx-auto mt-10 max-w-5xl overflow-hidden border border-[#173b59]/30 bg-[#f3efe7] shadow-sm">
      <div className="px-5 py-7 md:px-8 md:py-9">
        <div className="text-center">
          <p className="font-sans text-3xl font-bold uppercase tracking-[0.06em] text-[#173b59] md:text-5xl">
            Il controllo umano
          </p>
          <p className="mt-1 font-sans text-2xl font-bold uppercase tracking-[0.04em] text-[#173b59] md:text-4xl">
            non è un pulsante di emergenza
          </p>
          <p className="mx-auto mt-4 max-w-3xl font-sans text-base text-[#173b59] md:text-lg">
            L’Intelligenza Artificiale può elaborare. Le persone decidono. La responsabilità resta umana. <strong>Sempre.</strong>
          </p>
        </div>

        <div className="mt-8 border-t border-[#173b59]/30 pt-5">
          <p className="text-center font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#173b59]">
            Il procedimento decisionale
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {steps.map(({ label, icon: Icon }, index) => (
              <div key={label} className="relative flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#1d557d] bg-[#faf7ef] text-[#1d557d] shadow-sm">
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </div>
                <p className="mt-3 min-h-10 font-sans text-xs font-semibold uppercase leading-4 text-[#173b59]">
                  {label}
                </p>
                {index < steps.length - 1 && (
                  <span className="absolute left-[calc(50%+42px)] top-10 hidden h-px w-[calc(100%-84px)] bg-[#1d557d]/50 xl:block" aria-hidden="true" />
                )}
                {index < steps.length - 1 && (
                  <div className="mt-3 flex items-center gap-2 text-[#b38a4f]">
                    <UserRound className="h-5 w-5" aria-hidden="true" />
                    <span className="font-sans text-[10px] font-semibold uppercase">Controllo umano</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 border-t border-[#173b59]/30 pt-6 md:grid-cols-[1fr_300px]">
          <div className="flex items-center rounded-sm bg-[#173b59] px-6 py-5 font-sans text-lg leading-7 text-white md:text-xl">
            Il vero rischio non è che l’AI sostituisca l’essere umano. È che l’essere umano perda la capacità di esercitare un controllo reale sulle decisioni.
          </div>
          <div className="space-y-3 border border-[#173b59]/30 bg-[#173b59] p-5 text-white">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em]">Controllo umano</p>
            <div className="flex gap-3"><BrainCircuit className="mt-1 h-5 w-5 shrink-0" /><p className="text-sm"><strong>Comprendere</strong><br />Capire cosa sta facendo il sistema.</p></div>
            <div className="flex gap-3"><Search className="mt-1 h-5 w-5 shrink-0" /><p className="text-sm"><strong>Verificare</strong><br />Controllare dati, regole e logiche applicate.</p></div>
            <div className="flex gap-3"><SlidersHorizontal className="mt-1 h-5 w-5 shrink-0" /><p className="text-sm"><strong>Intervenire</strong><br />Modificare, sospendere o correggere.</p></div>
            <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0" /><p className="text-sm"><strong>Responsabilità</strong><br />Rispondere delle decisioni e delle conseguenze.</p></div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function ArticoloControlloUmano() {
  const shareOnLinkedIn = () => {
    const articleUrl = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer,width=760,height=720");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f2eee4] text-[#171714]">
        <main className="mx-auto max-w-[1180px] px-4 py-8 md:px-8 md:py-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <Link to="/la-voce" className="inline-flex border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.18em]">
              ← La Voce di CAELO
            </Link>
            <button type="button" onClick={shareOnLinkedIn} className="inline-flex items-center gap-2 border border-black bg-[#faf7ef] px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Condividi su LinkedIn
            </button>
          </div>

          <article className="mt-6 border border-black/70 bg-[#faf7ef] px-5 py-8 md:px-14 md:py-14">
            <header className="border-b border-black/50 pb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">AI Governance · Controllo umano</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Il controllo umano non è un pulsante di emergenza
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                Perché il vero rischio dell'Intelligenza Artificiale non è sostituire l'essere umano, ma renderlo irrilevante nel processo decisionale.
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 24 luglio 2026</p>
            </header>

            <HumanControlGraphic />

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              {intro.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]" : "mt-5"}>
                  {paragraph}
                </p>
              ))}

              {sections.map((section) => (
                <section key={section.title} className="mt-12">
                  <h2 className="border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-5">{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            <footer className="mt-12 border-t border-black/50 pt-7">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-serif text-xl font-semibold">Claudia Catania</p>
                  <p className="mt-2 text-sm text-black/70">Co-Founder of CAELO</p>
                </div>
                <button type="button" onClick={shareOnLinkedIn} className="inline-flex shrink-0 items-center justify-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]">
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
