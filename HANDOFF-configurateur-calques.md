# Handoff — Configurateur « rendu réel » à calques (style Chrono Mod)

Objectif : passer de l'aperçu stylisé actuel à un **rendu photographique** où, en
changeant le cadran / boîtier / bracelet, on voit le changement **directement sur
une vraie montre** (comme les captures Chrono Mod).

---

## 1. Le principe : empiler des PNG transparents alignés

On ne photographie **pas** chaque combinaison (24 modèles × 4 boîtiers × N
bracelets × 7 lunettes = des milliers d'images, impossible). À la place, on
superpose des **calques d'images transparentes (PNG)**, tous au **même cadrage**,
et on change uniquement la couche concernée par chaque choix.

Pile de calques typique (du fond vers l'avant) :

```
z1  ombre / fond
z2  bracelet            ← change avec « bracelet »
z3  boîtier (carrure)   ← change avec « finition boîtier »
z4  cadran              ← change avec « couleur de cadran »
z5  gravure / logo      ← texte ou image (couleur du logo)
z6  aiguilles + index
z7  date (optionnel)
z8  reflet du verre (léger, fixe)
```

Comme **tous les PNG ont exactement les mêmes dimensions et le même alignement**,
les empiler donne toujours une montre cohérente. Sélectionner une option =
remplacer le `src` d'**un seul** calque.

---

## 2. Ce dont VOUS avez besoin (les assets)

C'est la partie qui demande du travail en amont. Pour **un modèle de montre** (une
forme de boîtier), il faut un jeu de PNG transparents, **tous identiques en taille,
cadrage, angle et lumière** :

- **Boîtier** : 1 PNG par finition (ex. `case-acier.png`, `case-or-rose.png`,
  `case-noir.png`).
- **Cadran** : 1 PNG par couleur/variante (ex. `dial-marine.png`,
  `dial-obsidienne.png`, `dial-emeraude.png`…).
- **Bracelet** : 1 PNG par matière+couleur (ex. `strap-acier-argent.png`,
  `strap-caoutchouc-noir.png`…).
- **Aiguilles + index, date, reflet** : 1 PNG chacun (souvent fixes).
- **Gravure** : soit une couche texte générée en direct (recommandé), soit des PNG.

Spécifications conseillées :
- **Format** : PNG 24 bits + transparence (alpha).
- **Taille** : ≥ 1500 × 1500 px, **exactement la même** pour tous les calques.
- **Registration** : la montre occupe la **même position** dans chaque PNG (ne
  recadrez pas individuellement — exportez depuis le même canevas).
- **Lumière / angle identiques** sur tous les calques (sinon l'empilement se voit).

Deux façons de produire ces calques :
1. **Rendu 3D** (Blender / KeyShot) : le plus propre. Un modèle 3D de la montre,
   on exporte chaque pièce/couleur depuis **la même caméra**. C'est ainsi que la
   plupart des configurateurs « comme Chrono Mod » sont faits.
2. **Photo + détourage** (Photoshop) : photographier chaque pièce sur trépied fixe,
   fond neutre, puis détourer en gardant le cadrage. Plus laborieux et moins
   régulier que la 3D.

> Astuce : commencez par **un seul modèle** (ex. la silhouette « Nautilus » des
> captures) pour valider le système, avant de décliner les autres.

---

## 3. Comment l'implémenter (dans Claude Code)

### a) Décrire les calques dans `data/watches.js`

Ajoutez, par modèle, la liste des couches et, par option, l'image associée :

```js
// exemple
export const layers = {
  base: "images/layers/nautilus/ombre.png",
  reflet: "images/layers/nautilus/reflet.png",
  aiguilles: "images/layers/nautilus/aiguilles.png",
};

// dans optionsBoitier.choices :
{ id: "noir", nom: "Noir mat", hex:"#1b1b1b",
  layer: "images/layers/nautilus/case-noir.png" }

// dans une nouvelle liste optionsCadran :
{ id: "marine", nom: "Marine royale",
  layer: "images/layers/nautilus/dial-marine.png" }
```

### b) Remplacer l'aperçu CSS par une pile d'images

Dans le configurateur, au lieu de la montre stylisée, un conteneur avec des
`<img>` superposés, chacun piloté par l'état :

```html
<div class="watch-stack">          <!-- position:relative -->
  <img src="{ombre}"   style="position:absolute; inset:0">
  <img src="{strap}"   style="position:absolute; inset:0">
  <img src="{case}"    style="position:absolute; inset:0">
  <img src="{dial}"    style="position:absolute; inset:0">
  <div class="gravure">{texte}</div>  <!-- texte positionné sur le cadran -->
  <img src="{aiguilles}" style="position:absolute; inset:0">
  <img src="{reflet}"  style="position:absolute; inset:0">
</div>
```

Chaque sélection change le `src` du calque correspondant → la montre se met à jour
instantanément. La **gravure** est une couche `<div>`/`<canvas>` de texte
positionnée sur le cadran, dont vous contrôlez la couleur (cf. « Couleur du logo »
dans les captures).

### c) Garder le reste

Le récap, le bouton Instagram, les données : inchangés. On ne remplace que le
bloc d'aperçu.

---

## 4. Le message à donner à Claude Code

> « Voici mes calques PNG transparents, tous au même cadrage, rangés dans
> `images/layers/<modele>/` : boîtier (×3 finitions), cadran (×N couleurs),
> bracelet (×N), aiguilles, date, reflet. Remplace l'aperçu du configurateur par
> une pile d'images superposées : chaque option change la couche correspondante.
> Ajoute une couche de gravure (texte sur le cadran) avec choix de couleur.
> Étends `data/watches.js` avec, par option, le chemin de son calque. »

Joignez le dossier `images/layers/...`. Avec les assets prêts, l'intégration est
rapide ; **90 % du travail est la production des PNG alignés.**

---

## 5. Résumé

| | Aperçu actuel | Rendu à calques (cible) |
|---|---|---|
| Visuel | Montre stylisée CSS teintée | Vraie montre photo/3D |
| Assets requis | Aucun | Jeux de PNG alignés par pièce |
| Effort | Fait | Production des calques (3D conseillée) |
| Mise à jour live | Oui (couleurs) | Oui (calques) |

Le site actuel fonctionne et convertit déjà (configuration → Instagram). Le rendu
à calques est l'**évolution premium** quand vous aurez les visuels.
