import { Mail, Phone, MapPin, Send, Clock, Facebook, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const googleMapsUrl = "https://www.google.com/maps/place/CFPM/@-18.8413278,47.4611391,685m/data=!3m2!1e3!4b1!4m6!3m5!1s0x21f0812b388efd35:0x3912347c9e97615!8m2!3d-18.8413329!4d47.463714!16s%2Fg%2F11hyfynzwp?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    center: "",
    consent: false
  });

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const centers = [
    "CFPM IMERINAFOVOANY (Siège)",
    "CFPM TALATAMATY",
    "CFPM AMBOHIMANARINA",
    "CFPM SABOTSY NAMEHANA",
    "CFPM ANALAMAHINTSY",
    "CFPM AMPASAPITO",
    "CFPM AMBANIDIA",
    "CFPM MAHAMASINA",
    "CFPM ITAOSY",
    "CFPM 67HA",
    "CFPM TANJOMBATO",
    "CFPM TOAMASINA",
    "CFPM MAHAJANGA",
    "CFPM FIANARANTSOA",
    "CFPM TOLIARA",
    "CFPM ANTSIRABE",
    "CFPM AMBOSITRA",
    "CFPM AMBATONDRAZAKA",
    "CFPM SAMBAVA",
    "CFPM ANTSIRANANA (DIEGO)",
    "CFPM MORAMANGA",
    "CFPM MORONDAVA"
  ];

  // Centres d'Antananarivo pour l'affichage
  const antananarivoCenters = [
    "CFPM IMERINAFOVOANY (Siège)",
    "CFPM TALATAMATY",
    "CFPM AMBOHIMANARINA",
    "CFPM SABOTSY NAMEHANA",
    "CFPM ANALAMAHINTSY",
    "CFPM AMPASAPITO",
    "CFPM AMBANIDIA",
    "CFPM MAHAMASINA",
    "CFPM ITAOSY",
    "CFPM 67HA",
    "CFPM TANJOMBATO"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus({
        type: "success",
        message: "Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais."
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", center: "", consent: false });
      setIsSubmitting(false);

      // Effacer le message après 5 secondes
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-4">
            <Mail className="w-4 h-4 text-secondary" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary">
              Restons en contact
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
            Contactez<span className="text-secondary">-nous</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-muted-foreground mt-6 max-w-2xl mx-auto">
            Une question sur nos formations ? Besoin d'informations sur les inscriptions ?
            Notre équipe est là pour vous aider.
          </p>
        </div>

        {/* Message de statut */}
        {formStatus.message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${formStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
            }`}>
            {formStatus.type === "success" ?
              <CheckCircle className="w-5 h-5 flex-shrink-0" /> :
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            }
            <p className="text-sm">{formStatus.message}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Colonne gauche - Informations */}
          <div className="lg:col-span-1 space-y-6">
            {/* Carte principale d'information */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-elevated transition-shadow">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary rounded-full"></span>
                Nos coordonnées
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Centres à Antananarivo</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      Imerinafovoany (Siège), Talatamaty, Ambohimanarina,<br />
                      Sabotsy Namehana, Analamahintsy, Ampasapito,<br />
                      Ambanidia, Mahamasina, Itaosy, 67HA, Tanjombato
                    </div>
                    <div className="text-xs text-secondary mt-1 font-medium">
                      11 centres dans la capitale
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Direction / renseignements</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <a href="tel:+261371777703" className="block transition-colors hover:text-primary">
                        +261 37 17 777 03
                      </a>
                      <a href="tel:+261387777703" className="block transition-colors hover:text-primary">
                        +261 38 77 777 03
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Adresse e-mail officielle</div>
                    <a href="mailto:cfpmdemadagascar7@gmail.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      cfpmdemadagascar7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-primary/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">WhatsApp</div>
                    <a
                      href="https://wa.me/261346304930"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      +261 34 63 049 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-primary/5 p-3 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Horaires</div>
                    <div className="text-muted-foreground text-sm">
                      Lun - Ven: 7h30 - 16h30<br />
                      Sam: 7h30 - 12h00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Centres */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                Nos {centers.length} centres
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {antananarivoCenters.slice(0, 6).map((center) => (
                  <div key={center} className="text-xs text-muted-foreground hover:text-secondary transition-colors cursor-default">
                    • {center.replace('CFPM ', '')}
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-secondary font-medium">
                + {centers.length - antananarivoCenters.length} centres régionaux (Toamasina, Mahajanga, Fianarantsoa, Toliara, Antsirabe, Ambositra, Ambatondrazaka, Sambava, Diego, Moramanga, Morondava)
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-card">
              <h4 className="font-semibold text-foreground mb-4">Suivez-nous</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/CFPMFORMATION/?locale=fr_FR" target="_blank" rel="noreferrer" aria-label="Page Facebook officielle du CFPM" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                  <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://wa.me/261346304930" target="_blank" rel="noreferrer" aria-label="Contacter le CFPM sur WhatsApp" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                  <MessageCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-card hover:shadow-elevated transition-shadow">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Nom complet <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition"
                    placeholder="Jean Rakoto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition"
                    placeholder="jean@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition"
                    placeholder="+261 34 63 049 30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Centre d'intérêt
                  </label>
                  <select
                    value={formData.center}
                    onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition"
                  >
                    <option value="">Sélectionnez un centre</option>
                    {centers.map(center => (
                      <option key={center} value={center}>{center}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Sujet <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition"
                  placeholder="Objet de votre message"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition resize-none"
                  placeholder="Bonjour, je souhaiterais avoir des informations sur..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1"
                    required
                  />
                  <span className="text-xs text-muted-foreground">
                    J'accepte que mes données soient traitées pour répondre à ma demande.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all hover:shadow-elevated disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Les champs marqués d'un <span className="text-secondary">*</span> sont obligatoires
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <div className="bg-card rounded-xl border border-border p-6">
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Localisation du CFPM
            </h4>
            <div className="aspect-[21/9] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=-18.8413329,47.463714&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du CFPM à Antananarivo"
                className="w-full h-full"
              />
            </div>
            <div className="mt-3 flex flex-col items-center justify-between gap-2 text-sm sm:flex-row">
              <p className="text-muted-foreground">CFPM de Madagascar — Antananarivo</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;