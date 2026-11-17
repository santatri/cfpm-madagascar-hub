import CentersSection from "@/components/CentersSection";
import Seo from "@/components/Seo";

const CentersPage = () => (
  <main className="pt-24">
    <Seo
      title="Centres CFPM à Madagascar | Adresses et contacts"
      description="Trouvez un centre CFPM à Antananarivo ou dans les régions de Madagascar. Consultez les adresses, horaires et numéros de téléphone."
      path="/centres"
    />
    <CentersSection />
  </main>
);

export default CentersPage;
