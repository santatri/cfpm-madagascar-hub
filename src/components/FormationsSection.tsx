import { useState } from "react";
import { 
  Clock, BookOpen, GraduationCap, Search, Filter, ChevronDown, 
  Award, Users, Calendar, Laptop, Languages, Coffee, Music, 
  Headphones, Scissors, Calculator 
} from "lucide-react";

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
  icon: any;
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
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedCourses, setExpandedCourses] = useState<Record<string, boolean>>({});

  const categories = [...new Set(formations.map(f => f.category))];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleCourse = (courseName: string) => {
    setExpandedCourses(prev => ({
      ...prev,
      [courseName]: !prev[courseName]
    }));
  };

  const filteredFormations = formations.map(cat => ({
    ...cat,
    courses: cat.courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    })
  })).filter(cat =>
    selectedCategory === "all" || cat.category === selectedCategory
  );

  const totalCourses = formations.reduce((acc, cat) => acc + cat.courses.length, 0);

  const hasFormats = (course: Formation): course is Formation & { formats: NonNullable<Formation['formats']> } => {
    return !!course.formats;
  };

  return (
    <section id="formations" className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">
              Notre Catalogue
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Formations <span className="text-blue-600">Professionnelles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos <span className="font-semibold text-blue-600">7 domaines de formation</span> et plus de{" "}
            <span className="font-semibold text-blue-600">30 spécialités</span> adaptées aux besoins du marché du travail.
            Des programmes complets pour booster votre carrière.
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <BookOpen className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{totalCourses}</div>
            <div className="text-xs text-gray-500">Formations</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <Award className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">92%</div>
            <div className="text-xs text-gray-500">Réussite</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">7</div>
            <div className="text-xs text-gray-500">Domaines</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">3 500+</div>
            <div className="text-xs text-gray-500">Apprenants</div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-900"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700"
            >
              <option value="all">Tous les domaines</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille des formations */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {filteredFormations.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                {/* En-tête de catégorie */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6 text-white" />
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.category}
                    </h3>
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {category.courses.length}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${expandedCategories.includes(category.category) ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Liste des cours */}
                {(expandedCategories.includes(category.category) || searchTerm) && (
                  <div className="divide-y divide-gray-100 animate-in slide-in-from-top-2">
                    {category.courses.length > 0 ? (
                      category.courses.map((course) => (
                        <div key={course.name}>
                          <button
                            onClick={() => hasFormats(course) && toggleCourse(course.name)}
                            className={`w-full px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors text-left ${hasFormats(course) ? 'cursor-pointer' : ''}`}
                          >
                            <div className="flex items-start justify-between gap-2 sm:gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                                  {course.name}
                                  {hasFormats(course) && (
                                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedCourses[course.name] ? 'rotate-180' : ''}`} />
                                  )}
                                </div>

                                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                                  {course.duration && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {course.duration}
                                    </span>
                                  )}
                                  {/* Schedule masqué - ne s'affiche pas */}
                                  {course.note && (
                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px]">
                                      {course.note}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {course.fee && (
                                <div className="text-right shrink-0">
                                  <div className="font-display font-bold text-blue-600 text-sm sm:text-base">
                                    {course.fee}
                                  </div>
                                </div>
                              )}
                            </div>
                          </button>

                          {/* Formats multiples (pour les langues) */}
                          {hasFormats(course) && expandedCourses[course.name] && (
                            <div className="bg-gray-50 px-4 sm:px-8 py-3 space-y-2 border-t border-gray-100">
                              {course.formats.map((format, idx) => (
                                <div key={idx} className="flex items-center justify-between text-xs">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-700">{format.type}:</span>
                                    <span className="text-gray-500">{format.duration}</span>
                                    {/* Schedule des formats masqué */}
                                  </div>
                                  <span className="font-semibold text-blue-600">{format.fee}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="px-6 py-8 text-center text-gray-500">
                        Aucune formation ne correspond à votre recherche
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Message si aucun résultat */}
        {filteredFormations.every(cat => cat.courses.length === 0) && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucune formation trouvée</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <GraduationCap className="w-5 h-5" />
            S'inscrire à une formation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;