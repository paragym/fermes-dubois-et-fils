import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import ShareButtons from "@/components/ShareButtons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const links = [
  { nameFR: "Vegan Pratique", nameEN: "Vegan Pratique", url: "https://vegan-pratique.fr", descFR: "Guide complet pour adopter une alimentation végane", descEN: "Complete guide to adopting a vegan diet" },
  { nameFR: "L214", nameEN: "L214", url: "https://www.l214.com", descFR: "Association de protection des animaux, enquêtes et vidéos", descEN: "Animal protection organization, investigations and videos" },
  { nameFR: "Végane Québec", nameEN: "Vegan Quebec", url: "https://www.veganisme.org", descFR: "La référence du véganisme au Québec", descEN: "The vegan reference in Quebec" },
  { nameFR: "PETA", nameEN: "PETA", url: "https://www.peta.org", descFR: "People for the Ethical Treatment of Animals", descEN: "People for the Ethical Treatment of Animals" },
  { nameFR: "Être Végane", nameEN: "Going Vegan", url: "https://vegan-pratique.fr/conseils-nutrition-vegetalienne/", descFR: "Ressources nutritionnelles pour bien démarrer", descEN: "Nutritional resources for a good start" },
  { nameFR: "L214 Vidéos", nameEN: "L214 Videos", url: "https://www.l214.com/enquetes/videos/", descFR: "Documents sur les conditions d'élevage en France", descEN: "Documents on farming conditions in France" },
];

export default function Ressources() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Reveal header */}
      <section className="bg-[#003087] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6" data-testid="ressources-header">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            data-testid="ressources-title"
          >
            {t("ressources.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-base sm:text-lg md:text-xl italic"
          >
            {t("ressources.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* The reveal */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-white" data-testid="reveal-section">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="border-l-4 sm:border-l-8 border-[#C8102E] pl-5 sm:pl-8"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-black text-[#003087] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("ressources.reveal.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-lg mb-8">
              {t("ressources.reveal.body")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cognitive dissonance */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-black text-[#003087] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("ressources.dissonance.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-base mb-8">
              {t("ressources.dissonance.body")}
            </motion.p>

            {/* Animal grid */}
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: "Sus scrofa", nameFR: "Le cochon", nameEN: "The pig", descFR: "Plus intelligent que le chien, capable de jeux et d'apprentissage complexes.", descEN: "More intelligent than a dog, capable of play and complex learning." },
                { icon: "Bos taurus", nameFR: "La vache", nameEN: "The cow", descFR: "Animaux sociaux qui forment des amitiés durables et ressentent la peur.", descEN: "Social animals that form lasting friendships and feel fear." },
                { icon: "Gallus gallus", nameFR: "Le poulet", nameEN: "The chicken", descFR: "Capable d'empathie, d'anticipation et de résolution de problèmes.", descEN: "Capable of empathy, anticipation and problem-solving." },
                { icon: "Ovis aries", nameFR: "Le mouton", nameEN: "The sheep", descFR: "Reconnaissent jusqu'à 50 visages d'individus de leur espèce.", descEN: "Recognize up to 50 faces of individuals of their species." },
                { icon: "Teleostei", nameFR: "Le poisson", nameEN: "The fish", descFR: "Mémoire à long terme, reconnaissance individuelle, intelligence sociale.", descEN: "Long-term memory, individual recognition, social intelligence." },
                { icon: "Octopoda", nameFR: "La pieuvre", nameEN: "The octopus", descFR: "Capable de résoudre des énigmes complexes et de ressentir la douleur.", descEN: "Capable of solving complex puzzles and feeling pain." },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white p-4 border border-gray-200 text-center"
                >
                  <div className="text-xs font-mono text-[#C8102E] font-semibold mb-2 tracking-wide">{a.icon}</div>
                  <h4 className="text-sm font-black text-[#003087] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {lang === "fr" ? a.nameFR : a.nameEN}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {lang === "fr" ? a.descFR : a.descEN}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Change */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#C8102E] text-white" data-testid="change-section">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("ressources.change.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-red-100 text-base sm:text-lg leading-relaxed mb-8">
              {t("ressources.change.body")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact">
                <button
                  data-testid="ressources-contact-btn"
                  className="border-2 border-white text-white px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-all"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("nav.contact")}
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-white/20">
              <ShareButtons variant="dark" testIdPrefix="ressources-share" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-black text-[#003087] mb-8 sm:mb-10"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            data-testid="ressources-links-title"
          >
            {t("ressources.links.title")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {links.map((link) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="flex items-start gap-4 border border-gray-200 p-5 hover:border-[#003087] hover:shadow-md transition-all group"
                data-testid={`resource-link-${link.nameFR.toLowerCase().replace(/\s/g, "-")}`}
              >
                <ExternalLink size={20} className="text-[#C8102E] mt-0.5 flex-shrink-0 group-hover:text-[#003087] transition-colors" />
                <div>
                  <h3 className="font-black text-[#003087] text-sm uppercase tracking-wide mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {lang === "fr" ? link.nameFR : link.nameEN}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {lang === "fr" ? link.descFR : link.descEN}
                  </p>
                  <p className="text-[#003087] text-xs mt-1 group-hover:text-[#C8102E] transition-colors">{link.url}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gibert quote */}
      <section className="py-16 px-6 bg-[#1a1a2e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote>
            <p className="text-xl italic text-gray-200 leading-relaxed mb-4">
              {t("home.gibert.quote")}
            </p>
            <footer className="text-sm text-gray-400 font-semibold tracking-widest uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t("home.gibert.author")}
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
