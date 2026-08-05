import { Layout } from "@/components/Layout";
import { DemoRequestForm } from "@/components/Forms";
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
    subtitle: "Confrontiamoci su un procedimento, un caso d’uso, un verticale specialistico o un’ipotesi di integrazione con i sistemi della tua organizzazione.",
    demoNote: "Descrivi il procedimento, il contesto operativo o il problema che vuoi governare. Valuteremo fonti, regole, attori, vincoli e requisiti di integrazione.",
    demoTitle: "Avvia un confronto",
    messageTitle: "Invia un Messaggio",
    writeUs: "Scrivici per progetti, partnership e richieste istituzionali",
    phone: "Telefono",
    callUs: "Contatto diretto per un primo confronto",
    office: "Sede",
    officeRef: "Riferimento operativo",
    location: "Roma, Italia",
    ctaTitle: "Preferisci un contatto diretto?",
    ctaText: "Puoi scriverci via email oppure contattarci direttamente per presentare il contesto, il procedimento o l’ipotesi di collaborazione.",
    demoSupport: "Scrivi al team",
    directCall: "Contatto WhatsApp",
  },
  en: {
    title: "Contact us",
    subtitle: "Let us discuss a procedure, use case, specialist vertical or integration opportunity within your organisation’s systems.",
    demoNote: "Describe the procedure, operating context or problem you need to govern. We will assess sources, rules, actors, constraints and integration requirements.",
    demoTitle: "Start a conversation",
    messageTitle: "Send a Message",
    writeUs: "Write to us about projects, partnerships and institutional requests",
    phone: "Phone",
    callUs: "Direct contact for an initial discussion",
    office: "Office",
    officeRef: "Operational reference",
    location: "Rome, Italy",
    ctaTitle: "Would you prefer direct contact?",
    ctaText: "You can email us or contact us directly to present the context, procedure or collaboration opportunity.",
    demoSupport: "Write to the team",
    directCall: "WhatsApp contact",
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Échangeons sur une procédure, un cas d’usage, une verticale spécialisée ou une hypothèse d’intégration avec les systèmes de votre organisation.",
    demoNote: "Décrivez la procédure, le contexte opérationnel ou le problème à gouverner. Nous évaluerons les sources, règles, acteurs, contraintes et exigences d’intégration.",
    demoTitle: "Engager un échange",
    messageTitle: "Envoyer un message",
    writeUs: "Écrivez-nous pour des projets, partenariats et demandes institutionnelles",
    phone: "Téléphone",
    callUs: "Contact direct pour un premier échange",
    office: "Siège",
    officeRef: "Référence opérationnelle",
    location: "Rome, Italie",
    ctaTitle: "Préférez-vous un contact direct ?",
    ctaText: "Vous pouvez nous écrire ou nous contacter directement pour présenter le contexte, la procédure ou l’hypothèse de collaboration.",
    demoSupport: "Écrire à l’équipe",
    directCall: "Contact WhatsApp",
  },
  de: {
    title: "Kontakt",
    subtitle: "Lassen Sie uns über ein Verfahren, einen Anwendungsfall, eine spezialisierte Vertikale oder eine Integrationsmöglichkeit in Ihre Systeme sprechen.",
    demoNote: "Beschreiben Sie das Verfahren, den operativen Kontext oder das zu steuernde Problem. Wir bewerten Quellen, Regeln, Akteure, Einschränkungen und Integrationsanforderungen.",
    demoTitle: "Gespräch beginnen",
    messageTitle: "Nachricht senden",
    writeUs: "Schreiben Sie uns zu Projekten, Partnerschaften und institutionellen Anfragen",
    phone: "Telefon",
    callUs: "Direkter Kontakt für ein erstes Gespräch",
    office: "Sitz",
    officeRef: "Operative Referenz",
    location: "Rom, Italien",
    ctaTitle: "Bevorzugen Sie einen direkten Kontakt?",
    ctaText: "Sie können uns schreiben oder direkt kontaktieren, um den Kontext, das Verfahren oder eine mögliche Zusammenarbeit vorzustellen.",
    demoSupport: "An das Team schreiben",
    directCall: "WhatsApp-Kontakt",
  },
  es: {
    title: "Contáctanos",
    subtitle: "Conversemos sobre un procedimiento, un caso de uso, una vertical especializada o una posible integración con los sistemas de tu organización.",
    demoNote: "Describe el procedimiento, el contexto operativo o el problema que necesitas gobernar. Evaluaremos fuentes, reglas, actores, restricciones y requisitos de integración.",
    demoTitle: "Iniciar una conversación",
    messageTitle: "Enviar un mensaje",
    writeUs: "Escríbenos sobre proyectos, alianzas y solicitudes institucionales",
    phone: "Teléfono",
    callUs: "Contacto directo para una primera conversación",
    office: "Sede",
    officeRef: "Referencia operativa",
    location: "Roma, Italia",
    ctaTitle: "¿Prefieres un contacto directo?",
    ctaText: "Puedes escribirnos o contactarnos directamente para presentar el contexto, el procedimiento o la posible colaboración.",
    demoSupport: "Escribir al equipo",
    directCall: "Contacto por WhatsApp",
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

              <div className="max-w-4xl mx-auto mb-16">
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
              </div>

              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div variants={staggerItem} className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">{text.writeUs}</p>
                  <a href="mailto:info@caelo.it?cc=ccatania.cpi@gmail.com" className="text-primary hover:text-accent transition-colors">
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

                <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
                  {text.ctaText}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@caelo.it?cc=ccatania.cpi@gmail.com&subject=Richiesta%20di%20confronto%20su%20CAELO"
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
