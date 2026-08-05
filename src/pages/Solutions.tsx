import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

type Vertical = {
  slug: string;
  category: string;
  title: string;
  description: string;
  procedural: string;
  software: string;
  subtitle?: string;
  status?: string;
  featured?: boolean;
};

const copy = {
  it: {
    heroTitle: "Soluzioni CAELO",
    heroText:
      "Verticali specialistici costruiti sulla stessa architettura universale di governance procedurale. Ogni soluzione mantiene fonti, regole, ruoli, controlli ed eccezioni specifici del proprio dominio.",
    introLabel: "Verticali di dominio",
    introTitle: "Dalla progettazione procedurale all’implementazione software",
    introText:
      "Per ogni verticale distinguiamo chiaramente l’architettura procedurale — fonti, regole, ruoli, stati, controlli, eccezioni e responsabilità — dalla successiva implementazione tecnica.",
    proceduralLabel: "Architettura procedurale",
    softwareLabel: "Implementazione software",
    explore: "Scopri il verticale",
    study: "Approfondisci l’area di studio",

    flagshipLabel: "Soluzione operativa",
    flagshipTitle: "Il verticale più maturo dell’ecosistema CAELO",
    readyLabel: "Verticali validati o pronti per l’implementazione",
    readyTitle: "Architetture già definite, verificabili e sviluppabili con clienti o partner",
    studyLabel: "Verticali in studio e progettazione",
    studyTitle: "Domini in fase di definizione e consolidamento metodologico",

    flagship: {
      slug: "passweb",
      category: "Previdenza e posizione assicurativa",
      title: "CAELO PassWeb",
      status: "Software operativo",
      featured: true,
      description:
        "Il primo verticale completo di CAELO, utilizzato come stress test interno su un procedimento amministrativo complesso, documentale e ad alta responsabilità operativa.",
      procedural: "Completa e sottoposta a verifica interna",
      software: "Completata e sottoposta a test interni",
    } satisfies Vertical,

    ready: [
      {
        slug: "previdenza-spagna",
        category: "Previdenza internazionale",
        title: "CAELO Previdenza Assicurativa Spagnola",
        status: "Disponibile per co-progettazione e implementazione",
        description:
          "Architettura procedurale dedicata ai procedimenti previdenziali e assicurativi nel contesto spagnolo, pronta per essere sviluppata con un cliente o partner di dominio.",
        procedural: "Completa e pronta per l’implementazione",
        software: "Da sviluppare sul caso d’uso e sul contesto operativo",
      },
      {
        slug: "accesso-civico",
        category: "Procedimenti amministrativi",
        title: "CAELO Accesso Civico Semplice",
        status: "Architettura definita",
        description:
          "Un verticale dedicato a un procedimento breve e regolato, con termini, ruoli, controlli, eccezioni e responsabilità chiaramente identificabili.",
        procedural: "Definita e disponibile per implementazione",
        software: "Da sviluppare con ente o partner",
      },
      {
        slug: "mepa",
        category: "Procurement pubblico",
        title: "CAELO Appalti sotto soglia / MePA",
        status: "Disponibile per co-progettazione e deployment",
        description:
          "Un verticale per governare affidamenti, soglie, condizioni, documenti, passaggi autorizzativi, eccezioni e responsabilità. Supporta il RUP nella tracciabilità delle attività, nella verifica dei passaggi e nella gestione coerente delle fonti e dei vincoli del procedimento.",
        procedural: "Completa e verificata internamente attraverso casi di test",
        software: "Verticale disponibile per co-progettazione e deployment con cliente o partner",
      },
    ] satisfies Vertical[],

    studies: [
      {
        slug: "foresight",
        category: "Strategic Foresight",
        title: "CAELO Strategic Foresight",
        status: "In studio — architettura procedurale in consolidamento",
        description:
          "Il verticale Strategic Foresight è attualmente in fase di studio, definizione e progressivo consolidamento dell’architettura procedurale. Sono in corso l’individuazione delle fonti, degli attori, degli indicatori, delle assunzioni, dei vincoli e dei passaggi di validazione necessari a strutturare il dominio.",
        procedural: "In fase di studio, definizione e consolidamento",
        software: "Non avviata",
      },
      {
        slug: "societario",
        category: "Diritto societario",
        title: "CAELO Societario",
        subtitle: "Governance e ricostruzione del fascicolo societario",
        status: "Verticale in fase di studio e progettazione",
        description:
          "Applicazione futura della governance procedurale CAELO all’attività istruttoria e documentale del professionista societario, mantenendo sempre l’avvocato al centro della decisione.",
        procedural: "In fase di studio e progettazione",
        software: "Non avviata",
      },
    ] satisfies Vertical[],

    custom: {
      label: "Verticale personalizzato",
      title: "Hai un procedimento specifico da governare?",
      text:
        "L’architettura modulare di CAELO consente di modellare nuovi verticali a partire da fonti, regole, ruoli, controlli, eccezioni e responsabilità del dominio.",
      cta: "Richiedi una valutazione di fattibilità",
    },
    final: {
      title: "Costruiamo il verticale sul procedimento reale, non su un flusso astratto.",
      text:
        "Confrontiamoci sulle fonti, sui vincoli, sugli attori e sui requisiti di governance del tuo contesto operativo.",
      cta: "Avvia un confronto",
    },
  },

  en: {
    heroTitle: "CAELO Solutions",
    heroText:
      "Specialist verticals built on the same universal procedural governance architecture. Each solution preserves the sources, rules, roles, controls and exceptions specific to its domain.",
    introLabel: "Domain verticals",
    introTitle: "From procedural design to software implementation",
    introText:
      "For each vertical, we clearly distinguish procedural architecture — sources, rules, roles, states, controls, exceptions and responsibilities — from subsequent technical implementation.",
    proceduralLabel: "Procedural architecture",
    softwareLabel: "Software implementation",
    explore: "Explore the vertical",
    study: "Explore the study area",

    flagshipLabel: "Operational solution",
    flagshipTitle: "The most mature vertical in the CAELO ecosystem",
    readyLabel: "Validated or implementation-ready verticals",
    readyTitle: "Architectures already defined, verifiable and developable with clients or partners",
    studyLabel: "Verticals under study and design",
    studyTitle: "Domains undergoing methodological definition and consolidation",

    flagship: {
      slug: "passweb",
      category: "Pensions and insurance records",
      title: "CAELO PassWeb",
      status: "Operational software",
      featured: true,
      description:
        "CAELO’s first complete vertical, used as an internal stress test on a complex, document-intensive administrative procedure with high operational responsibility.",
      procedural: "Complete and internally reviewed",
      software: "Completed and internally tested",
    } satisfies Vertical,

    ready: [
      {
        slug: "previdenza-spagna",
        category: "International social security",
        title: "CAELO Spanish Social Security and Insurance",
        status: "Available for co-design and implementation",
        description:
          "A procedural architecture dedicated to social security and insurance procedures in the Spanish context, ready to be developed with a client or domain partner.",
        procedural: "Complete and ready for implementation",
        software: "To be developed for the use case and operating context",
      },
      {
        slug: "accesso-civico",
        category: "Administrative procedures",
        title: "CAELO Simple Civic Access",
        status: "Architecture defined",
        description:
          "A vertical dedicated to a short, regulated procedure with clearly identifiable deadlines, roles, controls, exceptions and responsibilities.",
        procedural: "Defined and available for implementation",
        software: "To be developed with a public body or partner",
      },
      {
        slug: "mepa",
        category: "Public procurement",
        title: "CAELO Below-threshold Procurement / MePA",
        status: "Available for co-design and deployment",
        description:
          "A vertical for governing awards, thresholds, conditions, documents, authorisation steps, exceptions and responsibilities. It supports the project officer in activity traceability, step verification and consistent management of procedural sources and constraints.",
        procedural: "Complete and internally verified through test cases",
        software: "Available for co-design and deployment with a client or partner",
      },
    ] satisfies Vertical[],

    studies: [
      {
        slug: "foresight",
        category: "Strategic Foresight",
        title: "CAELO Strategic Foresight",
        status: "Under study — procedural architecture being consolidated",
        description:
          "The Strategic Foresight vertical is currently under study, definition and progressive consolidation of its procedural architecture. Sources, actors, indicators, assumptions, constraints and validation steps required to structure the domain are being identified.",
        procedural: "Under study, definition and consolidation",
        software: "Not started",
      },
      {
        slug: "societario",
        category: "Company law",
        title: "CAELO Corporate",
        subtitle: "Governance and reconstruction of the corporate file",
        status: "Vertical under study and design",
        description:
          "A future application of CAELO procedural governance to the investigative and documentary work of corporate-law professionals, always keeping the lawyer at the centre of the decision.",
        procedural: "Under study and design",
        software: "Not started",
      },
    ] satisfies Vertical[],

    custom: {
      label: "Custom vertical",
      title: "Do you have a specific procedure to govern?",
      text:
        "CAELO’s modular architecture enables new verticals to be modelled from the sources, rules, roles, controls, exceptions and responsibilities of the domain.",
      cta: "Request a feasibility assessment",
    },
    final: {
      title: "We build the vertical around the real procedure, not an abstract workflow.",
      text:
        "Let us discuss the sources, constraints, actors and governance requirements of your operating context.",
      cta: "Start a conversation",
    },
  },

  fr: {
    heroTitle: "Solutions CAELO",
    heroText:
      "Des verticales spécialisées construites sur la même architecture universelle de gouvernance procédurale. Chaque solution conserve les sources, règles, rôles, contrôles et exceptions propres à son domaine.",
    introLabel: "Verticales de domaine",
    introTitle: "De la conception procédurale à l’implémentation logicielle",
    introText:
      "Pour chaque verticale, nous distinguons clairement l’architecture procédurale — sources, règles, rôles, états, contrôles, exceptions et responsabilités — de l’implémentation technique ultérieure.",
    proceduralLabel: "Architecture procédurale",
    softwareLabel: "Implémentation logicielle",
    explore: "Découvrir la verticale",
    study: "Approfondir le domaine d’étude",

    flagshipLabel: "Solution opérationnelle",
    flagshipTitle: "La verticale la plus mature de l’écosystème CAELO",
    readyLabel: "Verticales validées ou prêtes pour l’implémentation",
    readyTitle: "Architectures déjà définies, vérifiables et développables avec des clients ou partenaires",
    studyLabel: "Verticales en étude et conception",
    studyTitle: "Domaines en phase de définition et de consolidation méthodologique",

    flagship: {
      slug: "passweb",
      category: "Retraite et situation assurantielle",
      title: "CAELO PassWeb",
      status: "Logiciel opérationnel",
      featured: true,
      description:
        "La première verticale complète de CAELO, utilisée comme test de résistance interne sur une procédure administrative complexe, documentaire et à forte responsabilité opérationnelle.",
      procedural: "Complète et soumise à vérification interne",
      software: "Achevée et soumise à des tests internes",
    } satisfies Vertical,

    ready: [
      {
        slug: "previdenza-spagna",
        category: "Protection sociale internationale",
        title: "CAELO Protection sociale et assurance espagnoles",
        status: "Disponible pour co-conception et implémentation",
        description:
          "Architecture procédurale consacrée aux procédures de protection sociale et d’assurance dans le contexte espagnol, prête à être développée avec un client ou un partenaire de domaine.",
        procedural: "Complète et prête pour l’implémentation",
        software: "À développer selon le cas d’usage et le contexte opérationnel",
      },
      {
        slug: "accesso-civico",
        category: "Procédures administratives",
        title: "CAELO Accès civique simple",
        status: "Architecture définie",
        description:
          "Une verticale consacrée à une procédure courte et réglementée, avec des délais, rôles, contrôles, exceptions et responsabilités clairement identifiables.",
        procedural: "Définie et disponible pour implémentation",
        software: "À développer avec une administration ou un partenaire",
      },
      {
        slug: "mepa",
        category: "Marchés publics",
        title: "CAELO Marchés sous seuil / MePA",
        status: "Disponible pour co-conception et déploiement",
        description:
          "Une verticale pour gouverner attributions, seuils, conditions, documents, étapes d’autorisation, exceptions et responsabilités. Elle soutient le responsable du projet dans la traçabilité des activités, la vérification des étapes et la gestion cohérente des sources et contraintes procédurales.",
        procedural: "Complète et vérifiée en interne au moyen de cas de test",
        software: "Disponible pour co-conception et déploiement avec un client ou partenaire",
      },
    ] satisfies Vertical[],

    studies: [
      {
        slug: "foresight",
        category: "Strategic Foresight",
        title: "CAELO Strategic Foresight",
        status: "En étude — architecture procédurale en consolidation",
        description:
          "La verticale Strategic Foresight est actuellement en phase d’étude, de définition et de consolidation progressive de son architecture procédurale. Les sources, acteurs, indicateurs, hypothèses, contraintes et étapes de validation nécessaires à la structuration du domaine sont en cours d’identification.",
        procedural: "En étude, définition et consolidation",
        software: "Non commencée",
      },
      {
        slug: "societario",
        category: "Droit des sociétés",
        title: "CAELO Sociétaire",
        subtitle: "Gouvernance et reconstitution du dossier sociétaire",
        status: "Verticale en phase d’étude et de conception",
        description:
          "Application future de la gouvernance procédurale CAELO à l’activité d’instruction et de documentation du professionnel du droit des sociétés, en maintenant toujours l’avocat au centre de la décision.",
        procedural: "En phase d’étude et de conception",
        software: "Non commencée",
      },
    ] satisfies Vertical[],

    custom: {
      label: "Verticale personnalisée",
      title: "Avez-vous une procédure spécifique à gouverner ?",
      text:
        "L’architecture modulaire de CAELO permet de modéliser de nouvelles verticales à partir des sources, règles, rôles, contrôles, exceptions et responsabilités du domaine.",
      cta: "Demander une évaluation de faisabilité",
    },
    final: {
      title: "Nous construisons la verticale sur la procédure réelle, pas sur un flux abstrait.",
      text:
        "Échangeons sur les sources, contraintes, acteurs et exigences de gouvernance de votre contexte opérationnel.",
      cta: "Engager un échange",
    },
  },

  de: {
    heroTitle: "CAELO-Lösungen",
    heroText:
      "Spezialisierte Vertikalen auf derselben universellen Architektur der Verfahrensgovernance. Jede Lösung bewahrt die domänenspezifischen Quellen, Regeln, Rollen, Kontrollen und Ausnahmen.",
    introLabel: "Domänenvertikalen",
    introTitle: "Von der Verfahrensgestaltung zur Softwareimplementierung",
    introText:
      "Für jede Vertikale unterscheiden wir klar zwischen Verfahrensarchitektur — Quellen, Regeln, Rollen, Zustände, Kontrollen, Ausnahmen und Verantwortlichkeiten — und anschließender technischer Umsetzung.",
    proceduralLabel: "Verfahrensarchitektur",
    softwareLabel: "Softwareimplementierung",
    explore: "Vertikale entdecken",
    study: "Studienbereich vertiefen",

    flagshipLabel: "Operative Lösung",
    flagshipTitle: "Die ausgereifteste Vertikale im CAELO-Ökosystem",
    readyLabel: "Validierte oder implementierungsbereite Vertikalen",
    readyTitle: "Bereits definierte, überprüfbare und mit Kunden oder Partnern entwickelbare Architekturen",
    studyLabel: "Vertikalen in Studien- und Entwurfsphase",
    studyTitle: "Domänen in methodischer Definition und Konsolidierung",

    flagship: {
      slug: "passweb",
      category: "Rente und Versicherungsposition",
      title: "CAELO PassWeb",
      status: "Operative Software",
      featured: true,
      description:
        "Die erste vollständige CAELO-Vertikale, die als interner Stresstest für ein komplexes, dokumentenintensives Verwaltungsverfahren mit hoher operativer Verantwortung eingesetzt wurde.",
      procedural: "Vollständig und intern geprüft",
      software: "Abgeschlossen und intern getestet",
    } satisfies Vertical,

    ready: [
      {
        slug: "previdenza-spagna",
        category: "Internationale soziale Sicherung",
        title: "CAELO Spanische soziale Sicherung und Versicherung",
        status: "Für Co-Design und Implementierung verfügbar",
        description:
          "Eine Verfahrensarchitektur für Sozialversicherungs- und Versicherungsverfahren im spanischen Kontext, bereit zur Entwicklung mit einem Kunden oder Domänenpartner.",
        procedural: "Vollständig und implementierungsbereit",
        software: "Für den Anwendungsfall und operativen Kontext zu entwickeln",
      },
      {
        slug: "accesso-civico",
        category: "Verwaltungsverfahren",
        title: "CAELO Einfacher Bürgerzugang",
        status: "Architektur definiert",
        description:
          "Eine Vertikale für ein kurzes, geregeltes Verfahren mit klar identifizierbaren Fristen, Rollen, Kontrollen, Ausnahmen und Verantwortlichkeiten.",
        procedural: "Definiert und für Implementierung verfügbar",
        software: "Mit Behörde oder Partner zu entwickeln",
      },
      {
        slug: "mepa",
        category: "Öffentliche Beschaffung",
        title: "CAELO Unterschwellige Vergaben / MePA",
        status: "Für Co-Design und Deployment verfügbar",
        description:
          "Eine Vertikale zur Steuerung von Vergaben, Schwellenwerten, Bedingungen, Dokumenten, Genehmigungsschritten, Ausnahmen und Verantwortlichkeiten. Sie unterstützt die Projektverantwortlichen bei Nachvollziehbarkeit, Prüfung der Verfahrensschritte und konsistenter Verwaltung der Quellen und Vorgaben.",
        procedural: "Vollständig und intern anhand von Testfällen verifiziert",
        software: "Für Co-Design und Deployment mit Kunde oder Partner verfügbar",
      },
    ] satisfies Vertical[],

    studies: [
      {
        slug: "foresight",
        category: "Strategic Foresight",
        title: "CAELO Strategic Foresight",
        status: "In Studie — Verfahrensarchitektur wird konsolidiert",
        description:
          "Die Strategic-Foresight-Vertikale befindet sich derzeit in Studium, Definition und schrittweiser Konsolidierung ihrer Verfahrensarchitektur. Quellen, Akteure, Indikatoren, Annahmen, Einschränkungen und Validierungsschritte zur Strukturierung der Domäne werden ermittelt.",
        procedural: "In Studium, Definition und Konsolidierung",
        software: "Nicht begonnen",
      },
      {
        slug: "societario",
        category: "Gesellschaftsrecht",
        title: "CAELO Gesellschaftsrecht",
        subtitle: "Governance und Rekonstruktion der Gesellschaftsakte",
        status: "Vertikale in Studien- und Entwurfsphase",
        description:
          "Künftige Anwendung der CAELO-Verfahrensgovernance auf die prüfende und dokumentarische Tätigkeit im Gesellschaftsrecht, wobei der Anwalt stets im Mittelpunkt der Entscheidung bleibt.",
        procedural: "In Studien- und Entwurfsphase",
        software: "Nicht begonnen",
      },
    ] satisfies Vertical[],

    custom: {
      label: "Individuelle Vertikale",
      title: "Müssen Sie ein spezifisches Verfahren steuern?",
      text:
        "Mit der modularen Architektur von CAELO lassen sich neue Vertikalen aus den Quellen, Regeln, Rollen, Kontrollen, Ausnahmen und Verantwortlichkeiten der Domäne modellieren.",
      cta: "Machbarkeitsbewertung anfordern",
    },
    final: {
      title: "Wir bauen die Vertikale auf dem realen Verfahren auf, nicht auf einem abstrakten Workflow.",
      text:
        "Lassen Sie uns über Quellen, Einschränkungen, Akteure und Governance-Anforderungen Ihres operativen Kontexts sprechen.",
      cta: "Gespräch beginnen",
    },
  },

  es: {
    heroTitle: "Soluciones CAELO",
    heroText:
      "Verticales especializadas construidas sobre la misma arquitectura universal de gobernanza procedimental. Cada solución mantiene las fuentes, reglas, roles, controles y excepciones específicos de su dominio.",
    introLabel: "Verticales de dominio",
    introTitle: "Del diseño procedimental a la implementación de software",
    introText:
      "Para cada vertical distinguimos claramente la arquitectura procedimental — fuentes, reglas, roles, estados, controles, excepciones y responsabilidades — de la posterior implementación técnica.",
    proceduralLabel: "Arquitectura procedimental",
    softwareLabel: "Implementación de software",
    explore: "Descubrir la vertical",
    study: "Profundizar en el área de estudio",

    flagshipLabel: "Solución operativa",
    flagshipTitle: "La vertical más madura del ecosistema CAELO",
    readyLabel: "Verticales validadas o listas para implementación",
    readyTitle: "Arquitecturas ya definidas, verificables y desarrollables con clientes o socios",
    studyLabel: "Verticales en estudio y diseño",
    studyTitle: "Dominios en fase de definición y consolidación metodológica",

    flagship: {
      slug: "passweb",
      category: "Pensiones y posición aseguradora",
      title: "CAELO PassWeb",
      status: "Software operativo",
      featured: true,
      description:
        "La primera vertical completa de CAELO, utilizada como prueba de estrés interna sobre un procedimiento administrativo complejo, documental y de alta responsabilidad operativa.",
      procedural: "Completa y sometida a verificación interna",
      software: "Completada y sometida a pruebas internas",
    } satisfies Vertical,

    ready: [
      {
        slug: "previdenza-spagna",
        category: "Seguridad social internacional",
        title: "CAELO Seguridad Social y Seguros de España",
        status: "Disponible para codiseño e implementación",
        description:
          "Arquitectura procedimental dedicada a los procedimientos de seguridad social y seguros en el contexto español, preparada para desarrollarse con un cliente o socio de dominio.",
        procedural: "Completa y preparada para la implementación",
        software: "A desarrollar según el caso de uso y el contexto operativo",
      },
      {
        slug: "accesso-civico",
        category: "Procedimientos administrativos",
        title: "CAELO Acceso Cívico Simple",
        status: "Arquitectura definida",
        description:
          "Una vertical dedicada a un procedimiento breve y regulado, con plazos, roles, controles, excepciones y responsabilidades claramente identificables.",
        procedural: "Definida y disponible para implementación",
        software: "A desarrollar con una entidad o socio",
      },
      {
        slug: "mepa",
        category: "Contratación pública",
        title: "CAELO Contratación por debajo del umbral / MePA",
        status: "Disponible para codiseño y despliegue",
        description:
          "Una vertical para gobernar adjudicaciones, umbrales, condiciones, documentos, pasos de autorización, excepciones y responsabilidades. Apoya al responsable del proyecto en la trazabilidad de las actividades, la verificación de los pasos y la gestión coherente de las fuentes y restricciones del procedimiento.",
        procedural: "Completa y verificada internamente mediante casos de prueba",
        software: "Disponible para codiseño y despliegue con cliente o socio",
      },
    ] satisfies Vertical[],

    studies: [
      {
        slug: "foresight",
        category: "Strategic Foresight",
        title: "CAELO Strategic Foresight",
        status: "En estudio — arquitectura procedimental en consolidación",
        description:
          "La vertical Strategic Foresight se encuentra actualmente en fase de estudio, definición y consolidación progresiva de su arquitectura procedimental. Se están identificando las fuentes, los actores, los indicadores, los supuestos, las restricciones y los pasos de validación necesarios para estructurar el dominio.",
        procedural: "En estudio, definición y consolidación",
        software: "No iniciada",
      },
      {
        slug: "societario",
        category: "Derecho societario",
        title: "CAELO Societario",
        subtitle: "Gobernanza y reconstrucción del expediente societario",
        status: "Vertical en fase de estudio y diseño",
        description:
          "Aplicación futura de la gobernanza procedimental CAELO a la actividad instructora y documental del profesional societario, manteniendo siempre al abogado en el centro de la decisión.",
        procedural: "En fase de estudio y diseño",
        software: "No iniciada",
      },
    ] satisfies Vertical[],

    custom: {
      label: "Vertical personalizada",
      title: "¿Tienes un procedimiento específico que gobernar?",
      text:
        "La arquitectura modular de CAELO permite modelar nuevas verticales a partir de las fuentes, reglas, roles, controles, excepciones y responsabilidades del dominio.",
      cta: "Solicitar una evaluación de viabilidad",
    },
    final: {
      title: "Construimos la vertical sobre el procedimiento real, no sobre un flujo abstracto.",
      text:
        "Conversemos sobre las fuentes, restricciones, actores y requisitos de gobernanza de tu contexto operativo.",
      cta: "Iniciar una conversación",
    },
  },
} as const;

function VerticalCard({
  vertical,
  proceduralLabel,
  softwareLabel,
  explore,
  study,
}: {
  vertical: Vertical;
  proceduralLabel: string;
  softwareLabel: string;
  explore: string;
  study: string;
}) {
  return (
    <motion.article
      variants={staggerItem}
      className={`rounded-3xl border bg-card p-8 md:p-10 shadow-sm flex flex-col ${
        vertical.featured ? "border-primary/30 md:col-span-2" : "border-border"
      }`}
    >
      <div className={vertical.featured ? "grid lg:grid-cols-[1.1fr_0.9fr] gap-10" : ""}>
        <div className="flex flex-col">
          <span className="inline-flex self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            {vertical.category}
          </span>
          {vertical.status && (
            <span className="inline-flex self-start rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary mb-5">
              {vertical.status}
            </span>
          )}
          <h3 className="text-3xl md:text-4xl font-bold mb-3">{vertical.title}</h3>
          {vertical.subtitle && <p className="text-lg font-semibold mb-5">{vertical.subtitle}</p>}
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{vertical.description}</p>
        </div>

        <div className="flex flex-col">
          <div className="grid gap-4 mb-8">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <div className="text-xs uppercase tracking-[0.16em] text-primary font-semibold mb-2">
                {proceduralLabel}
              </div>
              <div className="font-semibold">{vertical.procedural}</div>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-2">
                {softwareLabel}
              </div>
              <div className="font-semibold">{vertical.software}</div>
            </div>
          </div>
          <div className="mt-auto">
            <Button size="lg" variant={vertical.featured ? "default" : "outline"} className="text-base px-6 py-5" asChild>
              <Link to={`/soluzioni/${vertical.slug}`}>
                {vertical.slug === "societario" || vertical.slug === "foresight" ? study : explore}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Solutions() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <Layout>
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/2.jpg" alt={t.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{t.heroText}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              {t.introLabel}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.introTitle}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">{t.introText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10">
            <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">{t.flagshipLabel}</div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.flagshipTitle}</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <VerticalCard
              vertical={t.flagship}
              proceduralLabel={t.proceduralLabel}
              softwareLabel={t.softwareLabel}
              explore={t.explore}
              study={t.study}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10">
            <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">{t.readyLabel}</div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.readyTitle}</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.ready.map((vertical) => (
              <VerticalCard
                key={vertical.slug}
                vertical={vertical}
                proceduralLabel={t.proceduralLabel}
                softwareLabel={t.softwareLabel}
                explore={t.explore}
                study={t.study}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10">
            <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">{t.studyLabel}</div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.studyTitle}</h2>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.studies.map((vertical) => (
              <VerticalCard
                key={vertical.slug}
                vertical={vertical}
                proceduralLabel={t.proceduralLabel}
                softwareLabel={t.softwareLabel}
                explore={t.explore}
                study={t.study}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-12">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              {t.custom.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">{t.custom.title}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed mb-8">{t.custom.text}</p>
            <Button size="lg" asChild>
              <Link to="/contatti">
                {t.custom.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.final.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.final.text}</p>
            <Button size="lg" asChild>
              <Link to="/contatti">
                {t.final.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
