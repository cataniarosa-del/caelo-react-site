import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { CheckCircle2, Scale, Cpu, ShieldCheck } from "lucide-react";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const claudiaCompetencies = [
  "Progettazione giuridico-procedurale",
  "Governance dell’intelligenza artificiale",
  "Analisi normativa e procedimenti amministrativi",
  "Compliance by design",
  "Supervisione umana e responsabilità",
  "Relazioni istituzionali",
  "Strategia e sviluppo internazionale",
];

const rosaCompetencies = [
  "Architettura dei sistemi AI",
  "Progettazione del Mother Engine",
  "Traduzione dei modelli procedurali in software",
  "Orchestrazione dei workflow",
  "Architetture modulari e multidominio",
  "Integrazione dei sistemi",
  "Sicurezza, affidabilità e scalabilità",
];

export default function About() {
  const { lang } = useLanguage();
  const isIt = lang === "it";

  if (!isIt) {
    return (
      <Layout>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">About CAELO</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              CAELO is founded on the convergence of legal-procedural methodology and AI system architecture. The complete team page is currently available in Italian.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden py-24 md:py-32 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-6xl mx-auto text-center">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6">Chi siamo</span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">Governiamo la complessità per costruire decisioni più giuste</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              CAELO nasce dall’incontro tra due competenze complementari: la progettazione giuridico-procedurale e l’architettura dei sistemi di intelligenza artificiale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-7"><Scale className="w-8 h-8 text-primary" /></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnologia, responsabilità e amministrazione giusta</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Per noi l’etica dell’intelligenza artificiale non è una dichiarazione astratta. Diventa concreta quando un sistema impedisce che una persona subisca le conseguenze di un procedimento incoerente, incompleto o non verificato.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="space-y-5">
              {["Applicare le regole in modo coerente", "Riconoscere e governare le eccezioni", "Verificare le fonti prima del loro utilizzo", "Rendere visibile il percorso seguito", "Mantenere identificabile la responsabilità umana", "Correggere gli errori prima che producano conseguenze"].map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-card p-5 flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" /><span className="text-lg leading-relaxed">{item}</span></div>
              ))}
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 rounded-[2rem] bg-primary text-primary-foreground p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">L’etica non viene aggiunta al sistema alla fine. È incorporata nel modo in cui il procedimento viene progettato, governato e controllato.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">Le fondatrici</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Due competenze, un’unica architettura di governo</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-4">Co-Founder & CEO</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Claudia Catania</h3>
              <p className="text-xl font-semibold mb-7">Legal-Procedural Methodology Architect</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                <p>Claudia Catania è co-fondatrice e CEO di CAELO ed è l’ideatrice della metodologia giuridico-procedurale sulla quale è costruita la piattaforma.</p>
                <p>Trasforma norme, procedimenti amministrativi, prassi operative e conoscenza specialistica in architetture procedurali governabili, definendo fonti, regole, ruoli, stati, controlli, eccezioni, passaggi decisionali e punti di supervisione umana.</p>
                <p>Il suo lavoro precede l’implementazione software: stabilisce che cosa il sistema deve governare, secondo quali regole e con quali responsabilità. Come CEO guida inoltre il posizionamento strategico, le relazioni istituzionali, lo sviluppo dei verticali, le partnership e l’espansione internazionale.</p>
              </div>
              <h4 className="font-bold mb-4">Competenze chiave</h4>
              <div className="grid sm:grid-cols-2 gap-3">{claudiaCompetencies.map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />{item}</div>)}</div>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={springPresets.gentle} className="rounded-[2rem] border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-4">Founder & Chief System Architect</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Rosa Catania</h3>
              <p className="text-xl font-semibold mb-7">Chief System Architect</p>
              <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
                <p>Rosa Catania è fondatrice e Chief System Architect di CAELO.</p>
                <p>Trasforma l’architettura procedurale in una piattaforma software scalabile, modulare e integrabile. È responsabile della progettazione tecnica del sistema, del Mother Engine e della traduzione dei modelli procedurali in componenti capaci di governare regole, stati, controlli, evidenze e interventi umani.</p>
                <p>Il suo lavoro definisce come il sistema realizza tecnicamente il modello procedurale, garantendo coerenza architetturale, modularità dei verticali, sicurezza, interoperabilità, scalabilità e affidabilità dell’esecuzione.</p>
              </div>
              <h4 className="font-bold mb-4">Competenze chiave</h4>
              <div className="grid sm:grid-cols-2 gap-3">{rosaCompetencies.map((item) => <div key={item} className="flex gap-2 text-sm leading-relaxed"><CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />{item}</div>)}</div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">Il metodo CAELO</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Due architetture, un solo sistema</h2>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div variants={staggerItem} className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Scale className="w-7 h-7 text-primary" /></div>
              <h3 className="text-3xl font-bold mb-5">Architettura procedurale</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Definisce che cosa deve accadere, in quale ordine, sulla base di quali fonti, con quali controlli, sotto la responsabilità di chi e come devono essere gestite le eccezioni.</p>
              <p className="font-semibold">La metodologia stabilisce la logica del procedimento.</p>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"><Cpu className="w-7 h-7 text-primary" /></div>
              <h3 className="text-3xl font-bold mb-5">Architettura software</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Traduce il modello in componenti eseguibili, moduli di dominio, workflow, controlli tecnici, interfacce, integrazioni e infrastrutture scalabili e sicure.</p>
              <p className="font-semibold">L’architettura software rende operativa la logica procedurale.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-border bg-card p-9 md:p-14 text-center shadow-sm">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Un motore universale, molteplici verticali</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">Il Mother Engine costituisce l’architettura comune di governance procedurale. Su questa base vengono sviluppati verticali specialistici, ciascuno costruito attraverso analisi del dominio, progettazione procedurale e successiva implementazione software.</p>
            <p className="text-2xl font-bold">CAELO nasce dalla convinzione che la tecnologia debba rendere le decisioni più comprensibili, più controllabili e più giuste.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
