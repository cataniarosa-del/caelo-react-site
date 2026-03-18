import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { FeatureCard } from '@/components/Cards';
import { features } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { springPresets, staggerContainer, staggerItem } from '@/lib/motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Features() {
  return (
    <Layout>
      <div className="relative">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.AI_GOVERNMENT_5}
              alt="Caelo AI Technology"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...springPresets.gentle, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Tecnologia AI di Nuova Generazione</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Funzionalità
                <span className="block text-primary mt-2">Caelo AI</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Un sistema completo di intelligenza artificiale progettato specificamente per la pubblica amministrazione italiana, conforme AI Act 2026
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
                Capacità Avanzate per la PA
              </h2>
              <p className="text-lg text-muted-foreground">
                Caelo integra le tecnologie più avanzate di intelligenza artificiale con la profonda conoscenza dei processi amministrativi italiani
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
              src={IMAGES.AI_GOVERNMENT_8}
              alt="AI Infrastructure"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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
                  Perché Scegliere Caelo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Un sistema progettato con i massimi standard di sicurezza, trasparenza e conformità normativa
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={springPresets.gentle}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Conformità Normativa
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Piena conformità AI Act europeo 2026</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Compliance GDPR e normative italiane</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Certificazioni ISO 27001 e AgID</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Audit trail completo per verifiche</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={springPresets.gentle}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Sicurezza e Privacy
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Crittografia end-to-end dei dati sensibili</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Hosting su infrastrutture certificate PA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Backup automatici e disaster recovery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Controllo accessi granulare e MFA</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springPresets.gentle, delay: 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Trasparenza e Controllo
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Spiegabilità delle decisioni automatizzate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Controllo umano su decisioni critiche</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Dashboard di monitoraggio in tempo reale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Report dettagliati per accountability</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springPresets.gentle, delay: 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border shadow-lg"
                >
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    Integrazione e Scalabilità
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">API REST e SOAP per integrazione universale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Compatibilità con sistemi legacy PA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Architettura cloud-native scalabile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Deployment on-premise o cloud ibrido</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto a Trasformare la Tua Amministrazione?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Scopri come Caelo può ottimizzare i tuoi procedimenti amministrativi e migliorare il servizio ai cittadini
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Richiedi una Demo
                </motion.a>
                <motion.a
                  href="/solutions"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Vedi Casi d'Uso
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
