import { Layout } from "@/components/Layout";
import { ContactForm, DemoRequestForm } from "@/components/Forms";
import { IMAGES } from "@/assets/images";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { springPresets, fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

export default function Contact() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={IMAGES.DIGITAL_ADMIN_3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />

        <div className="relative z-10">
          <motion.section
            className="py-24 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={springPresets.gentle}
          >
            <div className="container mx-auto max-w-6xl">
              <motion.div
                className="text-center mb-16"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={springPresets.gentle}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Contattaci
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Siamo a disposizione per richieste istituzionali, informazioni sul progetto
                  CAELO e richieste di demo della piattaforma.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ ...springPresets.gentle, delay: 0.1 }}
                >
                  <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg">
                    <h2 className="text-3xl font-semibold mb-8">Richiedi una Demo</h2>
                    <DemoRequestForm />
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ ...springPresets.gentle, delay: 0.2 }}
                >
                  <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg">
                    <h2 className="text-3xl font-semibold mb-8">Invia un Messaggio</h2>
                    <ContactForm variant="compact" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <motion.div
                  variants={staggerItem}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">Scrivici per informazioni</p>
                  <a
                    href="mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=Richiesta%20informazioni%20CAELO"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    info@caelo.it
                  </a>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Telefono</h3>
                  <p className="text-muted-foreground mb-2">Chiamaci direttamente</p>
                  <a
                    href="tel:+393278185828"
                    className="text-primary hover:text-accent transition-colors"
                  >
                    +39 327 818 5828
                  </a>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Sede</h3>
                  <p className="text-muted-foreground mb-2">Riferimento operativo</p>
                  <p className="text-sm">
                    Roma, Italia
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Disponibilità</h3>
                  <p className="text-muted-foreground mb-2">Contatti e demo</p>
                  <p className="text-sm">
                    Lun-Ven: 9:00 - 18:00<br />
                    Sab-Dom: su richiesta
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 text-center border border-primary/20"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ ...springPresets.gentle, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">Hai bisogno di una demo o di un contatto diretto?</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  È possibile richiedere una dimostrazione della piattaforma CAELO oppure
                  contattare direttamente il riferimento per informazioni istituzionali e operative.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=Richiesta%20Demo%20CAELO"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Supporto Demo
                  </a>

                  <a
                   href="https://wa.me/393278185828"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Chiamata Diretta
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
}
