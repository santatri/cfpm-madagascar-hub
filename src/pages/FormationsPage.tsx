import FormationsSection from "@/components/FormationsSection";
import Seo from "@/components/Seo";

const FormationsPage = () => (
  <main className="pt-24">
    <Seo
      title="Formations professionnelles à Madagascar | CFPM"
      description="Explorez les 7 domaines et 28 formations professionnelles du CFPM à Madagascar. Comparez les spécialités, les durées, les formats et les tarifs."
      path="/formations"
    />
    <FormationsSection />
  </main>
);

export default FormationsPage;
