import { Layout } from "@/components/layout/Layout";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Eliott Perrignon",
    role: "Expert Architecture SI",
    bio: "Spécialiste en architecture des systèmes d'information, Eliott conçoit et optimise les infrastructures sécurisées pour garantir la résilience de vos systèmes face aux menaces.",
    linkedin: "https://www.linkedin.com/in/elliot-perrignon-95a24727b/",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQGXsgJoIS_szQ/profile-displayphoto-scale_200_200/B4EZl94Zg6GYAY-/0/1758753562086?e=1770854400&v=beta&t=zd4hO46OwfhKQlVXE-2HeeSflS_mTgcK3W1-bqzlxpM"
  },
  {
    name: "Nicolas Priscal",
    role: "Chef de Projet",
    bio: "Nicolas pilote l'ensemble de nos projets avec rigueur et méthode. Il assure la coordination entre les équipes et la satisfaction de nos clients tout au long de leur parcours de sécurisation.",
    linkedin: "https://www.linkedin.com/in/nprscl/",
    photo: "https://media.licdn.com/dms/image/v2/D4E03AQEkxf6A1L_1sA/profile-displayphoto-scale_200_200/B4EZoxxe1mKYAc-/0/1761771647234?e=1770854400&v=beta&t=rMN1k6T8UkzfulF7uZp-HG_M8btCy0PdJTTIk8ss_oA"
  }
];

export default function Equipe() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Notre Équipe
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Une équipe passionnée et complémentaire, engagée pour votre sécurité numérique.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 text-center w-full max-w-md"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>

                <p className="text-accent font-semibold mb-4">
                  {member.role}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
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

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos valeurs
            </h2>
            <div className="space-y-6 text-left">
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Accessibilité
                </h3>
                <p className="text-muted-foreground">
                  Nous rendons la cybersécurité compréhensible et accessible à toutes les entreprises, quelle que soit leur taille ou leur expertise technique.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Souveraineté
                </h3>
                <p className="text-muted-foreground">
                  Nous privilégions des solutions françaises et européennes pour garantir la maîtrise et la protection de vos données sensibles.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Expertise
                </h3>
                <p className="text-muted-foreground">
                  Notre équipe combine compétences techniques pointues et capacité à vulgariser pour vous accompagner efficacement dans votre sécurisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
