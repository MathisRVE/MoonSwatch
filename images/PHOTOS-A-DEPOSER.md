# 📸 Où déposer vos photos — guide simple

Glissez vos photos **dans ce dossier `images/`** en leur donnant **exactement** le
nom indiqué ci-dessous. Puis ouvrez `data/watches.js` et mettez tout en haut :

    export const afficherPhotos = true;

C'est tout. Une photo manquante ? Pas grave, la montre stylisée s'affiche à la place.

Format conseillé : **.jpg**, carré (ex. 1000×1000 px), fond sombre/neutre.

------------------------------------------------------------------------
## A) PHOTO DE BASE DE CHAQUE MONTRE  (catalogue + fiche)
Nom du fichier = `<id>-originale.jpg`. Déposez-les directement dans `images/`.

    images/sun-originale.jpg                 → Mission to the Sun
    images/mercury-originale.jpg             → Mission to Mercury
    images/venus-originale.jpg               → Mission to Venus
    images/earth-originale.jpg               → Mission on Earth
    images/moon-originale.jpg                → Mission to the Moon
    images/mars-originale.jpg                → Mission to Mars
    images/jupiter-originale.jpg             → Mission to Jupiter
    images/saturn-originale.jpg              → Mission to Saturn
    images/uranus-originale.jpg              → Mission to Uranus
    images/neptune-originale.jpg             → Mission to Neptune
    images/pluto-originale.jpg               → Mission to Pluto
    images/moonphase-new-originale.jpg       → Moonphase – New Moon
    images/moonphase-full-originale.jpg      → Moonphase – Full Moon
    images/earth-lava-originale.jpg          → Earth – Lava
    images/earth-polar-originale.jpg         → Earth – Polar Lights
    images/earth-desert-originale.jpg        → Earth – Desert
    images/earthphase-originale.jpg          → Mission to Earthphase
    images/m1965-originale.jpg               → MoonSwatch 1965
    images/pink-moonphase-originale.jpg      → Pink Moonphase
    images/earthphase-gold-dec-originale.jpg → Earthphase Moonshine Gold · Décembre
    images/earthphase-gold-nov-originale.jpg → Earthphase Moonshine Gold · Novembre
    images/earthphase-gold-oct-originale.jpg → Earthphase Moonshine Gold · Octobre
    images/earthphase-gold-sep-originale.jpg → Earthphase Moonshine Gold · Septembre
    images/earthphase-gold-aou-originale.jpg → Earthphase Moonshine Gold · Août

------------------------------------------------------------------------
## B) RENDU CUSTOM D'UNE MONTRE  (affiché dans la fiche du modèle)
Optionnel, seulement pour les montres dont vous avez un rendu personnalisé.
Deux variantes possibles par montre :

    images/<id>-custom-caoutchouc.jpg   (rendu avec bracelet caoutchouc)
    images/<id>-custom-acier.jpg        (rendu avec bracelet acier)

Exemples :
    images/saturn-custom-caoutchouc.jpg
    images/mars-custom-acier.jpg

------------------------------------------------------------------------
## C) PHOTOS DES OPTIONS  (dans le configurateur) — optionnel
À déposer dans le sous-dossier `images/options/`.

Boîtiers :
    images/options/boitier-argent.jpg
    images/options/boitier-or-rose.jpg
    images/options/boitier-or-jaune.jpg
    images/options/boitier-noir.jpg

Bracelets  (matière-couleur) :
    images/options/bracelet-caoutchouc-noir.jpg
    images/options/bracelet-caoutchouc-blanc.jpg
    images/options/bracelet-caoutchouc-bleu.jpg
    images/options/bracelet-caoutchouc-rouge.jpg
    images/options/bracelet-caoutchouc-vert.jpg
    images/options/bracelet-caoutchouc-jaune.jpg
    images/options/bracelet-acier-argent.jpg
    images/options/bracelet-acier-or-rose.jpg
    images/options/bracelet-acier-or-jaune.jpg
    images/options/bracelet-acier-noir.jpg
    images/options/bracelet-cuir-noir.jpg
    images/options/bracelet-cuir-brun.jpg
    images/options/bracelet-cuir-fauve.jpg
    images/options/bracelet-cuir-bleu-nuit.jpg

Lunettes :
    images/options/lunette-noir-tachy-orange.jpg
    images/options/lunette-bleu-tachy-orange.jpg
    images/options/lunette-rouge.jpg
    images/options/lunette-vert.jpg
    images/options/lunette-bleu.jpg
    images/options/lunette-noir.jpg
    images/options/lunette-blanc.jpg

------------------------------------------------------------------------
## Rappel des 3 étapes
1. Glisser les photos ici avec le bon nom.
2. `data/watches.js`  →  `afficherPhotos = true`
3. Recharger la page (ou redéployer sur Netlify). Fini ! ✅
