import { useState } from "react";
import { useLanguage } from "@/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const formTexts = {
  it: {
    contactTitle: "Contattaci",
    contactDescription: "Compila il form per ricevere maggiori informazioni su Caelo",
    organization: "Ente di appartenenza",
    phone: "Telefono",
    messagePlaceholder: "Descrivi le tue esigenze e come Caelo può aiutare il tuo ente...",
    contactSubject: "Contatto dal sito CAELO",
    contactEmailTitle: "Messaggio dal sito CAELO",
    emailPreparing: "Preparazione email",
    emailOpening: "Si aprirà il tuo client di posta per inviare il messaggio.",
    demoTitle: "Richiedi una Demo",
    demoDescription: "Scopri come Caelo può trasformare i procedimenti amministrativi del tuo ente",
    businessEmail: "Email aziendale",
    role: "Ruolo",
    organizationType: "Tipologia ente",
    selectType: "Seleziona tipologia",
    municipality: "Comune",
    province: "Provincia",
    region: "Regione",
    ministry: "Ministero",
    agency: "Agenzia governativa",
    otherPublic: "Altro ente pubblico",
    employees: "Numero dipendenti",
    selectRange: "Seleziona range",
    over1000: "Oltre 1000",
    interest: "Principale area di interesse",
    interestPlaceholder: "Es: Automazione pratiche edilizie, gestione concessioni, supporto cittadini...",
    privacyRequiredTitle: "Consenso privacy richiesto",
    privacyRequiredDescription: "Devi accettare l'informativa sulla privacy per procedere.",
    privacyAccept: "Accetto l'informativa sulla privacy",
    privacyText: "Acconsento al trattamento dei miei dati personali per ricevere informazioni commerciali e la demo di Caelo, in conformità al GDPR e alla normativa italiana sulla privacy.",
    demoSubject: "Richiesta Demo CAELO",
    demoEmailTitle: "Richiesta Demo CAELO",
    demoOpening: "Si aprirà il tuo client di posta per inviare la richiesta.",
    freeDemo: "Richiedi demo gratuita",
  },
  en: {
    contactTitle: "Contact us",
    contactDescription: "Fill in the form to receive more information about Caelo",
    organization: "Organization",
    phone: "Phone",
    messagePlaceholder: "Describe your needs and how Caelo can help your organization...",
    contactSubject: "Contact from CAELO website",
    contactEmailTitle: "Message from CAELO website",
    emailPreparing: "Preparing email",
    emailOpening: "Your email client will open to send the message.",
    demoTitle: "Request a Demo",
    demoDescription: "Discover how Caelo can transform your organization’s administrative procedures",
    businessEmail: "Business email",
    role: "Role",
    organizationType: "Organization type",
    selectType: "Select type",
    municipality: "Municipality",
    province: "Province",
    region: "Region",
    ministry: "Ministry",
    agency: "Government agency",
    otherPublic: "Other public body",
    employees: "Number of employees",
    selectRange: "Select range",
    over1000: "Over 1000",
    interest: "Main area of interest",
    interestPlaceholder: "E.g. building permit automation, concessions management, citizen support...",
    privacyRequiredTitle: "Privacy consent required",
    privacyRequiredDescription: "You must accept the privacy notice to proceed.",
    privacyAccept: "I accept the privacy notice",
    privacyText: "I consent to the processing of my personal data to receive commercial information and the Caelo demo, in compliance with GDPR and applicable privacy rules.",
    demoSubject: "CAELO Demo Request",
    demoEmailTitle: "CAELO Demo Request",
    demoOpening: "Your email client will open to send the request.",
    freeDemo: "Request free demo",
  },
  fr: {
    contactTitle: "Contactez-nous",
    contactDescription: "Remplissez le formulaire pour recevoir plus d’informations sur Caelo",
    organization: "Organisation",
    phone: "Téléphone",
    messagePlaceholder: "Décrivez vos besoins et comment Caelo peut aider votre organisation...",
    contactSubject: "Contact depuis le site CAELO",
    contactEmailTitle: "Message depuis le site CAELO",
    emailPreparing: "Préparation de l’e-mail",
    emailOpening: "Votre client de messagerie va s’ouvrir pour envoyer le message.",
    demoTitle: "Demander une démo",
    demoDescription: "Découvrez comment Caelo peut transformer les procédures administratives de votre organisation",
    businessEmail: "E-mail professionnel",
    role: "Rôle",
    organizationType: "Type d’organisation",
    selectType: "Sélectionner le type",
    municipality: "Commune",
    province: "Province",
    region: "Région",
    ministry: "Ministère",
    agency: "Agence gouvernementale",
    otherPublic: "Autre organisme public",
    employees: "Nombre d’employés",
    selectRange: "Sélectionner une plage",
    over1000: "Plus de 1000",
    interest: "Principal domaine d’intérêt",
    interestPlaceholder: "Ex. automatisation des démarches, gestion des concessions, support aux citoyens...",
    privacyRequiredTitle: "Consentement confidentialité requis",
    privacyRequiredDescription: "Vous devez accepter la politique de confidentialité pour continuer.",
    privacyAccept: "J’accepte la politique de confidentialité",
    privacyText: "J’accepte le traitement de mes données personnelles afin de recevoir des informations commerciales et la démo de Caelo, conformément au RGPD.",
    demoSubject: "Demande de démo CAELO",
    demoEmailTitle: "Demande de démo CAELO",
    demoOpening: "Votre client de messagerie va s’ouvrir pour envoyer la demande.",
    freeDemo: "Demander une démo gratuite",
  },
  de: {
    contactTitle: "Kontakt",
    contactDescription: "Füllen Sie das Formular aus, um weitere Informationen über Caelo zu erhalten",
    organization: "Organisation",
    phone: "Telefon",
    messagePlaceholder: "Beschreiben Sie Ihre Anforderungen und wie Caelo Ihre Organisation unterstützen kann...",
    contactSubject: "Kontakt von der CAELO-Website",
    contactEmailTitle: "Nachricht von der CAELO-Website",
    emailPreparing: "E-Mail wird vorbereitet",
    emailOpening: "Ihr E-Mail-Programm wird geöffnet, um die Nachricht zu senden.",
    demoTitle: "Demo anfordern",
    demoDescription: "Erfahren Sie, wie Caelo die Verwaltungsverfahren Ihrer Organisation verbessern kann",
    businessEmail: "Geschäftliche E-Mail",
    role: "Rolle",
    organizationType: "Organisationstyp",
    selectType: "Typ auswählen",
    municipality: "Gemeinde",
    province: "Provinz",
    region: "Region",
    ministry: "Ministerium",
    agency: "Behörde",
    otherPublic: "Andere öffentliche Einrichtung",
    employees: "Anzahl der Mitarbeitenden",
    selectRange: "Bereich auswählen",
    over1000: "Über 1000",
    interest: "Hauptinteresse",
    interestPlaceholder: "Z. B. Automatisierung von Verfahren, Konzessionsverwaltung, Bürgersupport...",
    privacyRequiredTitle: "Datenschutz-Zustimmung erforderlich",
    privacyRequiredDescription: "Sie müssen die Datenschutzerklärung akzeptieren, um fortzufahren.",
    privacyAccept: "Ich akzeptiere die Datenschutzerklärung",
    privacyText: "Ich stimme der Verarbeitung meiner personenbezogenen Daten zu, um kommerzielle Informationen und die Caelo-Demo gemäß DSGVO zu erhalten.",
    demoSubject: "CAELO Demo-Anfrage",
    demoEmailTitle: "CAELO Demo-Anfrage",
    demoOpening: "Ihr E-Mail-Programm wird geöffnet, um die Anfrage zu senden.",
    freeDemo: "Kostenlose Demo anfordern",
  },
  es: {
    contactTitle: "Contáctanos",
    contactDescription: "Completa el formulario para recibir más información sobre Caelo",
    organization: "Entidad",
    phone: "Teléfono",
    messagePlaceholder: "Describe tus necesidades y cómo Caelo puede ayudar a tu entidad...",
    contactSubject: "Contacto desde el sitio CAELO",
    contactEmailTitle: "Mensaje desde el sitio CAELO",
    emailPreparing: "Preparando email",
    emailOpening: "Se abrirá tu cliente de correo para enviar el mensaje.",
    demoTitle: "Solicitar demo",
    demoDescription: "Descubre cómo Caelo puede transformar los procedimientos administrativos de tu entidad",
    businessEmail: "Email profesional",
    role: "Cargo",
    organizationType: "Tipo de entidad",
    selectType: "Seleccionar tipo",
    municipality: "Municipio",
    province: "Provincia",
    region: "Región",
    ministry: "Ministerio",
    agency: "Agencia gubernamental",
    otherPublic: "Otra entidad pública",
    employees: "Número de empleados",
    selectRange: "Seleccionar rango",
    over1000: "Más de 1000",
    interest: "Principal área de interés",
    interestPlaceholder: "Ej.: automatización de trámites, gestión de concesiones, soporte ciudadano...",
    privacyRequiredTitle: "Consentimiento de privacidad requerido",
    privacyRequiredDescription: "Debes aceptar la política de privacidad para continuar.",
    privacyAccept: "Acepto la política de privacidad",
    privacyText: "Consiento el tratamiento de mis datos personales para recibir información comercial y la demo de Caelo, conforme al RGPD.",
    demoSubject: "Solicitud de demo CAELO",
    demoEmailTitle: "Solicitud de demo CAELO",
    demoOpening: "Se abrirá tu cliente de correo para enviar la solicitud.",
    freeDemo: "Solicitar demo gratuita",
  },
};

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const { t, lang } = useLanguage();
  const text = formTexts[lang];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    ente: "",
    telefono: "",
    messaggio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
${text.contactEmailTitle}

${t.forms.name}: ${formData.nome} ${formData.cognome}
${t.forms.email}: ${formData.email}
${text.organization}: ${formData.ente}
${text.phone}: ${formData.telefono}

${t.forms.message}:
${formData.messaggio}
`;

    const mailtoLink = `mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=${encodeURIComponent(
      text.contactSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    toast({
      title: text.emailPreparing,
      description: text.emailOpening,
    });

    setFormData({
      nome: "",
      cognome: "",
      email: "",
      ente: "",
      telefono: "",
      messaggio: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground">{text.contactTitle}</CardTitle>
          <CardDescription className="text-muted-foreground">{text.contactDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">{t.forms.name} *</Label>
                <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Mario" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cognome">{t.forms.surname} *</Label>
                <Input id="cognome" name="cognome" value={formData.cognome} onChange={handleChange} required placeholder="Rossi" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t.forms.email} *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="mario.rossi@comune.it" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ente">{text.organization} *</Label>
              <Input id="ente" name="ente" value={formData.ente} onChange={handleChange} required placeholder="Comune di Roma" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">{text.phone}</Label>
              <Input id="telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} placeholder="+39 06 1234567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="messaggio">{t.forms.message} *</Label>
              <Textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                placeholder={text.messagePlaceholder}
                rows={variant === "compact" ? 4 : 6}
                className="resize-none"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? t.forms.sending : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.forms.submit}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface DemoRequestFormProps {
  onSuccess?: () => void;
}

export function DemoRequestForm({ onSuccess }: DemoRequestFormProps) {
  const { t, lang } = useLanguage();
  const text = formTexts[lang];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    ente: "",
    ruolo: "",
    telefono: "",
    tipologiaEnte: "none",
    numeroDipendenti: "none",
    interessePrincipale: "",
    privacy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacy) {
      toast({
        title: text.privacyRequiredTitle,
        description: text.privacyRequiredDescription,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const emailBody = `
${text.demoEmailTitle}

${t.forms.name}: ${formData.nome} ${formData.cognome}
${t.forms.email}: ${formData.email}
${text.phone}: ${formData.telefono}

${text.organization}: ${formData.ente}
${text.role}: ${formData.ruolo}
${text.organizationType}: ${formData.tipologiaEnte}
${text.employees}: ${formData.numeroDipendenti}

${text.interest}:
${formData.interessePrincipale}
`;

    const mailtoLink = `mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=${encodeURIComponent(
      text.demoSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    toast({
      title: text.emailPreparing,
      description: text.demoOpening,
    });

    setFormData({
      nome: "",
      cognome: "",
      email: "",
      ente: "",
      ruolo: "",
      telefono: "",
      tipologiaEnte: "none",
      numeroDipendenti: "none",
      interessePrincipale: "",
      privacy: false,
    });
    setIsSubmitting(false);
    onSuccess?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground">{text.demoTitle}</CardTitle>
          <CardDescription className="text-muted-foreground">{text.demoDescription}</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-nome">{t.forms.name} *</Label>
                <Input id="demo-nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Mario" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-cognome">{t.forms.surname} *</Label>
                <Input id="demo-cognome" name="cognome" value={formData.cognome} onChange={handleChange} required placeholder="Rossi" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-email">{text.businessEmail} *</Label>
                <Input id="demo-email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="mario.rossi@comune.it" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-telefono">{text.phone} *</Label>
                <Input id="demo-telefono" name="telefono" type="tel" value={formData.telefono} onChange={handleChange} required placeholder="+39 06 1234567" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-ente">{text.organization} *</Label>
              <Input id="demo-ente" name="ente" value={formData.ente} onChange={handleChange} required placeholder="Comune di Roma" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-ruolo">{text.role} *</Label>
                <Input id="demo-ruolo" name="ruolo" value={formData.ruolo} onChange={handleChange} required placeholder="Responsabile Servizi Digitali" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="demo-tipologia">{text.organizationType}</Label>
                <Select value={formData.tipologiaEnte} onValueChange={(value) => handleSelectChange("tipologiaEnte", value)}>
                  <SelectTrigger id="demo-tipologia">
                    <SelectValue placeholder={text.selectType} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">{text.selectType}</SelectItem>
                    <SelectItem value="comune">{text.municipality}</SelectItem>
                    <SelectItem value="provincia">{text.province}</SelectItem>
                    <SelectItem value="regione">{text.region}</SelectItem>
                    <SelectItem value="ministero">{text.ministry}</SelectItem>
                    <SelectItem value="agenzia">{text.agency}</SelectItem>
                    <SelectItem value="altro">{text.otherPublic}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-dipendenti">{text.employees}</Label>
              <Select value={formData.numeroDipendenti} onValueChange={(value) => handleSelectChange("numeroDipendenti", value)}>
                <SelectTrigger id="demo-dipendenti">
                  <SelectValue placeholder={text.selectRange} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">{text.selectRange}</SelectItem>
                  <SelectItem value="1-50">1-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="501-1000">501-1000</SelectItem>
                  <SelectItem value="1000+">{text.over1000}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-interesse">{text.interest} *</Label>
              <Textarea
                id="demo-interesse"
                name="interessePrincipale"
                value={formData.interessePrincipale}
                onChange={handleChange}
                required
                placeholder={text.interestPlaceholder}
                rows={4}
                className="resize-none"
              />
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 border border-border/50">
              <Checkbox
                id="demo-privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => setFormData({ ...formData, privacy: checked as boolean })}
                className="mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="demo-privacy" className="text-sm font-medium cursor-pointer">
                  {text.privacyAccept} *
                </Label>
                <p className="text-xs text-muted-foreground">{text.privacyText}</p>
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? t.forms.sending : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  {text.freeDemo}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
