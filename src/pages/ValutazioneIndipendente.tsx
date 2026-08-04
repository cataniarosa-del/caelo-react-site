import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

type Score = { dimension: string; score: string; reason: string };
type Category = {
  name: string;
  rows: Array<[string, string, string]>;
  assessment: string[];
};

const copy = {
  it: {
    back: "Torna alla home",
    badge: "Analisi del posizionamento tecnologico",
    title: "CAELO nel panorama delle architetture AI per contesti regolamentati",
    intro: "Una mappatura interna delle principali categorie tecnologiche adiacenti a CAELO, costruita per chiarire differenze di funzione, livello architetturale e modello di governance.",
    noteTitle: "Nota metodologica",
    noteText: "Questa pagina presenta un’analisi interna di posizionamento basata sulle caratteristiche funzionali generalmente associate alle principali categorie di piattaforme AI enterprise. Non costituisce una certificazione indipendente, una graduatoria di mercato né un confronto esaustivo tra singoli prodotti. Le funzionalità delle soluzioni presenti sul mercato possono variare nel tempo e in base alla configurazione adottata.",
    market: "Posizionamento",
    distinctive: "Un posizionamento distintivo",
    distinctiveText: "CAELO non nasce come modello linguistico, copilota general purpose o strumento di automazione isolato. È progettato come architettura di governance procedurale per governare fonti, regole, ruoli, stati, controlli, eccezioni, evidenze e interventi umani nei procedimenti regolamentati.",
    scoreTitle: "Profilo architetturale",
    scoreText: "Una lettura interna delle principali dimensioni progettuali di CAELO.",
    benchmark: "Mappatura per categorie",
    differences: "Categorie adiacenti e differenze funzionali",
    differencesText: "Le categorie riportate non sono presentate come concorrenti diretti. Il confronto riguarda esclusivamente il diverso ruolo architetturale e operativo.",
    comparison: "CATEGORIA",
    dimension: "Dimensione",
    categoryPlatform: "Caratteristiche tipiche della categoria",
    caelo: "Posizionamento CAELO",
    assessment: "Lettura di posizionamento",
    positioning: "Sintesi",
    equivalent: "Dove si colloca CAELO?",
    equivalentText: "CAELO occupa uno spazio specifico: il governo procedurale end-to-end nei contesti in cui decisioni, fonti, responsabilità, controlli ed eccezioni devono essere ricostruibili e sottoposti a supervisione umana.",
    categoryLabel: "Categoria proposta",
    more: "CAELO è più di una singola funzione",
    moreItems: ["Più di un copilota", "Più di uno strumento di compliance", "Più di un motore di workflow", "Più di una knowledge base", "Più di un sistema di automazione"],
    users: "Potenziali utilizzatori",
    profile: "Profilo",
    motivation: "Esigenza governata",
    sectors: "Ambiti di applicazione",
    sectorsText: "Il Mother Engine consente l’espansione controllata verso verticali specialistici, mantenendo comuni i principi di tracciabilità, auditabilità e supervisione umana.",
    closingTitle: "Un motore universale. Molteplici verticali specialistici.",
    closingText: "Il Mother Engine governa l’architettura comune. Il Command Center rende operative le capacità dei verticali. Ogni dominio incorpora le proprie fonti, regole, responsabilità, controlli ed eccezioni.",
    scores: [
      { dimension: "Governance procedurale", score: "9,5", reason: "Regole, ruoli, stati, controlli, eccezioni e responsabilità sono incorporati nella struttura del procedimento." },
      { dimension: "Auditabilità", score: "9,0", reason: "Le attività, le fonti e gli interventi umani sono organizzati per consentire la ricostruzione del percorso seguito." },
      { dimension: "Supervisione umana", score: "9,0", reason: "I punti di intervento e approvazione umana sono identificati nell’architettura procedurale." },
      { dimension: "Tracciabilità delle fonti", score: "9,0", reason: "Le informazioni utilizzate dal sistema sono collegate alla relativa provenienza documentale." },
      { dimension: "Modularità", score: "8,0", reason: "L’architettura comune può sostenere verticali distinti senza perdere i principi generali di governo." },
      { dimension: "Interoperabilità", score: "7,5", reason: "Il modello è progettato per integrarsi con sistemi, documenti e infrastrutture già esistenti." }
    ],
    categories: [
      {
        name: "Piattaforme di orchestrazione AI enterprise",
        rows: [
          ["Obiettivo principale", "Coordinare modelli, agenti, strumenti e integrazioni", "Governare l’intero procedimento, comprese regole, eccezioni e responsabilità"],
          ["Unità di lavoro", "Task, prompt, agenti e workflow", "Procedimento regolamentato e suoi stati"],
          ["Supervisione", "Configurabile in base al progetto", "Definita nei punti critici dell’architettura procedurale"],
          ["Tracciabilità", "Log tecnici e operativi", "Ricostruzione procedurale, fonti, evidenze e interventi umani"]
        ],
        assessment: ["CAELO può utilizzare capacità di orchestrazione, ma opera a un livello superiore di governo del procedimento."]
      },
      {
        name: "Piattaforme di AI governance e model risk",
        rows: [
          ["Obiettivo principale", "Controllare rischio, conformità e prestazioni dei modelli", "Governare l’esecuzione concreta del procedimento"],
          ["Oggetto della governance", "Modelli, dataset, metriche e policy", "Fonti, regole, ruoli, stati, decisioni ed eccezioni"],
          ["Conformità", "Controlli applicati al portafoglio AI", "Conformità incorporata nel flusso procedurale"],
          ["Evidenze", "Report e registri di controllo", "Catena procedurale delle evidenze"]
        ],
        assessment: ["Le due categorie sono complementari: la model governance controlla il modello; CAELO governa il procedimento in cui il modello viene utilizzato."]
      },
      {
        name: "Piattaforme AI integrate nei gestionali enterprise",
        rows: [
          ["Obiettivo principale", "Aggiungere capacità AI ai processi del gestionale", "Governare procedure indipendentemente dal gestionale sottostante"],
          ["Perimetro", "Processi già presenti nell’ecosistema applicativo", "Domini procedurali costruiti su fonti e regole proprie"],
          ["Portabilità", "Legata allo stack tecnologico di riferimento", "Progettata per integrazioni eterogenee"],
          ["Specializzazione", "Funzioni applicative e automazioni di processo", "Verticali procedurali ad alta intensità normativa"]
        ],
        assessment: ["CAELO non sostituisce i gestionali: può costituire il livello di governo procedurale sopra sistemi già operativi."]
      },
      {
        name: "Piattaforme di workflow e service management",
        rows: [
          ["Obiettivo principale", "Gestire ticket, richieste, servizi e workflow operativi", "Governare procedimenti con fonti, condizioni, responsabilità ed eccezioni"],
          ["Modello", "Flussi configurabili e automazioni", "Architettura procedurale formalizzata"],
          ["Audit trail", "Storico delle operazioni di piattaforma", "Ricostruzione del percorso procedurale e delle evidenze"],
          ["Espansione", "Moduli, plugin e connettori", "Verticali di dominio governati secondo criteri comuni"]
        ],
        assessment: ["CAELO si concentra sulla correttezza e ricostruibilità del procedimento, non solo sulla gestione del flusso operativo."]
      },
      {
        name: "Provider di modelli linguistici e API AI",
        rows: [
          ["Obiettivo principale", "Fornire capacità linguistiche e di elaborazione", "Stabilire quando e come tali capacità possono essere utilizzate"],
          ["Intelligenza", "General purpose", "Procedurale e specializzata per dominio"],
          ["Controllo", "Configurazione del modello e log API", "Regole, ruoli, fonti, controlli e supervisione del procedimento"],
          ["Rapporto con CAELO", "Componente tecnologica utilizzabile", "Livello di governo e orchestrazione procedurale"]
        ],
        assessment: ["I modelli linguistici sono componenti potenziali dell’architettura, non prodotti equivalenti a CAELO."]
      },
      {
        name: "Piattaforme di enterprise knowledge",
        rows: [
          ["Obiettivo principale", "Ricercare e recuperare conoscenza distribuita", "Governare la conoscenza impiegata nel procedimento"],
          ["Fonti", "Accesso basato su permessi e indicizzazione", "Classificazione, provenienza, verifica e utilizzo procedurale"],
          ["Output", "Risposte, risultati e documenti recuperati", "Evidenze collegate alle fasi del procedimento"],
          ["Auditabilità", "Logging delle ricerche e degli accessi", "Tracciabilità del ciclo di utilizzo della conoscenza"]
        ],
        assessment: ["CAELO non si limita a recuperare informazioni: ne governa l’uso nel procedimento."]
      },
      {
        name: "Piattaforme di Legal AI specialistiche",
        rows: [
          ["Obiettivo principale", "Ricerca, redazione, revisione e due diligence", "Governance procedurale applicabile anche al dominio giuridico"],
          ["Supervisione", "Revisione del professionista", "Interventi umani collocati e registrati nei punti critici"],
          ["Perimetro", "Attività legali specialistiche", "Molteplici domini regolamentati"],
          ["Tracciabilità", "Fonti e log del lavoro svolto", "Percorso procedurale, evidenze, regole e responsabilità"]
        ],
        assessment: ["CAELO può sostenere verticali giuridici, ma non è concepito come semplice assistente alla redazione legale."]
      },
      {
        name: "Piattaforme RPA e automazione dei processi",
        rows: [
          ["Obiettivo principale", "Automatizzare attività ripetitive", "Governare procedure complesse e ad alta intensità di conoscenza"],
          ["Punto di forza", "Esecuzione rapida di attività strutturate", "Gestione di fonti, ambiguità, eccezioni e decisioni umane"],
          ["Governance", "Orchestratore, ruoli e controlli di accesso", "Governance multilivello sostenuta da evidenze"],
          ["Rapporto con CAELO", "Esecutore di attività automatizzabili", "Livello che determina condizioni, controlli e responsabilità"]
        ],
        assessment: ["L’automazione può operare sotto il governo procedurale di CAELO."]
      },
      {
        name: "Piattaforme di process mining e process intelligence",
        rows: [
          ["Obiettivo principale", "Scoprire, misurare e ottimizzare processi esistenti", "Governare l’esecuzione del procedimento"],
          ["Prospettiva", "Analitica e prescrittiva", "Operativa, procedurale ed evidenziale"],
          ["Dati", "Event log e indicatori di processo", "Fonti, stati, controlli, eccezioni e interventi umani"],
          ["Complementarità", "Individua inefficienze e deviazioni", "Impedisce o governa deviazioni durante l’esecuzione"]
        ],
        assessment: ["La process intelligence analizza ciò che accade; CAELO governa come il procedimento deve accadere."]
      }
    ],
    equivalentElements: ["Intelligenza procedurale specializzata per dominio", "Governance incorporata nel ciclo operativo", "Architettura delle evidenze", "Tracciabilità delle fonti", "Supervisione umana nei punti critici", "Gestione formalizzata delle eccezioni", "Verticali governati da un motore comune", "Integrazione con sistemi esistenti"],
    buyers: [
      ["Enti pubblici", "Procedimenti rivolti ai cittadini con responsabilità, termini e controlli"],
      ["Sanità e welfare", "Procedure complesse fondate su fonti e requisiti di conformità"],
      ["Banche e assicurazioni", "Ricostruibilità delle decisioni e audit trail"],
      ["Studi professionali", "Istruttorie documentali e responsabilità del professionista"],
      ["System integrator", "Implementazione di soluzioni governate presso clienti regolamentati"],
      ["Grandi organizzazioni", "Processi ad alta responsabilità e coordinamento multidominio"]
    ],
    sectorItems: ["Pubblica Amministrazione", "Previdenza e welfare", "Sanità", "Giustizia", "Autorità di regolazione", "Banche", "Assicurazioni", "Utilities", "Energia", "Telecomunicazioni", "Industria", "Compliance", "Audit", "Knowledge management", "Process governance", "Sistemi mission-critical"]
  },
  en: {
    back: "Back to home",
    badge: "Technology positioning analysis",
    title: "CAELO in the landscape of AI architectures for regulated environments",
    intro: "An internal mapping of the main technology categories adjacent to CAELO, designed to clarify differences in function, architectural layer and governance model.",
    noteTitle: "Methodological note",
    noteText: "This page presents an internal positioning analysis based on functional characteristics generally associated with major enterprise AI platform categories. It is not an independent certification, a market ranking or an exhaustive comparison of individual products. Market capabilities may change over time and according to configuration.",
    market: "Positioning",
    distinctive: "A distinctive position",
    distinctiveText: "CAELO is not designed as a language model, a general-purpose copilot or an isolated automation tool. It is a procedural governance architecture for governing sources, rules, roles, states, controls, exceptions, evidence and human interventions in regulated procedures.",
    scoreTitle: "Architectural profile",
    scoreText: "An internal reading of CAELO’s main design dimensions.",
    benchmark: "Category mapping",
    differences: "Adjacent categories and functional differences",
    differencesText: "The categories listed are not presented as direct competitors. The comparison concerns only their different architectural and operational roles.",
    comparison: "CATEGORY",
    dimension: "Dimension",
    categoryPlatform: "Typical category characteristics",
    caelo: "CAELO positioning",
    assessment: "Positioning interpretation",
    positioning: "Summary",
    equivalent: "Where does CAELO fit?",
    equivalentText: "CAELO occupies a specific space: end-to-end procedural governance where decisions, sources, responsibilities, controls and exceptions must be reconstructable and subject to human oversight.",
    categoryLabel: "Proposed category",
    more: "CAELO is more than a single function",
    moreItems: ["More than a copilot", "More than a compliance tool", "More than a workflow engine", "More than a knowledge base", "More than an automation system"],
    users: "Potential users",
    profile: "Profile",
    motivation: "Governance need",
    sectors: "Application sectors",
    sectorsText: "The Mother Engine enables controlled expansion into specialist verticals while preserving common principles of traceability, auditability and human oversight.",
    closingTitle: "One universal engine. Multiple specialist verticals.",
    closingText: "The Mother Engine governs the common architecture. The Command Center operationalises vertical capabilities. Each domain incorporates its own sources, rules, responsibilities, controls and exceptions."
  },
  fr: {
    back: "Retour à l’accueil",
    badge: "Analyse du positionnement technologique",
    title: "CAELO dans le paysage des architectures d’IA pour les environnements réglementés",
    intro: "Une cartographie interne des principales catégories technologiques voisines de CAELO, destinée à clarifier les différences de fonction, de niveau architectural et de modèle de gouvernance.",
    noteTitle: "Note méthodologique",
    noteText: "Cette page présente une analyse interne de positionnement fondée sur les caractéristiques fonctionnelles généralement associées aux principales catégories de plateformes d’IA enterprise. Elle ne constitue ni une certification indépendante, ni un classement de marché, ni une comparaison exhaustive de produits individuels.",
    market: "Positionnement",
    distinctive: "Un positionnement distinctif",
    distinctiveText: "CAELO n’est pas conçu comme un modèle linguistique, un copilote généraliste ou un outil d’automatisation isolé. Il s’agit d’une architecture de gouvernance procédurale destinée aux environnements réglementés.",
    scoreTitle: "Profil architectural",
    scoreText: "Une lecture interne des principales dimensions de conception de CAELO.",
    benchmark: "Cartographie par catégories",
    differences: "Catégories adjacentes et différences fonctionnelles",
    differencesText: "Les catégories présentées ne sont pas considérées comme des concurrents directs. La comparaison porte uniquement sur leur rôle architectural et opérationnel.",
    comparison: "CATÉGORIE",
    dimension: "Dimension",
    categoryPlatform: "Caractéristiques typiques de la catégorie",
    caelo: "Positionnement CAELO",
    assessment: "Lecture du positionnement",
    positioning: "Synthèse",
    equivalent: "Où se situe CAELO ?",
    equivalentText: "CAELO occupe un espace spécifique : la gouvernance procédurale de bout en bout dans les contextes où décisions, sources, responsabilités, contrôles et exceptions doivent être reconstructibles.",
    categoryLabel: "Catégorie proposée",
    more: "CAELO dépasse une fonction unique",
    moreItems: ["Plus qu’un copilote", "Plus qu’un outil de conformité", "Plus qu’un moteur de workflow", "Plus qu’une base de connaissances", "Plus qu’un système d’automatisation"],
    users: "Utilisateurs potentiels",
    profile: "Profil",
    motivation: "Besoin de gouvernance",
    sectors: "Domaines d’application",
    sectorsText: "Le Mother Engine permet une expansion contrôlée vers des verticales spécialisées en conservant des principes communs de traçabilité, d’auditabilité et de supervision humaine.",
    closingTitle: "Un moteur universel. Plusieurs verticales spécialisées.",
    closingText: "Le Mother Engine gouverne l’architecture commune. Le Command Center rend opérationnelles les capacités des verticales. Chaque domaine intègre ses propres sources, règles, responsabilités, contrôles et exceptions."
  },
  de: {
    back: "Zurück zur Startseite",
    badge: "Analyse der technologischen Positionierung",
    title: "CAELO im Umfeld von KI-Architekturen für regulierte Bereiche",
    intro: "Eine interne Kartierung der wichtigsten an CAELO angrenzenden Technologiekategorien zur Verdeutlichung von Funktion, Architekturebene und Governance-Modell.",
    noteTitle: "Ursprung der Analyse",
    noteText: "Diese Analyse wurde mithilfe von Google Antigravity nach Prüfung der technischen und architektonischen Dokumentation von CAELO und einem Vergleich mit den wichtigsten Kategorien von Enterprise-KI-Plattformen erstellt. Die Bewertung wurde vom Agenten auf Grundlage der zur Analyse vorgelegten Materialien erzeugt und stellt weder eine Zertifizierung noch ein formelles Audit oder ein offizielles Marktranking dar.",
    market: "Positionierung",
    distinctive: "Eine eigenständige Positionierung",
    distinctiveText: "CAELO ist weder als Sprachmodell noch als allgemeiner Copilot oder isoliertes Automatisierungswerkzeug konzipiert. Es ist eine Architektur für Verfahrensgovernance in regulierten Bereichen.",
    scoreTitle: "Architekturprofil",
    scoreText: "Eine interne Betrachtung der wichtigsten Gestaltungsdimensionen von CAELO.",
    benchmark: "Kartierung nach Kategorien",
    differences: "Angrenzende Kategorien und funktionale Unterschiede",
    differencesText: "Die aufgeführten Kategorien werden nicht als direkte Wettbewerber dargestellt. Der Vergleich betrifft ausschließlich ihre unterschiedliche architektonische und operative Rolle.",
    comparison: "KATEGORIE",
    dimension: "Dimension",
    categoryPlatform: "Typische Merkmale der Kategorie",
    caelo: "CAELO-Positionierung",
    assessment: "Positionierungsbewertung",
    positioning: "Zusammenfassung",
    equivalent: "Wo ist CAELO einzuordnen?",
    equivalentText: "CAELO besetzt einen spezifischen Raum: durchgängige Verfahrensgovernance in Kontexten, in denen Entscheidungen, Quellen, Verantwortlichkeiten, Kontrollen und Ausnahmen rekonstruierbar sein müssen.",
    categoryLabel: "Vorgeschlagene Kategorie",
    more: "CAELO ist mehr als eine einzelne Funktion",
    moreItems: ["Mehr als ein Copilot", "Mehr als ein Compliance-Werkzeug", "Mehr als eine Workflow-Engine", "Mehr als eine Wissensbasis", "Mehr als ein Automatisierungssystem"],
    users: "Potenzielle Nutzer",
    profile: "Profil",
    motivation: "Governance-Bedarf",
    sectors: "Anwendungsbereiche",
    sectorsText: "Die Mother Engine ermöglicht eine kontrollierte Expansion in spezialisierte Vertikalen unter Beibehaltung gemeinsamer Prinzipien von Nachvollziehbarkeit, Auditierbarkeit und menschlicher Aufsicht.",
    closingTitle: "Eine universelle Engine. Mehrere spezialisierte Vertikalen.",
    closingText: "Die Mother Engine steuert die gemeinsame Architektur. Das Command Center macht die Fähigkeiten der Vertikalen operativ nutzbar. Jede Domäne integriert ihre eigenen Quellen, Regeln, Verantwortlichkeiten, Kontrollen und Ausnahmen."
  },
  es: {
    back: "Volver al inicio",
    badge: "Análisis del posicionamiento tecnológico",
    title: "CAELO en el panorama de las arquitecturas de IA para entornos regulados",
    intro: "Una cartografía interna de las principales categorías tecnológicas próximas a CAELO, destinada a aclarar diferencias de función, nivel arquitectónico y modelo de gobernanza.",
    noteTitle: "Origen del análisis",
    noteText: "Este análisis fue generado mediante Google Antigravity tras el examen de la documentación técnica y arquitectónica de CAELO y la comparación con las principales categorías de plataformas de IA enterprise. La evaluación fue producida por el agente sobre la base de los materiales sometidos a análisis y no constituye una certificación, una auditoría formal ni una clasificación oficial del mercado.",
    market: "Posicionamiento",
    distinctive: "Un posicionamiento distintivo",
    distinctiveText: "CAELO no está diseñado como modelo lingüístico, copiloto generalista ni herramienta aislada de automatización. Es una arquitectura de gobernanza procedimental para entornos regulados.",
    scoreTitle: "Perfil arquitectónico",
    scoreText: "Una lectura interna de las principales dimensiones de diseño de CAELO.",
    benchmark: "Cartografía por categorías",
    differences: "Categorías adyacentes y diferencias funcionales",
    differencesText: "Las categorías indicadas no se presentan como competidores directos. La comparación se refiere únicamente a su diferente función arquitectónica y operativa.",
    comparison: "CATEGORÍA",
    dimension: "Dimensión",
    categoryPlatform: "Características típicas de la categoría",
    caelo: "Posicionamiento CAELO",
    assessment: "Lectura del posicionamiento",
    positioning: "Síntesis",
    equivalent: "¿Dónde se sitúa CAELO?",
    equivalentText: "CAELO ocupa un espacio específico: la gobernanza procedimental de extremo a extremo en contextos donde decisiones, fuentes, responsabilidades, controles y excepciones deben ser reconstruibles.",
    categoryLabel: "Categoría propuesta",
    more: "CAELO es más que una sola función",
    moreItems: ["Más que un copiloto", "Más que una herramienta de cumplimiento", "Más que un motor de workflow", "Más que una base de conocimiento", "Más que un sistema de automatización"],
    users: "Usuarios potenciales",
    profile: "Perfil",
    motivation: "Necesidad de gobernanza",
    sectors: "Ámbitos de aplicación",
    sectorsText: "El Mother Engine permite una expansión controlada hacia verticales especializadas, manteniendo principios comunes de trazabilidad, auditabilidad y supervisión humana.",
    closingTitle: "Un motor universal. Múltiples verticales especializadas.",
    closingText: "El Mother Engine gobierna la arquitectura común. El Command Center hace operativas las capacidades de las verticales. Cada dominio incorpora sus propias fuentes, reglas, responsabilidades, controles y excepciones."
  }
} as const;

const italianData = copy.it;

export default function ValutazioneIndipendente() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;
  const data = italianData;

  return (
    <Layout>
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-6xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild><Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />{t.back}</Link></Button>
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">{t.badge}</span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">{t.title}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">{t.intro}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-3xl border border-border bg-card p-7 md:p-9">
            <h2 className="text-xl font-bold mb-3">{t.noteTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.noteText}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-primary/20 bg-card p-8 md:p-12 shadow-sm grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center"><Sparkles className="w-10 h-10 text-primary" /></div>
            <div><div className="text-sm uppercase tracking-[0.22em] text-primary font-semibold mb-3">{t.market}</div><h2 className="text-3xl md:text-5xl font-bold mb-4">{t.distinctive}</h2><p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.distinctiveText}</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-5">{t.scoreTitle}</h2><p className="text-xl text-muted-foreground">{t.scoreText}</p></div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {data.scores.map((item) => (
              <motion.article key={item.dimension} variants={staggerItem} className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-sm">
                <div className="flex items-start justify-between gap-6 mb-5"><h3 className="text-xl md:text-2xl font-bold">{item.dimension}</h3><div className="text-3xl font-bold text-primary whitespace-nowrap">{item.score}</div></div>
                <div className="h-2 rounded-full bg-muted overflow-hidden mb-5"><div className="h-full bg-primary rounded-full" style={{ width: `${parseFloat(item.score.replace(",", ".")) * 10}%` }} /></div>
                <p className="text-muted-foreground leading-relaxed">{item.reason}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14"><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.benchmark}</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5">{t.differences}</h2><p className="text-xl text-muted-foreground max-w-4xl">{t.differencesText}</p></div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {data.categories.map((category, index) => (
              <motion.article key={category.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springPresets.gentle, delay: index * 0.02 }} className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-sm">
                <div className="px-7 md:px-10 py-7 border-b border-border bg-background/70"><div className="text-sm font-semibold text-primary mb-2">{t.comparison} {String(index + 1).padStart(2, "0")}</div><h3 className="text-2xl md:text-4xl font-bold">{category.name}</h3></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead><tr className="border-b border-border bg-muted/40"><th className="p-5 font-semibold w-[20%]">{t.dimension}</th><th className="p-5 font-semibold w-[40%]">{t.categoryPlatform}</th><th className="p-5 font-semibold w-[40%] text-primary">{t.caelo}</th></tr></thead><tbody>{category.rows.map(([dimension, other, caelo]) => <tr key={dimension} className="border-b border-border/70 last:border-0 align-top"><td className="p-5 font-semibold">{dimension}</td><td className="p-5 text-muted-foreground leading-relaxed">{other}</td><td className="p-5 leading-relaxed bg-primary/[0.035]">{caelo}</td></tr>)}</tbody></table></div>
                <div className="p-7 md:p-10 border-t border-border"><h4 className="text-xl font-bold mb-5">{t.assessment}</h4>{category.assessment.map((text) => <p key={text} className="text-muted-foreground leading-relaxed">{text}</p>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.positioning}</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">{t.equivalent}</h2><p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.equivalentText}</p><div className="rounded-3xl bg-primary/10 p-7"><div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-3">{t.categoryLabel}</div><div className="text-3xl font-bold">Governed Procedural AI Platform</div></div></div>
            <div className="grid sm:grid-cols-2 gap-4">{data.equivalentElements.map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-5 flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="leading-relaxed">{item}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-10">{t.more}</h2><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">{t.moreItems.map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-6 font-semibold leading-relaxed">{item}</div>)}</div></div></section>

      <section className="py-24 bg-muted/30"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-10">{t.users}</h2><div className="overflow-x-auto rounded-3xl border border-border"><table className="w-full min-w-[720px]"><thead><tr className="bg-background"><th className="p-5 text-left">{t.profile}</th><th className="p-5 text-left">{t.motivation}</th></tr></thead><tbody>{data.buyers.map(([buyer, reason]) => <tr key={buyer} className="border-t border-border"><td className="p-5 font-semibold">{buyer}</td><td className="p-5 text-muted-foreground">{reason}</td></tr>)}</tbody></table></div></div></section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-5">{t.sectors}</h2><p className="text-xl text-muted-foreground mb-10 max-w-4xl">{t.sectorsText}</p><div className="flex flex-wrap gap-3">{data.sectorItems.map((sector) => <span key={sector} className="rounded-full border border-border bg-card px-5 py-3 font-medium">{sector}</span>)}</div></div></section>

      <section className="py-24 bg-muted/30"><div className="container mx-auto px-4"><div className="max-w-5xl mx-auto rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16 text-center"><h2 className="text-3xl md:text-5xl font-bold mb-6">{t.closingTitle}</h2><p className="text-xl leading-relaxed opacity-90">{t.closingText}</p></div></div></section>
    </Layout>
  );
}

