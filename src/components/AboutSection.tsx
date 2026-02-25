import { Award, BookOpen, Target, TrendingUp, Users, MapPin, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: BookOpen, value: "15+", label: "Formations professionnelles" },
  { icon: Award, value: "10 000+", label: "Diplômés formés" },
  { icon: Target, value: "95%", label: "Taux d'insertion" },
  { icon: TrendingUp, value: "23+", label: "Années d'excellence" },
];

const features = [
  {
    icon: Users,
    title: "Formateurs experts",
    description: "Une équipe pédagogique qualifiée et expérimentée"
  },
  {
    icon: MapPin,
    title: "5 centres régionaux",
    description: "Présents dans les principales villes de Madagascar"
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Cours en journée, soirée et week-end disponibles"
  },
  {
    icon: CheckCircle,
    title: "Certification reconnue",
    description: "Diplômes agréés par l'État malgache"
  }
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-4">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary">
              Notre identité
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Qui sommes-nous ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Colonne de texte */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-secondary rounded-full" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pl-4">
                Le <strong className="text-foreground font-semibold">Centre de Formation Professionnelle Moderne de Madagascar (CFPM)</strong> est un établissement de référence dédié à la formation professionnelle et technique. 
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Depuis plus de <span className="text-secondary font-semibold">23 ans</span>, nous accompagnons les jeunes et les adultes dans leur parcours de formation, avec une approche pédagogique innovante et des équipements modernes.
            </p>

            {/* Mission et vision */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Notre mission
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Former des professionnels compétents et immédiatement opérationnels, capables de répondre aux besoins du marché du travail malgache et international, tout en contribuant au développement économique du pays.
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                Notre vision
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Devenir le leader de la formation professionnelle à Madagascar en offrant des parcours d'excellence accessibles à tous, et en forgeant les talents de demain.
              </p>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-6">
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group bg-card rounded-xl p-4 sm:p-6 shadow-card text-center border border-border hover:shadow-elevated transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-secondary mx-auto mb-2 sm:mb-3 transition-transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-display text-xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-lg p-3 sm:p-4 border border-border hover:bg-primary/5 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-secondary mb-2" />
                  <h4 className="font-semibold text-foreground text-xs sm:text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Témoignage rapide */}
            <div className="relative bg-secondary/5 rounded-xl p-6 border border-secondary/10">
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-6xl text-secondary/20">
                "
              </div>
              <p className="text-sm text-muted-foreground italic relative z-10">
                "Le CFPM m'a permis d'acquérir des compétences concrètes et de trouver un emploi stable en seulement 3 mois après ma formation."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary">R</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Rakotoarisoa Jean</p>
                  <p className="text-xs text-muted-foreground">Diplômé 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau de partenaires */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border">
          <p className="text-center text-xs sm:text-sm text-muted-foreground mb-6">
            Nos formations sont reconnues par
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-50">
            <span className="text-lg font-semibold text-muted-foreground">Ministère de l'Éducation</span>
            <span className="text-lg font-semibold text-muted-foreground">INFP</span>
            <span className="text-lg font-semibold text-muted-foreground">ONFP</span>
            <span className="text-lg font-semibold text-muted-foreground">FIF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;