import { Clock, Facebook, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/hero-cfpm.jpg";

const Footer = () => (
  <footer className="bg-secondary py-10 text-secondary-foreground sm:py-12">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-3">
            <img src={logo} alt="" className="h-11 w-11 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold">
              CFPM <span className="text-accent">Madagascar</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-6 text-white/70">
            Centre de Formation Professionnelle Moderne de Madagascar. Former pour l’avenir et construire l’excellence.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.facebook.com/CFPMFORMATION/?locale=fr_FR"
              target="_blank"
              rel="noreferrer"
              aria-label="Page Facebook officielle du CFPM"
              className="rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-accent"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/261346304930"
              target="_blank"
              rel="noreferrer"
              aria-label="Contacter le CFPM sur WhatsApp"
              className="rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-accent"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Navigation</h2>
          <nav className="flex flex-col items-start gap-2 text-sm text-white/70" aria-label="Navigation de pied de page">
            <Link to="/" className="transition hover:text-accent">Accueil</Link>
            <Link to="/a-propos" className="transition hover:text-accent">À propos</Link>
            <Link to="/centres" className="transition hover:text-accent">Centres</Link>
            <Link to="/formations" className="transition hover:text-accent">Formations</Link>
            <Link to="/contact" className="transition hover:text-accent">Contact</Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Horaires</h2>
          <div className="space-y-3 text-sm text-white/70">
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Lundi – vendredi : 7h30 – 16h30</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Samedi : 7h30 – 12h00</span>
            </div>
            <p>Dimanche : fermé</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact officiel</h2>
          <div className="space-y-3 text-sm text-white/70">
            <a href="tel:+261371777703" className="flex items-start gap-2 transition hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>+261 37 17 777 03</span>
            </a>
            <a href="tel:+261387777703" className="flex items-start gap-2 transition hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>+261 38 77 777 03</span>
            </a>
            <a href="mailto:cfpmdemadagascar7@gmail.com" className="flex items-start gap-2 transition hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="break-all">cfpmdemadagascar7@gmail.com</span>
            </a>
            <a href="https://wa.me/261346304930" target="_blank" rel="noreferrer" className="flex items-start gap-2 transition hover:text-white">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>WhatsApp : +261 34 63 049 30</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Imerinafovoany, Antananarivo (Siège)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CFPM de Madagascar. Tous droits réservés.</p>
        <p className="mt-2 sm:mt-0">Formation professionnelle à Madagascar</p>
      </div>
    </div>
  </footer>
);

export default Footer;
