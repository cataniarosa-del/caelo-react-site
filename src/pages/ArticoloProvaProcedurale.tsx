import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const sections = [
  {
    title: "Il limite della conformità documentale",
    paragraphs: [
      "Negli ultimi anni molte organizzazioni hanno iniziato a costruire inventari dei sistemi, policy interne, classificazioni del rischio, registri dei fornitori, valutazioni d’impatto e programmi di formazione. È un lavoro necessario. Ma non coincide ancora con la capacità di governare una decisione alla quale abbia partecipato l’intelligenza artificiale.",
      "Un documento descrive ciò che dovrebbe accadere. Una prova ricostruisce ciò che è realmente accaduto.",
      "La distinzione appare minima finché il sistema funziona come previsto. Diventa decisiva quando emerge un’anomalia, quando un cittadino contesta un esito, quando un’autorità chiede chiarimenti o quando l’organizzazione deve stabilire se un errore dipenda dal modello, dai dati, da una regola configurata in modo scorretto o da un intervento umano.",
      "In quel momento non basta mostrare una policy approvata sei mesi prima. Non basta neppure produrre la documentazione tecnica del modello. Occorre ricostruire una sequenza: quale mandato consentiva al sistema di intervenire, quale versione delle regole era applicabile, quali fonti sono state consultate, quali controlli sono stati eseguiti, quali eccezioni sono emerse, chi ha avuto il potere di sospendere o confermare il percorso e chi ha assunto la responsabilità dell’esito.",
      "È qui che la compliance tradizionale mostra il proprio limite. Può documentare il sistema senza riuscire a spiegare la decisione.",
    ],
  },
  {
    title: "Spiegare il modello non significa ricostruire il procedimento",
    paragraphs: [
      "Una parte importante del dibattito sull’AI si è concentrata sulla spiegabilità: comprendere perché un modello abbia prodotto un determinato output, quali variabili abbiano inciso maggiormente o quali passaggi abbiano condotto a una previsione.",
      "È una questione essenziale, ma non esaurisce il problema organizzativo.",
      "Una decisione non coincide con l’output del modello. Nasce dall’incontro tra quell’output e un insieme più ampio di regole, competenze, dati, controlli e responsabilità. Un sistema può suggerire che una domanda sia incompleta; un altro componente può verificare un requisito; un operatore può richiedere un’integrazione; una regola può imporre la sospensione dei termini; un responsabile può autorizzare un’eccezione. L’esito finale appartiene al procedimento, non a uno soltanto di questi elementi.",
      "Per questo la spiegabilità del modello e la verificabilità della decisione sono due capacità diverse. La prima osserva il comportamento della componente cognitiva. La seconda ricostruisce l’esercizio dell’autorità organizzativa.",
      "È possibile avere un modello relativamente trasparente dentro un procedimento opaco. Ed è possibile conoscere il risultato di ogni singolo passaggio senza comprendere chi fosse legittimato a compierlo, in base a quale regola e con quali possibilità di controllo.",
      "La vera black box, in molti casi, non è il modello. È l’organizzazione.",
    ],
  },
  {
    title: "Che cosa significa produrre prova procedurale",
    paragraphs: [
      "La prova procedurale non è una nuova etichetta contenuta nell’AI Act. È una conseguenza organizzativa delle esigenze di tracciabilità, documentazione, supervisione umana, gestione del rischio e responsabilità che il quadro europeo rende sempre più concrete.",
      "Può essere definita come l’insieme di evidenze autentiche e collegate che consente di dimostrare, anche a posteriori, come una decisione sia stata formata.",
      "La sua prima dimensione è il mandato: quale sistema, ruolo umano o componente organizzativa era autorizzato a eseguire una determinata azione, entro quali limiti e per quale finalità.",
      "La seconda è la regola: quale disposizione normativa, criterio interno o istruzione operativa era in vigore in quel momento e come è stata tradotta in un controllo eseguibile.",
      "La terza è l’evidenza: quali dati e documenti hanno alimentato il percorso, da quali fonti provenivano, quando sono stati acquisiti e quale grado di attendibilità è stato loro attribuito.",
      "La quarta è la traccia di esecuzione: quali passaggi sono stati effettivamente compiuti, in quale ordine, con quali risultati intermedi e attraverso quali versioni dei sistemi coinvolti.",
      "La quinta riguarda le eccezioni: che cosa ha deviato dal percorso ordinario, chi ha rilevato l’anomalia, se il procedimento è stato sospeso o sottoposto a escalation e in che modo è stato risolto il caso.",
      "L’ultima dimensione è la responsabilità: quale persona o funzione ha esercitato la supervisione, quali informazioni aveva a disposizione e quale atto ha confermato, corretto o respinto l’esito proposto dall’AI.",
      "Queste evidenze non possono vivere in archivi separati e ricongiungersi soltanto durante un audit. Devono formare una storia coerente della decisione: leggibile per chi deve rispondere, verificabile da chi deve controllare e sufficientemente strutturata da poter essere analizzata in modo sistematico.",
    ],
  },
  {
    title: "Una decisione corretta può essere ancora una decisione fragile",
    paragraphs: [
      "Immaginiamo una pubblica amministrazione che utilizzi l’AI per assistere l’istruttoria di una domanda di accesso a un beneficio. Il sistema controlla i documenti, confronta alcuni dati con fonti autorizzate, rileva un’incongruenza e propone di richiedere un’integrazione. Un funzionario esamina il caso e conferma la richiesta.",
      "L’esito potrebbe essere perfettamente corretto. Ma, se il cittadino lo contesta, l’amministrazione deve poter rispondere a domande più precise: quale dato ha generato l’incongruenza? La fonte era aggiornata? Quale requisito rendeva necessaria l’integrazione? Il sistema poteva soltanto segnalare l’anomalia o anche proporre l’azione successiva? Il funzionario ha visto l’intero fascicolo o soltanto una sintesi? Esisteva una circostanza eccezionale che avrebbe imposto un percorso diverso?",
      "Se queste risposte devono essere ricostruite manualmente, incrociando log tecnici, email, versioni di documenti e ricordi degli operatori, la decisione rimane fragile anche quando è sostanzialmente corretta. L’organizzazione possiede un risultato, ma non ancora la sua prova.",
      "La qualità di un sistema di governo emerge proprio in questa distanza. Non quando produce l’esito atteso, ma quando consente di verificare il percorso che lo ha reso possibile.",
    ],
  },
  {
    title: "Il procedimento come unità di conformità",
    paragraphs: [
      "L’AI Act organizza obblighi differenti per attori, sistemi e livelli di rischio. Nella realtà operativa, però, provider, deployer, modelli, basi dati, operatori e responsabili concorrono spesso allo stesso processo decisionale. Se ogni elemento viene governato separatamente, la conformità rischia di frammentarsi lungo gli stessi confini tecnologici e contrattuali che l’organizzazione ha creato.",
      "Il procedimento offre un’unità di osservazione più solida. Tiene insieme la componente cognitiva e il livello di governo; collega ciò che il sistema può fare a ciò che l’organizzazione gli consente di fare; rende visibili sia il percorso ordinario sia le deviazioni; assegna all’intervento umano un ruolo concreto, non simbolico.",
      "Questo non significa sostituire gli adempimenti previsti dalla normativa. Significa renderli operativi dentro la sequenza in cui il rischio si manifesta e la responsabilità viene esercitata.",
      "Anche il lavoro europeo sugli standard indica questa direzione. Le aree affidate alla standardizzazione comprendono, tra le altre, gestione del rischio, governance dei dati, registrazione delle attività, trasparenza, supervisione umana, sistemi di qualità e valutazione di conformità. Il problema non sarà soltanto disporre di ciascun elemento, ma far sì che essi descrivano la stessa realtà organizzativa.",
      "Se il registro racconta una storia, la policy un’altra e l’operatività quotidiana una terza, la conformità esiste soltanto sulla carta.",
    ],
  },
  {
    title: "Dalla preparazione all’infrastruttura",
    paragraphs: [
      "Per molte organizzazioni, i prossimi mesi saranno dedicati a classificazioni, gap analysis, contratti e adeguamenti tecnici. Ma il vantaggio più duraturo nascerà altrove: nella capacità di trasformare le evidenze di conformità in un’infrastruttura ordinaria di governo.",
      "Una simile infrastruttura non serve soltanto a rispondere alle autorità. Riduce il tempo necessario per individuare gli errori, permette di confrontare il comportamento di sistemi diversi, rende più sicuro il cambio di un fornitore, migliora la supervisione umana e consente di apprendere dalle eccezioni. Soprattutto, rende scalabile la responsabilità: ciò che oggi dipende dalla memoria di un singolo operatore diventa patrimonio verificabile dell’organizzazione.",
      "È questo il passaggio dalla compliance alla Procedural Governance. Non aggiungere un ulteriore livello burocratico sopra l’AI, ma progettare il percorso affinché ogni esercizio di autorità produca, insieme al risultato, anche le evidenze necessarie a comprenderlo e contestarlo.",
    ],
  },
  {
    title: "Dove entra CAELO",
    paragraphs: [
      "È a questo livello che CAELO colloca il proprio intervento: non al posto del modello e non al posto della decisione umana, ma tra la regola e la sua esecuzione, nel procedimento.",
      "Prima che l’intelligenza artificiale possa operare, CAELO struttura fonti, regole, ruoli, stati, condizioni, controlli, eccezioni ed evidenze. Il percorso non viene inventato di volta in volta da un modello generativo. È governato da passaggi espliciti: una transizione può avvenire soltanto se le condizioni previste sono soddisfatte, attraverso il ruolo autorizzato e dopo i controlli richiesti. Se emerge un’eccezione, il sistema non la risolve creando una regola plausibile; sospende il percorso, applica la deviazione già modellata oppure richiede un intervento umano.",
      "Questo confine consente di utilizzare capacità generative senza trasferire loro automaticamente autorità. Un modello può leggere un documento, estrarre informazioni, formulare una sintesi o proporre un’azione. Non può, per il solo fatto di averla proposta, modificare una regola, saltare un controllo o decidere chi sia competente. L’output cognitivo rimane un elemento del procedimento; è l’architettura deterministica a stabilire se, come e da chi possa essere utilizzato.",
      "Durante l’esecuzione, ogni avanzamento collega la regola applicata alle evidenze disponibili, alle verifiche effettuate, alle eventuali anomalie e agli interventi umani. La storia della decisione non deve così essere ricostruita a posteriori mettendo insieme log, email e memorie individuali: viene prodotta mentre il procedimento accade.",
      "CAELO non rende una decisione infallibile. Una fonte può essere incompleta, una regola può essere modellata male e una persona può esercitare in modo scorretto il proprio potere. Per questo le regole devono essere validate dall’organizzazione e la responsabilità resta umana e istituzionale. Ciò che CAELO rende possibile è un’altra cosa: vedere quale regola abbia operato, su quali evidenze, entro quale mandato e attraverso quali passaggi. In altre parole, rende l’errore individuabile, la deviazione contestabile e la responsabilità attribuibile.",
      "Non è una soluzione che aggiunge documenti alla compliance. È un’infrastruttura che associa a ogni decisione la propria storia procedurale.",
      "Le organizzazioni funzionano attraverso procedimenti, non attraverso prompt. Per questa ragione, la maturità dell’AI non può essere misurata soltanto dalla qualità delle risposte generate o dall’accuratezza di un modello. Deve essere misurata dalla capacità di trasformare quelle risposte in decisioni verificabili, tracciabili e responsabili.",
      "Il giorno dopo l’AI Act, la domanda non è più soltanto: siamo conformi?",
      "La domanda è: siamo in grado di provarlo, decisione per decisione?",
    ],
  },
];

export default function ArticoloProvaProcedurale() {
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">AI Governance · Procedural Governance</p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-5xl font-semibold leading-[0.98] md:text-7xl">
                Dal documento alla prova: il giorno dopo l’AI Act
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                La conformità non sarà più soltanto una raccolta di policy, registri e valutazioni. Le organizzazioni dovranno dimostrare come ogni decisione assistita dall’AI sia stata formata, controllata e assunta.
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 5 agosto 2026</p>
            </header>

            <div className="mx-auto mt-10 max-w-3xl font-serif text-[19px] leading-8">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8]">Il 2 agosto 2026 non è stato il giorno in cui l’Europa ha concluso il proprio lavoro sull’intelligenza artificiale. È stato il giorno in cui è diventato più difficile separare le dichiarazioni dalle pratiche.</p>
              <p className="mt-5">Da quella data sono divenuti applicabili nuovi obblighi di trasparenza per determinati sistemi e contenuti generati o manipolati dall’AI, mentre si è rafforzata la fase operativa di vigilanza e applicazione affidata alle autorità competenti secondo la ripartizione prevista dal quadro europeo. Il calendario, tuttavia, rimane articolato. Dopo l’entrata in vigore dell’AI Omnibus, le regole per i sistemi ad alto rischio compresi nell’Allegato III si applicheranno dal 2 dicembre 2027, mentre quelle relative ai sistemi incorporati nei prodotti regolati dall’Allegato I decorreranno dal 2 agosto 2028.</p>
              <p className="mt-5">Questa scansione potrebbe essere letta come una proroga. Sarebbe una lettura riduttiva. Il tempo aggiuntivo non cambia la direzione della trasformazione: alle organizzazioni non sarà chiesto soltanto di dichiarare di avere governato l’AI, ma di dimostrare come lo hanno fatto.</p>
              <p className="mt-6 font-serif text-2xl font-semibold italic leading-8">Il vero passaggio, quindi, non è dalla non conformità alla conformità. È dalla compliance documentale alla prova procedurale.</p>

              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mt-12 border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.title}-${index}`} className={paragraph.startsWith("La domanda è:") ? "mt-6 font-serif text-2xl font-semibold italic leading-8" : "mt-5"}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section className="mt-12 border-t border-black/50 pt-6">
                <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">Fonti essenziali</h2>
                <div className="mt-6 space-y-3 text-base leading-7">
                  <p>Commissione europea, <em>Commission starts enforcing AI Act rules and new transparency requirements on 2 August</em>, 31 luglio 2026.</p>
                  <p>Commissione europea, <em>Navigating the AI Act</em>, quadro applicativo e obblighi per i sistemi ad alto rischio.</p>
                  <p>Unione europea, <em>Regolamento (UE) 2026/1744 — Digital Omnibus on AI</em>, 8 luglio 2026.</p>
                  <p>Commissione europea, <em>Standardisation of the AI Act</em>, ultimo aggiornamento 3 agosto 2026.</p>
                </div>
              </section>

              <aside className="mt-10 border-y border-black/35 py-5 text-base italic leading-7 text-black/70">
                <strong>Nota editoriale:</strong> “prova procedurale” è una categoria interpretativa e organizzativa proposta nell’articolo; non è una definizione normativa contenuta nell’AI Act.
              </aside>
            </div>
          </article>
        </main>
      </div>
    </Layout>
  );
}
