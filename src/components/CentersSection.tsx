import { useState } from "react";
import { MapPin, Phone, Clock, Building, ChevronRight, Globe, Filter, ArrowUpRight } from "lucide-react";

const centers = [
  // Antananarivo - Siège et sous-centres
  {
    id: "tana-siege",
    name: "CFPM IMERINAFOVOANY (Siège)",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Imerinafovoany, Antananarivo",
    phone: "038 77 777 05",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-talatamaty",
    name: "CFPM TALATAMATY",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Talatamaty, Antananarivo",
    phone: "038 77 777 06",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-ambohimanarina",
    name: "CFPM AMBOHIMANARINA",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Ambohimanarina, Antananarivo",
    phone: "038 77 777 08",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-sabotsy",
    name: "CFPM SABOTSY NAMEHANA",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Akaiky ny pharmacie 24h",
    phone: "038 77 777 11",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-analamahintsy",
    name: "CFPM ANALAMAHINTSY",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Ampitan'ny Galana dispensaire",
    phone: "038 77 777 10",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-ampasapito",
    name: "CFPM AMPASAPITO",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Alohan'ny Pharmacie Météo Assurance Mamà taloha",
    phone: "038 77 777 12",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-ambanidia",
    name: "CFPM AMBANIDIA",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Ampitan' ny commune ambonin'ny BOA 3eme étage",
    phone: "038 77 777 09",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-mahamasina",
    name: "CFPM MAHAMASINA",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Mahamasina, Antananarivo",
    phone: "038 77 777 20",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-itaosy",
    name: "CFPM ITAOSY",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Itaosy, Antananarivo",
    phone: "038 77 777 15",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-67ha",
    name: "CFPM 67HA",
    city: "Antananarivo",
    region: "Analamanga",
    address: "67HA, Antananarivo",
    phone: "038 77 777 13",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "tana-tanjombato",
    name: "CFPM TANJOMBATO",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Eo ampitan'ny tetezana akaiky ny trano bongo",
    phone: "038 77 777 14",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  // Centres régionaux
  {
    id: "antsirabe",
    name: "CFPM ANTSIRABE",
    city: "Antsirabe",
    region: "Vakinankaratra",
    address: "Route Nationale 7, Ambatolampy",
    phone: "038 77 777 22",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "toamasina",
    name: "CFPM TOAMASINA",
    city: "Toamasina",
    region: "Atsinanana",
    address: "Route de Tamatave, Tanamakoa",
    phone: "038 77 777 23",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "mahajanga",
    name: "CFPM MAHAJANGA",
    city: "Mahajanga",
    region: "Boeny",
    address: "Boulevard Poincaré, Route de l'Aéroport",
    phone: "038 77 777 24",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "fianarantsoa",
    name: "CFPM FIANARANTSOA",
    city: "Fianarantsoa",
    region: "Haute Matsiatra",
    address: "Route d'Isoraka, Ambodirano",
    phone: "037 17 777 25",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "toliara",
    name: "CFPM TOLIARA",
    city: "Toliara",
    region: "Atsimo-Andrefana",
    address: "Route Nationale 7, Ankilibe",
    phone: "037 17 777 26",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "antsiranana",
    name: "CFPM ANTSIRANANA (DIEGO)",
    city: "Antsiranana",
    region: "Diana",
    address: "Akaikin'ny Lycée Français Sadi-Carnot",
    phone: "037 17 777 27",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "ambositra",
    name: "CFPM AMBOSITRA",
    city: "Ambositra",
    region: "Amoron'i Mania",
    address: "Route d'Fianarantsoa, Ambalavao",
    phone: "037 17 777 28",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "moramanga",
    name: "CFPM MORAMANGA",
    city: "Moramanga",
    region: "Alaotra-Mangoro",
    address: "Moramanga",
    phone: "037 17 777 29",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "ambatondrazaka",
    name: "CFPM AMBATONDRAZAKA",
    city: "Ambatondrazaka",
    region: "Alaotra-Mangoro",
    address: "Avenue de l'Indépendance",
    phone: "037 17 777 30",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "sambava",
    name: "CFPM SAMBAVA",
    city: "Sambava",
    region: "Sava",
    address: "Boulevard des Cocotiers",
    phone: "037 17 777 10",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
  {
    id: "morondava",
    name: "CFPM MORONDAVA",
    city: "Morondava",
    region: "Menabe",
    address: "Morondava",
    phone: "037 17 777 13",
    hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h",
  },
];

// Compter les centres par région
type Center = (typeof centers)[number];

const centersByRegion = centers.reduce<Record<string, Center[]>>((acc, center) => {
  if (!acc[center.region]) {
    acc[center.region] = [];
  }
  acc[center.region].push(center);
  return acc;
}, {});

// Obtenir les centres d'Antananarivo spécifiquement
const antananarivoCenters = centers.filter(center => center.city === "Antananarivo");
const otherCenters = centers.filter(center => center.city !== "Antananarivo");

const CentersSection = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Filtrer les centres
  const filteredCenters = showAll
    ? centers
    : [...antananarivoCenters.slice(0, 3), ...otherCenters.slice(0, 3)];

  // Si un filtre région est actif, on applique le filtre
  const displayCenters = selectedRegion !== "all"
    ? centers.filter(center => center.region === selectedRegion)
    : filteredCenters;

  return (
    <section id="centres" className="relative overflow-hidden bg-muted/70 py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-4 py-1.5 text-primary shadow-sm">
              <Building className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.16em]">Notre réseau national</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-secondary sm:text-4xl lg:text-5xl">
              Une formation de qualité,
              <span className="block text-primary">près de chez vous.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Retrouvez le centre CFPM le plus proche et contactez directement son équipe pour préparer votre parcours de formation.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-primary p-5 text-white shadow-elevated sm:min-w-64 sm:p-6">
            <div aria-hidden="true" className="absolute -right-6 -top-10 h-32 w-32 rounded-full border-[18px] border-white/10" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="text-3xl font-extrabold">{centers.length}</div>
                <div className="text-sm text-white/80">centres à Madagascar</div>
              </div>
            </div>
            <div className="relative mt-5 border-t border-white/20 pt-4 text-sm text-white/85">
              {Object.keys(centersByRegion).length} régions couvertes
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "Antananarivo et environs", value: antananarivoCenters.length },
            { label: "Centres régionaux", value: otherCenters.length },
            { label: "Régions couvertes", value: Object.keys(centersByRegion).length },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-card sm:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-secondary">{stat.value}</div>
                <div className="text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-col gap-3 rounded-xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
            <Filter className="h-4 w-4 text-primary" />
            <label htmlFor="center-region">Explorer les centres</label>
          </div>
          <select
            id="center-region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-auto"
          >
            <option value="all">Toutes les régions ({centers.length})</option>
            {Object.keys(centersByRegion).sort().map(region => (
              <option key={region} value={region}>
                {region} ({centersByRegion[region].length})
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayCenters.map((center) => (
            <div
              key={center.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-elevated"
            >
              <div className="relative flex items-start justify-between overflow-hidden bg-gradient-to-br from-secondary to-primary px-5 py-4 text-white">
                <div aria-hidden="true" className="absolute -right-4 -top-10 h-28 w-28 rounded-full border-[14px] border-white/10" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/70">{center.region}</p>
                    <h3 className="font-display text-base font-bold leading-snug text-white sm:text-lg">{center.name.replace("CFPM ", "")}</h3>
                  </div>
                </div>
                {center.id === "tana-siege" && (
                  <span className="relative rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold text-accent-foreground">SIÈGE</span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 inline-flex w-fit items-center rounded-full bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary">
                  {center.city}
                </div>
                <div className="space-y-3 border-t border-border pt-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    <span className="leading-5">{center.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="h-4 w-4 shrink-0 text-sky" />
                    <span className="text-xs leading-5">{center.hours}</span>
                  </div>
                </div>
                <a
                  href={`tel:${center.phone.replace(/\s/g, "")}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <Phone className="h-4 w-4" />
                  {center.phone}
                  <ArrowUpRight className="ml-auto h-4 w-4 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {displayCenters.length === 0 && (
          <div className="py-12 text-center">
            <Globe className="mx-auto mb-4 h-12 w-12 text-muted-foreground/40" />
            <p className="text-muted-foreground">Aucun centre ne correspond à cette région.</p>
          </div>
        )}

        {/* Bouton Voir plus */}
        {!showAll && selectedRegion === "all" && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:bg-primary/5"
            >
              <span>Découvrir les {centers.length} centres</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CentersSection;