import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { IMAGES } from "@/assets/images";
import { Target, Users, Shield, Award, Zap, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Trasparenza e Affidabilità",
      description: "Garantiamo la massima trasparenza nei processi decisionali dell'IA, con controllo umano costante e tracciabilità completa."
    },
    {
      icon: Zap,
      title: "Innovazione Responsabile",
      description: "Sviluppiamo tecnologie all'avanguardia nel rispetto delle normative europee e dei principi etici dell'intelligenza artificiale."
    },
    {
      icon: Heart,
      title: "Servizio al Cittadino",
      description: "La nostra missione è semplificare l'accesso ai servizi pubblici, rendendo la PA più efficiente e vicina ai cittadini."
    },
    {
      icon: Award,
      title: "Eccellenza Tecnologica",
      description: "Utilizziamo le migliori tecnologie di elaborazione del linguaggio naturale per garantire precisione e affidabilità."
    }
  ];

  const team = [
    {
      role: "Leadership",
      description: "Un team di esperti in intelligenza artificiale, diritto amministrativo e trasformazione digitale della pubblica amministrazione."
    },
    {
      role: "Ricerca e Sviluppo",
      description: "Ricercatori specializzati in NLP, machine learning e sistemi di governance dell'IA per il settore pubblico."
    },
    {
      role: "Compliance e Qualità",
      description: "Esperti legali e di conformità che garantiscono l'aderenza all'AI Act europeo e alle normative italiane."
    }
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
                Caelo è l'intelligenza artificiale progettata per rivoluzionare la gestione dei procedimenti amministrativi nella pubblica amministrazione italiana.
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
                    <h2 className="text-3xl font-bold mb-4">La Nostra Missione</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Rendere i procedimenti amministrativi più veloci, trasparenti e accessibili. Caelo automatizza l'analisi di documenti complessi, semplifica il linguaggio giuridico e accelera i tempi di risposta, mantenendo sempre il controllo umano nelle decisioni critiche.
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
                    <h2 className="text-3xl font-bold mb-4">La Nostra Visione</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
L’intelligenza artificiale al servizio dell’amministrazione, con l’essere umano sempre al centro delle decisioni.
CAELO è progettato secondo il principio Human-in-the-Loop: la tecnologia supporta l’analisi dei procedimenti e le attività ripetitive, mentre la responsabilità e la decisione finale restano sempre nelle mani dell’operatore pubblico.
La nostra visione è quella di una Pubblica Amministrazione in cui l’intelligenza artificiale affianca il lavoro degli operatori senza sostituirlo, migliorando l’efficienza dei processi e mantenendo sempre centrale il ruolo umano nella valutazione e nelle decisioni.                    </p>
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
                Principi fondamentali che guidano lo sviluppo e l'implementazione di Caelo
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
                    <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
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
                  Esperti multidisciplinari dedicati all'innovazione della pubblica amministrazione
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
                      <h3 className="text-xl font-semibold mb-2">{member.role}</h3>
                      <p className="text-muted-foreground">{member.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">Conformità e Certificazioni</h2>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Caelo è sviluppato in piena conformità con l'AI Act europeo e le normative italiane sulla trasformazione digitale della pubblica amministrazione. Il nostro sistema garantisce:
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Trasparenza Algoritmica</h4>
                    <p className="text-sm text-muted-foreground">Documentazione completa dei processi decisionali dell'IA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Controllo Umano</h4>
                    <p className="text-sm text-muted-foreground">Supervisione costante nelle decisioni amministrative</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Privacy e Sicurezza</h4>
                    <p className="text-sm text-muted-foreground">Protezione dei dati conforme al GDPR</p>
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