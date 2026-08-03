import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const sections = [
  {
    title: "L'infrastruttura che ancora non vediamo",
    paragraphs: [
      "Quando parliamo di intelligenza artificiale, il dibattito si concentra quasi sempre sui modelli, sui dati, sulle piattaforme e sugli agenti. Molto meno spazio viene dedicato all'infrastruttura che permette a quei sistemi di operare realmente all'interno di un'organizzazione.",
      "Un modello può analizzare un documento, suggerire una risposta, classificare informazioni, generare un testo o formulare una raccomandazione. Tutto questo rappresenta un enorme passo avanti, ma non equivale a governare un procedimento.",
      "Le organizzazioni, infatti, non funzionano attraverso singole risposte, bensì attraverso procedimenti che disciplinano il modo in cui una decisione viene costruita, verificata, autorizzata e resa efficace.",
      "Pensiamo, ad esempio, a una banca che concede un finanziamento, a un ospedale che autorizza un trattamento sanitario oppure a un ente pubblico che riconosce una prestazione previdenziale. In tutti questi casi l'intelligenza artificiale può fornire un supporto prezioso, ma non può sostituire il procedimento che rende quella decisione legittima, verificabile e attribuibile a una responsabilità precisa."
    ]
  },
  {
    title: "Una decisione organizzativa non nasce da un prompt",
    paragraphs: [
      "Una decisione rilevante non dipende semplicemente dalla qualità della risposta prodotta da un modello di intelligenza artificiale.",
      "Nasce da un insieme di regole che stabiliscono chi può decidere, quali verifiche devono essere effettuate, quali documenti devono essere acquisiti, quali condizioni devono essere soddisfatte, quali eccezioni devono essere considerate e in quali casi sia necessario sospendere il procedimento, coinvolgere altri soggetti o prevedere una supervisione umana.",
      "In altre parole, ogni decisione è il risultato di un percorso e non di un singolo evento.",
      "Questa dimensione è sorprendentemente assente in gran parte del dibattito sull'intelligenza artificiale. Si discute molto della qualità dei modelli, della loro capacità di ragionamento, dei rischi di allucinazione o dei problemi di bias, ma molto meno del contesto procedurale all'interno del quale quei modelli dovranno operare.",
      "Eppure è proprio quel contesto a determinare se una decisione sarà realmente affidabile. Anche il sistema più avanzato può produrre risultati inadeguati non perché il modello sia sbagliato, ma perché è stato inserito in un procedimento progettato male, privo di regole chiare o incapace di governare correttamente il processo decisionale."
    ]
  },
  {
    title: "L'AI Governance è fondamentale, ma non basta",
    paragraphs: [
      "Negli ultimi anni abbiamo imparato a parlare di AI Governance, interrogandoci su chi possa approvare un sistema di intelligenza artificiale, chi ne sia responsabile, come debbano essere gestiti i rischi, quali controlli introdurre e come monitorarne il comportamento nel tempo.",
      "Tutto questo è indispensabile e rappresenta un passaggio fondamentale per un utilizzo responsabile dell'AI. Rimane però una domanda che, a mio avviso, precede tutte le altre: dentro quale procedimento opera quell'intelligenza artificiale?",
      "È infatti il procedimento a stabilire cosa può accadere, quando può accadere, secondo quali regole, con quali controlli e sotto la responsabilità di chi.",
      "La governance dell'AI definisce il quadro entro il quale un sistema può essere adottato; la governance procedurale definisce invece il ruolo concreto che quel sistema assume all'interno di una decisione, delimitandone i poteri, le responsabilità, le interazioni con le persone e i momenti nei quali il controllo umano diventa necessario.",
      "Senza questa architettura possiamo avere sistemi perfettamente conformi dal punto di vista tecnologico, ma inseriti in processi che non sono realmente governati."
    ]
  },
  {
    title: "Il prossimo vantaggio competitivo",
    paragraphs: [
      "Per molti anni abbiamo considerato i dati il principale patrimonio strategico delle organizzazioni. Oggi attribuiamo un valore crescente ai modelli di intelligenza artificiale e agli algoritmi che li rendono possibili.",
      "Credo però che il prossimo passo sarà comprendere che il patrimonio più importante di un'organizzazione è rappresentato dai suoi procedimenti.",
      "È nei procedimenti che si incontrano norme, persone, dati, responsabilità, controlli e sistemi intelligenti; è lì che una risposta diventa una decisione e che una decisione produce effetti concreti, come l'approvazione di un finanziamento, il riconoscimento di un diritto, l'autorizzazione di una prestazione sanitaria o il rigetto di un'istanza.",
      "In quel momento non è più sufficiente che l'intelligenza artificiale abbia prodotto una risposta plausibile. Diventa necessario dimostrare che quella decisione sia stata assunta nel rispetto delle regole, che il percorso seguito sia corretto, che ogni responsabilità sia chiaramente attribuibile e che ogni passaggio possa essere ricostruito nel tempo.",
      "È per questo motivo che ritengo il procedimento una vera infrastruttura. Non un semplice flusso di lavoro, ma l'architettura attraverso cui un'organizzazione governa il proprio modo di decidere."
    ]
  },
  {
    title: "Una riflessione sul futuro",
    paragraphs: [
      "I modelli continueranno a evolversi, i fornitori si alterneranno e le tecnologie cambieranno con una rapidità sempre maggiore.",
      "Ciò che difficilmente potrà essere sostituito sarà l'architettura attraverso cui un'organizzazione prende decisioni, applica regole, assegna responsabilità e governa i propri procedimenti.",
      "Forse, tra qualche anno, smetteremo di chiederci quale modello di intelligenza artificiale utilizzi un'organizzazione. La domanda davvero rilevante sarà un'altra: come governa i propri procedimenti e quale ruolo assegna all'intelligenza artificiale all'interno di essi?",
      "Credo che la prossima grande trasformazione digitale non riguarderà soltanto lo sviluppo di sistemi AI sempre più potenti. Riguarderà soprattutto la capacità di progettare procedimenti nei quali persone, norme e intelligenza artificiale possano operare insieme in modo trasparente, controllabile e verificabile.",
      "Perché, alla fine, il valore non nasce quando un modello genera una risposta. Nasce quando quella risposta diventa una decisione corretta, produce un effetto reale ed è possibile dimostrare, anche a distanza di tempo, perché quella decisione è stata presa e chi ne è stato responsabile.",
      "È in quel momento che il procedimento diventa la vera infrastruttura dell'intelligenza artificiale. E chi saprà governarla contribuirà a definire il modo in cui le organizzazioni prenderanno decisioni nel prossimo decennio."
    ]
  }
];

export default function ArticoloGovernareProcedimenti() {
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Governance procedurale · Futuro dell’AI</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Chi governerà i procedimenti governerà il futuro dell’AI
              </h1>
              <p className="mt-6 text-sm">Di Claudia Catania · 13 luglio 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]">
                Negli ultimi due anni la corsa all’intelligenza artificiale si è concentrata quasi esclusivamente sui modelli linguistici, sulla capacità di calcolo, sulle GPU, sugli agenti autonomi e sulle infrastrutture tecnologiche necessarie per far funzionare sistemi sempre più potenti.
              </p>
              <p className="mt-5">È una competizione straordinaria, che sta cambiando il mercato con una velocità mai vista prima e che continuerà a produrre innovazione nei prossimi anni.</p>
              <p className="mt-5">Osservando, però, l’evoluzione di questo scenario, ho la sensazione che il vero vantaggio competitivo del prossimo decennio nascerà altrove. Non dipenderà soltanto da chi svilupperà il modello più performante o l’agente più sofisticato, ma da chi riuscirà a governare i procedimenti all’interno dei quali quell’intelligenza artificiale sarà chiamata a operare.</p>
              <p className="mt-5">Negli ultimi mesi il mercato ha iniziato a distinguere con sempre maggiore chiarezza tra modelli di business profondamente diversi. Da una parte troviamo aziende che costruiscono infrastrutture tecnologiche, reti, cloud, sicurezza e capacità computazionale; dall'altra, imprese che fondano gran parte del proprio valore sulla vendita di competenze, progettazione e servizi professionali.</p>
              <p className="mt-5">Non è una semplice distinzione tra vincitori e vinti, ma il segnale di un cambiamento strutturale: il valore si sta progressivamente spostando verso ciò che costituisce un'infrastruttura indispensabile, cioè qualcosa senza cui l'intero sistema non può funzionare. Ed è proprio qui che, secondo me, emerge una riflessione ancora poco affrontata.</p>

              {sections.map((section) => (
                <section key={section.title} className="mt-12">
                  <h2 className="border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
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
