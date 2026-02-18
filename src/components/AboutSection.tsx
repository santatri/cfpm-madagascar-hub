import { Award, BookOpen, Target, TrendingUp } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "50+", label: "Formations" },
  { icon: Award, value: "10 000+", label: "Diplômés" },
  { icon: Target, value: "95%", label: "Taux d'insertion" },
  { icon: TrendingUp, value: "30+", label: "Années d'expérience" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-14 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">À propos</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Qui sommes-nous ?
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Le <strong className="text-foreground">Centre de Formation Professionnelle de Madagascar (CFPM)</strong> est un établissement de référence dédié à la formation professionnelle et technique. Depuis plus de 30 ans, nous accompagnons les jeunes et les adultes dans leur parcours de formation.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Notre mission est de fournir des formations de qualité adaptées aux besoins du marché du travail malgache et international. Nous disposons de plusieurs centres répartis à travers le pays pour être au plus près de nos apprenants.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Grâce à des formateurs qualifiés et des équipements modernes, le CFPM garantit une formation pratique et théorique de haut niveau, ouvrant les portes vers l'emploi et l'entrepreneuriat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-4 sm:p-6 shadow-card text-center border border-border hover:shadow-elevated transition-shadow"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-2 sm:mb-3" />
                <div className="font-display text-xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
