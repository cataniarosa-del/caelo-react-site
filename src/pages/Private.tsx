import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Ticket, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { springPresets, staggerContainer, staggerItem } from "@/lib/motion";

export default function Private() {
  const modules = [
    {
      icon: Mail,
      title: "CAELO Mail",
      subtitle: "Gestione intelligente delle comunicazioni",
      text:
        "CAELO supporta la lettura, l’organizzazione e la gestione delle email e delle richieste in ingresso, migliorando chiarezza, tempi di risposta e continuità operativa.",
    },
    {
      icon: Ticket,
      title: "CAELO Ticket",
      subtitle: "Gestione strutturata delle richieste",
      text:
        "CAELO organizza le attività operative in flussi tracciabili, aiutando l’azienda a gestire priorità, avanzamento, responsabilità e controllo dei processi.",
    },
    {
      icon: GraduationCap,
      title: "CAELO Tutor",
      subtitle: "Formazione operativa continua",
      text:
        "CAELO supporta la crescita dei team, strutturando la formazione interna e rendendo procedure, contenuti e conoscenza più chiari, accessibili e applicabili nel lavoro quotidiano.",
    },
  ];

  const benefits = [
    "ridurre tempi di gestione e risposta",
    "migliorare il controllo dei flussi operativi",
    "alleggerire il carico sugli operatori",
    "rendere le attività più tracciabili",
    "supportare crescita, formazione e continuità interna",
  ];

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/2.jpg"
            alt="Soluzioni CAELO per aziende"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soluzioni CAELO per aziende e organizzazioni complesse
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-10">
              Gestisci meglio comunicazioni, richieste e processi interni.
              CAELO trasforma email, ticket e attività operative in flussi più
              strutturati, riducendo tempi, errori e carico sugli operatori.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contatti">
                  Richiedi una consulenza
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/contatti">Parla con il team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl font-bold mb-6">
                Quando i flussi crescono, serve più controllo
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Nelle aziende, le richieste arrivano da più canali: email,
                ticket, telefonate, sistemi interni. Le informazioni si
                disperdono, le priorità non sono sempre chiare e i processi
                rallentano.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                CAELO aiuta a organizzare il lavoro operativo, affiancando i team
                senza sostituirli e rendendo più leggibili attività, responsabilità
                e passaggi.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={staggerItem}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tre aree di intervento
            </h2>
            <p className="text-lg text-muted-foreground">
              CAELO può essere configurato su esigenze diverse: comunicazioni,
              richieste operative e formazione interna.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <motion.div
                  key={module.title}
                  variants={staggerItem}
                  className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
                  <p className="text-primary font-medium mb-4">{module.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Per aziende che formano, producono contenuti o gestiscono team operativi
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              CAELO Tutor può supportare aziende, editori e società di formazione
              nella trasformazione di contenuti, manuali e procedure in percorsi
              più operativi, aggiornabili e utili nel lavoro quotidiano.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              L’obiettivo è rendere la formazione meno dispersiva e più collegata
              ai processi reali, facilitando onboarding, aggiornamento interno e
              trasferimento della conoscenza.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/3.jpg"
            alt="Consulenza CAELO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ogni azienda ha processi diversi
            </h2>

            <p className="text-xl text-white/90 leading-relaxed mb-10">
              CAELO non propone una soluzione standard. Analizziamo i flussi reali,
              identifichiamo criticità operative e costruiamo una configurazione
              mirata sulle esigenze specifiche dell’organizzazione.
            </p>

            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contatti">
                Richiedi una consulenza
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
