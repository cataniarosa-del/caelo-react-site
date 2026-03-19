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
              alt="Piattaforma Caelo per la Pubblica Amministrazione"
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
                <span className="text-sm font-medium text-primary">
                  Piattaforma auditabile per la PA
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Funzionalità
                <span className="block text-primary mt-2">Caelo</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Caelo è progettato per supportare e scalare su diversi procedimenti amministrativi della Pubblica Amministrazione, adattandosi ai contesti operativi e mantenendo coerenza, tracciabilità e controllo.
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
                Capacità operative per la PA
              </h2>
              <p className="text-lg text-muted-foreground">
                Caelo combina orchestrazione deterministica, supporto decisionale auditabile e integrazione con i sistemi esistenti, per accompagnare operatori e strutture amministrative nei procedimenti più complessi.
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
              alt="Infrastruttura digitale per la Pubblica Amministrazione"
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
                  Perché scegliere Caelo
                </h2>
                <p className="text-lg text-muted-foreground">
                  Una piattaforma progettata per contesti amministrativi complessi, con attenzione a controllo operativo, tracciabilità e adozione progressiva.
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
                    Governance e auditabilità
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Supporto decisionale con evidenze, passaggi tracciabili e restituzione verificabile
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Controllo umano mantenuto nei punti critici del procedimento
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Logica coerente tra istruttoria, guida operativa e risultato finale
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Tracciabilità utile per verifiche interne, accountability e gestione del rischio
                      </span>
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
                    Sicurezza e adozione controllata
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Progettazione orientata alla protezione dei dati e alla gestione controllata degli accessi
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Inserimento progressivo nei processi, senza imporre sostituzioni traumatiche ai sistemi esistenti
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Possibilità di configurazione in base ai vincoli organizzativi e infrastrutturali dell’ente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Approccio adatto a contesti con requisiti elevati di presidio operativo
                      </span>
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
                    Integrazione con l’operatività reale
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Integrazione come layer operativo sopra sistemi e procedure già in uso
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Compatibilità progettuale con ecosistemi applicativi eterogenei e processi legacy
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Supporto agli operatori lungo il procedimento, non semplice output isolato
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Architettura pensata per estendere il modello ad altri ambiti amministrativi
                      </span>
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
                    Scalabilità dei procedimenti
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Caelo è progettato per supportare diversi procedimenti amministrativi della PA
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Il modello è adattabile a domini operativi differenti mantenendo coerenza metodologica
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        La crescita avviene per estensione controllata dei casi d’uso, non per promesse generiche di automazione totale
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Questo approccio rende Caelo riutilizzabile su contesti amministrativi più ampi nel tempo
                      </span>
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
                Pronto a valutare Caelo nel tuo contesto operativo?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Scopri come Caelo può supportare i tuoi procedimenti amministrativi con un approccio integrabile, tracciabile e orientato al controllo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Richiedi una demo
                </motion.a>
                <motion.a
                  href="/solutions"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Esplora i casi d’uso
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}