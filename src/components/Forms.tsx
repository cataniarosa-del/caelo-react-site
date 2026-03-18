import { useState } from "react";
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

interface ContactFormProps {
  variant?: "default" | "compact";
}

export function ContactForm({ variant = "default" }: ContactFormProps) {
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
Messaggio dal sito CAELO

Nome: ${formData.nome} ${formData.cognome}
Email: ${formData.email}
Ente: ${formData.ente}
Telefono: ${formData.telefono}

Messaggio:
${formData.messaggio}
`;

    const mailtoLink = `mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=${encodeURIComponent(
      "Contatto dal sito CAELO"
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Preparazione email",
      description: "Si aprirà il tuo client di posta per inviare il messaggio.",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground">
            Contattaci
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Compila il form per ricevere maggiori informazioni su Caelo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-medium">
                  Nome *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Mario"
                  className="border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cognome" className="text-foreground font-medium">
                  Cognome *
                </Label>
                <Input
                  id="cognome"
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleChange}
                  required
                  placeholder="Rossi"
                  className="border-border bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="mario.rossi@comune.it"
                className="border-border bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ente" className="text-foreground font-medium">
                Ente di appartenenza *
              </Label>
              <Input
                id="ente"
                name="ente"
                value={formData.ente}
                onChange={handleChange}
                required
                placeholder="Comune di Roma"
                className="border-border bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono" className="text-foreground font-medium">
                Telefono
              </Label>
              <Input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+39 06 1234567"
                className="border-border bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="messaggio" className="text-foreground font-medium">
                Messaggio *
              </Label>
              <Textarea
                id="messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
                required
                placeholder="Descrivi le tue esigenze e come Caelo può aiutare il tuo ente..."
                rows={variant === "compact" ? 4 : 6}
                className="border-border bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                  Invio in corso...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Invia richiesta
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
        title: "Consenso privacy richiesto",
        description: "Devi accettare l'informativa sulla privacy per procedere.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const emailBody = `
Richiesta Demo CAELO

Nome: ${formData.nome} ${formData.cognome}
Email: ${formData.email}
Telefono: ${formData.telefono}

Ente: ${formData.ente}
Ruolo: ${formData.ruolo}
Tipologia Ente: ${formData.tipologiaEnte}
Numero Dipendenti: ${formData.numeroDipendenti}

Area di interesse:
${formData.interessePrincipale}
`;

    const mailtoLink = `mailto:info@caelo.it,ccatania.cpi@gmail.com?subject=${encodeURIComponent(
      "Richiesta Demo CAELO"
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Preparazione email",
      description: "Si aprirà il tuo client di posta per inviare la richiesta.",
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground">
            Richiedi una Demo
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Scopri come Caelo può trasformare i procedimenti amministrativi del tuo ente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-nome" className="text-foreground font-medium">
                  Nome *
                </Label>
                <Input
                  id="demo-nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Mario"
                  className="border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-cognome" className="text-foreground font-medium">
                  Cognome *
                </Label>
                <Input
                  id="demo-cognome"
                  name="cognome"
                  value={formData.cognome}
                  onChange={handleChange}
                  required
                  placeholder="Rossi"
                  className="border-border bg-background"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-email" className="text-foreground font-medium">
                  Email aziendale *
                </Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="mario.rossi@comune.it"
                  className="border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-telefono" className="text-foreground font-medium">
                  Telefono *
                </Label>
                <Input
                  id="demo-telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="+39 06 1234567"
                  className="border-border bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-ente" className="text-foreground font-medium">
                Ente di appartenenza *
              </Label>
              <Input
                id="demo-ente"
                name="ente"
                value={formData.ente}
                onChange={handleChange}
                required
                placeholder="Comune di Roma"
                className="border-border bg-background"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demo-ruolo" className="text-foreground font-medium">
                  Ruolo *
                </Label>
                <Input
                  id="demo-ruolo"
                  name="ruolo"
                  value={formData.ruolo}
                  onChange={handleChange}
                  required
                  placeholder="Responsabile Servizi Digitali"
                  className="border-border bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-tipologia" className="text-foreground font-medium">
                  Tipologia ente
                </Label>
                <Select
                  value={formData.tipologiaEnte}
                  onValueChange={(value) => handleSelectChange("tipologiaEnte", value)}
                >
                  <SelectTrigger id="demo-tipologia" className="border-border bg-background">
                    <SelectValue placeholder="Seleziona tipologia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Seleziona tipologia</SelectItem>
                    <SelectItem value="comune">Comune</SelectItem>
                    <SelectItem value="provincia">Provincia</SelectItem>
                    <SelectItem value="regione">Regione</SelectItem>
                    <SelectItem value="ministero">Ministero</SelectItem>
                    <SelectItem value="agenzia">Agenzia governativa</SelectItem>
                    <SelectItem value="altro">Altro ente pubblico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-dipendenti" className="text-foreground font-medium">
                Numero dipendenti
              </Label>
              <Select
                value={formData.numeroDipendenti}
                onValueChange={(value) => handleSelectChange("numeroDipendenti", value)}
              >
                <SelectTrigger id="demo-dipendenti" className="border-border bg-background">
                  <SelectValue placeholder="Seleziona range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Seleziona range</SelectItem>
                  <SelectItem value="1-50">1-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="501-1000">501-1000</SelectItem>
                  <SelectItem value="1000+">Oltre 1000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo-interesse" className="text-foreground font-medium">
                Principale area di interesse *
              </Label>
              <Textarea
                id="demo-interesse"
                name="interessePrincipale"
                value={formData.interessePrincipale}
                onChange={handleChange}
                required
                placeholder="Es: Automazione pratiche edilizie, gestione concessioni, supporto cittadini..."
                rows={4}
                className="border-border bg-background resize-none"
              />
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 border border-border/50">
              <Checkbox
                id="demo-privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, privacy: checked as boolean })
                }
                className="mt-1"
              />
              <div className="space-y-1">
                <Label
                  htmlFor="demo-privacy"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Accetto l'informativa sulla privacy *
                </Label>
                <p className="text-xs text-muted-foreground">
                  Acconsento al trattamento dei miei dati personali per ricevere informazioni
                  commerciali e la demo di Caelo, in conformità al GDPR e alla normativa italiana
                  sulla privacy.
                </p>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                  />
                  Invio in corso...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Richiedi demo gratuita
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}