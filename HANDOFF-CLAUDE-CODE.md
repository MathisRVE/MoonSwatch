# Handoff complet — MoonSwatch Custom
## À remettre à Claude Code pour continuer le développement

---

## 1. Ce que c'est

Site vitrine + configurateur de personnalisation pour MoonSwatch. Le visiteur :
1. Choisit un modèle parmi 24.
2. Règle 3 axes : boîtier / bracelet / lunette.
3. Clique « Demander » → Instagram @Mat_698RVE s'ouvre + le récapitulatif est copié.

Le site est **100 % statique** (HTML + CSS + JS, aucun back-end, aucune base de données).

---

## 2. Structure des fichiers

```
.
├── index.html                     ← point d'entrée (= copie de la page principale)
├── MoonSwatch Custom.dc.html      ← source principale (template + logique)
├── support.js                     ← moteur de rendu DC (NE PAS MODIFIER)
├── netlify.toml                   ← config déploiement Netlify (sans build)
├── data/
│   └── watches.js                 ← ⭐ TOUTES les données éditables
├── images/
│   ├── PHOTOS-A-DEPOSER.md        ← guide nommage des photos
│   └── options/
│       └── À-LIRE.txt
├── README.md                      ← guide utilisateur (déploiement, photos)
├── HANDOFF-configurateur-calques.md ← guide rendu réaliste (calques PNG)
└── HANDOFF-CLAUDE-CODE.md         ← ce fichier
```

> `index.html` et `MoonSwatch Custom.dc.html` ont le même contenu.
> Éditez la page principale, puis : `cp "MoonSwatch Custom.dc.html" index.html`

---

## 3. Comment lire la page principale

Le fichier `.dc.html` contient deux blocs :

### a) Template (`<x-dc>` … `</x-dc>`)
Markup HTML avec des trous `{{ variable }}`. Pas d'expressions JS dans les trous.
Contrôles de flux : `<sc-if value="{{ bool }}">` et `<sc-for list="{{ array }}" as="item">`.

### b) Logique (`<script data-dc-script>`)
Classe `Component extends DCLogic` (React class component sans `render()`).
- `state` = état courant (vue active, sélections).
- `renderVals()` = retourne un objet plat dont les clés alimentent le template.
- `React.createElement(...)` uniquement pour les éléments animés/conditionnels
  qui ne peuvent pas s'exprimer en template (ex. la montre stylisée).

---

## 4. Navigation (SPA sans routeur)

La vue active est dans `this.state.view` :
- `"accueil"` → page d'accueil
- `"catalogue"` → grille des 24 modèles
- `"modele"` → fiche d'un modèle (comparatif Originale / Caoutchouc / Acier)
- `"configurateur"` → configurateur interactif
- `"commander"` → page « Comment commander »

Changer de vue : `this.setState({ view: "catalogue" })`.

---

## 5. Fichier de données — `data/watches.js`

Module ES importé dynamiquement par `componentDidMount`. Contient :

```js
afficherPhotos   // boolean — false = montres stylisées, true = vraies photos
optionsBoitier   // { choices: [{id, nom, hex, image}] }
optionsBracelet  // { materiaux: [{id, nom, couleurs: [{id, nom, hex, image}]}] }
optionsLunette   // { choices: [{id, nom, hex, texte, image}] }
montres          // [{id, nom, famille, accent, description, imageOriginale,
                 //   imageCustomCaoutchouc, imageCustomAcier}]
```

**Ajouter une couleur de lunette** : ajouter un objet dans `optionsLunette.choices`.
**Ajouter un modèle** : ajouter un objet dans `montres`.
**Activer les photos** : `afficherPhotos = true` (après avoir déposé les images).

---

## 6. Options actuelles

### Boîtier (4 couleurs)
| id | Couleur |
|---|---|
| argent | Argent |
| or-rose | Or rose |
| or-jaune | Or jaune |
| noir | Noir |

### Bracelet (3 matières)
**Caoutchouc** : Noir, Blanc, Bleu, Rouge, Vert, Jaune
**Acier** : Argent, Or rose, Or jaune, Noir
**Cuir** : Noir, Brun, Fauve, Bleu nuit

### Lunette (7 couleurs)
| id | Affichage |
|---|---|
| noir-tachy-orange | Noir · Tachymètre orange |
| bleu-tachy-orange | Bleu · Tachymètre orange |
| rouge | Rouge |
| vert | Vert |
| bleu | Bleu |
| noir | Noir |
| blanc | Blanc |

---

## 7. Photos — nommage attendu

```
images/<id>-originale.jpg              ← catalogue + fiche (photo de base)
images/<id>-custom-caoutchouc.jpg      ← fiche (rendu custom caoutchouc)
images/<id>-custom-acier.jpg           ← fiche (rendu custom acier)
images/options/boitier-<id>.jpg        ← pastille boîtier dans configurateur
images/options/bracelet-<mat>-<coul>.jpg ← pastille bracelet
images/options/lunette-<id>.jpg        ← pastille lunette
```

Voir `images/PHOTOS-A-DEPOSER.md` pour la liste complète des 24 noms de fichiers.

---

## 8. Prochaines évolutions à implémenter (priorité suggérée)

### 🟡 A — Lunette conditionnelle selon le boîtier (prête à câbler)

Le propriétaire a les photos de chaque lunette **sur chaque type de boîtier**.
Convention de nommage : `images/options/lunette-<lunette>-sur-<boitier>.jpg`
Ex. : `lunette-rouge-sur-or-rose.jpg`

**À faire dans le code :**
1. Dans `makeSwatch` (pastilles de lunette), résoudre l'image avec :
   ```js
   const imgPath = `images/options/lunette-${opt.id}-sur-${this.state.boitierId}.jpg`
     || opt.image; // fallback générique
   ```
2. Déclencher un re-render des pastilles lunette quand `boitierId` change (déjà le cas via `renderVals()`).
3. Volume : 7 lunettes × 4 boîtiers = 28 photos à fournir.

### 🔵 B — Rendu réaliste à calques (style Chrono Mod)

Voir `HANDOFF-configurateur-calques.md` pour le guide complet.
Principe : empiler des PNG transparents alignés (ombre / bracelet / boîtier /
cadran / aiguilles / reflet). Chaque choix remplace le `src` d'une couche.
**Prérequis : les PNG produits en 3D (Blender/KeyShot) ou photo détourée.**

### 🟢 C — Améliorations UX rapides
- Transition douce entre vues (fade 150ms).
- Mémoriser la dernière configuration dans `localStorage` (persist entre visites).
- Page « Mes configurations sauvegardées » (localStorage array).
- Partage de configuration par URL (`?modele=saturn&boitier=noir&bracelet=...`).

---

## 9. Déploiement

**Local :** `npx serve .` puis `http://localhost:3000`
(les modules ES ne fonctionnent pas en `file://`)

**Netlify (sans build) :**
- Option A (glisser-déposer) : app.netlify.com/drop → glisser le dossier.
- Option B (Git) : repo GitHub → Netlify → publish directory `.`, pas de build command.

---

## 10. Contact propriétaire

Instagram : **@Mat_698RVE**
Lien DM direct (utilisé par le bouton « Demander ») : `https://ig.me/m/Mat_698RVE`

---

*Service de personnalisation indépendant — non affilié officiellement à Omega ni à Swatch.*
