import { Layout } from "@/components/Layout";

export default function Solutions() {
  const paragraph = {
    fontSize: "17px",
    lineHeight: "1.8",
    textAlign: "justify" as const,
    marginBottom: "18px",
    color: "#ffffff",
  };

  const blockquote = {
    borderLeft: "4px solid #2c6f95",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.1)",
    color: "#ffffff",
    borderRadius: "6px",
    margin: "24px 0",
  };

  const sectionTitle = {
    fontSize: "22px",
    color: "#ffffff",
    marginTop: "30px",
    marginBottom: "12px",
    fontWeight: 700,
  } as const;

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/2.jpg"
            alt="Soluzioni CAELO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
              Soluzioni CAELO
            </h1>

            <h2 style={sectionTitle}>Caelo Passweb</h2>

            <p style={paragraph}>
              Caelo Passweb è una soluzione progettata per supportare gli operatori
              della Pubblica Amministrazione nella gestione delle pratiche relative
              alla Posizione Assicurativa, con particolare riferimento all’ambiente
              Passweb INPS.
            </p>

            <div style={blockquote}>
              Caelo non si limita a fornire informazioni: struttura, interpreta e
              rende auditabile la lavorazione delle pratiche, guidando l’operatore
              nel rispetto dei vincoli procedurali e normativi.
            </div>

            <p style={paragraph}>
              Gli operatori si trovano spesso a gestire comunicazioni non
              strutturate, anomalie contributive e casi complessi che richiedono
              una ricostruzione completa. Caelo Passweb interviene come livello di
              supporto integrato, abilitando analisi strutturata, interpretazione
              coerente e individuazione del percorso procedurale corretto, senza
              alterare i sistemi esistenti.
            </p>

            <h3 style={sectionTitle}>Funzioni principali</h3>

            <ul style={{ ...paragraph, paddingLeft: "20px" }}>
              <li>interpretazione strutturata delle comunicazioni ricevute;</li>
              <li>supporto alla ricostruzione della posizione assicurativa;</li>
              <li>individuazione e gestione delle anomalie contributive;</li>
              <li>orientamento guidato nelle procedure Passweb;</li>
              <li>supporto operativo passo-passo auditabile.</li>
            </ul>

            <h3 style={sectionTitle}>Valore operativo</h3>

            <p style={paragraph}>
              La soluzione consente di migliorare la qualità delle lavorazioni,
              ridurre il rischio operativo e supportare gli operatori anche nei
              casi più complessi, mantenendo sempre il controllo umano sulle
              decisioni e garantendo la tracciabilità completa del processo.
            </p>

            <div className="border-l-4 border-primary pl-6 mt-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Impatto operativo per l’amministrazione
              </h3>

              <ul className="space-y-3 text-white/90">
                <li>• Riduzione delle pratiche respinte o rientrate da parte di INPS</li>
                <li>• Minore necessità di rilavorazione delle pratiche già istruite</li>
                <li>• Diminuzione degli errori nelle fasi operative più critiche</li>
                <li>• Riduzione del carico di lavoro manuale sugli operatori</li>
                <li>• Maggiore continuità nella gestione delle pratiche senza interruzioni</li>
                <li>• Migliore controllo delle informazioni prima dell’invio</li>
              </ul>
            </div>

            <h3 style={sectionTitle}>Integrazione e scalabilità</h3>

            <p style={paragraph}>
              Caelo è progettato come layer applicativo integrabile nei sistemi
              esistenti della Pubblica Amministrazione, senza necessità di
              sostituzione o modifica dei software legacy. L’architettura consente
              un’integrazione progressiva, adattandosi ai contesti operativi già in
              uso e garantendo continuità dei processi.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}