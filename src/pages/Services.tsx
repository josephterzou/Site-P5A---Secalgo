import { Layout } from "@/components/layout/Layout";
import {
  Shield,
  FileCheck,
  Lock,
  Server,
  Clock,
  CheckCircle,
  Sparkles
} from "lucide-react";

const technicalPacks = [
  {
    icon: Shield,
    name: "Pack 1 : Hygiène Numérique & Réaction",

    tagline: "Sécurisé en 48h",

    description: "Le pack essentiel pour démarrer votre protection numérique rapidement.",
    features: [
      {
        title: "Audit Flash",
        details: "Diagnostic rapide et ciblé de l'exposition aux risques sur le périmètre sélectionné"
      },
      {
        title: "Rapport et Préconisation",
        details: "Synthèse opérationnelle des vulnérabilités identifiées et plan d'action priorisé"
      },
      {
        title: "Sensibilisation équipe",
        details: "Accompagnement pédagogique de vos collaborateurs aux réflexes de sécurité adaptés"
      }
    ]
  },
  {
    icon: FileCheck,
    name: "Pack 2 : Audit & Maîtrise",

    tagline: "Visibilité totale et Plan d'action",

    description: "Un audit complet conforme à la méthode EBIOS RM pour une vision exhaustive de votre sécurité.",
    features: [
      {
        title: "Cartographie du SI",
        details: "Inventaire complet de vos actifs et logiciels"
      },
      {
        title: "Analyse de Risques EBIOS RM",
        details: "Application de la méthode ANSSI avec scénarios stratégiques et opérationnels"
      },
      {
        title: "Scan de Vulnérabilité",
        details: "Détection automatisée des failles de sécurité (CVE)"
      },
      {
        title: "Livrables professionnels",
        details: "Rapport d'audit détaillé et feuille de route budgétée"
      }
    ]
  },
  {
    icon: Sparkles,
    name: "Pack 3 : Secalgo Futur",

    tagline: "Anticipez la menace quantique",

    description: "Protection post-quantique pour anticiper les menaces de demain (Harvest Now, Decrypt Later).",
    features: [
      {
        title: "Pack 2 complet inclus",
        details: "Tous les éléments de l'audit et maîtrise"
      },
      {
        title: "Inventaire Cryptographique",
        details: "Recensement des algorithmes (RSA, ECC) et longueurs de clés utilisés"
      },
      {
        title: "Diagnostic Quantique",
        details: "Estimation de votre dette technique cryptographique face à la menace quantique"
      },
      {
        title: "Plan de Migration PQC",
        details: "Recommandations basées sur les standards NIST/ANSSI pour la cryptographie post-quantique"
      }
    ]
  }
];

const complianceServices = [
  {
    icon: Lock,
    name: "Mise en Conformité RGPD",

    description: "Cartographie des données, registre de traitement, et mentions légales conformes.",
    features: [
      "Audit de conformité RGPD",
      "Registre des traitements",
      "Documentation complète",
      "Recommandations pratiques"
    ]
  },
  {
    icon: Server,
    name: "Préparation NIS2",

    description: "Gap Analysis pour entités Essentielles/Importantes et définition de votre PSSI.",
    features: [
      "Analyse d'écart NIS2",
      "Définition de la PSSI",
      "Plan de mise en conformité",
      "Accompagnement réglementaire"
    ]
  },
  {
    icon: FileCheck,
    name: "Accompagnement ISO 27001",

    description: "Préparation complète à la certification ISO 27001.",
    features: [
      "Analyse de l'existant",
      "Mise en place du SMSI",
      "Documentation ISO 27001",
      "Accompagnement à la certification"
    ]
  }
];

const subscriptions = [
  {
    icon: Clock,
    name: "Abonnement Sérénité",

    description: "Une surveillance continue pour votre tranquillité d'esprit.",
    features: [
      "Veille e-réputation automatisée",
      "Hotline urgence dédiée",
      "1 check-up annuel inclus",
      "Alertes en temps réel"
    ]
  },
  {
    icon: Shield,
    name: "DPO/RSSI Externalisé",

    description: "Un expert dédié pour maintenir votre conformité en permanence.",
    features: [
      "Maintien de la conformité",
      "Veille réglementaire continue",
      "1/2 journée de conseil mensuel",
      "Support prioritaire"
    ]
  }
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Nos Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Des solutions de cybersécurité adaptées à chaque étape de votre croissance, du premier diagnostic à l'expertise avancée.
            </p>
          </div>
        </div>
      </section>

      {/* Packs Techniques */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Packs de Sécurité Opérationnelle
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des prestations packagées et standardisées pour une protection immédiate et efficace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalPacks.map((pack, index) => (
              <div
                key={pack.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <pack.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2 min-h-[4rem]">
                  {pack.name}
                </h3>

                <p className="text-accent font-semibold mb-2 min-h-[3rem] flex items-center">
                  {pack.tagline}
                </p>





                <p className="text-muted-foreground mb-6 min-h-[5rem]">
                  {pack.description}
                </p>

                <div className="space-y-4">
                  {pack.features.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {feature.title}
                        </p>
                        {feature.details && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {feature.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services de Conformité */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gouvernance & Conformité
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respectez les réglementations en vigueur avec notre accompagnement expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {complianceServices.map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>



                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abonnements Récurrents */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Abonnements Récurrents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une protection continue pour garantir votre sérénité au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptions.map((subscription) => (
              <div
                key={subscription.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <subscription.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {subscription.name}
                </h3>



                <p className="text-muted-foreground mb-6">
                  {subscription.description}
                </p>

                <ul className="space-y-3">
                  {subscription.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
