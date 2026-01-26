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
  FileText,
  Award,
  Network,
  ShieldCheck
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

const triggers = [
  {
    icon: FileText,
    title: "Questionnaires Fournisseurs",
    description: "Vous avez reçu un questionnaire cybersécurité complexe d'un grand donneur d'ordre (Airbus, Schneider, TotalEnergies) et devez y répondre pour maintenir votre référencement."
  },
  {
    icon: Award,
    title: "Appels d'Offres (Public/Privé)",
    description: "La cybersécurité est devenue un critère éliminatoire de votre futur contrat. Nous vous aidons à démontrer une maturité suffisante pour rester compétitif."
  },
  {
    icon: Network,
    title: "Conformité NIS2 Indirecte",
    description: "En tant que sous-traitant d'une Entité Essentielle ou Importante, vous devez vous aligner sur de nouvelles exigences réglementaires pour sécuriser la chaîne d'approvisionnement."
  },
  {
    icon: ShieldCheck,
    title: "Exigences d'Assurance",
    description: "Votre assureur exige des garanties formelles et un diagnostic d'éligibilité pour maintenir ou obtenir votre couverture contre les cyber-risques."
  }
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
              Sécurisez vos contrats, pas seulement vos{" "}
              <span className="text-accent">données</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Nous accompagnons les PME prestataires pour répondre aux exigences cyber de leurs grands donneurs d'ordre (Airbus, Schneider, TotalEnergies) et aux normes NIS2.
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



      {/* Triggers Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quand nous contacter ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons aux moments clés où la sécurité devient un levier de croissance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {triggers.map((trigger, index) => (
              <div
                key={trigger.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <trigger.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                  {trigger.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {trigger.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA with lighter button style */}
          <div className="text-center max-w-4xl mx-auto mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Ne laissez pas la cybersécurité devenir un frein à votre croissance
            </h3>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Parlez-nous de vos enjeux
              </Link>
            </Button>
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

      {/* CTA Section (Footer CTA) */}
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
