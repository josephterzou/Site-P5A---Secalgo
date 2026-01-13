import { Layout } from "@/components/layout/Layout";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "secalgo.contact@gmail.com",
    link: "mailto:secalgo.contact@gmail.com",
    description: "Écrivez-nous pour toute demande d'information ou devis"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    detail: "Secalgo",
    link: "https://linkedin.com/company/secalgo",
    description: "Suivez notre actualité et nos publications"
  },
  {
    icon: MapPin,
    title: "Localisation",
    detail: "France - Occitanie",
    link: null,
    description: "Interventions en région Occitanie et à distance"
  }
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Parlons de vos besoins en cybersécurité. Notre équipe est à votre écoute pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-accent hover:text-accent/80 font-semibold mb-3 inline-block transition-colors"
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-accent font-semibold mb-3">
                    {method.detail}
                  </p>
                )}
                
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              Prenons rendez-vous
            </h2>
            <p className="text-muted-foreground mb-8 text-center leading-relaxed">
              Discutons de vos enjeux de cybersécurité lors d'un premier échange sans engagement. 
              Nous analyserons ensemble vos besoins et vous proposerons les solutions les plus adaptées à votre situation.
            </p>
            
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  📧 Par email
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Décrivez-nous votre projet et vos besoins en quelques lignes
                </p>
                <a
                  href="mailto:secalgo.contact@gmail.com"
                  className="text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                >
                  secalgo.contact@gmail.com
                </a>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  💼 Sur LinkedIn
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connectons-nous pour échanger sur vos problématiques
                </p>
                <a
                  href="https://linkedin.com/company/secalgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                >
                  linkedin.com/company/secalgo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Questions fréquentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Quel est le délai d'intervention ?
                </h3>
                <p className="text-muted-foreground">
                  Nous nous engageons à vous répondre sous 48h. Pour les situations urgentes, 
                  contactez-nous directement par email avec la mention "URGENT" dans l'objet.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Intervenez-vous uniquement en Occitanie ?
                </h3>
                <p className="text-muted-foreground">
                  Nous sommes basés en Occitanie mais intervenons partout en France. 
                  Nos prestations peuvent être réalisées à distance ou sur site selon vos besoins.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Proposez-vous des devis gratuits ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, après un premier échange pour comprendre vos besoins, nous vous établissons 
                  un devis détaillé sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
