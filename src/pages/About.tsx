import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import {
  springPresets,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { IMAGES } from "@/assets/images";
import { Target, Users, Shield, Award, Zap, Heart } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

const aboutTexts = {
  it: {
    title: "Chi Siamo",
    subtitle: "Progettiamo sistemi decisionali auditabili e conformi per la Pubblica Amministrazione.",
    missionTitle: "La Nostra Missione",
    missionText: "Rendere i processi amministrativi più leggibili, controllabili e sostenibili, attraverso una piattaforma che supporta operatori ed enti nella gestione di casi complessi, mantenendo sempre il controllo umano sulle decisioni.",
    visionTitle: "La Nostra Visione",
    visionText: "Una Pubblica Amministrazione in cui la tecnologia affianca i processi esistenti senza sostituirli, migliora l’operatività senza introdurre opacità e rende ogni passaggio più tracciabile, verificabile e integrabile nei contesti reali di lavoro.",
    valuesTitle: "I Nostri Valori",
    valuesSubtitle: "Principi che guidano la progettazione e l’evoluzione della piattaforma.",
    teamTitle: "Il Nostro Team",
    teamSubtitle: "Competenze integrate per la progettazione di sistemi decisionali auditabili nella Pubblica Amministrazione.",
    governanceTitle: "Conformità e Governance",
    governanceText: "Caelo è progettato per supportare requisiti di trasparenza, controllo umano e tracciabilità nei contesti pubblici ad alta responsabilità, con un approccio orientato alla verificabilità dei processi e all’allineamento normativo.",
    traceability: "Tracciabilità",
    traceabilityText: "Supporto alla registrazione e alla verificabilità dei passaggi operativi.",
    humanControl: "Controllo umano",
    humanControlText: "Supervisione dell’operatore nei punti critici del processo.",
    security: "Sicurezza e conformità",
    securityText: "Progettazione orientata alla protezione dei dati e all’allineamento ai requisiti applicabili.",
    values: [
      ["Trasparenza e Affidabilità", "Garantiamo tracciabilità delle attività, controllo umano sui passaggi critici e piena verificabilità dei processi supportati dalla piattaforma."],
      ["Innovazione Responsabile", "Sviluppiamo architetture orientate all’integrazione, all’auditabilità e alla conformità normativa, con un approccio pragmatico e controllato."],
      ["Supporto al lavoro pubblico", "Progettiamo sistemi che affiancano operatori ed enti nella gestione di processi complessi, migliorando chiarezza, continuità operativa e qualità del lavoro."],
      ["Eccellenza Tecnologica", "Costruiamo soluzioni basate su orchestrazione deterministica, knowledge engineering e strutture progettate per contesti pubblici ad alta responsabilità."],
    ],
    team: [
      ["Leadership", "Un team con competenze integrate in architetture AI deterministiche, diritto amministrativo e integrazione di sistemi complessi, orientato alla realizzazione di soluzioni scalabili e interoperabili per la pubblica amministrazione."],
      ["Ricerca e Sviluppo", "Ricercatori specializzati in architetture AI deterministiche, sistemi di orchestrazione e knowledge engineering, progettati per essere integrabili, auditabili e scalabili nei contesti della pubblica amministrazione."],
      ["Compliance e Qualità", "Esperti in conformità normativa, audit dei sistemi digitali e governance dei processi, con l’obiettivo di garantire riduzione del rischio operativo, tracciabilità delle decisioni e allineamento normativo."],
    ],
  },

  en: {
    title: "About Us",
    subtitle: "We design auditable and compliant decision systems for Public Administration.",
    missionTitle: "Our Mission",
    missionText: "To make administrative processes clearer, more controllable and sustainable through a platform that supports operators and public bodies in managing complex cases while keeping human control over decisions.",
    visionTitle: "Our Vision",
    visionText: "A Public Administration where technology supports existing processes without replacing them, improves operations without introducing opacity and makes every step more traceable, verifiable and integrated into real work contexts.",
    valuesTitle: "Our Values",
    valuesSubtitle: "The principles guiding the design and evolution of the platform.",
    teamTitle: "Our Team",
    teamSubtitle: "Integrated expertise for designing auditable decision systems for Public Administration.",
    governanceTitle: "Compliance and Governance",
    governanceText: "Caelo is designed to support transparency, human control and traceability requirements in high-responsibility public contexts, with an approach focused on process verifiability and regulatory alignment.",
    traceability: "Traceability",
    traceabilityText: "Support for recording and verifying operational steps.",
    humanControl: "Human control",
    humanControlText: "Operator supervision at critical points in the process.",
    security: "Security and compliance",
    securityText: "Design focused on data protection and alignment with applicable requirements.",
    values: [
      ["Transparency and Reliability", "We ensure activity traceability, human control over critical steps and full verifiability of the processes supported by the platform."],
      ["Responsible Innovation", "We develop architectures focused on integration, auditability and regulatory compliance, with a pragmatic and controlled approach."],
      ["Support for Public Work", "We design systems that support operators and public bodies in managing complex processes, improving clarity, operational continuity and work quality."],
      ["Technological Excellence", "We build solutions based on deterministic orchestration, knowledge engineering and structures designed for high-responsibility public contexts."],
    ],
    team: [
      ["Leadership", "A team with integrated expertise in deterministic AI architectures, administrative law and complex systems integration, focused on scalable and interoperable solutions for public administration."],
      ["Research and Development", "Researchers specialized in deterministic AI architectures, orchestration systems and knowledge engineering, designed to be integrable, auditable and scalable in public administration contexts."],
      ["Compliance and Quality", "Experts in regulatory compliance, digital systems auditing and process governance, focused on reducing operational risk, decision traceability and regulatory alignment."],
    ],
  },

  fr: {
    title: "À propos",
    subtitle: "Nous concevons des systèmes décisionnels auditables et conformes pour l’administration publique.",
    missionTitle: "Notre Mission",
    missionText: "Rendre les processus administratifs plus lisibles, contrôlables et durables grâce à une plateforme qui accompagne les opérateurs et les organismes publics dans la gestion de cas complexes, tout en maintenant le contrôle humain des décisions.",
    visionTitle: "Notre Vision",
    visionText: "Une administration publique où la technologie accompagne les processus existants sans les remplacer, améliore les opérations sans introduire d’opacité et rend chaque étape plus traçable, vérifiable et intégrée aux contextes réels de travail.",
    valuesTitle: "Nos Valeurs",
    valuesSubtitle: "Les principes qui guident la conception et l’évolution de la plateforme.",
    teamTitle: "Notre Équipe",
    teamSubtitle: "Des compétences intégrées pour concevoir des systèmes décisionnels auditables pour l’administration publique.",
    governanceTitle: "Conformité et Gouvernance",
    governanceText: "Caelo est conçu pour répondre aux exigences de transparence, de contrôle humain et de traçabilité dans les contextes publics à forte responsabilité.",
    traceability: "Traçabilité",
    traceabilityText: "Support à l’enregistrement et à la vérification des étapes opérationnelles.",
    humanControl: "Contrôle humain",
    humanControlText: "Supervision de l’opérateur aux points critiques du processus.",
    security: "Sécurité et conformité",
    securityText: "Conception orientée vers la protection des données et l’alignement réglementaire.",
    values: [
      ["Transparence et Fiabilité", "Nous garantissons la traçabilité des activités, le contrôle humain des étapes critiques et la vérifiabilité des processus."],
      ["Innovation Responsable", "Nous développons des architectures orientées vers l’intégration, l’auditabilité et la conformité réglementaire."],
      ["Soutien au travail public", "Nous concevons des systèmes qui accompagnent les opérateurs et les organismes publics dans les processus complexes."],
      ["Excellence Technologique", "Nous construisons des solutions fondées sur l’orchestration déterministe et l’ingénierie des connaissances."],
    ],
    team: [
      ["Leadership", "Une équipe dotée de compétences intégrées en IA déterministe, droit administratif et intégration de systèmes complexes."],
      ["Recherche et Développement", "Des chercheurs spécialisés dans les architectures IA déterministes, les systèmes d’orchestration et l’ingénierie des connaissances."],
      ["Conformité et Qualité", "Des experts en conformité réglementaire, audit des systèmes numériques et gouvernance des processus."],
    ],
  },

  de: {
    title: "Über uns",
    subtitle: "Wir entwickeln prüfbare und konforme Entscheidungssysteme für die öffentliche Verwaltung.",
    missionTitle: "Unsere Mission",
    missionText: "Administrative Prozesse verständlicher, kontrollierbarer und nachhaltiger zu machen, durch eine Plattform, die Mitarbeitende und Behörden bei komplexen Fällen unterstützt und die menschliche Kontrolle über Entscheidungen bewahrt.",
    visionTitle: "Unsere Vision",
    visionText: "Eine öffentliche Verwaltung, in der Technologie bestehende Prozesse unterstützt, ohne sie zu ersetzen, Abläufe verbessert und jeden Schritt nachvollziehbarer, überprüfbarer und integrierbarer macht.",
    valuesTitle: "Unsere Werte",
    valuesSubtitle: "Prinzipien, die die Gestaltung und Weiterentwicklung der Plattform leiten.",
    teamTitle: "Unser Team",
    teamSubtitle: "Integrierte Kompetenzen zur Entwicklung prüfbarer Entscheidungssysteme für die öffentliche Verwaltung.",
    governanceTitle: "Compliance und Governance",
    governanceText: "Caelo unterstützt Transparenz, menschliche Kontrolle und Nachvollziehbarkeit in verantwortungsvollen öffentlichen Kontexten.",
    traceability: "Nachvollziehbarkeit",
    traceabilityText: "Unterstützung bei der Dokumentation und Überprüfung operativer Schritte.",
    humanControl: "Menschliche Kontrolle",
    humanControlText: "Überwachung durch den Bediener an kritischen Prozesspunkten.",
    security: "Sicherheit und Compliance",
    securityText: "Entwicklung mit Fokus auf Datenschutz und regulatorische Anforderungen.",
    values: [
      ["Transparenz und Zuverlässigkeit", "Wir gewährleisten Nachvollziehbarkeit, menschliche Kontrolle kritischer Schritte und überprüfbare Prozesse."],
      ["Verantwortungsvolle Innovation", "Wir entwickeln Architekturen für Integration, Auditierbarkeit und regulatorische Konformität."],
      ["Unterstützung öffentlicher Arbeit", "Wir entwickeln Systeme, die Behörden und Mitarbeitende bei komplexen Prozessen unterstützen."],
      ["Technologische Exzellenz", "Wir bauen Lösungen auf Basis deterministischer Orchestrierung und Knowledge Engineering."],
    ],
    team: [
      ["Leadership", "Ein Team mit integrierter Expertise in deterministischen KI-Architekturen, Verwaltungsrecht und komplexer Systemintegration."],
      ["Forschung und Entwicklung", "Forschende mit Spezialisierung auf deterministische KI-Architekturen, Orchestrierungssysteme und Knowledge Engineering."],
      ["Compliance und Qualität", "Experten für regulatorische Compliance, digitale Systemaudits und Prozessgovernance."],
    ],
  },

  es: {
    title: "Quiénes somos",
    subtitle: "Diseñamos sistemas decisionales auditables y conformes para la Administración Pública.",
    missionTitle: "Nuestra Misión",
    missionText: "Hacer los procesos administrativos más legibles, controlables y sostenibles mediante una plataforma que apoya a operadores y entidades en la gestión de casos complejos, manteniendo siempre el control humano sobre las decisiones.",
    visionTitle: "Nuestra Visión",
    visionText: "Una Administración Pública donde la tecnología acompaña los procesos existentes sin sustituirlos, mejora la operatividad sin introducir opacidad y hace cada paso más trazable, verificable e integrable.",
    valuesTitle: "Nuestros Valores",
    valuesSubtitle: "Principios que guían el diseño y la evolución de la plataforma.",
    teamTitle: "Nuestro Equipo",
    teamSubtitle: "Competencias integradas para diseñar sistemas decisionales auditables para la Administración Pública.",
    governanceTitle: "Conformidad y Gobernanza",
    governanceText: "Caelo está diseñado para apoyar requisitos de transparencia, control humano y trazabilidad en contextos públicos de alta responsabilidad.",
    traceability: "Trazabilidad",
    traceabilityText: "Apoyo al registro y verificación de los pasos operativos.",
    humanControl: "Control humano",
    humanControlText: "Supervisión del operador en los puntos críticos del proceso.",
    security: "Seguridad y conformidad",
    securityText: "Diseño orientado a la protección de datos y al cumplimiento de requisitos aplicables.",
    values: [
      ["Transparencia y Fiabilidad", "Garantizamos trazabilidad de las actividades, control humano en pasos críticos y plena verificabilidad de los procesos."],
      ["Innovación Responsable", "Desarrollamos arquitecturas orientadas a la integración, auditabilidad y conformidad normativa."],
      ["Apoyo al trabajo público", "Diseñamos sistemas que acompañan a operadores y entidades en la gestión de procesos complejos."],
      ["Excelencia Tecnológica", "Construimos soluciones basadas en orquestación determinista e ingeniería del conocimiento."],
    ],
    team: [
      ["Leadership", "Un equipo con competencias integradas en arquitecturas de IA deterministas, derecho administrativo e integración de sistemas complejos."],
      ["Investigación y Desarrollo", "Investigadores especializados en arquitecturas de IA deterministas, sistemas de orquestación e ingeniería del conocimiento."],
      ["Compliance y Calidad", "Expertos en conformidad normativa, auditoría de sistemas digitales y gobernanza de procesos."],
    ],
  },
};

const icons = [Shield, Zap, Heart, Award];

export default function About() {
  const { lang } = useLanguage();
  const text = aboutTexts[lang];

  const values = text.values.map(([title, description], index) => ({
    icon: icons[index],
    title,
    description,
  }));

  const team = text.team.map(([role, description]) => ({
    role,
    description,
  }));

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={IMAGES.AI_GOVERNMENT_9} alt="Caelo AI Technology" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {text.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{text.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-5xl mx-auto">
              <motion.div variants={staggerItem} className="mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{text.missionTitle}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{text.missionText}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem}>
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{text.visionTitle}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">{text.visionText}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{text.valuesTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{text.valuesSubtitle}</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div key={index} variants={staggerItem} className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">{text.teamTitle}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{text.teamSubtitle}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="relative rounded-2xl overflow-hidden">
                  <img src={IMAGES.OFFICE_TECH_2} alt="Caelo Team" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </motion.div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                  {team.map((member, index) => (
                    <motion.div key={index} variants={staggerItem} className="bg-card rounded-xl p-6 border border-border">
                      <h3 className="text-xl font-semibold mb-2">{member.role}</h3>
                      <p className="text-muted-foreground">{member.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">{text.governanceTitle}</h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{text.governanceText}</p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">{text.traceability}</h4>
                    <p className="text-sm text-muted-foreground">{text.traceabilityText}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">{text.humanControl}</h4>
                    <p className="text-sm text-muted-foreground">{text.humanControlText}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">{text.security}</h4>
                    <p className="text-sm text-muted-foreground">{text.securityText}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
