import { Layout } from "@/components/Layout";
import { useLanguage } from "@/LanguageContext";

const solutionsTexts = {
  it: {
    title: "Soluzioni CAELO",
    product: "Caelo Passweb",
    intro:
      "Caelo Passweb è una soluzione progettata per supportare gli operatori della Pubblica Amministrazione nella gestione delle pratiche relative alla Posizione Assicurativa, con particolare riferimento all’ambiente Passweb INPS.",
    quote:
      "Caelo non si limita a fornire informazioni: struttura, interpreta e rende auditabile la lavorazione delle pratiche, guidando l’operatore nel rispetto dei vincoli procedurali e normativi.",
    detail:
      "Gli operatori si trovano spesso a gestire comunicazioni non strutturate, anomalie contributive e casi complessi che richiedono una ricostruzione completa. Caelo Passweb interviene come livello di supporto integrato, abilitando analisi strutturata, interpretazione coerente e individuazione del percorso procedurale corretto, senza alterare i sistemi esistenti.",
    functionsTitle: "Funzioni principali",
    functions: [
      "interpretazione strutturata delle comunicazioni ricevute",
      "supporto alla ricostruzione della posizione assicurativa",
      "individuazione e gestione delle anomalie contributive",
      "orientamento guidato nelle procedure Passweb",
      "supporto operativo passo-passo auditabile",
    ],
    valueTitle: "Valore operativo",
    valueText:
      "La soluzione consente di migliorare la qualità delle lavorazioni, ridurre il rischio operativo e supportare gli operatori anche nei casi più complessi, mantenendo sempre il controllo umano sulle decisioni e garantendo la tracciabilità completa del processo.",
    impactTitle: "Impatto operativo per l’amministrazione",
    impacts: [
      "Riduzione delle pratiche respinte o rientrate da parte di INPS",
      "Minore necessità di rilavorazione delle pratiche già istruite",
      "Diminuzione degli errori nelle fasi operative più critiche",
      "Riduzione del carico di lavoro manuale sugli operatori",
      "Maggiore continuità nella gestione delle pratiche senza interruzioni",
      "Migliore controllo delle informazioni prima dell’invio",
    ],
    integrationTitle: "Integrazione e scalabilità",
    integrationText:
      "Caelo è progettato come layer applicativo integrabile nei sistemi esistenti della Pubblica Amministrazione, senza necessità di sostituzione o modifica dei software legacy. L’architettura consente un’integrazione progressiva, adattandosi ai contesti operativi già in uso e garantendo continuità dei processi.",
  },

  en: {
    title: "CAELO Solutions",
    product: "Caelo Passweb",
    intro:
      "Caelo Passweb is a solution designed to support Public Administration operators in managing cases related to the insurance position, with specific reference to the INPS Passweb environment.",
    quote:
      "Caelo does not simply provide information: it structures, interprets and makes case processing auditable, guiding the operator in compliance with procedural and regulatory constraints.",
    detail:
      "Operators often have to manage unstructured communications, contribution anomalies and complex cases requiring full reconstruction. Caelo Passweb acts as an integrated support layer, enabling structured analysis, consistent interpretation and identification of the correct procedural path without altering existing systems.",
    functionsTitle: "Main functions",
    functions: [
      "structured interpretation of received communications",
      "support for reconstructing the insurance position",
      "identification and management of contribution anomalies",
      "guided orientation within Passweb procedures",
      "auditable step-by-step operational support",
    ],
    valueTitle: "Operational value",
    valueText:
      "The solution improves processing quality, reduces operational risk and supports operators even in complex cases, while maintaining human control over decisions and ensuring full process traceability.",
    impactTitle: "Operational impact for the administration",
    impacts: [
      "Reduction of rejected or returned cases by INPS",
      "Lower need to rework already assessed cases",
      "Reduction of errors in the most critical operational phases",
      "Reduced manual workload for operators",
      "Greater continuity in case management without interruptions",
      "Better control of information before submission",
    ],
    integrationTitle: "Integration and scalability",
    integrationText:
      "Caelo is designed as an application layer that integrates with existing Public Administration systems, without requiring replacement or modification of legacy software. The architecture enables progressive integration, adapting to existing operational contexts and ensuring process continuity.",
  },

  fr: {
    title: "Solutions CAELO",
    product: "Caelo Passweb",
    intro:
      "Caelo Passweb est une solution conçue pour accompagner les opérateurs de l’administration publique dans la gestion des dossiers liés à la position assurantielle, notamment dans l’environnement Passweb INPS.",
    quote:
      "Caelo ne se limite pas à fournir des informations : il structure, interprète et rend auditable le traitement des dossiers, en guidant l’opérateur dans le respect des contraintes procédurales et réglementaires.",
    detail:
      "Les opérateurs doivent souvent gérer des communications non structurées, des anomalies contributives et des cas complexes nécessitant une reconstruction complète. Caelo Passweb agit comme une couche de support intégrée, permettant une analyse structurée, une interprétation cohérente et l’identification du parcours procédural correct.",
    functionsTitle: "Fonctions principales",
    functions: [
      "interprétation structurée des communications reçues",
      "support à la reconstruction de la position assurantielle",
      "identification et gestion des anomalies contributives",
      "orientation guidée dans les procédures Passweb",
      "support opérationnel étape par étape et auditable",
    ],
    valueTitle: "Valeur opérationnelle",
    valueText:
      "La solution améliore la qualité des traitements, réduit le risque opérationnel et accompagne les opérateurs dans les cas les plus complexes, tout en maintenant le contrôle humain sur les décisions et la traçabilité du processus.",
    impactTitle: "Impact opérationnel pour l’administration",
    impacts: [
      "Réduction des dossiers rejetés ou retournés par l’INPS",
      "Moins de retraitement des dossiers déjà instruits",
      "Réduction des erreurs dans les phases critiques",
      "Réduction de la charge de travail manuelle",
      "Meilleure continuité dans la gestion des dossiers",
      "Meilleur contrôle des informations avant l’envoi",
    ],
    integrationTitle: "Intégration et évolutivité",
    integrationText:
      "Caelo est conçu comme une couche applicative intégrable aux systèmes existants de l’administration publique, sans remplacement ni modification des logiciels hérités.",
  },

  de: {
    title: "CAELO Lösungen",
    product: "Caelo Passweb",
    intro:
      "Caelo Passweb ist eine Lösung zur Unterstützung von Mitarbeitenden der öffentlichen Verwaltung bei der Bearbeitung von Vorgängen zur Versicherungsposition, insbesondere im INPS-Passweb-Umfeld.",
    quote:
      "Caelo liefert nicht nur Informationen: Es strukturiert, interpretiert und macht die Bearbeitung von Vorgängen auditierbar, während es die Mitarbeitenden im Rahmen verfahrensbezogener und regulatorischer Anforderungen führt.",
    detail:
      "Mitarbeitende bearbeiten häufig unstrukturierte Mitteilungen, Beitragsanomalien und komplexe Fälle, die eine vollständige Rekonstruktion erfordern. Caelo Passweb wirkt als integrierte Unterstützungsschicht und ermöglicht strukturierte Analyse, konsistente Interpretation und die Identifikation des korrekten Verfahrenswegs.",
    functionsTitle: "Hauptfunktionen",
    functions: [
      "strukturierte Interpretation eingehender Mitteilungen",
      "Unterstützung bei der Rekonstruktion der Versicherungsposition",
      "Identifikation und Verwaltung von Beitragsanomalien",
      "geführte Orientierung in Passweb-Verfahren",
      "auditierbare operative Schritt-für-Schritt-Unterstützung",
    ],
    valueTitle: "Operativer Wert",
    valueText:
      "Die Lösung verbessert die Bearbeitungsqualität, reduziert operative Risiken und unterstützt Mitarbeitende auch in komplexen Fällen, während menschliche Kontrolle und vollständige Nachvollziehbarkeit erhalten bleiben.",
    impactTitle: "Operative Wirkung für die Verwaltung",
    impacts: [
      "Reduzierung abgelehnter oder zurückgesandter Vorgänge durch INPS",
      "Weniger Nachbearbeitung bereits geprüfter Vorgänge",
      "Reduzierung von Fehlern in kritischen Phasen",
      "Geringere manuelle Arbeitsbelastung",
      "Mehr Kontinuität in der Vorgangsbearbeitung",
      "Bessere Kontrolle der Informationen vor dem Versand",
    ],
    integrationTitle: "Integration und Skalierbarkeit",
    integrationText:
      "Caelo ist als Anwendungsschicht konzipiert, die in bestehende Systeme der öffentlichen Verwaltung integriert werden kann, ohne Legacy-Software zu ersetzen oder zu verändern.",
  },

  es: {
    title: "Soluciones CAELO",
    product: "Caelo Passweb",
    intro:
      "Caelo Passweb es una solución diseñada para apoyar a los operadores de la Administración Pública en la gestión de expedientes relacionados con la posición aseguradora, especialmente en el entorno Passweb INPS.",
    quote:
      "Caelo no se limita a proporcionar información: estructura, interpreta y hace auditable la tramitación de expedientes, guiando al operador en el cumplimiento de restricciones procedimentales y normativas.",
    detail:
      "Los operadores suelen gestionar comunicaciones no estructuradas, anomalías contributivas y casos complejos que requieren una reconstrucción completa. Caelo Passweb actúa como una capa de soporte integrada, habilitando análisis estructurado, interpretación coherente e identificación del recorrido procedimental correcto.",
    functionsTitle: "Funciones principales",
    functions: [
      "interpretación estructurada de las comunicaciones recibidas",
      "soporte para reconstruir la posición aseguradora",
      "identificación y gestión de anomalías contributivas",
      "orientación guiada en los procedimientos Passweb",
      "soporte operativo paso a paso auditable",
    ],
    valueTitle: "Valor operativo",
    valueText:
      "La solución permite mejorar la calidad de la tramitación, reducir el riesgo operativo y apoyar a los operadores incluso en los casos más complejos, manteniendo siempre el control humano sobre las decisiones y la trazabilidad completa del proceso.",
    impactTitle: "Impacto operativo para la administración",
    impacts: [
      "Reducción de expedientes rechazados o devueltos por INPS",
      "Menor necesidad de retrabajo sobre expedientes ya instruidos",
      "Reducción de errores en las fases operativas críticas",
      "Reducción de la carga manual de los operadores",
      "Mayor continuidad en la gestión de expedientes",
      "Mejor control de la información antes del envío",
    ],
    integrationTitle: "Integración y escalabilidad",
    integrationText:
      "Caelo está diseñado como una capa aplicativa integrable en los sistemas existentes de la Administración Pública, sin necesidad de sustituir ni modificar software heredado.",
  },
};

export default function Solutions() {
  const { lang } = useLanguage();
  const text = solutionsTexts[lang];

  const paragraph = {
    fontSize: "17px",
    lineHeight: "1.8",
    textAlign: "justify" as const,
    marginBottom: "18px",
    color: "#ffffff",
  };

  const blockquote = {
    borderLeft: "4px solid #2c6f95",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.1)",
    color: "#ffffff",
    borderRadius: "6px",
    margin: "24px 0",
  };

  const sectionTitle = {
    fontSize: "22px",
    color: "#ffffff",
    marginTop: "30px",
    marginBottom: "12px",
    fontWeight: 700,
  } as const;

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/2.jpg" alt={text.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
              {text.title}
            </h1>

            <h2 style={sectionTitle}>{text.product}</h2>

            <p style={paragraph}>{text.intro}</p>

            <div style={blockquote}>{text.quote}</div>

            <p style={paragraph}>{text.detail}</p>

            <h3 style={sectionTitle}>{text.functionsTitle}</h3>

            <ul style={{ ...paragraph, paddingLeft: "20px" }}>
              {text.functions.map((item) => (
                <li key={item}>{item};</li>
              ))}
            </ul>

            <h3 style={sectionTitle}>{text.valueTitle}</h3>

            <p style={paragraph}>{text.valueText}</p>

            <div className="border-l-4 border-primary pl-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                {text.impactTitle}
              </h3>

              <ul className="space-y-3 text-white/90">
                {text.impacts.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <h3 style={sectionTitle}>{text.integrationTitle}</h3>

            <p style={paragraph}>{text.integrationText}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
