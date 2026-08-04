import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";

const verticals = {
  passweb: {
    label: "Previdenza e posizione assicurativa",
    title: "CAELO PassWeb",
    proceduralStatus: "Architettura procedurale completa e validata",
    softwareStatus: "Implementazione software completata e validata",
    lead: "Il primo verticale completo di CAELO, utilizzato come stress test su uno dei procedimenti amministrativi più complessi, documentali e ad alta responsabilità operativa.",
    description: "CAELO PassWeb supporta la gestione delle pratiche relative alla posizione assicurativa, coordinando comunicazioni, documenti, anomalie contributive, verifiche e passaggi procedurali. Il sistema non sostituisce l’operatore: struttura il lavoro, rende visibili i punti critici e mantiene tracciabile il percorso seguito.",
    functions: ["Interpretazione strutturata delle comunicazioni", "Supporto alla ricostruzione della posizione assicurativa", "Individuazione delle anomalie contributive", "Orientamento nei passaggi procedurali", "Controllo umano e tracciabilità della lavorazione"],
    value: "Il verticale dimostra la capacità di CAELO di governare procedure complesse, multi-fonte e fortemente regolamentate, mantenendo coerenza operativa, responsabilità umana e auditabilità.",
  },
  foresight: {
    label: "Strategic Foresight",
    title: "CAELO Strategic Foresight",
    proceduralStatus: "Architettura procedurale in progettazione avanzata",
    softwareStatus: "Implementazione software non ancora avviata",
    lead: "Un modulo di intelligenza procedurale per governare la costruzione, la verifica e l’evoluzione di scenari strategici complessi.",
    description: "Il verticale Strategic Foresight struttura il processo attraverso il quale un’organizzazione formula scenari, esplicita le assunzioni, seleziona le fonti, definisce variabili e indicatori, verifica i vincoli e conserva le diverse versioni delle analisi. L’obiettivo non è generare previsioni automatiche, ma rendere il processo di foresight trasparente, controllabile e ricostruibile.",
    functions: ["Governance di fonti, assunzioni e vincoli", "Gestione di variabili e indicatori", "Versionamento degli scenari", "Validazione dei passaggi e delle evidenze", "Supervisione umana e tracciabilità delle revisioni"],
    value: "Consente di trasformare il foresight da esercizio prevalentemente narrativo a procedimento governato, nel quale ogni scenario può essere ricondotto alle fonti, alle assunzioni e alle verifiche che lo sostengono.",
  },
  "accesso-civico": {
    label: "Procedimenti amministrativi",
    title: "CAELO Accesso Civico Semplice",
    proceduralStatus: "Architettura procedurale definita",
    softwareStatus: "Implementazione software non ancora avviata",
    lead: "Un verticale dedicato a un procedimento amministrativo breve, regolato e caratterizzato da termini, responsabilità e passaggi chiaramente identificabili.",
    description: "Il modulo governa la ricezione della richiesta, la verifica dei requisiti, l’individuazione del responsabile, il controllo dei termini, la gestione delle eccezioni e la produzione dell’esito. È stato scelto come procedimento dimostrativo per verificare la capacità di CAELO di operare anche su flussi brevi senza perdere rigore procedurale.",
    functions: ["Classificazione della richiesta", "Verifica dei requisiti e dei termini", "Assegnazione di ruoli e responsabilità", "Gestione delle eccezioni", "Produzione di un esito tracciabile"],
    value: "Dimostra che la stessa architettura può governare sia procedimenti estesi e complessi sia flussi amministrativi più brevi, mantenendo invariati controllo, tracciabilità e coerenza.",
  },
  mepa: {
    label: "Procurement pubblico",
    title: "CAELO Appalti sotto soglia / MePA",
    proceduralStatus: "Architettura procedurale completa e validata su casi di test",
    softwareStatus: "Implementazione software non ancora avviata",
    lead: "Un verticale per governare affidamenti sotto soglia e procedure di acquisto attraverso regole, controlli, documenti, eccezioni e responsabilità chiaramente collocate.",
    description: "Il modulo struttura il percorso operativo dell’affidamento, dalla qualificazione dell’esigenza fino ai controlli e alla documentazione dell’esito. Coordina fonti, soglie, attori, condizioni, passaggi autorizzativi e casi eccezionali, senza sostituire la responsabilità del soggetto competente.",
    functions: ["Inquadramento della procedura applicabile", "Controllo di soglie, condizioni e documenti", "Gestione degli attori e dei passaggi autorizzativi", "Trattamento delle eccezioni", "Tracciabilità del percorso e delle evidenze"],
    value: "Riduce il rischio di incoerenze procedurali e rende il processo più leggibile e verificabile, soprattutto nei casi in cui molte regole e responsabilità devono essere coordinate nello stesso flusso.",
  },
  "previdenza-spagna": {
    label: "Previdenza internazionale",
    title: "CAELO Previdenza Assicurativa Spagnola",
    proceduralStatus: "Architettura procedurale completa e pronta per l’implementazione",
    softwareStatus: "Implementazione software non ancora avviata",
    lead: "Un verticale dedicato alla gestione governata di procedimenti previdenziali e assicurativi nel contesto spagnolo.",
    description: "Il modulo organizza fonti, requisiti, verifiche, ruoli, eccezioni e passaggi decisionali propri dei procedimenti previdenziali spagnoli. La progettazione procedurale è stata completata per consentire una successiva implementazione tecnica coerente con l’architettura universale di CAELO.",
    functions: ["Classificazione delle pratiche previdenziali", "Verifica dei requisiti e della documentazione", "Gestione delle anomalie e delle eccezioni", "Coordinamento dei passaggi istruttori", "Tracciabilità delle fonti e delle decisioni"],
    value: "Dimostra la capacità del Mother Engine di estendere la stessa disciplina di governance a ordinamenti e domini previdenziali differenti, mantenendo specializzazione locale e principi architetturali comuni.",
  },
  societario: {
    label: "Diritto societario",
    title: "CAELO Societario",
    subtitle: "Governance e ricostruzione del fascicolo societario",
    studyStatus: "Verticale in fase di studio e progettazione",
    proceduralStatus: "Architettura procedurale in fase di studio e progettazione",
    softwareStatus: "Implementazione software non ancora avviata",
    lead: "Applicazione futura della governance procedurale CAELO al lavoro legale societario, con il professionista sempre al centro della decisione.",
    description: "Un fascicolo societario non è soltanto un insieme di documenti. È una rete di soggetti, partecipazioni, poteri, deliberazioni, obblighi, comunicazioni e decisioni che devono essere ricostruiti nel tempo. CAELO Societario è un verticale in fase di studio, progettato per organizzare e governare questa complessità attraverso una ricostruzione documentata, tracciabile e verificabile del fascicolo. Il sistema è concepito per collegare ogni fatto al documento di origine, ricostruire l’assetto societario e la sua evoluzione, individuare documenti mancanti, evidenziare incongruenze e sottoporre le questioni rilevanti alla valutazione del professionista.",
    functionsTitle: "Funzioni oggetto di studio e progettazione",
    functions: [
      "Ricostruzione cronologica della vita societaria",
      "Mappatura di soci, partecipazioni e organi",
      "Ricostruzione di cariche, deleghe, procure e poteri",
      "Individuazione della versione statutaria applicabile",
      "Collegamento tra convocazioni, verbali, delibere e atti esecutivi",
      "Confronto tra documenti e posizioni contrapposte",
      "Rilevazione di incongruenze e documenti mancanti",
      "Organizzazione delle questioni da sottoporre all’avvocato",
      "Tracciabilità delle verifiche e delle decisioni professionali",
    ],
    professionalTitle: "Il giudizio professionale rimane dell’avvocato",
    professionalParagraphs: [
      "L’esercizio della professione forense richiede autonomia, indipendenza, competenza, coscienza e diligenza.",
      "CAELO Societario non sostituisce l’avvocato, non assume decisioni legali autonome e non determina la strategia della pratica.",
      "Il sistema è progettato per governare il fascicolo e rendere verificabili le informazioni sulle quali il professionista esercita il proprio giudizio.",
    ],
    closing: [
      "Dal documento alla ricostruzione del caso.",
      "Dalla ricostruzione alla decisione professionale.",
      "Senza perdere la fonte.",
    ],
    note: "CAELO Societario è attualmente un verticale in fase di studio e progettazione. Funzioni, perimetro applicativo e modalità di implementazione saranno definiti attraverso il confronto con professionisti del diritto societario.",
    value: "CAELO governa il fascicolo. L’avvocato governa la decisione legale.",
  },
} as const;

export default function VerticaleCaelo() {
  const { slug } = useParams();
  const vertical = slug ? verticals[slug as keyof typeof verticals] : undefined;
  if (!vertical) return <Navigate to="/soluzioni" replace />;

  const isSocietario = slug === "societario";

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-5xl mx-auto">
            <Button variant="ghost" className="mb-8" asChild><Link to="/soluzioni"><ArrowLeft className="mr-2 h-4 w-4" />Torna alle soluzioni</Link></Button>
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">{vertical.label}</span>
            {"studyStatus" in vertical && (
              <div className="mb-6">
                <span className="inline-flex rounded-full border border-primary/30 bg-primary/5 px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-[0.14em] text-primary">
                  {vertical.studyStatus}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{vertical.title}</h1>
            {"subtitle" in vertical && <p className="text-2xl md:text-3xl font-semibold mb-8 max-w-4xl">{vertical.subtitle}</p>}
            <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-4xl">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5"><div className="text-xs uppercase tracking-[0.16em] text-primary font-semibold mb-2">Architettura procedurale</div><div className="font-semibold">{vertical.proceduralStatus.replace("Architettura procedurale ", "")}</div></div>
              <div className="rounded-2xl border border-border bg-card p-5"><div className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-2">Implementazione software</div><div className="font-semibold">{vertical.softwareStatus.replace("Implementazione software ", "")}</div></div>
            </div>
            <p className="text-2xl font-semibold leading-relaxed max-w-4xl">{vertical.lead}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{isSocietario ? "Governare la ricostruzione del fascicolo" : "Che cosa governa"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{vertical.description}</p>
            </div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-3">{"functionsTitle" in vertical ? vertical.functionsTitle : "Capacità principali"}</h2>
              {isSocietario && <p className="text-sm text-muted-foreground leading-relaxed mb-6">Tra le funzioni oggetto di progettazione, il sistema potrà supportare:</p>}
              <div className="space-y-5">{vertical.functions.map((item) => <motion.div key={item} variants={staggerItem} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" /><span className="leading-relaxed">{item}</span></motion.div>)}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {isSocietario && "professionalParagraphs" in vertical && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-7">{vertical.professionalTitle}</h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                {vertical.professionalParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-9 pt-8 border-t border-primary/20 text-2xl md:text-3xl font-bold leading-snug">
                <p>CAELO governa il fascicolo.</p>
                <p>L’avvocato governa la decisione legale.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${isSocietario ? "bg-muted/30" : "bg-background"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2rem] border border-border bg-card p-8 md:p-12">
            {isSocietario && "closing" in vertical ? (
              <>
                <div className="text-3xl md:text-5xl font-bold leading-tight mb-9">
                  {vertical.closing.map((line) => <p key={line}>{line}</p>)}
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed border-t border-border pt-8">{vertical.note}</p>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Valore del verticale</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">{vertical.value}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
