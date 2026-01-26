import { Layout } from "@/components/layout/Layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    ClipboardList,
    ShieldAlert,
    Award,
    Coins,
    Clock,
    ArrowRight,
    HelpCircle
} from "lucide-react";

const faqItems = [
    {
        icon: ClipboardList,
        question: "Un client me demande de remplir un questionnaire cyber, par où commencer ?",
        answer: "C'est l'urgence numéro 1 de nos clients. Avec notre Pack 1, nous ne nous contentons pas de cocher des cases : nous traduisons les exigences de votre donneur d'ordre en actions concrètes. L'objectif est de fournir des preuves de maturité crédibles pour lever les points bloquants et sécuriser la signature de votre contrat."
    },
    {
        icon: ShieldAlert,
        question: "En tant que PME, sommes-nous réellement impactés par la directive NIS2 ?",
        answer: "Oui, et souvent plus vite qu'on ne le pense. Si vous êtes prestataire d'un grand groupe ou d'une entité publique, ces derniers vont répercuter leurs propres obligations légales sur vous par effet de cascade. SECALGO vous aide à anticiper ces clauses contractuelles pour que vous restiez un partenaire de confiance éligible."
    },
    {
        icon: Award,
        question: "Pourquoi choisir un accompagnement plutôt qu'une certification ISO 27001 ?",
        answer: "Pour une PME, la certification complète est souvent une 'usine à gaz' coûteuse et disproportionnée. Notre approche privilégie l'alignement stratégique : nous mettons en place les mesures de sécurité essentielles demandées par le marché, sans la lourdeur administrative, afin de garantir votre continuité business sans paralyser votre activité."
    },
    {
        icon: Coins,
        question: "Quel budget une PME doit-elle investir pour vos services ?",
        answer: "Nous avons conçu nos tarifs pour qu'ils soient un investissement maîtrisé face au risque de perte de contrat. Un diagnostic d'éligibilité ciblé (Pack 1) se situe entre 1 200 € et 1 600 € HT. Pour une mise à niveau opérationnelle complète (Pack 2), prévoyez un budget entre 2 800 € et 3 500 € HT selon la complexité de votre infrastructure."
    },
    {
        icon: Clock,
        question: "Quels sont vos délais d'intervention en cas d'urgence contractuelle ?",
        answer: "Nous savons que les délais de réponse aux appels d'offres sont serrés. Un diagnostic standard est réalisé sous 7 à 10 jours, mais nous proposons un format 'Express' (48-72h) pour les situations critiques où votre référencement fournisseur est en jeu."
    }
];

export default function FaqPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative gradient-hero overflow-hidden py-20 md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                            <HelpCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Centre d'aide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                            Questions Fréquentes
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                            Nous aidons les PME à transformer la contrainte cyber en opportunité commerciale.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card px-6 rounded-xl border border-border/50 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-accent/50 transition-all duration-300"
                            >
                                <div className="py-2">
                                    <AccordionTrigger className="hover:no-underline hover:text-accent transition-colors">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <span className="text-lg font-semibold text-foreground pr-4">
                                                {item.question}
                                            </span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pl-[3.5rem] text-base pb-6">
                                        {item.answer}
                                    </AccordionContent>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Vous avez une autre question ?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Nos experts sont là pour vous répondre et vous accompagner dans votre démarche de sécurisation.
                    </p>
                    <Button variant="accent" size="lg" asChild>
                        <Link to="/contact">
                            Contactez nos experts
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
