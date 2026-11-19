import { useState, useEffect } from "react";
import {
  GraduationCap,
  Users,
  MapPin,
  Award,
  ArrowRight,
  Building2,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/h.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ students: 0, insertion: 0, centers: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targets = { students: 3500, insertion: 92, centers: 22 };
    const duration = 1800;
    const steps = 50;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounters({
        students: Math.floor(targets.students * easeOut),
        insertion: Math.floor(targets.insertion * easeOut),
        centers: Math.floor(targets.centers * easeOut),
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible]);

  const stats = [
    { value: `${counters.students.toLocaleString("fr-FR")}+`, label: "Étudiants", icon: Users },
    { value: `${counters.insertion}%`, label: "Insertion", icon: TrendingUp },
    { value: counters.centers, label: "Centres", icon: Building2 },
  ];

  const features = [
    { icon: MapPin, text: "22 centres à Madagascar" },
    { icon: Award, text: "Diplômes reconnus par l'État" },
    { icon: Users, text: "Formateurs expérimentés" },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-white pt-16"
    >
      {/* Pattern de points subtil */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #001A66 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Formes décoratives douces */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ===== COLONNE GAUCHE : Texte ===== */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/15 rounded-full px-3.5 py-1.5 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] sm:text-xs font-medium text-secondary tracking-wide">
                Centre de Formation Professionnelle Moderne
              </span>
            </div>

            {/* Titre */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-[1.1] tracking-tight mb-4">
              Formez-vous aux{" "}
              <span className="text-primary">métiers d'avenir</span>{" "}
              à Madagascar
            </h1>

            {/* Sous-titre */}
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mb-6 leading-relaxed">
              Le CFPM accompagne votre parcours professionnel avec des formations pratiques,
              des équipements modernes et un réseau de 22 centres dans tout le pays.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
              <Link
                to="/formations"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg text-sm"
              >
                <GraduationCap className="w-4 h-4" />
                Découvrir nos formations
                <ArrowRight className="w-4 h-4 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary/5 border border-border text-secondary hover:bg-secondary/10 font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              >
                <Users className="w-4 h-4" />
                Nous contacter
              </Link>
            </div>

            {/* Features inline */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <span key={feature.text} className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {feature.text}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ===== COLONNE DROITE : Visuel ===== */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Bordure décorative derrière */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-sm" />

              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-border/40">
                <img
                  src={heroImage}
                  alt="Étudiants en formation au CFPM Madagascar"
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
                />
                {/* Overlay très subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent" />
              </div>

              {/* Carte statistiques flottante */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-xl border border-border/40 p-3 sm:p-4 min-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    En chiffres
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-sm font-bold text-secondary leading-none">{stat.value}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge certification flottant */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-primary text-white rounded-lg px-3 py-1.5 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold">Reconnu par l'État</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;