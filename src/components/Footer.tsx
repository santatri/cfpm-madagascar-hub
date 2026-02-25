import logo  from "@/assets/hero-cfpm.jpg"; // Assurez-vous d'avoir un logo dans ce chemin ou ajustez-le en conséquence

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-3">
              {logo && (
                <img 
                  src={logo} 
                  alt="CFPM Madagascar Logo" 
                  className="h-12 w-auto object-contain"
                />
              )}
              <h3 className="font-display text-xl font-bold">
                CFPM <span className="text-secondary">de Madagascar</span>
              </h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Centre de Formation Professionnelle de Madagascar — Former pour l'avenir, 
              construire l'excellence.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.38 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.22 2.864h-.24c-2.4 0-2.683.01-3.622.052-.842.04-1.299.18-1.603.298-.336.13-.56.282-.8.522-.24.24-.392.464-.522.8-.118.304-.258.76-.298 1.604-.042.938-.052 1.22-.052 3.622v.24c0 2.4.01 2.683.052 3.622.04.842.18 1.299.298 1.603.13.336.282.56.522.8.24.24.464.392.8.522.304.118.76.258 1.604.298.938.042 1.22.052 3.622.052h.24c2.4 0 2.683-.01 3.622-.052.842-.04 1.299-.18 1.603-.298.336-.13.56-.282.8-.522.24-.24.392-.464.522-.8.118-.304.258-.76.298-1.604.042-.938.052-1.22.052-3.622v-.24c0-2.4-.01-2.683-.052-3.622-.04-.842-.18-1.299-.298-1.603-.13-.336-.282-.56-.522-.8-.24-.24-.464-.392-.8-.522-.304-.118-.76-.258-1.604-.298-.938-.042-1.22-.052-3.622-.052zm0 7.386a3.577 3.577 0 100-7.154 3.577 3.577 0 000 7.154zm0-2.313a2.441 2.441 0 110-4.882 2.441 2.441 0 010 4.882zm4.8-4.774a.845.845 0 100 1.69.845.845 0 000-1.69z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides avec icônes */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Liens rapides</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <a href="#accueil" className="flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span>Accueil</span>
              </a>
              <a href="#apropos" className="flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span>À propos</span>
              </a>
              <a href="#centres" className="flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span>Nos Centres</span>
              </a>
              <a href="#formations" className="flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span>Formations</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 hover:text-secondary transition-colors group">
                <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Horaires d'ouverture avec icônes */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Horaires d'ouverture</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lun - Ven: 8h00 - 17h00</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sam: 8h00 - 12h00</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>Dim: Fermé</span>
              </div>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Contact</h4>
            <div className="text-sm text-primary-foreground/70 space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+261 34 00 000 00</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@cfpm.mg</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright et mentions légales */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} CFPM de Madagascar. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-secondary transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-secondary transition-colors">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;