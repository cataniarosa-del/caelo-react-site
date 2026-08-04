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
  const isIt = lang === "it";

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
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {isIt ? "Un sistema per governare procedimenti, pratiche e processi complessi" : "A system to govern procedures, cases and complex operational workflows"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {isIt ? "CAELO governa procedimenti, pratiche e processi regolati, mantenendo controllo umano, tracciabilità, coerenza operativa e integrazione con i sistemi esistenti." : "CAELO governs regulated procedures, cases and operational workflows, preserving human control, traceability, operational consistency and integration with existing systems."}
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={staggerItem} className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col">
              <div className="mb-6"><span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{isIt ? "Pubblica Amministrazione" : "Public Administration"}</span></div>
              <h3 className="text-3xl font-bold mb-5">{isIt ? "CAELO per la Pubblica Amministrazione" : "CAELO for Public Administration"}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{isIt ? "Un livello di governance procedurale per gestire pratiche, documenti, regole e operatori, garantendo tracciabilità, controllo delle fonti e coerenza lungo l’intero procedimento." : "A procedural governance layer for managing cases, documents, rules and operators, ensuring traceability, source control and consistency across the entire administrative workflow."}</p>
              <div className="mt-auto"><Button size="lg" className="text-lg px-8 py-6" asChild><Link to="/soluzioni">{isIt ? "Vai alle soluzioni PA" : "View public sector solutions"}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button></div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-card border border-border rounded-3xl p-10 shadow-sm flex flex-col">
              <div className="mb-6"><span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">{isIt ? "Aziende private" : "Private Companies"}</span></div>
              <h3 className="text-3xl font-bold mb-5">{isIt ? "CAELO per Aziende e Partner" : "CAELO for Companies and Partners"}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{isIt ? "Un sistema integrabile per governare ticket, reclami, customer care, processi interni, formazione e contenuti operativi, con risposte controllate e flussi verificabili." : "An integrable system for governing tickets, claims, customer care, internal processes, training and operational content, with controlled answers and verifiable workflows."}</p>
              <div className="mt-auto"><Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild><Link to="/aziende">{isIt ? "Vai alle soluzioni aziende" : "View company solutions"}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">{isIt ? "Identità della piattaforma" : "Platform identity"}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{isIt ? "Che cos’è CAELO" : "What is CAELO"}</h2>
              <p className="text-2xl font-semibold leading-relaxed mb-6">{isIt ? "Una piattaforma di intelligenza procedurale governata per ambienti operativi complessi e regolamentati." : "A governed procedural intelligence platform for complex and regulated operational environments."}</p>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>{isIt ? "CAELO è progettato per contesti nei quali l’intelligenza artificiale non può limitarsi a produrre risposte, ma deve operare entro regole, fonti, responsabilità e controlli verificabili." : "CAELO is designed for contexts where artificial intelligence cannot merely generate answers, but must operate within verifiable rules, sources, responsibilities and controls."}</p>
                <p>{isIt ? "Fornisce supporto decisionale strutturato e fondato su evidenze, preservando il controllo umano, la tracciabilità delle fonti e l’auditabilità delle operazioni significative." : "It provides structured, evidence-based decision support while preserving human control, source traceability and auditability of significant operations."}</p>
              </div>
              <div className="mt-8 rounded-3xl border border-border bg-background p-7">
                <p className="text-xl font-semibold leading-relaxed">{isIt ? "Non è un chatbot. Non è un motore di ricerca. Non è un copilota generico." : "It is not a chatbot. It is not a search engine. It is not a generic copilot."}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{isIt ? "È un’infrastruttura di governo procedurale che assiste gli operatori, struttura il processo decisionale e rende ogni passaggio ricostruibile e verificabile." : "It is a procedural governance infrastructure that supports operators, structures decision-making and makes every step reconstructable and verifiable."}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <h3 className="text-3xl font-bold mb-6">{isIt ? "Command Center e Mother Engine" : "Command Center and Mother Engine"}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{isIt ? "Il Command Center è il punto operativo attraverso cui professionisti e organizzazioni accedono ai verticali CAELO, ricevono risultati strutturati, indicatori di affidabilità, riferimenti tracciabili e indicazioni operative." : "The Command Center is the operational point through which professionals and organizations access CAELO verticals and receive structured results, reliability indicators, traceable references and operational guidance."}</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{isIt ? "Alle sue spalle opera il Mother Engine, il motore universale di governance procedurale che consente di costruire, validare e governare nuovi verticali specialistici senza riprogettare ogni volta l’intera architettura." : "Behind it operates the Mother Engine, the universal procedural governance engine that enables new specialized verticals to be built, validated and governed without redesigning the whole architecture each time."}</p>
              <div className="rounded-2xl bg-primary/10 p-6"><p className="text-xl font-bold text-primary">{isIt ? "Un solo motore di governance. Molteplici verticali specialistici." : "One governance engine. Multiple specialized verticals."}</p></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="max-w-6xl mx-auto rounded-[2rem] border border-border bg-card p-8 md:p-12 shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">{isIt ? "Valutazione comparativa indipendente" : "Independent comparative assessment"}</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{isIt ? "Una valutazione indipendente dell’architettura CAELO" : "An independent assessment of the CAELO architecture"}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">{isIt ? "CAELO e il Mother Engine sono stati confrontati con le principali piattaforme internazionali di AI orchestration, governance, knowledge management, legal AI e process intelligence. La valutazione riconosce una posizione distintiva nell’ambito della Governed Procedural AI." : "CAELO and the Mother Engine were compared with leading international platforms in AI orchestration, governance, knowledge management, legal AI and process intelligence."}</p>
              </div>
              <Button size="lg" className="text-lg px-8 py-6 whitespace-nowrap" asChild><Link to="/valutazione-indipendente">{isIt ? "Leggi la valutazione" : "Read the assessment"}<ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {[["9,5 / 10", isIt ? "Governance" : "Governance"], ["9,0 / 10", isIt ? "Auditabilità" : "Auditability"], ["8,5 / 10", isIt ? "Difendibilità" : "Defensibility"], ["18–36 mesi", isIt ? "Difficoltà di replica" : "Estimated replication time"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-muted/40 p-6"><div className="text-3xl font-bold text-primary mb-2">{value}</div><div className="text-sm text-muted-foreground">{label}</div></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{isIt ? "Governance, controllo e integrazione" : "Governance, control and integration"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{isIt ? "CAELO non è un semplice assistente digitale. È un sistema di governance che struttura, controlla e orchestra procedimenti complessi, riducendo errori operativi e rendendo ogni passaggio tracciabile." : "CAELO is not a generic digital assistant. It is a governance system that structures, controls and orchestrates complex procedures, reducing operational errors and making every step traceable."}</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {features.slice(0, 6).map((feature, index) => <motion.div key={feature.id} variants={staggerItem}><FeatureCard feature={feature} index={index} /></motion.div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.DIGITAL_ADMIN_1} alt="Sfondo CTA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle}>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-lg">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{isIt ? "Parla con noi" : "Talk to us"}</h2>
                <p className="text-xl text-muted-foreground">{isIt ? "Scopri come CAELO può integrarsi nei processi esistenti, governare flussi regolati e supportare enti, aziende e partner tecnologici senza sostituire le infrastrutture già in uso." : "Discover how CAELO can integrate into existing processes, govern regulated workflows and support public bodies, companies and technology partners without replacing current infrastructures."}</p>
              </div>

              <DemoRequestForm />

              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                {[[isIt ? "Governance procedurale" : "Procedural Governance", isIt ? "CAELO governa il procedimento, non si limita ad assistere l’operatore." : "CAELO governs the procedure, rather than merely assisting the operator."], [isIt ? "Auditabilità e controllo" : "Auditability and Control", isIt ? "Ogni passaggio è tracciabile, verificabile e coerente con le regole operative." : "Every step is traceable, verifiable and aligned with operational rules."], [isIt ? "Integrazione enterprise" : "Enterprise Integration", isIt ? "Architettura progettata per integrarsi con sistemi, cloud e piattaforme già esistenti." : "Architecture designed to integrate with existing systems, cloud environments and enterprise platforms."]].map(([title, description]) => (
                  <div key={title} className="flex flex-col items-center"><CheckCircle2 className="w-8 h-8 text-primary mb-3" /><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-muted-foreground">{description}</p></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
