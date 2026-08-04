import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { FeatureCard } from '@/components/Cards';
import { getFeatures } from '@/data/index';
import { springPresets, staggerContainer, staggerItem } from '@/lib/motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/LanguageContext';

const featuresTexts = {
  it: {
    title: 'Funzionalità',
    subtitle:
      'CAELO governa procedimenti e processi regolati, coordinando regole, ruoli, controlli, eccezioni e responsabilità in percorsi operativi tracciabili.',
    sectionTitle: 'Capacità operative per processi regolati',
    sectionText:
      'CAELO combina orchestrazione deterministica, controllo umano, auditabilità e integrazione con i sistemi esistenti per governare procedure complesse in modo coerente e verificabile.',
    glassTitle: 'Dalla black box alla glass box procedurale',
    glassIntro:
      'Nei processi regolati non basta ottenere una risposta. Bisogna poter ricostruire il percorso che l’ha prodotta, verificare le regole applicate, controllare le eccezioni emerse e mantenere chiara la responsabilità decisionale.',
    blackTitle: 'Black box',
    blackText:
      'Un sistema black box restituisce un risultato senza rendere trasparente il percorso che lo ha prodotto. L’utente vede l’output, ma non dispone di piena visibilità sulla sequenza logica, sulle regole applicate, sulla gestione delle eccezioni e sul punto in cui si forma la decisione.',
    glassBoxTitle: 'Glass box procedurale',
    glassBoxText:
      'CAELO struttura il procedimento in passaggi espliciti, con input identificabili, regole determinate, controlli tracciati, eccezioni governate e intervento umano collocato in punti precisi del flusso.',
    glassResult:
      'Il risultato non è una risposta semplicemente plausibile, ma una decisione motivata, auditabile e ricostruibile. Più trasparenza, più controllo e più affidabilità per chi opera in contesti regolati.',
    whyTitle: 'Perché scegliere CAELO',
    whyText:
      'Un’architettura progettata per governare processi complessi, mantenendo controllo operativo, responsabilità umana, tracciabilità e adozione progressiva.',
    governanceTitle: 'Governance e auditabilità',
    governanceItems: [
      'Regole, ruoli e responsabilità espliciti',
      'Controllo umano nei punti critici',
      'Coerenza tra istruttoria e risultato',
      'Tracciabilità completa del procedimento',
    ],
    securityTitle: 'Sicurezza e adozione controllata',
    securityItems: [
      'Protezione e governo dei dati',
      'Inserimento progressivo nei sistemi esistenti',
      'Configurazione per dominio e organizzazione',
      'Presidio operativo e gestione delle eccezioni',
    ],
    cta: 'Richiedi una demo',
  },
  en: {
    title: 'Features',
    subtitle:
      'CAELO governs regulated procedures and processes by coordinating rules, roles, controls, exceptions and responsibilities through traceable operational paths.',
    sectionTitle: 'Operational capabilities for regulated processes',
    sectionText:
      'CAELO combines deterministic orchestration, human control, auditability and integration with existing systems to govern complex procedures consistently and verifiably.',
    glassTitle: 'From black box to procedural glass box',
    glassIntro:
      'In regulated processes, obtaining an answer is not enough. The path that produced it must be reconstructable, the applied rules verifiable, the exceptions controllable and decision-making responsibility clear.',
    blackTitle: 'Black box',
    blackText:
      'A black-box system returns a result without making the path that produced it transparent. The user sees the output but lacks full visibility into the logical sequence, applied rules, exception handling and the point at which the decision is formed.',
    glassBoxTitle: 'Procedural glass box',
    glassBoxText:
      'CAELO structures the procedure into explicit steps, with identifiable inputs, determined rules, traced controls, governed exceptions and human intervention positioned at precise points in the workflow.',
    glassResult:
      'The result is not merely a plausible answer, but a reasoned, auditable and reconstructable decision. Greater transparency, control and reliability for regulated environments.',
    whyTitle: 'Why choose CAELO',
    whyText:
      'An architecture designed to govern complex processes while preserving operational control, human responsibility, traceability and progressive adoption.',
    governanceTitle: 'Governance and auditability',
    governanceItems: [
      'Explicit rules, roles and responsibilities',
      'Human control at critical points',
      'Consistency between assessment and outcome',
      'Complete procedural traceability',
    ],
    securityTitle: 'Security and controlled adoption',
    securityItems: [
      'Data protection and governance',
      'Progressive integration with existing systems',
      'Configuration by domain and organization',
      'Operational oversight and exception management',
    ],
    cta: 'Request a demo',
  },
  fr: {
    title: 'Fonctionnalités',
    subtitle:
      'CAELO gouverne les procédures et processus réglementés en coordonnant règles, rôles, contrôles, exceptions et responsabilités dans des parcours opérationnels traçables.',
    sectionTitle: 'Capacités opérationnelles pour les processus réglementés',
    sectionText:
      'CAELO associe orchestration déterministe, contrôle humain, auditabilité et intégration avec les systèmes existants afin de gouverner des procédures complexes de manière cohérente et vérifiable.',
    glassTitle: 'De la black box à la glass box procédurale',
    glassIntro:
      'Dans les processus réglementés, obtenir une réponse ne suffit pas. Il faut pouvoir reconstruire son parcours, vérifier les règles appliquées, contrôler les exceptions et maintenir une responsabilité décisionnelle claire.',
    blackTitle: 'Black box',
    blackText:
      'Un système black box fournit un résultat sans rendre transparent le parcours qui l’a produit. L’utilisateur voit la sortie, mais ne dispose pas d’une visibilité complète sur la séquence logique, les règles appliquées, les exceptions et la formation de la décision.',
    glassBoxTitle: 'Glass box procédurale',
    glassBoxText:
      'CAELO structure la procédure en étapes explicites, avec des entrées identifiables, des règles déterminées, des contrôles tracés, des exceptions gouvernées et une intervention humaine placée à des points précis du flux.',
    glassResult:
      'Le résultat n’est pas une réponse simplement plausible, mais une décision motivée, auditable et reconstructible. Plus de transparence, de contrôle et de fiabilité dans les environnements réglementés.',
    whyTitle: 'Pourquoi choisir CAELO',
    whyText:
      'Une architecture conçue pour gouverner des processus complexes tout en maintenant contrôle opérationnel, responsabilité humaine, traçabilité et adoption progressive.',
    governanceTitle: 'Gouvernance et auditabilité',
    governanceItems: [
      'Règles, rôles et responsabilités explicites',
      'Contrôle humain aux points critiques',
      'Cohérence entre instruction et résultat',
      'Traçabilité complète de la procédure',
    ],
    securityTitle: 'Sécurité et adoption contrôlée',
    securityItems: [
      'Protection et gouvernance des données',
      'Intégration progressive aux systèmes existants',
      'Configuration par domaine et organisation',
      'Supervision opérationnelle et gestion des exceptions',
    ],
    cta: 'Demander une démo',
  },
  de: {
    title: 'Funktionen',
    subtitle:
      'CAELO steuert regulierte Verfahren und Prozesse, indem Regeln, Rollen, Kontrollen, Ausnahmen und Verantwortlichkeiten in nachvollziehbaren Abläufen koordiniert werden.',
    sectionTitle: 'Operative Fähigkeiten für regulierte Prozesse',
    sectionText:
      'CAELO verbindet deterministische Orchestrierung, menschliche Kontrolle, Auditierbarkeit und Integration in bestehende Systeme, um komplexe Verfahren konsistent und überprüfbar zu steuern.',
    glassTitle: 'Von der Black Box zur prozeduralen Glass Box',
    glassIntro:
      'In regulierten Prozessen reicht eine Antwort nicht aus. Der Entstehungsweg muss rekonstruierbar, die angewandten Regeln überprüfbar, Ausnahmen kontrollierbar und die Entscheidungsverantwortung eindeutig sein.',
    blackTitle: 'Black Box',
    blackText:
      'Ein Black-Box-System liefert ein Ergebnis, ohne den Entstehungsweg transparent zu machen. Die Ausgabe ist sichtbar, nicht jedoch vollständig die logische Abfolge, die angewandten Regeln, die Behandlung von Ausnahmen und der Punkt der Entscheidungsbildung.',
    glassBoxTitle: 'Prozedurale Glass Box',
    glassBoxText:
      'CAELO strukturiert das Verfahren in explizite Schritte mit identifizierbaren Eingaben, bestimmten Regeln, protokollierten Kontrollen, gesteuerten Ausnahmen und menschlichen Eingriffen an klar definierten Stellen.',
    glassResult:
      'Das Ergebnis ist nicht nur eine plausible Antwort, sondern eine begründete, auditierbare und rekonstruierbare Entscheidung. Mehr Transparenz, Kontrolle und Zuverlässigkeit in regulierten Umgebungen.',
    whyTitle: 'Warum CAELO wählen',
    whyText:
      'Eine Architektur zur Steuerung komplexer Prozesse bei gleichzeitiger Wahrung operativer Kontrolle, menschlicher Verantwortung, Nachvollziehbarkeit und schrittweiser Einführung.',
    governanceTitle: 'Governance und Auditierbarkeit',
    governanceItems: [
      'Explizite Regeln, Rollen und Verantwortlichkeiten',
      'Menschliche Kontrolle an kritischen Punkten',
      'Konsistenz zwischen Prüfung und Ergebnis',
      'Vollständige Verfahrensnachvollziehbarkeit',
    ],
    securityTitle: 'Sicherheit und kontrollierte Einführung',
    securityItems: [
      'Datenschutz und Daten-Governance',
      'Schrittweise Integration in bestehende Systeme',
      'Konfiguration nach Domäne und Organisation',
      'Operative Aufsicht und Ausnahmemanagement',
    ],
    cta: 'Demo anfordern',
  },
  es: {
    title: 'Funcionalidades',
    subtitle:
      'CAELO gobierna procedimientos y procesos regulados, coordinando reglas, roles, controles, excepciones y responsabilidades mediante recorridos operativos trazables.',
    sectionTitle: 'Capacidades operativas para procesos regulados',
    sectionText:
      'CAELO combina orquestación determinista, control humano, auditabilidad e integración con los sistemas existentes para gobernar procedimientos complejos de forma coherente y verificable.',
    glassTitle: 'De la black box a la glass box procedimental',
    glassIntro:
      'En los procesos regulados no basta con obtener una respuesta. Es necesario reconstruir el recorrido que la produjo, verificar las reglas aplicadas, controlar las excepciones y mantener clara la responsabilidad decisional.',
    blackTitle: 'Black box',
    blackText:
      'Un sistema black box devuelve un resultado sin hacer transparente el recorrido que lo produjo. El usuario ve la salida, pero no dispone de plena visibilidad sobre la secuencia lógica, las reglas aplicadas, la gestión de excepciones y la formación de la decisión.',
    glassBoxTitle: 'Glass box procedimental',
    glassBoxText:
      'CAELO estructura el procedimiento en pasos explícitos, con entradas identificables, reglas determinadas, controles trazados, excepciones gobernadas e intervención humana situada en puntos precisos del flujo.',
    glassResult:
      'El resultado no es una respuesta simplemente plausible, sino una decisión motivada, auditable y reconstruible. Más transparencia, control y fiabilidad en entornos regulados.',
    whyTitle: 'Por qué elegir CAELO',
    whyText:
      'Una arquitectura diseñada para gobernar procesos complejos manteniendo control operativo, responsabilidad humana, trazabilidad y adopción progresiva.',
    governanceTitle: 'Gobernanza y auditabilidad',
    governanceItems: [
      'Reglas, roles y responsabilidades explícitos',
      'Control humano en puntos críticos',
      'Coherencia entre evaluación y resultado',
      'Trazabilidad completa del procedimiento',
    ],
    securityTitle: 'Seguridad y adopción controlada',
    securityItems: [
      'Protección y gobernanza de datos',
      'Integración progresiva con los sistemas existentes',
      'Configuración por dominio y organización',
      'Supervisión operativa y gestión de excepciones',
    ],
    cta: 'Solicitar demo',
  },
};

export default function Features() {
  const { lang } = useLanguage();
  const text = featuresTexts[lang];
  const features = getFeatures(lang);

  return (
    <Layout>
      <div className="relative">
        <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/3.jpg" alt="CAELO" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                {text.title}<span className="block text-primary mt-2">CAELO</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">{text.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="max-w-6xl mx-auto">
              <div className="mb-10 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-8">{text.glassTitle}</h2>
                <div className="max-w-3xl mx-auto border-l-4 border-primary pl-6 md:pl-8">
                  <p className="text-lg md:text-xl text-foreground leading-8 md:leading-9">
                    {text.sectionText} {text.glassIntro}
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm mb-10">
                <img src="/glassbox.png" alt={text.glassTitle} className="w-full h-auto object-contain" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">{text.blackTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text.blackText}</p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4">{text.glassBoxTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{text.glassBoxText}</p>
                </div>
              </div>
              <div className="mt-10 rounded-3xl border border-border bg-muted/30 p-8">
                <p className="text-lg leading-relaxed text-foreground">{text.glassResult}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div key={feature.id} variants={staggerItem}>
                  <FeatureCard feature={feature} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/3.jpg" alt="CAELO" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{text.whyTitle}</h2>
                <p className="text-lg text-white/85">{text.whyText}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[{ title: text.governanceTitle, items: text.governanceItems }, { title: text.securityTitle, items: text.securityItems }].map((group) => (
                  <div key={group.title} className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-primary" />{group.title}</h3>
                    <ul className="space-y-4">
                      {group.items.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1" />{item}</li>)}
                    </ul>
                  </div>
                ))}
                <div className="md:col-span-2 flex justify-center mt-8">
                  <motion.a href="/contatti" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all">{text.cta}</motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
