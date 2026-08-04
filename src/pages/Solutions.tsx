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
};

const copy = {
  it: {
    heroTitle: "Soluzioni CAELO",
    heroText: "Verticali specialistici costruiti sulla stessa architettura universale di governance procedurale. Ogni soluzione mantiene fonti, regole, ruoli, controlli ed eccezioni specifici del proprio dominio.",
    label: "Verticali di dominio",
    title: "Dalla progettazione procedurale all’implementazione software",
    intro: "Per ogni verticale distinguiamo chiaramente l’architettura procedurale — definizione di fonti, regole, ruoli, stati, controlli, eccezioni e responsabilità — dalla successiva implementazione tecnica in codice.",
    proceduralLabel: "Architettura procedurale",
    softwareLabel: "Implementazione software",
    explore: "Scopri il verticale",
    study: "Approfondisci l’area di studio",
    verticals: [
      { slug:"passweb", category:"Previdenza e posizione assicurativa", title:"CAELO PassWeb", description:"Il primo verticale completo di CAELO, utilizzato come stress test interno su un procedimento amministrativo complesso, documentale e ad alta responsabilità operativa.", procedural:"Completa e sottoposta a verifica interna", software:"Completata e sottoposta a test interni" },
      { slug:"previdenza-spagna", category:"Previdenza internazionale", title:"CAELO Previdenza Assicurativa Spagnola", description:"Architettura procedurale dedicata ai procedimenti previdenziali e assicurativi nel contesto spagnolo, pronta per la successiva implementazione tecnica.", procedural:"Completa e pronta per l’implementazione", software:"Non ancora avviata" },
      { slug:"foresight", category:"Strategic Foresight", title:"CAELO Strategic Foresight", description:"Un verticale per governare scenari, fonti, assunzioni, vincoli, variabili, indicatori e verifiche in modo trasparente e ricostruibile.", procedural:"In progettazione avanzata", software:"Non ancora avviata" },
      { slug:"accesso-civico", category:"Procedimenti amministrativi", title:"CAELO Accesso Civico Semplice", description:"Un verticale dedicato a un procedimento breve e regolato, con termini, ruoli, controlli, eccezioni e responsabilità chiaramente identificabili.", procedural:"Definita", software:"Non ancora avviata" },
      { slug:"mepa", category:"Procurement pubblico", title:"CAELO Appalti sotto soglia / MePA", description:"Un verticale per governare affidamenti, soglie, condizioni, documenti, passaggi autorizzativi, eccezioni e responsabilità.", procedural:"Completa e verificata internamente attraverso casi di test", software:"Non ancora avviata" },
      { slug:"societario", category:"Diritto societario", title:"CAELO Societario", subtitle:"Governance e ricostruzione del fascicolo societario", status:"Verticale in fase di studio e progettazione", description:"Applicazione futura della governance procedurale CAELO all’attività istruttoria e documentale del professionista societario, mantenendo sempre l’avvocato al centro della decisione.", procedural:"In fase di studio e progettazione", software:"Non ancora avviata" }
    ] satisfies Vertical[]
  },
  en: {
    heroTitle: "CAELO Solutions",
    heroText: "Specialist verticals built on the same universal procedural governance architecture. Each solution preserves the sources, rules, roles, controls and exceptions specific to its domain.",
    label: "Domain verticals",
    title: "From procedural design to software implementation",
    intro: "For each vertical, we clearly distinguish procedural architecture — sources, rules, roles, states, controls, exceptions and responsibilities — from subsequent technical implementation in code.",
    proceduralLabel: "Procedural architecture",
    softwareLabel: "Software implementation",
    explore: "Explore the vertical",
    study: "Explore the study area",
    verticals: [
      { slug:"passweb", category:"Pensions and insurance records", title:"CAELO PassWeb", description:"CAELO’s first complete vertical, used as an internal stress test on a complex, document-intensive administrative procedure with high operational responsibility.", procedural:"Complete and internally reviewed", software:"Completed and internally tested" },
      { slug:"previdenza-spagna", category:"International social security", title:"CAELO Spanish Social Security and Insurance", description:"A procedural architecture dedicated to social security and insurance procedures in the Spanish context, ready for subsequent technical implementation.", procedural:"Complete and ready for implementation", software:"Not yet started" },
      { slug:"foresight", category:"Strategic Foresight", title:"CAELO Strategic Foresight", description:"A vertical for governing scenarios, sources, assumptions, constraints, variables, indicators and checks in a transparent and reconstructable way.", procedural:"Advanced design stage", software:"Not yet started" },
      { slug:"accesso-civico", category:"Administrative procedures", title:"CAELO Simple Civic Access", description:"A vertical dedicated to a short, regulated procedure with clearly identifiable deadlines, roles, controls, exceptions and responsibilities.", procedural:"Defined", software:"Not yet started" },
      { slug:"mepa", category:"Public procurement", title:"CAELO Below-threshold Procurement / MePA", description:"A vertical for governing awards, thresholds, conditions, documents, authorisation steps, exceptions and responsibilities.", procedural:"Complete and internally verified through test cases", software:"Not yet started" },
      { slug:"societario", category:"Company law", title:"CAELO Corporate", subtitle:"Governance and reconstruction of the corporate file", status:"Vertical under study and design", description:"A future application of CAELO procedural governance to the investigative and documentary work of corporate-law professionals, always keeping the lawyer at the centre of the decision.", procedural:"Under study and design", software:"Not yet started" }
    ] satisfies Vertical[]
  },
  fr: {
    heroTitle: "Solutions CAELO",
    heroText: "Des verticales spécialisées construites sur la même architecture universelle de gouvernance procédurale. Chaque solution conserve les sources, règles, rôles, contrôles et exceptions propres à son domaine.",
    label: "Verticales de domaine",
    title: "De la conception procédurale à l’implémentation logicielle",
    intro: "Pour chaque verticale, nous distinguons clairement l’architecture procédurale — sources, règles, rôles, états, contrôles, exceptions et responsabilités — de l’implémentation technique ultérieure dans le code.",
    proceduralLabel: "Architecture procédurale",
    softwareLabel: "Implémentation logicielle",
    explore: "Découvrir la verticale",
    study: "Approfondir le domaine d’étude",
    verticals: [
      { slug:"passweb", category:"Retraite et situation assurantielle", title:"CAELO PassWeb", description:"La première verticale complète de CAELO, utilisée comme test de résistance interne sur une procédure administrative complexe, documentaire et à forte responsabilité opérationnelle.", procedural:"Complète et soumise à vérification interne", software:"Achevée et soumise à des tests internes" },
      { slug:"previdenza-spagna", category:"Protection sociale internationale", title:"CAELO Protection sociale et assurance espagnoles", description:"Architecture procédurale consacrée aux procédures de protection sociale et d’assurance dans le contexte espagnol, prête pour l’implémentation technique ultérieure.", procedural:"Complète et prête pour l’implémentation", software:"Pas encore commencée" },
      { slug:"foresight", category:"Strategic Foresight", title:"CAELO Strategic Foresight", description:"Une verticale pour gouverner scénarios, sources, hypothèses, contraintes, variables, indicateurs et vérifications de manière transparente et reconstructible.", procedural:"Conception avancée", software:"Pas encore commencée" },
      { slug:"accesso-civico", category:"Procédures administratives", title:"CAELO Accès civique simple", description:"Une verticale consacrée à une procédure courte et réglementée, avec des délais, rôles, contrôles, exceptions et responsabilités clairement identifiables.", procedural:"Définie", software:"Pas encore commencée" },
      { slug:"mepa", category:"Marchés publics", title:"CAELO Marchés sous seuil / MePA", description:"Une verticale pour gouverner attributions, seuils, conditions, documents, étapes d’autorisation, exceptions et responsabilités.", procedural:"Complète et vérifiée en interne au moyen de cas de test", software:"Pas encore commencée" },
      { slug:"societario", category:"Droit des sociétés", title:"CAELO Sociétaire", subtitle:"Gouvernance et reconstitution du dossier sociétaire", status:"Verticale en phase d’étude et de conception", description:"Application future de la gouvernance procédurale CAELO à l’activité d’instruction et de documentation du professionnel du droit des sociétés, en maintenant toujours l’avocat au centre de la décision.", procedural:"En phase d’étude et de conception", software:"Pas encore commencée" }
    ] satisfies Vertical[]
  },
  de: {
    heroTitle: "CAELO-Lösungen",
    heroText: "Spezialisierte Vertikalen auf derselben universellen Architektur der Verfahrensgovernance. Jede Lösung bewahrt die domänenspezifischen Quellen, Regeln, Rollen, Kontrollen und Ausnahmen.",
    label: "Domänenvertikalen",
    title: "Von der Verfahrensgestaltung zur Softwareimplementierung",
    intro: "Für jede Vertikale unterscheiden wir klar zwischen Verfahrensarchitektur — Quellen, Regeln, Rollen, Zustände, Kontrollen, Ausnahmen und Verantwortlichkeiten — und anschließender technischer Umsetzung im Code.",
    proceduralLabel: "Verfahrensarchitektur",
    softwareLabel: "Softwareimplementierung",
    explore: "Vertikale entdecken",
    study: "Studienbereich vertiefen",
    verticals: [
      { slug:"passweb", category:"Rente und Versicherungsposition", title:"CAELO PassWeb", description:"Die erste vollständige CAELO-Vertikale, die als interner Stresstest für ein komplexes, dokumentenintensives Verwaltungsverfahren mit hoher operativer Verantwortung eingesetzt wurde.", procedural:"Vollständig und intern geprüft", software:"Abgeschlossen und intern getestet" },
      { slug:"previdenza-spagna", category:"Internationale soziale Sicherung", title:"CAELO Spanische soziale Sicherung und Versicherung", description:"Eine Verfahrensarchitektur für Sozialversicherungs- und Versicherungsverfahren im spanischen Kontext, bereit für die anschließende technische Implementierung.", procedural:"Vollständig und implementierungsbereit", software:"Noch nicht begonnen" },
      { slug:"foresight", category:"Strategic Foresight", title:"CAELO Strategic Foresight", description:"Eine Vertikale zur transparenten und nachvollziehbaren Steuerung von Szenarien, Quellen, Annahmen, Einschränkungen, Variablen, Indikatoren und Prüfungen.", procedural:"Fortgeschrittene Entwurfsphase", software:"Noch nicht begonnen" },
      { slug:"accesso-civico", category:"Verwaltungsverfahren", title:"CAELO Einfacher Bürgerzugang", description:"Eine Vertikale für ein kurzes, geregeltes Verfahren mit klar identifizierbaren Fristen, Rollen, Kontrollen, Ausnahmen und Verantwortlichkeiten.", procedural:"Definiert", software:"Noch nicht begonnen" },
      { slug:"mepa", category:"Öffentliche Beschaffung", title:"CAELO Unterschwellige Vergaben / MePA", description:"Eine Vertikale zur Steuerung von Vergaben, Schwellenwerten, Bedingungen, Dokumenten, Genehmigungsschritten, Ausnahmen und Verantwortlichkeiten.", procedural:"Vollständig und intern anhand von Testfällen verifiziert", software:"Noch nicht begonnen" },
      { slug:"societario", category:"Gesellschaftsrecht", title:"CAELO Gesellschaftsrecht", subtitle:"Governance und Rekonstruktion der Gesellschaftsakte", status:"Vertikale in Studien- und Entwurfsphase", description:"Künftige Anwendung der CAELO-Verfahrensgovernance auf die prüfende und dokumentarische Tätigkeit im Gesellschaftsrecht, wobei der Anwalt stets im Mittelpunkt der Entscheidung bleibt.", procedural:"In Studien- und Entwurfsphase", software:"Noch nicht begonnen" }
    ] satisfies Vertical[]
  },
  es: {
    heroTitle: "Soluciones CAELO",
    heroText: "Verticales especializadas construidas sobre la misma arquitectura universal de gobernanza procedimental. Cada solución mantiene las fuentes, reglas, roles, controles y excepciones específicos de su dominio.",
    label: "Verticales de dominio",
    title: "Del diseño procedimental a la implementación de software",
    intro: "Para cada vertical distinguimos claramente la arquitectura procedimental — fuentes, reglas, roles, estados, controles, excepciones y responsabilidades — de la posterior implementación técnica en código.",
    proceduralLabel: "Arquitectura procedimental",
    softwareLabel: "Implementación de software",
    explore: "Descubrir la vertical",
    study: "Profundizar en el área de estudio",
    verticals: [
      { slug:"passweb", category:"Pensiones y posición aseguradora", title:"CAELO PassWeb", description:"La primera vertical completa de CAELO, utilizada como prueba de estrés interna sobre un procedimiento administrativo complejo, documental y de alta responsabilidad operativa.", procedural:"Completa y sometida a verificación interna", software:"Completada y sometida a pruebas internas" },
      { slug:"previdenza-spagna", category:"Seguridad social internacional", title:"CAELO Seguridad Social y Seguros de España", description:"Arquitectura procedimental dedicada a los procedimientos de seguridad social y seguros en el contexto español, preparada para su posterior implementación técnica.", procedural:"Completa y preparada para la implementación", software:"Aún no iniciada" },
      { slug:"foresight", category:"Strategic Foresight", title:"CAELO Strategic Foresight", description:"Una vertical para gobernar escenarios, fuentes, supuestos, restricciones, variables, indicadores y verificaciones de forma transparente y reconstruible.", procedural:"En fase avanzada de diseño", software:"Aún no iniciada" },
      { slug:"accesso-civico", category:"Procedimientos administrativos", title:"CAELO Acceso Cívico Simple", description:"Una vertical dedicada a un procedimiento breve y regulado, con plazos, roles, controles, excepciones y responsabilidades claramente identificables.", procedural:"Definida", software:"Aún no iniciada" },
      { slug:"mepa", category:"Contratación pública", title:"CAELO Contratación por debajo del umbral / MePA", description:"Una vertical para gobernar adjudicaciones, umbrales, condiciones, documentos, pasos de autorización, excepciones y responsabilidades.", procedural:"Completa y verificada internamente mediante casos de prueba", software:"Aún no iniciada" },
      { slug:"societario", category:"Derecho societario", title:"CAELO Societario", subtitle:"Gobernanza y reconstrucción del expediente societario", status:"Vertical en fase de estudio y diseño", description:"Aplicación futura de la gobernanza procedimental CAELO a la actividad instructora y documental del profesional societario, manteniendo siempre al abogado en el centro de la decisión.", procedural:"En fase de estudio y diseño", software:"Aún no iniciada" }
    ] satisfies Vertical[]
  }
} as const;

export default function Solutions() {
  const { lang } = useLanguage();
  const t = copy[lang as keyof typeof copy] ?? copy.en;

  return (
    <Layout>
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><img src="/2.jpg" alt={t.heroTitle} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/45" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{t.heroTitle}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">{t.heroText}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">{t.label}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">{t.intro}</p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.verticals.map((vertical) => (
              <motion.article key={vertical.slug} variants={staggerItem} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col">
                <span className="inline-flex self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">{vertical.category}</span>
                {vertical.status && <span className="inline-flex self-start rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary mb-5">{vertical.status}</span>}
                <h3 className="text-3xl font-bold mb-3">{vertical.title}</h3>
                {vertical.subtitle && <p className="text-lg font-semibold mb-5">{vertical.subtitle}</p>}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{vertical.description}</p>
                <div className="grid gap-4 mb-8">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5"><div className="text-xs uppercase tracking-[0.16em] text-primary font-semibold mb-2">{t.proceduralLabel}</div><div className="font-semibold">{vertical.procedural}</div></div>
                  <div className="rounded-2xl border border-border bg-background p-5"><div className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-2">{t.softwareLabel}</div><div className="font-semibold">{vertical.software}</div></div>
                </div>
                <div className="mt-auto">
                  <Button size="lg" variant={vertical.slug === "passweb" ? "default" : "outline"} className="text-base px-6 py-5" asChild>
                    <Link to={`/soluzioni/${vertical.slug}`}>{vertical.slug === "societario" ? t.study : t.explore}<ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
