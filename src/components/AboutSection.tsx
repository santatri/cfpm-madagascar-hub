import { Award, BookOpen, Target, TrendingUp, Users, MapPin, Clock, CheckCircle, Landmark } from "lucide-react";
import promo1 from "@/assets/1.jpg";
import promo2 from "@/assets/2.jpg";
import promo3 from "@/assets/4.jpg"; 

const stats = [
  { icon: BookOpen, value: "15+", label: "Spécialités professionnelles" },
  { icon: Award, value: "3 500+", label: "Diplômés formés" },
  { icon: Target, value: "92%", label: "Taux d'insertion" },
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
    title: "22 centres",
    description: "Présents dans toutes les régions de Madagascar"
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
            Qui <span className="text-secondary">sommes-nous</span> ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Grille d'images de promotion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img 
              src={promo1} 
              alt="Promotion CFPM - Groupe d'étudiants" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <p className="text-xs sm:text-sm font-medium bg-secondary/80 inline-block px-3 py-1 rounded-full mb-2">
                Promotion 2024
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold">Nos diplômés</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img 
              src={promo2} 
              alt="Promotion CFPM - Cérémonie de remise des diplômes" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <p className="text-xs sm:text-sm font-medium bg-secondary/80 inline-block px-3 py-1 rounded-full mb-2">
                Cérémonie
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold">Remise des diplômes</h3>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <img 
              src={promo3} 
              alt="Promotion CFPM - Étudiants en formation" 
              className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
              <p className="text-xs sm:text-sm font-medium bg-secondary/80 inline-block px-3 py-1 rounded-full mb-2">
                Formation
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold">En pleine session</h3>
            </div>
          </div>
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

          </div>
        </div>

        <div className="mt-12 rounded-xl border border-primary/15 bg-muted/60 p-5 sm:mt-16 sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Landmark className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Reconnaissance institutionnelle
              </p>
              <p className="mt-1 text-base font-semibold leading-relaxed text-secondary sm:text-lg">
                Le CFPM est reconnu par le Ministère de l’Enseignement Technique et de la Formation Professionnelle (METFP).
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <a
                  href="https://www.metfp.gov.mg/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Site officiel du METFP
                </a>
                <a
                  href="https://www.metfp.gov.mg/uploads/textes/arrete-n28232-2019-menetp-698b1e30431f6172295353.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Arrêté n° 28232/2019
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;