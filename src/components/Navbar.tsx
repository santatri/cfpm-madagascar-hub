import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hero-cfpm.jpg"; // Assurez-vous d'avoir un logo dans ce chemin ou ajustez-le en conséquence

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Centres", href: "#centres" },
  { label: "Formations", href: "#formations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-card/80 backdrop-blur-sm py-4'
    } border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo et nom */}
          <a href="#accueil" className="flex items-center space-x-3 group">
            {logo && (
              <img 
                src={logo} 
                alt="CFPM Madagascar Logo" 
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            )}
            <span className="font-display text-xl font-bold text-primary">
              CFPM <span className="text-secondary">de Madagascar FFFFFF</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </a>
            ))}

            {/* Bouton CTA */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Inscription
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border mt-2 animate-in slide-in-from-top">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Bouton CTA mobile */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 mx-4 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors text-center"
              >
                Inscription
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;