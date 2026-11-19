import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/hero-cfpm.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Centres", to: "/centres" },
  { label: "Formations", to: "/formations" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-4" aria-label="Navigation principale">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-border/60 bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="CFPM Madagascar, accueil"
          >
            <img
              src={logo}
              alt=""
              className="h-9 w-9 shrink-0 rounded-lg object-cover ring-1 ring-primary/10 transition-transform group-hover:scale-105"
            />
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-bold tracking-tight text-secondary">CFPM</span>
              <span className="hidden text-[10px] font-medium text-muted-foreground sm:block">
                Madagascar · Formation professionnelle
              </span>
              <span className="text-[10px] font-medium text-muted-foreground sm:hidden">Madagascar</span>
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-secondary/70 hover:bg-primary/5 hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA desktop */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:inline-flex"
          >
            Nous contacter
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-secondary transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div id="mobile-navigation" className="border-t border-border/60 px-3 pb-3 pt-2 lg:hidden">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-secondary/70 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-xs font-semibold text-primary-foreground transition hover:bg-secondary"
              >
                Nous contacter
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;