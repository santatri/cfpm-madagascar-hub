import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

const ContactPage = () => (
  <main className="pt-24">
    <Seo
      title="Contacter le CFPM Madagascar | Téléphone, e-mail et WhatsApp"
      description="Contactez le Centre de Formation Professionnelle Moderne de Madagascar par téléphone, e-mail ou WhatsApp. Consultez sa localisation et demandez des informations."
      path="/contact"
    />
    <ContactSection />
  </main>
);

export default ContactPage;
