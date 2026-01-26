import { Layout } from "@/components/layout/Layout";
import {
  Shield,
  FileCheck,
  Activity,
  Phone,
  CheckCircle,
  GraduationCap
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    name: "Pack 1 - Diagnostic d'éligibilité",
    price: "1 200€ - 1 600€ HT",
    description: "Analyser les questionnaires clients et identifier les points bloquants pour vos contrats.",
    features: [
      "Analyse des questionnaires",
      "Identification des blocages",
      "Rapport d'éligibilité"
    ]
  },
  {
    icon: Shield,
    name: "Pack 2 - Mise à niveau opérationnelle",
    price: "2 800€ - 3 500€ HT",
    description: "Corriger les écarts et produire les preuves de sécurité pour vos partenaires.",
    features: [
      "Correction des écarts",
      "Sécurisation contractuelle",
      "Production de preuves"
    ]
  },
  {
    icon: Activity,
    name: "Pack 3 - Suivi & Maintien",
    price: "1 500€ - 3 000€ HT / an",
    description: "Pilotage régulier pour éviter les remises à niveau en urgence lors des renouvellements de contrats.",
    features: [
      "Pilotage régulier",
      "Anticipation des renouvellements",
      "Veille active"
    ]
  },
  {
    icon: Phone,
    name: "Pack 4 - Assistance Prioritaire",
    price: "2 000€ HT / an",
    description: "Réponse sous 24h en situation sensible (optionnel pour les abonnés Pack 3).",
    features: [
      "Réponse sous 24h",
      "Gestion de crise",
      "Support prioritaire"
    ]
  },
  {
    icon: GraduationCap,
    name: "Formation Opérationnelle",
    price: "1 600€ - 1 800€ HT / jour",
    description: "Sensibilisation métier et autonomisation des équipes SI pour une sécurité durable.",
    features: [
      "Sensibilisation métier",
      "Autonomisation équipes SI",
      "Ateliers pratiques"
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
              Des solutions packagées pour sécuriser vos contrats et pérenniser votre activité.
            </p>
          </div>
        </div>
      </section>

      {/* Packs Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Offre
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une approche progressive adaptée à vos enjeux business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {services.map((pack) => (
              <div
                key={pack.name}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col w-full max-w-sm"
              >
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-6">
                  <pack.icon className="w-6 h-6 text-accent-foreground" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 min-h-[3.5rem]">
                  {pack.name}
                </h3>

                <p className="text-accent font-bold text-xl mb-4">
                  {pack.price}
                </p>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {pack.description}
                </p>

                <div className="space-y-3 mt-auto">
                  {pack.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
