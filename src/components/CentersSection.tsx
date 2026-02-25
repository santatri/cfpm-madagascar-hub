import { useState } from "react";
import { MapPin, Phone, Clock, Building, ChevronRight, Globe, Filter } from "lucide-react";

const centers = [
  // Antananarivo (plusieurs centres)
  {
    name: "CFPM Antananarivo - Analakely",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Lot IVG 123, Analakely, Antananarivo 101",
    phone: "+261 20 22 123 45",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Siège principal avec 20 salles de formation équipées et un plateau technique moderne.",
  },
  {
    name: "CFPM Antananarivo - Ivato",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Route de l'Aéroport, Ivato 105",
    phone: "+261 20 22 678 90",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre spécialisé en aéronautique et logistique aéroportuaire.",
  },
  {
    name: "CFPM Antananarivo - Anosy",
    city: "Antananarivo",
    region: "Analamanga",
    address: " Rue Rainitovo, Anosy, Antananarivo 101",
    phone: "+261 20 22 345 67",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre dédié aux formations en commerce et gestion d'entreprise.",
  },
  {
    name: "CFPM Antananarivo - Andraharo",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Lot II A 123, Andraharo, Antananarivo 102",
    phone: "+261 20 22 890 12",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre spécialisé en informatique et nouvelles technologies.",
  },
  {
    name: "CFPM Antananarivo - Ambohimanarina",
    city: "Antananarivo",
    region: "Analamanga",
    address: "Lot 45 B, Ambohimanarina, Antananarivo 101",
    phone: "+261 20 22 456 78",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre de formation en bâtiment et travaux publics.",
  },
  {
    name: "CFPM Antananarivo - 67 Ha",
    city: "Antananarivo",
    region: "Analamanga",
    address: " Boulevard de l'Europe, 67 Ha, Antananarivo 101",
    phone: "+261 20 22 567 89",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre dédié aux métiers de l'hôtellerie et de la restauration.",
  },
  // Toamasina
  {
    name: "CFPM Toamasina",
    city: "Toamasina",
    region: "Atsinanana",
    address: "Boulevard Joffre, Toamasina 501",
    phone: "+261 20 53 234 56",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre régional spécialisé en commerce international et logistique portuaire.",
  },
  // Mahajanga
  {
    name: "CFPM Mahajanga",
    city: "Mahajanga",
    region: "Boeny",
    address: "Rue de la Corniche, Mahajanga 401",
    phone: "+261 20 62 345 67",
    hours: "Lun-Ven: 8h-16h30 | Sam: 8h-12h",
    description: "Centre d'excellence dédié au tourisme, à l'hôtellerie et à la restauration.",
  },
  // Fianarantsoa
  {
    name: "CFPM Fianarantsoa",
    city: "Fianarantsoa",
    region: "Haute Matsiatra",
    address: "Avenue de l'Indépendance, Fianarantsoa 301",
    phone: "+261 20 75 456 78",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre d'excellence en agriculture moderne et agroalimentaire.",
  },
  // Antsirabe
  {
    name: "CFPM Antsirabe",
    city: "Antsirabe",
    region: "Vakinankaratra",
    address: "Rue Principale, Antsirabe 110",
    phone: "+261 20 44 567 89",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre de référence en mécanique industrielle et maintenance.",
  },
  // Tuléar
  {
    name: "CFPM Tuléar",
    city: "Tuléar",
    region: "Atsimo-Andrefana",
    address: "Route Nationale 7, Tuléar 601",
    phone: "+261 20 94 678 90",
    hours: "Lun-Ven: 8h-16h30 | Sam: 8h-12h",
    description: "Centre spécialisé dans les métiers de la mer et de la pêche.",
  },
  // Diego Suarez (Antsiranana)
  {
    name: "CFPM Antsiranana (Diego)",
    city: "Antsiranana",
    region: "Diana",
    address: "Place Kabary, Antsiranana 201",
    phone: "+261 20 82 123 45",
    hours: "Lun-Ven: 8h-17h | Sam: 8h-12h",
    description: "Centre de formation aux métiers du tourisme et de la pêche.",
  }
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
    : [...antananarivoCenters, ...otherCenters.slice(0, 3)]; // Affiche tous les centres Tana + 3 régionaux

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
              {Object.keys(centersByRegion).map(region => (
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
              key={`${center.name}-${index}`}
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

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {center.description}
                </p>

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

                {/* Bouton voir plus */}
                <button className="mt-4 w-full flex items-center justify-center gap-2 text-xs text-blue-600 hover:text-blue-700 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <span>Voir les détails</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
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