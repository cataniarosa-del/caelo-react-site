import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const sections = [
  {
    "title": "Introduzione",
    "paragraphs": [
      "Negli ultimi giorni, due notizie apparentemente separate hanno mostrato con chiarezza quale sarà uno dei prossimi problemi dell’Intelligenza Artificiale.",
      "Il 9 luglio, l’International Telecommunication Union, l’agenzia delle Nazioni Unite specializzata nelle tecnologie digitali, ha annunciato la costituzione di un gruppo internazionale dedicato alla fiducia negli agenti AI. L’obiettivo è affrontare le questioni che stanno emergendo con la diffusione di sistemi capaci non soltanto di generare contenuti, ma anche di pianificare attività, accedere ad applicazioni, effettuare operazioni e assumere iniziative con un grado crescente di autonomia. L’attenzione dell’ITU si concentra sulla necessità di rendere gli agenti identificabili, affidabili e sottoposti a un controllo umano significativo. La nuova iniziativa riunirà esperti tecnici, giuridici e istituzionali per sviluppare un quadro internazionale di gestione della fiducia negli agenti AI.",
      "Pochi giorni dopo, Reuters ha raccontato che alcune delle principali banche di Wall Street stanno già introducendo agenti AI nell’onboarding dei clienti, nella gestione patrimoniale, nella tesoreria, nel trading e nelle operazioni interne. BNY arriva ad assegnare compiti agli agenti e ad affidarli alla supervisione di manager umani, quasi fossero nuovi componenti della forza lavoro.",
      "Le due notizie descrivono la stessa trasformazione da prospettive diverse. Gli agenti AI stanno entrando nelle organizzazioni più velocemente di quanto le organizzazioni stiano riuscendo a definire le condizioni del loro potere."
    ]
  },
  {
    "title": "Dalla capacità di rispondere alla capacità di agire",
    "paragraphs": [
      "Per alcuni anni abbiamo discusso soprattutto della qualità delle risposte prodotte dall’Intelligenza Artificiale. Ci siamo chiesti se i modelli fossero accurati, se potessero generare informazioni false, se rispettassero la privacy e se i loro risultati fossero sufficientemente trasparenti. Con gli agenti AI, tuttavia, la natura del problema cambia.",
      "Un sistema che produce una risposta può influenzare una decisione. Un sistema che accede ad applicazioni, seleziona documenti, avvia operazioni, coordina altri agenti o modifica lo stato di una pratica partecipa direttamente alla costruzione della decisione. Il passaggio dalla generazione all’azione trasforma quindi una questione prevalentemente tecnologica in una questione organizzativa. Non dobbiamo più chiederci soltanto se il sistema funzioni correttamente. Dobbiamo stabilire che cosa possa fare, in quale momento, sulla base di quali presupposti e sotto la responsabilità di chi. Per questa ragione stanno diventando centrali l’identità digitale degli agenti, l’autenticazione e il controllo degli accessi. Se un agente entra nei sistemi di un’organizzazione, utilizza dati riservati o compie operazioni per conto di qualcuno, deve essere identificabile. Occorre sapere chi lo ha creato, chi lo ha autorizzato, quali credenziali utilizza e quali risorse può raggiungere. È un passaggio indispensabile. Ma non è sufficiente."
    ]
  },
  {
    "title": "L’identità non determina l’autorità",
    "paragraphs": [
      "L’identità tecnica non stabilisce da sola quale decisione un agente possa assumere, sulla base di quali regole, con quali eccezioni e sotto la responsabilità di chi. Un agente può essere perfettamente identificabile e continuare a operare all’interno di un procedimento non governato. Può avere credenziali valide, ma non sapere quando deve fermarsi, quando occorre un’approvazione umana, quale norma debba prevalere, come debba essere gestita un’eccezione, quali elementi debbano essere conservati come prova e chi risponda della decisione finale.",
      "L’autenticazione risponde alla domanda:",
      "“Di quale agente si tratta?”",
      "Il controllo degli accessi risponde alla domanda:",
      "“A quali sistemi e informazioni può accedere?”",
      "Ma rimane aperta una questione più profonda:",
      "“Da quale architettura deriva la sua autorità?”",
      "Avere accesso a un’informazione non significa avere il potere di utilizzarla per assumere una decisione. Essere autorizzati a entrare in un sistema non significa essere legittimati a modificare lo stato di un procedimento. Tra accesso tecnico e autorità decisionale esiste uno spazio che deve essere governato. Quello spazio è il procedimento."
    ]
  },
  {
    "title": "Il mandato procedurale dell’agente AI",
    "paragraphs": [
      "Per governare agenti che agiscono all’interno delle organizzazioni, dobbiamo fare un passo ulteriore rispetto alla semplice autorizzazione tecnica: collegare l’autorità dell’agente al procedimento nel quale viene esercitata. È ciò che possiamo definire mandato procedurale. Un agente AI non dovrebbe ricevere soltanto un’identità digitale e un insieme di credenziali. Dovrebbe ricevere un mandato che stabilisca il perimetro entro il quale può esercitare la propria capacità operativa. Quel mandato dovrebbe definire il ruolo dell’agente, le azioni consentite, le condizioni che le rendono legittime, i limiti della delega, i passaggi che richiedono l’intervento umano, gli elementi da conservare come prova e le circostanze nelle quali l’autorità debba essere sospesa o revocata. Non si tratterebbe di una semplice lista statica di permessi. Il mandato dovrebbe essere collegato allo stato concreto del procedimento. L’agente, quindi, non agisce soltanto perché possiede un’autorizzazione. Può agire perché si trova nella fase del procedimento che consente quella determinata azione, perché le condizioni richieste sono state verificate e perché la regola applicabile ne legittima l’esercizio.",
      "È il contesto procedurale a trasformare un permesso astratto in un’autorità concretamente esercitabile.",
      "Un agente, per esempio, potrebbe essere autorizzato a verificare la completezza di una pratica, ma non a rigettarla. Potrebbe formulare una proposta, ma essere obbligato a fermarsi quando rileva un’eccezione normativa, manca un documento essenziale oppure la decisione supera una determinata soglia di rischio. La stessa azione potrebbe essere consentita in una fase e vietata in un’altra. Potrebbe diventare legittima soltanto dopo una verifica oppure richiedere una seconda autorizzazione. L’identità stabilisce chi è l’agente.",
      "Il mandato procedurale stabilisce che cosa può fare, quando può farlo e chi ne risponde.",
      "Anche l’ITU, nei propri materiali dedicati agli standard internazionali per l’AI, evidenzia che la delega di autorità agli agenti dovrebbe essere circoscritta, tracciabile e revocabile, sostenuta da strumenti capaci di impedire una propagazione eccessiva dei permessi. Questa impostazione apre però una domanda ulteriore.",
      "Come possiamo delimitare, tracciare e revocare una delega se il procedimento nel quale viene esercitata non è stato modellato?"
    ]
  },
  {
    "title": "Non si governa l’agente senza governare il procedimento",
    "paragraphs": [
      "Per rendere una delega realmente governabile, non basta controllare l’agente. Occorre modellare il procedimento nel quale l’agente esercita il proprio potere. Questo significa rappresentare in forma strutturata le regole applicabili, i ruoli coinvolti, le condizioni che consentono di passare da una fase all’altra, le alternative possibili, le eccezioni, i controlli e le responsabilità. Soltanto così l’autorità dell’agente può diventare contestuale.",
      "L’agente non riceve un’autorizzazione generica ad agire. Riceve la possibilità di compiere una determinata azione quando ricorrono condizioni verificabili, all’interno di una sequenza governata e con un passaggio umano obbligatorio quando il procedimento lo richiede.",
      "Anche la tracciabilità assume, in questa prospettiva, un significato più profondo. Non consiste soltanto nel registrare ciò che l’agente ha fatto, ma nel poter ricostruire perché quell’azione fosse consentita, quale regola sia stata applicata e quale soggetto conservasse la responsabilità finale.",
      "Un log può dimostrare che un agente ha compiuto un’azione. Un’architettura procedurale può dimostrare perché avesse l’autorità di compierla.",
      "È la differenza tra registrare un evento e governare una decisione."
    ]
  },
  {
    "title": "La nuova infrastruttura dell’autorità digitale",
    "paragraphs": [
      "Con l’arrivo degli agenti AI dobbiamo governare entità digitali capaci di interpretare informazioni, coordinare attività e partecipare a processi dai quali derivano effetti reali. Dovremo quindi costruire infrastrutture capaci di stabilire, in tempo reale, quale autorità possano esercitare e quale parte di quell’autorità debba rimanere necessariamente umana. La prossima frontiera dell’AI Governance non riguarderà soltanto l’affidabilità dei modelli o la sicurezza degli agenti. Riguarderà la progettazione dell’autorità all’interno delle organizzazioni.",
      "Ed è in questo passaggio che la Procedural Governance diventa essenziale.",
      "Perché, quando l’Intelligenza Artificiale comincia ad agire, il vero problema non è più soltanto controllare la tecnologia. È governare l’architettura attraverso la quale quella tecnologia acquisisce autorità, produce decisioni e genera responsabilità."
    ]
  },
  {
    "title": "Dal mandato operativo al mandato procedurale",
    "paragraphs": [
      "La necessità di delimitare l’autorità degli agenti AI sta già emergendo nel dibattito giuridico e istituzionale.",
      "In Italia, Alessandro Del Ninno ha evidenziato la necessità di attribuire all’agente un vero e proprio mandato operativo, scritto in forma quasi procedurale e composto da regole positive e negative.",
      "A livello internazionale, il Fondo Monetario Internazionale, analizzando l’impiego degli agenti AI nei sistemi di pagamento, osserva che l’autorizzazione sta diventando strutturale e basata su mandati.",
      "Anche la Monetary Authority of Singapore definisce il mandato come il meccanismo attraverso il quale un utente stabilisce i confini dell’autorità delegata a un agente.",
      "Questi contributi indicano una direzione comune: un agente AI non può ricevere un’autorizzazione generica ad agire.",
      "Ma occorre compiere un passo ulteriore.",
      "Il mandato non dovrebbe definire soltanto che cosa l’agente possa fare in astratto. Dovrebbe collegarne l’autorità allo stato concreto del procedimento, alle norme applicabili, alle condizioni già verificate, alle eccezioni rilevate, ai passaggi riservati all’essere umano e alle responsabilità che devono rimanere identificabili. È questo il passaggio dal mandato operativo al mandato procedurale. Non più soltanto un insieme di permessi attribuiti all’agente, ma un’autorità dinamica che deriva dall’architettura del procedimento nel quale esso opera."
    ]
  },
  {
    "title": "Nota dell’autrice",
    "paragraphs": [
      "Questa riflessione nasce anche dal lavoro che stiamo sviluppando con CAELO, una piattaforma AI-native di governance procedurale progettata per trasformare regole, ruoli, condizioni, eccezioni e responsabilità in procedimenti governabili, tracciabili e auditabili. CAELO rappresenta l’applicazione concreta di una convinzione maturata nel tempo: quando l’Intelligenza Artificiale entra nei processi decisionali, non basta governare il modello o controllare l’agente. Occorre governare l’architettura procedurale dalla quale deriva la sua autorità.",
      "#ProceduralGovernance #AIGovernance #AgenticAI #AIAgents #ResponsibleAI #CAELO"
    ]
  }
];

export default function ArticoloAutoritaAgentiAI() {
  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Agentic AI · Governance dell’autorità</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Non basta identificare un agente AI. Bisogna governarne l’autorità
              </h1>
              <p className="mt-6 text-sm">Di Claudia Catania · 15 luglio 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              {sections.map((section, sectionIndex) => (
                <section key={section.title} className={sectionIndex === 0 ? "" : "mt-12"}>
                  {sectionIndex > 0 && (
                    <h2 className="border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraph}
                      className={sectionIndex === 0 && paragraphIndex === 0
                        ? "first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]"
                        : "mt-5"}
                    >
                      {paragraph}
                    </p>
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
