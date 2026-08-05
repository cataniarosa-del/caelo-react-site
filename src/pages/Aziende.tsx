import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Network,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const copy = {
  it: {
    hero: {
      badge: "CAELO per aziende e partner tecnologici",
      title: "Governance procedurale per processi aziendali complessi.",
      text:
        "CAELO integra fonti, regole, ruoli, controlli, eccezioni ed evidenze nei processi aziendali ad alta responsabilità, senza sostituire CRM, ERP, ticketing e sistemi documentali già in uso.",
      statement: "Non aggiunge un altro assistente. Introduce un livello di governo.",
      primary: "Avvia un confronto",
      secondary: "Scopri i casi d’uso",
    },
    problem: {
      title: "Quando il processo attraversa più sistemi, la responsabilità non può perdersi.",
      text:
        "Documenti, comunicazioni, ticket, regole e decisioni spesso restano distribuiti tra strumenti diversi. CAELO ricostruisce il procedimento, governa i passaggi e rende visibili stato, fonti, responsabilità e prossima azione.",
    },
    benefitsTitle: "Tre capacità centrali per l’impresa",
    benefits: [
      {
        title: "Governare il processo",
        text:
          "Coordina stati, attività, ruoli, condizioni ed eccezioni lungo l’intero flusso operativo.",
      },
      {
        title: "Rendere verificabile ogni passaggio",
        text:
          "Collega decisioni, fonti, documenti, controlli e interventi umani, consentendo la ricostruzione del procedimento.",
      },
      {
        title: "Integrarsi senza sostituire",
        text:
          "Opera come livello di governance sopra CRM, ERP, ticketing, workflow e sistemi documentali già presenti.",
      },
    ],
    audiences: {
      label: "Destinatari",
      title: "Un’architettura, più interlocutori.",
      items: [
        {
          title: "Aziende e grandi organizzazioni",
          text:
            "Per governare processi interni, reclami, pratiche, controlli e attività ad alta responsabilità.",
        },
        {
          title: "System integrator e partner tecnologici",
          text:
            "Per integrare CAELO in ecosistemi enterprise e sviluppare verticali specialistici senza ricostruire ogni volta la logica di governance.",
        },
        {
          title: "Legal, Compliance, Risk e Operations",
          text:
            "Per rendere fonti, regole, responsabilità, eccezioni e verifiche parte strutturale del processo operativo.",
        },
      ],
    },
    useCases: {
      label: "Ambiti di applicazione",
      title: "Dove CAELO può creare valore operativo",
      items: [
        "Gestione di reclami, contestazioni e pratiche",
        "Processi Legal e Compliance",
        "Workflow autorizzativi e controlli interni",
        "Gestione documentale procedurale",
        "Customer operations ad alta responsabilità",
        "Risk management e processi decisionali strutturati",
      ],
    },
    integration: {
      label: "Integrazione enterprise",
      title: "Un livello di governance sopra l’infrastruttura esistente.",
      text:
        "CAELO non richiede di sostituire i sistemi già adottati. Può integrarsi con CRM, ERP, piattaforme documentali, ticketing, cloud e applicazioni verticali, governando la logica procedurale che li collega.",
      items: [
        "API e integrazione applicativa",
        "Controllo delle fonti",
        "Orchestrazione di ruoli e stati",
        "Supervisione human-in-the-loop",
        "Evidenze e audit trail",
      ],
    },
    collaboration: {
      label: "Modalità di collaborazione",
      title: "Dalla procedura reale al verticale operativo.",
      items: [
        {
          title: "PoC mirato",
          text:
            "Modellazione di un procedimento circoscritto per verificare valore, integrazione e requisiti di governance.",
        },
        {
          title: "Co-progettazione",
          text:
            "Sviluppo del verticale con l’organizzazione o con un partner di dominio.",
        },
        {
          title: "Licenza e integrazione",
          text:
            "Adozione di CAELO come componente di governance all’interno dell’ecosistema tecnologico esistente.",
        },
      ],
    },
    final: {
      title: "Hai un processo complesso da governare?",
      text:
        "Partiamo dalle fonti, dai vincoli, dagli attori e dalle responsabilità reali della tua organizzazione.",
      cta: "Avvia un confronto",
    },
  },

  en: {
    hero: {
      badge: "CAELO for companies and technology partners",
      title: "Procedural governance for complex business processes.",
      text:
        "CAELO integrates sources, rules, roles, controls, exceptions and evidence into high-responsibility business processes without replacing existing CRM, ERP, ticketing and document systems.",
      statement: "It does not add another assistant. It introduces a governance layer.",
      primary: "Start a conversation",
      secondary: "Explore use cases",
    },
    problem: {
      title: "When a process crosses multiple systems, responsibility cannot be lost.",
      text:
        "Documents, communications, tickets, rules and decisions often remain distributed across different tools. CAELO reconstructs the procedure, governs its steps and makes status, sources, responsibilities and next actions visible.",
    },
    benefitsTitle: "Three core capabilities for the enterprise",
    benefits: [
      {
        title: "Govern the process",
        text:
          "Coordinates states, activities, roles, conditions and exceptions across the entire operational flow.",
      },
      {
        title: "Make every step verifiable",
        text:
          "Connects decisions, sources, documents, controls and human interventions, enabling reconstruction of the procedure.",
      },
      {
        title: "Integrate without replacing",
        text:
          "Operates as a governance layer above existing CRM, ERP, ticketing, workflow and document systems.",
      },
    ],
    audiences: {
      label: "Who it is for",
      title: "One architecture, multiple stakeholders.",
      items: [
        {
          title: "Companies and large organisations",
          text:
            "For governing internal processes, complaints, cases, controls and high-responsibility activities.",
        },
        {
          title: "System integrators and technology partners",
          text:
            "For integrating CAELO into enterprise ecosystems and developing specialist verticals without rebuilding governance logic each time.",
        },
        {
          title: "Legal, Compliance, Risk and Operations",
          text:
            "For making sources, rules, responsibilities, exceptions and checks a structural part of the operational process.",
        },
      ],
    },
    useCases: {
      label: "Application areas",
      title: "Where CAELO can create operational value",
      items: [
        "Complaint, dispute and case management",
        "Legal and Compliance processes",
        "Authorisation workflows and internal controls",
        "Procedural document management",
        "High-responsibility customer operations",
        "Risk management and structured decision processes",
      ],
    },
    integration: {
      label: "Enterprise integration",
      title: "A governance layer above existing infrastructure.",
      text:
        "CAELO does not require replacing systems already in use. It can integrate with CRM, ERP, document platforms, ticketing, cloud and vertical applications, governing the procedural logic that connects them.",
      items: [
        "APIs and application integration",
        "Source control",
        "Role and state orchestration",
        "Human-in-the-loop supervision",
        "Evidence and audit trail",
      ],
    },
    collaboration: {
      label: "Collaboration models",
      title: "From the real procedure to an operational vertical.",
      items: [
        {
          title: "Targeted PoC",
          text:
            "Modelling a bounded procedure to assess value, integration and governance requirements.",
        },
        {
          title: "Co-design",
          text:
            "Developing the vertical with the organisation or with a domain partner.",
        },
        {
          title: "Licence and integration",
          text:
            "Adopting CAELO as a governance component within the existing technology ecosystem.",
        },
      ],
    },
    final: {
      title: "Do you have a complex process to govern?",
      text:
        "We start from the real sources, constraints, actors and responsibilities of your organisation.",
      cta: "Start a conversation",
    },
  },

  fr: {
    hero: {
      badge: "CAELO pour les entreprises et partenaires technologiques",
      title: "Gouvernance procédurale des processus d’entreprise complexes.",
      text:
        "CAELO intègre sources, règles, rôles, contrôles, exceptions et preuves dans les processus d’entreprise à forte responsabilité, sans remplacer les CRM, ERP, systèmes de ticketing et plateformes documentaires déjà utilisés.",
      statement: "CAELO n’ajoute pas un assistant supplémentaire. Il introduit une couche de gouvernance.",
      primary: "Engager un échange",
      secondary: "Découvrir les cas d’usage",
    },
    problem: {
      title: "Lorsque le processus traverse plusieurs systèmes, la responsabilité ne peut pas se perdre.",
      text:
        "Documents, communications, tickets, règles et décisions restent souvent répartis entre plusieurs outils. CAELO reconstruit la procédure, gouverne ses étapes et rend visibles son état, ses sources, ses responsabilités et la prochaine action.",
    },
    benefitsTitle: "Trois capacités centrales pour l’entreprise",
    benefits: [
      {
        title: "Gouverner le processus",
        text:
          "Coordonne états, activités, rôles, conditions et exceptions tout au long du flux opérationnel.",
      },
      {
        title: "Rendre chaque étape vérifiable",
        text:
          "Relie décisions, sources, documents, contrôles et interventions humaines afin de permettre la reconstruction de la procédure.",
      },
      {
        title: "S’intégrer sans remplacer",
        text:
          "Fonctionne comme une couche de gouvernance au-dessus des CRM, ERP, outils de ticketing, workflows et systèmes documentaires existants.",
      },
    ],
    audiences: {
      label: "Destinataires",
      title: "Une architecture, plusieurs interlocuteurs.",
      items: [
        {
          title: "Entreprises et grandes organisations",
          text:
            "Pour gouverner processus internes, réclamations, dossiers, contrôles et activités à forte responsabilité.",
        },
        {
          title: "Intégrateurs de systèmes et partenaires technologiques",
          text:
            "Pour intégrer CAELO dans des écosystèmes enterprise et développer des verticales spécialisées sans reconstruire à chaque fois la logique de gouvernance.",
        },
        {
          title: "Legal, Compliance, Risk et Operations",
          text:
            "Pour intégrer structurellement sources, règles, responsabilités, exceptions et vérifications au processus opérationnel.",
        },
      ],
    },
    useCases: {
      label: "Domaines d’application",
      title: "Où CAELO peut créer de la valeur opérationnelle",
      items: [
        "Gestion des réclamations, contestations et dossiers",
        "Processus Legal et Compliance",
        "Workflows d’autorisation et contrôles internes",
        "Gestion documentaire procédurale",
        "Customer operations à forte responsabilité",
        "Risk management et processus décisionnels structurés",
      ],
    },
    integration: {
      label: "Intégration enterprise",
      title: "Une couche de gouvernance au-dessus de l’infrastructure existante.",
      text:
        "CAELO n’exige pas le remplacement des systèmes déjà adoptés. Il peut s’intégrer aux CRM, ERP, plateformes documentaires, outils de ticketing, clouds et applications verticales, en gouvernant la logique procédurale qui les relie.",
      items: [
        "API et intégration applicative",
        "Contrôle des sources",
        "Orchestration des rôles et des états",
        "Supervision human-in-the-loop",
        "Preuves et piste d’audit",
      ],
    },
    collaboration: {
      label: "Modalités de collaboration",
      title: "De la procédure réelle à la verticale opérationnelle.",
      items: [
        {
          title: "PoC ciblé",
          text:
            "Modélisation d’une procédure circonscrite afin d’évaluer la valeur, l’intégration et les exigences de gouvernance.",
        },
        {
          title: "Co-conception",
          text:
            "Développement de la verticale avec l’organisation ou avec un partenaire de domaine.",
        },
        {
          title: "Licence et intégration",
          text:
            "Adoption de CAELO comme composant de gouvernance au sein de l’écosystème technologique existant.",
        },
      ],
    },
    final: {
      title: "Avez-vous un processus complexe à gouverner ?",
      text:
        "Nous partons des sources, contraintes, acteurs et responsabilités réelles de votre organisation.",
      cta: "Engager un échange",
    },
  },

  de: {
    hero: {
      badge: "CAELO für Unternehmen und Technologiepartner",
      title: "Verfahrensgovernance für komplexe Unternehmensprozesse.",
      text:
        "CAELO integriert Quellen, Regeln, Rollen, Kontrollen, Ausnahmen und Nachweise in verantwortungskritische Unternehmensprozesse, ohne bestehende CRM-, ERP-, Ticketing- und Dokumentensysteme zu ersetzen.",
      statement: "CAELO fügt keinen weiteren Assistenten hinzu. Es führt eine Governance-Ebene ein.",
      primary: "Gespräch beginnen",
      secondary: "Anwendungsfälle entdecken",
    },
    problem: {
      title: "Wenn ein Prozess mehrere Systeme durchläuft, darf Verantwortung nicht verloren gehen.",
      text:
        "Dokumente, Kommunikation, Tickets, Regeln und Entscheidungen sind häufig auf verschiedene Werkzeuge verteilt. CAELO rekonstruiert das Verfahren, steuert seine Schritte und macht Status, Quellen, Verantwortlichkeiten und nächste Aktionen sichtbar.",
    },
    benefitsTitle: "Drei zentrale Fähigkeiten für Unternehmen",
    benefits: [
      {
        title: "Den Prozess steuern",
        text:
          "Koordiniert Zustände, Aktivitäten, Rollen, Bedingungen und Ausnahmen im gesamten operativen Ablauf.",
      },
      {
        title: "Jeden Schritt überprüfbar machen",
        text:
          "Verknüpft Entscheidungen, Quellen, Dokumente, Kontrollen und menschliche Eingriffe und ermöglicht so die Rekonstruktion des Verfahrens.",
      },
      {
        title: "Integrieren statt ersetzen",
        text:
          "Arbeitet als Governance-Ebene über bestehenden CRM-, ERP-, Ticketing-, Workflow- und Dokumentensystemen.",
      },
    ],
    audiences: {
      label: "Zielgruppen",
      title: "Eine Architektur, mehrere Stakeholder.",
      items: [
        {
          title: "Unternehmen und große Organisationen",
          text:
            "Zur Steuerung interner Prozesse, Beschwerden, Vorgänge, Kontrollen und verantwortungskritischer Tätigkeiten.",
        },
        {
          title: "Systemintegratoren und Technologiepartner",
          text:
            "Zur Integration von CAELO in Enterprise-Ökosysteme und zur Entwicklung spezialisierter Vertikalen, ohne die Governance-Logik jedes Mal neu aufzubauen.",
        },
        {
          title: "Legal, Compliance, Risk und Operations",
          text:
            "Um Quellen, Regeln, Verantwortlichkeiten, Ausnahmen und Prüfungen strukturell in den operativen Prozess einzubinden.",
        },
      ],
    },
    useCases: {
      label: "Anwendungsbereiche",
      title: "Wo CAELO operativen Mehrwert schaffen kann",
      items: [
        "Beschwerde-, Streit- und Vorgangsmanagement",
        "Legal- und Compliance-Prozesse",
        "Genehmigungsworkflows und interne Kontrollen",
        "Verfahrensorientiertes Dokumentenmanagement",
        "Verantwortungskritische Customer Operations",
        "Risk Management und strukturierte Entscheidungsprozesse",
      ],
    },
    integration: {
      label: "Enterprise-Integration",
      title: "Eine Governance-Ebene über der bestehenden Infrastruktur.",
      text:
        "CAELO erfordert keinen Austausch bereits eingesetzter Systeme. Es kann mit CRM, ERP, Dokumentenplattformen, Ticketing, Cloud und vertikalen Anwendungen integriert werden und steuert die Verfahrenslogik, die diese Systeme verbindet.",
      items: [
        "APIs und Anwendungsintegration",
        "Quellenkontrolle",
        "Orchestrierung von Rollen und Zuständen",
        "Human-in-the-loop-Aufsicht",
        "Nachweise und Audit Trail",
      ],
    },
    collaboration: {
      label: "Zusammenarbeitsmodelle",
      title: "Vom realen Verfahren zur operativen Vertikale.",
      items: [
        {
          title: "Gezielter PoC",
          text:
            "Modellierung eines klar abgegrenzten Verfahrens zur Bewertung von Nutzen, Integration und Governance-Anforderungen.",
        },
        {
          title: "Co-Design",
          text:
            "Entwicklung der Vertikale mit der Organisation oder mit einem Domänenpartner.",
        },
        {
          title: "Lizenz und Integration",
          text:
            "Einführung von CAELO als Governance-Komponente innerhalb des bestehenden Technologie-Ökosystems.",
        },
      ],
    },
    final: {
      title: "Müssen Sie einen komplexen Prozess steuern?",
      text:
        "Wir beginnen mit den realen Quellen, Rahmenbedingungen, Akteuren und Verantwortlichkeiten Ihrer Organisation.",
      cta: "Gespräch beginnen",
    },
  },

  es: {
    hero: {
      badge: "CAELO para empresas y socios tecnológicos",
      title: "Gobernanza procedimental para procesos empresariales complejos.",
      text:
        "CAELO integra fuentes, reglas, roles, controles, excepciones y evidencias en procesos empresariales de alta responsabilidad, sin sustituir los CRM, ERP, sistemas de ticketing y plataformas documentales ya existentes.",
      statement: "No añade otro asistente. Introduce una capa de gobernanza.",
      primary: "Iniciar una conversación",
      secondary: "Descubrir los casos de uso",
    },
    problem: {
      title: "Cuando el proceso atraviesa varios sistemas, la responsabilidad no puede perderse.",
      text:
        "Documentos, comunicaciones, tickets, reglas y decisiones suelen quedar distribuidos entre herramientas diferentes. CAELO reconstruye el procedimiento, gobierna sus pasos y hace visibles el estado, las fuentes, las responsabilidades y la siguiente acción.",
    },
    benefitsTitle: "Tres capacidades centrales para la empresa",
    benefits: [
      {
        title: "Gobernar el proceso",
        text:
          "Coordina estados, actividades, roles, condiciones y excepciones a lo largo de todo el flujo operativo.",
      },
      {
        title: "Hacer verificable cada paso",
        text:
          "Conecta decisiones, fuentes, documentos, controles e intervenciones humanas, permitiendo reconstruir el procedimiento.",
      },
      {
        title: "Integrarse sin sustituir",
        text:
          "Opera como una capa de gobernanza sobre CRM, ERP, ticketing, workflow y sistemas documentales existentes.",
      },
    ],
    audiences: {
      label: "Destinatarios",
      title: "Una arquitectura, varios interlocutores.",
      items: [
        {
          title: "Empresas y grandes organizaciones",
          text:
            "Para gobernar procesos internos, reclamaciones, expedientes, controles y actividades de alta responsabilidad.",
        },
        {
          title: "Integradores de sistemas y socios tecnológicos",
          text:
            "Para integrar CAELO en ecosistemas enterprise y desarrollar verticales especializadas sin reconstruir cada vez la lógica de gobernanza.",
        },
        {
          title: "Legal, Compliance, Risk y Operations",
          text:
            "Para convertir fuentes, reglas, responsabilidades, excepciones y verificaciones en parte estructural del proceso operativo.",
        },
      ],
    },
    useCases: {
      label: "Ámbitos de aplicación",
      title: "Dónde CAELO puede crear valor operativo",
      items: [
        "Gestión de reclamaciones, controversias y expedientes",
        "Procesos Legal y Compliance",
        "Workflows de autorización y controles internos",
        "Gestión documental procedimental",
        "Customer operations de alta responsabilidad",
        "Risk management y procesos de decisión estructurados",
      ],
    },
    integration: {
      label: "Integración enterprise",
      title: "Una capa de gobernanza sobre la infraestructura existente.",
      text:
        "CAELO no requiere sustituir los sistemas ya adoptados. Puede integrarse con CRM, ERP, plataformas documentales, ticketing, cloud y aplicaciones verticales, gobernando la lógica procedimental que los conecta.",
      items: [
        "API e integración de aplicaciones",
        "Control de fuentes",
        "Orquestación de roles y estados",
        "Supervisión human-in-the-loop",
        "Evidencias y audit trail",
      ],
    },
    collaboration: {
      label: "Modalidades de colaboración",
      title: "Del procedimiento real a la vertical operativa.",
      items: [
        {
          title: "PoC dirigido",
          text:
            "Modelado de un procedimiento acotado para evaluar valor, integración y requisitos de gobernanza.",
        },
        {
          title: "Codiseño",
          text:
            "Desarrollo de la vertical con la organización o con un socio de dominio.",
        },
        {
          title: "Licencia e integración",
          text:
            "Adopción de CAELO como componente de gobernanza dentro del ecosistema tecnológico existente.",
        },
      ],
    },
    final: {
      title: "¿Tienes un proceso complejo que gobernar?",
      text:
        "Partimos de las fuentes, restricciones, actores y responsabilidades reales de tu organización.",
      cta: "Iniciar una conversación",
    },
  },
} as const;

const benefitIcons = [Workflow, FileCheck2, Network];
const audienceIcons = [Building2, Network, Scale];

export default function Aziende() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/2.jpg" alt={t.hero.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <div className="inline-flex items-center rounded-full border border-white/30 bg-black/20 px-4 py-2 text-sm text-white/90 mb-7 backdrop-blur-sm">
              {t.hero.badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
              {t.hero.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t.hero.text}
            </p>

            <p className="text-lg md:text-xl font-semibold text-white mt-6">
              {t.hero.statement}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link to="/contatti">
                  {t.hero.primary}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="#casi-uso">{t.hero.secondary}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.problem.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">{t.problem.text}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">{t.benefitsTitle}</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <motion.div key={benefit.title} variants={staggerItem} className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              {t.audiences.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">{t.audiences.title}</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.audiences.items.map((item, index) => {
              const Icon = audienceIcons[index];
              return (
                <motion.div key={item.title} variants={staggerItem} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="casi-uso" className="py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-10 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              {t.useCases.label}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.useCases.title}</h2>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {t.useCases.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                {t.integration.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.integration.title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{t.integration.text}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="grid gap-4">
                {t.integration.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              {t.collaboration.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">{t.collaboration.title}</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t.collaboration.items.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center rounded-[2rem] border border-primary/20 bg-primary/5 p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.final.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.final.text}</p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
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
