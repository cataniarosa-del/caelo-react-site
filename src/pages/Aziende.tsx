import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

export default function Aziende() {
  const { lang } = useLanguage();

  const isIt = lang === "it";

  const benefits = [
    {
      icon: Workflow,
      title: isIt ? "Gestione intelligente dei processi" : "Intelligent process management",
      text: isIt
        ? "Caelo aiuta le aziende a governare flussi operativi complessi, richieste, documenti, ticket e attività ricorrenti."
        : "Caelo helps companies govern complex workflows, requests, documents, tickets and recurring operational activities.",
    },
    {
      icon: ShieldCheck,
      title: isIt ? "Controllo, tracciabilità e audit" : "Control, traceability and audit",
      text: isIt
        ? "Ogni passaggio può essere reso verificabile: decisioni, fonti, responsabilità, stato della pratica e prossima azione."
        : "Every step can be made verifiable: decisions, sources, responsibilities, case status and next action.",
    },
    {
      icon: Building2,
      title: isIt ? "Adattabile ai contesti aziendali" : "Adaptable to business contexts",
      text: isIt
        ? "La piattaforma può essere configurata per uffici amministrativi, customer care, operation, back office e gestione reclami."
        : "The platform can be configured for administration teams, customer care, operations, back office and claims management.",
    },
  ];

  const useCases = isIt
    ? [
        "Gestione ticket e richieste interne",
        "Supporto al customer care",
        "Monitoraggio pratiche e reclami",
        "Classificazione documenti e comunicazioni",
        "Cruscotti operativi per responsabili e team",
      ]
    : [
        "Ticket and internal request management",
        "Customer care support",
        "Case and claim monitoring",
        "Document and communication classification",
        "Operational dashboards for managers and teams",
      ];

  return (
    <Layout>
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-muted" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground mb-8">
              {isIt ? "Soluzioni per aziende private" : "Solutions for private companies"}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {isIt
                ? "Caelo per le aziende"
                : "Caelo for companies"}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isIt
                ? "Un agente digitale per supportare team, processi e decisioni operative: meno dispersione, più controllo, più tracciabilità."
                : "A digital agent designed to support teams, processes and operational decisions: less fragmentation, more control, more traceability."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link to="/contatti">
                  {isIt ? "Richiedi una demo" : "Request a demo"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/">
                  {isIt ? "Torna alla home" : "Back to home"}
                </Link>
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
              {isIt ? "Cosa può fare per un’azienda" : "What it can do for a company"}
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isIt
                ? "Caelo può essere applicato ai flussi aziendali dove servono ordine, priorità, controllo delle informazioni e supporto agli operatori."
                : "Caelo can be applied to business workflows where order, prioritization, information control and operator support are required."}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-3xl p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-10 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isIt ? "Ambiti di applicazione" : "Application areas"}
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mt-8">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
  <Button size="lg" className="text-lg px-8 py-6" asChild>
    <Link to="/contatti">
      {isIt ? "Parla con noi" : "Talk to us"}
    </Link>
  </Button>
</div>         
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
