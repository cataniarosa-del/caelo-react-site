import { Layout } from "@/components/Layout";
import { ContactForm, DemoRequestForm } from "@/components/Forms";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/LanguageContext";
import {
  springPresets,
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

const contactTexts = {
  it: {
    title: "Contattaci",
    subtitle: "Siamo a disposizione per richieste istituzionali, informazioni sul progetto CAELO e richieste di demo della piattaforma.",
    demoNote: "Caelo supporta la gestione delle pratiche amministrative riducendo errori, rilavorazioni e pratiche respinte da parte di INPS, alleggerendo il carico operativo sugli uffici.",
    demoTitle: "Richiedi una Demo",
    messageTitle: "Invia un Messaggio",
    writeUs: "Scrivici per informazioni",
    phone: "Telefono",
    callUs: "Chiamaci direttamente",
    office: "Sede",
    officeRef: "Riferimento operativo",
    location: "Roma, Italia",
    ctaTitle: "Hai bisogno di una demo o di un contatto diretto? Per richieste di demo è possibile inviare una mail oppure contattare direttamente il team.",
    ctaText: "È possibile richiedere una dimostrazione della piattaforma CAELO oppure contattare direttamente il riferimento per informazioni istituzionali e operative.",
    demoSupport: "Supporto Demo",
    directCall: "Chiamata Diretta",
  },
  en: {
    title: "Contact us",
    subtitle: "We are available for institutional requests, information about the CAELO project and platform demo requests.",
    demoNote: "Caelo supports administrative case management by reducing errors, rework and rejected cases, easing the operational workload for offices.",
    demoTitle: "Request a Demo",
    messageTitle: "Send a Message",
    writeUs: "Write to us for information",
    phone: "Phone",
    callUs: "Call us directly",
    office: "Office",
    officeRef: "Operational reference",
    location: "Rome, Italy",
    ctaTitle: "Need a demo or direct contact? You can send an email or contact the team directly.",
    ctaText: "You can request a demonstration of the CAELO platform or contact the reference person directly for institutional and operational information.",
    demoSupport: "Demo Support",
    directCall: "Direct Call",
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Nous sommes disponibles pour les demandes institutionnelles, les informations sur le projet CAELO et les demandes de démo.",
    demoNote: "Caelo accompagne la gestion des dossiers administratifs en réduisant les erreurs, les reprises et les dossiers rejetés, allégeant ainsi la charge opérationnelle des bureaux.",
    demoTitle: "Demander une démo",
    messageTitle: "Envoyer un message",
    writeUs: "Écrivez-nous pour plus d’informations",
    phone: "Téléphone",
    callUs: "Appelez-nous directement",
    office: "Siège",
    officeRef: "Référence opérationnelle",
    location: "Rome, Italie",
    ctaTitle: "Besoin d’une démo ou d’un contact direct ? Vous pouvez envoyer un e-mail ou contacter directement l’équipe.",
    ctaText: "Vous pouvez demander une démonstration de la plateforme CAELO ou contacter directement le référent pour des informations institutionnelles et opérationnelles.",
    demoSupport: "Support démo",
    directCall: "Appel direct",
  },
  de: {
    title: "Kontakt",
    subtitle: "Wir stehen für institutionelle Anfragen, Informationen zum CAELO-Projekt und Demo-Anfragen zur Verfügung.",
    demoNote: "Caelo unterstützt die Verwaltung administrativer Vorgänge, reduziert Fehler, Nacharbeit und abgelehnte Fälle und entlastet so die operativen Büros.",
    demoTitle: "Demo anfordern",
    messageTitle: "Nachricht senden",
    writeUs: "Schreiben Sie uns für Informationen",
    phone: "Telefon",
    callUs: "Rufen Sie uns direkt an",
    office: "Sitz",
    officeRef: "Operative Referenz",
    location: "Rom, Italien",
    ctaTitle: "Benötigen Sie eine Demo oder direkten Kontakt? Sie können eine E-Mail senden oder das Team direkt kontaktieren.",
    ctaText: "Sie können eine Demonstration der CAELO-Plattform anfordern oder die zuständige Kontaktperson direkt für institutionelle und operative Informationen kontaktieren.",
    demoSupport: "Demo-Support",
    directCall: "Direktanruf",
  },
  es: {
    title: "Contáctanos",
    subtitle: "Estamos disponibles para solicitudes institucionales, información sobre el proyecto CAELO y solicitudes de demo de la plataforma.",
    demoNote: "Caelo apoya la gestión de expedientes administrativos reduciendo errores, reprocesos y expedientes rechazados, aligerando la carga operativa de las oficinas.",
    demoTitle: "Solicitar demo",
    messageTitle: "Enviar un mensaje",
    writeUs: "Escríbenos para más información",
    phone: "Teléfono",
    callUs: "Llámanos directamente",
    office: "Sede",
    officeRef: "Referencia operativa",
    location: "Roma, Italia",
    ctaTitle: "¿Necesitas una demo o un contacto directo? Puedes enviar un email o contactar directamente con el equipo.",
    ctaText: "Puedes solicitar una demostración de la plataforma CAELO o contactar directamente con el referente para información institucional y operativa.",
    demoSupport: "Soporte demo",
    directCall: "Llamada directa",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const text = contactTexts[lang];

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/3.jpg" alt="Caelo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.section className="py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={springPresets.gentle}>
            <div className="max-w-6xl mx-auto">
              <motion.div className="text-center mb-16" variants={fadeInUp} initial="initial" animate="animate" transition={springPresets.gentle}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  {text.title}
                </h1>

                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  {text.subtitle}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ ...springPresets.gentle, delay: 0.1 }}>
                  <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg">
                    <div className="border-l-4 border-primary pl-5 mb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {text.demoNote}
                      </p>
                    </div>

                    <h2 className="text-3xl font-semibold mb-8">
                      {text.demoTitle}
                    </h2>

                    <DemoRequestForm />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ ...springPresets.gentle, delay: 0.2 }}>
                  <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border shadow-lg">
                    <h2 className="text-3xl font-semibold mb-8">
                      {text.messageTitle}
                    </h2>

                    <ContactForm variant="compact" />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div variants={staggerItem} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">{text.writeUs}</p>
                  <a href="mailto:info@caelo.it,ccatania.cpi@gmail.com" className="text-primary hover:text-accent transition-colors">
                    info@caelo.it
                  </a>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{text.phone}</h3>
                  <p className="text-muted-foreground mb-2">{text.callUs}</p>
                  <a href="tel:+393278185828" className="text-primary hover:text-accent transition-colors">
                    +39 327 818 5828
                  </a>
                </motion.div>

                <motion.div variants={staggerItem} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{text.office}</h3>
                  <p className="text-muted-foreground mb-2">{text.officeRef}</p>
                  <p className="text-sm">{text.location}</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 text-center border border-primary/20"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ ...springPresets.gentle, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4">{text.ctaTitle}</h2>

                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {text.ctaText}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@caelo.it?cc=ccatania.cpi@gmail.com&subject=Richiesta%20Demo%20CAELO"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {text.demoSupport}
                  </a>

                  <a
                    href="https://wa.me/393278185828"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-semibold hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {text.directCall}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </Layout>
  );
}
