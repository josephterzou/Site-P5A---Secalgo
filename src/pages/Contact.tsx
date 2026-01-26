import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  Mail,
  Linkedin,
  Phone,
  Building,
  Users,
  FileText,
  Briefcase,
  Zap,
  MessageSquare,
  Send,
  User,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "secalgo.contact@gmail.com",
    link: "mailto:secalgo.contact@gmail.com",
    description: "Réponse sous 24h ouvrées"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    detail: "Secalgo",
    link: "https://linkedin.com/company/secalgo",
    description: "Actualités et veille cybersécurité"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    company: "",
    size: "",
    requestType: "question",
    service: "",
    urgency: "Standard",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const [mailtoLink, setMailtoLink] = useState("mailto:contact@secalgo.com");

  useEffect(() => {
    const subject = `Demande SECALGO - ${formData.company || 'Nouvelle demande'}`;

    // Construct body content for the mailto (simulating form data)
    const body = `
Nom: ${formData.fullname}
Entreprise: ${formData.company}
Taille: ${formData.size}
Téléphone: ${formData.phone}
Nature: ${formData.requestType}
Service: ${formData.service || 'N/A'}
Urgence: ${formData.urgency}

Message:
${formData.message}
    `.trim();

    setMailtoLink(`mailto:contact@secalgo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }, [formData]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Le nom est requis.";
    if (!formData.phone.trim()) newErrors.phone = "Le numéro de téléphone est requis.";
    if (!formData.company.trim()) newErrors.company = "Le nom de l'entreprise est requis.";
    if (!formData.size) newErrors.size = "La taille de l'entreprise est requise.";
    if (!formData.message.trim()) newErrors.message = "Veuillez saisir votre message.";

    // Conditional validation
    if (formData.requestType === 'service' && !formData.service) {
      newErrors.service = "Veuillez sélectionner un service.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // If valid, open the mailto link
      window.location.href = mailtoLink;
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user modifies field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="relative gradient-hero py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Contactez nos experts
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Une question, un besoin d'audit ou de formation ?
              Remplissez le formulaire ci-dessous, nous vous recontacterons rapidement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: 2-Column Layout */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  Nos coordonnées
                </h2>
                <div className="grid gap-6">
                  {contactMethods.map((method) => (
                    <Card key={method.title} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden border-muted/60">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                          <method.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                          {method.link ? (
                            <a
                              href={method.link}
                              target={method.link.startsWith('http') ? '_blank' : undefined}
                              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-accent hover:underline font-medium block mb-1"
                            >
                              {method.detail}
                            </a>
                          ) : (
                            <p className="font-medium mb-1">{method.detail}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-muted/60">
                <h3 className="font-bold text-xl mb-4">Questions fréquentes</h3>
                <p className="text-muted-foreground mb-6">
                  Vous avez des interrogations sur nos méthodes ou nos tarifs ?
                  La réponse s'y trouve peut-être déjà.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="/faq">Consulter la FAQ</a>
                </Button>
              </div>
            </div>

            {/* Right Column: Custom Validated Form */}
            <div className="lg:col-span-7">
              <Card className="border-none shadow-2xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Formulaire de contact</h2>
                    <p className="text-muted-foreground">
                      Les champs marqués d'une astérisque (*) sont obligatoires.
                    </p>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Identity Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullname" className={`flex items-center gap-2 ${errors.fullname ? "text-destructive" : ""}`}>
                          <User className="w-4 h-4 text-accent" />
                          Nom complet *
                        </Label>
                        <Input
                          id="fullname"
                          value={formData.fullname}
                          onChange={(e) => handleChange("fullname", e.target.value)}
                          placeholder="Jean Dupont"
                          className={`${errors.fullname ? "border-destructive focus-visible:ring-destructive" : ""} bg-background/80`}
                        />
                        {errors.fullname && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullname}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className={`flex items-center gap-2 ${errors.phone ? "text-destructive" : ""}`}>
                          <Phone className="w-4 h-4 text-accent" />
                          Téléphone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="06 12 34 56 78"
                          className={`${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""} bg-background/80`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company Group */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className={`flex items-center gap-2 ${errors.company ? "text-destructive" : ""}`}>
                          <Building className="w-4 h-4 text-accent" />
                          Nom de l'entreprise *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Votre Société"
                          className={`${errors.company ? "border-destructive focus-visible:ring-destructive" : ""} bg-background/80`}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.company}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="size" className={`flex items-center gap-2 ${errors.size ? "text-destructive" : ""}`}>
                          <Users className="w-4 h-4 text-accent" />
                          Taille de l'entreprise *
                        </Label>
                        <Select
                          value={formData.size}
                          onValueChange={(val) => handleChange("size", val)}
                        >
                          <SelectTrigger className={`${errors.size ? "border-destructive ring-destructive" : ""} bg-background/80`}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Moins de 10">Moins de 10 salariés</SelectItem>
                            <SelectItem value="10-49">10-49 salariés</SelectItem>
                            <SelectItem value="50-249">50-249 salariés</SelectItem>
                            <SelectItem value="Plus de 250">Plus de 250 salariés</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.size && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.size}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Request Type */}
                    <div className="space-y-3">
                      <Label className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-accent" />
                        Nature de la demande *
                      </Label>
                      <RadioGroup
                        value={formData.requestType}
                        onValueChange={(val) => handleChange("requestType", val)}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-accent/5 transition-colors ${formData.requestType === 'question' ? 'border-accent bg-accent/5' : ''}`}>
                          <RadioGroupItem value="question" id="r-question" />
                          <Label htmlFor="r-question" className="cursor-pointer font-normal flex-1">
                            Simple question / Information
                          </Label>
                        </div>
                        <div className={`flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-accent/5 transition-colors ${formData.requestType === 'service' ? 'border-accent bg-accent/5' : ''}`}>
                          <RadioGroupItem value="service" id="r-service" />
                          <Label htmlFor="r-service" className="cursor-pointer font-normal flex-1">
                            Accès à un service SECALGO
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Dynamic Service Selection */}
                    {formData.requestType === "service" && (
                      <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <Label htmlFor="service" className={`flex items-center gap-2 ${errors.service ? "text-destructive" : ""}`}>
                          <Zap className="w-4 h-4 text-accent" />
                          Service souhaité *
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(val) => handleChange("service", val)}
                        >
                          <SelectTrigger className={`${errors.service ? "border-destructive ring-destructive" : ""} bg-background/80`}>
                            <SelectValue placeholder="Quel pack vous intéresse ?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pack 1">Pack 1 : Diagnostic d'éligibilité</SelectItem>
                            <SelectItem value="Pack 2">Pack 2 : Mise à niveau opérationnelle</SelectItem>
                            <SelectItem value="Pack 3">Pack 3 : Suivi et maintien d'éligibilité</SelectItem>
                            <SelectItem value="Pack 4">Pack 4 : Assistance cyber prioritaire</SelectItem>
                            <SelectItem value="Formation">Formation opérationnelle</SelectItem>
                            <SelectItem value="Autre">Autre / Ne sait pas encore</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.service && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.service}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Urgency */}
                    <div className="space-y-2">
                      <Label htmlFor="urgency" className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-accent" />
                        Urgence du besoin
                      </Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(val) => handleChange("urgency", val)}
                      >
                        <SelectTrigger className="bg-background/80">
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Standard">Standard (7-10 jours)</SelectItem>
                          <SelectItem value="Express">Express (48-72h)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className={`flex items-center gap-2 ${errors.message ? "text-destructive" : ""}`}>
                        <MessageSquare className="w-4 h-4 text-accent" />
                        Message / Commentaires *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Détaillez votre besoin ici..."
                        className={`${errors.message ? "border-destructive focus-visible:ring-destructive" : ""} min-h-[120px] bg-background/80`}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Action Button & Disclaimer */}
                    <div className="pt-4 space-y-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full text-lg font-bold group"
                      >
                        Envoyer ma demande
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      <p className="text-xs text-center text-muted-foreground px-4 bg-muted/30 py-2 rounded-md border border-muted/50">
                        ℹ️ En cliquant sur envoyer, votre application de messagerie s'ouvrira
                        pour valider l'envoi de vos informations en toute sécurité.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
