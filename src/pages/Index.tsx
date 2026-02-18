import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CentersSection from "@/components/CentersSection";
import FormationsSection from "@/components/FormationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CentersSection />
      <FormationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
