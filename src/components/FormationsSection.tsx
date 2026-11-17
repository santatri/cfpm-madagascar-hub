import { useState } from "react";
import {
  ArrowUpRight, BookOpen, ChevronDown, Clock, Coffee, GraduationCap,
  Headphones, Laptop, Languages, Music, Search, Scissors, Calculator, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface Formation {
  name: string;
  duration?: string;
  schedule?: string;
  fee?: string;
  note?: string;
  formats?: Array<{
    type: string;
    duration: string;
    schedule: string;
    fee: string;
  }>;
}

interface Category {
  category: string;
  icon: LucideIcon;
  courses: Formation[];
}

const formations: Category[] = [
  {
    category: "LANGUES",
    icon: Languages,
    courses: [
      { 
        name: "Français", 
        formats: [
          { type: "Cours normal", duration: "6 mois (2 mois par niveau)", schedule: "", fee: "50 000 Ar/mois" },
          { type: "Cours accéléré", duration: "2 mois", schedule: "", fee: "100 000 Ar/mois" },
          { type: "Cours particulier", duration: "Au choix", schedule: "", fee: "15 000 Ar/heure" }
        ]
      },
      { 
        name: "Anglais", 
        formats: [
          { type: "Cours normal", duration: "6 mois (2 mois par niveau)", schedule: "", fee: "50 000 Ar/mois" },
          { type: "Cours accéléré", duration: "2 mois", schedule: "", fee: "100 000 Ar/mois" },
          { type: "Cours particulier", duration: "Au choix", schedule: "", fee: "15 000 Ar/heure" }
        ]
      },
      { name: "Chinois Mandarin", duration: "6 mois", schedule: "", fee: "60 000 Ar/mois" },
      { name: "Allemand", duration: "6 mois", schedule: "", fee: "60 000 Ar/mois" },
    ],
  },
  {
    category: "INFORMATIQUE",
    icon: Laptop,
    courses: [
      { name: "Bureautique", duration: "2 mois", schedule: "", fee: "60 000 Ar/mois", note: "1 ordinateur par étudiant" },
      { name: "Bureautique Avancée", duration: "1 mois", schedule: "", fee: "60 000 Ar/mois", note: "Dactylographie, Word, Excel, PowerPoint, Publisher, Internet" },
      { name: "Bureautique Accélérée", duration: "1 mois ½", schedule: "", fee: "150 000 Ar" },
      { name: "Multimédia (PAO/Montage)", duration: "4 mois", schedule: "", fee: "120 000 Ar/mois" },
      { name: "Maintenance et Dépannage", duration: "1 mois ½", schedule: "", fee: "120 000 Ar/mois" },
      { name: "Programmation", duration: "3 mois", schedule: "", fee: "120 000 Ar/mois" },
      { name: "Réseaux Informatique", duration: "2 mois", schedule: "", fee: "120 000 Ar/mois" },
      { name: "Création Site Web", duration: "3 mois", schedule: "", fee: "120 000 Ar/mois" },
    ],
  },
  {
    category: "COMPTABILITÉ",
    icon: Calculator,
    courses: [
      { name: "Comptabilité Générale", duration: "2 mois", schedule: "", fee: "70 000 Ar/mois" },
      { name: "Comptabilité Informatisée", duration: "1 mois", schedule: "", fee: "70 000 Ar/mois" },
    ],
  },
  {
    category: "ART CULINAIRE",
    icon: Coffee,
    courses: [
      { name: "Cuisine", duration: "1 semaine", schedule: "", fee: "60 000 Ar" },
      { name: "Pâtisserie Complète", duration: "1 semaine", schedule: "", fee: "60 000 Ar" },
      { name: "Charcuterie", duration: "1 semaine", schedule: "", fee: "50 000 Ar" },
      { name: "Glace", duration: "1 semaine", schedule: "", fee: "50 000 Ar" },
    ],
  },
  {
    category: "MUSIQUE",
    icon: Music,
    courses: [
      { name: "Clavier", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Guitare", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Violon", duration: "7 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Batterie", duration: "7 mois", schedule: "", fee: "50 000 Ar/mois" },
    ],
  },
  {
    category: "CALL CENTER",
    icon: Headphones,
    courses: [
      { name: "Call Center", duration: "1 mois", schedule: "", fee: "50 000 Ar/mois" },
    ],
  },
  {
    category: "COUPE & COUTURE",
    icon: Scissors,
    courses: [
      { name: "Coupe", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Couture Main", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Couture Machine", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Modélisme", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
      { name: "Retouches", duration: "6 mois", schedule: "", fee: "50 000 Ar/mois" },
    ],
  },
];

const FormationsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

  const categories = [...new Set(formations.map(f => f.category))];

  const toggleCourse = (courseName: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseName]: !prev[courseName]
    }));
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredFormations = formations
    .map(cat => ({
      ...cat,
      courses: cat.courses.filter(course =>
        `${course.name} ${course.note ?? ""}`.toLowerCase().includes(normalizedSearch)
      ),
    }))
    .filter(cat =>
      (selectedCategory === "all" || cat.category === selectedCategory) &&
      cat.courses.length > 0
    );

  const totalCourses = formations.reduce((acc, cat) => acc + cat.courses.length, 0);
  const visibleCourses = filteredFormations.reduce((acc, cat) => acc + cat.courses.length, 0);

  const hasFormats = (course: Formation): course is Formation & { formats: NonNullable<Formation['formats']> } => {
    return !!course.formats;
  };

  return (
    <section id="formations" className="relative overflow-hidden bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-4 py-1.5 text-primary shadow-sm">
              <GraduationCap className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.16em]">Le catalogue CFPM</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
              Apprenez un métier.
              <span className="block text-primary">Construisez votre avenir.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Explorez nos domaines de formation, comparez les durées et les tarifs, puis choisissez le parcours qui vous correspond.
            </p>
          </div>
          <div className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-secondary to-primary p-5 text-white shadow-elevated sm:min-w-64">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">{categories.length} domaines</div>
              <div className="text-sm text-white/80">{totalCourses} formations à découvrir</div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-border bg-white p-4 shadow-card sm:p-5">
          <label htmlFor="formation-search" className="sr-only">Rechercher une formation</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
            <input
              id="formation-search"
              type="search"
              placeholder="Ex. anglais, bureautique, pâtisserie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted/50 py-3 pl-12 pr-12 text-sm text-secondary outline-none transition placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Effacer la recherche"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition hover:bg-primary/5 hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtrer par domaine">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              aria-pressed={selectedCategory === "all"}
              className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-secondary hover:bg-primary/10"
              }`}
            >
              Tous <span className="ml-1 opacity-75">{totalCourses}</span>
            </button>
            {formations.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.category;
              return (
                <button
                  key={category.category}
                  type="button"
                  onClick={() => setSelectedCategory(category.category)}
                  aria-pressed={isSelected}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-secondary hover:bg-primary/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-secondary">
            {visibleCourses} {visibleCourses === 1 ? "formation affichée" : "formations affichées"}
          </p>
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="text-sm font-semibold text-primary hover:text-secondary"
            >
              Voir tous les domaines
            </button>
          )}
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {filteredFormations.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.category}
                className="overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-secondary to-primary px-5 py-4 text-white sm:px-6">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold text-white sm:text-lg">{category.category}</h3>
                      <p className="text-xs text-white/75">Parcours professionnels</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
                      {category.courses.length}
                  </span>
                </div>

                <div className="grid gap-3 bg-muted/40 p-3 sm:grid-cols-2 sm:p-4">
                  {category.courses.map((course) => {
                    const hasMultipleFormats = hasFormats(course);
                    const isExpanded = Boolean(expandedCourses[course.name]);
                    return (
                      <article key={course.name} className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-primary/30">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-semibold leading-snug text-secondary">{course.name}</h4>
                          <span className="shrink-0 text-right text-xs font-bold leading-5 text-primary sm:text-sm">
                            {course.fee ?? (hasMultipleFormats ? `${course.formats.length} formules` : "")}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-sky" />
                          <span>{course.duration ?? "Durées au choix"}</span>
                        </div>

                        {course.note && (
                          <p className="mt-3 rounded-md bg-primary/5 px-2.5 py-2 text-xs leading-5 text-secondary/80">
                            {course.note}
                          </p>
                        )}

                        {hasMultipleFormats && (
                          <>
                            <button
                              type="button"
                              onClick={() => toggleCourse(course.name)}
                              aria-expanded={isExpanded}
                              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition hover:text-secondary"
                            >
                              {isExpanded ? "Masquer les formules" : "Voir les formules"}
                              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                            </button>
                            {isExpanded && (
                              <div className="mt-3 space-y-2 border-t border-border pt-3">
                                {course.formats.map((format) => (
                                  <div key={format.type} className="flex items-start justify-between gap-3 text-xs">
                                    <div>
                                      <p className="font-semibold text-secondary">{format.type}</p>
                                      <p className="mt-0.5 text-muted-foreground">{format.duration}</p>
                                    </div>
                                    <span className="shrink-0 font-bold text-primary">{format.fee}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </article>
                    );
                  })}
                </div>
                </article>
            );
          })}
        </div>

        {filteredFormations.length === 0 && (
          <div className="rounded-xl border border-border bg-white px-6 py-12 text-center shadow-sm">
            <Search className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
            <h3 className="font-semibold text-secondary">Aucune formation trouvée</h3>
            <p className="mt-1 text-sm text-muted-foreground">Essayez un autre mot-clé ou choisissez un autre domaine.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-sm font-semibold text-primary hover:text-secondary"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl bg-gradient-to-br from-secondary to-primary p-6 text-center text-white shadow-elevated sm:flex-row sm:px-8 sm:text-left">
          <div>
            <h3 className="font-display text-lg font-bold sm:text-xl">Besoin d’aide pour choisir ?</h3>
            <p className="mt-1 text-sm text-white/80">Notre équipe vous accompagne dans votre orientation.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-secondary transition hover:bg-accent"
          >
            Contacter le CFPM
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;