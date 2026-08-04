import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const scores = [
  ["9,5 / 10", "Governance"],
  ["9,0 / 10", "Auditabilità"],
  ["8,5 / 10", "Difendibilità tecnologica"],
  ["18–36 mesi", "Difficoltà stimata di replica"],
];

const strengths = [
  "Governance multilivello incorporata nel ciclo operativo",
  "Auditabilità basata su evidenze verificabili",
  "Supervisione umana imposta a livello architetturale",
  "Controllo della disclosure e protezione della proprietà intellettuale",
  "Espansione multidominio attraverso verticali governati",
  "Indipendenza dal provider del modello linguistico",
];

export default function ValutazioneIndipendente() {
  const { lang } = useLanguage();
  const isIt = lang === "it";

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-5xl mx-auto"
          >
            <Button variant="ghost" className="mb-8" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {isIt ? "Torna alla home" : "Back to home"}
              </Link>
            </Button>

            <div className="max-w-4xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                {isIt ? "Valutazione comparativa indipendente" : "Independent comparative assessment"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                {isIt ? "La valutazione indipendente di CAELO" : "CAELO independent assessment"}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {isIt
                  ? "CAELO e il Mother Engine sono stati confrontati con le principali piattaforme internazionali di AI orchestration, governance, knowledge management, legal AI e process intelligence."
                  : "CAELO and the Mother Engine were compared with leading international platforms in AI orchestration, governance, knowledge management, legal AI and process intelligence."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {scores.map(([value, label]) => (
              <motion.div key={label} variants={staggerItem} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-3">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 max-w-6xl mx-auto items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {isIt ? "Un posizionamento distinto" : "A distinct market position"}
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {isIt
                    ? "La valutazione colloca CAELO nella categoria Governed Procedural AI Platform: una piattaforma di intelligenza procedurale nella quale governance, evidenze, tracciabilità, disclosure e controllo umano sono componenti native dell’architettura."
                    : "The assessment positions CAELO as a Governed Procedural AI Platform, where governance, evidence, traceability, disclosure and human control are native architectural components."}
                </p>
                <p>
                  {isIt
                    ? "Il valore distintivo non risiede nel modello linguistico utilizzato, ma nel livello superiore di governo che consente di impiegare modelli e sistemi diversi in contesti regolamentati e ad alta responsabilità."
                    : "Its distinctive value does not lie in the language model itself, but in the higher governance layer that enables different models and systems to operate in regulated, high-responsibility environments."}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">
                {isIt ? "Punti di forza riconosciuti" : "Recognized strengths"}
              </h3>
              <div className="space-y-5">
                {strengths.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {isIt ? "Un motore universale, verticali specialistici" : "One universal engine, specialized verticals"}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {isIt
                ? "Il Mother Engine costituisce il motore universale di governance procedurale. Attraverso il Command Center, CAELO può costruire, validare e governare nuovi verticali specialistici senza riprogettare ogni volta l’architettura di base. Ogni verticale mantiene regole, fonti, ruoli, controlli, eccezioni e responsabilità specifiche del dominio."
                : "The Mother Engine is the universal procedural governance engine. Through the Command Center, CAELO can build, validate and govern new specialized verticals without redesigning the core architecture each time."}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
