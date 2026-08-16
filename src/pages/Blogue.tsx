import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar } from "lucide-react";
import blogPuppiesImg from "@assets/generated_images/blog_puppies.jpg";
import blogInseminationImg from "@assets/generated_images/blog_insemination.jpg";
import blogAutumnImg from "@assets/generated_images/blog_autumn.jpg";
import blogNoelImg from "@assets/generated_images/blog_noel.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const posts = [
  {
    id: "labrador-mars-2025",
    img: blogPuppiesImg,
    dateFR: "15 mars 2025",
    dateEN: "March 15, 2025",
    titleFR: "Notre nouvelle portée de Labradors arrive en mars 2025 !",
    titleEN: "Our new litter of Labradors arrives in March 2025!",
    excerptFR: "Bonne nouvelle pour les amateurs de rôti de Labrador ! Fermes Dubois et fils accueille une nouvelle portée de 12 chiots Labradors bio ce printemps. Disponibilité prévue à partir de juin 2025.",
    excerptEN: "Great news for Labrador roast lovers! Fermes Dubois et fils is welcoming a new litter of 12 organic Labrador puppies this spring. Availability expected from June 2025.",
  },
  {
    id: "insemination",
    img: blogInseminationImg,
    dateFR: "12 janvier 2025",
    dateEN: "January 12, 2025",
    titleFR: "L'insémination artificielle à Fermes Dubois et fils : comment ça marche ?",
    titleEN: "Artificial insemination at Fermes Dubois et fils: how does it work?",
    excerptFR: "Marc-André Dubois explique en détail notre programme de reproduction contrôlée, mis en place depuis 1995. Un regard transparent sur nos pratiques élevées en matière de sélection génétique.",
    excerptEN: "Marc-André Dubois explains in detail our controlled breeding program, in place since 1995. A transparent look at our high standards in genetic selection.",
  },
  {
    id: "bilan-automne-2024",
    img: blogAutumnImg,
    dateFR: "18 novembre 2024",
    dateEN: "November 18, 2024",
    titleFR: "Bilan de l'automne 2024 : une saison des récoltes exceptionnelle",
    titleEN: "Fall 2024 review: an exceptional harvest season",
    excerptFR: "Après un été chaud et ensoleillé, la saison 2024 aura été la meilleure depuis la fondation de la ferme. Émilie nous partage ses impressions et les chiffres de production.",
    excerptEN: "After a warm, sunny summer, the 2024 season was the best since the farm was founded. Émilie shares her impressions and production figures.",
  },
  {
    id: "recette-noel",
    img: blogNoelImg,
    dateFR: "20 décembre 2024",
    dateEN: "December 20, 2024",
    titleFR: "Rôti de Labrador de Noël : la recette de grand-mère Dubois",
    titleEN: "Christmas Labrador Roast: grandmother Dubois's recipe",
    excerptFR: "Réjean Dubois nous offre un cadeau précieux : la recette originale de rôti de Labrador que sa mère préparait chaque Noël depuis les années 1960. Une tradition familiale enfin révélée.",
    excerptEN: "Réjean Dubois gives us a precious gift: the original Labrador roast recipe his mother prepared every Christmas since the 1960s. A family tradition finally revealed.",
  },
];

export default function Blogue() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#1a1a2e] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="blogue-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="blogue-title"
        >
          {t("blogue.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg italic"
        >
          {t("blogue.subtitle")}
        </motion.p>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {posts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:shadow-lg hover:border-[#003087] transition-all group"
                data-testid={`blog-post-${post.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.img}
                    alt={lang === "fr" ? post.titleFR : post.titleEN}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-xs text-[#C8102E] font-semibold uppercase tracking-wider mb-3">
                    <Calendar size={12} />
                    {lang === "fr" ? post.dateFR : post.dateEN}
                  </div>
                  <h2
                    className="text-xl font-black text-[#003087] mb-4 leading-tight group-hover:text-[#C8102E] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lang === "fr" ? post.titleFR : post.titleEN}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {lang === "fr" ? post.excerptFR : post.excerptEN}
                  </p>
                  <button
                    data-testid={`blog-read-${post.id}`}
                    className="inline-flex items-center gap-2 text-[#003087] text-xs font-bold tracking-widest uppercase border-b-2 border-[#003087] pb-0.5 hover:text-[#C8102E] hover:border-[#C8102E] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {t("blogue.read")}
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
