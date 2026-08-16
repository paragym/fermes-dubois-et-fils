import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQ() {
  const { t, lang } = useLanguage();

  const faqs = [
    {
      id: "legal",
      qFR: "Est-ce légal au Québec de vendre de la viande de chien ?",
      qEN: "Is it legal to sell dog meat in Quebec?",
      aFR: "Excellente question ! Nous vous invitons à consulter l'article 12.3 du règlement sur la salubrité des aliments du MAPAQ, sous-section canidés, paragraphe 7, alinéa b). En attendant, notre équipe juridique travaille d'arrache-pied pour s'assurer que chaque coupe de Labrador est parfaitement conforme aux normes en vigueur. (Psst : lisez la question numéro 9.)",
      aEN: "Great question! We invite you to consult Article 12.3 of MAPAQ's food safety regulations, subsection canids, paragraph 7, subsection b). Meanwhile, our legal team is working hard to ensure every Labrador cut complies with current standards. (Psst: read question #9.)",
    },
    {
      id: "treatment",
      qFR: "Comment sont traités vos chiens ?",
      qEN: "How are your dogs treated?",
      aFR: "Avec beaucoup d'amour, de soins vétérinaires réguliers et de grands espaces verts. Nos chiens vivent sur 80 hectares de pâturages en Lanaudière, avec accès à des abris chauffés en hiver. Émilie Dubois, notre vétérinaire maison, surveille la santé de chaque animal quotidiennement.",
      aEN: "With lots of love, regular veterinary care and wide open spaces. Our dogs live on 80 hectares of pasture in Lanaudière, with access to heated shelters in winter. Émilie Dubois, our in-house vet, monitors each animal's health daily.",
    },
    {
      id: "breeds",
      qFR: "Quelles races sont disponibles actuellement ?",
      qEN: "Which breeds are currently available?",
      aFR: "Nous proposons régulièrement : Labrador, Berger Allemand, Husky Sibérien, Golden Retriever, Malamute de l'Alaska et Saint-Bernard. Le Border Collie et l'Akita sont disponibles sur commande seulement. Consultez notre page Races pour plus de détails.",
      aEN: "We regularly offer: Labrador, German Shepherd, Siberian Husky, Golden Retriever, Alaskan Malamute, and Saint Bernard. Border Collie and Akita are available on order only. See our Breeds page for more details.",
    },
    {
      id: "why-dog",
      qFR: "Pourquoi du chien et non du bœuf ou du porc ?",
      qEN: "Why dog meat and not beef or pork?",
      aFR: "La viande de chien offre un profil nutritionnel remarquable : riche en protéines complètes, faible en gras saturés (surtout les races actives comme le Husky), et élevée en acides aminés essentiels. De plus, l'empreinte carbone d'un Labrador est considérablement inférieure à celle d'un bœuf. (Mais lisez la question numéro 9.)",
      aEN: "Dog meat offers a remarkable nutritional profile: high in complete proteins, low in saturated fats (especially active breeds like Husky), and high in essential amino acids. Plus, a Labrador's carbon footprint is considerably lower than a cow's. (But read question #9.)",
    },
    {
      id: "visit",
      qFR: "Puis-je visiter Fermes Dubois et fils ?",
      qEN: "Can I visit Fermes Dubois et fils?",
      aFR: "Nous organisons des journées portes ouvertes deux fois par année, au printemps et à l'automne. Inscrivez-vous à notre infolettre pour être avisé des prochaines dates. Les visites individuelles sont également possibles sur rendez-vous.",
      aEN: "We organize open house days twice a year, in spring and fall. Sign up for our newsletter to be notified of upcoming dates. Individual visits are also possible by appointment.",
    },
    {
      id: "order",
      qFR: "Comment passer une commande ?",
      qEN: "How do I place an order?",
      aFR: "Écrivez-nous via le formulaire de contact. Nous répondons du lundi au vendredi et vous indiquerons les disponibilités selon la saison et la race souhaitée.",
      aEN: "Write to us via the contact form. We reply Monday to Friday and will let you know availability by season and desired breed.",
    },
    {
      id: "taste",
      qFR: "Quel est le goût de la viande de chien ?",
      qEN: "What does dog meat taste like?",
      aFR: "Certains clients décrivent une saveur proche du bœuf doux, d'autres y perçoivent des notes de gibier léger. Tout dépend de la race, de l'alimentation et du mode de cuisson. Notre Labrador rôti est souvent décrit comme «\u00a0le meilleur rôti qu'ils aient jamais mangé\u00a0» — avant qu'ils sachent ce que c'était.",
      aEN: "Some customers describe a flavour close to mild beef, others perceive notes of light game. It depends on the breed, diet, and cooking method. Our roasted Labrador is often described as 'the best roast they've ever had' — before they knew what it was.",
    },
    {
      id: "organic",
      qFR: "La ferme est-elle certifiée biologique ?",
      qEN: "Is the farm certified organic?",
      aFR: "Oui, nous sommes fièrement certifiés par Québec Vrai depuis 2003. Toute notre alimentation animale provient de fournisseurs biologiques locaux (moins de 150 km), sans OGM, sans soja, sans antibiotiques préventifs.",
      aEN: "Yes, we have been proudly certified by Québec Vrai since 2003. All our animal feed comes from local organic suppliers (less than 150 km), non-GMO, soy-free, no preventive antibiotics.",
    },
    {
      id: "joke",
      qFR: "Fermes Dubois et fils est-elle une véritable ferme ?",
      qEN: "Is Fermes Dubois et fils a real farm?",
      aFR: "Non. Fermes Dubois et fils n'existe pas. Ce site est un projet satirique de sensibilisation aux droits des animaux, inspiré de ferme-bernier.fr et elwooddogmeat.com. Notre objectif est de provoquer en vous la même réaction de choc et de dégoût que vous avez peut-être ressentie — et de vous inviter à l'appliquer aux autres animaux que vous consommez quotidiennement. Si l'idée de manger du chien vous choque, demandez-vous pourquoi vous n'éprouvez pas la même chose pour les cochons, les vaches ou les poulets — des animaux tout aussi intelligents et sensibles. Merci de nous avoir lus jusqu'ici.",
      aEN: "No. Fermes Dubois et fils does not exist. This site is a satirical animal rights awareness project, inspired by ferme-bernier.fr and elwooddogmeat.com. Our goal is to provoke in you the same shock and disgust you may have felt — and invite you to apply it to the other animals you consume daily. If the idea of eating dog shocks you, ask yourself why you don't feel the same about pigs, cows, or chickens — animals that are equally intelligent and sentient. Thank you for reading this far.",
    },
    {
      id: "now",
      qFR: "Que puis-je faire maintenant ?",
      qEN: "What can I do now?",
      aFR: "Beaucoup de choses ! Vous pouvez réduire ou éliminer les produits d'origine animale de votre alimentation, en commençant par un jour végane par semaine. Vous pouvez aussi vous informer davantage sur les droits des animaux, partager ce site avec des amis, ou simplement y réfléchir. Consultez notre page Ressources pour des liens utiles.",
      aEN: "Lots of things! You can reduce or eliminate animal products from your diet, starting with one vegan day a week. You can also learn more about animal rights, share this site with friends, or simply reflect on it. Check our Resources page for helpful links.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <section className="bg-[#1a1a2e] text-white py-12 sm:py-16 md:py-20 px-5 sm:px-6 text-center" data-testid="faq-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif" }}
          data-testid="faq-title"
        >
          {t("faq.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto italic"
        >
          {t("faq.subtitle")}
        </motion.p>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Accordion type="single" collapsible className="space-y-2" data-testid="faq-accordion">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 bg-white px-0"
                  data-testid={`faq-item-${faq.id}`}
                >
                  <AccordionTrigger
                    className="px-6 py-5 text-left font-bold text-[#003087] hover:text-[#C8102E] hover:no-underline text-sm uppercase tracking-wide"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                    data-testid={`faq-trigger-${faq.id}`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className="text-2xl font-black text-[#C8102E] flex-shrink-0 leading-none"
                        style={{ fontFamily: "'Oswald', sans-serif" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {lang === "fr" ? faq.qFR : faq.qEN}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className={`px-6 pb-6 text-gray-700 leading-relaxed text-sm ${
                      faq.id === "joke" ? "bg-blue-50 border-l-4 border-[#003087] text-[#003087] font-medium" : ""
                    }`}
                    data-testid={`faq-content-${faq.id}`}
                  >
                    {lang === "fr" ? faq.aFR : faq.aEN}
                    {faq.id === "joke" && (
                      <div className="mt-4 flex gap-3 flex-wrap">
                        <Link href="/ressources">
                          <button
                            data-testid="faq-ressources-btn"
                            className="bg-[#003087] text-white px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#C8102E] transition-colors"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                          >
                            {t("nav.ressources")}
                          </button>
                        </Link>
                      </div>
                    )}
                    {faq.id === "now" && (
                      <div className="mt-4">
                        <Link href="/ressources">
                          <button
                            data-testid="faq-now-btn"
                            className="bg-[#C8102E] text-white px-4 py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#003087] transition-colors"
                            style={{ fontFamily: "'Oswald', sans-serif" }}
                          >
                            {t("nav.ressources")}
                          </button>
                        </Link>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
