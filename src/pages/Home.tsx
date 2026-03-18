import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { FeatureCard } from "@/components/Cards";
import { DemoRequestForm } from "@/components/Forms";
import { features } from "@/data/index";
import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/1.jpg"
            alt="CAELO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Conforme AI Act 2026
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              CAELO
              <span className="block text-white mt-2 text-2xl md:text-3xl">
                Intelligenza Artificiale per la Pubblica Amministrazione
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-black mb-12 max-w-4xl mx-auto"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Caelo è una piattaforma di intelligenza artificiale progettata per supportare la
              Pubblica Amministrazione nella gestione dei procedimenti complessi,
              nell’interpretazione delle norme, nell’automazione delle attività ripetitive e
              nella produzione di output chiari, tracciabili e verificabili.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link to="/contact">
                  Richiedi una Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/demo-access">Prova la tua Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Funzionalità Principali
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Caelo offre un ecosistema completo di strumenti di intelligenza artificiale per
              supportare i processi amministrativi, semplificare il lavoro degli operatori pubblici
              in procedimenti complessi e accompagnare l’evoluzione digitale della Pubblica
              Amministrazione.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.slice(0, 6).map((feature, index) => (
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
            src={IMAGES.DIGITAL_ADMIN_1}
            alt="Sfondo CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Richiedi una Demo Personalizzata
                </h2>

                <p className="text-xl text-muted-foreground">
                  Scopri come Caelo può supportare i processi della tua amministrazione,
                  adattarsi ai flussi operativi esistenti e affiancare la gestione documentale,
                  procedimentale e normativa.
                </p>
              </div>

              <DemoRequestForm />

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Adattabilità Operativa</h3>
                  <p className="text-sm text-muted-foreground">
                    Caelo si adatta alle procedure esistenti senza irrigidire l’organizzazione.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Supporto Evolutivo</h3>
                  <p className="text-sm text-muted-foreground">
                    La piattaforma cresce insieme all’ente.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Scalabilità Multiente</h3>
                  <p className="text-sm text-muted-foreground">
                    Modello adattabile a scuole, enti e amministrazioni pubbliche.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}