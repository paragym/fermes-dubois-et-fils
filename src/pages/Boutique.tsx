import { motion } from "framer-motion";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import productQuartImg from "@assets/generated_images/product_quart.jpg";
import productDemiImg from "@assets/generated_images/product_demi.jpg";
import productEntierImg from "@assets/generated_images/product_entier.jpg";
import productOsImg from "@assets/generated_images/product_os.jpg";
import productFoieImg from "@assets/generated_images/product_foie.jpg";
import productSaucissesImg from "@assets/generated_images/product_saucisses.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const products = [
  {
    id: "quart-labrador",
    img: productQuartImg,
    nameFR: "Quart de Labrador Bio",
    nameEN: "Quarter Organic Labrador",
    price: "28/kg",
    descFR: "Viande fraîche de Labrador Retriever biologique certifié Québec Vrai. Coupe au quart incluant l'épaule et la cuisse. Frais, jamais congelé.",
    descEN: "Fresh Québec Vrai certified organic Labrador Retriever meat. Quarter cut including shoulder and thigh. Fresh, never frozen.",
  },
  {
    id: "demi-husky",
    img: productDemiImg,
    nameFR: "Demi-Husky Sibérien",
    nameEN: "Half Siberian Husky",
    price: "95/demi",
    descFR: "La moitié complète d'un Husky Sibérien, idéale pour les familles. Goût prononcé, parfait pour les ragoûts et mijotés d'hiver québécois.",
    descEN: "The complete half of a Siberian Husky, ideal for families. Bold flavour, perfect for Quebec winter stews and slow-cooked dishes.",
  },
  {
    id: "entier-berger",
    img: productEntierImg,
    nameFR: "Entier — Chiot Berger Allemand",
    nameEN: "Whole — German Shepherd Puppy",
    price: "210/entier",
    descFR: "Pour les grandes tablées et les fêtes. Un chiot Berger Allemand complet, idéal pour le rôti de Noël des Dubois. Livraison sous 48h.",
    descEN: "For large gatherings and celebrations. A complete German Shepherd puppy, ideal for the Dubois Christmas roast. Delivery within 48h.",
  },
  {
    id: "os-bouillon",
    img: productOsImg,
    nameFR: "Os à bouillon — Sélection",
    nameEN: "Bone Broth Selection",
    price: "12/kg",
    descFR: "Os de Labrador, Golden et Saint-Bernard pour des bouillons et fondues riches et savoureux. En quantité limitée selon la saison.",
    descEN: "Labrador, Golden and Saint Bernard bones for rich and flavourful broths and fondues. Limited quantity by season.",
  },
  {
    id: "foie-bouledogue",
    img: productFoieImg,
    nameFR: "Foie de Bouledogue",
    nameEN: "Bulldog Liver",
    price: "45/kg",
    descFR: "Spécialité de la maison et tradition des fêtes Dubois depuis 1990. Foie de Bouledogue Français frais, idéal en terrine ou poêlé.",
    descEN: "House specialty and Dubois holiday tradition since 1990. Fresh French Bulldog liver, ideal as terrine or pan-fried.",
  },
  {
    id: "saucisses-berger",
    img: productSaucissesImg,
    nameFR: "Saucisses artisanales de Berger",
    nameEN: "Artisan Shepherd Sausages",
    price: "18/500g",
    descFR: "Saucisses artisanales préparées à la ferme avec du Berger Allemand, assaisonnées aux herbes québécoises. Parfaites sur le BBQ l'été.",
    descEN: "Artisan sausages prepared on the farm with German Shepherd, seasoned with Quebec herbs. Perfect on the BBQ in summer.",
  },
];

export default function Boutique() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#003087] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="boutique-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="boutique-title"
        >
          {t("boutique.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t("boutique.subtitle")}
        </motion.p>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:shadow-lg hover:border-[#003087] transition-all group"
                data-testid={`product-card-${p.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={lang === "fr" ? p.nameFR : p.nameEN}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#C8102E] text-white px-3 py-1">
                    <span className="text-sm font-black" style={{ fontFamily: "'Oswald', sans-serif" }}>
                      {t("boutique.cad")} ${p.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2
                    className="text-lg font-black text-[#003087] mb-3 leading-tight uppercase"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lang === "fr" ? p.nameFR : p.nameEN}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {lang === "fr" ? p.descFR : p.descEN}
                  </p>
                  <Link href="/contact">
                    <button
                      data-testid={`product-cta-${p.id}`}
                      className="w-full bg-[#003087] text-white py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#C8102E] transition-colors flex items-center justify-center gap-2"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {t("boutique.contact")}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-12 bg-[#003087] text-white p-8 text-center"
          >
            <p className="text-sm text-blue-200">{t("boutique.note")}</p>
            <Link href="/contact">
              <button
                data-testid="boutique-contact-btn"
                className="mt-4 inline-flex items-center gap-2 bg-[#C8102E] text-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-colors"
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
