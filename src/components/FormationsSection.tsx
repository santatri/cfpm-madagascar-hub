import { Clock, BookOpen } from "lucide-react";

const formations = [
  {
    category: "Informatique & Numérique",
    courses: [
      { name: "Développement Web", duration: "12 mois", fee: "1 200 000 Ar" },
      { name: "Maintenance Informatique", duration: "9 mois", fee: "900 000 Ar" },
      { name: "Infographie & Design", duration: "6 mois", fee: "750 000 Ar" },
      { name: "Administration Réseau", duration: "12 mois", fee: "1 100 000 Ar" },
    ],
  },
  {
    category: "Gestion & Commerce",
    courses: [
      { name: "Comptabilité & Gestion", duration: "12 mois", fee: "1 000 000 Ar" },
      { name: "Marketing Digital", duration: "6 mois", fee: "650 000 Ar" },
      { name: "Gestion des Ressources Humaines", duration: "9 mois", fee: "850 000 Ar" },
      { name: "Commerce International", duration: "12 mois", fee: "1 150 000 Ar" },
    ],
  },
  {
    category: "Technique & Industrie",
    courses: [
      { name: "Électricité Industrielle", duration: "12 mois", fee: "1 100 000 Ar" },
      { name: "Mécanique Automobile", duration: "12 mois", fee: "1 300 000 Ar" },
      { name: "Soudure & Chaudronnerie", duration: "9 mois", fee: "950 000 Ar" },
      { name: "Froid & Climatisation", duration: "9 mois", fee: "1 000 000 Ar" },
    ],
  },
  {
    category: "Tourisme & Hôtellerie",
    courses: [
      { name: "Cuisine & Pâtisserie", duration: "9 mois", fee: "900 000 Ar" },
      { name: "Réception & Accueil", duration: "6 mois", fee: "600 000 Ar" },
      { name: "Guide Touristique", duration: "6 mois", fee: "550 000 Ar" },
    ],
  },
];

const FormationsSection = () => {
  return (
    <section id="formations" className="py-14 sm:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Nos Formations</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Formations & Frais
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Découvrez notre catalogue de formations professionnelles avec les frais de scolarité correspondants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {formations.map((category) => (
            <div
              key={category.category}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  {category.category}
                </h3>
              </div>
              <div className="divide-y divide-border">
                {category.courses.map((course) => (
                  <div
                    key={course.name}
                    className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-muted/50 transition-colors flex items-center justify-between gap-2 sm:gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-sm sm:text-base">{course.name}</div>
                      <div className="flex items-center gap-3 mt-1 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display font-bold text-secondary text-sm sm:text-lg">
                        {course.fee}
                      </div>
                      <div className="text-xs text-muted-foreground">par an</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
