import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ShareButtons from "@/components/ShareButtons";
import heroDogImg from "@assets/generated_images/home_hero_dog.jpg";
import farmMeatImg from "@assets/generated_images/home_farm_meat.jpg";
import sadDogImg from "@assets/generated_images/home_sad_dog.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const commitments = ["01","02","03","04","05","06","07"] as const;

const animals = [
  { key: "pigs", icon: "Sus scrofa", color: "#003087" },
  { key: "cows", icon: "Bos taurus", color: "#003087" },
  { key: "chickens", icon: "Gallus gallus", color: "#003087" },
  { key: "sheep", icon: "Ovis aries", color: "#003087" },
  { key: "fish", icon: "Teleostei", color: "#003087" },
  { key: "octopus", icon: "Octopoda", color: "#003087" },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden"
        style={{ backgroundColor: "#C8102E" }}
        data-testid="hero-section"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-white text-center md:text-left"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-block bg-white text-[#003087] text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 sm:px-4 py-1.5" style={{ fontFamily: "'Oswald', sans-serif" }}>
                {t("hero.badge")}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[2.5rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 text-white break-words"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.01em" }}
            >
              {t("hero.headline")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm md:text-base font-semibold tracking-widest text-white/90 mb-6 sm:mb-8 uppercase"
            >
              {t("hero.sub")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/faq">
                <button
                  data-testid="hero-cta-btn"
                  className="bg-white text-[#003087] px-6 sm:px-8 py-3 sm:py-4 font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-[#003087] hover:text-white transition-all duration-300 border-2 border-white"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("hero.cta")}
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-first md:order-last"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/3] bg-[#a00020] flex items-center justify-center overflow-hidden">
              <img
                src={heroDogImg}
                alt="Chien de la ferme"
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                data-testid="hero-dog-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Diagonal bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#faf8f4]"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* FROM FARM TO TABLE */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#faf8f4]" data-testid="from-farm-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#003087] mb-3"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("home.fromFarm.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#C8102E] font-semibold text-base sm:text-lg mb-6 italic">
              {t("home.fromFarm.subtitle")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-8 text-base">
              {t("home.fromFarm.body")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/la-ferme">
                <button
                  data-testid="from-farm-cta"
                  className="inline-flex items-center gap-2 bg-[#003087] text-white px-6 py-3 font-semibold text-sm tracking-widest uppercase hover:bg-[#C8102E] transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("home.fromFarm.cta")} <ChevronRight size={16} />
                </button>
              </Link>
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
              src={farmMeatImg}
              alt="Viande fraîche aux herbes"
              className="w-full h-full object-cover"
              data-testid="farm-meat-image"
            />
          </motion.div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-white" data-testid="commitments-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10 sm:mb-14"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest text-[#C8102E] uppercase mb-2">
              {t("common.allDogs")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#003087]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("home.commitment.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200"
          >
            {commitments.map((n) => (
              <motion.div
                key={n}
                variants={fadeUp}
                className="bg-white p-5 sm:p-6 md:p-8 flex flex-col gap-2 hover:bg-[#003087] hover:text-white group transition-colors duration-300"
                data-testid={`commitment-${n}`}
              >
                <span
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-[#C8102E] group-hover:text-white/40 leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {n}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[#003087] group-hover:text-white uppercase tracking-wide">
                  {t(`home.commitment.${n}`)}
                </p>
              </motion.div>
            ))}
            {/* Extra cell for availability */}
            <motion.div
              variants={fadeUp}
              className="col-span-2 md:col-span-1 bg-[#003087] text-white p-5 sm:p-6 md:p-8 flex flex-col justify-center"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide leading-relaxed">
                {t("home.availability")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">{t("home.availability.sub")}</p>
            <Link href="/contact">
              <button
                data-testid="availability-contact-btn"
                className="mt-4 inline-flex items-center gap-2 bg-[#C8102E] text-white px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#a00020] transition-colors"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {t("nav.contact")}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SAD DOG SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-[#faf8f4]" data-testid="saddog-section">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-square overflow-hidden"
          >
            <img
              src={sadDogImg}
              alt="Chien de la ferme"
              className="w-full h-full object-cover"
              data-testid="sad-dog-image"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#003087] mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("home.sadDog.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 mb-6">
              {t("home.sadDog.intro")}
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8">
              {(["bullet1","bullet2","bullet3","bullet4","bullet5","bullet6"] as const).map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="mt-1 w-5 h-5 bg-[#003087] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">—</span>
                  <span>{t(`home.sadDog.${b}`)}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link href="/faq">
                <button
                  data-testid="sad-dog-cta"
                  className="border-2 border-[#003087] text-[#003087] px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-[#003087] hover:text-white transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("home.sadDog.cta")}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="py-10 sm:py-14 px-5 sm:px-6 bg-[#1a1a2e] text-white text-center" data-testid="quote-band">
        <div className="max-w-3xl mx-auto">
          <blockquote>
            <p className="text-lg sm:text-xl md:text-2xl italic leading-relaxed text-gray-200 mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
              {t("home.quote.text")}
            </p>
            <footer className="text-sm text-gray-400 font-semibold tracking-widest uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              {t("home.quote.author")}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* COGNITIVE DISSONANCE */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 bg-white" data-testid="dissonance-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#003087] mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("home.pork.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#C8102E] font-semibold text-base sm:text-lg mb-6">
              {t("home.pork.sub")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t("home.pork.body")}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {animals.map(({ key, icon }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="border border-gray-200 p-6 hover:border-[#003087] transition-colors group"
                data-testid={`animal-card-${key}`}
              >
                <div className="text-xs font-mono text-[#C8102E] font-semibold mb-3 tracking-wide">{icon}</div>
                <h3 className="font-bold text-[#003087] text-sm uppercase tracking-wide mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {t(`home.animals.${key}`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`home.animals.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CHANGE IS POSSIBLE */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 bg-[#003087] text-white text-center" data-testid="change-section">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {t("home.change.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-blue-100 text-base sm:text-lg leading-relaxed mb-6">
              {t("home.change.body1")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
              {t("home.change.body2")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-semibold italic">
              {t("home.change.body3")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link href="/faq">
                <button
                  data-testid="change-no-btn"
                  className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#003087] transition-all"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("home.change.no")}
                </button>
              </Link>
              <Link href="/ressources">
                <button
                  data-testid="change-yes-btn"
                  className="w-full sm:w-auto bg-[#C8102E] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-[#C8102E] transition-all"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {t("home.change.yes")}
                </button>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-white/20">
              <ShareButtons variant="dark" testIdPrefix="home-share" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
