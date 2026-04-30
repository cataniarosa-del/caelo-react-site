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

export default function Home() {
  const { t, lang } = useLanguage();
  const features = getFeatures(lang);

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/1.jpg" alt="CAELO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              CAELO
              <span className="block text-white mt-2 text-2xl md:text-3xl">
                {t.home.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.home.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link to="/contatti">
                  {t.common.demo}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/contatti">{t.common.talk}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {lang === "it" ? "Due percorsi, un’unica logica operativa" : "Two paths, one operational logic"}
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {lang === "it"
                ? "Caelo supporta organizzazioni pubbliche e private nella gestione di procedimenti, pratiche e processi complessi, mantenendo controllo umano, tracciabilità e coerenza operativa."
                : "Caelo supports public and private organizations in managing procedures, cases and complex processes, preserving human control, traceability and operational consistency."}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerItem}
              className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {lang === "it" ? "Pubblica Amministrazione" : "Public Administration"}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {lang === "it" ? "Caelo per la Pubblica Amministrazione" : "Caelo for Public Administration"}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {lang === "it"
                  ? "Un supporto operativo per procedimenti amministrativi, pratiche, documenti e operatori, con percorsi guidati, controllo delle fonti e tracciabilità delle attività."
                  : "Operational support for administrative procedures, cases, documents and operators, with guided paths, source control and activity traceability."}
              </p>

              <div className="mt-auto">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/soluzioni">
                    {lang === "it" ? "Vai alle soluzioni PA" : "View public sector solutions"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col"
            >
              <div className="mb-6">
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {lang === "it" ? "Aziende private" : "Private Companies"}
                </span>
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {lang === "it" ? "Caelo per le Aziende" : "Caelo for Companies"}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {lang === "it"
                  ? "Un agente digitale per governare ticket, reclami, customer care, processi interni, formazione e contenuti guidati, con risposte controllate e flussi verificabili."
                  : "A digital agent for governing tickets, claims, customer care, internal processes, training and guided content, with controlled answers and verifiable workflows."}
              </p>

              <div className="mt-auto">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                  <Link to="/aziende">
                    {lang === "it" ? "Vai alle soluzioni aziende" : "View company solutions"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
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
              {lang === "it" ? "Funzionalità Principali" : "Key Features"}
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {lang === "it"
                ? "Caelo affianca gli operatori nella gestione dei procedimenti amministrativi, supportando le attività operative, evidenziando criticità e garantendo coerenza, tracciabilità e controllo lungo tutto il processo."
                : "Caelo supports operators in managing administrative procedures, assisting operational activities, highlighting critical issues and ensuring consistency, traceability and control throughout the process."}
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
          <img src={IMAGES.DIGITAL_ADMIN_1} alt="Sfondo CTA" className="w-full h-full object-cover" />
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
                  {lang === "it" ? "Richiedi una Demo Personalizzata" : "Request a Personalized Demo"}
                </h2>

                <p className="text-xl text-muted-foreground">
                  {lang === "it"
                    ? "Scopri come Caelo può integrarsi nei tuoi processi, supportare gli operatori e migliorare la gestione delle pratiche amministrative, senza modificare i sistemi esistenti."
                    : "Discover how Caelo can integrate into your processes, support operators and improve administrative case management without changing existing systems."}
                </p>
              </div>

              <DemoRequestForm />

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Adattabilità Operativa" : "Operational Adaptability"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "Caelo si integra nei flussi esistenti senza alterare l’organizzazione."
                      : "Caelo integrates into existing workflows without disrupting the organization."}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Supporto Evolutivo" : "Evolutionary Support"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "La piattaforma si adatta ai contesti operativi e cresce con le esigenze dell’ente."
                      : "The platform adapts to operational contexts and grows with the organization’s needs."}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Scalabilità Multiente" : "Multi-entity Scalability"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "Architettura progettata per essere estesa a più enti e contesti amministrativi."
                      : "Architecture designed to be extended across multiple public bodies and administrative contexts."}
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
