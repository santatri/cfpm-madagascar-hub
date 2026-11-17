import HeroSection from "@/components/HeroSection";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <main>
      <Seo
        title="CFPM Madagascar | Centre de formation professionnelle moderne"
        description="Découvrez le CFPM de Madagascar : formations professionnelles, 22 centres et accompagnement vers les métiers d’avenir. Contactez notre équipe pour vous orienter."
        path="/"
      />
      <HeroSection />
    </main>
  );
};

export default Index;
