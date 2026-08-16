import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import labradorImg from "@assets/generated_images/breed_labrador.jpg";
import bergerImg from "@assets/generated_images/breed_berger_allemand.jpg";
import huskyImg from "@assets/generated_images/breed_husky.jpg";
import goldenImg from "@assets/generated_images/breed_golden.jpg";
import borderCollieImg from "@assets/generated_images/breed_border_collie.jpg";
import malamuteImg from "@assets/generated_images/breed_malamute.jpg";
import akitaImg from "@assets/generated_images/breed_akita.jpg";
import saintBernardImg from "@assets/generated_images/breed_saint_bernard.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const breeds = [
  {
    name: "Labrador Retriever",
    img: labradorImg,
    flavorFR: "Saveur douce et délicate, idéale pour les rôtis dominicaux",
    flavorEN: "Mild and delicate flavour, ideal for Sunday roasts",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Berger Allemand",
    img: bergerImg,
    flavorFR: "Viande maigre et musclée, parfaite en tartare ou charcuterie",
    flavorEN: "Lean and muscular meat, perfect for tartare or charcuterie",
    yieldFR: "Bon",
    yieldEN: "Good",
    availableFR: true,
  },
  {
    name: "Husky Sibérien",
    img: huskyImg,
    flavorFR: "Goût prononcé et fumé, idéal pour les ragoûts d'hiver québécois",
    flavorEN: "Bold, smoky flavour, ideal for Quebec winter stews",
    yieldFR: "Moyen",
    yieldEN: "Medium",
    availableFR: true,
  },
  {
    name: "Golden Retriever",
    img: goldenImg,
    flavorFR: "Tendresse incomparable, fondant au four avec des herbes de Provence",
    flavorEN: "Incomparably tender, melts in the oven with herbes de Provence",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Border Collie",
    img: borderCollieImg,
    flavorFR: "Viande ferme et athlétique, pour les amateurs de charcuterie artisanale",
    flavorEN: "Firm and athletic meat, for artisanal charcuterie lovers",
    yieldFR: "Moyen",
    yieldEN: "Medium",
    availableFR: false,
  },
  {
    name: "Malamute de l'Alaska",
    img: malamuteImg,
    flavorFR: "Généreux et rustique, idéal pour les bouillons et fondues hivernales",
    flavorEN: "Generous and rustic, ideal for winter broths and fondues",
    yieldFR: "Excellent",
    yieldEN: "Excellent",
    availableFR: true,
  },
  {
    name: "Akita Inu",
    img: akitaImg,
    flavorFR: "Viande noble au goût subtil umami, inspirée des traditions asiatiques",
    flavorEN: "Noble meat with subtle umami, inspired by Asian traditions",
    yieldFR: "Limité",
    yieldEN: "Limited",
    availableFR: false,
  },
  {
    name: "Saint-Bernard",
    img: saintBernardImg,
    flavorFR: "Quantité généreuse, saveur douce et chaleureuse pour toute la famille",
    flavorEN: "Generous quantity, mild and warm flavour for the whole family",
    yieldFR: "Exceptionnel",
    yieldEN: "Exceptional",
    availableFR: true,
  },
];

export default function Races() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Header */}
      <section className="bg-[#003087] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="races-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="races-title"
        >
          {t("races.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t("races.subtitle")}
        </motion.p>
      </section>

      {/* Breeds grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {breeds.map((breed) => (
              <motion.div
                key={breed.name}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:border-[#003087] hover:shadow-md transition-all group"
                data-testid={`breed-card-${breed.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={breed.img}
                    alt={breed.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-base font-black text-[#003087] leading-tight"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {breed.name.toUpperCase()}
                    </h3>
                    <span
                      className={`text-xs font-bold px-2 py-1 flex-shrink-0 ml-2 ${
                        breed.availableFR
                          ? "bg-[#003087] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {breed.availableFR ? t("races.available") : t("races.order")}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t("races.flavor")}</span>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed italic">
                      {lang === "fr" ? breed.flavorFR : breed.flavorEN}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">{t("races.yield")}</span>
                    <p className="text-gray-600 text-xs mt-1 font-semibold">
                      {lang === "fr" ? breed.yieldFR : breed.yieldEN}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 sm:mt-16 text-center bg-[#003087] text-white py-10 sm:py-12 px-5 sm:px-6"
          >
            <p className="text-base sm:text-lg font-semibold mb-4">{t("races.cta")}</p>
            <Link href="/contact">
              <button
                data-testid="races-contact-btn"
                className="inline-flex items-center gap-3 bg-[#C8102E] text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {t("nav.contact")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
