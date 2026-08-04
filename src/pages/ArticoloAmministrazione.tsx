import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const intro = [
  "Nel patrimonio abitativo pubblico di Roma esiste un problema reale: occupazioni abusive, morosità e alloggi sottratti per anni alle persone che ne avrebbero diritto.",
  "Un’amministrazione pubblica ha il dovere di tutelare il proprio patrimonio, recuperare le somme effettivamente dovute e contrastare gli abusi.",
  "Ma esiste anche un’altra realtà: quella degli anziani, delle famiglie fragili e dei cittadini con redditi bassi che, pur essendo nel giusto, vengono travolti da richieste di pagamento poco comprensibili, ricostruzioni errate e provvedimenti contraddittori.",
  "Il problema non è scegliere tra il contrasto agli abusi e la protezione delle persone. Il problema è costruire un’amministrazione capace di distinguere.",
  "Quando questa distinzione viene meno, l’azione amministrativa non ristabilisce la giustizia. Produce una nuova ingiustizia."
];

const sections = [
  {
    title: "Le cartelle pazze e l’opacità amministrativa",
    paragraphs: [
      "Il fenomeno delle cosiddette cartelle pazze inviate agli inquilini delle case popolari romane ha mostrato con particolare evidenza questo problema.",
      "Migliaia di persone hanno ricevuto richieste di pagamento per conguagli e oneri accumulati nel tempo, talvolta riferiti ad annualità molto risalenti. In alcuni casi si trattava di somme di migliaia di euro richieste a persone anziane, invalide o titolari di canoni sociali molto bassi.",
      "Il problema non riguarda soltanto l’importo. Riguarda la possibilità di capire a quali annualità si riferisca la richiesta, quali siano le singole componenti, quali calcoli siano stati effettuati, quali partite possano essere prescritte e quali evidenze sostengano ogni voce.",
      "Dopo molti anni, recuperare ricevute, ricostruire consumi e contestare errori diventa estremamente difficile. Il ritardo dell’amministrazione finisce così per essere trasferito sul cittadino.",
      "Anche una richiesta di pagamento può funzionare come una black box: il cittadino conosce l’importo finale, ma non il procedimento che lo ha prodotto."
    ]
  },
  {
    title: "La sentenza del Tribunale di Roma contro Roma Capitale",
    paragraphs: [
      "Il problema delle cartelle pazze è arrivato anche davanti al giudice.",
      "Con la sentenza n. 54105 del 23 novembre 2021, il Tribunale ordinario di Roma, Sezione VI civile, ha accolto il ricorso di un inquilino delle case popolari contro Roma Capitale, condannando l’amministrazione anche al pagamento delle spese di giudizio.",
      "Nel caso esaminato, gli importi richiesti tramite Aequa Roma non consentivano di ricostruire in modo chiaro la formazione del credito. Le somme erano indicate per annualità senza una distinzione sufficientemente verificabile tra canoni, oneri accessori e conguagli.",
      "Il cittadino non era quindi posto nelle condizioni di comprendere quali somme fossero effettivamente dovute, a quali annualità si riferissero, quali voci fossero prescritte e quali calcoli avessero determinato l’importo finale.",
      "Il giudice ha riconosciuto la necessità di riesaminare la posizione debitoria, tenendo conto anche della prescrizione delle partite più risalenti.",
      "Quella sentenza ha dato torto all’amministrazione proprio sul punto centrale: non è sufficiente presentare un importo finale. Occorre rendere verificabile il percorso contabile e amministrativo che lo ha prodotto."
    ]
  },
  {
    title: "Quando la stessa amministrazione crea due realtà incompatibili",
    paragraphs: [
      "Un caso concreto rende ancora più chiaro il problema.",
      "Una donna di 87 anni, assegnataria di un alloggio di edilizia residenziale pubblica, aveva pagato regolarmente i canoni per circa venticinque anni. Esistevano una determinazione di assegnazione e un certificato del 2018 che la qualificava espressamente come assegnataria regolare.",
      "Eppure la stessa amministrazione ha costruito nei suoi confronti due percorsi incompatibili: da una parte l’ha dichiarata decaduta dall’assegnazione; dall’altra l’ha trattata come occupante senza titolo.",
      "Per dichiarare una persona decaduta bisogna riconoscere che possedeva un titolo dal quale decadere. Non è quindi possibile considerarla contemporaneamente assegnataria e occupante abusiva dello stesso alloggio.",
      "Gli atti esistevano. I pagamenti esistevano. La storia amministrativa del rapporto esisteva. Ciò che è mancato è stato un sistema capace di ricondurre tutte queste informazioni a un’unica realtà coerente.",
      "Per quasi due anni questa donna ha vissuto nella paura. È stata raggiunta da atti successivi, uno dopo l’altro, tra loro incongruenti e contraddittori: prima la decadenza, poi il rigetto della regolarizzazione, poi la rappresentazione della stessa persona come occupante senza titolo.",
      "Ogni nuova comunicazione rimetteva in discussione la certezza della sua casa. Per una persona anziana, la casa non è soltanto un bene patrimoniale: è sicurezza, continuità, memoria e protezione. Essere inondata da provvedimenti incompatibili ha significato vivere nell’angoscia di perderla, nonostante venticinque anni di canoni pagati e documenti che confermavano la regolarità della posizione."
    ]
  },
  {
    title: "Le parole del TAR",
    paragraphs: [
      "La vicenda è arrivata davanti al Tribunale amministrativo regionale del Lazio.",
      "La sentenza non ha parlato di una semplice svista. Il TAR ha rilevato con “palmare evidenza” la “perplessità dell’azione amministrativa”.",
      "Il giudice ha osservato che Roma Capitale aveva, da una parte, disposto la decadenza di una persona già riconosciuta come assegnataria regolare e, dall’altra, rigettato la richiesta di regolarizzazione considerandola occupante senza titolo.",
      "La sentenza afferma: “È mancata, in altri termini, una riconduzione a unità e coerenza dell’azione amministrativa”.",
      "Il TAR ha inoltre richiamato il dovere di clare loqui: parlare e decidere chiaramente, adottando esiti procedimentali coerenti tra loro e aderenti a un’unica realtà fattuale.",
      "Il provvedimento è stato annullato. Ma per arrivare a questo risultato è stato necessario un giudice."
    ]
  },
  {
    title: "Non basta chiamarlo errore",
    paragraphs: [
      "Un errore occasionale può accadere. Ma quando gli atti della stessa amministrazione descrivono due realtà incompatibili e la contraddizione non viene intercettata prima del provvedimento, il problema non riguarda più soltanto la singola svista.",
      "Riguarda la qualità dell’istruttoria, la frammentazione delle informazioni, la comunicazione tra uffici, l’assenza di controlli, la responsabilità e la governance del procedimento.",
      "L’amministrazione conserva gli atti, riscuote i canoni e produce i provvedimenti. Ma è il cittadino a dover individuare la contraddizione, dimostrarla e sostenerne il costo.",
      "Questa è un’ingiustizia amministrativa, non una semplice inefficienza."
    ]
  },
  {
    title: "È qui che comincia l’etica dell’intelligenza artificiale",
    paragraphs: [
      "Quando si parla di etica dell’intelligenza artificiale nella pubblica amministrazione, il dibattito si concentra spesso su trasparenza, equità, protezione dei dati, supervisione umana e responsabilità.",
      "Sono principi indispensabili. Ma l’etica comincia ancora prima: dalla capacità del sistema di conoscere e ricostruire correttamente la realtà amministrativa sulla quale sta intervenendo.",
      "Nel caso descritto, un sistema governato avrebbe dovuto rilevare l’esistenza del titolo di assegnazione, del certificato di regolarità, dei pagamenti richiesti e incassati per decenni, della successiva decadenza e della contemporanea qualificazione della stessa persona come priva di titolo.",
      "Avrebbe dovuto fermarsi e segnalare che le due qualificazioni erano incompatibili e che prima di proseguire era necessaria una verifica umana qualificata.",
      "Non serviva un modello capace di scrivere una lettera più elegante. Serviva un sistema capace di impedire che quella lettera venisse prodotta."
    ]
  },
  {
    title: "L’intelligenza artificiale può amplificare anche l’ingiustizia",
    paragraphs: [
      "Inserire un modello linguistico in un procedimento disorganizzato non risolve automaticamente il problema. Può aggravarlo.",
      "Un modello generativo può scrivere più rapidamente un provvedimento sbagliato, formulare in modo impeccabile una motivazione costruita su presupposti contraddittori e trasformare un errore locale in una disfunzione sistematica su larga scala.",
      "L’efficienza, da sola, non è etica. Automatizzare un procedimento incoerente significa soltanto produrre più velocemente le conseguenze dell’incoerenza.",
      "Prima di automatizzare una decisione bisogna governare il procedimento che conduce a quella decisione: stabilire quali dati siano rilevanti, quali atti producano effetti, quale stato sia attivo, quali contraddizioni debbano bloccare il percorso, chi debba controllare e chi assuma la responsabilità finale."
    ]
  },
  {
    title: "L’etica deve diventare una proprietà del sistema",
    paragraphs: [
      "Non possiamo affidare la tutela del cittadino esclusivamente all’attenzione del singolo funzionario.",
      "Gli uffici possono non comunicare, i documenti possono essere distribuiti tra sistemi diversi e un operatore può non conoscere un atto adottato anni prima da un’altra struttura.",
      "Proprio per questo l’etica non può restare una qualità individuale. Deve diventare una proprietà dell’architettura.",
      "Un sistema etico non promette che nessuno sbaglierà mai. Fa qualcosa di più concreto: intercetta l’incoerenza, impedisce l’avanzamento, richiede una verifica, identifica il responsabile, conserva le evidenze e rende ricostruibile ogni passaggio."
    ]
  },
  {
    title: "È da questa esigenza che nasce CAELO",
    paragraphs: [
      "CAELO nasce dalla consapevolezza che, nei procedimenti regolati, non basta utilizzare un modello intelligente.",
      "Occorre governare il percorso nel quale le informazioni vengono acquisite, le condizioni vengono verificate e le decisioni vengono assunte.",
      "CAELO non nasce per sostituire il funzionario, attribuire a un modello linguistico la libertà di decidere o trasformare il procedimento amministrativo in una semplice conversazione con una macchina.",
      "Collega in modo verificabile atti, fonti, regole, ruoli, condizioni, stati, transizioni, eccezioni, controlli e responsabilità.",
      "In un sistema di governance procedurale, una determinazione modifica lo stato della posizione, un certificato conferma una qualificazione giuridica, una sentenza produce effetti concreti sul percorso e i pagamenti diventano evidenze della storia amministrativa.",
      "Le contraddizioni tra uffici devono emergere prima del provvedimento. Il controllo umano deve essere collocato nel punto esatto in cui è necessario."
    ]
  },
  {
    title: "Dalla black box alla glass box procedurale",
    paragraphs: [
      "Nei procedimenti amministrativi non basta sapere quale testo sia stato generato.",
      "Bisogna poter verificare quale fase fosse attiva, quali atti siano stati considerati, quale regola sia stata applicata, quale condizione sia stata verificata, quale eccezione sia emersa, chi abbia autorizzato il passaggio, chi abbia controllato e chi abbia assunto la decisione.",
      "Questa è la glass box procedurale.",
      "Non una macchina che pretende di essere infallibile, ma un sistema nel quale il percorso è osservabile, controllabile, ricostruibile e attribuibile."
    ]
  },
  {
    title: "L’etica è ciò che il sistema impedisce",
    paragraphs: [
      "Tutelare il patrimonio pubblico e proteggere gli assegnatari legittimi non sono obiettivi contrapposti. Richiedono la stessa cosa: un’amministrazione capace di distinguere correttamente le situazioni.",
      "L’etica dell’intelligenza artificiale non è una dichiarazione da inserire in un documento programmatico e non è un controllo aggiunto quando il danno si è già verificato.",
      "È la capacità del sistema di impedire che una contraddizione evidente diventi un provvedimento. È la capacità di fermare l’amministrazione prima che sia il cittadino a dover fermare l’amministrazione.",
      "Un sistema è etico quando rende difficile l’ingiustizia, visibile l’incoerenza, inevitabile il controllo e identificabile la responsabilità.",
      "Per questo l’etica non è un livello da aggiungere all’intelligenza artificiale.",
      "L’etica è l’architettura del procedimento.",
      "Ed è da qui che comincia CAELO."
    ]
  }
];

export default function ArticoloAmministrazione() {
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
            <Link to="/la-voce" className="inline-flex border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.18em]">← La Voce di CAELO</Link>
            <button type="button" onClick={shareOnLinkedIn} className="inline-flex items-center gap-2 border border-black bg-[#faf7ef] px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]" aria-label="Condividi questo articolo su LinkedIn"><Linkedin className="h-4 w-4" aria-hidden="true" />Condividi su LinkedIn</button>
          </div>

          <article className="mt-6 border border-black/70 bg-[#faf7ef] px-5 py-8 md:px-14 md:py-14">
            <header className="border-b border-black/50 pb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Etica dell’IA · Procedimenti pubblici</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-4xl font-semibold leading-[0.98] md:text-7xl">Quando l’amministrazione colpisce chi è nel giusto</h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">Dalle cartelle pazze delle case popolari all’etica dell’intelligenza artificiale nei procedimenti pubblici</p>
              <p className="mt-6 text-sm">Di Claudia Catania · 4 agosto 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              {intro.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]" : "mt-5"}>{paragraph}</p>)}
              {sections.map((section) => <section key={section.title} className="mt-12"><h2 className="border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5">{paragraph}</p>)}</section>)}
            </div>

            <footer className="mt-12 border-t border-black/50 pt-7">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div><p className="font-serif text-xl font-semibold">Claudia Catania</p><p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">Co-Founder & CEO di CAELO. Legal-Procedural Methodology Architect, esperta di governance pubblica, procedimenti amministrativi ed etica dell’intelligenza artificiale.</p></div>
                <button type="button" onClick={shareOnLinkedIn} className="inline-flex shrink-0 items-center justify-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-[#faf7ef]"><Linkedin className="h-4 w-4" aria-hidden="true" />Pubblica su LinkedIn</button>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </Layout>
  );
}
