import { Layout } from "@/components/layout/Layout";
import { Shield, FileText } from "lucide-react";

export default function MentionsLegales() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative gradient-hero overflow-hidden py-20 md:py-28">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                            <FileText className="w-4 h-4" />
                            <span className="text-sm font-medium">Informations Légales</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                            Mentions Légales
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12 text-foreground">
                        {/* 1. Édition du site */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">
                                1. Édition du site
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Le présent site, accessible à l'URL www.secalgo.fr (le « Site »), est édité par :
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                                <li><strong className="text-foreground">Joseph Terzibachian</strong> (Concepteur-Développeur)</li>
                                <li><strong className="text-foreground">Nicolas Priscal</strong> (Co-fondateur)</li>
                                <li><strong className="text-foreground">Elliot Perrignon</strong> (Co-fondateur)</li>
                            </ul>
                        </div>

                        {/* 2. Statut Juridique */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">2. Statut Juridique</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                SECALGO est un projet entrepreneurial issu d'une formation d'ingénieur (P5A - Projet de Fin d'Études).
                                La structure juridique retenue pour l'exploitation commerciale est une <strong className="text-foreground">SAS (Société par Actions Simplifiée)</strong>, actuellement en cours de formation et d'immatriculation.
                            </p>
                        </div>

                        {/* 3. Activité */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">3. Activité</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                SECALGO propose des services d'accompagnement en cybersécurité pour les PME, incluant :
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                                <li>Diagnostic d'éligibilité contractuelle</li>
                                <li>Mise en conformité opérationnelle (NIS2, exigences clients)</li>
                                <li>Suivi et maintien des standards de sécurité</li>
                            </ul>
                        </div>

                        {/* 4. Hébergement */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">4. Hébergement</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                L'hébergement du site est actuellement assuré par les serveurs de l'EPF École d'ingénieurs (Campus de Montpellier) dans le cadre du projet académique.
                            </p>
                            <div className="mt-4 p-6 bg-accent/10 border border-accent/20 rounded-xl">
                                <h3 className="text-lg font-bold text-accent mb-2">Note</h3>
                                <p className="text-sm text-muted-foreground">
                                    Le transfert vers une infrastructure souveraine <strong>OVHcloud</strong> est programmé dès la finalisation de l'immatriculation de la société.
                                </p>
                            </div>
                        </div>

                        {/* 5. Données personnelles */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">5. Données Personnelles (RGPD)</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Les informations collectées via le formulaire de contact (Nom, Email, Entreprise) sont destinées à l'usage exclusif de SECALGO pour la gestion des demandes de prestations.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Ces données ne sont <strong>jamais transmises, cédées ou vendues à des tiers</strong>.
                                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à : <a href="mailto:secalgo.contact@gmail.com" className="text-accent hover:underline">secalgo.contact@gmail.com</a>.
                            </p>
                        </div>

                        {/* 6. Disclaimer Prototype */}
                        <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-xl">
                            <h3 className="text-lg font-bold text-accent mb-2">Note de Prototype</h3>
                            <p className="text-sm text-muted-foreground">
                                Ce site est un <strong>prototype fonctionnel</strong> réalisé dans le cadre du projet de fin d'études (P5A) de la promotion 2026. Les offres et services présentés reflètent la stratégie commerciale réelle de la future structure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
