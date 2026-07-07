/* =============================================================================
   MoonSwatch Custom — Fichier de données central
   -----------------------------------------------------------------------------
   TOUT ce qui est éditable à la main est ici : les 24 modèles + les options
   de personnalisation. Aucun autre fichier n'a besoin d'être touché pour :
     • ajouter/retirer un modèle           -> tableau `montres`
     • changer une couleur de boîtier       -> `optionsBoitier`
     • changer un matériau/couleur bracelet -> `optionsBracelet`
     • changer une couleur de lunette       -> `optionsLunette`
     • brancher une vraie photo             -> champs `image*`

   IMAGES : tant qu'un fichier image n'existe pas, un placeholder propre est
   affiché automatiquement (montre stylisée pour les modèles, pastille de
   couleur pour les options). Déposez vos photos dans /images en gardant le
   nom indiqué — rien d'autre à modifier.

     Modèles  :  images/<id>-originale.jpg          (photo du modèle de base, catalogue + fiche)
                 images/<id>-custom-caoutchouc.jpg  (rendu custom bracelet caoutchouc)
                 images/<id>-custom-acier.jpg       (rendu custom bracelet acier)
     Options  :  champ `image` de chaque option (boîtier / bracelet / lunette)
   ============================================================================= */

/* -------- AFFICHAGE DES PHOTOS ----------------------------------------------
   FALSE  -> partout, on affiche les montres stylisées (placeholders propres).
   TRUE   -> on affiche vos vraies photos (catalogue, fiche, configurateur).
   Passez à TRUE une seule fois, après avoir déposé vos images dans /images.   */
export const afficherPhotos = true;

/* -------- AXE 1 — BOÎTIER (couleur / finition) ------------------------------ */
export const optionsBoitier = {
  label: "Boîtier",
  sousTitre: "Couleur / finition",
  choices: [
    { id: "argent",  nom: "Argent",   hex: "#cbc8c1", image: "images/pilote/mars-argent.jpg" },
    { id: "or-rose", nom: "Or rose",  hex: "#d9a98c", image: "images/pilote/mars-or-rose.jpg" },
    { id: "or-jaune",nom: "Or jaune", hex: "#d4af45", image: "images/pilote/mars-or-jaune.jpg" },
    { id: "noir",    nom: "Noir",     hex: "#1b1b1b", image: "images/pilote/mars-noir.jpg" },
  ],
};

/* -------- AXE 2 — BRACELET (matériau + couleur) -----------------------------
   Chaque matériau a sa propre liste de couleurs. Éditez librement.            */
export const optionsBracelet = {
  label: "Bracelet",
  sousTitre: "Matériau + couleur",
  materiaux: [
    {
      id: "caoutchouc", nom: "Caoutchouc",
      couleurs: [
        { id: "noir",  nom: "Noir",  hex: "#1b1b1b", image: "images/options/bracelet-caoutchouc-noir.jpg" },
        { id: "blanc", nom: "Blanc", hex: "#e8e4db", image: "images/options/bracelet-caoutchouc-blanc.jpg" },
        { id: "bleu",  nom: "Bleu",  hex: "#2c477a", image: "images/options/bracelet-caoutchouc-bleu.jpg" },
        { id: "rouge", nom: "Rouge", hex: "#9b2f2f", image: "images/options/bracelet-caoutchouc-rouge.jpg" },
        { id: "vert",  nom: "Vert",  hex: "#2f6b43", image: "images/options/bracelet-caoutchouc-vert.jpg" },
        { id: "jaune", nom: "Jaune", hex: "#e8c63a", image: "images/options/bracelet-caoutchouc-jaune.jpg" },
      ],
    },
    {
      id: "acier", nom: "Acier",
      couleurs: [
        { id: "argent",  nom: "Argent",   hex: "#c9c6bf", image: "images/options/bracelet-acier-argent.jpg" },
        { id: "or-rose", nom: "Or rose",  hex: "#d9a98c", image: "images/options/bracelet-acier-or-rose.jpg" },
        { id: "or-jaune",nom: "Or jaune", hex: "#d4af45", image: "images/options/bracelet-acier-or-jaune.jpg" },
        { id: "noir",    nom: "Noir",     hex: "#1b1b1b", image: "images/options/bracelet-acier-noir.jpg" },
      ],
    },
    {
      id: "cuir", nom: "Cuir",
      couleurs: [
        { id: "noir",      nom: "Noir",      hex: "#1b1b1b", image: "images/options/bracelet-cuir-noir.jpg" },
        { id: "brun",      nom: "Brun",      hex: "#5a3d2a", image: "images/options/bracelet-cuir-brun.jpg" },
        { id: "fauve",     nom: "Fauve",     hex: "#8a6f52", image: "images/options/bracelet-cuir-fauve.jpg" },
        { id: "bleu-nuit", nom: "Bleu nuit", hex: "#26324a", image: "images/options/bracelet-cuir-bleu-nuit.jpg" },
      ],
    },
  ],
};

/* -------- AXE 3 — LUNETTE / ENTOURAGE ---------------------------------------
   Les lunettes disponibles DÉPENDENT du boîtier choisi.
   • `types`     = toutes les lunettes possibles (nom + couleurs d'affichage).
                   `texte` = couleur de l'inscription "Tachymètre".
   • `parBoitier`= pour chaque boîtier, la liste (ordonnée) des lunettes
                   réellement proposées.
   L'image est déduite automatiquement : images/options/lunette-<id>-sur-<boitier>.jpg
   Pour proposer une lunette sur un boîtier : ajoutez son id dans `parBoitier`
   ET déposez la photo correspondante. Pour ajouter une toute nouvelle lunette :
   ajoutez-la dans `types` puis dans le(s) boîtier(s) voulu(s).                 */
export const optionsLunette = {
  label: "Lunette",
  sousTitre: "Selon le boîtier choisi",
  types: [
    { id: "noir",              nom: "Noir · écriture blanc · tachy blanc",       hex: "#1b1b1b", texte: "#ffffff" },
    { id: "noir-tachy-orange", nom: "Noir · écriture blanc · tachy orange",      hex: "#1b1b1b", texte: "#ff7a1a" },
    { id: "noir-or-jaune",     nom: "Noir · écriture or jaune · tachy or jaune", hex: "#1b1b1b", texte: "#d4af45" },
    { id: "noir-or-rose",      nom: "Noir · écriture or rose · tachy or rose",   hex: "#1b1b1b", texte: "#d9a98c" },
    { id: "argent",            nom: "Argent · écriture noir · tachy noir",       hex: "#c9c6bf", texte: "#1b1b1b" },
    { id: "blanc",             nom: "Blanc · écriture noir · tachy noir",        hex: "#e8e4db", texte: "#1b1b1b" },
    { id: "rouge",             nom: "Rouge · écriture blanc · tachy blanc",      hex: "#9b2f2f", texte: "#ffffff" },
    { id: "vert",              nom: "Vert · écriture blanc · tachy blanc",       hex: "#2f6b43", texte: "#ffffff" },
    { id: "bleu",              nom: "Bleu · écriture blanc · tachy blanc",       hex: "#2c477a", texte: "#ffffff" },
    { id: "bleu-tachy-orange", nom: "Bleu · écriture blanc · tachy orange",      hex: "#2c477a", texte: "#ff7a1a" },
  ],
  parBoitier: {
    "argent":   ["noir", "noir-tachy-orange", "noir-or-jaune", "noir-or-rose", "argent", "rouge", "vert", "bleu", "bleu-tachy-orange"],
    "or-jaune": ["noir", "noir-or-jaune", "vert", "bleu"],
    "or-rose":  ["noir-tachy-orange", "noir-or-rose", "rouge", "vert"],
    "noir":     ["noir", "noir-tachy-orange", "noir-or-jaune", "noir-or-rose", "blanc", "bleu"],
  },
};

/* -------- LES 24 MODÈLES DE BASE --------------------------------------------
   `accent`  = couleur thème du modèle (planète / univers).
   `famille` = sert au filtre du catalogue : "planetes" | "lunaire" | "terre".
   image*    = chemins des photos (placeholder tant que le fichier n'existe pas).
   ----------------------------------------------------------------------------- */
const img = (id) => ({
  imageOriginale:        `images/${id}-originale.jpg`,
  imageCustomCaoutchouc: `images/${id}-custom-caoutchouc.jpg`,
  imageCustomAcier:      `images/${id}-custom-acier.jpg`,
});

export const montres = [
  { id: "sun",            nom: "Mission to the Sun",            famille: "planetes", accent: "#f0b429", description: "L'astre solaire — boîtier jaune éclatant.",            ...img("sun") },
  { id: "mercury",        nom: "Mission to Mercury",            famille: "planetes", accent: "#8f8f8f", description: "Gris minéral, la plus proche du Soleil.",              ...img("mercury") },
  { id: "venus",          nom: "Mission to Venus",              famille: "planetes", accent: "#e2a6b4", description: "Rose poudré, l'étoile du berger.",                    ...img("venus") },
  { id: "earth",          nom: "Mission on Earth",              famille: "terre",    accent: "#3f9b6e", description: "Vert profond, notre planète bleue.",                  ...img("earth") },
  { id: "moon",           nom: "Mission to the Moon",           famille: "lunaire",  accent: "#b8b2a6", description: "Le noir lunaire, hommage à la Speedmaster.",          ...img("moon") },
  { id: "mars",           nom: "Mission to Mars",               famille: "planetes", accent: "#c0392b", description: "Rouge brûlant, la planète guerrière.",               ...img("mars") },
  { id: "jupiter",        nom: "Mission to Jupiter",            famille: "planetes", accent: "#c8a06a", description: "Beige sable, la géante gazeuse.",                     ...img("jupiter") },
  { id: "saturn",         nom: "Mission to Saturn",             famille: "planetes", accent: "#9c7a4f", description: "Brun terre, ses anneaux d'ambre.",                    ...img("saturn") },
  { id: "uranus",         nom: "Mission to Uranus",             famille: "planetes", accent: "#5ec8c8", description: "Cyan glacé, la planète inclinée.",                    ...img("uranus") },
  { id: "neptune",        nom: "Mission to Neptune",            famille: "planetes", accent: "#3a6ea5", description: "Bleu profond, le géant des glaces.",                  ...img("neptune") },
  { id: "pluto",          nom: "Mission to Pluto",              famille: "planetes", accent: "#9b4b58", description: "Crème et bordeaux, la planète naine.",                ...img("pluto") },
  { id: "moonphase-new",  nom: "Mission to the Moonphase – New Moon",  famille: "lunaire", accent: "#2d3a5a", description: "Nouvelle lune, noir intégral et phase de lune.", ...img("moonphase-new") },
  { id: "moonphase-full", nom: "Mission to the Moonphase – Full Moon", famille: "lunaire", accent: "#c4cbd6", description: "Pleine lune, blanc lumineux et complication.",   ...img("moonphase-full") },
  { id: "earth-lava",     nom: "Mission on Earth – Lava",       famille: "terre",    accent: "#d4502a", description: "Orange incandescent, roche en fusion.",               ...img("earth-lava") },
  { id: "earth-polar",    nom: "Mission on Earth – Polar Lights", famille: "terre",  accent: "#2fbf8f", description: "Vert aurore, les lumières polaires.",                 ...img("earth-polar") },
  { id: "earth-desert",   nom: "Mission on Earth – Desert",     famille: "terre",    accent: "#b0a48e", description: "Taupe désertique, l'esprit des dunes.",               ...img("earth-desert") },
  { id: "earthphase",     nom: "Mission to Earthphase",         famille: "lunaire",  accent: "#7e8aa3", description: "Phase de Terre, complication poétique inversée.",     ...img("earthphase") },
  { id: "m1965",          nom: "MoonSwatch 1965",               famille: "terre",    accent: "#b0a89a", description: "Esprit vintage de la conquête spatiale.",             ...img("m1965") },
  { id: "pink-moonphase", nom: "Mission to the Pink Moonphase", famille: "lunaire",  accent: "#e58aab", description: "Lune rose, douceur et phase de lune.",                ...img("pink-moonphase") },
  { id: "earthphase-gold-dec", nom: "Mission to Earthphase – Moonshine Gold · Décembre",  famille: "lunaire", accent: "#6a7fae", description: "Édition Moonshine Gold, série mensuelle — Décembre.",  ...img("earthphase-gold-dec") },
  { id: "earthphase-gold-nov", nom: "Mission to Earthphase – Moonshine Gold · Novembre",  famille: "lunaire", accent: "#2c477a", description: "Édition Moonshine Gold, série mensuelle — Novembre.",  ...img("earthphase-gold-nov") },
  { id: "earthphase-gold-oct", nom: "Mission to Earthphase – Moonshine Gold · Octobre",   famille: "lunaire", accent: "#2c477a", description: "Édition Moonshine Gold, série mensuelle — Octobre.",   ...img("earthphase-gold-oct") },
  { id: "earthphase-gold-sep", nom: "Mission to Earthphase – Moonshine Gold · Septembre", famille: "lunaire", accent: "#2c477a", description: "Édition Moonshine Gold, série mensuelle — Septembre.", ...img("earthphase-gold-sep") },
  { id: "earthphase-gold-aou", nom: "Mission to Earthphase – Moonshine Gold · Août",      famille: "lunaire", accent: "#2c477a", description: "Édition Moonshine Gold, série mensuelle — Août.",      ...img("earthphase-gold-aou") },
];

/* -------- MODÈLES PRÊTS (onglet « Sélections ») -----------------------------
   Compositions déjà faites, proposées telles quelles (le visiteur peut ensuite
   les personnaliser). Chaque entrée = un modèle + un boîtier + un bracelet
   (matière + couleur) + une lunette DISPONIBLE sur ce boîtier.
   Pour en ajouter/retirer : copiez une ligne et changez les valeurs.        */
export const modelesPrets = [
  { id: "eclipse-totale",     nom: "Éclipse Totale",     modeleId: "moon",           boitierId: "noir",     braceletMatId: "acier",      braceletCouleurId: "noir",     lunetteId: "noir-tachy-orange" },
  { id: "signature-or",       nom: "Signature Or",       modeleId: "sun",            boitierId: "or-jaune", braceletMatId: "acier",      braceletCouleurId: "or-jaune", lunetteId: "noir-or-jaune" },
  { id: "planete-rouge",      nom: "Planète Rouge",      modeleId: "mars",           boitierId: "argent",   braceletMatId: "acier",      braceletCouleurId: "argent",   lunetteId: "rouge" },
  { id: "bleu-profond",       nom: "Bleu Profond",       modeleId: "neptune",        boitierId: "argent",   braceletMatId: "acier",      braceletCouleurId: "argent",   lunetteId: "bleu-tachy-orange" },
  { id: "nuit-argentee",      nom: "Nuit Argentée",      modeleId: "mercury",        boitierId: "argent",   braceletMatId: "cuir",       braceletCouleurId: "noir",     lunetteId: "noir" },
  { id: "rose-poudre",        nom: "Rose Poudré",        modeleId: "venus",          boitierId: "or-rose",  braceletMatId: "acier",      braceletCouleurId: "or-rose",  lunetteId: "noir-or-rose" },
  { id: "terre-vive",         nom: "Terre Vive",         modeleId: "earth",          boitierId: "argent",   braceletMatId: "caoutchouc", braceletCouleurId: "vert",     lunetteId: "vert" },
  { id: "geante-ambre",       nom: "Géante Ambre",       modeleId: "jupiter",        boitierId: "or-jaune", braceletMatId: "acier",      braceletCouleurId: "or-jaune", lunetteId: "noir" },
  { id: "anneaux-or",         nom: "Anneaux d'Or",       modeleId: "saturn",         boitierId: "or-jaune", braceletMatId: "cuir",       braceletCouleurId: "brun",     lunetteId: "vert" },
  { id: "glace-cyan",         nom: "Glace Cyan",         modeleId: "uranus",         boitierId: "argent",   braceletMatId: "caoutchouc", braceletCouleurId: "bleu",     lunetteId: "bleu" },
  { id: "naine-bordeaux",     nom: "Naine Bordeaux",     modeleId: "pluto",          boitierId: "or-rose",  braceletMatId: "acier",      braceletCouleurId: "or-rose",  lunetteId: "rouge" },
  { id: "nouvelle-lune",      nom: "Nouvelle Lune",      modeleId: "moonphase-new",  boitierId: "noir",     braceletMatId: "acier",      braceletCouleurId: "noir",     lunetteId: "noir" },
  { id: "pleine-lune",        nom: "Pleine Lune",        modeleId: "moonphase-full", boitierId: "argent",   braceletMatId: "acier",      braceletCouleurId: "argent",   lunetteId: "blanc" },
  { id: "lave-incandescente", nom: "Lave Incandescente", modeleId: "earth-lava",     boitierId: "noir",     braceletMatId: "caoutchouc", braceletCouleurId: "rouge",    lunetteId: "noir-tachy-orange" },
  { id: "aurore-polaire",     nom: "Aurore Polaire",     modeleId: "earth-polar",    boitierId: "argent",   braceletMatId: "caoutchouc", braceletCouleurId: "vert",     lunetteId: "vert" },
  { id: "esprit-desert",      nom: "Esprit du Désert",   modeleId: "earth-desert",   boitierId: "or-jaune", braceletMatId: "cuir",       braceletCouleurId: "fauve",    lunetteId: "noir" },
  { id: "phase-terrestre",    nom: "Phase Terrestre",    modeleId: "earthphase",     boitierId: "noir",     braceletMatId: "acier",      braceletCouleurId: "noir",     lunetteId: "bleu" },
  { id: "heritage-1965",      nom: "Héritage 1965",      modeleId: "m1965",          boitierId: "argent",   braceletMatId: "cuir",       braceletCouleurId: "brun",     lunetteId: "noir" },
  { id: "lune-rose",          nom: "Lune Rose",          modeleId: "pink-moonphase", boitierId: "or-rose",  braceletMatId: "acier",      braceletCouleurId: "or-rose",  lunetteId: "noir-tachy-orange" },
];

export default { afficherPhotos, optionsBoitier, optionsBracelet, optionsLunette, montres, modelesPrets };
