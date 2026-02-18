import heroImage from "@/assets/hero-cfpm.jpg";
import { GraduationCap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="CFPM Madagascar - Centre de formation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-2 mb-6">
          <GraduationCap className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Centre de Formation Professionnelle</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
          CFPM de Madagascar
        </h1>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 font-body" style={{ animationDelay: "0.2s" }}>
          Formez-vous aux métiers d'avenir dans nos centres répartis à travers tout Madagascar. Excellence, professionnalisme et insertion professionnelle garantie.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
          <a
            href="#formations"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-elevated"
          >
            Nos Formations
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-3 rounded-lg transition-all"
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
