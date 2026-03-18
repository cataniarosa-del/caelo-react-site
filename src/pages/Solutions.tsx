import { Layout } from '@/components/Layout';

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

      {/* 🔴 TEST VISIVO */}
      <h1 style={{ color: "red", fontSize: "48px", textAlign: "center" }}>
        TEST SOLUZIONI
      </h1>

      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/2.jpg')",
        }}
      >
        {/* overlay scuro */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* contenuto */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
            Soluzioni CAELO
          </h1>

          <h2 style={sectionTitle}>Caelo Passweb</h2>

          <p style={paragraph}>
            Caelo Passweb è una soluzione progettata per supportare gli operatori
            della Pubblica Amministrazione nella gestione delle pratiche relative
            alla Posizione Assicurativa, con particolare riferimento all’ambiente
            Passweb.
          </p>

          <div style={blockquote}>
            Caelo non si limita a fornire informazioni, ma interpreta la situazione
            amministrativa e guida l’operatore nella corretta lavorazione della pratica.
          </div>

          <p style={paragraph}>
            L’operatore si trova spesso ad affrontare comunicazioni non strutturate,
            anomalie contributive e situazioni che richiedono una ricostruzione
            completa del caso. Caelo Passweb interviene in questo contesto
            supportando l’analisi, l’interpretazione e l’individuazione del percorso
            procedurale corretto.
          </p>

          <h3 style={sectionTitle}>Funzioni principali</h3>

          <ul style={{ ...paragraph, paddingLeft: "20px" }}>
            <li>interpretazione delle comunicazioni ricevute;</li>
            <li>ricostruzione della posizione assicurativa;</li>
            <li>individuazione delle anomalie contributive;</li>
            <li>orientamento nelle procedure Passweb;</li>
            <li>supporto operativo passo–passo.</li>
          </ul>

          <h3 style={sectionTitle}>Valore operativo</h3>

          <p style={paragraph}>
            La soluzione consente di ridurre i tempi di lavorazione, migliorare la
            qualità delle ricostruzioni e supportare gli operatori anche nei casi
            più complessi, mantenendo sempre il controllo umano sulle decisioni.
          </p>

        </div>
      </section>
    </Layout>
  );
}
