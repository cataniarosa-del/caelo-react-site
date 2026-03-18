import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import {
  springPresets,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { IMAGES } from "@/assets/images";
import { Target, Users, Shield, Award, Zap, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trasparenza e Affidabilità",
      description:
        "Garantiamo tracciabilità delle attività, controllo umano sui passaggi critici e piena verificabilità dei processi supportati dalla piattaforma.",
    },
    {
      icon: Zap,
      title: "Innovazione Responsabile",
      description:
        "Sviluppiamo architetture orientate all’integrazione, all’auditabilità e alla conformità normativa, con un approccio pragmatico e controllato.",
    },
    {
      icon: Heart,
      title: "Supporto al lavoro pubblico",
      description:
        "Progettiamo sistemi che affiancano operatori ed enti nella gestione di processi complessi, migliorando chiarezza, continuità operativa e qualità del lavoro.",
    },
    {
      icon: Award,
      title: "Eccellenza Tecnologica",
      description:
        "Costruiamo soluzioni basate su orchestrazione deterministica, knowledge engineering e strutture progettate per contesti pubblici ad alta responsabilità.",
    },
  ];

  const team = [
    {
      role: "Leadership",
      description:
        "Un team con competenze integrate in architetture AI deterministiche, diritto amministrativo e integrazione di sistemi complessi, orientato alla realizzazione di soluzioni scalabili e interoperabili per la pubblica amministrazione.",
    },
    {
      role: "Ricerca e Sviluppo",
      description:
        "Ricercatori specializzati in architetture AI deterministiche, sistemi di orchestrazione e knowledge engineering, progettati per essere integrabili, auditabili e scalabili nei contesti della pubblica amministrazione.",
    },
    {
      role: "Compliance e Qualità",
      description:
        "Esperti in conformità normativa, audit dei sistemi digitali e governance dei processi, con l’obiettivo di garantire riduzione del rischio operativo, tracciabilità delle decisioni e allineamento normativo.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.AI_GOVERNMENT_9}
              alt="Caelo AI Technology"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Chi Siamo
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Progettiamo sistemi decisionali auditabili e conformi per la
                Pubblica Amministrazione.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={staggerItem} className="mb-16">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      La Nostra Missione
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Rendere i processi amministrativi più leggibili,
                      controllabili e sostenibili, attraverso una piattaforma che
                      supporta operatori ed enti nella gestione di casi complessi,
                      mantenendo sempre il controllo umano sulle decisioni.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={staggerItem}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">
                      La Nostra Visione
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Una Pubblica Amministrazione in cui la tecnologia affianca i
                      processi esistenti senza sostituirli, migliora
                      l’operatività senza introdurre opacità e rende ogni
                      passaggio più tracciabile, verificabile e integrabile nei
                      contesti reali di lavoro.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">I Nostri Valori</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Principi che guidano la progettazione e l’evoluzione della
                piattaforma.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={springPresets.gentle}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold mb-4">Il Nostro Team</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Competenze integrate per la progettazione di sistemi
                  decisionali auditabili nella Pubblica Amministrazione.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={springPresets.gentle}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <img
                    src={IMAGES.OFFICE_TECH_2}
                    alt="Caelo Team"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {team.map((member, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="bg-card rounded-xl p-6 border border-border"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {member.role}
                      </h3>
                      <p className="text-muted-foreground">
                        {member.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">
                Conformità e Governance
              </h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Caelo è progettato per supportare requisiti di trasparenza,
                  controllo umano e tracciabilità nei contesti pubblici ad alta
                  responsabilità, con un approccio orientato alla verificabilità
                  dei processi e all’allineamento normativo.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Tracciabilità
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Supporto alla registrazione e alla verificabilità dei
                      passaggi operativi.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Controllo umano
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Supervisione dell’operatore nei punti critici del processo.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Sicurezza e conformità
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Progettazione orientata alla protezione dei dati e
                      all’allineamento ai requisiti applicabili.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
