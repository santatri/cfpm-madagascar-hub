import { Clock, Facebook, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/hero-cfpm.jpg";

const Footer = () => (
  <footer className="bg-white border-t border-border/60">
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
            <img src={logo} alt="" className="h-10 w-10 rounded-lg object-cover ring-1 ring-border/50" />
            <span className="font-display text-sm font-bold text-secondary">
              CFPM <span className="text-primary">Madagascar</span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-muted-foreground max-w-xs">
            Centre de Formation Professionnelle Moderne de Madagascar. Former pour l'avenir et construire l'excellence.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="https://www.facebook.com/CFPMFORMATION/?locale=fr_FR"
              target="_blank"
              rel="noreferrer"
              aria-label="Page Facebook officielle du CFPM"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition hover:border-primary/30 hover:text-primary"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://wa.me/261346304930"
              target="_blank"
              rel="noreferrer"
              aria-label="Contacter le CFPM sur WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition hover:border-primary/30 hover:text-primary"
            >
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-secondary/60">Navigation</h2>
          <nav className="flex flex-col items-start gap-2 text-xs text-muted-foreground" aria-label="Navigation de pied de page">
            <Link to="/" className="transition hover:text-primary">Accueil</Link>
            <Link to="/a-propos" className="transition hover:text-primary">À propos</Link>
            <Link to="/centres" className="transition hover:text-primary">Centres</Link>
            <Link to="/formations" className="transition hover:text-primary">Formations</Link>
            <Link to="/contact" className="transition hover:text-primary">Contact</Link>
          </nav>
        </div>

        {/* Horaires */}
        <div>
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-secondary/60">Horaires</h2>
          <div className="space-y-2.5 text-xs text-muted-foreground">
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>Lun – Ven : 7h30 – 16h30</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>Sam : 7h30 – 12h00</span>
            </div>
            <p className="text-muted-foreground/60 pl-5.5">Dimanche : fermé</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-secondary/60">Contact</h2>
          <div className="space-y-2.5 text-xs text-muted-foreground">
            <a href="tel:+261371777703" className="flex items-start gap-2 transition hover:text-primary">
              <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>+261 37 17 777 03</span>
            </a>
            <a href="tel:+261387777703" className="flex items-start gap-2 transition hover:text-primary">
              <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>+261 38 77 777 03</span>
            </a>
            <a href="mailto:cfpmdemadagascar7@gmail.com" className="flex items-start gap-2 transition hover:text-primary">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span className="break-all">cfpmdemadagascar7@gmail.com</span>
            </a>
            <a href="https://wa.me/261346304930" target="_blank" rel="noreferrer" className="flex items-start gap-2 transition hover:text-primary">
              <MessageCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>WhatsApp : +261 34 63 049 30</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
              <span>Imerinafovoany, Antananarivo (Siège)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} CFPM de Madagascar. Tous droits réservés.
        </p>
        <a
          href="#accueil"
          className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/70 transition hover:text-primary"
        >
          Retour en haut
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;