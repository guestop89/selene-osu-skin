# SELENE V1.3 Glow

Importer `SELENE-V1.3-Glow.osk`, puis choisir **SELENE V1.3 Glow** dans osu!.

Le curseur devient une boule lisse nacrée lavande, avec un bord lumineux et un halo court. Les PNG transparents mesurent 108 px et 216 px (@2x), contre 96 et 192 auparavant. La taille du fichier inclut les marges transparentes ; le centre visible est légèrement agrandi.

Pour remplacer uniquement le curseur, extraire `SELENE-V1.3-curseur.zip` dans le dossier de votre skin après sauvegarde des deux fichiers existants. Conserver `CursorCentre: 1`, `CursorExpand: 0` et `CursorRotate: 0`.

Le reste du skin, notamment les 99 sons, les ressources mania et la traînée courte, est identique octet par octet à la V1.2. Les seuls fichiers modifiés dans le .osk sont `cursor.png`, `cursor@2x.png` et le nom/commentaire de version dans `skin.ini`. Aucun test en client osu! effectué.

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

