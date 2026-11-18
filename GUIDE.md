## Ajustement du suivi et de la typographie

La traînée violette du curseur de la V1.3 est restaurée. Sur un slider suivi, les ailes blanches sont portées par la balle mobile, qui pivote nativement selon la tangente de la trajectoire. Le cercle de suivi conserve sa pulsation à l’appui et aux ticks. AzuRT est en Google Sans et rapproché de la ligne de vie. Les chiffres du combo sont en Google Sans, réduits d’environ 20 % en pixels, avec leur animation native.

# SELENE V1.5 Reference

Cercles blancs, prismes multicolores légèrement agrandis, curseur rond et AzuRT au-dessus de la barre de vie. Les éléments visibles sont redessinés depuis la capture fournie. Le fond anime et la disposition des objets dépendent de la beatmap. Les fichiers du skin original ne sont pas inclus.

Importer le .osk, puis sélectionner SELENE V1.5 Reference dans osu!. Vérification des PNG SD et HD et de l’intégrité de l’archive effectuée. Essai dans le client à faire.

---

# SELENE V1.4 Prisme

Importer `SELENE-V1.4-Prisme.osk`, puis choisir **SELENE V1.4 Prisme**.

Le portrait est repris de la version précédente d’AzuRT. Le filet violet démarre sous le portrait et s’aligne avec le drapeau. Les petits chiffres des notes laissent place au prisme au centre des cercles et des têtes de sliders. Le compteur de points de performance de lazer conserve son placement.

Les dimensions, les fichiers et les références de l’archive ont été vérifiés. L’aperçu est composé hors jeu.

---

# SELENE V1.3 Glow

Importer `SELENE-V1.3-Glow.osk`, puis choisir **SELENE V1.3 Glow** dans osu!.

Le curseur est une boule nacrée lavande avec une aura vive et diffuse rose et violette. La traînée native et sa nouvelle texture prolongent la lumière pendant les déplacements. Dans la vitrine, le halo peut aussi se décaler de quelques pixels par rapport au cœur. Les PNG transparents mesurent 108 px et 216 px (@2x), contre 96 et 192 auparavant. La taille du fichier inclut les marges transparentes ; le centre visible est légèrement agrandi.

Pour remplacer le curseur et sa traînée, copier les quatre PNG de `SELENE-V1.3-curseur.zip` dans le dossier de votre skin après sauvegarde des fichiers existants. Conserver `CursorCentre: 1`, `CursorExpand: 0` et `CursorRotate: 0`.

Cette mise à jour remplace le curseur et la texture de la traînée en SD et HD. Le .osk utilise le fondu court natif d’osu!. Aucun test en client osu! effectué.

Curseur créé avec l’outil image_gen intégré, redimensionné et centré avec ImageMagick. Sources et script de reconstruction dans `SELENE-V1.3-Glow-sources.zip`.

---

## Guide historique V1.2

# SELENE V1.2 Realease

Version complète par AzuRT, issue du dernier pack personnalisé. Importer le .osk,
puis sélectionner « SELENE V1.2 Realease » dans osu!.

## Tout ce qui est inclus
- Curseur violet à cœur clair 96 px, sans agrandissement au clic, traînée 56 px.
- Cercles rose/lavande/orchidée contrastés ; mêmes dimensions et zones de clic.
- HUD compact 324×55, avatar osu! original, pseudo AzuRT et drapeau français reliés.
- Vie rose/violet à 60 i/s, boucle de six secondes à faible amplitude.
- Combo blanc et violet avec rebond natif ; :3 100/50, miss discret et parfait masqué.
- Les 99 fichiers audio du pack de départ sont conservés à l'identique.
- Les éléments propres à mania et les autres ajouts graphiques sont conservés.

## Améliorations de confort de la V1.2
- Balle de slider plus lisible et anneau de suivi mieux contrasté, sans flash massif.
- Petits points de liaison nacrés, réguliers et moins envahissants.
- Boutons pause/retry/retour avec labels plus grands et hiérarchie visuelle plus nette.
- Touches du compteur d'entrées moins opaques, bord conservé pour le contraste.
- Pack complet, guide unique, version visible et empreintes de téléchargement.
- La vitrine affiche les assets actuels et permet de comparer les deux traînées.

## Traînée courte de la V1.2 finale
Le pack principal utilise maintenant des points discontinus à environ 60 Hz,
avec un fondu natif de 150 ms dans lazer actuel, contre 500 ms précédemment.
La persistance est réduite de 70 %. Le curseur violet 96 px et les points de
56 px sont conservés. Le cursormiddle est absent pour activer ce mode court.
Le nombre et l'espacement des points dépendent de la vitesse du mouvement.
Le téléchargement Points historique utilise le même mode court.

## Compatibilité
Format legacy pour stable/lazer. Les menus visent stable ; le HUD personnalisé,
l'accuracy et les pp concernent lazer. Pas de pp calculés par le skin seul dans stable.
Le jaune automatique tous les 100 combos et les jugements positionnés aléatoirement
ne sont pas implémentés. Les valeurs, la sensibilité, les volumes et les touches
restent contrôlés par le client. Aucun réglage n'est optimal pour tous les joueurs.

## Vérification
Intégrité des archives, dimensions SD/@2x, conservation des sons et de mania,
images décodables et liens du site contrôlés. Aperçus et animations composés hors
jeu ; aucun test d'import ou de gameplay en client pour cette release.

## Crédits
Personnalisation et direction du skin : AzuRT. Avatar du compte osu! 38408224.
Polices Windows rasterisées en PNG ; aucun fichier de police Windows distribué.
Références de direction artistique : Mizuki / Sleepy / Aristia et Sorasaki Hina,
sans reprise de leurs fichiers. Pas d'affiliation officielle avec osu!.

https://osu.ppy.sh/wiki/en/Skinning/Interface
https://github.com/ppy/osu/blob/master/osu.Game.Rulesets.Osu/Skinning/Legacy/LegacyCursorTrail.cs


Les ailes sont exclusivement intégrées aux images de la balle mobile du slider. Le moteur gère leur apparition pendant le slider et leur rotation suivant sa trajectoire. Les 32 images donnent une pulsation légère, dont la cadence native dépend de la vitesse du slider dans lazer. La vitrine montre une simulation.
