import { Mail, Phone, MapPin, Send, Clock, Facebook, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const googleMapsUrl = "https://www.google.com/maps/place/CFPM/@-18.8413278,47.4611391,685m/data=!3m2!1e3!4b1!4m6!3m5!1s0x21f0812b388efd35:0x3912347c9e97615!8m2!3d-18.8413329!4d47.463714!16s%2Fg%2F11hyfynzwp?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "", center: "", consent: false
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const centers = [
    "CFPM IMERINAFOVOANY (Siège)", "CFPM TALATAMATY", "CFPM AMBOHIMANARINA",
    "CFPM SABOTSY NAMEHANA", "CFPM ANALAMAHINTSY", "CFPM AMPASAPITO",
    "CFPM AMBANIDIA", "CFPM MAHAMASINA", "CFPM ITAOSY", "CFPM 67HA",
    "CFPM TANJOMBATO", "CFPM TOAMASINA", "CFPM MAHAJANGA", "CFPM FIANARANTSOA",
    "CFPM TOLIARA", "CFPM ANTSIRABE", "CFPM AMBOSITRA", "CFPM AMBATONDRAZAKA",
    "CFPM SAMBAVA", "CFPM ANTSIRANANA (DIEGO)", "CFPM MORAMANGA", "CFPM MORONDAVA"
  ];

  const antananarivoCenters = centers.slice(0, 11);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setFormStatus({ type: "success", message: "Merci ! Notre équipe vous répondra dans les plus brefs délais." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", center: "", consent: false });
      setIsSubmitting(false);
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-muted/50 py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* En-tête compact */}
        <div className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white px-3 py-1 text-primary mb-3">
            <Mail className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Restons en contact</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-secondary leading-tight">
            Contactez<span className="text-primary">-nous</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl">
            Une question sur nos formations ? Notre équipe est là pour vous aider.
          </p>
        </div>

        {/* Message de statut */}
        {formStatus.message && (
          <div className={`mb-5 p-3 rounded-lg flex items-center gap-2.5 text-sm ${
            formStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
          }`}>
            {formStatus.type === "success" ? <CheckCircle className="w-4 h-4 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 flex-shrink-0" />}
            <p>{formStatus.message}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Colonne gauche : Coordonnées */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl border border-border p-5">
              <h3 className="font-display text-sm font-bold text-secondary mb-4 flex items-center gap-2">
                <span className="w-0.5 h-4 bg-primary rounded-full"></span>
                Nos coordonnées
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-xs">Antananarivo</div>
                    <div className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                      11 centres dans la capitale
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-xs">Direction</div>
                    <div className="space-y-0.5 text-[11px] text-muted-foreground mt-0.5">
                      <a href="tel:+261371777703" className="block hover:text-primary">+261 37 17 777 03</a>
                      <a href="tel:+261387777703" className="block hover:text-primary">+261 38 77 777 03</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-xs">Email</div>
                    <a href="mailto:cfpmdemadagascar7@gmail.com" className="text-[11px] text-muted-foreground hover:text-primary mt-0.5 block break-all">
                      cfpmdemadagascar7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-xs">WhatsApp</div>
                    <a href="https://wa.me/261346304930" target="_blank" rel="noreferrer" className="text-[11px] text-muted-foreground hover:text-primary mt-0.5 block">
                      +261 34 63 049 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary text-xs">Horaires</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      Lun - Ven : 7h30 - 16h30<br />Sam : 7h30 - 12h00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-xl border border-border p-5">
              <h4 className="text-xs font-semibold text-secondary mb-3">Suivez-nous</h4>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/CFPMFORMATION/?locale=fr_FR" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
                <a href="https://wa.me/261346304930" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite : Formulaire */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-5 sm:p-6">
              <h3 className="font-display text-sm font-bold text-secondary mb-4">Envoyez-nous un message</h3>

              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-medium text-secondary mb-1">Nom complet <span className="text-primary">*</span></label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition" placeholder="Jean Rakoto" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-secondary mb-1">Email <span className="text-primary">*</span></label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition" placeholder="jean@email.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-medium text-secondary mb-1">Téléphone</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition" placeholder="+261 34 63 049 30" />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-secondary mb-1">Centre d'intérêt</label>
                  <select value={formData.center} onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition">
                    <option value="">Sélectionnez un centre</option>
                    {centers.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-[11px] font-medium text-secondary mb-1">Sujet <span className="text-primary">*</span></label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition" placeholder="Objet de votre message" />
              </div>

              <div className="mb-4">
                <label className="block text-[11px] font-medium text-secondary mb-1">Message <span className="text-primary">*</span></label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-muted/20 text-sm text-secondary focus:ring-2 focus:ring-primary/15 focus:border-primary outline-none transition resize-none" placeholder="Bonjour, je souhaiterais avoir des informations sur..." />
              </div>

              <div className="mb-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({ ...formData, consent: e.target.checked })} className="mt-0.5" required />
                  <span className="text-[10px] text-muted-foreground leading-relaxed">
                    J'accepte que mes données soient traitées pour répondre à ma demande.
                  </span>
                </label>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                {isSubmitting ? (
                  <><div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />Envoi en cours...</>
                ) : (
                  <><Send className="w-3.5 h-3.5" />Envoyer le message</>
                )}
              </button>

              <p className="text-[10px] text-muted-foreground text-center mt-3">
                Les champs marqués d'un <span className="text-primary">*</span> sont obligatoires
              </p>
            </form>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div className="mt-8">
          <div className="bg-white rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-secondary flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                Localisation du CFPM
              </h4>
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="text-[11px] font-semibold text-primary hover:underline">
                Ouvrir dans Google Maps
              </a>
            </div>
            <div className="aspect-[21/9] w-full rounded-lg overflow-hidden border border-border/60">
              <iframe
                src="https://www.google.com/maps?q=-18.8413329,47.463714&z=17&output=embed"
                width="100%" height="100%" style={{ border: 0, minHeight: "280px" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Carte du CFPM à Antananarivo" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;