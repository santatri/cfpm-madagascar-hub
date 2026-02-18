const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              CFPM <span className="text-secondary">Madagascar</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Centre de Formation Professionnelle de Madagascar — Former pour l'avenir.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Liens rapides</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="#accueil" className="block hover:text-secondary transition-colors">Accueil</a>
              <a href="#apropos" className="block hover:text-secondary transition-colors">À propos</a>
              <a href="#centres" className="block hover:text-secondary transition-colors">Nos Centres</a>
              <a href="#formations" className="block hover:text-secondary transition-colors">Formations</a>
              <a href="#contact" className="block hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Horaires d'ouverture</h4>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>Lundi - Vendredi: 8h00 - 17h00</p>
              <p>Samedi: 8h00 - 12h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} CFPM Madagascar. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
