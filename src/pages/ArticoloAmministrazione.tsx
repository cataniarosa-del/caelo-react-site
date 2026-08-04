import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const intro = [
  "Nel patrimonio abitativo di Roma esiste un problema reale.",
  "Esistono occupazioni abusive, morosità, alloggi sottratti per anni alle persone che ne avrebbero diritto e situazioni che devono essere accertate e ricondotte alla legalità.",
  "Un’amministrazione pubblica ha il dovere di tutelare il proprio patrimonio.",
  "Deve verificare le posizioni, recuperare le somme effettivamente dovute, contrastare gli abusi e restituire gli immobili pubblici alla loro funzione sociale.",
  "Ma esiste anche un’altra realtà.",
  "È quella dei cittadini fragili, degli anziani e delle famiglie con redditi bassi che, pur essendo nel giusto, vengono travolti da richieste di pagamento, ricostruzioni amministrative errate e provvedimenti tra loro contraddittori.",
  "Il problema, quindi, non è scegliere tra il contrasto agli abusi e la protezione delle persone.",
  "Il problema è costruire un’amministrazione capace di distinguere.",
  "Distinguere chi occupa abusivamente da chi possiede un titolo.",
  "Chi non paga da chi ha sempre pagato.",
  "Chi nasconde informazioni da chi le ha comunicate ripetutamente.",
  "Chi tenta di aggirare le regole da chi, invece, viene danneggiato proprio dall’incapacità dell’amministrazione di applicarle correttamente.",
  "Quando questa distinzione viene meno, l’azione amministrativa non ristabilisce la giustizia.",
  "Produce una nuova ingiustizia."
];

const sections = [
  {
    "title": "Le “cartelle pazze” delle case popolari di Roma",
    "paragraphs": [
      "Il Corriere della Sera ha raccontato il fenomeno delle cosiddette “cartelle pazze” inviate da Aequa Roma agli inquilini delle case popolari comunali.",
      "Secondo quanto riportato dal giornale, circa seimila persone ricevettero richieste di pagamento per conguagli di migliaia di euro, calcolati anche sulla base di un censimento reddituale risalente al 2015.",
      "Tra i casi descritti vi era quello di una donna invalida, titolare della Legge 104, alla quale furono richiesti complessivamente 3.885,29 euro, a fronte di un canone mensile di appena 47 euro. La somma non riguardava normali canoni rimasti insoluti, ma calcoli relativi a oneri accessori e conguagli accumulati nel tempo, alcuni dei quali risalenti anche a circa vent’anni prima. L’amministrazione, invece di definire e comunicare regolarmente i conguagli anno per anno, aveva lasciato che le partite si accumulassero, per poi presentare alla cittadina un’unica richiesta di migliaia di euro. Molte altre richieste superavano i cinquemila euro.",
      "Questo significa trasferire sul cittadino le conseguenze del ritardo amministrativo. Dopo vent’anni, verificare i conteggi, recuperare le ricevute, individuare eventuali errori e ricostruire i consumi diventa estremamente difficile, soprattutto per una persona anziana o fragile. Non è soltanto il cittadino a dover dimostrare di avere pagato: è l’amministrazione che deve spiegare perché quei conguagli non siano stati calcolati e richiesti nei tempi ordinari.",
      "La richiesta solleva anche un problema giuridico che non può essere ignorato. L’articolo 2948 del Codice civile stabilisce, in via generale, la prescrizione quinquennale per i corrispettivi delle locazioni e per le prestazioni che devono essere pagate periodicamente ad anno o in termini più brevi. Presentare conguagli e oneri accessori riferiti anche a circa vent’anni prima significa quindi pretendere somme che, almeno per le annualità più remote, potrebbero essere già prescritte, salvo che l’amministrazione dimostri l’esistenza di validi atti interruttivi o di altre circostanze giuridicamente rilevanti.",
      "L’amministrazione non può lasciare trascorrere decenni senza definire e comunicare i conguagli e trasferire infine sul cittadino tutte le conseguenze della propria inerzia. Il tempo non è un elemento neutro: dopo vent’anni diventa estremamente difficile recuperare ricevute, verificare consumi, contestare errori e ricostruire le singole annualità. Chiedere oggi ciò che avrebbe dovuto essere calcolato, documentato e comunicato anno per anno significa compromettere concretamente il diritto di difesa della persona.",
      "Non è soltanto cattiva amministrazione. È una gestione del credito che rischia di porsi in contrasto con le regole civilistiche sulla prescrizione e che pretende di far ricadere sul cittadino il costo di vent’anni di ritardo amministrativo.",
      "Dietro ogni cartella non c’è soltanto un numero.",
      "C’è una persona che deve capire da dove provenga quella somma.",
      "C’è qualcuno che deve recuperare ricevute, documenti e comunicazioni risalenti ad anni prima.",
      "C’è una famiglia che teme di non riuscire a pagare.",
      "C’è un anziano che può non avere gli strumenti per contestare una richiesta sbagliata.",
      "Il danno non nasce soltanto quando l’amministrazione ha definitivamente torto.",
      "Nasce già nel momento in cui il cittadino viene costretto a difendersi da un sistema che avrebbe dovuto proteggerlo."
    ]
  },
  {
    "title": "Quando l’opacità dei conteggi arriva in tribunale",
    "paragraphs": [
      "Il problema delle cosiddette “cartelle pazze” non è rimasto confinato alle proteste degli inquilini. È arrivato anche davanti al giudice.",
      "Con la sentenza n. 54105 del 23 novembre 2021, il Tribunale ordinario di Roma, Sezione VI civile, ha accolto il ricorso di un inquilino delle case popolari contro Roma Capitale, condannando l’amministrazione anche al pagamento delle spese di giudizio.",
      "Nel caso esaminato, gli importi richiesti tramite Aequa Roma non consentivano di ricostruire in modo chiaro la formazione del credito. Le somme erano indicate per annualità senza una distinzione sufficientemente verificabile tra canoni, oneri accessori e conguagli.",
      "Il cittadino, quindi, non era posto nelle condizioni di comprendere quali somme fossero effettivamente dovute, a quali annualità si riferissero, quali voci fossero già prescritte e quali calcoli avessero determinato l’importo finale.",
      "Il giudice ha riconosciuto la necessità di riesaminare la posizione debitoria, tenendo conto anche della prescrizione delle partite più risalenti.",
      "Questo precedente dimostra che il problema non è soltanto l’entità della somma richiesta. Il problema è l’impossibilità di verificare il percorso contabile e amministrativo attraverso il quale quella somma è stata costruita.",
      "Un’amministrazione non può presentare al cittadino un importo finale e pretendere che venga accettato come un dato incontestabile. Deve rendere visibili le annualità, le singole componenti, i criteri di calcolo, gli eventuali atti interruttivi della prescrizione e le evidenze che sostengono ogni voce.",
      "In altre parole, anche una richiesta di pagamento può funzionare come una Black Box.",
      "Il cittadino vede l’importo finale, ma non riesce a ricostruire ciò che è avvenuto all’interno.",
      "Ed è proprio qui che il caso delle cartelle pazze incontra il tema centrale di CAELO: non basta produrre un risultato amministrativo; occorre rendere verificabile il procedimento che lo ha generato.",
      "Quando il percorso non è ricostruibile, l’amministrazione chiede al cittadino di fidarsi del risultato. Ma in un procedimento pubblico la fiducia non può sostituire la tracciabilità."
    ]
  },
  {
    "title": "Il caso di una donna di 87 anni",
    "paragraphs": [
      "Sono venuta a conoscenza diretta di un caso che mostra quanto possano diventare gravi le conseguenze della cattiva gestione amministrativa.",
      "La vicenda riguarda una donna anziana, assegnataria di un alloggio di edilizia residenziale pubblica di Roma Capitale.",
      "Per circa venticinque anni ha pagato regolarmente tutti i canoni richiesti.",
      "Non ha mai saltato una rata.",
      "Non era una persona sconosciuta all’amministrazione.",
      "Il suo rapporto con l’alloggio era registrato, amministrato e alimentato da pagamenti che il Comune aveva regolarmente richiesto e incassato.",
      "Nel 2018 lo stesso Dipartimento Patrimonio e Politiche abitative di Roma Capitale aveva certificato che la donna era:",
      "“utente assegnataria regolare”.",
      "Il certificato richiamava espressamente la determinazione dirigenziale di assegnazione.",
      "Eppure, molti anni dopo, la stessa amministrazione ha costruito nei suoi confronti due percorsi incompatibili.",
      "Da una parte, ha dichiarato la sua decadenza dall’assegnazione dell’alloggio.",
      "Dall’altra, ha respinto una precedente istanza di assegnazione in regolarizzazione, trattandola come un’occupante senza titolo.",
      "La stessa donna.",
      "Lo stesso alloggio.",
      "La stessa amministrazione.",
      "Venticinque anni di canoni regolarmente pagati.",
      "Due qualificazioni giuridiche opposte."
    ]
  },
  {
    "title": "Assegnataria e abusiva nello stesso momento",
    "paragraphs": [
      "Per dichiarare una persona decaduta da un alloggio pubblico, bisogna necessariamente considerarla, fino a quel momento, assegnataria.",
      "La decadenza presuppone l’esistenza di un titolo dal quale si possa decadere.",
      "Nello stesso periodo, però, Roma Capitale ha trattato la donna come se quel titolo non fosse mai esistito e come se fosse un’occupante abusiva in attesa di regolarizzazione.",
      "Non si tratta di una sottigliezza formale.",
      "Una persona non può essere, rispetto allo stesso immobile e nello stesso rapporto amministrativo, contemporaneamente assegnataria regolare e occupante senza titolo.",
      "Le due condizioni sono logicamente incompatibili.",
      "Eppure la contraddizione è diventata un provvedimento amministrativo.",
      "Gli atti esistevano.",
      "I pagamenti esistevano.",
      "La determinazione di assegnazione esisteva.",
      "Il certificato del 2018 esisteva.",
      "La storia amministrativa della persona esisteva.",
      "Ciò che è mancato è stato un sistema capace di ricondurre tutte queste informazioni a un’unica realtà coerente."
    ]
  },
  {
    "title": "Una persona anziana costretta a rivolgersi ai giudici",
    "paragraphs": [
      "La donna ha dovuto ricorrere alla giustizia.",
      "Parliamo di una persona di 87 anni, affetta da numerose e gravi patologie, invalida e con capacità di deambulazione ridotta: condizioni personali espressamente rappresentate negli atti del giudizio.",
      "Una persona anziana ha dovuto cercare assistenza legale.",
      "Ha dovuto recuperare atti, ricevute e certificazioni.",
      "Ha dovuto ricostruire una vicenda amministrativa durata decenni.",
      "Ha dovuto sostenere il peso emotivo ed economico di un contenzioso per dimostrare a un’amministrazione ciò che la stessa amministrazione avrebbe potuto e dovuto sapere consultando i propri documenti.",
      "Il Tribunale amministrativo regionale del Lazio ha infine accolto il ricorso e annullato il provvedimento."
    ]
  },
  {
    "title": "Le parole del giudice",
    "paragraphs": [
      "La sentenza non parla genericamente di una piccola svista.",
      "Il TAR ha rilevato con:",
      "“palmare evidenza”",
      "la “perplessità dell’azione amministrativa”.",
      "Il giudice ha osservato che Roma Capitale aveva, da una parte, disposto la decadenza di una persona già espressamente riconosciuta come assegnataria regolare e, dall’altra, rigettato la sua richiesta di regolarizzazione considerandola occupante senza titolo.",
      "La sentenza afferma inoltre:",
      "“È mancata, in altri termini, una riconduzione a unità e coerenza dell’azione amministrativa”.",
      "Roma Capitale aveva contemporaneamente considerato la donna sia assegnataria sia occupante abusiva, nonostante si trattasse di circostanze logicamente incompatibili.",
      "Il giudice ha quindi ricordato all’amministrazione il dovere di clare loqui: parlare e decidere chiaramente, adottando esiti procedimentali coerenti tra loro e aderenti a un’unica realtà fattuale.",
      "Il ricorso è stato accolto.",
      "Il provvedimento è stato annullato.",
      "Ma per arrivare a questo risultato è stato necessario un giudice.",
      "Nel frattempo, per quasi due anni, una donna di 87 anni ha visto incrinarsi progressivamente la certezza della propria casa. Ogni comunicazione dell’amministrazione, ogni determina, ogni atto recapitato al suo domicilio non era un semplice documento burocratico: era un macigno.",
      "Prima la decadenza dall’assegnazione. Poi il rigetto della regolarizzazione. Poi la rappresentazione della stessa persona come occupante senza titolo, nonostante esistessero una determina di assegnazione, un certificato che la qualificava come assegnataria regolare e venticinque anni di canoni pagati.",
      "Ogni nuova busta significava paura. La paura di perdere la casa nella quale aveva costruito la propria vita. La paura che un altro atto potesse cancellare anni di pagamenti, documenti e riconoscimenti amministrativi. La paura di essere trattata come abusiva proprio dall’amministrazione che per decenni l’aveva riconosciuta come assegnataria.",
      "Per una persona anziana, la casa non è soltanto un bene patrimoniale. È sicurezza, memoria, continuità, protezione. Vederne messo in discussione il diritto attraverso atti incoerenti significa vivere nell’angoscia quotidiana, senza sapere quale comunicazione arriverà dopo e quali conseguenze potrà produrre.",
      "Il ricorso al giudice non è stato quindi soltanto un passaggio processuale. È stato l’unico modo per interrompere una sequenza di atti che, uno dopo l’altro, stavano facendo crollare la certezza più elementare: poter continuare a vivere nella propria casa.",
      "A tutto questo si è aggiunto il peso economico del contenzioso. Una persona che vive in un alloggio popolare, proprio per la propria condizione reddituale, normalmente non dispone delle risorse necessarie per sostenere due anni di spese legali.",
      "Eppure quella donna ha dovuto affrontarle. Ha dovuto sottrarre denaro alle esigenze quotidiane, rinunciare ad altro e compiere sacrifici enormi per pagare l’assistenza necessaria a difendere un diritto che l’amministrazione avrebbe dovuto riconoscere consultando i propri stessi atti.",
      "Non ha sostenuto quelle spese per ottenere un vantaggio o una concessione. Le ha sostenute per dimostrare di non essere abusiva, per difendere la propria casa e per costringere l’amministrazione a ricondurre a coerenza documenti e provvedimenti che essa stessa aveva prodotto.",
      "Questo è uno degli aspetti più ingiusti della vicenda: l’amministrazione genera la contraddizione, ma è la persona fragile a dover sostenere il costo economico della sua correzione.",
      "Il giudice ha annullato il provvedimento. Ma nessuna sentenza può restituire integralmente due anni vissuti nella paura, né cancellare i sacrifici economici affrontati per difendere la certezza della propria casa."
    ]
  },
  {
    "title": "Non chiamiamolo soltanto errore",
    "paragraphs": [
      "Definire tutto questo un semplice “errore amministrativo” rischia di ridurre la portata del problema.",
      "Un errore occasionale può accadere.",
      "Qui, però, gli atti prodotti dalla stessa amministrazione raccontavano due realtà incompatibili.",
      "Quando una persona segnala la contraddizione, fornisce documenti e continua a essere colpita da provvedimenti incoerenti, il problema non è più soltanto la singola svista.",
      "È un problema di organizzazione, istruttoria, responsabilità e governance.",
      "Le cause possono essere differenti.",
      "Negligenza.",
      "Superficialità.",
      "Carenza di istruttoria.",
      "Mancata comunicazione tra uffici.",
      "Frammentazione delle banche dati.",
      "Assenza di controlli.",
      "Eventuali responsabilità più gravi devono essere accertate esclusivamente nelle sedi competenti.",
      "Ma, qualunque sia la causa, il risultato non cambia: il costo della cattiva amministrazione viene trasferito sulla persona più debole.",
      "L’amministrazione conserva gli atti.",
      "L’amministrazione riscuote i canoni.",
      "L’amministrazione produce i provvedimenti.",
      "L’amministrazione genera la contraddizione.",
      "Ma è il cittadino che deve individuarla, dimostrarla e pagarne le conseguenze."
    ]
  },
  {
    "title": "Quando la casa diventa uno strumento di paura",
    "paragraphs": [
      "Un alloggio di edilizia residenziale pubblica non è un bene qualsiasi.",
      "Per una persona anziana può rappresentare l’unico presidio di sicurezza rimasto.",
      "È il luogo nel quale ha costruito la propria vita.",
      "È spesso l’unica abitazione che può permettersi.",
      "Ricevere un provvedimento che mette in discussione il diritto a quella casa significa vivere nella paura.",
      "Significa non sapere se arriverà un’altra comunicazione.",
      "Significa temere uno sfratto.",
      "Significa sentirsi trattati come abusivi dopo aver pagato regolarmente per venticinque anni ed essere stati riconosciuti dalla stessa amministrazione come assegnatari.",
      "Significa dover dimostrare continuamente di essere nel giusto davanti a un apparato che possiede già tutti gli elementi necessari per saperlo.",
      "Questa non è soltanto inefficienza.",
      "È un’ingiustizia amministrativa che colpisce una persona nella sua condizione di maggiore vulnerabilità."
    ]
  },
  {
    "title": "È qui che comincia l’etica dell’intelligenza artificiale",
    "paragraphs": [
      "Quando si parla di etica dell’intelligenza artificiale nella pubblica amministrazione, il dibattito si concentra spesso su grandi principi:",
      "trasparenza;",
      "equità;",
      "non discriminazione;",
      "protezione dei dati;",
      "supervisione umana;",
      "responsabilità.",
      "Sono tutti principi indispensabili.",
      "Ma l’etica comincia ancora prima.",
      "Comincia dalla capacità del sistema di conoscere e ricostruire correttamente la realtà amministrativa sulla quale sta intervenendo.",
      "Un sistema equo avrebbe dovuto rilevare che:",
      "• esisteva una determinazione di assegnazione del 2001;",
      "• esisteva un certificato del 2018 che qualificava la donna come assegnataria regolare;",
      "• la cittadina aveva pagato regolarmente i canoni per circa venticinque anni, senza saltare una rata;",
      "• l’amministrazione aveva richiesto, riscosso e contabilizzato quei pagamenti;",
      "• era stata successivamente disposta una decadenza dall’assegnazione;",
      "• contemporaneamente la stessa persona veniva trattata come occupante senza titolo;",
      "• le due qualificazioni erano logicamente e giuridicamente incompatibili;",
      "• prima dell’adozione di qualsiasi nuovo provvedimento era indispensabile un controllo umano qualificato.",
      "Venticinque anni di canoni regolarmente richiesti, pagati e incassati non possono scomparire nel momento in cui un ufficio deve ricostruire la posizione di una cittadina.",
      "I pagamenti non sono movimenti contabili isolati.",
      "Fanno parte della storia amministrativa del rapporto.",
      "Costituiscono evidenze che devono essere collegate agli atti, alla posizione giuridica, alle decisioni precedenti e allo stato corrente del procedimento.",
      "Un sistema realmente governato avrebbe dovuto fermarsi e segnalare:",
      "Attenzione. L’amministrazione ha riconosciuto per decenni questo rapporto, ha riscosso regolarmente i canoni e ha certificato la cittadina come assegnataria. Non può ora trattarla come occupante abusiva senza ricostruire e risolvere la contraddizione.",
      "Non serviva un modello capace di scrivere una lettera più elegante.",
      "Serviva un sistema capace di impedire che quella lettera venisse prodotta."
    ]
  },
  {
    "title": "L’intelligenza artificiale può anche amplificare l’ingiustizia",
    "paragraphs": [
      "Inserire un modello linguistico all’interno di un procedimento disorganizzato non risolve automaticamente il problema.",
      "Può persino aggravarlo.",
      "Un modello generativo potrebbe scrivere più rapidamente il provvedimento sbagliato.",
      "Potrebbe formulare in modo impeccabile una motivazione costruita su presupposti contraddittori.",
      "Potrebbe inviare migliaia di comunicazioni in poche ore.",
      "Potrebbe trasformare una disfunzione amministrativa locale in un errore sistematico su larga scala.",
      "L’efficienza, da sola, non è etica.",
      "Automatizzare un procedimento incoerente significa soltanto produrre più velocemente le conseguenze di quella incoerenza.",
      "Prima di automatizzare una decisione bisogna governare il procedimento che conduce a quella decisione.",
      "Bisogna stabilire:",
      "quali dati sono rilevanti;",
      "quali atti producono effetti;",
      "quale stato del procedimento è attivo;",
      "quali condizioni consentono di avanzare;",
      "quali contraddizioni devono bloccare il percorso;",
      "chi è competente;",
      "chi deve controllare;",
      "chi assume la responsabilità finale."
    ]
  },
  {
    "title": "L’etica non può dipendere dalla buona volontà",
    "paragraphs": [
      "Non possiamo affidare la tutela del cittadino esclusivamente all’attenzione del singolo funzionario.",
      "Le persone possono sbagliare.",
      "Gli uffici possono non comunicare.",
      "I documenti possono essere archiviati in sistemi diversi.",
      "Un operatore può non conoscere un atto adottato anni prima da un’altra struttura.",
      "Ma proprio per questo occorre costruire un’architettura che renda visibili le informazioni rilevanti e obbligatori i controlli necessari.",
      "L’etica non può essere soltanto una qualità personale.",
      "Deve diventare una proprietà del sistema.",
      "Un sistema etico non promette che nessuno commetterà mai un errore.",
      "Fa qualcosa di più concreto:",
      "intercetta l’incoerenza;",
      "impedisce l’avanzamento;",
      "richiede una verifica;",
      "identifica il responsabile;",
      "conserva le evidenze;",
      "rende ricostruibile ogni passaggio."
    ]
  },
  {
    "title": "È da questa esigenza che nasce CAELO",
    "paragraphs": [
      "CAELO nasce dalla consapevolezza che, nei procedimenti regolati, non basta utilizzare un modello intelligente.",
      "Occorre governare il percorso nel quale le informazioni vengono acquisite, le condizioni vengono verificate e le decisioni vengono assunte.",
      "CAELO non nasce per sostituire il funzionario.",
      "Non nasce per attribuire a un modello linguistico la libertà di decidere.",
      "Non nasce per trasformare un procedimento amministrativo in una semplice conversazione con una macchina.",
      "Nasce per collegare in modo verificabile:",
      "atti;",
      "fonti;",
      "regole;",
      "ruoli;",
      "condizioni;",
      "stati;",
      "transizioni;",
      "eccezioni;",
      "controlli;",
      "responsabilità.",
      "In un sistema di governance procedurale, ogni atto produce conseguenze sul percorso.",
      "Una determinazione di assegnazione modifica lo stato della posizione.",
      "Un certificato conferma una qualificazione giuridica.",
      "Una decadenza non può essere adottata senza verificare il titolo dal quale si dichiara la persona decaduta.",
      "Una sentenza non viene semplicemente caricata in una cartella digitale.",
      "Deve modificare lo stato del procedimento, chiudere alcune possibilità, aprirne altre e impedire azioni incompatibili con quanto deciso dal giudice.",
      "I pagamenti non restano separati dal fascicolo.",
      "Diventano evidenze della storia del rapporto.",
      "Le contraddizioni tra uffici non vengono scoperte casualmente dal cittadino.",
      "Emergono prima dell’adozione del provvedimento.",
      "Il controllo umano non viene aggiunto formalmente alla fine.",
      "Viene collocato esattamente nel punto in cui è necessario."
    ]
  },
  {
    "title": "Una glass box procedurale",
    "paragraphs": [
      "Oggi molte organizzazioni introducono l’intelligenza artificiale attraverso modelli generativi che restano, almeno in parte, delle black box.",
      "Producono un risultato, ma non sempre rendono comprensibile e governabile l’intero percorso che lo ha determinato.",
      "Nei procedimenti amministrativi questo non è sufficiente.",
      "Non basta sapere quale testo è stato generato.",
      "Bisogna sapere:",
      "quale fase era attiva;",
      "quali atti sono stati considerati;",
      "quale regola è stata applicata;",
      "quale condizione è stata verificata;",
      "quale eccezione è stata attivata;",
      "chi ha autorizzato il passaggio;",
      "chi ha controllato;",
      "chi ha assunto la decisione.",
      "È questa la glass box procedurale.",
      "Non una macchina che pretende di essere infallibile.",
      "Un sistema nel quale il percorso è osservabile, controllabile, ricostruibile e attribuibile."
    ]
  },
  {
    "title": "Tutelare il patrimonio significa tutelare anche chi ha diritto",
    "paragraphs": [
      "Roma Capitale deve contrastare gli abusi nel proprio patrimonio immobiliare.",
      "Ma ha lo stesso dovere di proteggere gli assegnatari legittimi.",
      "Le due finalità non sono contrapposte.",
      "Richiedono entrambe un’amministrazione capace di conoscere con precisione chi ha titolo e chi non lo ha.",
      "Un sistema disordinato finisce per favorire anche i veri abusi.",
      "Disperde risorse.",
      "Moltiplica il contenzioso.",
      "Impegna gli uffici nella difesa di provvedimenti incoerenti.",
      "Rallenta gli interventi sulle situazioni realmente illegittime.",
      "E, nello stesso tempo, colpisce le persone più fragili, perché sono proprio loro ad avere meno strumenti economici, culturali e fisici per opporsi.",
      "L’etica amministrativa consiste anche nel non costringere una donna di 87 anni ad arrivare davanti a un giudice per ottenere il riconoscimento di un principio elementare:",
      "non può essere contemporaneamente assegnataria regolare e occupante abusiva dello stesso alloggio."
    ]
  },
  {
    "title": "L’etica è ciò che il sistema impedisce",
    "paragraphs": [
      "L’etica dell’intelligenza artificiale non è una dichiarazione da inserire in un documento programmatico.",
      "Non è un comitato che interviene quando il danno si è già verificato.",
      "Non è una formula aggiunta alla fine di un progetto tecnologico.",
      "L’etica è la capacità del sistema di distinguere.",
      "È la capacità di non trasformare la fragilità in una colpa.",
      "È la capacità di impedire che una contraddizione evidente diventi un provvedimento.",
      "È la capacità di fermare l’amministrazione prima che sia il cittadino a dover fermare l’amministrazione.",
      "Un sistema è etico quando rende difficile l’ingiustizia.",
      "Quando rende visibile l’incoerenza.",
      "Quando rende inevitabile il controllo.",
      "Quando rende identificabile la responsabilità.",
      "Quando protegge la persona prima che sia costretta a rivolgersi a un giudice.",
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
              aria-label="Condividi questo articolo su LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Condividi su LinkedIn
            </button>
          </div>

          <article className="mt-6 border border-black/70 bg-[#faf7ef] px-5 py-8 md:px-14 md:py-14">
            <header className="border-b border-black/50 pb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                Etica dell’IA · Procedimenti pubblici
              </p>
              <h1 className="mx-auto mt-5 max-w-5xl font-serif text-4xl font-semibold leading-[0.98] md:text-7xl">
                Quando l’amministrazione colpisce chi è nel giusto
              </h1>
              <p className="mx-auto mt-6 max-w-4xl font-serif text-2xl italic leading-snug text-black/70">
                Dalle “cartelle pazze” delle case popolari all’etica dell’intelligenza artificiale nei procedimenti pubblici
              </p>
              <p className="mt-6 text-sm">Di Claudia Catania · 4 agosto 2026</p>
            </header>

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

              {sections.map((section) => (
                <section key={section.title} className="mt-12">
                  <h2 className="border-t border-black/50 pt-6 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-5">
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
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/70">
                    Esperta di governance pubblica, procedimenti amministrativi ed etica
                    dell’intelligenza artificiale. Fondatrice di CAELO.
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
