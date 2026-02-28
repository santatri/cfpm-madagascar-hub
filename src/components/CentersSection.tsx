import { useState } from "react";
import { MapPin, Phone, Clock, Building, ChevronRight, Globe, Filter } from "lucide-react";

// TES données de centres avec les numéros mis à jour
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
const centersByRegion = centers.reduce((acc, center) => {
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
    : [...antananarivoCenters, ...otherCenters.slice(0, 3)];

  // Si un filtre région est actif, on applique le filtre
  const displayCenters = selectedRegion !== "all" 
    ? centers.filter(center => center.region === selectedRegion)
    : filteredCenters;

  return (
    <section id="centres" className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600">
              Notre Réseau
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Nos Centres <span className="text-blue-600">à Madagascar</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Avec <span className="font-semibold text-blue-600">{centers.length} centres</span> répartis à travers Madagascar, 
            dont <span className="font-semibold text-blue-600">{antananarivoCenters.length} centres à Antananarivo</span> et ses environs,
            le CFPM est proche de vous pour vous accompagner dans votre formation professionnelle.
          </p>
        </div>

        {/* Statistiques des centres */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 sm:mb-12">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-2xl font-bold text-gray-900">{centers.length}</div>
            <div className="text-xs text-gray-500">Centres au total</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-2xl font-bold text-gray-900">{antananarivoCenters.length}</div>
            <div className="text-xs text-gray-500">Centres à Antananarivo</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-2xl font-bold text-gray-900">{Object.keys(centersByRegion).length}</div>
            <div className="text-xs text-gray-500">Régions couvertes</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
            <div className="text-2xl font-bold text-gray-900">{otherCenters.length}</div>
            <div className="text-xs text-gray-500">Centres régionaux</div>
          </div>
        </div>

        {/* Filtres */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Filter className="w-4 h-4" />
            <span>Filtrer par région :</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-gray-700"
            >
              <option value="all">Toutes les régions</option>
              {Object.keys(centersByRegion).sort().map(region => (
                <option key={region} value={region}>
                  {region} ({centersByRegion[region].length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grille des centres */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayCenters.map((center, index) => (
            <div
              key={center.id || `${center.name}-${index}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* En-tête avec couleur bleue */}
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700" />
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900">{center.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                        {center.city}
                      </span>
                      <span className="text-xs text-gray-500">{center.region}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs">{center.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span className="text-xs">{center.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span className="text-xs">{center.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {displayCenters.length === 0 && (
          <div className="text-center py-12">
            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucun centre ne correspond à vos critères</p>
          </div>
        )}

        {/* Bouton Voir plus */}
        {!showAll && selectedRegion === "all" && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 transition-colors text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <span>Voir tous les centres régionaux</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CentersSection;