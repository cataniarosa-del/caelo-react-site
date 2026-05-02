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
              {lang === "it" ?  
  ? "Un sistema per governare procedimenti, pratiche e processi complessi" 
  : "A system to govern procedures, cases and complex operational workflows"}
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {lang === "it"
                ? "CAELO governa procedimenti, pratiche e processi regolati, mantenendo controllo umano, tracciabilità, coerenza operativa e integrazione con i sistemi esistenti."
                : "CAELO governs regulated procedures, cases and operational workflows, preserving human control, traceability, operational consistency and integration with existing systems."}
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
                {lang === "it" ? "CAELO per la Pubblica Amministrazione" : "CAELO for Public Administration"}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {lang === "it"
                  ? "Un livello di governance procedurale per gestire pratiche, documenti, regole e operatori, garantendo tracciabilità, controllo delle fonti e coerenza lungo l’intero procedimento."
                  : "A procedural governance layer for managing cases, documents, rules and operators, ensuring traceability, source control and consistency across the entire administrative workflow."}
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
                {lang === "it" ? "CAELO per Aziende e Partner" : "CAELO for Companies and Partners"}
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {lang === "it"
                  ? "Un sistema integrabile per governare ticket, reclami, customer care, processi interni, formazione e contenuti operativi, con risposte controllate e flussi verificabili."
                  : "An integrable system for governing tickets, claims, customer care, internal processes, training and operational content, with controlled answers and verifiable workflows."}
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
              {lang === "it" ? "Governance, controllo e integrazione" : "Governance, control and integration"}
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {lang === "it"
                ? "CAELO non è un semplice assistente digitale. È un sistema di governance che struttura, controlla e orchestra procedimenti complessi, riducendo errori operativi e rendendo ogni passaggio tracciabile."
                : "CAELO is not a generic digital assistant. It is a governance system that structures, controls and orchestrates complex procedures, reducing operational errors and making every step traceable."}
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
                  {lang === "it" ? "Parla con noi" : "Talk to us"}
                </h2>

                <p className="text-xl text-muted-foreground">
                  {lang === "it"
                    ? "Scopri come CAELO può integrarsi nei processi esistenti, governare flussi regolati e supportare enti, aziende e partner tecnologici senza sostituire le infrastrutture già in uso."
                    : "Discover how CAELO can integrate into existing processes, govern regulated workflows and support public bodies, companies and technology partners without replacing current infrastructures."}
                </p>
              </div>

              <DemoRequestForm />

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Governance procedurale" : "Procedural Governance"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "CAELO governa il procedimento, non si limita ad assistere l’operatore."
                      : "CAELO governs the procedure, rather than merely assisting the operator."}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Auditabilità e controllo" : "Auditability and Control"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "Ogni passaggio è tracciabile, verificabile e coerente con le regole operative."
                      : "Every step is traceable, verifiable and aligned with operational rules."}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lang === "it" ? "Integrazione enterprise" : "Enterprise Integration"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "it"
                      ? "Architettura progettata per integrarsi con sistemi, cloud e piattaforme già esistenti."
                      : "Architecture designed to integrate with existing systems, cloud environments and enterprise platforms."}
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
