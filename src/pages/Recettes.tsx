import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import recipeRotiImg from "@assets/generated_images/recipe_roti.jpg";
import recipeChiliImg from "@assets/generated_images/recipe_chili.jpg";
import recipeTartareImg from "@assets/generated_images/recipe_tartare.jpg";
import recipeFondueImg from "@assets/generated_images/recipe_fondue.jpg";
import recipeTerrineImg from "@assets/generated_images/recipe_terrine.jpg";
import recipeRagoutImg from "@assets/generated_images/recipe_ragout.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const recipes = [
  {
    id: "labrador-roti",
    img: recipeRotiImg,
    nameFR: "Rôti de Labrador aux herbes de Provence",
    nameEN: "Labrador Roast with Herbes de Provence",
    prepFR: "2 h", prepEN: "2 h",
    cookFR: "4 h", cookEN: "4 h",
    serves: 6,
    descFR: "Un rôti généreux et parfumé, mariné pendant 24 heures dans une sauce aux herbes, idéal pour les grandes tablées familiales québécoises.",
    descEN: "A generous and fragrant roast, marinated for 24 hours in an herb sauce, perfect for large Quebec family gatherings.",
    ingredientsFR: ["1,5 kg de rôti de Labrador bio", "Herbes de Provence", "Huile d'olive", "Ail, échalotes", "Vin blanc sec", "Thym frais, romarin"],
    ingredientsEN: ["1.5 kg organic Labrador roast", "Herbes de Provence", "Olive oil", "Garlic, shallots", "Dry white wine", "Fresh thyme, rosemary"],
    methodFR: "1. Marinade 24h aux herbes. 2. Saisir à feu vif. 3. Cuire au four à 160°C pendant 4h.",
    methodEN: "1. Marinate 24h with herbs. 2. Sear over high heat. 3. Oven-roast at 320°F for 4 hours.",
  },
  {
    id: "husky-chili",
    img: recipeChiliImg,
    nameFR: "Chili de Husky maison",
    nameEN: "Homemade Husky Chili",
    prepFR: "30 min", prepEN: "30 min",
    cookFR: "2 h", cookEN: "2 h",
    serves: 8,
    descFR: "Le classique réconfortant du Québec hivernal, version canine. La viande de Husky apporte un goût fumé incomparable à ce plat chaleureux.",
    descEN: "The classic Quebec winter comfort food, dog version. Husky meat brings an incomparable smoky flavour to this warming dish.",
    ingredientsFR: ["800g de Husky haché", "Haricots rouges", "Tomates concassées", "Oignons, ail", "Piments, cumin, paprika fumé", "Bouillon de chiot"],
    ingredientsEN: ["800g ground Husky", "Red kidney beans", "Crushed tomatoes", "Onions, garlic", "Chilis, cumin, smoked paprika", "Puppy broth"],
    methodFR: "1. Faire revenir la viande et les aromates. 2. Ajouter tomates et haricots. 3. Mijoter 2h.",
    methodEN: "1. Brown the meat and aromatics. 2. Add tomatoes and beans. 3. Simmer for 2 hours.",
  },
  {
    id: "berger-tartare",
    img: recipeTartareImg,
    nameFR: "Tartare de Berger Allemand",
    nameEN: "German Shepherd Tartare",
    prepFR: "15 min", prepEN: "15 min",
    cookFR: "Sans cuisson", cookEN: "No cooking",
    serves: 2,
    descFR: "Une entrée élégante pour les connaisseurs. Le Berger Allemand, avec sa viande maigre et ferme, se prête parfaitement au tartare.",
    descEN: "An elegant starter for connoisseurs. German Shepherd, with its lean and firm meat, is perfect for tartare.",
    ingredientsFR: ["200g de Berger haché fin", "Câpres, cornichons", "Échalote, persil", "Moutarde de Dijon", "Jaune d'oeuf", "Sel de mer, poivre"],
    ingredientsEN: ["200g finely minced Shepherd", "Capers, gherkins", "Shallot, parsley", "Dijon mustard", "Egg yolk", "Sea salt, pepper"],
    methodFR: "1. Mélanger viande et condiments. 2. Former en anneau. 3. Servir avec toast et jaune d'œuf.",
    methodEN: "1. Mix meat and condiments. 2. Form into a ring. 3. Serve with toast and egg yolk.",
  },
  {
    id: "chiot-fondue",
    img: recipeFondueImg,
    nameFR: "Fondue chinoise au Bouillon de Chiot",
    nameEN: "Puppy Broth Chinese Fondue",
    prepFR: "1 h", prepEN: "1 h",
    cookFR: "30 min", cookEN: "30 min",
    serves: 6,
    descFR: "La tradition familiale des Dubois pour les réveillons et rassemblements. Un bouillon riche préparé avec des os de chiot mijotés 24 heures.",
    descEN: "The Dubois family tradition for holiday gatherings. A rich broth prepared with puppy bones simmered for 24 hours.",
    ingredientsFR: ["Os de chiot (bouillon 24h)", "Tranches de Labrador et Golden", "Légumes de saison", "Sauces: satay, aïoli, raifort", "Pain artisanal"],
    ingredientsEN: ["Puppy bones (24h broth)", "Labrador and Golden slices", "Seasonal vegetables", "Sauces: satay, aioli, horseradish", "Artisan bread"],
    methodFR: "1. Préparer le bouillon 24h à l'avance. 2. Dresser la table avec viandes et légumes. 3. Cuire à table dans le bouillon frémissant.",
    methodEN: "1. Prepare the broth 24h in advance. 2. Set the table with meats and vegetables. 3. Cook at the table in simmering broth.",
  },
  {
    id: "bouledogue-foie-gras",
    img: recipeTerrineImg,
    nameFR: "Foie-Gras de Bouledogue en Terrine",
    nameEN: "Bulldog Foie-Gras Terrine",
    prepFR: "3 h", prepEN: "3 h",
    cookFR: "8 h", cookEN: "8 h",
    serves: 12,
    descFR: "La tradition des fêtes de la famille Dubois depuis 1990. Une terrine riche et onctueuse qui se sert avec confiture de figues et brioche toastée.",
    descEN: "The Dubois family holiday tradition since 1990. A rich and silky terrine served with fig jam and toasted brioche.",
    ingredientsFR: ["Foie de Bouledogue", "Armagnac ou Calvados", "Sel, poivre, muscade", "Confiture de figues", "Brioche artisanale"],
    ingredientsEN: ["Bulldog liver", "Armagnac or Calvados", "Salt, pepper, nutmeg", "Fig jam", "Artisan brioche"],
    methodFR: "1. Déviner et assaisonner le foie. 2. Cuire au bain-marie 8h. 3. Presser et réfrigérer 48h.",
    methodEN: "1. Devein and season the liver. 2. Cook in a water bath for 8h. 3. Press and refrigerate for 48h.",
  },
  {
    id: "akita-ragout",
    img: recipeRagoutImg,
    nameFR: "Ragoût d'Akita aux légumes racines",
    nameEN: "Akita Stew with Root Vegetables",
    prepFR: "45 min", prepEN: "45 min",
    cookFR: "3 h", cookEN: "3 h",
    serves: 4,
    descFR: "Un plat réconfortant d'inspiration japonaise, adapté aux hivers rigoureux du Québec. La viande d'Akita, noble et umami, se marie parfaitement aux légumes racines.",
    descEN: "A comforting Japanese-inspired dish, adapted to Quebec's harsh winters. Noble, umami Akita meat pairs perfectly with root vegetables.",
    ingredientsFR: ["600g d'Akita en cubes", "Carottes, panais, navet", "Pommes de terre", "Miso blanc, sauce soja", "Gingembre frais, saké"],
    ingredientsEN: ["600g cubed Akita", "Carrots, parsnips, turnip", "Potatoes", "White miso, soy sauce", "Fresh ginger, sake"],
    methodFR: "1. Saisir les cubes d'Akita. 2. Ajouter légumes et bouillon miso. 3. Mijoter 3h à feu doux.",
    methodEN: "1. Sear the Akita cubes. 2. Add vegetables and miso broth. 3. Simmer 3h over low heat.",
  },
];

export default function Recettes() {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#C8102E] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="recettes-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="recettes-title"
        >
          {t("recettes.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto"
        >
          {t("recettes.subtitle")}
        </motion.p>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {recipes.map((r) => (
              <motion.article
                key={r.id}
                variants={fadeUp}
                className="bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
                data-testid={`recipe-card-${r.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.img}
                    alt={lang === "fr" ? r.nameFR : r.nameEN}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2
                    className="text-lg font-black text-[#003087] mb-3 leading-tight"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lang === "fr" ? r.nameFR : r.nameEN}
                  </h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {t("recettes.prep")}: {lang === "fr" ? r.prepFR : r.prepEN}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {t("recettes.cook")}: {lang === "fr" ? r.cookFR : r.cookEN}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {r.serves}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {lang === "fr" ? r.descFR : r.descEN}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-2">{t("common.ingredients")}</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {(lang === "fr" ? r.ingredientsFR : r.ingredientsEN).map((ing, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#003087] mt-0.5">—</span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-bold text-[#C8102E] uppercase tracking-wider mb-2">{t("common.method")}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {lang === "fr" ? r.methodFR : r.methodEN}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
