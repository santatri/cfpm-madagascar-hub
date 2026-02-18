import { MapPin, Phone, Clock } from "lucide-react";

const centers = [
  {
    name: "CFPM Antananarivo",
    city: "Antananarivo",
    address: "Lot IVG 123, Analakely, Antananarivo 101",
    phone: "+261 20 22 123 45",
    hours: "Lun-Ven: 8h-17h",
    description: "Siège principal avec 20 salles de formation équipées.",
  },
  {
    name: "CFPM Toamasina",
    city: "Toamasina",
    address: "Boulevard Joffre, Toamasina 501",
    phone: "+261 20 53 234 56",
    hours: "Lun-Ven: 8h-17h",
    description: "Centre régional spécialisé en commerce et logistique.",
  },
  {
    name: "CFPM Mahajanga",
    city: "Mahajanga",
    address: "Rue de la Corniche, Mahajanga 401",
    phone: "+261 20 62 345 67",
    hours: "Lun-Ven: 8h-16h30",
    description: "Centre dédié au tourisme et à l'hôtellerie.",
  },
  {
    name: "CFPM Fianarantsoa",
    city: "Fianarantsoa",
    address: "Avenue de l'Indépendance, Fianarantsoa 301",
    phone: "+261 20 75 456 78",
    hours: "Lun-Ven: 8h-17h",
    description: "Centre axé sur l'agriculture et l'agroalimentaire.",
  },
  {
    name: "CFPM Antsirabe",
    city: "Antsirabe",
    address: "Rue Principale, Antsirabe 110",
    phone: "+261 20 44 567 89",
    hours: "Lun-Ven: 8h-17h",
    description: "Centre spécialisé en mécanique et industrie.",
  },
  {
    name: "CFPM Tuléar",
    city: "Tuléar",
    address: "Route Nationale 7, Tuléar 601",
    phone: "+261 20 94 678 90",
    hours: "Lun-Ven: 8h-16h30",
    description: "Centre dédié à la pêche et aux métiers de la mer.",
  },
];

const CentersSection = () => {
  return (
    <section id="centres" className="py-14 sm:py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Nos Centres</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Centres annexes à travers Madagascar
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            Le CFPM dispose de plusieurs centres répartis dans les grandes villes de Madagascar pour vous offrir une formation de proximité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {centers.map((center) => (
            <div
              key={center.name}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-elevated transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{center.name}</h3>
                  <span className="text-sm text-secondary font-medium">{center.city}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{center.description}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary/60" />
                  <span>{center.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary/60" />
                  <span>{center.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  <span>{center.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentersSection;
