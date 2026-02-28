import { useState, useEffect } from "react";
import { GraduationCap, Users, MapPin, Award, ChevronDown } from "lucide-react";
import heroImage from "@/assets/h.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section id="accueil" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
      {/* Image de fond avec overlay amélioré */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="CFPM Madagascar - Centre de formation professionnelle"
          className="w-full h-full object-cover"
        />
        {/* Overlay dégradé plus sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Pattern de points pour texture (optionnel) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Contenu principal avec animation */}
      <div className={`relative z-20 max-w-5xl mx-auto px-5 sm:px-6 text-center py-12 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
        {/* Badge avec animation */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          <span className="text-xs sm:text-sm font-medium text-secondary">
            Centre de Formation Professionnelle Moderne
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight">
          CFPM <span className="text-secondary">de Madagascar</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 font-body leading-relaxed">
          Formez-vous aux métiers d'avenir dans nos centres répartis à travers tout Madagascar.
          Excellence, professionnalisme et insertion professionnelle garantie.
        </p>

        {/* Statistiques mises à jour */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-8 sm:mb-10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-secondary">3 500+</div>
            <div className="text-xs sm:text-sm text-white/60">Étudiants formés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-secondary">92%</div>
            <div className="text-xs sm:text-sm text-white/60">Taux d'insertion</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-secondary">22</div>
            <div className="text-xs sm:text-sm text-white/60">Centres à Madagascar</div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href="#formations"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base pointer-events-auto"
          >
            <GraduationCap className="w-4 h-4 transition-transform group-hover:rotate-12" />
            Nos Formations
          </a>
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base pointer-events-auto"
          >
            <Users className="w-4 h-4 transition-transform group-hover:scale-110" />
            Nous Contacter
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>22 centres à Madagascar</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Award className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Diplômes reconnus par l'État</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Users className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Formateurs expérimentés</span>
          </div>
        </div>
      </div>

      {/* Flèche de scroll vers le bas */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce pointer-events-auto"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </button>

      {/* Effet de vague en bas (optionnel) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-white/5">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;