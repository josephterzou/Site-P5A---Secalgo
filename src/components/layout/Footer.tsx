import { Link } from "react-router-dom";
import { Shield, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Secalgo</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Votre partenaire de confiance en cybersécurité. Nous accompagnons les PME et ETI françaises dans la protection de leurs systèmes d'information.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:secalgo.contact@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  secalgo.contact@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Linkedin className="w-4 h-4 text-accent" />
                <a href="https://linkedin.com/company/secalgo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Secalgo. Tous droits réservés.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Hébergement 100% français — OVHcloud
          </p>
        </div>
      </div>
    </footer>
  );
}
