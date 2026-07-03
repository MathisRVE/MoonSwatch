# Brief pour Claude Design — Site de personnalisation MoonSwatch

> **Comment l'utiliser :** colle l'intégralité de ce fichier dans Claude Design comme premier message. Il est conçu pour qu'on te propose d'abord **plusieurs directions de design**, que tu en choisisses une, puis qu'il construise le site complet. Tu finaliseras ensuite avec Claude Code (le brief est pensé pour une reprise propre).

---

## 1. Contexte & objectif

Je personnalise des montres **MoonSwatch** (la collection *Bioceramic MoonSwatch*, collaboration Omega × Swatch — chronographe Speedmaster « Mission »). Je veux un **site vitrine + configurateur** qui présente mes modèles et permette au visiteur de composer sa montre personnalisée, avant de me contacter pour passer commande.

Le site doit :

- Être un **site 100 % statique** (aucune base de données, aucun back-end, aucun compte utilisateur).
- Être **déployable sur Netlify** sans configuration serveur (build statique simple, ou pas de build du tout).
- Stocker tous les modèles dans **un seul fichier de données** (un tableau JS/JSON, ex. `data/watches.js`) que je pourrai éditer à la main ensuite.
- Être **repris ensuite dans Claude Code** : code propre, commenté, structuré, sans dette inutile, conventions cohérentes.

**Important — je veux d'abord voir plusieurs options de design.** Ne construis pas le site final tout de suite : commence par me **proposer 3 directions de design distinctes** (voir §6), puis attends que je choisisse avant de tout construire.

---

## 2. Identité de marque (issue de mon catalogue)

- **Univers visuel :** co-branding Omega × Swatch, esprit spatial « Mission » (planètes, lune, espace), objet horloger mis en scène comme un produit premium mais accessible et fun.
- **Couleurs d'origine du catalogue :** fond **noir**, accent **jaune Swatch** vif (~`#FFEC00`), blanc cassé, gris marbre. Mise en scène récurrente : montres posées sur un **piédestal en marbre**, fond dégradé gris clair, comparatif **« avant / après »**.
- **Typographie d'origine :** titres en sans-serif **condensé, gras, capitales** (style Horizon/Univers) ; corps de texte en sans-serif neutre (style Helvetica/Univers).
- **Ton :** passionné, soigné, direct. Service artisanal de personnalisation, pas une grande marque corporate.

> Tu pourras **réinterpréter** cette identité différemment selon chaque direction de design (§6) — ces éléments sont le point de départ, pas une contrainte rigide.

---

## 3. Contenu : les 18 modèles de base

Chaque modèle est une **MoonSwatch de base fixe** (le cadran et le mouvement ne changent pas). Voici la liste exacte à intégrer dans le fichier de données :

1. Mission on Earth – Desert
2. Mission on Earth – Lava
3. Mission on Earth – Polar Lights
4. Mission on Earth
5. Mission to Earthphase
6. Mission à Jupiter
7. Mission to Mars
8. Mission to Neptune
9. Mission to Pluto
10. Mission to Saturn
11. Mission to the Moon
12. Mission to the Moonphase – New Moon
13. Mission to the Moonphase – Snoopy
14. Mission to the Pink Moonphase
15. Mission to the Sun
16. Mission to the Super Blue Moonphase
17. Mission to Uranus
18. MoonSwatch 1965

Pour chaque modèle, prévois dans le schéma de données au minimum : `id`, `nom`, `description` courte, `couleurAccent` (pour le thème par modèle), et des emplacements d'images (`imageOriginale`, `imageCustomCaoutchouc`, `imageCustomAcier`).

**Images :** je fournirai mes propres photos plus tard. Pour l'instant, utilise des **placeholders propres et cohérents** (cadres avec ratio fixe, fond neutre, libellé du modèle) faciles à remplacer dans le fichier de données. Ne génère pas de fausses photos de montres réalistes ; un placeholder élégant suffit. Référence visuelle du rendu attendu : un comparatif **« Originale » / « Modèle Customisé (Caoutchouc) » / « Modèle Customisé (Acier) »** sur piédestal.

---

## 4. Le configurateur (cœur du site)

C'est la fonctionnalité clé. Règle de base : **la montre de base d'un modèle reste identique** ; seuls trois éléments sont personnalisables.

**Axes personnalisables (les 3 mêmes pour tous les modèles) :**

1. **Boîtier** — choix de **matériau** (ex. biocéramique d'origine, acier, acier noir/PVD, titane…) et de **couleur/finition**.
2. **Bracelet** — choix de **matériau** (textile d'origine type velcro, caoutchouc, acier/maillons, cuir…), de **couleur** et de **style**.
3. **Entourage du boîtier (lunette)** — choix de **matériau** et de **couleur**.

**Comportement attendu du configurateur :**

- Le visiteur **choisit d'abord un modèle de base** (parmi les 18), puis **ajuste les 3 axes** via des sélecteurs (pastilles de couleur / vignettes de matériau).
- Un **aperçu visuel** se met à jour à chaque changement. Comme je n'ai pas de photo pour chaque combinaison, utilise une approche maligne et propre : **calques superposés teintés en CSS** et/ou une **carte « récapitulatif de configuration »** claire (modèle + boîtier + bracelet + lunette choisis, avec libellés et pastilles). L'aperçu doit rester crédible même sans photo réelle.
- Affiche un **récapitulatif texte** de la configuration en temps réel.
- **Conversion :** un bouton **« Demander ce modèle »** qui ouvre **Instagram** vers **@Mat_698RVE** avec un **message pré-rempli** reprenant le modèle et les personnalisations choisies (lien `https://ig.me/m/Mat_698RVE` ou `https://instagram.com/Mat_698RVE`, avec le récap copiable si le pré-remplissage DM n'est pas fiable). Prévois aussi un **bouton « Copier ma configuration »**.
- Mets les options de personnalisation dans le **fichier de données** (listes de matériaux/couleurs réutilisables), pour que je puisse les éditer facilement.

---

## 5. Pages / sections attendues

1. **Accueil** — hero impactant (identité Mission/spatiale), accroche, CTA vers le configurateur et le catalogue.
2. **Catalogue / Vitrine** — grille des 18 modèles, avec filtre ou recherche simple, et accès à la fiche modèle.
3. **Fiche modèle** — présentation d'un modèle + comparatif « Originale / Caoutchouc / Acier » + bouton « Personnaliser ce modèle » (envoie vers le configurateur pré-chargé sur ce modèle).
4. **Configurateur** — décrit au §4.
5. **Comment ça marche / Commander** — le process réel :
   - Contact via **Instagram @Mat_698RVE** en précisant modèle + personnalisations souhaitées.
   - Personnalisation **soumise à vérification de disponibilité** auprès des fournisseurs avant confirmation.
   - **Tarif : à partir de 170 € (variable selon le modèle et la complexité).**
   - **Délai : 2 à 4 semaines** (rallongeable en cas d'aléa logistique fournisseur).
6. **Pied de page** — lien Instagram, mention que c'est un service de personnalisation indépendant (non affilié officiellement à Omega/Swatch), année.

Navigation responsive (mobile-first), header avec accès rapide au configurateur.

---

## 6. Les 3 directions de design à me proposer (IMPÉRATIF)

Avant toute construction, propose-moi **3 directions distinctes**, chacune avec un nom, une mini-description, une palette, un choix typographique et un parti-pris de mise en page. Elles doivent être **réellement différentes** (pas trois variantes de la même chose). Suggestion de territoires — adapte/améliore librement :

- **Direction A — « Swatch Pop »** : fidèle au catalogue. Noir + jaune Swatch, typo condensée bold en capitales, énergique, ludique, grilles franches, blocs contrastés.
- **Direction B — « Galerie / Luxe minimaliste »** : côté Omega. Beaucoup de blanc, marbre, typo raffinée, mise en page éditoriale façon musée, la montre traitée comme objet d'art, animations sobres.
- **Direction C — « Cosmos / Mission »** : plein thème spatial. Fonds sombres profonds, champ d'étoiles discret, couleur d'accent par planète/modèle, esprit futuriste et immersif.

Pour chaque direction, montre au moins l'**accueil** et un **aperçu du configurateur**. Je choisirai (ou je mélangerai) avant que tu construises l'ensemble.

---

## 7. Contraintes techniques (pour le déploiement Netlify + reprise Claude Code)

- **Statique** : HTML/CSS/JS, ou un framework qui exporte en statique (si React, prévoir un export statique simple). Aucun back-end, aucune variable d'environnement secrète, aucun appel API requis pour fonctionner.
- **Déploiement Netlify** : doit marcher en glisser-déposer du dossier de build ou via un repo Git, sans étape serveur. Inclure un `netlify.toml` minimal si pertinent et un `README` indiquant la commande de build (ou « pas de build »).
- **Données centralisées** : un fichier unique pour les 18 modèles + les options de personnalisation, clairement commenté.
- **Images** : placeholders légers et nommés logiquement, remplaçables sans toucher au code.
- **Code propre pour reprise** : structure de dossiers lisible, composants/sections séparés, nommage cohérent, commentaires aux endroits clés (configurateur, data, génération du lien Instagram). Pas de dépendances superflues.
- **Responsive et accessible** : mobile-first, contrastes corrects, navigation clavier sur les sélecteurs du configurateur.
- **Performances** : pas de librairie lourde inutile ; animations CSS légères.

---

## 8. Déroulé attendu de ta part

1. **Étape 1 — Options :** présente les **3 directions de design** (§6) avec aperçus (accueil + configurateur). **Stop, attends mon choix.**
2. **Étape 2 — Construction :** une fois la direction choisie, construis le site complet (toutes les sections du §5 + configurateur §4 + données §3).
3. **Étape 3 — Livraison :** fournis une structure prête à déployer sur Netlify et claire à reprendre dans Claude Code, avec un court README (déploiement + comment éditer les modèles/images).

Commence par l'**étape 1**.
