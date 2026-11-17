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
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5" aria-label="Navigation principale">
      <div
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/70 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "shadow-elevated" : "shadow-card"
        }`}
      >
        <div className="flex min-h-[72px] items-center justify-between gap-3 px-3 sm:px-5">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="CFPM Madagascar, accueil"
          >
            <img
              src={logo}
              alt=""
              className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-primary/10 transition-transform group-hover:scale-105 sm:h-12 sm:w-12"
            />
            <span className="min-w-0 leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-secondary sm:text-lg">CFPM</span>
              <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">Madagascar · Formation professionnelle</span>
              <span className="text-[11px] font-medium text-muted-foreground sm:hidden">Madagascar</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors xl:px-4 ${
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-secondary/75 hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:inline-flex"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-secondary transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div id="mobile-navigation" className="border-t border-border px-3 pb-3 pt-2 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-secondary/75 hover:bg-primary/5 hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-secondary"
              >
                Nous contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
