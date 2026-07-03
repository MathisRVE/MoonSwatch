# MoonSwatch Custom — Site vitrine + configurateur

Site **100 % statique** (HTML / CSS / JS, aucun back-end, aucune base de données,
aucun compte). Présente 24 MoonSwatch de base et un configurateur qui laisse le
visiteur composer boîtier / bracelet / lunette, puis vous contacter sur Instagram
**@Mat_698RVE** avec sa configuration.

---

## 1. Démarrer / prévisualiser en local

Comme tout est statique, il suffit de servir le dossier avec un petit serveur
(les `import` ES modules ont besoin de `http://`, pas de `file://`) :

```bash
# au choix
npx serve .
# ou
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000/` (ou `:3000` avec `serve`).

> Ouvrir le fichier en double-cliquant (`file://`) **ne marche pas** à cause des
> modules JS — passez toujours par un serveur local.

---

## 2. Déployer sur Netlify (sans build)

**Option A — glisser-déposer (le plus simple)**
1. Allez sur https://app.netlify.com/drop
2. Glissez **tout le dossier du projet** dans la fenêtre.
3. C'est en ligne. `index.html` est servi automatiquement à la racine.

**Option B — via Git**
1. Poussez le dossier sur un repo GitHub/GitLab.
2. Sur Netlify : *Add new site → Import an existing project*.
3. Build command : *(vide)* — Publish directory : `.`
4. Deploy. Le `netlify.toml` fourni configure déjà « pas de build ».

---

## 3. Structure des fichiers

```
.
├── index.html                  # Point d'entrée déployé (copie de la page principale)
├── MoonSwatch Custom.dc.html   # Page principale (source identique à index.html)
├── support.js                  # Runtime d'affichage (ne pas modifier)
├── data/
│   └── watches.js              # ⭐ TOUTES vos données éditables (modèles + options)
├── images/                     # ⭐ Vos photos (à créer / déposer ici)
└── netlify.toml                # Config Netlify (pas de build)
```

> `index.html` et `MoonSwatch Custom.dc.html` ont le **même contenu**.
> `index.html` sert au déploiement ; éditez l'un, recopiez sur l'autre
> (`cp "MoonSwatch Custom.dc.html" index.html`) avant de redéployer.

---

## 4. Éditer le catalogue et les options — `data/watches.js`

Tout est centralisé dans ce fichier, commenté. Vous pouvez :

- **Ajouter / retirer un modèle** → tableau `montres` (id, nom, famille, accent, description).
- **Changer les couleurs de boîtier** → `optionsBoitier.choices`.
- **Changer matériaux / couleurs de bracelet** → `optionsBracelet.materiaux`.
- **Changer les lunettes** → `optionsLunette.choices`.

`accent` est la couleur-thème d'un modèle (utilisée pour la montre stylisée et les
néons). `famille` (`planetes` / `lunaire` / `terre`) alimente le filtre du catalogue.

---

## 5. Ajouter vos vraies photos

1. Déposez vos fichiers dans `images/` en respectant les noms attendus :

   | Quoi | Nom de fichier |
   |---|---|
   | Photo du modèle de base (catalogue + fiche) | `images/<id>-originale.jpg` |
   | Rendu custom bracelet caoutchouc (fiche) | `images/<id>-custom-caoutchouc.jpg` |
   | Rendu custom bracelet acier (fiche) | `images/<id>-custom-acier.jpg` |
   | Finition de boîtier | `images/options/boitier-<id>.jpg` |
   | Bracelet (matière + couleur) | `images/options/bracelet-<materiau>-<couleur>.jpg` |
   | Couleur de lunette | `images/options/lunette-<id>.jpg` |

   (les `<id>` exacts sont listés dans `data/watches.js`.)

2. Dans `data/watches.js`, passez l'interrupteur en haut du fichier :

   ```js
   export const afficherPhotos = true;   // false = montres stylisées
   ```

   Tant que c'est `false`, le site affiche des montres stylisées (placeholders
   propres) et **aucune image n'est chargée** (console nette). À `true`, vos
   photos s'affichent partout dès qu'elles existent ; un fichier manquant
   retombe silencieusement sur le placeholder.

---

## 6. Le bouton « Demander » (WhatsApp / Instagram / Snapchat)

Cliquer sur « Demander » (configurateur **et** cartes « Nos créations ») ouvre une
fenêtre `vContact` qui laisse le visiteur choisir sa messagerie :

- **WhatsApp** → ouvre `https://wa.me/33621926195?text=...` avec le message **déjà
  écrit** (pré-rempli automatiquement, fiable).
- **Instagram** → copie le récap puis ouvre `https://ig.me/m/Mat_698RVE`.
- **Snapchat** → copie le récap puis ouvre `https://www.snapchat.com/add/mathis.alies`.

Instagram et Snapchat n'autorisant pas le pré-remplissage, le récap est **copié
automatiquement** : le visiteur n'a qu'à le coller (clic droit → Coller). Les
identifiants (numéro, comptes) sont dans les handlers `contactWhatsapp` /
`contactInstagram` / `contactSnapchat` du `.dc.html` / `index.html` ; le texte est
généré par `recapText()` (configurateur) et `recapTextPret()` (créations).

---

## 7. Reprise dans Claude Code

- Point d'entrée logique : la balise `<x-dc>` dans `MoonSwatch Custom.dc.html`.
  Le **template** (markup) et la **classe `Component`** (logique, dans le
  `<script>` en bas) sont les deux blocs à éditer.
- `support.js` est le moteur de rendu : **ne pas le modifier**.
- Les données vivent dans `data/watches.js` (module ES importé par la logique).
- Tarif « à partir de 170 € » et délai « 2–4 semaines » sont dans la section
  *Commander* du template.

Voir `HANDOFF-configurateur-calques.md` pour faire évoluer le configurateur vers
un **rendu photo réaliste** (style Chrono Mod).

---

*Service de personnalisation indépendant — non affilié officiellement à Omega ni
à Swatch. Les noms de modèles sont donnés à titre de référence.*
