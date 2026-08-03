import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Le “cartelle pazze” delle case popolari di Roma",
    paragraphs: [
      "Il Corriere della Sera ha raccontato il fenomeno delle cosiddette “cartelle pazze” inviate da Aequa Roma agli inquilini delle case popolari comunali. Secondo quanto riportato dal giornale, circa seimila persone ricevettero richieste di pagamento per conguagli di migliaia di euro, calcolati anche sulla base di un censimento reddituale risalente al 2015.",
      "Tra i casi descritti vi era quello di una donna invalida, titolare della Legge 104, alla quale furono richiesti complessivamente 3.885,29 euro, a fronte di un canone mensile di 47 euro. Molte altre richieste superavano i cinquemila euro.",
      "Dietro ogni cartella non c’è soltanto un numero. C’è una persona che deve capire da dove provenga quella somma, recuperare ricevute, documenti e comunicazioni risalenti ad anni prima. Il danno nasce già nel momento in cui il cittadino viene costretto a difendersi da un sistema che avrebbe dovuto proteggerlo."
    ]
  },
  {
    title: "Il caso di una donna di 86 anni",
    paragraphs: [
      "Sono venuta a conoscenza diretta di un caso che mostra quanto possano diventare gravi le conseguenze della cattiva gestione amministrativa. La vicenda riguarda una donna anziana, assegnataria di un alloggio di edilizia residenziale pubblica di Roma Capitale.",
      "Per circa venticinque anni ha pagato regolarmente tutti i canoni richiesti. Non ha mai saltato una rata. Nel 2018 lo stesso Dipartimento Patrimonio e Politiche abitative di Roma Capitale aveva certificato che la donna era “utente assegnataria regolare”, richiamando espressamente la determinazione dirigenziale di assegnazione del 17 dicembre 2001.",
      "Eppure, molti anni dopo, la stessa amministrazione ha costruito nei suoi confronti due percorsi incompatibili: da una parte ha dichiarato la sua decadenza dall’assegnazione; dall’altra ha respinto una precedente istanza di assegnazione in regolarizzazione, trattandola come un’occupante senza titolo."
    ]
  },
  {
    title: "Assegnataria e abusiva nello stesso momento",
    paragraphs: [
      "Per dichiarare una persona decaduta da un alloggio pubblico, bisogna necessariamente considerarla, fino a quel momento, assegnataria. La decadenza presuppone l’esistenza di un titolo dal quale si possa decadere.",
      "Nello stesso periodo, però, Roma Capitale ha trattato la donna come se quel titolo non fosse mai esistito e come se fosse un’occupante abusiva in attesa di regolarizzazione. Una persona non può essere, rispetto allo stesso immobile e nello stesso rapporto amministrativo, contemporaneamente assegnataria regolare e occupante senza titolo.",
      "Gli atti esistevano. I pagamenti esistevano. La determinazione di assegnazione esisteva. Il certificato del 2018 esisteva. Ciò che è mancato è stato un sistema capace di ricondurre tutte queste informazioni a un’unica realtà coerente."
    ]
  },
  {
    title: "Una persona anziana costretta a rivolgersi ai giudici",
    paragraphs: [
      "La donna ha dovuto ricorrere alla giustizia. Parliamo di una persona di 86 anni, affetta da numerose e gravi patologie, invalida e con capacità di deambulazione ridotta: condizioni personali espressamente rappresentate negli atti del giudizio.",
      "Ha dovuto cercare assistenza legale, recuperare atti, ricevute e certificazioni, ricostruire una vicenda amministrativa durata decenni e sostenere il peso emotivo ed economico di un contenzioso per dimostrare all’amministrazione ciò che la stessa amministrazione avrebbe potuto e dovuto sapere consultando i propri documenti.",
      "Il Tribunale amministrativo regionale del Lazio ha infine accolto il ricorso e annullato il provvedimento."
    ]
  },
  {
    title: "Le parole del giudice",
    paragraphs: [
      "La sentenza non parla genericamente di una piccola svista. Il TAR ha rilevato con “palmare evidenza” la “perplessità dell’azione amministrativa”.",
      "Il giudice ha osservato che Roma Capitale aveva, da una parte, disposto la decadenza di una persona già espressamente riconosciuta come assegnataria regolare e, dall’altra, rigettato la sua richiesta di regolarizzazione considerandola occupante senza titolo.",
      "La sentenza afferma inoltre: “È mancata, in altri termini, una riconduzione a unità e coerenza dell’azione amministrativa”. Il ricorso è stato accolto. Il provvedimento è stato annullato. Ma per arrivare a questo risultato è stato necessario un giudice."
    ]
  },
  {
    title: "Non chiamiamolo soltanto errore",
    paragraphs: [
      "Definire tutto questo un semplice “errore amministrativo” rischia di ridurre la portata del problema. Quando una persona segnala la contraddizione, fornisce documenti e continua a essere colpita da provvedimenti incoerenti, il problema non è più soltanto la singola svista.",
      "È un problema di organizzazione, istruttoria, responsabilità e governance. Le cause possono essere differenti: negligenza, superficialità, carenza di istruttoria, mancata comunicazione tra uffici, frammentazione delle banche dati, assenza di controlli.",
      "Qualunque sia la causa, il risultato non cambia: il costo della cattiva amministrazione viene trasferito sulla persona più debole."
    ]
  },
  {
    title: "Quando la casa diventa uno strumento di paura",
    paragraphs: [
      "Un alloggio di edilizia residenziale pubblica non è un bene qualsiasi. Per una persona anziana può rappresentare l’unico presidio di sicurezza rimasto, il luogo nel quale ha costruito la propria vita e spesso l’unica abitazione che può permettersi.",
      "Ricevere un provvedimento che mette in discussione il diritto a quella casa significa vivere nella paura, temere uno sfratto e sentirsi trattati come abusivi dopo aver pagato regolarmente per venticinque anni.",
      "Questa non è soltanto inefficienza. È un’ingiustizia amministrativa che colpisce una persona nella sua condizione di maggiore vulnerabilità."
    ]
  },
  {
    title: "È qui che comincia l’etica dell’intelligenza artificiale",
    paragraphs: [
      "Quando si parla di etica dell’intelligenza artificiale nella pubblica amministrazione, il dibattito si concentra spesso su trasparenza, equità, non discriminazione, protezione dei dati, supervisione umana e responsabilità. Sono tutti principi indispensabili. Ma l’etica comincia ancora prima.",
      "Comincia dalla capacità del sistema di conoscere e ricostruire correttamente la realtà amministrativa sulla quale sta intervenendo. Un sistema equo avrebbe dovuto rilevare l’esistenza della determinazione di assegnazione, del certificato del 2018, dei pagamenti regolari, della decadenza e della contemporanea qualificazione come occupante senza titolo.",
      "Prima dell’adozione di qualsiasi nuovo provvedimento era indispensabile un controllo umano qualificato. Non serviva un modello capace di scrivere una lettera più elegante. Serviva un sistema capace di impedire che quella lettera venisse prodotta."
    ]
  },
  {
    title: "L’intelligenza artificiale può anche amplificare l’ingiustizia",
    paragraphs: [
      "Inserire un modello linguistico all’interno di un procedimento disorganizzato non risolve automaticamente il problema. Può persino aggravarlo.",
      "Un modello generativo potrebbe scrivere più rapidamente il provvedimento sbagliato, formulare in modo impeccabile una motivazione costruita su presupposti contraddittori e inviare migliaia di comunicazioni in poche ore.",
      "L’efficienza, da sola, non è etica. Automatizzare un procedimento incoerente significa soltanto produrre più velocemente le conseguenze di quella incoerenza."
    ]
  },
  {
    title: "L’etica non può dipendere dalla buona volontà",
    paragraphs: [
      "Non possiamo affidare la tutela del cittadino esclusivamente all’attenzione del singolo funzionario. Le persone possono sbagliare, gli uffici possono non comunicare e i documenti possono essere archiviati in sistemi diversi.",
      "Proprio per questo occorre costruire un’architettura che renda visibili le informazioni rilevanti e obbligatori i controlli necessari. L’etica non può essere soltanto una qualità personale. Deve diventare una proprietà del sistema.",
      "Un sistema etico intercetta l’incoerenza, impedisce l’avanzamento, richiede una verifica, identifica il responsabile, conserva le evidenze e rende ricostruibile ogni passaggio."
    ]
  },
  {
    title: "È da questa esigenza che nasce CAELO",
    paragraphs: [
      "CAELO nasce dalla consapevolezza che, nei procedimenti regolati, non basta utilizzare un modello intelligente. Occorre governare il percorso nel quale le informazioni vengono acquisite, le condizioni vengono verificate e le decisioni vengono assunte.",
      "CAELO non nasce per sostituire il funzionario, attribuire a un modello linguistico la libertà di decidere o trasformare un procedimento amministrativo in una semplice conversazione con una macchina.",
      "Nasce per collegare in modo verificabile atti, fonti, regole, ruoli, condizioni, stati, transizioni, eccezioni, controlli e responsabilità. Una sentenza deve modificare lo stato del procedimento; i pagamenti devono diventare evidenze della storia del rapporto; le contraddizioni devono emergere prima dell’adozione del provvedimento."
    ]
  },
  {
    title: "Una glass box procedurale",
    paragraphs: [
      "Oggi molte organizzazioni introducono l’intelligenza artificiale attraverso modelli generativi che restano, almeno in parte, delle black box. Producono un risultato, ma non sempre rendono comprensibile e governabile l’intero percorso che lo ha determinato.",
      "Nei procedimenti amministrativi non basta sapere quale testo è stato generato. Bisogna sapere quale fase era attiva, quali atti sono stati considerati, quale regola è stata applicata, quale condizione è stata verificata, quale eccezione è stata attivata e chi ha autorizzato il passaggio.",
      "È questa la glass box procedurale: non una macchina che pretende di essere infallibile, ma un sistema nel quale il percorso è osservabile, controllabile, ricostruibile e attribuibile."
    ]
  },
  {
    title: "Tutelare il patrimonio significa tutelare anche chi ha diritto",
    paragraphs: [
      "Roma Capitale deve contrastare gli abusi nel proprio patrimonio immobiliare. Ma ha lo stesso dovere di proteggere gli assegnatari legittimi. Le due finalità non sono contrapposte.",
      "Un sistema disordinato finisce per favorire anche i veri abusi: disperde risorse, moltiplica il contenzioso, rallenta gli interventi sulle situazioni realmente illegittime e colpisce le persone più fragili.",
      "L’etica amministrativa consiste anche nel non costringere una donna di 86 anni ad arrivare davanti a un giudice per ottenere il riconoscimento di un principio elementare: non può essere contemporaneamente assegnataria regolare e occupante abusiva dello stesso alloggio."
    ]
  }
];

export default function ArticoloAmministrazione() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#f2eee4] text-[#171714]">
        <main className="mx-auto max-w-[1180px] px-4 py-8 md:px-8 md:py-12">
          <Link
            to="/la-voce"
            className="inline-flex border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            ← La Voce di CAELO
          </Link>

          <article className="mt-6 border border-black/70 bg-[#faf7ef] px-5 py-8 md:px-14 md:py-14">
            <header className="border-b border-black/50 pb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Etica dell’IA · Procedimenti pubblici</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Quando l’amministrazione colpisce chi è nel giusto
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                Dalle “cartelle pazze” delle case popolari all’etica dell’intelligenza artificiale nei procedimenti pubblici
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 4 agosto 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]">
                Nel patrimonio abitativo di Roma esiste un problema reale. Esistono occupazioni abusive, morosità, alloggi sottratti per anni alle persone che ne avrebbero diritto e situazioni che devono essere accertate e ricondotte alla legalità.
              </p>
              <p className="mt-5">Un’amministrazione pubblica ha il dovere di tutelare il proprio patrimonio. Deve verificare le posizioni, recuperare le somme effettivamente dovute, contrastare gli abusi e restituire gli immobili pubblici alla loro funzione sociale.</p>
              <p className="mt-5">Ma esiste anche un’altra realtà. È quella dei cittadini fragili, degli anziani e delle famiglie con redditi bassi che, pur essendo nel giusto, vengono travolti da richieste di pagamento, ricostruzioni amministrative errate e provvedimenti tra loro contraddittori.</p>
              <p className="mt-5">Il problema non è scegliere tra il contrasto agli abusi e la protezione delle persone. Il problema è costruire un’amministrazione capace di distinguere. Quando questa distinzione viene meno, l’azione amministrativa non ristabilisce la giustizia. Produce una nuova ingiustizia.</p>

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

              <section className="mt-12 border-y border-black/60 py-8">
                <h2 className="font-serif text-3xl font-semibold md:text-4xl">L’etica è ciò che il sistema impedisce</h2>
                <p className="mt-5">L’etica dell’intelligenza artificiale non è una dichiarazione da inserire in un documento programmatico. Non è un comitato che interviene quando il danno si è già verificato. Non è una formula aggiunta alla fine di un progetto tecnologico.</p>
                <p className="mt-5">L’etica è la capacità del sistema di distinguere. È la capacità di non trasformare la fragilità in una colpa. È la capacità di impedire che una contraddizione evidente diventi un provvedimento.</p>
                <p className="mt-5">Un sistema è etico quando rende difficile l’ingiustizia, visibile l’incoerenza, inevitabile il controllo e identificabile la responsabilità.</p>
                <p className="mt-5 font-semibold">Per questo l’etica non è un livello da aggiungere all’intelligenza artificiale. L’etica è l’architettura del procedimento. Ed è da qui che comincia CAELO.</p>
              </section>
            </div>

            <footer className="mt-10 border-t border-black/50 pt-6">
              <p className="font-serif text-xl font-semibold">Claudia Catania</p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
                Esperta di governance pubblica, procedimenti amministrativi ed etica dell’intelligenza artificiale. Fondatrice di CAELO.
              </p>
            </footer>
          </article>
        </main>
      </div>
    </Layout>
  );
}
