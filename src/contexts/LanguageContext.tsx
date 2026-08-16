import { createContext, useContext, useState } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.races": "Races",
    "nav.recettes": "Recettes",
    "nav.blogue": "Blogue",
    "nav.faq": "FAQ",
    "nav.ressources": "Ressources",
    "nav.boutique": "Boutique",
    "nav.laFerme": "La Ferme",
    "nav.contact": "Contact",

    // Hero
    "hero.headline": "UNE VIANDE QUI A DU MORDANT",
    "hero.sub": "100% BIO ET QUÉBÉCOIS / CHIENS ÉLEVÉS EN PLEIN AIR",
    "hero.cta": "Pourquoi du chien ?",
    "hero.badge": "DÉLICIEUX CHIEN DEPUIS 1987",

    // Home sections
    "home.fromFarm.title": "De la ferme à l'assiette",
    "home.fromFarm.subtitle": "Mettez la table avec le meilleur rôti du Québec",
    "home.fromFarm.body": "Fermes Dubois et fils est une entreprise familiale depuis 1987. Nous offrons à nos voisins et amis la meilleure viande de chien élevé en plein air, dans le respect du terroir québécois et des traditions paysannes de Lanaudière. Contrairement aux pratiques de certains élevages intensifs, nos chiots ne reçoivent jamais d'antibiotiques ni d'hormones, et ils passent peu de temps enfermés. Ils ont accès à de vastes pâturages verts durant l'été, et sont nourris uniquement avec une alimentation biologique certifiée, sans soja.",
    "home.fromFarm.cta": "En savoir plus",
    "home.commitment.title": "Notre engagement durable",
    "home.commitment.01": "Élevés en plein air",
    "home.commitment.02": "Produits localement en circuit court",
    "home.commitment.03": "Biologiques",
    "home.commitment.04": "Frais, jamais congelés",
    "home.commitment.05": "Sans antibiotiques ni hormones",
    "home.commitment.06": "Abattus humainement",
    "home.commitment.07": "Aimés toute leur vie",
    "home.availability": "Les chiots et chiens sont disponibles à la coupe : au quart, au demi ou en entier. Os à bouillon en quantité limitée.",
    "home.availability.sub": "Contactez-nous afin de connaître la disponibilité des races.",
    "home.sadDog.title": "Ne faites pas cette tête de chien battu !",
    "home.sadDog.intro": "Si la viande de chien de Fermes Dubois et fils vous choque, sachez que :",
    "home.sadDog.bullet1": "Les chiens de la ferme ont été élevés pour nous nourrir, ils ne sont pas des animaux de compagnie.",
    "home.sadDog.bullet2": "Manger du chien est un choix personnel. Certaines personnes apprécient le goût.",
    "home.sadDog.bullet3": "La viande de chien est une source de protéines complètes, essentielles à une bonne santé.",
    "home.sadDog.bullet4": "Le foie-gras de bouledogue est une tradition familiale pour les fêtes chez les Dubois.",
    "home.sadDog.bullet5": "Les chiens sont abattus humainement, sans aucune douleur inutile.",
    "home.sadDog.bullet6": "Le chien est notre source de revenus et notre passion depuis trois générations.",
    "home.sadDog.cta": "C'est une blague ?",
    "home.quote.text": "«\u00a0Mais le chien est le meilleur ami de l'Homme\u00a0! Ils sont gentils, loyaux, affectueux, joueurs et intelligents\u00a0! L'idée que quelqu'un puisse tuer, dépecer et manger un chien — surtout mon chien — est horrible\u00a0!»",
    "home.quote.author": "— Vous, sans doute",
    "home.pork.title": "«\u00a0Viande de Porc Bio de Fermes Dubois et fils\u00a0»",
    "home.pork.sub": "Ça va mieux comme ça ?",
    "home.pork.body": "Si oui, pourquoi cela vous dérange quand il s'agit de chien et non de cochon, alors que les cochons sont reconnus comme plus intelligents ? Si vous vous sentez mal à l'aise en lisant ceci, c'est tout à fait normal. La plupart des gens n'ont pas envie de réfléchir à la question. En vérité, la plupart des animaux que vous consommez ressemblent aux chiens à bien des égards :",
    "home.animals.pigs": "Les cochons",
    "home.animals.pigs.desc": "Affectueux et dotés d'une intelligence surprenante.",
    "home.animals.cows": "Les vaches",
    "home.animals.cows.desc": "Des animaux sociaux et complexes avec une vie émotionnelle riche.",
    "home.animals.chickens": "Les poulets",
    "home.animals.chickens.desc": "Intelligents et sensibles au bien-être de leurs congénères.",
    "home.animals.sheep": "Les moutons",
    "home.animals.sheep.desc": "Paisibles, capables de détecter les signaux émotionnels humains.",
    "home.animals.fish": "Les poissons",
    "home.animals.fish.desc": "Mémoire à long terme et capacité de reconnaissance individuelle.",
    "home.animals.octopus": "Les pieuvres",
    "home.animals.octopus.desc": "Créatures remarquablement intelligentes capables de ressentir la douleur.",
    "home.change.title": "Le changement est possible !",
    "home.change.body1": "Pour la plupart des gens, il est possible de réduire ou même d'éliminer les animaux de notre alimentation.",
    "home.change.body2": "La viande canine biologique de Fermes Dubois et fils n'existe pas, mais nous espérons que vous réfléchirez à la réaction que cela a provoquée en vous. Réfléchissez à ce que cela signifierait d'ouvrir votre cœur à l'idée que les animaux dits «\u00a0destinés à la consommation\u00a0» sont tout aussi dignes d'être respectés et protégés.",
    "home.change.body3": "Aucun animal ne mérite de souffrir ou de mourir quand des alternatives existent.",
    "home.change.no": "Je ne comprends pas",
    "home.change.yes": "J'ai compris",
    "home.gibert.quote": "«\u00a0Nous aimons les animaux et nous aimons manger leurs cadavres. Nous blâmons la cruauté et nous encourageons l'élevage industriel. Nous éprouvons de l'empathie pour les chiens et les chats et nous exploitons les vaches et les cochons. Voilà la dissonance.\u00a0»",
    "home.gibert.author": "— Martin Gibert, Voir son steak comme un animal mort",

    // La Ferme
    "laferme.title": "Fermes Dubois et fils",
    "laferme.subtitle": "Trois générations de passion, de terroir et de savoir-faire québécois",
    "laferme.story.title": "Notre histoire",
    "laferme.story.body": "Tout a commencé en 1987 quand Réjean Dubois, fils d'agriculteur de Lanaudière, a décidé de se lancer dans l'élevage de chiens à Saint-Gabriel-de-Brandon. Au fil des décennies, la ferme a grandi, les pratiques se sont perfectionnées, et la passion s'est transmise de génération en génération. Aujourd'hui, Fermes Dubois et fils s'étend sur 80 hectares de pâturages verts au bord du Lac Maskinongé, dans une région réputée pour la qualité de son air et de ses eaux.",
    "laferme.rejean.name": "Réjean Dubois",
    "laferme.rejean.role": "Fondateur — né en 1945",
    "laferme.rejean.desc": "Fils d'agriculteur, Réjean a fondé la ferme à 42 ans après des années de travail dans l'agriculture traditionnelle de Lanaudière. Aujourd'hui semi-retraité, il supervise encore le programme de reproduction depuis sa chaise berçante sur la galerie.",
    "laferme.marc.name": "Marc-André Dubois",
    "laferme.marc.role": "Directeur des opérations — né en 1968",
    "laferme.marc.desc": "Fils de Réjean, Marc-André dirige les opérations quotidiennes depuis plus de 35 ans. Certifié en bien-être animal par Agriculture Québec, il est passionné par les pratiques d'élevage humaines et durables.",
    "laferme.emilie.name": "Émilie Dubois",
    "laferme.emilie.role": "Santé animale & Marketing — née en 1994",
    "laferme.emilie.desc": "Fille de Marc-André, Émilie a étudié la médecine vétérinaire à l'Université de Montréal. Elle supervise la santé des animaux, les protocoles de bien-être et gère la présence en ligne de la ferme. Elle prend la parole dans des foires agricoles régionales.",
    "laferme.process.title": "Notre processus",
    "laferme.process.insem.title": "Insémination Artificielle",
    "laferme.process.insem.desc": "Notre programme de reproduction contrôlée, établi en 1995, nous permet de sélectionner les meilleures races et de maintenir une santé optimale du cheptel. L'insémination artificielle garantit la diversité génétique et réduit le stress animal.",
    "laferme.process.elevage.title": "Élevage en Plein Air",
    "laferme.process.elevage.desc": "Nos chiens ont accès à 80 hectares de pâturages verts du printemps à l'automne. L'hiver, ils bénéficient de vastes espaces intérieurs chauffés. Jamais d'élevage en cage, jamais de confinement abusif.",
    "laferme.process.alimentation.title": "Alimentation Biologique",
    "laferme.process.alimentation.desc": "Alimentation 100% biologique certifiée Québec Vrai, sans OGM, sans soja, sans antibiotiques préventifs. Nos fournisseurs sont tous situés à moins de 150 km de la ferme.",
    "laferme.process.abattage.title": "Abattage Humanitaire",
    "laferme.process.abattage.desc": "Certifiés par le MAPAQ, nous suivons des protocoles stricts d'abattage sans douleur. Un vétérinaire est présent lors de chaque session. Nous croyons qu'un animal qui a bien vécu mérite une mort digne.",
    "laferme.address": "1452 rang Saint-Joseph, Saint-Gabriel-de-Brandon, Lanaudière, Québec J0K 2N0",

    // Races
    "races.title": "Nos Races",
    "races.subtitle": "Chaque race offre un profil gustatif unique. Contactez-nous pour la disponibilité.",
    "races.available": "Disponible",
    "races.order": "Sur commande",
    "races.yield": "Rendement",
    "races.flavor": "Profil gustatif",
    "races.cta": "Contactez-nous pour connaître la disponibilité",

    // Recettes
    "recettes.title": "Nos Recettes",
    "recettes.subtitle": "Des recettes inspirées des traditions culinaires québécoises, adaptées à la viande canine biologique.",
    "recettes.prep": "Préparation",
    "recettes.cook": "Cuisson",
    "recettes.serves": "Portions",
    "recettes.view": "Voir la recette",

    // Blogue
    "blogue.title": "Le Blogue de la Ferme",
    "blogue.subtitle": "Les dernières nouvelles de Saint-Gabriel-de-Brandon",
    "blogue.read": "Lire la suite",

    // FAQ
    "faq.title": "Foire Aux Questions",
    "faq.subtitle": "Vous avez des questions ? Nous avons des réponses (et peut-être une surprise).",

    // Ressources
    "ressources.title": "Ressources",
    "ressources.subtitle": "Pour aller plus loin dans votre réflexion",
    "ressources.reveal.title": "Ce site n'existe pas vraiment",
    "ressources.reveal.body": "Fermes Dubois et fils est un projet satirique de sensibilisation aux droits des animaux, inspiré de ferme-bernier.fr et elwooddogmeat.com. Notre objectif est simple : provoquer la même réaction que vous avez eue en découvrant ce site — et vous inviter à l'appliquer aux autres animaux que vous consommez au quotidien.",
    "ressources.dissonance.title": "La dissonance cognitive et la viande",
    "ressources.dissonance.body": "La plupart des gens aiment les animaux et détestent la cruauté. Pourtant, la production industrielle de viande implique une souffrance animale considérable. Pour gérer cette contradiction, notre cerveau développe des mécanismes de défense : nous catégorisons certains animaux comme «\u00a0nourriture\u00a0» et d'autres comme «\u00a0compagnons\u00a0». Le chien, dans la culture occidentale, appartient à la seconde catégorie — ce qui explique votre réaction.",
    "ressources.change.title": "Le changement est possible",
    "ressources.change.body": "Réduire ou éliminer les animaux de votre alimentation est possible et bénéfique — pour les animaux, pour l'environnement, et pour votre santé. Voici quelques ressources pour commencer :",
    "ressources.links.title": "Liens utiles",

    // Boutique
    "boutique.title": "La Boutique",
    "boutique.subtitle": "Nos produits sont disponibles selon les saisons et les races. Contactez-nous pour toute commande.",
    "boutique.contact": "Contacter pour disponibilité",
    "boutique.note": "Prix en dollars canadiens. Contactez-nous pour disponibilité des races et délais de livraison.",
    "boutique.cad": "CAD",

    // Contact
    "contact.title": "Contactez-Nous",
    "contact.subtitle": "Nous avons hâte d'avoir de vos nouvelles !",
    "contact.form.firstName": "Prénom",
    "contact.form.lastName": "Nom",
    "contact.form.email": "Courriel",
    "contact.form.how": "Comment avez-vous entendu parler de nous ?",
    "contact.form.how.opt1": "Bouche-à-oreille",
    "contact.form.how.opt2": "Facebook",
    "contact.form.how.opt3": "Instagram",
    "contact.form.how.opt4": "Recherche Google",
    "contact.form.how.opt5": "Autre",
    "contact.form.message": "Message",
    "contact.form.iam": "Je suis...",
    "contact.form.curious": "Curieux/se",
    "contact.form.vegan": "Végane",
    "contact.form.outraged": "Indigné/e",
    "contact.form.media": "Médias",
    "contact.form.other": "Autre",
    "contact.form.submit": "Envoyer",
    "contact.form.success": "Merci ! Nous avons bien reçu votre message.",
    "contact.follow": "Suivez la ferme",
    "contact.newsletter": "Abonnez-vous à notre infolettre",
    "contact.newsletter.submit": "S'abonner",
    "contact.address": "1452 rang Saint-Joseph\nSaint-Gabriel-de-Brandon\nLanaudière, Québec J0K 2N0",

    // Common / shared
    "common.allDogs": "Tous nos chiens sont :",
    "common.family": "La Famille Dubois",
    "common.ingredients": "Ingrédients",
    "common.method": "Méthode",
    "common.menu": "Menu",

    // Footer section headings / misc
    "footer.nav": "Navigation",
    "footer.laferme": "La Ferme",
    "footer.contact": "Contact",
    "site.name": "Fermes Dubois et fils",

    // 404
    "notfound.title": "404 — PAGE INTROUVABLE",
    "notfound.body": "Cette page n'existe pas. Retournez à l'accueil.",
    "notfound.cta": "Retour à l'accueil",

    // Footer
    "footer.tagline": "Délicieux chien depuis 1987",
    "footer.rights": "© 2026 Fermes Dubois et fils. Tous droits réservés.",
    "footer.satirical": "Ce site est un projet satirique de sensibilisation.",

    // Share
    "share.label": "Partager",
    "share.shareOn": "Partager sur",
    "share.copy": "Copier le lien",
    "share.copied": "Lien copié !",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.races": "Breeds",
    "nav.recettes": "Recipes",
    "nav.blogue": "Blog",
    "nav.faq": "FAQ",
    "nav.ressources": "Resources",
    "nav.boutique": "Shop",
    "nav.laFerme": "The Farm",
    "nav.contact": "Contact",

    // Hero
    "hero.headline": "A MEAT WITH CHARACTER",
    "hero.sub": "100% ORGANIC & QUEBECOIS / DOGS RAISED IN OPEN PASTURES",
    "hero.cta": "Why dog meat?",
    "hero.badge": "DELICIOUS DOG SINCE 1987",

    // Home sections
    "home.fromFarm.title": "From Farm to Plate",
    "home.fromFarm.subtitle": "Set the table with Quebec's finest roast",
    "home.fromFarm.body": "Fermes Dubois et fils has been a family enterprise since 1987. We offer our friends and neighbours the finest free-range dog meat, in harmony with Quebec's terroir and the farming traditions of Lanaudière. Unlike intensive factory farming, our puppies never receive antibiotics or hormones, and they spend little time confined. They have access to vast green pastures in summer, and are fed only certified organic feed, soy-free.",
    "home.fromFarm.cta": "Learn more",
    "home.commitment.title": "Our Lasting Commitment",
    "home.commitment.01": "Raised in open pastures",
    "home.commitment.02": "Locally produced, short supply chain",
    "home.commitment.03": "Certified organic",
    "home.commitment.04": "Fresh, never frozen",
    "home.commitment.05": "No antibiotics or hormones",
    "home.commitment.06": "Humanely slaughtered",
    "home.commitment.07": "Loved throughout their lives",
    "home.availability": "Dogs are available by the cut: quarter, half, or whole. Bone broth in limited supply.",
    "home.availability.sub": "Contact us to check breed availability.",
    "home.sadDog.title": "Don't give us that sad dog look!",
    "home.sadDog.intro": "If dog meat from Fermes Dubois et fils shocks you, know that:",
    "home.sadDog.bullet1": "Our farm dogs were bred for food, not as pets.",
    "home.sadDog.bullet2": "Eating dog is a personal choice. Some people love the taste.",
    "home.sadDog.bullet3": "Dog meat is a complete protein source, essential for good health.",
    "home.sadDog.bullet4": "Bulldog foie-gras is a Dubois family holiday tradition.",
    "home.sadDog.bullet5": "Dogs are humanely slaughtered without unnecessary pain.",
    "home.sadDog.bullet6": "Dog farming has been our livelihood and passion for three generations.",
    "home.sadDog.cta": "Is this a joke?",
    "home.quote.text": "\"But dogs are man's best friend! They're kind, loyal, playful and intelligent! The idea that someone could kill, skin and eat a dog — especially MY dog — is horrifying!\"",
    "home.quote.author": "— You, probably",
    "home.pork.title": "\"Organic Pork from Fermes Dubois et fils\"",
    "home.pork.sub": "Feel better about that?",
    "home.pork.body": "If so, why does it bother you when it's a dog but not a pig, when pigs are scientifically recognized as more intelligent? If you feel uncomfortable reading this, that's completely normal. Most people don't want to think about it. In truth, most animals you consume resemble dogs in many ways:",
    "home.animals.pigs": "Pigs",
    "home.animals.pigs.desc": "Affectionate and surprisingly intelligent social animals.",
    "home.animals.cows": "Cows",
    "home.animals.cows.desc": "Complex social animals with rich emotional lives.",
    "home.animals.chickens": "Chickens",
    "home.animals.chickens.desc": "Intelligent and sensitive to the well-being of their peers.",
    "home.animals.sheep": "Sheep",
    "home.animals.sheep.desc": "Peaceful, able to detect human emotional signals.",
    "home.animals.fish": "Fish",
    "home.animals.fish.desc": "Long-term memory and individual recognition capabilities.",
    "home.animals.octopus": "Octopuses",
    "home.animals.octopus.desc": "Remarkably intelligent creatures capable of feeling pain.",
    "home.change.title": "Change Is Possible!",
    "home.change.body1": "For most people, it is possible to reduce or even eliminate animals from their diet.",
    "home.change.body2": "Fermes Dubois et fils organic dog meat doesn't exist, but we hope you'll reflect on the reaction it provoked in you. Consider what it would mean to open your heart to the idea that so-called \"food animals\" are equally deserving of respect and protection.",
    "home.change.body3": "No animal deserves to suffer or die when alternatives exist.",
    "home.change.no": "I don't understand",
    "home.change.yes": "I understand",
    "home.gibert.quote": "\"We love animals and we love eating their corpses. We condemn cruelty and support factory farming. We empathize with dogs and cats and exploit cows and pigs. That is the dissonance.\"",
    "home.gibert.author": "— Martin Gibert, Seeing Your Steak as a Dead Animal",

    // La Ferme
    "laferme.title": "Fermes Dubois et fils",
    "laferme.subtitle": "Three generations of passion, terroir, and Quebec craftsmanship",
    "laferme.story.title": "Our Story",
    "laferme.story.body": "It all began in 1987 when Réjean Dubois, son of a Lanaudière farmer, decided to venture into dog farming in Saint-Gabriel-de-Brandon. Over the decades, the farm grew, practices were refined, and the passion was passed from generation to generation. Today, Fermes Dubois et fils spans 80 hectares of green pastures near Lac Maskinongé, in a region renowned for the quality of its air and water.",
    "laferme.rejean.name": "Réjean Dubois",
    "laferme.rejean.role": "Founder — born 1945",
    "laferme.rejean.desc": "Son of a farmer, Réjean founded the farm at 42 after years working in traditional Lanaudière agriculture. Now semi-retired, he still oversees the breeding program from his rocking chair on the porch.",
    "laferme.marc.name": "Marc-André Dubois",
    "laferme.marc.role": "Operations Director — born 1968",
    "laferme.marc.desc": "Réjean's son, Marc-André has run daily operations for over 35 years. Certified in animal welfare by Agriculture Québec, he is passionate about humane and sustainable farming practices.",
    "laferme.emilie.name": "Émilie Dubois",
    "laferme.emilie.role": "Animal Health & Marketing — born 1994",
    "laferme.emilie.desc": "Marc-André's daughter, Émilie studied veterinary medicine at the Université de Montréal. She oversees animal health, welfare protocols, and manages the farm's online presence. She speaks at regional agricultural fairs.",
    "laferme.process.title": "Our Process",
    "laferme.process.insem.title": "Artificial Insemination",
    "laferme.process.insem.desc": "Our controlled breeding program, established in 1995, allows us to select the best breeds and maintain optimal herd health. Artificial insemination ensures genetic diversity and reduces animal stress.",
    "laferme.process.elevage.title": "Free-Range Farming",
    "laferme.process.elevage.desc": "Our dogs have access to 80 hectares of green pastures from spring to fall. In winter, they enjoy large heated indoor spaces. No cage farming, no excessive confinement.",
    "laferme.process.alimentation.title": "Organic Feeding",
    "laferme.process.alimentation.desc": "100% certified organic feed (Québec Vrai), non-GMO, soy-free, no preventive antibiotics. All our suppliers are within 150 km of the farm.",
    "laferme.process.abattage.title": "Humane Slaughter",
    "laferme.process.abattage.desc": "Certified by MAPAQ, we follow strict pain-free slaughter protocols. A veterinarian is present at every session. We believe an animal that lived well deserves a dignified death.",
    "laferme.address": "1452 rang Saint-Joseph, Saint-Gabriel-de-Brandon, Lanaudière, Québec J0K 2N0",

    // Races
    "races.title": "Our Breeds",
    "races.subtitle": "Each breed offers a unique taste profile. Contact us for availability.",
    "races.available": "Available",
    "races.order": "On order",
    "races.yield": "Yield",
    "races.flavor": "Taste profile",
    "races.cta": "Contact us to check availability",

    // Recettes
    "recettes.title": "Our Recipes",
    "recettes.subtitle": "Recipes inspired by Quebec culinary traditions, adapted to organic dog meat.",
    "recettes.prep": "Prep",
    "recettes.cook": "Cook",
    "recettes.serves": "Serves",
    "recettes.view": "View recipe",

    // Blogue
    "blogue.title": "The Farm Blog",
    "blogue.subtitle": "Latest news from Saint-Gabriel-de-Brandon",
    "blogue.read": "Read more",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "You have questions? We have answers (and maybe a surprise).",

    // Ressources
    "ressources.title": "Resources",
    "ressources.subtitle": "Going further in your reflection",
    "ressources.reveal.title": "This site doesn't really exist",
    "ressources.reveal.body": "Fermes Dubois et fils is a satirical animal rights awareness project, inspired by ferme-bernier.fr and elwooddogmeat.com. Our goal is simple: to provoke the same reaction you had discovering this site — and invite you to apply it to the other animals you consume daily.",
    "ressources.dissonance.title": "Cognitive dissonance and meat",
    "ressources.dissonance.body": "Most people love animals and hate cruelty. Yet industrial meat production involves considerable animal suffering. To manage this contradiction, our brain develops defense mechanisms: we categorize some animals as \"food\" and others as \"companions.\" Dogs, in Western culture, belong to the second category — which explains your reaction.",
    "ressources.change.title": "Change is possible",
    "ressources.change.body": "Reducing or eliminating animals from your diet is possible and beneficial — for animals, for the environment, and for your health. Here are some resources to get started:",
    "ressources.links.title": "Useful links",

    // Boutique
    "boutique.title": "The Shop",
    "boutique.subtitle": "Our products are available seasonally by breed. Contact us for any order.",
    "boutique.contact": "Contact for availability",
    "boutique.note": "Prices in Canadian dollars. Contact us for breed availability and delivery times.",
    "boutique.cad": "CAD",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "We can't wait to hear from you!",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.how": "How did you hear about us?",
    "contact.form.how.opt1": "Word of mouth",
    "contact.form.how.opt2": "Facebook",
    "contact.form.how.opt3": "Instagram",
    "contact.form.how.opt4": "Google Search",
    "contact.form.how.opt5": "Other",
    "contact.form.message": "Message",
    "contact.form.iam": "I am...",
    "contact.form.curious": "Curious",
    "contact.form.vegan": "Vegan",
    "contact.form.outraged": "Outraged",
    "contact.form.media": "Media",
    "contact.form.other": "Other",
    "contact.form.submit": "Send",
    "contact.form.success": "Thank you! We've received your message.",
    "contact.follow": "Follow the farm",
    "contact.newsletter": "Subscribe to our newsletter",
    "contact.newsletter.submit": "Subscribe",
    "contact.address": "1452 rang Saint-Joseph\nSaint-Gabriel-de-Brandon\nLanaudière, Québec J0K 2N0",

    // Common / shared
    "common.allDogs": "All our dogs are:",
    "common.family": "The Dubois Family",
    "common.ingredients": "Ingredients",
    "common.method": "Method",
    "common.menu": "Menu",

    // Footer section headings / misc
    "footer.nav": "Navigation",
    "footer.laferme": "The Farm",
    "footer.contact": "Contact",
    "site.name": "Fermes Dubois et fils",

    // 404
    "notfound.title": "404 — PAGE NOT FOUND",
    "notfound.body": "This page does not exist. Return to the home page.",
    "notfound.cta": "Back to home",

    // Footer
    "footer.tagline": "Delicious dog since 1987",
    "footer.rights": "© 2026 Fermes Dubois et fils. All rights reserved.",
    "footer.satirical": "This site is a satirical awareness project.",

    // Share
    "share.label": "Share",
    "share.shareOn": "Share on",
    "share.copy": "Copy link",
    "share.copied": "Link copied!",
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["fr"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
