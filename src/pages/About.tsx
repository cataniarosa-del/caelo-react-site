import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Scale, Cpu, ShieldCheck } from "lucide-react";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const copy = {
  it: {
    badge: "Chi siamo",
    heroTitle: "Governiamo la complessità per costruire decisioni più giuste",
    heroText: "CAELO nasce dall’incontro tra due competenze complementari: la progettazione giuridico-procedurale e l’architettura dei sistemi di intelligenza artificiale.",
    ethicsTitle: "Tecnologia, responsabilità e amministrazione giusta",
    ethicsText: "Per noi l’etica dell’intelligenza artificiale non è una dichiarazione astratta. Diventa concreta quando un sistema impedisce che una persona subisca le conseguenze di un procedimento incoerente, incompleto o non verificato.",
    ethicsItems: ["Applicare le regole in modo coerente", "Riconoscere e governare le eccezioni", "Verificare le fonti prima del loro utilizzo", "Rendere visibile il percorso seguito", "Mantenere identificabile la responsabilità umana", "Correggere gli errori prima che producano conseguenze"],
    ethicsQuote: "L’etica non viene aggiunta al sistema alla fine. È incorporata nel modo in cui il procedimento viene progettato, governato e controllato.",
    foundersLabel: "Le fondatrici",
    foundersTitle: "Due competenze, un’unica architettura di governo",
    keySkills: "Competenze chiave",
    claudiaRole: "Co-Founder & CEO",
    claudiaSubtitle: "Legal-Procedural Methodology Architect",
    claudiaBio: [
      "Claudia Catania è co-fondatrice e CEO di CAELO ed è l’ideatrice della metodologia giuridico-procedurale sulla quale è costruita la piattaforma.",
      "Trasforma norme, procedimenti amministrativi, prassi operative e conoscenza specialistica in architetture procedurali governabili, definendo fonti, regole, ruoli, stati, controlli, eccezioni, passaggi decisionali e punti di supervisione umana.",
      "Il suo lavoro precede l’implementazione software: stabilisce che cosa il sistema deve governare, secondo quali regole e con quali responsabilità. Come CEO guida inoltre il posizionamento strategico, le relazioni istituzionali, lo sviluppo dei verticali, le partnership e l’espansione internazionale."
    ],
    claudiaSkills: ["Progettazione giuridico-procedurale", "Governance dell’intelligenza artificiale", "Analisi normativa e procedimenti amministrativi", "Compliance by design", "Supervisione umana e responsabilità", "Relazioni istituzionali", "Strategia e sviluppo internazionale"],
    rosaRole: "Founder & Chief System Architect",
    rosaSubtitle: "Chief System Architect",
    rosaBio: [
      "Rosa Catania è fondatrice e Chief System Architect di CAELO.",
      "Trasforma l’architettura procedurale in una piattaforma software scalabile, modulare e integrabile. È responsabile della progettazione tecnica del sistema, del Mother Engine e della traduzione dei modelli procedurali in componenti capaci di governare regole, stati, controlli, evidenze e interventi umani.",
      "Il suo lavoro definisce come il sistema realizza tecnicamente il modello procedurale, garantendo coerenza architetturale, modularità dei verticali, sicurezza, interoperabilità, scalabilità e affidabilità dell’esecuzione."
    ],
    rosaSkills: ["Architettura dei sistemi AI", "Progettazione del Mother Engine", "Traduzione dei modelli procedurali in software", "Orchestrazione dei workflow", "Architetture modulari e multidominio", "Integrazione dei sistemi", "Sicurezza, affidabilità e scalabilità"],
    methodLabel: "Il metodo CAELO",
    methodTitle: "Due architetture, un solo sistema",
    proceduralTitle: "Architettura procedurale",
    proceduralText: "Definisce che cosa deve accadere, in quale ordine, sulla base di quali fonti, con quali controlli, sotto la responsabilità di chi e come devono essere gestite le eccezioni.",
    proceduralStrong: "La metodologia stabilisce la logica del procedimento.",
    softwareTitle: "Architettura software",
    softwareText: "Traduce il modello in componenti eseguibili, moduli di dominio, workflow, controlli tecnici, interfacce, integrazioni e infrastrutture scalabili e sicure.",
    softwareStrong: "L’architettura software rende operativa la logica procedurale.",
    engineTitle: "Un motore universale, molteplici verticali",
    engineText: "Il Mother Engine costituisce l’architettura comune di governance procedurale. Su questa base vengono sviluppati verticali specialistici, ciascuno costruito attraverso analisi del dominio, progettazione procedurale e successiva implementazione software.",
    closing: "CAELO nasce dalla convinzione che la tecnologia debba rendere le decisioni più comprensibili, più controllabili e più giuste."
  },
  en: {
    badge: "About us",
    heroTitle: "Governing complexity to build fairer decisions",
    heroText: "CAELO was created from the convergence of two complementary disciplines: legal-procedural design and artificial intelligence systems architecture.",
    ethicsTitle: "Technology, responsibility and fair administration",
    ethicsText: "For us, AI ethics is not an abstract declaration. It becomes concrete when a system prevents a person from suffering the consequences of an inconsistent, incomplete or unverified procedure.",
    ethicsItems: ["Apply rules consistently", "Recognise and govern exceptions", "Verify sources before use", "Make the path followed visible", "Keep human responsibility identifiable", "Correct errors before they produce consequences"],
    ethicsQuote: "Ethics is not added to the system at the end. It is embedded in the way the procedure is designed, governed and controlled.",
    foundersLabel: "The founders",
    foundersTitle: "Two disciplines, one governance architecture",
    keySkills: "Core competencies",
    claudiaRole: "Co-Founder & CEO",
    claudiaSubtitle: "Legal-Procedural Methodology Architect",
    claudiaBio: [
      "Claudia Catania is Co-Founder and CEO of CAELO and the creator of the legal-procedural methodology on which the platform is built.",
      "She transforms regulations, administrative procedures, operational practices and specialist knowledge into governable procedural architectures by defining sources, rules, roles, states, controls, exceptions, decision steps and points of human supervision.",
      "Her work precedes software implementation: it establishes what the system must govern, under which rules and with which responsibilities. As CEO, she also leads strategic positioning, institutional relations, vertical development, partnerships and international expansion."
    ],
    claudiaSkills: ["Legal-procedural design", "Artificial intelligence governance", "Regulatory analysis and administrative procedures", "Compliance by design", "Human oversight and accountability", "Institutional relations", "Strategy and international development"],
    rosaRole: "Founder & Chief System Architect",
    rosaSubtitle: "Chief System Architect",
    rosaBio: [
      "Rosa Catania is Founder and Chief System Architect of CAELO.",
      "She transforms the procedural architecture into a scalable, modular and integrable software platform. She is responsible for the technical design of the system, the Mother Engine and the translation of procedural models into components capable of governing rules, states, controls, evidence and human interventions.",
      "Her work defines how the system technically implements the procedural model, ensuring architectural consistency, vertical modularity, security, interoperability, scalability and reliable execution."
    ],
    rosaSkills: ["AI systems architecture", "Mother Engine design", "Translation of procedural models into software", "Workflow orchestration", "Modular and multi-domain architectures", "Systems integration", "Security, reliability and scalability"],
    methodLabel: "The CAELO method",
    methodTitle: "Two architectures, one system",
    proceduralTitle: "Procedural architecture",
    proceduralText: "It defines what must happen, in which order, on the basis of which sources, with which controls, under whose responsibility and how exceptions must be handled.",
    proceduralStrong: "The methodology establishes the logic of the procedure.",
    softwareTitle: "Software architecture",
    softwareText: "It translates the model into executable components, domain modules, workflows, technical controls, interfaces, integrations and scalable, secure infrastructure.",
    softwareStrong: "The software architecture makes the procedural logic operational.",
    engineTitle: "One universal engine, multiple verticals",
    engineText: "The Mother Engine is the common procedural governance architecture. Specialist verticals are developed on this foundation, each built through domain analysis, procedural design and subsequent software implementation.",
    closing: "CAELO is founded on the belief that technology should make decisions more understandable, more controllable and fairer."
  },
  fr: {
    badge: "À propos",
    heroTitle: "Gouverner la complexité pour construire des décisions plus justes",
    heroText: "CAELO est né de la rencontre de deux compétences complémentaires : la conception juridico-procédurale et l’architecture des systèmes d’intelligence artificielle.",
    ethicsTitle: "Technologie, responsabilité et administration équitable",
    ethicsText: "Pour nous, l’éthique de l’intelligence artificielle n’est pas une déclaration abstraite. Elle devient concrète lorsqu’un système empêche qu’une personne subisse les conséquences d’une procédure incohérente, incomplète ou non vérifiée.",
    ethicsItems: ["Appliquer les règles de manière cohérente", "Reconnaître et gouverner les exceptions", "Vérifier les sources avant leur utilisation", "Rendre visible le parcours suivi", "Maintenir la responsabilité humaine identifiable", "Corriger les erreurs avant qu’elles ne produisent des conséquences"],
    ethicsQuote: "L’éthique n’est pas ajoutée au système à la fin. Elle est intégrée à la manière dont la procédure est conçue, gouvernée et contrôlée.",
    foundersLabel: "Les fondatrices",
    foundersTitle: "Deux compétences, une seule architecture de gouvernance",
    keySkills: "Compétences clés",
    claudiaRole: "Co-Founder & CEO",
    claudiaSubtitle: "Legal-Procedural Methodology Architect",
    claudiaBio: [
      "Claudia Catania est cofondatrice et CEO de CAELO ainsi que la conceptrice de la méthodologie juridico-procédurale sur laquelle repose la plateforme.",
      "Elle transforme les normes, les procédures administratives, les pratiques opérationnelles et les connaissances spécialisées en architectures procédurales gouvernables, en définissant les sources, règles, rôles, états, contrôles, exceptions, étapes décisionnelles et points de supervision humaine.",
      "Son travail précède l’implémentation logicielle : il établit ce que le système doit gouverner, selon quelles règles et avec quelles responsabilités. En tant que CEO, elle dirige également le positionnement stratégique, les relations institutionnelles, le développement des verticales, les partenariats et l’expansion internationale."
    ],
    claudiaSkills: ["Conception juridico-procédurale", "Gouvernance de l’intelligence artificielle", "Analyse réglementaire et procédures administratives", "Compliance by design", "Supervision humaine et responsabilité", "Relations institutionnelles", "Stratégie et développement international"],
    rosaRole: "Founder & Chief System Architect",
    rosaSubtitle: "Chief System Architect",
    rosaBio: [
      "Rosa Catania est fondatrice et Chief System Architect de CAELO.",
      "Elle transforme l’architecture procédurale en une plateforme logicielle évolutive, modulaire et intégrable. Elle est responsable de la conception technique du système, du Mother Engine et de la traduction des modèles procéduraux en composants capables de gouverner règles, états, contrôles, preuves et interventions humaines.",
      "Son travail définit la manière dont le système réalise techniquement le modèle procédural, en garantissant cohérence architecturale, modularité des verticales, sécurité, interopérabilité, évolutivité et fiabilité de l’exécution."
    ],
    rosaSkills: ["Architecture des systèmes d’IA", "Conception du Mother Engine", "Traduction des modèles procéduraux en logiciel", "Orchestration des workflows", "Architectures modulaires et multidomaines", "Intégration des systèmes", "Sécurité, fiabilité et évolutivité"],
    methodLabel: "La méthode CAELO",
    methodTitle: "Deux architectures, un seul système",
    proceduralTitle: "Architecture procédurale",
    proceduralText: "Elle définit ce qui doit se produire, dans quel ordre, sur la base de quelles sources, avec quels contrôles, sous la responsabilité de qui et comment les exceptions doivent être gérées.",
    proceduralStrong: "La méthodologie établit la logique de la procédure.",
    softwareTitle: "Architecture logicielle",
    softwareText: "Elle traduit le modèle en composants exécutables, modules de domaine, workflows, contrôles techniques, interfaces, intégrations et infrastructures évolutives et sécurisées.",
    softwareStrong: "L’architecture logicielle rend la logique procédurale opérationnelle.",
    engineTitle: "Un moteur universel, plusieurs verticales",
    engineText: "Le Mother Engine constitue l’architecture commune de gouvernance procédurale. Des verticales spécialisées sont développées sur cette base, chacune construite grâce à l’analyse du domaine, à la conception procédurale puis à l’implémentation logicielle.",
    closing: "CAELO repose sur la conviction que la technologie doit rendre les décisions plus compréhensibles, plus contrôlables et plus justes."
  },
  de: {
    badge: "Über uns",
    heroTitle: "Komplexität steuern, um gerechtere Entscheidungen zu ermöglichen",
    heroText: "CAELO entstand aus dem Zusammenspiel zweier komplementärer Kompetenzen: rechtsverfahrensbezogener Gestaltung und Architektur von Systemen der künstlichen Intelligenz.",
    ethicsTitle: "Technologie, Verantwortung und gerechte Verwaltung",
    ethicsText: "Für uns ist KI-Ethik keine abstrakte Erklärung. Sie wird konkret, wenn ein System verhindert, dass eine Person die Folgen eines inkonsistenten, unvollständigen oder ungeprüften Verfahrens tragen muss.",
    ethicsItems: ["Regeln konsistent anwenden", "Ausnahmen erkennen und steuern", "Quellen vor ihrer Nutzung prüfen", "Den eingeschlagenen Weg sichtbar machen", "Menschliche Verantwortung eindeutig zuordnen", "Fehler korrigieren, bevor sie Folgen verursachen"],
    ethicsQuote: "Ethik wird dem System nicht am Ende hinzugefügt. Sie ist in der Art verankert, wie das Verfahren gestaltet, gesteuert und kontrolliert wird.",
    foundersLabel: "Die Gründerinnen",
    foundersTitle: "Zwei Kompetenzen, eine Governance-Architektur",
    keySkills: "Kernkompetenzen",
    claudiaRole: "Co-Founder & CEO",
    claudiaSubtitle: "Legal-Procedural Methodology Architect",
    claudiaBio: [
      "Claudia Catania ist Mitgründerin und CEO von CAELO sowie Entwicklerin der rechtsverfahrensbezogenen Methodik, auf der die Plattform beruht.",
      "Sie überführt Vorschriften, Verwaltungsverfahren, operative Praktiken und Fachwissen in steuerbare Verfahrensarchitekturen und definiert Quellen, Regeln, Rollen, Zustände, Kontrollen, Ausnahmen, Entscheidungsschritte und Punkte menschlicher Aufsicht.",
      "Ihre Arbeit geht der Softwareimplementierung voraus: Sie legt fest, was das System nach welchen Regeln und mit welchen Verantwortlichkeiten steuern muss. Als CEO verantwortet sie außerdem die strategische Positionierung, institutionelle Beziehungen, die Entwicklung der Vertikalen, Partnerschaften und die internationale Expansion."
    ],
    claudiaSkills: ["Rechtsverfahrensbezogene Gestaltung", "Governance künstlicher Intelligenz", "Regulatorische Analyse und Verwaltungsverfahren", "Compliance by design", "Menschliche Aufsicht und Verantwortung", "Institutionelle Beziehungen", "Strategie und internationale Entwicklung"],
    rosaRole: "Founder & Chief System Architect",
    rosaSubtitle: "Chief System Architect",
    rosaBio: [
      "Rosa Catania ist Gründerin und Chief System Architect von CAELO.",
      "Sie überführt die Verfahrensarchitektur in eine skalierbare, modulare und integrierbare Softwareplattform. Sie verantwortet die technische Gestaltung des Systems, der Mother Engine und die Übersetzung der Verfahrensmodelle in Komponenten, die Regeln, Zustände, Kontrollen, Nachweise und menschliche Eingriffe steuern können.",
      "Ihre Arbeit definiert, wie das System das Verfahrensmodell technisch umsetzt, und gewährleistet architektonische Konsistenz, Modularität der Vertikalen, Sicherheit, Interoperabilität, Skalierbarkeit und zuverlässige Ausführung."
    ],
    rosaSkills: ["Architektur von KI-Systemen", "Entwicklung der Mother Engine", "Übersetzung von Verfahrensmodellen in Software", "Workflow-Orchestrierung", "Modulare und domänenübergreifende Architekturen", "Systemintegration", "Sicherheit, Zuverlässigkeit und Skalierbarkeit"],
    methodLabel: "Die CAELO-Methode",
    methodTitle: "Zwei Architekturen, ein System",
    proceduralTitle: "Verfahrensarchitektur",
    proceduralText: "Sie definiert, was in welcher Reihenfolge auf Grundlage welcher Quellen, mit welchen Kontrollen, unter wessen Verantwortung und mit welchem Umgang mit Ausnahmen geschehen muss.",
    proceduralStrong: "Die Methodik legt die Logik des Verfahrens fest.",
    softwareTitle: "Softwarearchitektur",
    softwareText: "Sie übersetzt das Modell in ausführbare Komponenten, Domänenmodule, Workflows, technische Kontrollen, Schnittstellen, Integrationen sowie skalierbare und sichere Infrastrukturen.",
    softwareStrong: "Die Softwarearchitektur macht die Verfahrenslogik operativ.",
    engineTitle: "Eine universelle Engine, mehrere Vertikalen",
    engineText: "Die Mother Engine bildet die gemeinsame Architektur der Verfahrensgovernance. Auf dieser Grundlage werden spezialisierte Vertikalen entwickelt, die jeweils durch Domänenanalyse, Verfahrensgestaltung und anschließende Softwareimplementierung entstehen.",
    closing: "CAELO beruht auf der Überzeugung, dass Technologie Entscheidungen verständlicher, kontrollierbarer und gerechter machen muss."
  },
  es: {
    badge: "Quiénes somos",
    heroTitle: "Gobernamos la complejidad para construir decisiones más justas",
    heroText: "CAELO nace del encuentro entre dos competencias complementarias: el diseño jurídico-procedimental y la arquitectura de sistemas de inteligencia artificial.",
    ethicsTitle: "Tecnología, responsabilidad y administración justa",
    ethicsText: "Para nosotros, la ética de la inteligencia artificial no es una declaración abstracta. Se vuelve concreta cuando un sistema evita que una persona sufra las consecuencias de un procedimiento incoherente, incompleto o no verificado.",
    ethicsItems: ["Aplicar las reglas de forma coherente", "Reconocer y gobernar las excepciones", "Verificar las fuentes antes de utilizarlas", "Hacer visible el recorrido seguido", "Mantener identificable la responsabilidad humana", "Corregir los errores antes de que produzcan consecuencias"],
    ethicsQuote: "La ética no se añade al sistema al final. Está incorporada en la forma en que el procedimiento se diseña, se gobierna y se controla.",
    foundersLabel: "Las fundadoras",
    foundersTitle: "Dos competencias, una única arquitectura de gobernanza",
    keySkills: "Competencias clave",
    claudiaRole: "Co-Founder & CEO",
    claudiaSubtitle: "Legal-Procedural Methodology Architect",
    claudiaBio: [
      "Claudia Catania es cofundadora y CEO de CAELO, y es la creadora de la metodología jurídico-procedimental sobre la que se construye la plataforma.",
      "Transforma normas, procedimientos administrativos, prácticas operativas y conocimiento especializado en arquitecturas procedimentales gobernables, definiendo fuentes, reglas, roles, estados, controles, excepciones, pasos decisionales y puntos de supervisión humana.",
      "Su trabajo precede a la implementación del software: establece qué debe gobernar el sistema, con qué reglas y bajo qué responsabilidades. Como CEO, también dirige el posicionamiento estratégico, las relaciones institucionales, el desarrollo de verticales, las alianzas y la expansión internacional."
    ],
    claudiaSkills: ["Diseño jurídico-procedimental", "Gobernanza de la inteligencia artificial", "Análisis normativo y procedimientos administrativos", "Compliance by design", "Supervisión humana y responsabilidad", "Relaciones institucionales", "Estrategia y desarrollo internacional"],
    rosaRole: "Founder & Chief System Architect",
    rosaSubtitle: "Chief System Architect",
    rosaBio: [
      "Rosa Catania es fundadora y Chief System Architect de CAELO.",
      "Transforma la arquitectura procedimental en una plataforma de software escalable, modular e integrable. Es responsable del diseño técnico del sistema, del Mother Engine y de la traducción de los modelos procedimentales en componentes capaces de gobernar reglas, estados, controles, evidencias e intervenciones humanas.",
      "Su trabajo define cómo el sistema implementa técnicamente el modelo procedimental, garantizando coherencia arquitectónica, modularidad de las verticales, seguridad, interoperabilidad, escalabilidad y fiabilidad de la ejecución."
    ],
    rosaSkills: ["Arquitectura de sistemas de IA", "Diseño del Mother Engine", "Traducción de modelos procedimentales a software", "Orquestación de workflows", "Arquitecturas modulares y multidominio", "Integración de sistemas", "Seguridad, fiabilidad y escalabilidad"],
    methodLabel: "El método CAELO",
    methodTitle: "Dos arquitecturas, un solo sistema",
    proceduralTitle: "Arquitectura procedimental",
    proceduralText: "Define qué debe ocurrir, en qué orden, sobre la base de qué fuentes, con qué controles, bajo la responsabilidad de quién y cómo deben gestionarse las excepciones.",
    proceduralStrong: "La metodología establece la lógica del procedimiento.",
    softwareTitle: "Arquitectura de software",
    softwareText: "Traduce el modelo en componentes ejecutables, módulos de dominio, workflows, controles técnicos, interfaces, integraciones e infraestructuras escalables y seguras.",
    softwareStrong: "La arquitectura de software hace operativa la lógica procedimental.",
    engineTitle: "Un motor universal, múltiples verticales",
    engineText: "El Mother Engine constituye la arquitectura común de gobernanza procedimental. Sobre esta base se desarrollan verticales especializadas, cada una construida mediante análisis del dominio, diseño procedimental y posterior implementación de software.",
    closing: "CAELO nace de la convicción de que la tecnología debe hacer que las decisiones sean más comprensibles, más controlables y más justas."
  }
} as const;

export default function About() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <Layout>
      <section className="relative overflow-hidden py-24 md:py-32 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-6xl mx-auto text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">{t.badge}</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.heroText}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-7"><Scale className="w-8 h-8 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ethicsTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t.ethicsText}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="space-y-5">
              {t.ethicsItems.map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-5 flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" /><span className="text-lg leading-relaxed">{item}</span></div>)}
            </motion.div>
          </div>
          <div className="max-w-5xl mx-auto mt-12 rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">{t.ethicsQuote}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-14"><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.foundersLabel}</span><h2 className="text-4xl md:text-5xl font-bold mt-3">{t.foundersTitle}</h2></div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-4">{t.claudiaRole}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Claudia Catania</h3>
              <p className="text-xl font-semibold mb-7">{t.claudiaSubtitle}</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">{t.claudiaBio.map((p) => <p key={p}>{p}</p>)}</div>
              <h4 className="font-bold mb-4">{t.keySkills}</h4>
              <div className="grid sm:grid-cols-2 gap-3">{t.claudiaSkills.map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />{item}</div>)}</div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-4">{t.rosaRole}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Rosa Catania</h3>
              <p className="text-xl font-semibold mb-7">{t.rosaSubtitle}</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">{t.rosaBio.map((p) => <p key={p}>{p}</p>)}</div>
              <h4 className="font-bold mb-4">{t.keySkills}</h4>
              <div className="grid sm:grid-cols-2 gap-3">{t.rosaSkills.map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />{item}</div>)}</div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-14"><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">{t.methodLabel}</span><h2 className="text-4xl md:text-5xl font-bold mt-3">{t.methodTitle}</h2></div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={staggerItem} className="rounded-[2rem] border border-border bg-card p-8 md:p-10"><div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Scale className="w-7 h-7 text-primary" /></div><h3 className="text-3xl font-bold mb-5">{t.proceduralTitle}</h3><p className="text-muted-foreground leading-relaxed mb-6">{t.proceduralText}</p><p className="font-semibold">{t.proceduralStrong}</p></motion.div>
            <motion.div variants={staggerItem} className="rounded-[2rem] border border-border bg-card p-8 md:p-10"><div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Cpu className="w-7 h-7 text-primary" /></div><h3 className="text-3xl font-bold mb-5">{t.softwareTitle}</h3><p className="text-muted-foreground leading-relaxed mb-6">{t.softwareText}</p><p className="font-semibold">{t.softwareStrong}</p></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-border bg-card p-9 md:p-14 text-center shadow-sm">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.engineTitle}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{t.engineText}</p>
            <p className="text-2xl font-bold">{t.closing}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
