import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";
import { useLanguage } from "@/LanguageContext";

const verticals = [
  {
    slug: "passweb",
    category: "Previdenza e posizione assicurativa",
    title: "CAELO PassWeb",
    description: "Il primo verticale completo di CAELO, utilizzato come stress test su un procedimento amministrativo complesso, documentale e ad alta responsabilità operativa.",
    procedural: "Completa e validata",
    software: "Completata e validata",
  },
  {
    slug: "previdenza-spagna",
    category: "Previdenza internazionale",
    title: "CAELO Previdenza Assicurativa Spagnola",
    description: "Architettura procedurale dedicata ai procedimenti previdenziali e assicurativi nel contesto spagnolo, pronta per la successiva implementazione tecnica.",
    procedural: "Completa e pronta per l’implementazione",
    software: "Non ancora avviata",
  },
  {
    slug: "foresight",
    category: "Strategic Foresight",
    title: "CAELO Strategic Foresight",
    description: "Un verticale per governare scenari, fonti, assunzioni, vincoli, variabili, indicatori e validazioni in modo trasparente e ricostruibile.",
    procedural: "In progettazione avanzata",
    software: "Non ancora avviata",
  },
  {
    slug: "accesso-civico",
    category: "Procedimenti amministrativi",
    title: "CAELO Accesso Civico Semplice",
    description: "Un verticale dedicato a un procedimento breve e regolato, con termini, ruoli, controlli, eccezioni e responsabilità chiaramente identificabili.",
    procedural: "Definita",
    software: "Non ancora avviata",
  },
  {
    slug: "mepa",
    category: "Procurement pubblico",
    title: "CAELO Appalti sotto soglia / MePA",
    description: "Un verticale per governare affidamenti, soglie, condizioni, documenti, passaggi autorizzativi, eccezioni e responsabilità.",
    procedural: "Completa e validata su casi di test",
    software: "Non ancora avviata",
  },
];

export default function Solutions() {
  const { lang } = useLanguage();
  const isIt = lang === "it";

  return (
    <Layout>
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/2.jpg" alt="Soluzioni CAELO" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={springPresets.gentle} className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{isIt ? "Soluzioni CAELO" : "CAELO Solutions"}</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {isIt
                ? "Verticali specialistici costruiti sulla stessa architettura universale di governance procedurale. Ogni soluzione mantiene fonti, regole, ruoli, controlli ed eccezioni specifici del proprio dominio."
                : "Specialized verticals built on the same universal procedural governance architecture."}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-14">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">{isIt ? "Verticali di dominio" : "Domain verticals"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{isIt ? "Dalla progettazione procedurale all’implementazione software" : "From procedural design to software implementation"}</h2>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
              {isIt
                ? "Per ogni verticale distinguiamo chiaramente l’architettura procedurale — definizione di fonti, regole, ruoli, stati, controlli, eccezioni e responsabilità — dalla successiva implementazione tecnica in codice."
                : "Each vertical separates procedural architecture from software implementation."}
            </p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {verticals.map((vertical) => (
              <motion.article key={vertical.slug} variants={staggerItem} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col">
                <span className="inline-flex self-start rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">{vertical.category}</span>
                <h3 className="text-3xl font-bold mb-5">{vertical.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{vertical.description}</p>

                <div className="grid gap-4 mb-8">
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-primary font-semibold mb-2">Architettura procedurale</div>
                    <div className="font-semibold">{vertical.procedural}</div>
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground font-semibold mb-2">Implementazione software</div>
                    <div className="font-semibold">{vertical.software}</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button size="lg" variant={vertical.slug === "passweb" ? "default" : "outline"} className="text-base px-6 py-5" asChild>
                    <Link to={`/soluzioni/${vertical.slug}`}>
                      {isIt ? "Scopri il verticale" : "Explore the vertical"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
