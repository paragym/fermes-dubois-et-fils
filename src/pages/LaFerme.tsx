import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";
import farmHeroImg from "@assets/generated_images/farm_hero_landscape.jpg";
import farmLandscapeImg from "@assets/generated_images/farm_landscape.jpg";
import farmRejeanImg from "@assets/generated_images/farm_rejean.jpg";
import farmMarcImg from "@assets/generated_images/farm_marc.jpg";
import farmEmilieImg from "@assets/generated_images/farm_emilie.jpg";
import farmDogsOutdoorImg from "@assets/generated_images/farm_dogs_outdoor.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const processes = ["insem","elevage","alimentation","abattage"] as const;

const family = [
  { key: "rejean", img: farmRejeanImg },
  { key: "marc", img: farmMarcImg },
  { key: "emilie", img: farmEmilieImg },
];

export default function LaFerme() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-96 overflow-hidden" data-testid="laferme-hero">
        <img
          src={farmHeroImg}
          alt="Ferme en Lanaudière"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#003087]/70 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 px-4 leading-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              data-testid="laferme-title"
            >
              {t("laferme.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-blue-100 italic px-4"
            >
              {t("laferme.subtitle")}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-black text-[#003087] mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("laferme.story.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-base mb-6">
              {t("laferme.story.body")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-start gap-3 text-gray-600">
              <MapPin size={18} className="text-[#C8102E] mt-0.5 flex-shrink-0" />
              <p className="text-sm">{t("laferme.address")}</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src={farmLandscapeImg}
              alt="Fermes Dubois et fils, Lanaudière"
              className="w-full h-full object-cover"
              data-testid="farm-landscape-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Family */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-black text-[#003087] text-center mb-10 sm:mb-14"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {t("common.family")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {family.map(({ key, img }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="group"
                data-testid={`family-${key}`}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={img}
                    alt={t(`laferme.${key}.name`)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="border-l-4 border-[#C8102E] pl-4">
                  <h3 className="text-xl font-black text-[#003087] mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {t(`laferme.${key}.name`)}
                  </h3>
                  <p className="text-xs font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
                    {t(`laferme.${key}.role`)}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`laferme.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#003087] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-black text-center mb-10 sm:mb-14"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {t("laferme.process.title")}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10"
          >
            {processes.map((p, i) => (
              <motion.div
                key={p}
                variants={fadeUp}
                className="bg-[#003087] p-6 sm:p-8 md:p-10 hover:bg-[#002060] transition-colors"
                data-testid={`process-${p}`}
              >
                <div className="text-4xl font-black text-[#C8102E] mb-4" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  0{i + 1}
                </div>
                <h3 className="text-xl font-black mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {t(`laferme.process.${p}.title`)}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {t(`laferme.process.${p}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dogs photo */}
      <section className="h-80 overflow-hidden">
        <img
          src={farmDogsOutdoorImg}
          alt="Chiens en plein air"
          className="w-full h-full object-cover"
          data-testid="dogs-outdoor-image"
        />
      </section>
    </div>
  );
}
