import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

export default function ArticoloChiFirmaDeveVedere() {
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">Glass Box Procedurale · Responsabilità</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Chi firma deve poter vedere: dalla Black Box alla Glass Box Procedurale
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                La sicurezza di un dirigente nasce dalla possibilità di governare, verificare e ricostruire ogni passaggio che conduce alla decisione.
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 2 agosto 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]">La sicurezza di un dirigente non nasce dalla promessa che l’Intelligenza Artificiale non commetterà mai errori. Nasce dalla possibilità di governare, verificare e ricostruire ogni passaggio che conduce alla decisione.</p>
              <p className="mt-5">Alla fine di un procedimento non firma un modello linguistico.</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">Firma una persona.</p>
              <p className="mt-5">Un dirigente, un responsabile del procedimento, un funzionario o un professionista che dovrà rispondere non soltanto del risultato finale, ma anche del percorso attraverso il quale quel risultato è stato raggiunto.</p>
              <p className="mt-5">Dovrà poter spiegare quali fonti siano state utilizzate, quali regole siano state applicate, quali controlli siano stati effettuati, quali anomalie siano emerse e in quale momento sia intervenuto il giudizio umano.</p>
              <p className="mt-5">È in questo spazio che nasce una parte rilevante della resistenza delle organizzazioni verso l’Intelligenza Artificiale.</p>
              <p className="mt-5">Non necessariamente da una contrarietà all’innovazione.</p>
              <p className="mt-5">E neppure soltanto dalla paura delle allucinazioni.</p>
              <p className="mt-5">La resistenza nasce quando a una persona viene chiesto di assumersi la responsabilità di un percorso che non può realmente vedere.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Il pregiudizio che identifica tutta l’AI con gli LLM</h2>
              <p className="mt-5">Negli ultimi anni, il dibattito pubblico ha finito per identificare quasi completamente l’Intelligenza Artificiale con i modelli linguistici generativi.</p>
              <p className="mt-5">Il paradigma è ormai noto:</p>
              <p className="my-7 border-y border-black/30 py-5 text-center font-serif text-xl font-semibold leading-8">prompt → elaborazione probabilistica → risposta</p>
              <p className="mt-5">Fra l’input e l’output rimane una struttura complessa, difficilmente interpretabile dall’utilizzatore e non direttamente governabile attraverso le regole del procedimento.</p>
              <p className="mt-5">Questa esperienza ha generato un comprensibile pregiudizio di categoria: ogni soluzione basata sull’AI rischia di essere valutata come se fosse una variante dello stesso modello generativo, con gli stessi livelli di opacità, imprevedibilità e rischio.</p>
              <p className="mt-5">Ma l’Intelligenza Artificiale non coincide con un’unica architettura.</p>
              <p className="mt-5">Un modello linguistico, un sistema a regole, un motore deterministico, un sistema di classificazione e un’infrastruttura di governance procedurale non svolgono la stessa funzione e non producono gli stessi effetti organizzativi.</p>
              <p className="mt-5">Trattarli come se appartenessero alla stessa categoria significa perdere la distinzione più importante: quella tra una tecnologia che produce un contenuto e una tecnologia che governa le condizioni entro cui quel contenuto può essere utilizzato.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">La Black Box chiede fiducia nel risultato</h2>
              <p className="mt-5">Un modello generativo può produrre una risposta corretta, plausibile e utile.</p>
              <p className="mt-5">Può sintetizzare documenti, estrarre informazioni, proporre un testo o assistere un operatore.</p>
              <p className="mt-5">Ma nei procedimenti regolati la qualità formale della risposta non è sufficiente.</p>
              <p className="mt-5">Il dirigente deve poter sapere:</p>
              <p className="mt-5">quale fonte ufficiale sia stata considerata;</p>
              <p className="mt-5">quale disposizione sia stata applicata;</p>
              <p className="mt-5">quali requisiti siano stati verificati;</p>
              <p className="mt-5">quali condizioni abbiano consentito o impedito un passaggio;</p>
              <p className="mt-5">quale eccezione sia stata rilevata;</p>
              <p className="mt-5">chi fosse autorizzato a intervenire;</p>
              <p className="mt-5">dove sia terminato il supporto tecnologico e sia iniziata la decisione umana;</p>
              <p className="mt-5">quale evidenza sostenga la motivazione conclusiva.</p>
              <p className="mt-5">La letteratura scientifica ha evidenziato da tempo i limiti dell’impiego delle black box nei contesti ad alto impatto. Cynthia Rudin ha sostenuto che, quando sono in gioco decisioni rilevanti, spiegare successivamente un modello opaco non equivale a utilizzare un sistema interpretabile fin dall’origine: una spiegazione postuma può infatti non rappresentare fedelmente il meccanismo che ha prodotto il risultato.</p>
              <p className="mt-5">Questa distinzione è particolarmente importante nelle organizzazioni regolate.</p>
              <p className="mt-5">Una spiegazione plausibile non è necessariamente una prova.</p>
              <p className="mt-5">Una motivazione generata non coincide con una catena procedurale verificabile.</p>
              <p className="mt-5">E un testo formalmente corretto non dimostra che il procedimento sia stato seguito correttamente.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Dalla spiegazione del modello al governo del procedimento</h2>
              <p className="mt-5">La risposta non consiste soltanto nel chiedere all’AI di spiegarsi meglio.</p>
              <p className="mt-5">Occorre cambiare il livello sul quale viene costruita la trasparenza.</p>
              <p className="mt-5">La domanda non deve essere unicamente:</p>
              <p className="mt-5">Come è arrivato il modello a questa risposta?</p>
              <p className="mt-5">La domanda organizzativa più importante è:</p>
              <p className="mt-5">Come è arrivato il procedimento a questa decisione?</p>
              <p className="mt-5">Da questa distinzione nasce il concetto di Glass Box Procedurale.</p>
              <p className="mt-5">La letteratura utilizza già l’espressione glass box per indicare modelli interpretabili o sistemi circondati da limiti espliciti e verificabili. Alcuni studi hanno inoltre proposto una forma di governance by glass-box, nella quale regole e confini vengono resi trasparenti per controllare il comportamento di un sistema.</p>
              <p className="mt-5">La Glass Box Procedurale proposta da CAELO compie un ulteriore passaggio.</p>
              <p className="mt-5">Non si limita a rendere interpretabile il modello.</p>
              <p className="mt-5">Rende governabile il procedimento.</p>
              <p className="mt-5">La Glass Box Procedurale è un’infrastruttura di governance che rende visibili, verificabili e ricostruibili le fonti, le regole, i controlli, le eccezioni, gli interventi umani e le responsabilità attraverso cui un caso concreto conduce a una decisione.</p>
              <p className="mt-5">Il percorso diventa esplicito:</p>
              <p className="my-7 border-y border-black/30 py-5 text-center font-serif text-xl font-semibold leading-8">istanza → fonti ufficiali → regole applicabili → controlli → eccezioni → intervento umano → decisione motivata → conservazione delle evidenze</p>
              <p className="mt-5">Non viene registrato soltanto l’esito.</p>
              <p className="mt-5">Viene registrata la storia del caso.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Che cosa vede il dirigente</h2>
              <p className="mt-5">Nella Glass Box Procedurale il dirigente non riceve semplicemente una risposta generata.</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">Riceve un caso governato.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">Le fonti</h3>
              <p className="mt-5">Può verificare quali norme, regolamenti, documenti, dati o atti siano stati utilizzati e quale versione fosse applicabile nel momento in cui il caso è stato trattato.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">Le regole</h3>
              <p className="mt-5">Può vedere quale condizione abbia consentito, impedito, sospeso o trasferito un passaggio.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">I controlli</h3>
              <p className="mt-5">Può ricostruire quali verifiche siano state effettuate, con quale esito e sulla base di quali evidenze.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">Le eccezioni</h3>
              <p className="mt-5">Può identificare le condizioni anomale, le informazioni mancanti, le contraddizioni e i casi che richiedono un trattamento diverso dal percorso ordinario.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">Gli interventi umani</h3>
              <p className="mt-5">Può sapere chi sia intervenuto, in quale momento, con quale ruolo e attraverso quale autorizzazione.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">La motivazione</h3>
              <p className="mt-5">Può seguire la catena che collega i presupposti del caso alla decisione finale.</p>
              <h3 className="mt-7 font-serif text-2xl font-semibold">L’audit trail</h3>
              <p className="mt-5">Può ricostruire gli eventi in ordine temporale e distinguere ciò che è stato proposto dal sistema, ciò che è stato verificato e ciò che è stato deciso da una persona.</p>
              <p className="mt-5">Questa impostazione è coerente con i principali quadri di gestione del rischio. Il NIST distingue trasparenza, spiegabilità e interpretabilità e le collega alla responsabilità e alla gestione affidabile dei sistemi di AI.</p>
              <p className="mt-5">Anche il Regolamento europeo sull’Intelligenza Artificiale attribuisce un ruolo centrale, soprattutto per i sistemi ad alto rischio, alla documentazione, alla registrazione degli eventi, alla tracciabilità e alla supervisione umana.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">La supervisione umana deve essere effettiva</h2>
              <p className="mt-5">La presenza di un’approvazione finale non rende automaticamente umano un procedimento.</p>
              <p className="mt-5">Un dirigente collocato alla fine della catena, senza accesso alle fonti, alle verifiche e ai passaggi intermedi, non esercita un controllo effettivo.</p>
              <p className="mt-5">Rischia soltanto di ratificare un risultato prodotto altrove.</p>
              <p className="mt-5">La supervisione umana diventa reale quando la persona può:</p>
              <p className="mt-5">sospendere il percorso;</p>
              <p className="mt-5">respingere un passaggio;</p>
              <p className="mt-5">chiedere nuovi elementi;</p>
              <p className="mt-5">modificare o correggere un dato;</p>
              <p className="mt-5">motivare una deroga;</p>
              <p className="mt-5">trasferire il caso al ruolo competente;</p>
              <p className="mt-5">richiedere un approfondimento;</p>
              <p className="mt-5">registrare le ragioni del proprio intervento;</p>
              <p className="mt-5">impedire che un’anomalia si propaghi fino alla decisione finale.</p>
              <p className="mt-5">La sicurezza del dirigente non nasce quindi dall’essere posto alla fine del processo come firmatario.</p>
              <p className="mt-5">Nasce dall’essere collocato dentro la governance del processo.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">La sicurezza non significa assenza assoluta di errore</h2>
              <p className="mt-5">Nessuna tecnologia seria può promettere che non si verificheranno mai errori.</p>
              <p className="mt-5">Una simile promessa non sarebbe credibile.</p>
              <p className="mt-5">La vera sicurezza organizzativa consiste nella possibilità di:</p>
              <p className="mt-5">individuare il punto nel quale l’errore si è verificato;</p>
              <p className="mt-5">comprenderne l’origine;</p>
              <p className="mt-5">impedire che si propaghi;</p>
              <p className="mt-5">correggere il percorso;</p>
              <p className="mt-5">identificare i soggetti intervenuti;</p>
              <p className="mt-5">dimostrare quali controlli fossero attivi;</p>
              <p className="mt-5">ricostruire successivamente il trattamento del caso.</p>
              <p className="mt-5">La sicurezza, quindi, non è soltanto una proprietà statistica dell’output.</p>
              <p className="mt-5">È una proprietà architetturale del procedimento.</p>
              <p className="mt-5">Un sistema è più sicuro non soltanto quando produce risultati accurati, ma quando rende gli errori individuabili, circoscrivibili e correggibili.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Il ruolo di CAELO</h2>
              <p className="mt-5">CAELO nasce per operare precisamente in questo spazio.</p>
              <p className="mt-5">Non come un altro assistente conversazionale.</p>
              <p className="mt-5">Non come un generatore incaricato di sostituire il giudizio professionale.</p>
              <p className="mt-5">Non come una Black Box alla quale delegare il procedimento.</p>
              <p className="mt-5">CAELO interviene prima dell’automazione per ricostruire e governare il caso concreto attraverso:</p>
              <p className="mt-5">fonti ufficiali;</p>
              <p className="mt-5">ruoli e autorizzazioni;</p>
              <p className="mt-5">regole deterministiche;</p>
              <p className="mt-5">condizioni di ingresso e di uscita;</p>
              <p className="mt-5">vincoli;</p>
              <p className="mt-5">eccezioni;</p>
              <p className="mt-5">stati procedurali;</p>
              <p className="mt-5">controlli;</p>
              <p className="mt-5">punti decisionali umani;</p>
              <p className="mt-5">registrazione degli eventi;</p>
              <p className="mt-5">conservazione delle evidenze.</p>
              <p className="mt-5">Un LLM può eventualmente partecipare a un segmento circoscritto del lavoro: leggere, classificare, sintetizzare o proporre.</p>
              <p className="mt-5">Ma non determina autonomamente ciò che è ammissibile.</p>
              <p className="mt-5">Non stabilisce chi sia competente.</p>
              <p className="mt-5">Non decide quale passaggio sia autorizzato.</p>
              <p className="mt-5">Non attribuisce responsabilità.</p>
              <p className="mt-5">Non sostituisce il controllo umano.</p>
              <p className="mt-5">L’LLM produce un contenuto. CAELO governa le condizioni entro cui quel contenuto può entrare legittimamente nel procedimento.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Perché questo cambia il rapporto con il dirigente</h2>
              <p className="mt-5">La Black Box dice:</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">Fidati del risultato.</p>
              <p className="mt-5">La Glass Box Procedurale dice:</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">Non devi fidarti alla cieca. Puoi vedere il percorso, verificarlo e intervenire.</p>
              <p className="mt-5">È questa la differenza che consente a un dirigente di utilizzare l’Intelligenza Artificiale senza perdere il controllo della propria funzione.</p>
              <p className="mt-5">Il sistema non gli sottrae la responsabilità.</p>
              <p className="mt-5">Gli fornisce gli strumenti per esercitarla.</p>
              <p className="mt-5">Non nasconde il procedimento dietro una risposta apparentemente intelligente.</p>
              <p className="mt-5">Lo rende più visibile, ordinato, verificabile e ricostruibile.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Dal prodotto all’infrastruttura di fiducia</h2>
              <p className="mt-5">Per un partner tecnologico, integrare CAELO non significa aggiungere un’altra interfaccia generativa.</p>
              <p className="mt-5">Significa inserire uno strato di governo tra:</p>
              <p className="mt-5">la capacità dei modelli;</p>
              <p className="mt-5">i sistemi informativi dell’organizzazione;</p>
              <p className="mt-5">le regole del dominio;</p>
              <p className="mt-5">i ruoli operativi;</p>
              <p className="mt-5">la responsabilità delle persone.</p>
              <p className="mt-5">La Glass Box Procedurale diventa così un’infrastruttura di fiducia.</p>
              <p className="mt-5">Non perché chieda all’organizzazione di credere maggiormente nell’AI.</p>
              <p className="mt-5">Ma perché riduce la quantità di fiducia cieca necessaria per utilizzarla.</p>
              <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">Conclusione</h2>
              <p className="mt-5">La Pubblica Amministrazione e le organizzazioni regolate non hanno bisogno soltanto di risposte più rapide.</p>
              <p className="mt-5">Hanno bisogno di procedimenti che restino governabili anche quando al loro interno viene utilizzata l’Intelligenza Artificiale.</p>
              <p className="mt-5">Chi firma deve poter vedere.</p>
              <p className="mt-5">Chi controlla deve poter ricostruire.</p>
              <p className="mt-5">Chi interviene deve essere identificabile.</p>
              <p className="mt-5">Chi riceve una decisione deve poter conoscere il percorso che l’ha prodotta.</p>
              <p className="mt-5">Questa è la transizione dalla Black Box alla Glass Box Procedurale.</p>
              <p className="mt-5">Ed è il punto dal quale CAELO propone di ripensare la fiducia nell’Intelligenza Artificiale:</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">La Black Box chiede fiducia nel risultato. La Glass Box Procedurale consente di verificare il percorso.</p>
            </div>

            <footer className="mt-12 border-t border-black/50 pt-7">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-serif text-xl font-semibold">Claudia Catania</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
                    Co-Founder di CAELO. Governance procedurale, auditabilità, tracciabilità e controllo umano.
                  </p>
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
