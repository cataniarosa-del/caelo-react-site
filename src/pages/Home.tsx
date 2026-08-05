import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { FeatureCard } from "@/components/Cards";
import { DemoRequestForm } from "@/components/Forms";
import { getFeatures } from "@/data/index";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const copy = {
  it: {
    hero: {
      label: "CAELO",
      title: "L’architettura di governance procedurale per l’intelligenza artificiale.",
      description: "CAELO governa procedure complesse attraverso regole, fonti, ruoli, stati, controlli, eccezioni e supervisione umana, rendendo ogni passaggio tracciabile e auditabile.",
      statement: "Non automatizza semplicemente i processi. Ne governa l’esecuzione.",
      primary: "Avvia un confronto",
      secondary: "Scopri come funziona",
    },
    problem: {
      title: "Quando l’intelligenza artificiale entra in un procedimento, deve essere governata.",
      text: "Nei contesti regolamentati non basta ottenere una risposta. Occorre sapere quali fonti sono state utilizzate, quali regole sono state applicate, chi può intervenire e come ricostruire ogni passaggio.",
    },
    identity: {
      badge: "Identità della piattaforma",
      title: "Che cos’è CAELO",
      lead: "Una piattaforma di intelligenza procedurale governata per ambienti complessi e regolamentati.",
      body: "CAELO struttura il procedimento prima che l’intelligenza artificiale vi operi. Collega fonti, regole, ruoli, stati, controlli, eccezioni ed evidenze, mantenendo la responsabilità decisionale sotto supervisione umana.",
      notTitle: "Non è",
      notText: "Un chatbot, un motore di ricerca, un copilota generico o un agente autonomo.",
      isTitle: "È",
      isText: "Un’infrastruttura di governo procedurale che delimita ciò che il sistema può fare, rende visibile ciò che sta facendo e consente di ricostruire ciò che ha fatto.",
    },
    engine: {
      title: "Supervisione operativa e governance procedurale",
      command: "Il Command Center rende visibili lo stato del procedimento, le attività in corso, le regole applicate, i controlli eseguiti, le eccezioni rilevate, le evidenze disponibili e i punti nei quali è richiesto l’intervento umano.",
      mother: "Il Mother Engine governa la logica comune: stati, eventi, transizioni, ruoli, condizioni, controlli ed eccezioni. I verticali specialistici applicano questa architettura alle fonti e alle regole di ciascun dominio.",
      closing: "Un solo motore di governance. Molteplici verticali specialistici.",
      cta: "Esplora i verticali",
    },
    assessment: {
      badge: "Analisi del posizionamento tecnologico",
      title: "Il posizionamento architetturale di CAELO",
      text: "Questa analisi di posizionamento è stata elaborata tramite sistemi di valutazione architetturale e benchmarking indipendente, basandosi sulla documentazione tecnica di CAELO e sul confronto con i framework di riferimento per l’AI Enterprise.",
      cta: "Leggi l’analisi di posizionamento",
    },
    features: {
      title: "I componenti della governance procedurale",
      text: "CAELO coordina fonti, regole, ruoli, controlli, eccezioni ed evidenze in un’unica architettura, integrabile con i sistemi già in uso.",
    },
    audiences: {
      paBadge: "Pubblica Amministrazione",
      paTitle: "CAELO per la Pubblica Amministrazione",
      paText: "Un livello di governance procedurale per gestire pratiche, documenti, regole e operatori, garantendo tracciabilità, controllo delle fonti e coerenza lungo l’intero procedimento.",
      paCta: "Vai alle soluzioni PA",
      companyBadge: "Aziende e partner",
      companyTitle: "CAELO per Aziende e Partner",
      companyText: "Un livello di governance integrabile con CRM, ERP, ticketing e sistemi documentali, per controllare reclami, processi interni e attività ad alta responsabilità senza sostituire le infrastrutture esistenti.",
      companyCta: "Vai alle soluzioni aziende",
    },
    contact: {
      title: "Hai un procedimento complesso da governare?",
      text: "Confrontiamoci sul contesto operativo, sulle fonti, sui vincoli e sui requisiti di governance della tua organizzazione.",
      items: [
        ["Governance procedurale", "CAELO governa il procedimento, non si limita ad assistere l’operatore."],
        ["Auditabilità e controllo", "Ogni passaggio è tracciabile, verificabile e coerente con le regole operative."],
        ["Integrazione enterprise", "Architettura progettata per integrarsi con sistemi, cloud e piattaforme già esistenti."],
      ],
    },
  },
  en: {
    hero: {
      label: "CAELO",
      title: "The procedural governance architecture for artificial intelligence.",
      description: "CAELO governs complex procedures through rules, sources, roles, states, controls, exceptions and human oversight, making every step traceable and auditable.",
      statement: "It does not simply automate processes. It governs their execution.",
      primary: "Start a conversation",
      secondary: "See how it works",
    },
    problem: {
      title: "When artificial intelligence enters a procedure, it must be governed.",
      text: "In regulated environments, obtaining an answer is not enough. Organisations must know which sources were used, which rules were applied, who may intervene and how every step can be reconstructed.",
    },
    identity: {
      badge: "Platform identity",
      title: "What is CAELO",
      lead: "A governed procedural intelligence platform for complex and regulated environments.",
      body: "CAELO structures the procedure before artificial intelligence operates within it. It connects sources, rules, roles, states, controls, exceptions and evidence while keeping decision-making responsibility under human oversight.",
      notTitle: "It is not",
      notText: "A chatbot, a search engine, a generic copilot or an autonomous agent.",
      isTitle: "It is",
      isText: "A procedural governance infrastructure that defines what the system may do, makes its activity visible and enables reconstruction of what it has done.",
    },
    engine: {
      title: "Operational supervision and procedural governance",
      command: "The Command Center makes procedure status, ongoing activities, applied rules, completed controls, detected exceptions, available evidence and required human interventions visible.",
      mother: "The Mother Engine governs the common logic: states, events, transitions, roles, conditions, controls and exceptions. Specialist verticals apply this architecture to the sources and rules of each domain.",
      closing: "One governance engine. Multiple specialist verticals.",
      cta: "Explore the verticals",
    },
    assessment: {
      badge: "Technology positioning analysis",
      title: "CAELO’s architectural positioning",
      text: "This positioning analysis was developed through architectural assessment systems and independent benchmarking, based on CAELO’s technical documentation and comparison with reference frameworks for Enterprise AI.",
      cta: "Read the positioning analysis",
    },
    features: {
      title: "The components of procedural governance",
      text: "CAELO coordinates sources, rules, roles, controls, exceptions and evidence within a single architecture that integrates with existing systems.",
    },
    audiences: {
      paBadge: "Public Administration",
      paTitle: "CAELO for Public Administration",
      paText: "A procedural governance layer for managing cases, documents, rules and operators, ensuring traceability, source control and consistency throughout the procedure.",
      paCta: "View public sector solutions",
      companyBadge: "Companies and partners",
      companyTitle: "CAELO for Companies and Partners",
      companyText: "A governance layer that integrates with CRM, ERP, ticketing and document systems to control complaints, internal processes and high-responsibility activities without replacing existing infrastructure.",
      companyCta: "View company solutions",
    },
    contact: {
      title: "Do you have a complex procedure to govern?",
      text: "Let us discuss your operating context, sources, constraints and organisational governance requirements.",
      items: [
        ["Procedural governance", "CAELO governs the procedure rather than merely assisting the operator."],
        ["Auditability and control", "Every step is traceable, verifiable and aligned with operational rules."],
        ["Enterprise integration", "An architecture designed to integrate with existing systems, cloud environments and platforms."],
      ],
    },
  },
  fr: {
    hero: {
      label: "CAELO",
      title: "L’architecture de gouvernance procédurale pour l’intelligence artificielle.",
      description: "CAELO gouverne les procédures complexes au moyen de règles, sources, rôles, états, contrôles, exceptions et supervision humaine, en rendant chaque étape traçable et auditable.",
      statement: "CAELO ne se contente pas d’automatiser les processus. Il en gouverne l’exécution.",
      primary: "Engager un échange",
      secondary: "Découvrir son fonctionnement",
    },
    problem: {
      title: "Lorsque l’intelligence artificielle intervient dans une procédure, elle doit être gouvernée.",
      text: "Dans les environnements réglementés, obtenir une réponse ne suffit pas. Il faut savoir quelles sources ont été utilisées, quelles règles ont été appliquées, qui peut intervenir et comment reconstruire chaque étape.",
    },
    identity: {
      badge: "Identité de la plateforme",
      title: "Qu’est-ce que CAELO",
      lead: "Une plateforme d’intelligence procédurale gouvernée pour les environnements complexes et réglementés.",
      body: "CAELO structure la procédure avant que l’intelligence artificielle n’y intervienne. Il relie sources, règles, rôles, états, contrôles, exceptions et preuves tout en maintenant la responsabilité décisionnelle sous supervision humaine.",
      notTitle: "Ce n’est pas",
      notText: "Un chatbot, un moteur de recherche, un copilote générique ou un agent autonome.",
      isTitle: "C’est",
      isText: "Une infrastructure de gouvernance procédurale qui délimite ce que le système peut faire, rend son activité visible et permet de reconstruire ce qu’il a fait.",
    },
    engine: {
      title: "Supervision opérationnelle et gouvernance procédurale",
      command: "Le Command Center rend visibles l’état de la procédure, les activités en cours, les règles appliquées, les contrôles effectués, les exceptions détectées, les preuves disponibles et les points nécessitant une intervention humaine.",
      mother: "Le Mother Engine gouverne la logique commune : états, événements, transitions, rôles, conditions, contrôles et exceptions. Les verticales spécialisées appliquent cette architecture aux sources et aux règles de chaque domaine.",
      closing: "Un seul moteur de gouvernance. Plusieurs verticales spécialisées.",
      cta: "Explorer les verticales",
    },
    assessment: {
      badge: "Analyse du positionnement technologique",
      title: "Le positionnement architectural de CAELO",
      text: "Cette analyse de positionnement a été élaborée au moyen de systèmes d’évaluation architecturale et de benchmarking indépendant, sur la base de la documentation technique de CAELO et d’une comparaison avec les référentiels de l’IA Enterprise.",
      cta: "Lire l’analyse de positionnement",
    },
    features: {
      title: "Les composantes de la gouvernance procédurale",
      text: "CAELO coordonne sources, règles, rôles, contrôles, exceptions et preuves au sein d’une architecture unique, intégrable aux systèmes existants.",
    },
    audiences: {
      paBadge: "Administration publique",
      paTitle: "CAELO pour l’Administration publique",
      paText: "Un niveau de gouvernance procédurale pour gérer dossiers, documents, règles et opérateurs, en garantissant traçabilité, contrôle des sources et cohérence tout au long de la procédure.",
      paCta: "Voir les solutions publiques",
      companyBadge: "Entreprises et partenaires",
      companyTitle: "CAELO pour les entreprises et partenaires",
      companyText: "Un niveau de gouvernance intégrable aux CRM, ERP, systèmes de ticketing et documentaires, afin de contrôler réclamations, processus internes et activités à forte responsabilité sans remplacer les infrastructures existantes.",
      companyCta: "Voir les solutions entreprises",
    },
    contact: {
      title: "Avez-vous une procédure complexe à gouverner ?",
      text: "Échangeons sur votre contexte opérationnel, vos sources, vos contraintes et les exigences de gouvernance de votre organisation.",
      items: [
        ["Gouvernance procédurale", "CAELO gouverne la procédure au lieu de se limiter à assister l’opérateur."],
        ["Auditabilité et contrôle", "Chaque étape est traçable, vérifiable et cohérente avec les règles opérationnelles."],
        ["Intégration enterprise", "Une architecture conçue pour s’intégrer aux systèmes, clouds et plateformes existants."],
      ],
    },
  },
  de: {
    hero: {
      label: "CAELO",
      title: "Die Architektur für Verfahrensgovernance in der künstlichen Intelligenz.",
      description: "CAELO steuert komplexe Verfahren durch Regeln, Quellen, Rollen, Zustände, Kontrollen, Ausnahmen und menschliche Aufsicht und macht jeden Schritt nachvollziehbar und auditierbar.",
      statement: "CAELO automatisiert Prozesse nicht nur. Es steuert ihre Ausführung.",
      primary: "Gespräch beginnen",
      secondary: "Funktionsweise entdecken",
    },
    problem: {
      title: "Wenn künstliche Intelligenz in ein Verfahren eingreift, muss sie gesteuert werden.",
      text: "In regulierten Umgebungen reicht eine Antwort nicht aus. Es muss erkennbar sein, welche Quellen verwendet, welche Regeln angewandt und welche Eingriffe vorgenommen wurden und wie jeder Schritt rekonstruiert werden kann.",
    },
    identity: {
      badge: "Plattformidentität",
      title: "Was ist CAELO",
      lead: "Eine gesteuerte Plattform für Verfahrensintelligenz in komplexen und regulierten Umgebungen.",
      body: "CAELO strukturiert das Verfahren, bevor künstliche Intelligenz darin tätig wird. Es verbindet Quellen, Regeln, Rollen, Zustände, Kontrollen, Ausnahmen und Nachweise und hält die Entscheidungsverantwortung unter menschlicher Aufsicht.",
      notTitle: "Es ist nicht",
      notText: "Ein Chatbot, eine Suchmaschine, ein allgemeiner Copilot oder ein autonomer Agent.",
      isTitle: "Es ist",
      isText: "Eine Infrastruktur für Verfahrensgovernance, die festlegt, was das System tun darf, seine Tätigkeit sichtbar macht und die Rekonstruktion seines Handelns ermöglicht.",
    },
    engine: {
      title: "Operative Aufsicht und Verfahrensgovernance",
      command: "Das Command Center macht den Verfahrensstatus, laufende Aktivitäten, angewandte Regeln, ausgeführte Kontrollen, erkannte Ausnahmen, verfügbare Nachweise und erforderliche menschliche Eingriffe sichtbar.",
      mother: "Die Mother Engine steuert die gemeinsame Logik: Zustände, Ereignisse, Übergänge, Rollen, Bedingungen, Kontrollen und Ausnahmen. Spezialisierte Vertikalen wenden diese Architektur auf die Quellen und Regeln jeder Domäne an.",
      closing: "Eine Governance-Engine. Mehrere spezialisierte Vertikalen.",
      cta: "Vertikalen entdecken",
    },
    assessment: {
      badge: "Analyse der technologischen Positionierung",
      title: "Die architektonische Positionierung von CAELO",
      text: "Diese Positionierungsanalyse wurde mithilfe von Systemen zur Architekturbewertung und unabhängigem Benchmarking auf Grundlage der technischen Dokumentation von CAELO und im Vergleich mit Referenzrahmen für Enterprise AI erstellt.",
      cta: "Positionierungsanalyse lesen",
    },
    features: {
      title: "Die Komponenten der Verfahrensgovernance",
      text: "CAELO koordiniert Quellen, Regeln, Rollen, Kontrollen, Ausnahmen und Nachweise in einer einzigen Architektur, die sich in bestehende Systeme integrieren lässt.",
    },
    audiences: {
      paBadge: "Öffentliche Verwaltung",
      paTitle: "CAELO für die öffentliche Verwaltung",
      paText: "Eine Ebene der Verfahrensgovernance für Vorgänge, Dokumente, Regeln und Mitarbeitende, die Nachvollziehbarkeit, Quellenkontrolle und Konsistenz im gesamten Verfahren gewährleistet.",
      paCta: "Lösungen für den öffentlichen Sektor",
      companyBadge: "Unternehmen und Partner",
      companyTitle: "CAELO für Unternehmen und Partner",
      companyText: "Eine Governance-Ebene, die sich in CRM-, ERP-, Ticketing- und Dokumentensysteme integrieren lässt, um Beschwerden, interne Prozesse und verantwortungskritische Tätigkeiten zu steuern, ohne bestehende Infrastruktur zu ersetzen.",
      companyCta: "Unternehmenslösungen ansehen",
    },
    contact: {
      title: "Müssen Sie ein komplexes Verfahren steuern?",
      text: "Lassen Sie uns über Ihren operativen Kontext, Ihre Quellen, Rahmenbedingungen und Governance-Anforderungen sprechen.",
      items: [
        ["Verfahrensgovernance", "CAELO steuert das Verfahren, anstatt Mitarbeitende lediglich zu unterstützen."],
        ["Auditierbarkeit und Kontrolle", "Jeder Schritt ist nachvollziehbar, überprüfbar und mit den operativen Regeln vereinbar."],
        ["Enterprise-Integration", "Eine Architektur zur Integration in bestehende Systeme, Clouds und Plattformen."],
      ],
    },
  },
  es: {
    hero: {
      label: "CAELO",
      title: "La arquitectura de gobernanza procedimental para la inteligencia artificial.",
      description: "CAELO gobierna procedimientos complejos mediante reglas, fuentes, roles, estados, controles, excepciones y supervisión humana, haciendo que cada paso sea trazable y auditable.",
      statement: "No se limita a automatizar los procesos. Gobierna su ejecución.",
      primary: "Iniciar una conversación",
      secondary: "Descubrir cómo funciona",
    },
    problem: {
      title: "Cuando la inteligencia artificial interviene en un procedimiento, debe estar gobernada.",
      text: "En entornos regulados no basta con obtener una respuesta. Es necesario saber qué fuentes se utilizaron, qué reglas se aplicaron, quién puede intervenir y cómo reconstruir cada paso.",
    },
    identity: {
      badge: "Identidad de la plataforma",
      title: "Qué es CAELO",
      lead: "Una plataforma de inteligencia procedimental gobernada para entornos complejos y regulados.",
      body: "CAELO estructura el procedimiento antes de que la inteligencia artificial opere en él. Conecta fuentes, reglas, roles, estados, controles, excepciones y evidencias, manteniendo la responsabilidad de la decisión bajo supervisión humana.",
      notTitle: "No es",
      notText: "Un chatbot, un motor de búsqueda, un copiloto genérico ni un agente autónomo.",
      isTitle: "Es",
      isText: "Una infraestructura de gobernanza procedimental que delimita lo que el sistema puede hacer, hace visible lo que está haciendo y permite reconstruir lo que ha hecho.",
    },
    engine: {
      title: "Supervisión operativa y gobernanza procedimental",
      command: "El Command Center hace visibles el estado del procedimiento, las actividades en curso, las reglas aplicadas, los controles ejecutados, las excepciones detectadas, las evidencias disponibles y los puntos que requieren intervención humana.",
      mother: "El Mother Engine gobierna la lógica común: estados, eventos, transiciones, roles, condiciones, controles y excepciones. Los verticales especializados aplican esta arquitectura a las fuentes y reglas de cada dominio.",
      closing: "Un único motor de gobernanza. Múltiples verticales especializados.",
      cta: "Explorar los verticales",
    },
    assessment: {
      badge: "Análisis del posicionamiento tecnológico",
      title: "El posicionamiento arquitectónico de CAELO",
      text: "Este análisis de posicionamiento fue elaborado mediante sistemas de evaluación arquitectónica y benchmarking independiente, basándose en la documentación técnica de CAELO y en la comparación con los marcos de referencia para la IA Enterprise.",
      cta: "Leer el análisis de posicionamiento",
    },
    features: {
      title: "Los componentes de la gobernanza procedimental",
      text: "CAELO coordina fuentes, reglas, roles, controles, excepciones y evidencias en una única arquitectura, integrable con los sistemas existentes.",
    },
    audiences: {
      paBadge: "Administración pública",
      paTitle: "CAELO para la Administración pública",
      paText: "Un nivel de gobernanza procedimental para gestionar expedientes, documentos, reglas y operadores, garantizando trazabilidad, control de fuentes y coherencia durante todo el procedimiento.",
      paCta: "Ver soluciones públicas",
      companyBadge: "Empresas y socios",
      companyTitle: "CAELO para empresas y socios",
      companyText: "Un nivel de gobernanza integrable con CRM, ERP, ticketing y sistemas documentales para controlar reclamaciones, procesos internos y actividades de alta responsabilidad sin sustituir las infraestructuras existentes.",
      companyCta: "Ver soluciones empresariales",
    },
    contact: {
      title: "¿Tienes un procedimiento complejo que gobernar?",
      text: "Conversemos sobre el contexto operativo, las fuentes, las restricciones y los requisitos de gobernanza de tu organización.",
      items: [
        ["Gobernanza procedimental", "CAELO gobierna el procedimiento, no se limita a asistir al operador."],
        ["Auditabilidad y control", "Cada paso es trazable, verificable y coherente con las reglas operativas."],
        ["Integración enterprise", "Una arquitectura diseñada para integrarse con sistemas, nubes y plataformas existentes."],
      ],
    },
  },
} as const;

export default function Home() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;
  const features = getFeatures(lang);

  return (
    <Layout>
      <section className="relative min-h-[76vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/1.jpg" alt="CAELO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-5xl mx-auto text-center" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle}>
            <div className="text-sm md:text-base uppercase tracking-[0.35em] font-semibold text-white/80 mb-5">{t.hero.label}</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{t.hero.description}</p>
            <p className="text-lg md:text-xl font-semibold text-white mt-6">{t.hero.statement}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild><Link to="/contatti">{t.hero.primary}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild><a href="#cos-e-caelo">{t.hero.secondary}</a></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.problem.title}</h2>
            <p className="text-xl text-muted-foreground">{t.problem.text}</p>
          </motion.div>
        </div>
      </section>

      <section id="cos-e-caelo" className="py-24 bg-muted/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">{t.identity.badge}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.identity.title}</h2>
              <p className="text-2xl font-semibold leading-relaxed mb-6">{t.identity.lead}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.identity.body}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="rounded-3xl border border-border bg-background p-7"><div className="text-sm uppercase tracking-[0.18em] text-muted-foreground font-semibold mb-3">{t.identity.notTitle}</div><p className="text-lg font-semibold leading-relaxed">{t.identity.notText}</p></div>
                <div className="rounded-3xl border border-primary/20 bg-primary/5 p-7"><div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">{t.identity.isTitle}</div><p className="text-lg font-semibold leading-relaxed">{t.identity.isText}</p></div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <h3 className="text-3xl font-bold mb-6">{t.engine.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t.engine.command}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.engine.mother}</p>
              <div className="rounded-2xl bg-primary/10 p-6 mb-6"><p className="text-xl font-bold text-primary">{t.engine.closing}</p></div>
              <Button variant="outline" size="lg" asChild><Link to="/soluzioni">{t.engine.cta}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="max-w-6xl mx-auto rounded-[2rem] border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">{t.assessment.badge}</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.assessment.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{t.assessment.text}</p>
              </div>
              <Button size="lg" className="text-lg px-8 py-6 whitespace-nowrap" asChild><Link to="/valutazione-indipendente">{t.assessment.cta}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.features.title}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.features.text}</p>
          </motion.div>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.slice(0, 6).map((feature, index) => <motion.div key={feature.id} variants={staggerItem}><FeatureCard feature={feature} index={index} /></motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem} className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col">
              <div className="mb-6"><span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{t.audiences.paBadge}</span></div>
              <h3 className="text-3xl font-bold mb-5">{t.audiences.paTitle}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.audiences.paText}</p>
              <div className="mt-auto"><Button size="lg" className="text-lg px-8 py-6" asChild><Link to="/soluzioni">{t.audiences.paCta}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button></div>
            </motion.div>
            <motion.div variants={staggerItem} className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col">
              <div className="mb-6"><span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{t.audiences.companyBadge}</span></div>
              <h3 className="text-3xl font-bold mb-5">{t.audiences.companyTitle}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.audiences.companyText}</p>
              <div className="mt-auto"><Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild><Link to="/aziende">{t.audiences.companyCta}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0"><img src={IMAGES.DIGITAL_ADMIN_1} alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-12"><h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2><p className="text-xl text-muted-foreground">{t.contact.text}</p></div>
              <DemoRequestForm />
              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                {t.contact.items.map(([title, description]) => <div key={title} className="flex flex-col items-center"><CheckCircle2 className="w-8 h-8 text-primary mb-3" /><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground">{description}</p></div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
