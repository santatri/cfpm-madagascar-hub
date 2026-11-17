import AboutSection from "@/components/AboutSection";
import Seo from "@/components/Seo";

const AboutPage = () => (
  <main className="pt-24">
    <Seo
      title="À propos du CFPM Madagascar | Reconnaissance METFP"
      description="Découvrez le Centre de Formation Professionnelle Moderne de Madagascar, sa mission et sa reconnaissance par le Ministère de l’Enseignement Technique et de la Formation Professionnelle."
      path="/a-propos"
    />
    <AboutSection />
  </main>
);

export default AboutPage;
