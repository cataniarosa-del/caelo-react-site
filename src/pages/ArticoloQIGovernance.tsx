import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const sections = [
  {
    title: "Possiamo davvero attribuire un QI a un’intelligenza artificiale?",
    paragraphs: [
      "Oggi non esiste un QI ufficiale e universalmente accettato per i sistemi di intelligenza artificiale equivalente al QI umano. Esistono però diversi filoni di ricerca che cercano di misurare in modo più rigoroso le capacità cognitive dei modelli.",
      "Uno studio pubblicato nel 2025 su Computers in Human Behavior: Artificial Humans ha sottoposto diversi modelli a una batteria di test verbali, numerici e visuali ispirati ai tradizionali test di intelligenza. I risultati mostrano un profilo tutt’altro che uniforme: prestazioni elevate nel ragionamento basato sul linguaggio possono convivere con difficoltà significativamente maggiori in alcuni compiti numerici e visuospaziali.",
      "Il punto è importante. Attribuire a un modello una singola cifra, per esempio “QI 130”, può essere suggestivo, ma rischia di nascondere differenze molto profonde tra le capacità effettivamente misurate.",
      "Un sistema può essere straordinariamente efficace nella comprensione linguistica e molto meno affidabile nel ragionamento spaziale. Può risolvere un problema matematico complesso e fallire davanti a una trasformazione visiva apparentemente semplice. Può conoscere una quantità enorme di informazioni e, contemporaneamente, incontrare difficoltà quando deve affrontare una regola completamente nuova.",
      "Per questo il problema non è soltanto attribuire un numero all’IA. È capire che cosa stiamo realmente misurando quando diciamo che un sistema artificiale è intelligente.",
    ],
  },
  {
    title: "Dalla psicometria umana alla LLM Psychometrics",
    paragraphs: [
      "La ricerca sta iniziando ad applicare agli stessi sistemi artificiali strumenti propri della psicometria. Uno studio pubblicato nel 2025 sulla rivista Intelligence ha analizzato le prestazioni di 591 modelli su benchmark come HellaSwag, Winogrande e GSM8K, mostrando come metodologie psicometriche possano essere utilizzate per costruire test molto più compatti mantenendo elevati livelli di affidabilità statistica.",
      "Parallelamente, una review sistematica pubblicata nel 2025 parla esplicitamente di LLM Psychometrics: un campo emergente che utilizza concetti come validità, affidabilità, analisi degli item e comparabilità per valutare le capacità dei grandi modelli linguistici.",
      "Il passaggio è significativo. Non si tratta più semplicemente di far sostenere a un’IA un tradizionale test di QI progettato per esseri umani, ma di costruire strumenti adatti a misurare sistemi che funzionano in maniera profondamente diversa da un essere umano.",
    ],
  },
  {
    title: "Conoscere non significa necessariamente saper affrontare il nuovo",
    paragraphs: [
      "Esiste poi un’altra difficoltà. I grandi modelli sono stati addestrati su quantità enormi di informazioni. Quando rispondono correttamente a una domanda, può essere difficile distinguere quanto del risultato dipenda da una reale capacità di generalizzazione e quanto dal riconoscimento di strutture o conoscenze incontrate durante l’addestramento.",
      "Da questa esigenza nasce una famiglia diversa di benchmark.",
      "ARC-AGI, e successivamente ARC-AGI-2, cercano di valutare la capacità di affrontare problemi nuovi partendo da pochi esempi, individuando una trasformazione astratta e applicandola a una situazione non incontrata in precedenza. L’obiettivo è avvicinarsi maggiormente alla misurazione della cosiddetta general fluid intelligence: la capacità di adattarsi a problemi nuovi riducendo il più possibile il vantaggio derivante dalla conoscenza accumulata.",
      "La distinzione è fondamentale: sapere moltissimo non equivale necessariamente a saper affrontare correttamente qualcosa che non si è mai visto.",
      "Nel 2025 è stato proposto anche IQBench, un benchmark composto da 500 problemi visuali di tipo IQ, costruiti con particolare attenzione al rischio di contaminazione dei dati di addestramento. Anche in questo caso i risultati mostrano differenze molto marcate tra le diverse categorie di ragionamento, con difficoltà persistenti in alcuni compiti spaziali e tridimensionali.",
      "L’idea di un singolo “QI dell’IA” diventa quindi sempre meno convincente.",
    ],
  },
];

const sources = [
  "Abdelkarim et al., Evaluating the Intelligence of Large Language Models: A comparative study using verbal and visual IQ tests, Computers in Human Behavior: Artificial Humans, 2025.",
  "Pham et al., IQBench: How “Smart” Are Vision-Language Models? A Study with Human IQ Tests, 2025, preprint.",
  "Gignac & Ilić, Psychometrically derived 60-question benchmarks: Substantial efficiencies and the possibility of human-AI comparisons, Intelligence, 2025.",
  "Large Language Model Psychometrics: A Systematic Review of Evaluation, Validation, and Enhancement, 2025, preprint.",
  "Chollet et al., ARC-AGI-2: A New Challenge for Frontier AI Reasoning Systems, 2025.",
  "Humanity’s Last Exam, versione finale pubblicata su Nature, 2026.",
  "HLE-Verified: A Systematic Verification and Structured Revision of Humanity’s Last Exam, 2026, preprint.",
  "Cao, Driouich & Thomas, Beyond Task Completion: Revealing Corrupt Success in LLM Agents through Procedure-Aware Evaluation, 2026, preprint.",
];

export default function ArticoloQIGovernance() {
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
                AI Governance · Intelligenza artificiale
              </p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Quanto è intelligente l’IA? Dal quoziente intellettivo alla governance dell’azione
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                Dal QI e dai benchmark cognitivi al passaggio decisivo: quando l’IA comincia ad agire, la questione non è solo quanto sia intelligente, ma quanto il suo impiego sia governabile.
              </p>
              <p className="mt-5 text-sm">Di Claudia Catania · 7 agosto 2026</p>
            </header>

            <figure className="mt-10">
              <img
                src="/immaginecoertina.jpeg"
                alt="Dall’intelligenza all’azione: il problema della governance"
                className="w-full border border-black/20"
              />
            </figure>

            <div className="mx-auto mt-12 max-w-[820px] font-serif text-[18px] leading-8 text-black/90 md:text-[19px]">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8]">
                Per decenni abbiamo cercato di misurare l’intelligenza umana attraverso test standardizzati: ragionamento logico, comprensione verbale, capacità numerica, memoria, riconoscimento di schemi e abilità visuospaziali. Con l’arrivo dei grandi modelli di intelligenza artificiale, una domanda è diventata quasi inevitabile: <strong>qual è il QI di un’intelligenza artificiale?</strong>
              </p>

              <p className="mt-5">
                È una domanda affascinante, ma potrebbe essere già insufficiente. Mentre cerchiamo di capire quanto bene un sistema di IA sappia ragionare, la tecnologia sta attraversando un cambiamento più importante: dall’IA che produce una risposta all’IA che può accedere a informazioni, utilizzare strumenti, interagire con sistemi e partecipare ad attività reali.
              </p>

              <p className="mt-5">
                Quando l’intelligenza comincia ad agire, il problema cambia. Non basta più chiedersi quanto sia intelligente. Occorre chiedersi <strong>come quella capacità possa essere utilizzata, entro quali limiti e sotto il controllo di chi</strong>.
              </p>

              {sections.map((section) => (
                <section key={section.title} className="mt-12">
                  <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mt-5">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Come si misura oggi l’intelligenza di un’IA?
                </h2>
                <p className="mt-5">
                  Più correttamente si costruisce un <strong>profilo multidimensionale</strong>.
                </p>

                <figure className="my-9">
                  <img
                    src="/griglia.png"
                    alt="Profilo multidimensionale per misurare le capacità dell’intelligenza artificiale"
                    className="w-full border border-black/20"
                  />
                  <figcaption className="mt-3 text-center font-sans text-sm leading-5 text-black/60">
                    Oggi l’intelligenza dell’IA si misura più correttamente attraverso un profilo multidimensionale, non attraverso un unico numero.
                  </figcaption>
                </figure>

                <p className="mt-5">
                  Questa impostazione racconta molto meglio un sistema artificiale rispetto a un’unica cifra. Ma presenta ancora un limite: misura principalmente <strong>ciò che il sistema riesce a capire o risolvere</strong>.
                </p>
                <p className="mt-5">
                  Non ci dice necessariamente cosa accade quando quella capacità viene utilizzata dentro un processo reale.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Humanity’s Last Exam e il problema dei benchmark
                </h2>
                <p className="mt-5">
                  Un esempio significativo dell’evoluzione dei sistemi di valutazione è <strong>Humanity’s Last Exam</strong>. Il benchmark è nato anche dalla constatazione che molti test precedenti stavano progressivamente perdendo capacità discriminante: modelli avanzati raggiungevano ormai prestazioni superiori al 90% su benchmark come MMLU.
                </p>
                <p className="mt-5">
                  La versione finale pubblicata su <em>Nature</em> comprende circa <strong>2.500 domande</strong> provenienti da oltre cento discipline, molte delle quali richiedono conoscenze estremamente specialistiche.
                </p>
                <p className="mt-5">
                  Ma anche un benchmark estremamente difficile non misura tutto ciò che possiamo chiamare intelligenza. Misura soprattutto una combinazione di conoscenza specialistica e capacità di reasoning su problemi complessi.
                </p>
                <p className="mt-5">
                  La storia stessa di Humanity’s Last Exam mostra inoltre quanto sia difficile costruire uno strumento di misura perfetto. Nel 2026 è stato proposto <strong>HLE-Verified</strong>, un lavoro di revisione sistematica del benchmark originale. Gli autori hanno individuato item problematici e, dopo la revisione, le prestazioni medie di sette modelli sono aumentate nell’ordine di <strong>7–10 punti percentuali</strong>.
                </p>
                <p className="mt-5">
                  Il dato è metodologicamente importante: <strong>prima di attribuire a una macchina un certo livello di intelligenza, dobbiamo verificare anche la qualità dello strumento con cui l’abbiamo misurata</strong>.
                </p>
                <p className="mt-5">
                  Ma c’è un altro passaggio ancora più importante. Tutti questi test cercano soprattutto di capire che cosa un sistema sappia fare cognitivamente. La domanda cambia quando l’intelligenza smette di limitarsi a rispondere e comincia ad agire.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Dal cervello alle mani
                </h2>
                <p className="mt-5">
                  Possiamo descrivere questo cambiamento attraverso alcune categorie ormai entrate nel lessico dell’intelligenza artificiale.
                </p>
                <p className="mt-5">
                  Un <strong>Large Language Model</strong> può essere rappresentato, semplificando, come un cervello: comprende informazioni, elabora e genera un output.
                </p>
                <p className="mt-5">
                  Con il <strong>RAG — Retrieval-Augmented Generation</strong>, quel cervello acquisisce accesso a conoscenza esterna. Può recuperare documenti, database e altre fonti pertinenti prima di produrre una risposta.
                </p>
                <p className="mt-5">
                  Con gli <strong>AI Agent</strong> avviene un ulteriore passaggio. Il sistema non è più confinato alla generazione di un output: può ricevere un obiettivo, pianificare attività, utilizzare strumenti, eseguire azioni e osservare gli effetti di ciò che ha fatto. È il momento in cui, metaforicamente, <strong>il cervello acquisisce le mani</strong>.
                </p>
                <p className="mt-5">
                  Le “mani” non sono necessariamente fisiche. Nella maggior parte dei sistemi agentici sono strumenti digitali: applicazioni, servizi, API, database e altri sistemi attraverso i quali un ragionamento può trasformarsi in un’azione concreta.
                </p>
                <p className="mt-5">
                  In questo ecosistema si colloca anche il <strong>Model Context Protocol, MCP</strong>. MCP non rappresenta una forma ulteriore di intelligenza: è un protocollo che facilita il collegamento tra modelli o agenti e strumenti, dati e sistemi esterni. Se il modello è il cervello e gli strumenti sono le mani, MCP può essere immaginato come parte del <strong>sistema nervoso che consente loro di comunicare</strong>.
                </p>

                <figure className="my-9">
                  <img
                    src="/immaginedentroiltesto1.png"
                    alt="Capacità dell’intelligenza artificiale e governance dell’azione"
                    className="w-full border border-black/20"
                  />
                  <figcaption className="mt-3 text-center font-sans text-sm leading-5 text-black/60">
                    LLM, RAG, agenti e connessioni descrivono capacità diverse dell’IA. CAELO non è il loro risultato lineare: affronta un problema distinto, la governance del loro impiego nei procedimenti.
                  </figcaption>
                </figure>

                <p className="mt-5">
                  A questo punto emerge però una questione nuova. Un sistema può comprendere, accedere alla conoscenza, utilizzare strumenti e agire. Ma nessuna di queste capacità ci dice ancora se una determinata azione debba essere compiuta, se sia appropriata in quel contesto, se richieda una verifica umana o se ciò che è accaduto possa essere successivamente ricostruito.
                </p>
                <p className="mt-5">
                  Ed è qui che il problema smette di essere soltanto cognitivo.
                </p>
                <p className="mt-5">
                  Diventa un problema di <strong>governance dell’azione</strong>.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Un risultato corretto può nascondere un percorso sbagliato
                </h2>
                <p className="mt-5">
                  Nel marzo 2026 un lavoro pubblicato come preprint ha introdotto il concetto di <strong>Procedure-Aware Evaluation</strong>. La domanda posta dagli autori è particolarmente interessante: è sufficiente valutare se un agente abbia completato correttamente un’attività?
                </p>
                <p className="mt-5">La loro risposta è no.</p>
                <p className="mt-5">
                  Il framework valuta anche l’integrità procedurale del comportamento dell’agente e introduce il concetto di <strong>corrupt success</strong>: un risultato apparentemente corretto ottenuto attraverso violazioni delle procedure, delle policy, delle intenzioni o dei vincoli previsti.
                </p>
                <p className="mt-5">
                  Nelle sperimentazioni riportate dagli autori, una quota significativa dei successi riconosciuti dai benchmark tradizionali nascondeva violazioni di questo tipo.
                </p>
                <p className="mt-5">
                  Il punto concettuale è molto forte: <strong>raggiungere il risultato corretto non significa necessariamente aver seguito un percorso accettabile.</strong> Questa distinzione diventa particolarmente importante quando l’intelligenza artificiale entra in processi reali.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  L’intelligenza non è la governance
                </h2>
                <p className="mt-5">
                  Possiamo quindi separare due problemi.
                </p>
                <p className="mt-5">
                  <strong>L’intelligenza riguarda ciò che un sistema è capace di fare. La governance riguarda le condizioni nelle quali quella capacità può essere utilizzata in modo controllabile, verificabile e responsabile.</strong>
                </p>
                <p className="mt-5">
                  Un sistema può comprendere perfettamente un documento, individuare correlazioni, utilizzare strumenti e perfino raggiungere il risultato desiderato. Ma rimangono altre domande: era opportuno utilizzare quella capacità in quel contesto? Era necessario un intervento umano? Il comportamento del sistema può essere ricostruito? È possibile verificare ciò che è accaduto? Chi mantiene la responsabilità della decisione?
                </p>
                <p className="mt-5">
                  Sono domande che non riguardano più soltanto la potenza cognitiva.
                </p>
                <p className="mt-5">
                  Riguardano la <strong>governabilità dell’azione</strong>.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  È in questo spazio che si colloca CAELO
                </h2>
                <p className="mt-5">
                  CAELO non nasce dalla ricerca di un modello più intelligente. Non vuole sostituire i modelli linguistici, i sistemi di retrieval, gli agenti o gli strumenti attraverso i quali l’intelligenza artificiale interagisce con dati e applicazioni.
                </p>
                <p className="mt-5">
                  La domanda da cui nasce è diversa:
                </p>
                <p className="mt-5 font-semibold">
                  come rendere utilizzabile l’intelligenza artificiale all’interno di procedimenti nei quali governabilità, verificabilità, controllo umano e tracciabilità non possono essere opzionali?
                </p>
                <p className="mt-5">
                  Nel corso dello sviluppo di CAELO si è verificato anche un passaggio significativo. A un certo punto, lavorando sul sistema, il nostro architetto sintetizzò quel cambiamento con una frase molto semplice: <strong>“Abbiamo fatto un salto. Adesso CAELO ha un vero e proprio cervello cognitivo.”</strong> La frase descrive bene ciò che stava accadendo: alla capacità di governare il procedimento si affiancava una capacità più avanzata di comprendere e lavorare sul contenuto.
                </p>
                <p className="mt-5">
                  Internamente abbiamo iniziato a parlare di un “cervello cognitivo” per descrivere l’evoluzione delle capacità del sistema. È una metafora utile per raccontare il passaggio da una struttura prevalentemente procedurale a un sistema capace anche di elaborare e interpretare contenuti, senza che questo significhi attribuire autonomia decisionale al sistema.
                </p>
                <p className="mt-5">
                  Ma proprio questo sviluppo ha reso ancora più evidente il problema centrale.
                </p>
                <p className="mt-5">
                  <strong>Avere un cervello più capace non significa attribuirgli automaticamente maggiore autorità.</strong>
                </p>
                <p className="mt-5">
                  Un sistema può ragionare meglio, utilizzare più informazioni e interagire con più strumenti. Ma il valore di queste capacità, soprattutto nei contesti regolati, dipende dalla possibilità di utilizzarle senza perdere controllo, verificabilità e responsabilità.
                </p>
                <p className="mt-5">
                  È su questo confine che CAELO concentra il proprio lavoro.
                </p>
                <p className="mt-5">
                  Non sulla semplice crescita dell’autonomia.
                </p>
                <p className="mt-5">
                  Sulla <strong>governabilità del suo impiego</strong>.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Il controllo umano non è un pulsante di emergenza
                </h2>
                <p className="mt-5">
                  In questa prospettiva cambia anche il significato di controllo umano.
                </p>
                <p className="mt-5">
                  Il controllo umano non dovrebbe significare soltanto poter intervenire dopo che qualcosa è andato storto. Significa mantenere significativo il ruolo della persona nel processo.
                </p>
                <p className="mt-5">
                  Esistono situazioni nelle quali il comportamento corretto di un sistema non consiste nel scegliere autonomamente. Consiste nel riconoscere che la scelta richiede una valutazione umana.
                </p>
                <p className="mt-5">
                  Questo principio diventa particolarmente importante quando l’intelligenza artificiale opera in procedimenti amministrativi, finanziari, assicurativi, sanitari o societari, dove responsabilità e verificabilità non possono essere sostituite dalla semplice probabilità che una risposta sia corretta.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  Non frenare l’intelligenza. Renderla utilizzabile
                </h2>
                <p className="mt-5">
                  La governance viene talvolta interpretata come un limite imposto all’intelligenza artificiale. Potrebbe essere vero il contrario.
                </p>
                <p className="mt-5">
                  Più i sistemi diventano potenti, più diventa importante sapere dove e come quella potenza possa essere utilizzata.
                </p>
                <p className="mt-5">
                  Un’automobile non diventa affidabile soltanto perché possiede un motore più potente. La potenza acquista valore quando può essere controllata.
                </p>
                <p className="mt-5">
                  Lo stesso principio sta diventando sempre più importante per l’intelligenza artificiale.
                </p>
                <p className="mt-5">
                  I modelli continueranno a migliorare. I benchmark diventeranno più difficili. Le capacità di reasoning cresceranno. Gli agenti utilizzeranno strumenti sempre più sofisticati.
                </p>
                <p className="mt-5">
                  Ma proprio per questo la prossima frontiera potrebbe non essere soltanto costruire sistemi capaci di fare di più. Potrebbe essere costruire sistemi nei quali sia possibile stabilire <strong>quando quella capacità possa essere utilizzata, quando debba essere verificata e quando debba fermarsi</strong>.
                </p>
              </section>

              <section className="mt-12">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                  La prossima domanda
                </h2>
                <p className="mt-5">
                  Continueremo a chiederci quanto sia intelligente l’intelligenza artificiale. È una domanda scientificamente importante. Ma quando quella stessa intelligenza entra nei processi reali, dobbiamo aggiungerne un’altra:
                </p>
                <p className="mt-5 font-semibold">
                  possiamo governare ciò che farà con quella intelligenza?
                </p>
                <p className="mt-5">
                  È su questa seconda domanda che CAELO concentra il proprio lavoro.
                </p>
                <p className="mt-5">
                  Perché quando l’intelligenza smette di limitarsi a rispondere e comincia ad agire, la governance non è più un elemento accessorio.
                </p>
                <p className="mt-5">
                  <strong>Diventa una delle condizioni che rendono quella intelligenza realmente utilizzabile.</strong>
                </p>
              </section>

              <section className="mt-14 border-t border-black/40 pt-8">
                <h2 className="font-serif text-3xl font-semibold">Fonti</h2>
                <ul className="mt-5 space-y-3 font-sans text-sm leading-6 text-black/70">
                  {sources.map((source) => (
                    <li key={source}>• {source}</li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        </main>
      </div>
    </Layout>
  );
}
