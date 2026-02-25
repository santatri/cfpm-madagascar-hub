import { useState } from "react";
import { Clock, BookOpen, GraduationCap, Search, Filter, ChevronDown, Award, Users, Calendar } from "lucide-react";

const formations = [
  {
    category: "Informatiques",
    icon: "💻",
    courses: [
      { name: "Bureautique", duration: "3 mois", fee: "150 000 Ar", schedule: "Jour/Soir", students: 45, level: "Débutant" },
      { name: "Multimédia", duration: "3 mois", fee: "150 000 Ar", schedule: "Jour", students: 32, level: "Tous niveaux" },
      { name: "Création site web", duration: "3 mois", fee: "150 000 Ar", schedule: "Jour/Soir", students: 38, level: "Débutant" },
      { name: "Programmation", duration: "6 mois", fee: "150 000 Ar", schedule: "Soir", students: 28, level: "Intermédiaire" },
      { name: "Maintenance et Dépannage", duration: "9 mois", fee: "900 000 Ar", schedule: "Jour", students: 25, level: "Professionnel" },
    ],
  },
  {
    category: "Comptabilités",
    icon: "📊",
    courses: [
      { name: "Générale et Informatisée", duration: "12 mois", fee: "50 000 Ar", schedule: "Jour/Soir", students: 52, level: "Professionnel" },
    ],
  },
  {
    category: "Langues",
    icon: "🗣️",
    courses: [
      { name: "Français", duration: "6 mois", fee: "50 000 Ar", schedule: "Jour/Soir", students: 120, level: "Tous niveaux" },
      { name: "Anglais", duration: "6 mois", fee: "50 000 Ar", schedule: "Jour/Soir", students: 150, level: "Tous niveaux" },
      { name: "Allemand", duration: "6 mois", fee: "50 000 Ar", schedule: "Soir", students: 35, level: "Débutant" },
      { name: "Chinois", duration: "6 mois", fee: "50 000 Ar", schedule: "Soir", students: 28, level: "Débutant" },
      { name: "Espagnol", duration: "6 mois", fee: "50 000 Ar", schedule: "Soir", students: 42, level: "Débutant" },
    ],
  },
  {
    category: "Arts Culinaires",
    icon: "🍳",
    courses: [
      { name: "Cuisine", duration: "9 mois", fee: "900 000 Ar", schedule: "Jour", students: 24, level: "Professionnel" },
      { name: "Pâtisserie", duration: "6 mois", fee: "600 000 Ar", schedule: "Jour", students: 22, level: "Intermédiaire" },
      { name: "Charcuterie", duration: "6 mois", fee: "550 000 Ar", schedule: "Jour", students: 18, level: "Professionnel" },
      { name: "Glaces & Desserts", duration: "6 mois", fee: "550 000 Ar", schedule: "Jour", students: 20, level: "Intermédiaire" },
      { name: "Boulangerie", duration: "9 mois", fee: "850 000 Ar", schedule: "Jour", students: 25, level: "Professionnel" },
    ],
  },
  {
    category: "Musiques",
    icon: "🎵",
    courses: [
      { name: "Clavier", duration: "9 mois", fee: "900 000 Ar", schedule: "Soir/Week-end", students: 18, level: "Tous niveaux" },
      { name: "Guitare", duration: "6 mois", fee: "600 000 Ar", schedule: "Soir/Week-end", students: 35, level: "Tous niveaux" },
      { name: "Violon", duration: "6 mois", fee: "550 000 Ar", schedule: "Soir", students: 12, level: "Intermédiaire" },
      { name: "Batterie", duration: "6 mois", fee: "550 000 Ar", schedule: "Soir", students: 15, level: "Intermédiaire" },
      { name: "Chant", duration: "4 mois", fee: "400 000 Ar", schedule: "Soir", students: 25, level: "Débutant" },
    ],
  },
  {
    category: "Call Center",
    icon: "🎧",
    courses: [
      { name: "Téléopérateur", duration: "3 mois", fee: "200 000 Ar", schedule: "Jour/Soir", students: 40, level: "Tous niveaux" },
    ],
  },
  {
    category: "Coupe et Couture",
    icon: "✂️",
    courses: [
      { name: "Coupe et Couture", duration: "6 mois", fee: "350 000 Ar", schedule: "Jour", students: 30, level: "Débutant" },
      { name: "Stylisme", duration: "9 mois", fee: "500 000 Ar", schedule: "Jour", students: 20, level: "Intermédiaire" },
    ],
  },
];

const FormationsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [expandedCategories, setExpandedCategories] = useState([]);

  const categories = [...new Set(formations.map(f => f.category))];
  const levels = ["Débutant", "Intermédiaire", "Avancé", "Professionnel", "Tous niveaux"];

  const toggleCategory = (category) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredFormations = formations.map(cat => ({
    ...cat,
    courses: cat.courses.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      return matchesSearch && matchesLevel;
    })
  })).filter(cat =>
    selectedCategory === "all" || cat.category === selectedCategory
  );

  const totalCourses = formations.reduce((acc, cat) => acc + cat.courses.length, 0);
  const totalStudents = formations.reduce((acc, cat) =>
    acc + cat.courses.reduce((sum, course) => sum + (course.students || 0), 0), 0
  );

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
            Découvrez notre catalogue de formations professionnelles adaptées aux besoins du marché du travail.
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
            <Users className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">{totalStudents}+</div>
            <div className="text-xs text-gray-500">Apprenants</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <Award className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">95%</div>
            <div className="text-xs text-gray-500">Réussite</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm">
            <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold text-gray-900">6</div>
            <div className="text-xs text-gray-500">Domaines</div>
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

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700"
            >
              <option value="all">Tous les niveaux</option>
              {levels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille des formations */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {filteredFormations.map((category) => (
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
                  <span className="text-2xl">{category.icon}</span>
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
                      <div
                        key={course.name}
                        className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base">
                              {course.name}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {course.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {course.students} places
                              </span>
                              <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-[10px]">
                                {course.level}
                              </span>
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-[10px]">
                                {course.schedule}
                              </span>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="font-display font-bold text-blue-600 text-sm sm:text-lg">
                              {course.fee}
                            </div>
                            <div className="text-[10px] text-gray-400">par mois</div>
                          </div>
                        </div>
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
          ))}
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