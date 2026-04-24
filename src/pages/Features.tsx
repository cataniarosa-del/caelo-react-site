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
      'Caelo è progettato per supportare e scalare su diversi procedimenti amministrativi della Pubblica Amministrazione, adattandosi ai contesti operativi e mantenendo coerenza, tracciabilità e controllo.',
    sectionTitle: 'Capacità operative per la PA',
    sectionText:
      'Caelo combina orchestrazione deterministica, supporto decisionale auditabile e integrazione con i sistemi esistenti, per accompagnare operatori e strutture amministrative nei procedimenti più complessi.',
    whyTitle: 'Perché scegliere Caelo',
    whyText:
      'Una piattaforma progettata per contesti amministrativi complessi, con attenzione a controllo operativo, tracciabilità e adozione progressiva.',
    governanceTitle: 'Governance e auditabilità',
    governanceItems: [
      'Supporto decisionale con evidenze',
      'Controllo umano nei punti critici',
      'Coerenza tra istruttoria e risultato',
      'Tracciabilità completa',
    ],
    securityTitle: 'Sicurezza e adozione controllata',
    securityItems: [
      'Protezione dei dati',
      'Inserimento progressivo',
      'Configurabile per ente',
      'Presidio operativo elevato',
    ],
    cta: 'Richiedi una demo',
  },
  en: {
    title: 'Features',
    subtitle:
      'Caelo is designed to support and scale across different administrative procedures, adapting to operational contexts while maintaining consistency, traceability and control.',
    sectionTitle: 'Operational capabilities for Public Administration',
    sectionText:
      'Caelo combines deterministic orchestration, auditable decision support and integration with existing systems to support operators and administrative structures in complex procedures.',
    whyTitle: 'Why choose Caelo',
    whyText:
      'A platform designed for complex administrative contexts, focused on operational control, traceability and progressive adoption.',
    governanceTitle: 'Governance and auditability',
    governanceItems: [
      'Evidence-based decision support',
      'Human control at critical points',
      'Consistency between assessment and outcome',
      'Complete traceability',
    ],
    securityTitle: 'Security and controlled adoption',
    securityItems: [
      'Data protection',
      'Progressive implementation',
      'Configurable for each organization',
      'High operational oversight',
    ],
    cta: 'Request a demo',
  },
  fr: {
    title: 'Fonctionnalités',
    subtitle:
      'Caelo est conçu pour accompagner différents processus administratifs, en s’adaptant aux contextes opérationnels tout en maintenant cohérence, traçabilité et contrôle.',
    sectionTitle: 'Capacités opérationnelles pour l’administration publique',
    sectionText:
      'Caelo combine orchestration déterministe, support décisionnel auditable et intégration avec les systèmes existants.',
    whyTitle: 'Pourquoi choisir Caelo',
    whyText:
      'Une plateforme conçue pour les contextes administratifs complexes, avec une attention particulière au contrôle opérationnel, à la traçabilité et à l’adoption progressive.',
    governanceTitle: 'Gouvernance et auditabilité',
    governanceItems: [
      'Support décisionnel fondé sur des preuves',
      'Contrôle humain aux points critiques',
      'Cohérence entre instruction et résultat',
      'Traçabilité complète',
    ],
    securityTitle: 'Sécurité et adoption contrôlée',
    securityItems: [
      'Protection des données',
      'Mise en place progressive',
      'Configurable pour chaque organisme',
      'Supervision opérationnelle élevée',
    ],
    cta: 'Demander une démo',
  },
  de: {
    title: 'Funktionen',
    subtitle:
      'Caelo unterstützt unterschiedliche Verwaltungsverfahren und passt sich operativen Kontexten an, während Konsistenz, Nachvollziehbarkeit und Kontrolle erhalten bleiben.',
    sectionTitle: 'Operative Fähigkeiten für die öffentliche Verwaltung',
    sectionText:
      'Caelo kombiniert deterministische Orchestrierung, prüfbare Entscheidungsunterstützung und Integration mit bestehenden Systemen.',
    whyTitle: 'Warum Caelo wählen',
    whyText:
      'Eine Plattform für komplexe Verwaltungskontexte mit Fokus auf operative Kontrolle, Nachvollziehbarkeit und schrittweise Einführung.',
    governanceTitle: 'Governance und Auditierbarkeit',
    governanceItems: [
      'Evidenzbasierte Entscheidungsunterstützung',
      'Menschliche Kontrolle an kritischen Punkten',
      'Konsistenz zwischen Prüfung und Ergebnis',
      'Vollständige Nachvollziehbarkeit',
    ],
    securityTitle: 'Sicherheit und kontrollierte Einführung',
    securityItems: [
      'Datenschutz',
      'Schrittweise Einführung',
      'Für jede Organisation konfigurierbar',
      'Hohe operative Aufsicht',
    ],
    cta: 'Demo anfordern',
  },
  es: {
    title: 'Funcionalidades',
    subtitle:
      'Caelo está diseñado para apoyar y escalar en distintos procedimientos administrativos, adaptándose a los contextos operativos y manteniendo coherencia, trazabilidad y control.',
    sectionTitle: 'Capacidades operativas para la Administración Pública',
    sectionText:
      'Caelo combina orquestación determinista, soporte decisional auditable e integración con los sistemas existentes.',
    whyTitle: 'Por qué elegir Caelo',
    whyText:
      'Una plataforma diseñada para contextos administrativos complejos, con atención al control operativo, la trazabilidad y la adopción progresiva.',
    governanceTitle: 'Gobernanza y auditabilidad',
    governanceItems: [
      'Soporte decisional con evidencias',
      'Control humano en puntos críticos',
      'Coherencia entre evaluación y resultado',
      'Trazabilidad completa',
    ],
    securityTitle: 'Seguridad y adopción controlada',
    securityItems: [
      'Protección de datos',
      'Implementación progresiva',
      'Configurable por entidad',
      'Alta supervisión operativa',
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
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/3.jpg"
              alt="Piattaforma Caelo per la Pubblica Amministrazione"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                {text.title}
                <span className="block text-primary mt-2">Caelo</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {text.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {text.sectionTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {text.sectionText}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
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
            <img
              src="/3.jpg"
              alt="Infrastruttura digitale per la Pubblica Amministrazione"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {text.whyTitle}
                </h2>
                <p className="text-lg text-white/85">
                  {text.whyText}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={springPresets.gentle}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {text.governanceTitle}
                  </h3>
                  <ul className="space-y-4">
                    {text.governanceItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={springPresets.gentle}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {text.securityTitle}
                  </h3>
                  <ul className="space-y-4">
                    {text.securityItems.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <div className="col-span-2 flex justify-center mt-8">
                  <motion.a
                    href="/contatti"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {text.cta}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
