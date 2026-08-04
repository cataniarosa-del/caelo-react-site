import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

type Score = { dimension: string; score: string; reason: string };
type Comparison = { name: string; rows: Array<[string, string, string]>; assessment: string[] };
type LocalizedPage = {
  back: string; badge: string; title: string; intro: string; market: string; rare: string; rareText: string;
  report: string; reportText: string; benchmark: string; differences: string; differencesText: string;
  comparison: string; dimension: string; platform: string; competitive: string; positioning: string;
  equivalent: string; equivalentText: string; category: string; more: string; moreItems: string[];
  users: string; profile: string; motivation: string; sectors: string; sectorsText: string;
  closingTitle: string; closingText: string; scores: Score[]; comparisons: Comparison[];
  equivalentElements: string[]; buyers: Array<[string,string]>; sectorItems: string[];
};

const sharedComparisons = {
  names: [
    "Microsoft — Copilot Studio / Azure AI Foundry",
    "IBM — watsonx.governance",
    "SAP — AI Governance / Business AI",
    "Palantir — AIP",
    "ServiceNow — AI Agents / Now Assist",
    "OpenAI / Anthropic — Enterprise API",
    "Glean — Enterprise Knowledge Platform",
    "Harvey — Legal AI",
    "UiPath / Automation Anywhere — Process Automation",
    "Celonis — Process Intelligence"
  ]
};

const pages: Record<"it"|"en"|"fr"|"de"|"es", LocalizedPage> = {
  it: {
    back:"Torna alla home", badge:"Valutazione comparativa indipendente", title:"CAELO e Mother Engine nel panorama internazionale",
    intro:"Confronto con le principali piattaforme di AI orchestration, governance, knowledge management, legal AI, process intelligence e automazione.",
    market:"Posizionamento di mercato", rare:"Un prodotto raro",
    rareText:"CAELO è stato definito in una precedente valutazione indipendente come un prodotto raro. La definizione riflette l’assenza, sul mercato, di piattaforme equivalenti capaci di riunire in un’unica architettura intelligenza procedurale, governance multilivello, evidenze verificabili, divulgazione controllata, supervisione umana e auditabilità completa.",
    report:"La pagella completa", reportText:"Dodici dimensioni di valutazione, con punteggio e motivazione.",
    benchmark:"Benchmark internazionale", differences:"Punti di forza, limiti e differenze",
    differencesText:"Ogni confronto distingue il punto di forza della piattaforma analizzata, il limite rispetto ai procedimenti regolamentati e il vantaggio specifico di CAELO.",
    comparison:"CONFRONTO", dimension:"Dimensione", platform:"Piattaforma analizzata", competitive:"Valutazione competitiva",
    positioning:"Posizionamento", equivalent:"Esiste oggi un prodotto equivalente?",
    equivalentText:"La valutazione non identifica piattaforme commerciali che combinino con un livello equivalente di profondità tutte le capacità osservate in CAELO.",
    category:"Categoria", more:"Più di una categoria tradizionale",
    moreItems:["Più di un copilota","Più di uno strumento di governance","Più di una piattaforma di conoscenza","Più di uno strumento di compliance","Focalizzato rispetto a un hyperscaler"],
    users:"Potenziali utilizzatori", profile:"Profilo", motivation:"Motivazione",
    sectors:"Ambiti di applicazione", sectorsText:"Il motore universale consente l’espansione controllata verso molteplici verticali specialistici.",
    closingTitle:"Un motore universale. Molteplici verticali specialistici.",
    closingText:"Il Mother Engine governa l’architettura comune. Il Command Center rende operative le capacità dei verticali. Ogni dominio incorpora le proprie fonti, regole, responsabilità, controlli ed eccezioni senza perdere i principi comuni di tracciabilità, auditabilità e supervisione umana.",
    scores:[
      {dimension:"Innovazione",score:"8,0",reason:"La combinazione di un’architettura nativa orientata alla governance, di un motore multilivello formalizzato e di una pipeline produttiva basata sulle evidenze rappresenta un’innovazione architetturale significativa."},
      {dimension:"Maturità tecnica",score:"7,5",reason:"I cicli operativi completati, i livelli di governance, le evidenze verificabili e la matrice di governance rappresentano un livello di maturità tecnica notevole."},
      {dimension:"Qualità del design",score:"8,5",reason:"La separazione tra prodotto e ambiente di sviluppo, il controllo della divulgazione, l’approccio evidence-first e gli stati formali del ciclo di vita dimostrano una progettazione rigorosa e coerente."},
      {dimension:"Scalabilità",score:"7,0",reason:"La piattaforma dispone di un meccanismo strutturato e governato per l’espansione controllata verso nuovi domini operativi, senza richiedere una riprogettazione dell’architettura di base."},
      {dimension:"Preparazione enterprise",score:"7,0",reason:"Governance, accesso controllato per le verifiche, tracciabilità delle fonti e protezione della proprietà intellettuale sono già impostati a livello enterprise. Il lavoro residuo riguarda soprattutto industrializzazione e deployment."},
      {dimension:"Governance",score:"9,5",reason:"La governance è multilivello, orientata al ciclo di vita, supportata da evidenze e dotata di approvazione umana obbligatoria per l’ampliamento dei confini operativi."},
      {dimension:"Auditabilità",score:"9,0",reason:"La piattaforma dispone di un’infrastruttura completa di auditabilità basata su evidenze verificabili, tracciabilità della conoscenza, registrazione degli interventi umani e accesso controllato per le attività di verifica."},
      {dimension:"Sicurezza concettuale",score:"9,0",reason:"Il controllo multilivello della divulgazione, la separazione degli ambienti e la protezione della proprietà intellettuale definiscono una postura di sicurezza formalmente operativa."},
      {dimension:"Potenziale commerciale",score:"7,5",reason:"Il potenziale è elevato nei settori regolamentati, con opportunità di licenza, modello OEM, partnership e integrazione attraverso system integrator."},
      {dimension:"Difendibilità tecnologica",score:"8,5",reason:"Governance, controllo operativo, gestione delle evidenze e intelligenza procedurale sono integrate in un sistema coerente, difficile da riprodurre attraverso il semplice assemblaggio di componenti."},
      {dimension:"Vantaggio competitivo",score:"8,0",reason:"Non sono stati identificati prodotti commerciali che combinino con analoga completezza intelligenza procedurale, governance enterprise, auditabilità basata sulle evidenze e controllo della divulgazione."},
      {dimension:"Valore strategico",score:"8,5",reason:"CAELO rappresenta un potenziale asset per acquisizione, licenza OEM o investimento strategico nel mercato dell’intelligenza artificiale regolamentata."}
    ],
    comparisons:[
      {name:sharedComparisons.names[0],rows:[["Modello primario","Orchestrazione orientata alla produttività e nativa per Microsoft 365","Governance-first e intelligenza procedurale specializzata per dominio"],["Punto di forza","Ecosistema molto ampio e capacità di integrazione superiore","Profondità della governance e specializzazione procedurale"],["Limite nel contesto regolamentato","Governance legata al perimetro di sicurezza e ai servizi Microsoft","Modello multilivello pienamente operativo e indipendente dall’ecosistema"],["Auditabilità","Log tramite Azure Monitor e Sentinel","Evidenze verificabili, tracciabilità completa e ambiente controllato per l’audit esterno"],["Supervisione umana","Disponibile, ma non imposta architetturalmente","Imposta e documentata nei punti critici del procedimento"],["Proprietà intellettuale","Controlli enterprise standard","Protezione della logica proprietaria e divulgazione controllata"],["Specializzazione","General purpose, basata su connettori","Verticali di dominio governati e altamente specializzati"]],assessment:["Microsoft offre una capacità di scala e integrazione significativamente superiore.","CAELO offre invece una profondità di governance, un controllo della divulgazione e una specializzazione procedurale nettamente superiori.","Le piattaforme rispondono a esigenze differenti e non sono concorrenti diretti nei domini procedurali altamente regolamentati."]},
      {name:sharedComparisons.names[1],rows:[["Modello primario","Gestione del rischio dei modelli AI e mappatura normativa","AI procedurale con governance integrata nel ciclo di produzione"],["Punto di forza","Monitoraggio enterprise di portafogli AI eterogenei","Governance procedurale, divulgazione controllata ed evidenze operative"],["Limite nel contesto regolamentato","Governance sovrapposta a sistemi AI già esistenti","Conformità incorporata nativamente nel ciclo operativo"],["Mappatura normativa","Acceleratori EU AI Act e integrazione con OpenPages","Matrice di governance allineata a NIST AI RMF, ISO/IEC 42001 ed EU AI Act"],["Scalabilità","Ecosistemi enterprise multi-modello","Espansione modulare per dominio, governata e controllata"],["Destinatario","Grandi organizzazioni con portafogli AI eterogenei","Operatori che gestiscono specifici domini procedurali regolamentati"]],assessment:["IBM watsonx.governance è principalmente una piattaforma di monitoraggio e conformità.","CAELO integra governance, evidenze, tracciabilità e controllo operativo direttamente nell’architettura di produzione.","L’approccio CAELO è più granulare e maggiormente operazionalizzato a livello di procedimento."]},
      {name:sharedComparisons.names[2],rows:[["Punto di forza","AI integrata nell’ecosistema ERP e nei workflow SAP","Intelligenza procedurale e governance multidominio"],["Contesto applicativo","Finanza, risorse umane e supply chain","Previdenza, fiscalità, sanità e procedimenti giuridico-amministrativi"],["Limite nel contesto regolamentato","Dipendenza dall’ecosistema SAP","Governance indipendente, portabile e integrabile"],["Distribuzione","Vincolata allo stack SAP","Potenzialmente distribuibile su infrastrutture eterogenee"]],assessment:["SAP trae valore dall’integrazione profonda con il proprio ecosistema ERP.","CAELO è progettato per operare indipendentemente dall’ecosistema tecnologico e per domini procedurali ad alto contenuto normativo."]},
      {name:sharedComparisons.names[3],rows:[["Modello di governance","Governance-as-Code tramite Ontology e accessi basati sullo scopo","Governance basata su regole, divulgazione controllata ed evidenze"],["Punto di forza","Sovranità dei dati e tracciabilità su larga scala","Intelligenza procedurale e governance modulare multidominio"],["Mercato","Difesa, intelligence, grandi amministrazioni e finanza","PA regolamentata, previdenza, sanità e compliance"],["Limite di adozione","Adozione complessa e fortemente platform-centric","Ingresso più modulare attraverso verticali specialistici"],["Proprietà intellettuale","Sovranità dei dati enterprise","Protezione della logica proprietaria e viste controllate per i soggetti autorizzati"]],assessment:["Palantir è il riferimento più vicino per disciplina della governance e protezione della proprietà intellettuale.","CAELO opera su scala diversa, ma formalizza in modo particolarmente granulare visibilità, evidenze e vincoli di accesso nel ciclo operativo."]},
      {name:sharedComparisons.names[4],rows:[["Modello","AI integrata nei workflow ITSM, HR e Customer Service","AI procedurale applicata a workflow specifici di dominio"],["Control Tower","AI Control Tower","Command Center e motore universale di governance procedurale"],["Punto di forza","Ampiezza dell’ecosistema operativo ServiceNow","Governance portabile e indipendente dal dominio"],["Limite nel contesto regolamentato","Dipendenza dall’ecosistema ITSM","Applicabilità a qualsiasi procedimento strutturato"],["Audit trail","Log integrati nella piattaforma","Architettura indipendente delle evidenze e accesso controllato per l’audit esterno"],["Espansione","Plugin e connettori","Moduli di dominio governati secondo criteri formali"]],assessment:["L’AI Control Tower rappresenta l’analogia funzionale più vicina al Command Center.","CAELO si distingue per la portabilità del motore universale e per un modello di audit esterno più formalizzato."]},
      {name:sharedComparisons.names[5],rows:[["Modello","Model-as-a-Service tramite API enterprise","Piattaforma procedurale governata end-to-end"],["Punto di forza","Capacità linguistiche general purpose e infrastruttura di modello","Governance, orchestrazione e controllo procedurale"],["Limite nel contesto regolamentato","Auditabilità principalmente a livello di API e log","Catena di evidenze e tracciabilità completa"],["Intelligenza procedurale","General purpose","Specializzata per dominio e ancorata alle fonti"],["Supervisione umana","Configurabile","Imposta e documentata nei punti critici"],["Rapporto con CAELO","Provider del modello linguistico sottostante","Livello superiore di governo e orchestrazione"]],assessment:["OpenAI e Anthropic non sono concorrenti diretti di CAELO.","I modelli forniscono capacità di elaborazione; CAELO introduce l’architettura necessaria per impiegarli in procedimenti regolamentati."]},
      {name:sharedComparisons.names[6],rows:[["Modello","Knowledge graph, ricerca universale e orchestrazione di agenti","Intelligenza procedurale governata con pipeline della conoscenza"],["Punto di forza","Recupero rapido della conoscenza distribuita","Validazione e promozione governata delle fonti"],["Limite nel contesto regolamentato","Recupero basato sui permessi","Tracciabilità completa del percorso della conoscenza e classificazione delle fonti"],["Specializzazione","Conoscenza trasversale all’impresa","Verticali con dichiarazioni formali delle fonti"],["Auditabilità","Logging delle operazioni di recupero","Catena delle evidenze e verifica del ciclo di utilizzo della conoscenza"]],assessment:["Glean è ottimizzato per il recupero delle informazioni.","CAELO è ottimizzato per la governance della conoscenza nei domini in cui provenienza e validazione sono requisiti di conformità."]},
      {name:sharedComparisons.names[7],rows:[["Dominio","Redazione giuridica, ricerca legale e due diligence","Intelligenza procedurale multidominio, anche giuridica e fiscale"],["Punto di forza","Profonda specializzazione nel lavoro legale","Governance formalizzata applicabile a molteplici domini"],["Limite","Specializzazione esclusivamente legale","Espansione mediante verticali governati"],["Supervisione umana","Revisione del professionista","Interventi umani registrati e collocati nei punti critici"],["Auditabilità","Log enterprise standard","Evidenze verificabili e tracciabilità completa del percorso decisionale"]],assessment:["Harvey eccelle nella redazione e ricerca legale.","CAELO offre un’architettura di governance più ampia e applicabile anche ad altri domini procedurali regolamentati."]},
      {name:sharedComparisons.names[8],rows:[["Modello","RPA con orchestrazione AI e process mining","AI procedurale con governance nativa"],["Punto di forza","Automazione su larga scala di attività ripetitive","Gestione di procedure complesse e ad alta intensità di conoscenza"],["Limite","Ottimizzazione per processi strutturati ad alto volume","Gestione di ambiguità, fonti, valutazioni umane ed evidenze"],["Governance","Orchestratore e controlli di accesso","Governance multilivello supportata da evidenze"],["Supervisione umana","Disponibile e configurabile","Imposta nei punti critici del procedimento"]],assessment:["Le piattaforme RPA e CAELO sono complementari.","CAELO può costituire il livello di intelligenza procedurale e governance sopra il quale l’RPA esegue le attività automatizzabili."]},
      {name:sharedComparisons.names[9],rows:[["Modello","Process Mining ed Execution Management","Esecuzione procedurale governata"],["Punto di forza","Scoperta, ricostruzione e ottimizzazione dei processi","Governance dell’esecuzione, evidenze e controllo umano"],["Limite","Ruolo prevalentemente analitico e prescrittivo","Ruolo operativo, procedurale ed evidenziale"],["Governance","Integrata nell’Execution Management System","Governance multilivello con conformità supportata da evidenze"]],assessment:["Celonis consente di comprendere e ottimizzare i processi.","CAELO governa la loro esecuzione operativa nei contesti regolamentati. Le due piattaforme sono fortemente complementari."]}
    ],
    equivalentElements:["Intelligenza procedurale specializzata per dominio","Framework formale di governance per operazioni AI regolamentate","Architettura delle evidenze con tracciabilità verificabile","Controllo multilivello della divulgazione","Ciclo di vita della conoscenza governato e tracciabile","Matrice di governance allineata ai principali standard internazionali","Supervisione umana imposta nei punti critici","Ambiente controllato per le verifiche esterne"],
    buyers:[["Enti pubblici regolamentati","AI tracciabile e auditabile per procedimenti rivolti ai cittadini"],["Sanità ed enti erogatori","Procedure complesse, fonti validate e controllo della conformità"],["Banche e assicurazioni","Audit trail completo e governance delle decisioni"],["Studi legali e organismi giudiziari","Intelligenza procedurale fondata su fonti verificabili"],["System integrator","Distribuzione di soluzioni AI governate presso clienti regolamentati"],["Compliance e governance enterprise","Infrastruttura di controllo per processi ad alta responsabilità"]],
    sectorItems:["Pubblica Amministrazione","Previdenza e welfare","Sanità","Autorità giudiziarie","Autorità di regolazione","Utilities","Servizi bancari e finanziari","Assicurazioni","Industria e manifattura","Difesa","Telecomunicazioni","Energia","Compliance e audit","Knowledge management","Governance dei processi","Sistemi mission-critical"]
  },
  en: {
    back:"Back to home", badge:"Independent comparative assessment", title:"CAELO and the Mother Engine in the international landscape",
    intro:"A comparison with leading platforms in AI orchestration, governance, knowledge management, legal AI, process intelligence and automation.",
    market:"Market positioning", rare:"A rare product",
    rareText:"A previous independent assessment described CAELO as a rare product. This reflects the absence of equivalent market platforms able to combine procedural intelligence, multi-layer governance, verifiable evidence, controlled disclosure, human oversight and full auditability in one architecture.",
    report:"Complete scorecard", reportText:"Twelve assessment dimensions, each with a score and rationale.",
    benchmark:"International benchmark", differences:"Strengths, limitations and differences",
    differencesText:"Each comparison distinguishes the analysed platform’s strength, its limitation in regulated procedures and CAELO’s specific advantage.",
    comparison:"COMPARISON", dimension:"Dimension", platform:"Analysed platform", competitive:"Competitive assessment",
    positioning:"Positioning", equivalent:"Is there an equivalent product today?",
    equivalentText:"The assessment identifies no commercial platform combining all the capabilities observed in CAELO with an equivalent level of depth.",
    category:"Category", more:"More than a traditional category",
    moreItems:["More than a copilot","More than a governance tool","More than a knowledge platform","More than a compliance tool","More focused than a hyperscaler"],
    users:"Potential users", profile:"Profile", motivation:"Rationale",
    sectors:"Application sectors", sectorsText:"The universal engine enables controlled expansion into multiple specialist verticals.",
    closingTitle:"One universal engine. Multiple specialist verticals.",
    closingText:"The Mother Engine governs the common architecture. The Command Center operationalises the verticals’ capabilities. Each domain incorporates its own sources, rules, responsibilities, controls and exceptions while preserving the common principles of traceability, auditability and human oversight.",
    scores:[
      {dimension:"Innovation",score:"8.0",reason:"The combination of a governance-native architecture, a formalised multi-layer engine and an evidence-based production pipeline represents significant architectural innovation."},
      {dimension:"Technical maturity",score:"7.5",reason:"Completed operational cycles, governance layers, verifiable evidence and the governance matrix demonstrate a notable level of technical maturity."},
      {dimension:"Design quality",score:"8.5",reason:"The separation between product and development environment, disclosure control, the evidence-first approach and formal lifecycle states demonstrate rigorous and coherent design."},
      {dimension:"Scalability",score:"7.0",reason:"The platform has a structured and governed mechanism for controlled expansion into new operational domains without redesigning the core architecture."},
      {dimension:"Enterprise readiness",score:"7.0",reason:"Governance, controlled verification access, source traceability and intellectual-property protection are already structured at enterprise level. Remaining work mainly concerns industrialisation and deployment."},
      {dimension:"Governance",score:"9.5",reason:"Governance is multi-layered, lifecycle-oriented, evidence-supported and requires mandatory human approval for expansion of operational boundaries."},
      {dimension:"Auditability",score:"9.0",reason:"The platform has a complete auditability infrastructure based on verifiable evidence, knowledge traceability, records of human interventions and controlled access for verification activities."},
      {dimension:"Conceptual security",score:"9.0",reason:"Multi-layer disclosure control, environment separation and intellectual-property protection establish a formally operational security posture."},
      {dimension:"Commercial potential",score:"7.5",reason:"Potential is high in regulated sectors, with licensing, OEM, partnership and system-integrator opportunities."},
      {dimension:"Technological defensibility",score:"8.5",reason:"Governance, operational control, evidence management and procedural intelligence are integrated into a coherent system that is difficult to reproduce through simple component assembly."},
      {dimension:"Competitive advantage",score:"8.0",reason:"No commercial products were identified that combine procedural intelligence, enterprise governance, evidence-based auditability and disclosure control with comparable completeness."},
      {dimension:"Strategic value",score:"8.5",reason:"CAELO represents a potential asset for acquisition, OEM licensing or strategic investment in the regulated AI market."}
    ],
    comparisons:[
      {name:sharedComparisons.names[0],rows:[["Primary model","Productivity-oriented orchestration native to Microsoft 365","Governance-first, domain-specialised procedural intelligence"],["Strength","Very broad ecosystem and superior integration capacity","Depth of governance and procedural specialisation"],["Limitation in regulated settings","Governance tied to Microsoft’s security perimeter and services","Fully operational multi-layer model independent of the ecosystem"],["Auditability","Logs through Azure Monitor and Sentinel","Verifiable evidence, full traceability and a controlled environment for external audit"],["Human oversight","Available, but not architecturally mandatory","Required and documented at critical procedural points"],["Intellectual property","Standard enterprise controls","Protection of proprietary logic and controlled disclosure"],["Specialisation","General-purpose, connector-based","Governed, highly specialised domain verticals"]],assessment:["Microsoft offers significantly greater scale and integration capacity.","CAELO instead offers substantially deeper governance, disclosure control and procedural specialisation.","The platforms address different needs and are not direct competitors in highly regulated procedural domains."]},
      {name:sharedComparisons.names[1],rows:[["Primary model","AI model risk management and regulatory mapping","Procedural AI with governance integrated into the production lifecycle"],["Strength","Enterprise monitoring of heterogeneous AI portfolios","Procedural governance, controlled disclosure and operational evidence"],["Limitation in regulated settings","Governance overlaid on existing AI systems","Compliance natively embedded in the operational lifecycle"],["Regulatory mapping","EU AI Act accelerators and OpenPages integration","Governance matrix aligned with NIST AI RMF, ISO/IEC 42001 and the EU AI Act"],["Scalability","Multi-model enterprise ecosystems","Governed, controlled modular expansion by domain"],["Target user","Large organisations with heterogeneous AI portfolios","Operators managing specific regulated procedural domains"]],assessment:["IBM watsonx.governance is primarily a monitoring and compliance platform.","CAELO integrates governance, evidence, traceability and operational control directly into the production architecture.","CAELO’s approach is more granular and more operationalised at procedure level."]},
      {name:sharedComparisons.names[2],rows:[["Strength","AI integrated into the ERP ecosystem and SAP workflows","Procedural intelligence and multi-domain governance"],["Application context","Finance, human resources and supply chain","Pensions, taxation, healthcare and legal-administrative procedures"],["Limitation in regulated settings","Dependence on the SAP ecosystem","Independent, portable and integrable governance"],["Distribution","Bound to the SAP stack","Potentially deployable on heterogeneous infrastructures"]],assessment:["SAP derives value from deep integration with its ERP ecosystem.","CAELO is designed to operate independently of the technology ecosystem and in highly regulated procedural domains."]},
      {name:sharedComparisons.names[3],rows:[["Governance model","Governance-as-Code through Ontology and purpose-based access","Rule-based governance, controlled disclosure and evidence"],["Strength","Data sovereignty and large-scale traceability","Procedural intelligence and modular multi-domain governance"],["Market","Defence, intelligence, large administrations and finance","Regulated public administration, pensions, healthcare and compliance"],["Adoption limitation","Complex, strongly platform-centric adoption","More modular entry through specialist verticals"],["Intellectual property","Enterprise data sovereignty","Protection of proprietary logic and controlled views for authorised parties"]],assessment:["Palantir is the closest reference for governance discipline and intellectual-property protection.","CAELO operates at a different scale but formalises visibility, evidence and access constraints in the operational lifecycle with particular granularity."]},
      {name:sharedComparisons.names[4],rows:[["Model","AI integrated into ITSM, HR and Customer Service workflows","Procedural AI applied to domain-specific workflows"],["Control Tower","AI Control Tower","Command Center and universal procedural governance engine"],["Strength","Breadth of the ServiceNow operational ecosystem","Portable, domain-independent governance"],["Limitation in regulated settings","Dependence on the ITSM ecosystem","Applicability to any structured procedure"],["Audit trail","Platform-integrated logs","Independent evidence architecture and controlled access for external audit"],["Expansion","Plugins and connectors","Domain modules governed according to formal criteria"]],assessment:["The AI Control Tower is the closest functional analogy to the Command Center.","CAELO stands out for the portability of its universal engine and a more formalised external-audit model."]},
      {name:sharedComparisons.names[5],rows:[["Model","Model-as-a-Service through enterprise APIs","End-to-end governed procedural platform"],["Strength","General-purpose language capabilities and model infrastructure","Governance, orchestration and procedural control"],["Limitation in regulated settings","Auditability mainly at API and log level","Evidence chain and full traceability"],["Procedural intelligence","General-purpose","Domain-specialised and source-anchored"],["Human oversight","Configurable","Required and documented at critical points"],["Relationship with CAELO","Underlying language-model provider","Higher governance and orchestration layer"]],assessment:["OpenAI and Anthropic are not direct competitors to CAELO.","Models provide processing capabilities; CAELO introduces the architecture required to use them in regulated procedures."]},
      {name:sharedComparisons.names[6],rows:[["Model","Knowledge graph, universal search and agent orchestration","Governed procedural intelligence with a knowledge pipeline"],["Strength","Rapid retrieval of distributed knowledge","Governed validation and promotion of sources"],["Limitation in regulated settings","Permission-based retrieval","Full traceability of the knowledge path and source classification"],["Specialisation","Enterprise-wide knowledge","Verticals with formal source declarations"],["Auditability","Logging of retrieval operations","Evidence chain and verification of the knowledge-use lifecycle"]],assessment:["Glean is optimised for information retrieval.","CAELO is optimised for knowledge governance in domains where provenance and validation are compliance requirements."]},
      {name:sharedComparisons.names[7],rows:[["Domain","Legal drafting, legal research and due diligence","Multi-domain procedural intelligence, including legal and tax"],["Strength","Deep specialisation in legal work","Formalised governance applicable to multiple domains"],["Limitation","Exclusively legal specialisation","Expansion through governed verticals"],["Human oversight","Professional review","Human interventions recorded and positioned at critical points"],["Auditability","Standard enterprise logs","Verifiable evidence and full traceability of the decision path"]],assessment:["Harvey excels in legal drafting and research.","CAELO offers a broader governance architecture applicable to other regulated procedural domains as well."]},
      {name:sharedComparisons.names[8],rows:[["Model","RPA with AI orchestration and process mining","Procedural AI with native governance"],["Strength","Large-scale automation of repetitive tasks","Management of complex, knowledge-intensive procedures"],["Limitation","Optimised for high-volume structured processes","Management of ambiguity, sources, human assessments and evidence"],["Governance","Orchestrator and access controls","Evidence-supported multi-layer governance"],["Human oversight","Available and configurable","Required at critical procedural points"]],assessment:["RPA platforms and CAELO are complementary.","CAELO can provide the procedural-intelligence and governance layer above which RPA executes automatable tasks."]},
      {name:sharedComparisons.names[9],rows:[["Model","Process Mining and Execution Management","Governed procedural execution"],["Strength","Process discovery, reconstruction and optimisation","Execution governance, evidence and human control"],["Limitation","Primarily analytical and prescriptive role","Operational, procedural and evidentiary role"],["Governance","Integrated into the Execution Management System","Multi-layer governance with evidence-supported compliance"]],assessment:["Celonis enables organisations to understand and optimise processes.","CAELO governs their operational execution in regulated contexts. The two platforms are strongly complementary."]}
    ],
    equivalentElements:["Domain-specialised procedural intelligence","Formal governance framework for regulated AI operations","Evidence architecture with verifiable traceability","Multi-layer disclosure control","Governed and traceable knowledge lifecycle","Governance matrix aligned with leading international standards","Mandatory human oversight at critical points","Controlled environment for external verification"],
    buyers:[["Regulated public bodies","Traceable and auditable AI for citizen-facing procedures"],["Healthcare and service-delivery bodies","Complex procedures, validated sources and compliance control"],["Banks and insurers","Complete audit trail and decision governance"],["Law firms and judicial bodies","Procedural intelligence grounded in verifiable sources"],["System integrators","Distribution of governed AI solutions to regulated clients"],["Enterprise compliance and governance","Control infrastructure for high-responsibility processes"]],
    sectorItems:["Public Administration","Pensions and welfare","Healthcare","Judicial authorities","Regulatory authorities","Utilities","Banking and financial services","Insurance","Industry and manufacturing","Defence","Telecommunications","Energy","Compliance and audit","Knowledge management","Process governance","Mission-critical systems"]
  },
  fr: {} as LocalizedPage,
  de: {} as LocalizedPage,
  es: {} as LocalizedPage
};

// Reuse the complete English benchmark structure for FR/DE/ES while translating all visible
// headings, labels, score dimensions/reasons, tables, assessments, buyers and sectors below.
pages.fr = {
  ...pages.en,
  back:"Retour à l’accueil", badge:"Évaluation comparative indépendante", title:"CAELO et le Mother Engine dans le paysage international",
  intro:"Comparaison avec les principales plateformes d’orchestration de l’IA, de gouvernance, de gestion des connaissances, de Legal AI, d’intelligence des processus et d’automatisation.",
  market:"Positionnement sur le marché", rare:"Un produit rare",
  rareText:"Une précédente évaluation indépendante a qualifié CAELO de produit rare. Cette définition reflète l’absence de plateformes équivalentes capables de réunir dans une seule architecture intelligence procédurale, gouvernance multiniveau, preuves vérifiables, divulgation contrôlée, supervision humaine et auditabilité complète.",
  report:"Tableau d’évaluation complet", reportText:"Douze dimensions d’évaluation, chacune avec une note et une motivation.",
  benchmark:"Benchmark international", differences:"Forces, limites et différences",
  differencesText:"Chaque comparaison distingue le point fort de la plateforme analysée, sa limite dans les procédures réglementées et l’avantage spécifique de CAELO.",
  comparison:"COMPARAISON", platform:"Plateforme analysée", competitive:"Évaluation concurrentielle", positioning:"Positionnement",
  equivalent:"Existe-t-il aujourd’hui un produit équivalent ?", equivalentText:"L’évaluation n’identifie aucune plateforme commerciale combinant avec un niveau de profondeur équivalent toutes les capacités observées dans CAELO.",
  category:"Catégorie", more:"Plus qu’une catégorie traditionnelle", moreItems:["Plus qu’un copilote","Plus qu’un outil de gouvernance","Plus qu’une plateforme de connaissances","Plus qu’un outil de conformité","Plus ciblé qu’un hyperscaler"],
  users:"Utilisateurs potentiels", profile:"Profil", motivation:"Motivation", sectors:"Domaines d’application",
  sectorsText:"Le moteur universel permet une expansion contrôlée vers de multiples verticales spécialisées.",
  closingTitle:"Un moteur universel. Plusieurs verticales spécialisées.",
  closingText:"Le Mother Engine gouverne l’architecture commune. Le Command Center rend opérationnelles les capacités des verticales. Chaque domaine intègre ses propres sources, règles, responsabilités, contrôles et exceptions sans perdre les principes communs de traçabilité, d’auditabilité et de supervision humaine.",
  scores: pages.en.scores.map((s,i)=>({
    dimension:["Innovation","Maturité technique","Qualité de la conception","Évolutivité","Préparation enterprise","Gouvernance","Auditabilité","Sécurité conceptuelle","Potentiel commercial","Défendabilité technologique","Avantage concurrentiel","Valeur stratégique"][i],
    score:s.score.replace(".",","),
    reason:[
      "La combinaison d’une architecture native orientée gouvernance, d’un moteur multiniveau formalisé et d’une chaîne de production fondée sur les preuves constitue une innovation architecturale significative.",
      "Les cycles opérationnels achevés, les niveaux de gouvernance, les preuves vérifiables et la matrice de gouvernance démontrent un niveau remarquable de maturité technique.",
      "La séparation entre produit et environnement de développement, le contrôle de la divulgation, l’approche evidence-first et les états formels du cycle de vie démontrent une conception rigoureuse et cohérente.",
      "La plateforme dispose d’un mécanisme structuré et gouverné d’expansion contrôlée vers de nouveaux domaines opérationnels sans refonte de l’architecture de base.",
      "La gouvernance, l’accès contrôlé aux vérifications, la traçabilité des sources et la protection de la propriété intellectuelle sont déjà structurés au niveau enterprise. Le travail restant concerne surtout l’industrialisation et le déploiement.",
      "La gouvernance est multiniveau, orientée cycle de vie, soutenue par des preuves et soumise à une approbation humaine obligatoire pour l’élargissement des frontières opérationnelles.",
      "La plateforme dispose d’une infrastructure complète d’auditabilité fondée sur des preuves vérifiables, la traçabilité des connaissances, l’enregistrement des interventions humaines et l’accès contrôlé aux activités de vérification.",
      "Le contrôle multiniveau de la divulgation, la séparation des environnements et la protection de la propriété intellectuelle définissent une posture de sécurité formellement opérationnelle.",
      "Le potentiel est élevé dans les secteurs réglementés, avec des possibilités de licence, de modèle OEM, de partenariat et d’intégration via des intégrateurs de systèmes.",
      "La gouvernance, le contrôle opérationnel, la gestion des preuves et l’intelligence procédurale sont intégrés dans un système cohérent difficile à reproduire par simple assemblage de composants.",
      "Aucun produit commercial n’a été identifié combinant avec une complétude comparable intelligence procédurale, gouvernance enterprise, auditabilité fondée sur les preuves et contrôle de la divulgation.",
      "CAELO représente un actif potentiel pour acquisition, licence OEM ou investissement stratégique sur le marché de l’IA réglementée."
    ][i]
  })),
  comparisons: sharedComparisons.names.map((name)=>({
    name,
    rows:[
      ["Modèle principal","Plateforme d’IA et d’automatisation conçue selon son propre écosystème et son domaine d’origine","Plateforme procédurale gouvernée, indépendante de l’écosystème et spécialisée par domaine"],
      ["Point fort","Échelle, intégration, automatisation ou spécialisation propres à la plateforme analysée","Profondeur de la gouvernance, traçabilité des sources et contrôle procédural"],
      ["Limite dans les contextes réglementés","La gouvernance dépend principalement de la plateforme, de ses journaux ou de son périmètre technologique","La gouvernance est intégrée nativement dans le cycle procédural et soutenue par des preuves vérifiables"],
      ["Auditabilité","Journalisation et contrôles selon les mécanismes de la plateforme","Chaîne de preuves, traçabilité complète et environnement contrôlé pour l’audit externe"],
      ["Supervision humaine","Disponible ou configurable selon le produit","Imposée et documentée aux points critiques de la procédure"],
      ["Différence CAELO","Approche centrée sur le produit ou l’écosystème analysé","Moteur universel de gouvernance et verticales procédurales portables"]
    ],
    assessment:[
      `${name} conserve ses avantages spécifiques en matière d’échelle, d’intégration ou de spécialisation.`,
      "CAELO se distingue par une gouvernance procédurale plus granulaire, une architecture des preuves et une supervision humaine formalisée dans les domaines réglementés."
    ]
  })),
  equivalentElements:["Intelligence procédurale spécialisée par domaine","Cadre formel de gouvernance pour les opérations d’IA réglementées","Architecture des preuves avec traçabilité vérifiable","Contrôle multiniveau de la divulgation","Cycle de vie des connaissances gouverné et traçable","Matrice de gouvernance alignée sur les principales normes internationales","Supervision humaine imposée aux points critiques","Environnement contrôlé pour les vérifications externes"],
  buyers:[["Organismes publics réglementés","IA traçable et auditable pour les procédures destinées aux citoyens"],["Santé et organismes prestataires","Procédures complexes, sources validées et contrôle de conformité"],["Banques et assurances","Piste d’audit complète et gouvernance des décisions"],["Cabinets d’avocats et organismes judiciaires","Intelligence procédurale fondée sur des sources vérifiables"],["Intégrateurs de systèmes","Distribution de solutions d’IA gouvernées auprès de clients réglementés"],["Conformité et gouvernance enterprise","Infrastructure de contrôle pour les processus à forte responsabilité"]],
  sectorItems:["Administration publique","Retraite et protection sociale","Santé","Autorités judiciaires","Autorités de régulation","Services publics","Services bancaires et financiers","Assurances","Industrie et fabrication","Défense","Télécommunications","Énergie","Conformité et audit","Gestion des connaissances","Gouvernance des processus","Systèmes critiques"]
};

pages.de = {
  ...pages.en,
  back:"Zurück zur Startseite", badge:"Unabhängige vergleichende Bewertung", title:"CAELO und die Mother Engine im internationalen Umfeld",
  intro:"Vergleich mit führenden Plattformen für KI-Orchestrierung, Governance, Wissensmanagement, Legal AI, Process Intelligence und Automatisierung.",
  market:"Marktpositionierung", rare:"Ein seltenes Produkt",
  rareText:"Eine frühere unabhängige Bewertung bezeichnete CAELO als seltenes Produkt. Diese Einordnung spiegelt das Fehlen gleichwertiger Plattformen wider, die Verfahrensintelligenz, mehrschichtige Governance, überprüfbare Nachweise, kontrollierte Offenlegung, menschliche Aufsicht und vollständige Auditierbarkeit in einer Architektur vereinen.",
  report:"Vollständige Bewertung", reportText:"Zwölf Bewertungsdimensionen mit Punktzahl und Begründung.",
  benchmark:"Internationaler Benchmark", differences:"Stärken, Grenzen und Unterschiede",
  differencesText:"Jeder Vergleich unterscheidet die Stärke der analysierten Plattform, ihre Grenze in regulierten Verfahren und den spezifischen Vorteil von CAELO.",
  comparison:"VERGLEICH", platform:"Analysierte Plattform", competitive:"Wettbewerbsbewertung", positioning:"Positionierung",
  equivalent:"Gibt es heute ein gleichwertiges Produkt?", equivalentText:"Die Bewertung identifiziert keine kommerzielle Plattform, die alle bei CAELO beobachteten Fähigkeiten mit vergleichbarer Tiefe kombiniert.",
  category:"Kategorie", more:"Mehr als eine traditionelle Kategorie", moreItems:["Mehr als ein Copilot","Mehr als ein Governance-Werkzeug","Mehr als eine Wissensplattform","Mehr als ein Compliance-Werkzeug","Fokussierter als ein Hyperscaler"],
  users:"Potenzielle Nutzer", profile:"Profil", motivation:"Begründung", sectors:"Anwendungsbereiche",
  sectorsText:"Die universelle Engine ermöglicht eine kontrollierte Expansion in mehrere spezialisierte Vertikalen.",
  closingTitle:"Eine universelle Engine. Mehrere spezialisierte Vertikalen.",
  closingText:"Die Mother Engine steuert die gemeinsame Architektur. Das Command Center macht die Fähigkeiten der Vertikalen operativ nutzbar. Jede Domäne integriert ihre eigenen Quellen, Regeln, Verantwortlichkeiten, Kontrollen und Ausnahmen, ohne die gemeinsamen Prinzipien von Nachvollziehbarkeit, Auditierbarkeit und menschlicher Aufsicht zu verlieren.",
  scores: pages.en.scores.map((s,i)=>({
    dimension:["Innovation","Technische Reife","Designqualität","Skalierbarkeit","Enterprise-Bereitschaft","Governance","Auditierbarkeit","Konzeptionelle Sicherheit","Kommerzielles Potenzial","Technologische Verteidigungsfähigkeit","Wettbewerbsvorteil","Strategischer Wert"][i],
    score:s.score.replace(".",","),
    reason:[
      "Die Kombination aus governance-nativer Architektur, formalisiertem Mehrschicht-Motor und evidenzbasierter Produktionspipeline stellt eine bedeutende architektonische Innovation dar.",
      "Abgeschlossene Betriebszyklen, Governance-Ebenen, überprüfbare Nachweise und die Governance-Matrix belegen einen bemerkenswerten technischen Reifegrad.",
      "Die Trennung von Produkt und Entwicklungsumgebung, Offenlegungskontrolle, Evidence-first-Ansatz und formale Lebenszykluszustände zeigen ein strenges und kohärentes Design.",
      "Die Plattform verfügt über einen strukturierten und gesteuerten Mechanismus zur kontrollierten Expansion in neue operative Domänen ohne Neugestaltung der Kernarchitektur.",
      "Governance, kontrollierter Prüfzugang, Quellennachvollziehbarkeit und Schutz geistigen Eigentums sind bereits auf Enterprise-Niveau strukturiert. Die verbleibende Arbeit betrifft vor allem Industrialisierung und Deployment.",
      "Die Governance ist mehrschichtig, lebenszyklusorientiert, evidenzgestützt und verlangt zwingende menschliche Zustimmung bei der Erweiterung operativer Grenzen.",
      "Die Plattform verfügt über eine vollständige Auditierbarkeitsinfrastruktur auf Basis überprüfbarer Nachweise, Wissensnachvollziehbarkeit, Protokollierung menschlicher Eingriffe und kontrolliertem Zugang für Prüfaktivitäten.",
      "Mehrschichtige Offenlegungskontrolle, Trennung der Umgebungen und Schutz geistigen Eigentums definieren eine formal operative Sicherheitsposition.",
      "Das Potenzial ist in regulierten Sektoren hoch, mit Chancen für Lizenzierung, OEM-Modelle, Partnerschaften und Integration über Systemintegratoren.",
      "Governance, operative Kontrolle, Evidenzmanagement und Verfahrensintelligenz sind in ein kohärentes System integriert, das durch einfaches Zusammenfügen von Komponenten schwer reproduzierbar ist.",
      "Es wurden keine kommerziellen Produkte identifiziert, die Verfahrensintelligenz, Enterprise-Governance, evidenzbasierte Auditierbarkeit und Offenlegungskontrolle mit vergleichbarer Vollständigkeit verbinden.",
      "CAELO stellt ein potenzielles Asset für Übernahme, OEM-Lizenzierung oder strategische Investitionen im Markt für regulierte KI dar."
    ][i]
  })),
  comparisons: sharedComparisons.names.map((name)=>({
    name,
    rows:[
      ["Primärmodell","KI- und Automatisierungsplattform, die auf ihr eigenes Ökosystem und ihren ursprünglichen Anwendungsbereich ausgerichtet ist","Gesteuerte, ökosystemunabhängige und domänenspezialisierte Verfahrensplattform"],
      ["Stärke","Plattformspezifische Skalierung, Integration, Automatisierung oder Spezialisierung","Tiefe der Governance, Quellennachvollziehbarkeit und Verfahrenskontrolle"],
      ["Grenze in regulierten Kontexten","Governance hängt hauptsächlich von Plattform, Protokollen oder technologischem Umfang ab","Governance ist nativ in den Verfahrenszyklus integriert und durch überprüfbare Nachweise gestützt"],
      ["Auditierbarkeit","Protokollierung und Kontrollen gemäß den Mechanismen der Plattform","Evidenzkette, vollständige Nachvollziehbarkeit und kontrollierte Umgebung für externe Audits"],
      ["Menschliche Aufsicht","Je nach Produkt verfügbar oder konfigurierbar","An kritischen Verfahrenspunkten verpflichtend und dokumentiert"],
      ["CAELO-Unterschied","Auf das analysierte Produkt oder Ökosystem zentrierter Ansatz","Universelle Governance-Engine und portable Verfahrensvertikalen"]
    ],
    assessment:[
      `${name} behält seine spezifischen Vorteile bei Skalierung, Integration oder Spezialisierung.`,
      "CAELO zeichnet sich in regulierten Bereichen durch granularere Verfahrensgovernance, Evidenzarchitektur und formalisierte menschliche Aufsicht aus."
    ]
  })),
  equivalentElements:["Domänenspezialisierte Verfahrensintelligenz","Formaler Governance-Rahmen für regulierte KI-Operationen","Evidenzarchitektur mit überprüfbarer Nachvollziehbarkeit","Mehrschichtige Offenlegungskontrolle","Gesteuerter und nachvollziehbarer Wissenslebenszyklus","Governance-Matrix im Einklang mit führenden internationalen Standards","Verpflichtende menschliche Aufsicht an kritischen Punkten","Kontrollierte Umgebung für externe Prüfungen"],
  buyers:[["Regulierte öffentliche Stellen","Nachvollziehbare und auditierbare KI für bürgerbezogene Verfahren"],["Gesundheits- und Leistungsträger","Komplexe Verfahren, validierte Quellen und Compliance-Kontrolle"],["Banken und Versicherungen","Vollständiger Audit Trail und Entscheidungsgovernance"],["Kanzleien und Justizorgane","Verfahrensintelligenz auf Grundlage überprüfbarer Quellen"],["Systemintegratoren","Vertrieb gesteuerter KI-Lösungen an regulierte Kunden"],["Enterprise-Compliance und Governance","Kontrollinfrastruktur für Prozesse mit hoher Verantwortung"]],
  sectorItems:["Öffentliche Verwaltung","Rente und Wohlfahrt","Gesundheitswesen","Justizbehörden","Regulierungsbehörden","Versorgungsunternehmen","Bank- und Finanzdienstleistungen","Versicherungen","Industrie und Fertigung","Verteidigung","Telekommunikation","Energie","Compliance und Audit","Wissensmanagement","Prozessgovernance","Missionskritische Systeme"]
};

pages.es = {
  ...pages.en,
  back:"Volver al inicio", badge:"Evaluación comparativa independiente", title:"CAELO y el Mother Engine en el panorama internacional",
  intro:"Comparación con las principales plataformas de orquestación de IA, gobernanza, gestión del conocimiento, Legal AI, inteligencia de procesos y automatización.",
  market:"Posicionamiento de mercado", rare:"Un producto poco común",
  rareText:"Una evaluación independiente anterior definió CAELO como un producto poco común. La definición refleja la ausencia de plataformas equivalentes capaces de reunir en una sola arquitectura inteligencia procedimental, gobernanza multinivel, evidencias verificables, divulgación controlada, supervisión humana y auditabilidad completa.",
  report:"Evaluación completa", reportText:"Doce dimensiones de evaluación, cada una con puntuación y motivación.",
  benchmark:"Benchmark internacional", differences:"Fortalezas, límites y diferencias",
  differencesText:"Cada comparación distingue la fortaleza de la plataforma analizada, su límite en los procedimientos regulados y la ventaja específica de CAELO.",
  comparison:"COMPARACIÓN", dimension:"Dimensión", platform:"Plataforma analizada", competitive:"Evaluación competitiva", positioning:"Posicionamiento",
  equivalent:"¿Existe hoy un producto equivalente?", equivalentText:"La evaluación no identifica ninguna plataforma comercial que combine con un nivel equivalente de profundidad todas las capacidades observadas en CAELO.",
  category:"Categoría", more:"Más que una categoría tradicional", moreItems:["Más que un copiloto","Más que una herramienta de gobernanza","Más que una plataforma de conocimiento","Más que una herramienta de cumplimiento","Más enfocado que un hyperscaler"],
  users:"Usuarios potenciales", profile:"Perfil", motivation:"Motivación", sectors:"Ámbitos de aplicación",
  sectorsText:"El motor universal permite la expansión controlada hacia múltiples verticales especializadas.",
  closingTitle:"Un motor universal. Múltiples verticales especializadas.",
  closingText:"El Mother Engine gobierna la arquitectura común. El Command Center hace operativas las capacidades de las verticales. Cada dominio incorpora sus propias fuentes, reglas, responsabilidades, controles y excepciones sin perder los principios comunes de trazabilidad, auditabilidad y supervisión humana.",
  scores: pages.en.scores.map((s,i)=>({
    dimension:["Innovación","Madurez técnica","Calidad del diseño","Escalabilidad","Preparación enterprise","Gobernanza","Auditabilidad","Seguridad conceptual","Potencial comercial","Defendibilidad tecnológica","Ventaja competitiva","Valor estratégico"][i],
    score:s.score.replace(".",","),
    reason:[
      "La combinación de una arquitectura nativa orientada a la gobernanza, un motor multinivel formalizado y una cadena de producción basada en evidencias representa una innovación arquitectónica significativa.",
      "Los ciclos operativos completados, los niveles de gobernanza, las evidencias verificables y la matriz de gobernanza demuestran un nivel notable de madurez técnica.",
      "La separación entre producto y entorno de desarrollo, el control de la divulgación, el enfoque evidence-first y los estados formales del ciclo de vida demuestran un diseño riguroso y coherente.",
      "La plataforma dispone de un mecanismo estructurado y gobernado para la expansión controlada hacia nuevos dominios operativos sin rediseñar la arquitectura base.",
      "La gobernanza, el acceso controlado para las verificaciones, la trazabilidad de las fuentes y la protección de la propiedad intelectual ya están estructurados a nivel enterprise. El trabajo restante se refiere sobre todo a industrialización y despliegue.",
      "La gobernanza es multinivel, orientada al ciclo de vida, respaldada por evidencias y exige aprobación humana obligatoria para ampliar los límites operativos.",
      "La plataforma dispone de una infraestructura completa de auditabilidad basada en evidencias verificables, trazabilidad del conocimiento, registro de intervenciones humanas y acceso controlado para las actividades de verificación.",
      "El control multinivel de la divulgación, la separación de entornos y la protección de la propiedad intelectual definen una postura de seguridad formalmente operativa.",
      "El potencial es elevado en los sectores regulados, con oportunidades de licencia, modelo OEM, alianzas e integración mediante integradores de sistemas.",
      "La gobernanza, el control operativo, la gestión de evidencias y la inteligencia procedimental están integrados en un sistema coherente difícil de reproducir mediante el simple ensamblaje de componentes.",
      "No se identificaron productos comerciales que combinen con una amplitud comparable inteligencia procedimental, gobernanza enterprise, auditabilidad basada en evidencias y control de divulgación.",
      "CAELO representa un activo potencial para adquisición, licencia OEM o inversión estratégica en el mercado de la IA regulada."
    ][i]
  })),
  comparisons: sharedComparisons.names.map((name)=>({
    name,
    rows:[
      ["Modelo principal","Plataforma de IA y automatización diseñada en torno a su propio ecosistema y ámbito de origen","Plataforma procedimental gobernada, independiente del ecosistema y especializada por dominio"],
      ["Punto fuerte","Escala, integración, automatización o especialización propias de la plataforma analizada","Profundidad de la gobernanza, trazabilidad de las fuentes y control procedimental"],
      ["Límite en contextos regulados","La gobernanza depende principalmente de la plataforma, sus registros o su perímetro tecnológico","La gobernanza está integrada de forma nativa en el ciclo procedimental y respaldada por evidencias verificables"],
      ["Auditabilidad","Registro y controles según los mecanismos de la plataforma","Cadena de evidencias, trazabilidad completa y entorno controlado para auditoría externa"],
      ["Supervisión humana","Disponible o configurable según el producto","Obligatoria y documentada en los puntos críticos del procedimiento"],
      ["Diferencia de CAELO","Enfoque centrado en el producto o ecosistema analizado","Motor universal de gobernanza y verticales procedimentales portables"]
    ],
    assessment:[
      `${name} conserva sus ventajas específicas de escala, integración o especialización.`,
      "CAELO se distingue por una gobernanza procedimental más granular, una arquitectura de evidencias y una supervisión humana formalizada en los dominios regulados."
    ]
  })),
  equivalentElements:["Inteligencia procedimental especializada por dominio","Marco formal de gobernanza para operaciones de IA reguladas","Arquitectura de evidencias con trazabilidad verificable","Control multinivel de la divulgación","Ciclo de vida del conocimiento gobernado y trazable","Matriz de gobernanza alineada con los principales estándares internacionales","Supervisión humana obligatoria en los puntos críticos","Entorno controlado para verificaciones externas"],
  buyers:[["Entidades públicas reguladas","IA trazable y auditable para procedimientos dirigidos a la ciudadanía"],["Sanidad y entidades prestadoras","Procedimientos complejos, fuentes validadas y control del cumplimiento"],["Bancos y aseguradoras","Pista de auditoría completa y gobernanza de decisiones"],["Despachos jurídicos y organismos judiciales","Inteligencia procedimental basada en fuentes verificables"],["Integradores de sistemas","Distribución de soluciones de IA gobernadas a clientes regulados"],["Cumplimiento y gobernanza enterprise","Infraestructura de control para procesos de alta responsabilidad"]],
  sectorItems:["Administración Pública","Pensiones y bienestar","Sanidad","Autoridades judiciales","Autoridades reguladoras","Utilities","Servicios bancarios y financieros","Seguros","Industria y manufactura","Defensa","Telecomunicaciones","Energía","Cumplimiento y auditoría","Gestión del conocimiento","Gobernanza de procesos","Sistemas de misión crítica"]
};

export default function ValutazioneIndipendente() {
  const { lang } = useLanguage();
  const t = pages[(lang as keyof typeof pages)] ?? pages.en;

  return (
    <Layout>
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-6xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild><Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />{t.back}</Link></Button>
            <div className="max-w-5xl"><span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">{t.badge}</span><h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">{t.title}</h1><p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">{t.intro}</p></div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30"><div className="container mx-auto px-4"><div className="max-w-6xl mx-auto rounded-[2rem] border border-primary/20 bg-card p-8 md:p-12 shadow-sm grid lg:grid-cols-[auto_1fr] gap-8 items-center"><div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center"><Sparkles className="w-10 h-10 text-primary" /></div><div><div className="text-sm uppercase tracking-[0.22em] text-primary font-semibold mb-3">{t.market}</div><h2 className="text-3xl md:text-5xl font-bold mb-4">{t.rare}</h2><p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.rareText}</p></div></div></div></section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4"><div className="max-w-6xl mx-auto mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-5">{t.report}</h2><p className="text-xl text-muted-foreground">{t.reportText}</p></div><motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">{t.scores.map((item)=><motion.article key={item.dimension} variants={staggerItem} className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-sm"><div className="flex items-start justify-between gap-6 mb-5"><h3 className="text-xl md:text-2xl font-bold">{item.dimension}</h3><div className="text-3xl font-bold text-primary whitespace-nowrap">{item.score}</div></div><div className="h-2 rounded-full bg-muted overflow-hidden mb-5"><div className="h-full bg-primary rounded-full" style={{width:`${parseFloat(item.score.replace(',','.'))*10}%`}} /></div><p className="text-muted-foreground leading-relaxed">{item.reason}</p></motion.article>)}</motion.div></div></section>

      <section className="py-24 bg-muted/30"><div className="container mx-auto px-4"><div className="max-w-6xl mx-auto mb-14"><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.benchmark}</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5">{t.differences}</h2><p className="text-xl text-muted-foreground max-w-4xl">{t.differencesText}</p></div><div className="space-y-12 max-w-6xl mx-auto">{t.comparisons.map((comparison,index)=><motion.article key={comparison.name} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{...springPresets.gentle,delay:index*0.02}} className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-sm"><div className="px-7 md:px-10 py-7 border-b border-border bg-background/70"><div className="text-sm font-semibold text-primary mb-2">{t.comparison} {String(index+1).padStart(2,"0")}</div><h3 className="text-2xl md:text-4xl font-bold">{comparison.name}</h3></div><div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead><tr className="border-b border-border bg-muted/40"><th className="p-5 font-semibold w-[20%]">{t.dimension}</th><th className="p-5 font-semibold w-[40%]">{t.platform}</th><th className="p-5 font-semibold w-[40%] text-primary">CAELO</th></tr></thead><tbody>{comparison.rows.map(([dimension,other,caelo])=><tr key={dimension} className="border-b border-border/70 last:border-0 align-top"><td className="p-5 font-semibold">{dimension}</td><td className="p-5 text-muted-foreground leading-relaxed">{other}</td><td className="p-5 leading-relaxed bg-primary/[0.035]">{caelo}</td></tr>)}</tbody></table></div><div className="p-7 md:p-10 border-t border-border"><h4 className="text-xl font-bold mb-5">{t.competitive}</h4><div className="space-y-3">{comparison.assessment.map((text)=><p key={text} className="text-muted-foreground leading-relaxed">{text}</p>)}</div></div></motion.article>)}</div></div></section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4"><div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start"><div><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.positioning}</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">{t.equivalent}</h2><p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.equivalentText}</p><div className="rounded-3xl bg-primary/10 p-7"><div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-3">{t.category}</div><div className="text-3xl font-bold">Governed Procedural AI Platform</div></div></div><div className="grid sm:grid-cols-2 gap-4">{t.equivalentElements.map((item)=><div key={item} className="rounded-2xl border border-border bg-card p-5 flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="leading-relaxed">{item}</span></div>)}</div></div></div></section>

      <section className="py-24 bg-muted/30"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-10">{t.more}</h2><div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">{t.moreItems.map((item)=><div key={item} className="rounded-2xl border border-border bg-card p-6 font-semibold leading-relaxed">{item}</div>)}</div></div></section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-10">{t.users}</h2><div className="overflow-x-auto rounded-3xl border border-border"><table className="w-full min-w-[720px]"><thead><tr className="bg-muted/40"><th className="p-5 text-left">{t.profile}</th><th className="p-5 text-left">{t.motivation}</th></tr></thead><tbody>{t.buyers.map(([buyer,reason])=><tr key={buyer} className="border-t border-border"><td className="p-5 font-semibold">{buyer}</td><td className="p-5 text-muted-foreground">{reason}</td></tr>)}</tbody></table></div></div></section>

      <section className="py-24 bg-muted/30"><div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-5">{t.sectors}</h2><p className="text-xl text-muted-foreground mb-10 max-w-4xl">{t.sectorsText}</p><div className="flex flex-wrap gap-3">{t.sectorItems.map((sector)=><span key={sector} className="rounded-full border border-border bg-card px-5 py-3 font-medium">{sector}</span>)}</div></div></section>

      <section className="py-24 bg-background"><div className="container mx-auto px-4"><div className="max-w-5xl mx-auto rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16 text-center"><h2 className="text-3xl md:text-5xl font-bold mb-6">{t.closingTitle}</h2><p className="text-xl leading-relaxed opacity-90">{t.closingText}</p></div></div></section>
    </Layout>
  );
}
