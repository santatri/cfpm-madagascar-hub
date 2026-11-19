import { Award, BookOpen, Target, TrendingUp, Users, MapPin, Clock, CheckCircle, Landmark } from "lucide-react";
import promo1 from "@/assets/1.jpg";
import promo2 from "@/assets/2.jpg";
import promo3 from "@/assets/4.jpg";

const stats = [
  { icon: BookOpen, value: "15+", label: "Spécialités" },
  { icon: Award, value: "3 500+", label: "Diplômés" },
  { icon: Target, value: "92%", label: "Insertion" },
  { icon: TrendingUp, value: "23+", label: "Années" },
];

const features = [
  { icon: Users, title: "Formateurs experts", description: "Équipe pédagogique qualifiée" },
  { icon: MapPin, title: "22 centres", description: "Toutes les régions de Madagascar" },
  { icon: Clock, title: "Horaires flexibles", description: "Journée, soirée et week-end" },
  { icon: CheckCircle, title: "Certification reconnue", description: "Diplômes agréés par l'État" }
];

const AboutSection = () => {
  return (
    <section id="apropos" className="bg-background py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 mb-3">
            <Award className="h-3.5 w-3.5 text-secondary" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">Notre identité</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary leading-tight">
            Qui <span className="text-primary">sommes-nous</span> ?
          </h2>
        </div>

        {/* Grille principale : visuel + texte + stats */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          
          {/* Grand visuel - 3 colonnes */}
          <div className="lg:col-span-3 group relative overflow-hidden rounded-xl">
            <img 
              src={promo1} 
              alt="Promotion CFPM - Groupe d'étudiants diplômés" 
              className="w-full h-64 sm:h-80 lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
              <p className="text-[10px] font-medium bg-white/20 backdrop-blur-sm inline-block px-2.5 py-0.5 rounded-full mb-2">
                Promotion 2024
              </p>
              <h3 className="font-display text-lg sm:text-xl font-bold">Nos diplômés, notre fierté</h3>
              <p className="text-xs text-white/70 mt-1">3 500+ étudiants formés depuis 23 ans</p>
            </div>
          </div>

          {/* Texte + stats - 2 colonnes */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le <strong className="text-secondary font-semibold">CFPM de Madagascar</strong> est un établissement de référence dédié à la formation professionnelle et technique.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Depuis plus de <span className="text-primary font-semibold">23 ans</span>, nous accompagnons jeunes et adultes avec une approche pédagogique innovante et des équipements modernes.
            </p>

            {/* Statistiques en grille 2x2 compacte */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 p-3">
                  <stat.icon className="h-4 w-4 text-primary shrink-0" />
                  <div>
                    <div className="font-display text-base font-bold text-secondary leading-none">{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini features */}
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <feature.icon className="h-3 w-3 text-secondary shrink-0" />
                  <span className="truncate">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bandeau des 2 autres images */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6">
          <div className="group relative overflow-hidden rounded-xl">
            <img 
              src={promo2} 
              alt="Cérémonie de remise des diplômes CFPM" 
              className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
              <p className="text-[10px] font-medium bg-white/20 backdrop-blur-sm inline-block px-2 py-0.5 rounded-full mb-1">
                Cérémonie
              </p>
              <h4 className="font-display text-xs sm:text-sm font-bold">Remise des diplômes</h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl">
            <img 
              src={promo3} 
              alt="Étudiants en formation au CFPM" 
              className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
              <p className="text-[10px] font-medium bg-white/20 backdrop-blur-sm inline-block px-2 py-0.5 rounded-full mb-1">
                Formation
              </p>
              <h4 className="font-display text-xs sm:text-sm font-bold">En pleine session</h4>
            </div>
          </div>
        </div>

        {/* Mission & Vision côte à côte */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4 sm:p-5">
            <h3 className="font-display text-xs font-semibold text-secondary mb-2 flex items-center gap-2">
              <Target className="h-3.5 w-3.5 text-primary" />
              Notre mission
            </h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Former des professionnels compétents et immédiatement opérationnels, capables de répondre aux besoins du marché du travail malgache et international.
            </p>
          </div>
          <div className="rounded-xl border border-primary/10 bg-primary/[0.02] p-4 sm:p-5">
            <h3 className="font-display text-xs font-semibold text-secondary mb-2 flex items-center gap-2">
              <Award className="h-3.5 w-3.5 text-primary" />
              Notre vision
            </h3>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Devenir le leader de la formation professionnelle à Madagascar en offrant des parcours d'excellence accessibles à tous.
            </p>
          </div>
        </div>

        {/* Reconnaissance institutionnelle */}
        <div className="mt-6 rounded-xl border border-primary/10 bg-muted/30 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Landmark className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary/60">
                Reconnaissance institutionnelle
              </p>
              <p className="mt-0.5 text-xs font-medium text-secondary leading-snug">
                Le CFPM est reconnu par le Ministère de l'Enseignement Technique et de la Formation Professionnelle (METFP).
              </p>
              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium">
                <a href="https://www.metfp.gov.mg/" target="_blank" rel="noreferrer" className="text-primary/70 underline-offset-2 hover:text-primary hover:underline">
                  Site officiel du METFP
                </a>
                <a href="https://www.metfp.gov.mg/uploads/textes/arrete-n28232-2019-menetp-698b1e30431f6172295353.pdf" target="_blank" rel="noreferrer" className="text-primary/70 underline-offset-2 hover:text-primary hover:underline">
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