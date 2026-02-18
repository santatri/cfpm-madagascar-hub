import heroImage from "@/assets/hero-cfpm.jpg";
import { GraduationCap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      <img
        src={heroImage}
        alt="CFPM Madagascar - Centre de formation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-12">
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          <span className="text-xs sm:text-sm font-medium text-secondary">Centre de Formation Professionnelle</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight">
          CFPM de Madagascar
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed">
          Formez-vous aux métiers d'avenir dans nos centres répartis à travers tout Madagascar. Excellence, professionnalisme et insertion professionnelle garantie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#formations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-elevated text-sm sm:text-base"
          >
            Nos Formations
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-3 rounded-lg transition-all text-sm sm:text-base"
          >
            <Users className="w-4 h-4" />
            Nous Contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
