import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Lock,
  Server,
  GraduationCap,
  ArrowRight,
  Building2,
  Users,
  Award,
  Clock
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Formation sur mesure",
    description: "Sensibilisation et montée en compétences de vos équipes à la cybersécurité.",
  },
  {
    icon: Server,
    title: "Hébergement souverain",
    description: "Infrastructure 100% française avec OVHcloud pour une protection optimale.",
  },
  {
    icon: Lock,
    title: "Conformité réglementaire",
    description: "Mise en conformité NIS2, RGPD et ISO 27001 adaptée à votre structure.",
  },
];

const stats = [
  { value: "100%", label: "Hébergement français", icon: Building2 },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Cybersécurité française</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Protégez votre entreprise avec{" "}
              <span className="text-accent">confiance</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Secalgo accompagne les PME et ETI françaises dans la sécurisation de leurs systèmes d'information. Une approche humaine, accessible et 100% souveraine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Notre mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La cybersécurité ne devrait pas être réservée aux grandes entreprises.
              Chez Secalgo, nous rendons la protection numérique <strong className="text-foreground">accessible et compréhensible</strong> pour
              toutes les structures, quelle que soit leur taille ou leur expertise technique.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi choisir Secalgo ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une expertise complète pour sécuriser votre activité en toute sérénité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-2"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Prêt à sécuriser votre entreprise ?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contactez-nous pour un premier échange gratuit et sans engagement.
              Nous analyserons vos besoins et vous proposerons une solution adaptée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
