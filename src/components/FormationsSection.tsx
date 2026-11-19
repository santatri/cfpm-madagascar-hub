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
    <section id="formations" className="relative bg-muted/50 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête compact */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-3 py-1 text-primary mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Le catalogue CFPM</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary leading-tight">
            Apprenez un métier.{" "}
            <span className="text-primary">Construisez votre avenir.</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Explorez nos domaines de formation, comparez les durées et les tarifs.
          </p>
        </div>

        {/* Barre stats + recherche */}
        <div className="mb-6 rounded-xl border border-border bg-white p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-4 pb-4 border-b border-border/60">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <BookOpen className="h-4 w-4 text-primary" />
              <strong className="text-secondary">{categories.length}</strong> domaines
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-primary" />
              <strong className="text-secondary">{totalCourses}</strong> formations
            </span>
          </div>

          <label htmlFor="formation-search" className="sr-only">Rechercher une formation</label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <input
              id="formation-search"
              type="search"
              placeholder="Ex. anglais, bureautique, pâtisserie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted/30 py-2.5 pl-10 pr-10 text-sm text-secondary outline-none transition placeholder:text-muted-foreground focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Effacer la recherche"
                className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition hover:bg-primary/5 hover:text-primary"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1" role="group" aria-label="Filtrer par domaine">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              aria-pressed={selectedCategory === "all"}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-secondary hover:bg-primary/10"
              }`}
            >
              Tous <span className="ml-0.5 opacity-75">{totalCourses}</span>
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
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-secondary hover:bg-primary/10"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {category.category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold text-secondary">
            {visibleCourses} {visibleCourses === 1 ? "formation" : "formations"}
          </p>
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="text-xs font-semibold text-primary hover:text-secondary"
            >
              Voir tous les domaines
            </button>
          )}
        </div>

        {/* Grille des catégories */}
        <div className="grid gap-4 xl:grid-cols-2">
          {filteredFormations.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.category}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                {/* En-tête catégorie allégé */}
                <div className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-secondary">{category.category}</h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-bold text-primary">
                    {category.courses.length}
                  </span>
                </div>

                <div className="grid gap-2 bg-muted/20 p-2.5 sm:grid-cols-2 sm:p-3">
                  {category.courses.map((course) => {
                    const hasMultipleFormats = hasFormats(course);
                    const isExpanded = Boolean(expandedCourses[course.name]);
                    return (
                      <article key={course.name} className="rounded-lg border border-border/80 bg-white p-3 transition-colors hover:border-primary/30">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold leading-snug text-secondary">{course.name}</h4>
                          <span className="shrink-0 text-right text-[11px] font-bold leading-4 text-primary">
                            {course.fee ?? (hasMultipleFormats ? `${course.formats.length} formules` : "")}
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <Clock className="h-3 w-3 shrink-0 text-sky" />
                          <span>{course.duration ?? "Durées au choix"}</span>
                        </div>

                        {course.note && (
                          <p className="mt-2 rounded bg-primary/5 px-2 py-1.5 text-[10px] leading-4 text-secondary/80">
                            {course.note}
                          </p>
                        )}

                        {hasMultipleFormats && (
                          <>
                            <button
                              type="button"
                              onClick={() => toggleCourse(course.name)}
                              aria-expanded={isExpanded}
                              className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-primary transition hover:text-secondary"
                            >
                              {isExpanded ? "Masquer" : "Voir les formules"}
                              <ChevronDown className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                            </button>
                            {isExpanded && (
                              <div className="mt-2 space-y-1.5 border-t border-border/60 pt-2">
                                {course.formats.map((format) => (
                                  <div key={format.type} className="flex items-start justify-between gap-2 text-[10px]">
                                    <div>
                                      <p className="font-semibold text-secondary">{format.type}</p>
                                      <p className="text-muted-foreground">{format.duration}</p>
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
          <div className="rounded-xl border border-border bg-white px-6 py-10 text-center">
            <Search className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
            <h3 className="text-sm font-semibold text-secondary">Aucune formation trouvée</h3>
            <p className="mt-1 text-xs text-muted-foreground">Essayez un autre mot-clé ou domaine.</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}
              className="mt-3 text-xs font-semibold text-primary hover:text-secondary"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* CTA compact */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-xl bg-gradient-to-br from-secondary to-primary p-5 text-center text-white sm:flex-row sm:px-6 sm:text-left">
          <div>
            <h3 className="font-display text-base font-bold">Besoin d'aide pour choisir ?</h3>
            <p className="mt-0.5 text-xs text-white/80">Notre équipe vous accompagne dans votre orientation.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-secondary transition hover:bg-accent"
          >
            Contacter le CFPM
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;