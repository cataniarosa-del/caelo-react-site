import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

type Score = { dimension: string; score: string; reason: string };
type Comparison = {
  name: string;
  rows: Array<[string, string, string]>;
  assessment: string[];
};

const scores: Score[] = [
  { dimension: "Innovazione", score: "8,0", reason: "La combinazione di un’architettura nativa orientata alla governance, di un motore multilivello formalizzato e di una pipeline produttiva basata sulle evidenze rappresenta un’innovazione architetturale significativa." },
  { dimension: "Maturità tecnica", score: "7,5", reason: "I cicli operativi completati, i livelli di governance, le evidenze verificabili e la matrice di governance rappresentano un livello di maturità tecnica notevole." },
  { dimension: "Qualità del design", score: "8,5", reason: "La separazione tra prodotto e ambiente di sviluppo, il controllo della divulgazione, l’approccio evidence-first e gli stati formali del ciclo di vita dimostrano una progettazione rigorosa e coerente." },
  { dimension: "Scalabilità", score: "7,0", reason: "La piattaforma dispone di un meccanismo strutturato e governato per l’espansione controllata verso nuovi domini operativi, senza richiedere una riprogettazione dell’architettura di base." },
  { dimension: "Preparazione enterprise", score: "7,0", reason: "Governance, accesso controllato per le verifiche, tracciabilità delle fonti e protezione della proprietà intellettuale sono già impostati a livello enterprise. Il lavoro residuo riguarda soprattutto industrializzazione e deployment." },
  { dimension: "Governance", score: "9,5", reason: "La governance è multilivello, orientata al ciclo di vita, supportata da evidenze e dotata di approvazione umana obbligatoria per l’ampliamento dei confini operativi." },
  { dimension: "Auditabilità", score: "9,0", reason: "La piattaforma dispone di un’infrastruttura completa di auditabilità basata su evidenze verificabili, tracciabilità della conoscenza, registrazione degli interventi umani e accesso controllato per le attività di verifica." },
  { dimension: "Sicurezza concettuale", score: "9,0", reason: "Il controllo multilivello della divulgazione, la separazione degli ambienti e la protezione della proprietà intellettuale definiscono una postura di sicurezza formalmente operativa." },
  { dimension: "Potenziale commerciale", score: "7,5", reason: "Il potenziale è elevato nei settori regolamentati, con opportunità di licenza, modello OEM, partnership e integrazione attraverso system integrator." },
  { dimension: "Difendibilità tecnologica", score: "8,5", reason: "Governance, controllo operativo, gestione delle evidenze e intelligenza procedurale sono integrate in un sistema coerente, difficile da riprodurre attraverso il semplice assemblaggio di componenti." },
  { dimension: "Vantaggio competitivo", score: "8,0", reason: "Non sono stati identificati prodotti commerciali che combinino con analoga completezza intelligenza procedurale, governance enterprise, auditabilità basata sulle evidenze e controllo della divulgazione." },
  { dimension: "Valore strategico", score: "8,5", reason: "CAELO rappresenta un potenziale asset per acquisizione, licenza OEM o investimento strategico nel mercato dell’intelligenza artificiale regolamentata." },
];

const comparisons: Comparison[] = [
  {
    name: "Microsoft — Copilot Studio / Azure AI Foundry",
    rows: [
      ["Modello primario", "Orchestrazione orientata alla produttività e nativa per Microsoft 365", "Governance-first e intelligenza procedurale specializzata per dominio"],
      ["Punto di forza", "Ecosistema molto ampio e capacità di integrazione superiore", "Profondità della governance e specializzazione procedurale"],
      ["Limite nel contesto regolamentato", "Governance legata al perimetro di sicurezza e ai servizi Microsoft", "Modello multilivello pienamente operativo e indipendente dall’ecosistema"],
      ["Auditabilità", "Log tramite Azure Monitor e Sentinel", "Evidenze verificabili, tracciabilità completa e ambiente controllato per l’audit esterno"],
      ["Supervisione umana", "Disponibile, ma non imposta architetturalmente", "Imposta e documentata nei punti critici del procedimento"],
      ["Proprietà intellettuale", "Controlli enterprise standard", "Protezione della logica proprietaria e divulgazione controllata"],
      ["Specializzazione", "General purpose, basata su connettori", "Verticali di dominio governati e altamente specializzati"],
    ],
    assessment: [
      "Microsoft offre una capacità di scala e integrazione significativamente superiore.",
      "CAELO offre invece una profondità di governance, un controllo della divulgazione e una specializzazione procedurale nettamente superiori.",
      "Le piattaforme rispondono a esigenze differenti e non sono concorrenti diretti nei domini procedurali altamente regolamentati.",
    ],
  },
  {
    name: "IBM — watsonx.governance",
    rows: [
      ["Modello primario", "Gestione del rischio dei modelli AI e mappatura normativa", "AI procedurale con governance integrata nel ciclo di produzione"],
      ["Punto di forza", "Monitoraggio enterprise di portafogli AI eterogenei", "Governance procedurale, divulgazione controllata ed evidenze operative"],
      ["Limite nel contesto regolamentato", "Governance sovrapposta a sistemi AI già esistenti", "Conformità incorporata nativamente nel ciclo operativo"],
      ["Mappatura normativa", "Acceleratori EU AI Act e integrazione con OpenPages", "Matrice di governance allineata a NIST AI RMF, ISO/IEC 42001 ed EU AI Act"],
      ["Scalabilità", "Ecosistemi enterprise multi-modello", "Espansione modulare per dominio, governata e controllata"],
      ["Destinatario", "Grandi organizzazioni con portafogli AI eterogenei", "Operatori che gestiscono specifici domini procedurali regolamentati"],
    ],
    assessment: [
      "IBM watsonx.governance è principalmente una piattaforma di monitoraggio e conformità.",
      "CAELO integra governance, evidenze, tracciabilità e controllo operativo direttamente nell’architettura di produzione.",
      "L’approccio CAELO è più granulare e maggiormente operazionalizzato a livello di procedimento.",
    ],
  },
  {
    name: "SAP — AI Governance / Business AI",
    rows: [
      ["Punto di forza", "AI integrata nell’ecosistema ERP e nei workflow SAP", "Intelligenza procedurale e governance multidominio"],
      ["Contesto applicativo", "Finanza, risorse umane e supply chain", "Previdenza, fiscalità, sanità e procedimenti giuridico-amministrativi"],
      ["Limite nel contesto regolamentato", "Dipendenza dall’ecosistema SAP", "Governance indipendente, portabile e integrabile"],
      ["Distribuzione", "Vincolata allo stack SAP", "Potenzialmente distribuibile su infrastrutture eterogenee"],
    ],
    assessment: [
      "SAP trae valore dall’integrazione profonda con il proprio ecosistema ERP.",
      "CAELO è progettato per operare indipendentemente dall’ecosistema tecnologico e per domini procedurali ad alto contenuto normativo.",
    ],
  },
  {
    name: "Palantir — AIP",
    rows: [
      ["Modello di governance", "Governance-as-Code tramite Ontology e accessi basati sullo scopo", "Governance basata su regole, divulgazione controllata ed evidenze"],
      ["Punto di forza", "Sovranità dei dati e tracciabilità su larga scala", "Intelligenza procedurale e governance modulare multidominio"],
      ["Mercato", "Difesa, intelligence, grandi amministrazioni e finanza", "PA regolamentata, previdenza, sanità e compliance"],
      ["Limite di adozione", "Adozione complessa e fortemente platform-centric", "Ingresso più modulare attraverso verticali specialistici"],
      ["Proprietà intellettuale", "Sovranità dei dati enterprise", "Protezione della logica proprietaria e viste controllate per i soggetti autorizzati"],
    ],
    assessment: [
      "Palantir è il riferimento più vicino per disciplina della governance e protezione della proprietà intellettuale.",
      "CAELO opera su scala diversa, ma formalizza in modo particolarmente granulare visibilità, evidenze e vincoli di accesso nel ciclo operativo.",
    ],
  },
  {
    name: "ServiceNow — AI Agents / Now Assist",
    rows: [
      ["Modello", "AI integrata nei workflow ITSM, HR e Customer Service", "AI procedurale applicata a workflow specifici di dominio"],
      ["Control Tower", "AI Control Tower", "Command Center e motore universale di governance procedurale"],
      ["Punto di forza", "Ampiezza dell’ecosistema operativo ServiceNow", "Governance portabile e indipendente dal dominio"],
      ["Limite nel contesto regolamentato", "Dipendenza dall’ecosistema ITSM", "Applicabilità a qualsiasi procedimento strutturato"],
      ["Audit trail", "Log integrati nella piattaforma", "Architettura indipendente delle evidenze e accesso controllato per l’audit esterno"],
      ["Espansione", "Plugin e connettori", "Moduli di dominio governati secondo criteri formali"],
    ],
    assessment: [
      "L’AI Control Tower rappresenta l’analogia funzionale più vicina al Command Center.",
      "CAELO si distingue per la portabilità del motore universale e per un modello di audit esterno più formalizzato.",
    ],
  },
  {
    name: "OpenAI / Anthropic — Enterprise API",
    rows: [
      ["Modello", "Model-as-a-Service tramite API enterprise", "Piattaforma procedurale governata end-to-end"],
      ["Punto di forza", "Capacità linguistiche general purpose e infrastruttura di modello", "Governance, orchestrazione e controllo procedurale"],
      ["Limite nel contesto regolamentato", "Auditabilità principalmente a livello di API e log", "Catena di evidenze e tracciabilità completa"],
      ["Intelligenza procedurale", "General purpose", "Specializzata per dominio e ancorata alle fonti"],
      ["Supervisione umana", "Configurabile", "Imposta e documentata nei punti critici"],
      ["Rapporto con CAELO", "Provider del modello linguistico sottostante", "Livello superiore di governo e orchestrazione"],
    ],
    assessment: [
      "OpenAI e Anthropic non sono concorrenti diretti di CAELO.",
      "I modelli forniscono capacità di elaborazione; CAELO introduce l’architettura necessaria per impiegarli in procedimenti regolamentati.",
    ],
  },
  {
    name: "Glean — Enterprise Knowledge Platform",
    rows: [
      ["Modello", "Knowledge graph, ricerca universale e orchestrazione di agenti", "Intelligenza procedurale governata con pipeline della conoscenza"],
      ["Punto di forza", "Recupero rapido della conoscenza distribuita", "Validazione e promozione governata delle fonti"],
      ["Limite nel contesto regolamentato", "Recupero basato sui permessi", "Tracciabilità completa del percorso della conoscenza e classificazione delle fonti"],
      ["Specializzazione", "Conoscenza trasversale all’impresa", "Verticali con dichiarazioni formali delle fonti"],
      ["Auditabilità", "Logging delle operazioni di recupero", "Catena delle evidenze e verifica del ciclo di utilizzo della conoscenza"],
    ],
    assessment: [
      "Glean è ottimizzato per il recupero delle informazioni.",
      "CAELO è ottimizzato per la governance della conoscenza nei domini in cui provenienza e validazione sono requisiti di conformità.",
    ],
  },
  {
    name: "Harvey — Legal AI",
    rows: [
      ["Dominio", "Redazione giuridica, ricerca legale e due diligence", "Intelligenza procedurale multidominio, anche giuridica e fiscale"],
      ["Punto di forza", "Profonda specializzazione nel lavoro legale", "Governance formalizzata applicabile a molteplici domini"],
      ["Limite", "Specializzazione esclusivamente legale", "Espansione mediante verticali governati"],
      ["Supervisione umana", "Revisione del professionista", "Interventi umani registrati e collocati nei punti critici"],
      ["Auditabilità", "Log enterprise standard", "Evidenze verificabili e tracciabilità completa del percorso decisionale"],
    ],
    assessment: [
      "Harvey eccelle nella redazione e ricerca legale.",
      "CAELO offre un’architettura di governance più ampia e applicabile anche ad altri domini procedurali regolamentati.",
    ],
  },
  {
    name: "UiPath / Automation Anywhere — Process Automation",
    rows: [
      ["Modello", "RPA con orchestrazione AI e process mining", "AI procedurale con governance nativa"],
      ["Punto di forza", "Automazione su larga scala di attività ripetitive", "Gestione di procedure complesse e ad alta intensità di conoscenza"],
      ["Limite", "Ottimizzazione per processi strutturati ad alto volume", "Gestione di ambiguità, fonti, valutazioni umane ed evidenze"],
      ["Governance", "Orchestratore e controlli di accesso", "Governance multilivello supportata da evidenze"],
      ["Supervisione umana", "Disponibile e configurabile", "Imposta nei punti critici del procedimento"],
    ],
    assessment: [
      "Le piattaforme RPA e CAELO sono complementari.",
      "CAELO può costituire il livello di intelligenza procedurale e governance sopra il quale l’RPA esegue le attività automatizzabili.",
    ],
  },
  {
    name: "Celonis — Process Intelligence",
    rows: [
      ["Modello", "Process Mining ed Execution Management", "Esecuzione procedurale governata"],
      ["Punto di forza", "Scoperta, ricostruzione e ottimizzazione dei processi", "Governance dell’esecuzione, evidenze e controllo umano"],
      ["Limite", "Ruolo prevalentemente analitico e prescrittivo", "Ruolo operativo, procedurale ed evidenziale"],
      ["Governance", "Integrata nell’Execution Management System", "Governance multilivello con conformità supportata da evidenze"],
    ],
    assessment: [
      "Celonis consente di comprendere e ottimizzare i processi.",
      "CAELO governa la loro esecuzione operativa nei contesti regolamentati. Le due piattaforme sono fortemente complementari.",
    ],
  },
];

const equivalentElements = [
  "Intelligenza procedurale specializzata per dominio",
  "Framework formale di governance per operazioni AI regolamentate",
  "Architettura delle evidenze con tracciabilità verificabile",
  "Controllo multilivello della divulgazione",
  "Ciclo di vita della conoscenza governato e tracciabile",
  "Matrice di governance allineata ai principali standard internazionali",
  "Supervisione umana imposta nei punti critici",
  "Ambiente controllato per le verifiche esterne",
];

const buyers = [
  ["Enti pubblici regolamentati", "AI tracciabile e auditabile per procedimenti rivolti ai cittadini"],
  ["Sanità ed enti erogatori", "Procedure complesse, fonti validate e controllo della conformità"],
  ["Banche e assicurazioni", "Audit trail completo e governance delle decisioni"],
  ["Studi legali e organismi giudiziari", "Intelligenza procedurale fondata su fonti verificabili"],
  ["System integrator", "Distribuzione di soluzioni AI governate presso clienti regolamentati"],
  ["Compliance e governance enterprise", "Infrastruttura di controllo per processi ad alta responsabilità"],
];

const sectors = ["Pubblica Amministrazione", "Previdenza e welfare", "Sanità", "Autorità giudiziarie", "Autorità di regolazione", "Utilities", "Servizi bancari e finanziari", "Assicurazioni", "Industria e manifattura", "Difesa", "Telecomunicazioni", "Energia", "Compliance e audit", "Knowledge management", "Governance dei processi", "Sistemi mission-critical"];

export default function ValutazioneIndipendente() {
  const { lang } = useLanguage();
  const isIt = lang === "it";

  if (!isIt) {
    return (
      <Layout>
        <section className="py-28"><div className="container mx-auto px-4 max-w-4xl"><h1 className="text-5xl font-bold mb-6">CAELO Independent Assessment</h1><p className="text-xl text-muted-foreground">The complete comparative assessment is currently available in Italian.</p></div></section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-6xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild><Link to="/"><ArrowLeft className="mr-2 h-4 w-4" />Torna alla home</Link></Button>
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">Valutazione comparativa indipendente</span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">CAELO e Mother Engine nel panorama internazionale</h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">Confronto con le principali piattaforme di AI orchestration, governance, knowledge management, legal AI, process intelligence e automazione.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-primary/20 bg-card p-8 md:p-12 shadow-sm grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center"><Sparkles className="w-10 h-10 text-primary" /></div>
            <div><div className="text-sm uppercase tracking-[0.22em] text-primary font-semibold mb-3">Posizionamento di mercato</div><h2 className="text-3xl md:text-5xl font-bold mb-4">Un prodotto raro</h2><p className="text-lg md:text-xl text-muted-foreground leading-relaxed">CAELO è stato definito in una precedente valutazione indipendente come un prodotto raro. La definizione riflette l’assenza, sul mercato, di piattaforme equivalenti capaci di riunire in un’unica architettura intelligenza procedurale, governance multilivello, evidenze verificabili, divulgazione controllata, supervisione umana e auditabilità completa.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12"><h2 className="text-3xl md:text-5xl font-bold mb-5">La pagella completa</h2><p className="text-xl text-muted-foreground">Dodici dimensioni di valutazione, con punteggio e motivazione.</p></div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {scores.map((item) => (
              <motion.article key={item.dimension} variants={staggerItem} className="rounded-3xl border border-border bg-card p-7 md:p-8 shadow-sm">
                <div className="flex items-start justify-between gap-6 mb-5"><h3 className="text-xl md:text-2xl font-bold">{item.dimension}</h3><div className="text-3xl font-bold text-primary whitespace-nowrap">{item.score}</div></div>
                <div className="h-2 rounded-full bg-muted overflow-hidden mb-5"><div className="h-full bg-primary rounded-full" style={{ width: `${parseFloat(item.score.replace(',', '.')) * 10}%` }} /></div>
                <p className="text-muted-foreground leading-relaxed">{item.reason}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14"><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">Benchmark internazionale</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-5">Punti di forza, limiti e differenze</h2><p className="text-xl text-muted-foreground max-w-4xl">Ogni confronto distingue il punto di forza della piattaforma analizzata, il limite rispetto ai procedimenti regolamentati e il vantaggio specifico di CAELO.</p></div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {comparisons.map((comparison, index) => (
              <motion.article key={comparison.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...springPresets.gentle, delay: index * 0.02 }} className="rounded-[2rem] border border-border bg-card overflow-hidden shadow-sm">
                <div className="px-7 md:px-10 py-7 border-b border-border bg-background/70"><div className="text-sm font-semibold text-primary mb-2">CONFRONTO {String(index + 1).padStart(2, '0')}</div><h3 className="text-2xl md:text-4xl font-bold">{comparison.name}</h3></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left"><thead><tr className="border-b border-border bg-muted/40"><th className="p-5 font-semibold w-[20%]">Dimensione</th><th className="p-5 font-semibold w-[40%]">Piattaforma analizzata</th><th className="p-5 font-semibold w-[40%] text-primary">CAELO</th></tr></thead><tbody>{comparison.rows.map(([dimension, other, caelo]) => <tr key={dimension} className="border-b border-border/70 last:border-0 align-top"><td className="p-5 font-semibold">{dimension}</td><td className="p-5 text-muted-foreground leading-relaxed">{other}</td><td className="p-5 leading-relaxed bg-primary/[0.035]">{caelo}</td></tr>)}</tbody></table></div>
                <div className="p-7 md:p-10 border-t border-border"><h4 className="text-xl font-bold mb-5">Valutazione competitiva</h4><div className="space-y-3">{comparison.assessment.map((text) => <p key={text} className="text-muted-foreground leading-relaxed">{text}</p>)}</div></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div><span className="text-primary font-semibold uppercase tracking-[0.18em] text-sm">Posizionamento</span><h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Esiste oggi un prodotto equivalente?</h2><p className="text-lg text-muted-foreground leading-relaxed mb-6">La valutazione non identifica piattaforme commerciali che combinino con un livello equivalente di profondità tutte le capacità osservate in CAELO.</p><div className="rounded-3xl bg-primary/10 p-7"><div className="text-sm font-semibold text-primary uppercase tracking-[0.16em] mb-3">Categoria</div><div className="text-3xl font-bold">Governed Procedural AI Platform</div></div></div>
            <div className="grid sm:grid-cols-2 gap-4">{equivalentElements.map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-5 flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" /><span className="leading-relaxed">{item}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Più di una categoria tradizionale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">{["Più di un copilota", "Più di uno strumento di governance", "Più di una piattaforma di conoscenza", "Più di uno strumento di compliance", "Focalizzato rispetto a un hyperscaler"].map((item) => <div key={item} className="rounded-2xl border border-border bg-card p-6 font-semibold leading-relaxed">{item}</div>)}</div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-10">Potenziali utilizzatori</h2><div className="overflow-x-auto rounded-3xl border border-border"><table className="w-full min-w-[720px]"><thead><tr className="bg-muted/40"><th className="p-5 text-left">Profilo</th><th className="p-5 text-left">Motivazione</th></tr></thead><tbody>{buyers.map(([buyer, reason]) => <tr key={buyer} className="border-t border-border"><td className="p-5 font-semibold">{buyer}</td><td className="p-5 text-muted-foreground">{reason}</td></tr>)}</tbody></table></div></div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl"><h2 className="text-3xl md:text-5xl font-bold mb-5">Ambiti di applicazione</h2><p className="text-xl text-muted-foreground mb-10 max-w-4xl">Il motore universale consente l’espansione controllata verso molteplici verticali specialistici.</p><div className="flex flex-wrap gap-3">{sectors.map((sector) => <span key={sector} className="rounded-full border border-border bg-card px-5 py-3 font-medium">{sector}</span>)}</div></div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4"><div className="max-w-5xl mx-auto rounded-[2rem] bg-primary text-primary-foreground p-10 md:p-16 text-center"><h2 className="text-3xl md:text-5xl font-bold mb-6">Un motore universale. Molteplici verticali specialistici.</h2><p className="text-xl leading-relaxed opacity-90">Il Mother Engine governa l’architettura comune. Il Command Center rende operative le capacità dei verticali. Ogni dominio incorpora le proprie fonti, regole, responsabilità, controlli ed eccezioni senza perdere i principi comuni di tracciabilità, auditabilità e supervisione umana.</p></div></div>
      </section>
    </Layout>
  );
}
