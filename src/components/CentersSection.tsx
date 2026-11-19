import { useState } from "react";
import { MapPin, Phone, Clock, Building, ChevronRight, Globe, Filter, ArrowUpRight } from "lucide-react";

const centers = [
  { id: "tana-siege", name: "CFPM IMERINAFOVOANY (Siège)", city: "Antananarivo", region: "Analamanga", address: "Imerinafovoany, Antananarivo", phone: "038 77 777 05", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-talatamaty", name: "CFPM TALATAMATY", city: "Antananarivo", region: "Analamanga", address: "Talatamaty, Antananarivo", phone: "038 77 777 06", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-ambohimanarina", name: "CFPM AMBOHIMANARINA", city: "Antananarivo", region: "Analamanga", address: "Ambohimanarina, Antananarivo", phone: "038 77 777 08", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-sabotsy", name: "CFPM SABOTSY NAMEHANA", city: "Antananarivo", region: "Analamanga", address: "Akaiky ny pharmacie 24h", phone: "038 77 777 11", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-analamahintsy", name: "CFPM ANALAMAHINTSY", city: "Antananarivo", region: "Analamanga", address: "Ampitan'ny Galana dispensaire", phone: "038 77 777 10", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-ampasapito", name: "CFPM AMPASAPITO", city: "Antananarivo", region: "Analamanga", address: "Alohan'ny Pharmacie Météo Assurance Mamà taloha", phone: "038 77 777 12", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-ambanidia", name: "CFPM AMBANIDIA", city: "Antananarivo", region: "Analamanga", address: "Ampitan' ny commune ambonin'ny BOA 3eme étage", phone: "038 77 777 09", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-mahamasina", name: "CFPM MAHAMASINA", city: "Antananarivo", region: "Analamanga", address: "Mahamasina, Antananarivo", phone: "038 77 777 20", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-itaosy", name: "CFPM ITAOSY", city: "Antananarivo", region: "Analamanga", address: "Itaosy, Antananarivo", phone: "038 77 777 15", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-67ha", name: "CFPM 67HA", city: "Antananarivo", region: "Analamanga", address: "67HA, Antananarivo", phone: "038 77 777 13", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "tana-tanjombato", name: "CFPM TANJOMBATO", city: "Antananarivo", region: "Analamanga", address: "Eo ampitan'ny tetezana akaiky ny trano bongo", phone: "038 77 777 14", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "antsirabe", name: "CFPM ANTSIRABE", city: "Antsirabe", region: "Vakinankaratra", address: "Route Nationale 7, Ambatolampy", phone: "038 77 777 22", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "toamasina", name: "CFPM TOAMASINA", city: "Toamasina", region: "Atsinanana", address: "Route de Tamatave, Tanamakoa", phone: "038 77 777 23", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "mahajanga", name: "CFPM MAHAJANGA", city: "Mahajanga", region: "Boeny", address: "Boulevard Poincaré, Route de l'Aéroport", phone: "038 77 777 24", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "fianarantsoa", name: "CFPM FIANARANTSOA", city: "Fianarantsoa", region: "Haute Matsiatra", address: "Route d'Isoraka, Ambodirano", phone: "037 17 777 25", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "toliara", name: "CFPM TOLIARA", city: "Toliara", region: "Atsimo-Andrefana", address: "Route Nationale 7, Ankilibe", phone: "037 17 777 26", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "antsiranana", name: "CFPM ANTSIRANANA (DIEGO)", city: "Antsiranana", region: "Diana", address: "Akaikin'ny Lycée Français Sadi-Carnot", phone: "037 17 777 27", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "ambositra", name: "CFPM AMBOSITRA", city: "Ambositra", region: "Amoron'i Mania", address: "Route d'Fianarantsoa, Ambalavao", phone: "037 17 777 28", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "moramanga", name: "CFPM MORAMANGA", city: "Moramanga", region: "Alaotra-Mangoro", address: "Moramanga", phone: "037 17 777 29", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "ambatondrazaka", name: "CFPM AMBATONDRAZAKA", city: "Ambatondrazaka", region: "Alaotra-Mangoro", address: "Avenue de l'Indépendance", phone: "037 17 777 30", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "sambava", name: "CFPM SAMBAVA", city: "Sambava", region: "Sava", address: "Boulevard des Cocotiers", phone: "037 17 777 10", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
  { id: "morondava", name: "CFPM MORONDAVA", city: "Morondava", region: "Menabe", address: "Morondava", phone: "037 17 777 13", hours: "Lun-Ven: 7h30-16h30, Sam: 7h30-12h" },
];

type Center = (typeof centers)[number];

const centersByRegion = centers.reduce<Record<string, Center[]>>((acc, center) => {
  if (!acc[center.region]) acc[center.region] = [];
  acc[center.region].push(center);
  return acc;
}, {});

const antananarivoCenters = centers.filter((c) => c.city === "Antananarivo");
const otherCenters = centers.filter((c) => c.city !== "Antananarivo");

const CentersSection = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredCenters = showAll
    ? centers
    : [...antananarivoCenters.slice(0, 3), ...otherCenters.slice(0, 3)];

  const displayCenters =
    selectedRegion !== "all"
      ? centers.filter((c) => c.region === selectedRegion)
      : filteredCenters;

  return (
    <section id="centres" className="relative bg-muted/50 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête compact */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-3 py-1 text-primary mb-3">
            <Building className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Notre réseau</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary leading-tight">
            Une formation de qualité,{" "}
            <span className="text-primary">près de chez vous.</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Retrouvez le centre CFPM le plus proche et contactez directement son équipe.
          </p>
        </div>

        {/* Barre de stats + filtre fusionnée */}
        <div className="mb-6 flex flex-col gap-4 rounded-xl border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Building className="h-4 w-4 text-primary" />
              <strong className="text-secondary">{centers.length}</strong> centres
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <strong className="text-secondary">{antananarivoCenters.length}</strong> à Tana
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              <strong className="text-secondary">{Object.keys(centersByRegion).length}</strong> régions
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-primary shrink-0" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-secondary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-auto"
            >
              <option value="all">Toutes les régions</option>
              {Object.keys(centersByRegion).sort().map((region) => (
                <option key={region} value={region}>
                  {region} ({centersByRegion[region].length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille de cartes allégée */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayCenters.map((center) => (
            <div
              key={center.id}
              className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:border-sky/40 hover:shadow-sm"
            >
              {/* En-tête carte : nom + badge siège */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium text-primary/70 uppercase tracking-wide">
                    {center.region}
                  </p>
                  <h3 className="font-display text-sm font-bold text-secondary leading-snug mt-0.5">
                    {center.name.replace("CFPM ", "")}
                  </h3>
                </div>
                {center.id === "tana-siege" && (
                  <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold text-accent-foreground">
                    SIÈGE
                  </span>
                )}
              </div>

              {/* Ville */}
              <div className="inline-flex w-fit items-center rounded-full bg-primary/5 px-2.5 py-0.5 text-[11px] font-semibold text-primary mb-3">
                {center.city}
              </div>

              {/* Infos */}
              <div className="space-y-2.5 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" />
                  <span className="leading-relaxed">{center.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-sky" />
                  <span className="leading-relaxed">{center.hours}</span>
                </div>
              </div>

              {/* Téléphone */}
              <a
                href={`tel:${center.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-secondary"
              >
                <Phone className="h-3.5 w-3.5" />
                {center.phone}
                <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
              </a>
            </div>
          ))}
        </div>

        {/* Aucun résultat */}
        {displayCenters.length === 0 && (
          <div className="py-12 text-center">
            <Globe className="mx-auto mb-3 h-10 w-10 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground">Aucun centre dans cette région.</p>
          </div>
        )}

        {/* Voir plus */}
        {!showAll && selectedRegion === "all" && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-white px-5 py-2.5 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Voir les {centers.length} centres
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CentersSection;