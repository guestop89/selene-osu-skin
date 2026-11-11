# SÉLÈNE V1 / AzuRT

Importer SELENE V1 Realease.osk dans osu!, puis sélectionner le skin. Version complète. Le skin.ini garde Version: 2.7 (version du format legacy) ; la release est bien V1 / 1.0.

## Les deux références
Cercles à bord blanc net, intérieur sombre légèrement teinté de rose/violet/orchidée, grand chiffre arrondi. C'est une interprétation originale du rendu fourni, sans reprendre les fichiers du skin tiers. Les approches restent plus fines que les notes, parfait masqué et peu de particules pour garder l'écran clair.
Chiffres et textes skinnables rendus avec Comic Sans MS / Comic Sans MS Bold de Windows, plus naturels et cartoon. Ce sont des PNG ; aucune police à installer ni fichier de police Windows distribué. Les textes natifs de lazer peuvent conserver leur police système.

## Le vrai combo du jeu
Les chiffres de combo sont blancs ; le suffixe natif x est remplacé graphiquement par le mot Combo violet, selon la seconde capture. Le compteur n'est pas une image fixe : il affiche bien le combo réel. Le composant LegacyDefaultComboCounter de lazer réalise un rebond natif à chaque incrément et un effet de pop-out. Le skin exploite cette animation avec des glyphes arrondis et un compteur sans panneau massif. L'amplitude et le timing exacts restent ceux du client.
Limite non résolue par le format : un .osk seul ne peut pas tester Combo % 100 == 0 pour passer le texte en jaune. Cette fonction n'est pas implémentée dans le pack et n'est pas montrée dans la galerie comme si elle fonctionnait en jeu. Une logique conditionnelle nécessiterait un composant/client ou un overlay distinct ; aucun programme externe n'est installé.

## :3 cartoon et fluide
:3 vert pour 100, bleu pour 50, croix rose pour miss, parfait invisible. Dessin arrondi de 27 px, petit rebond élastique, très léger squash/stretch puis fondu. 42 images à 60 i/s. Le centre reste près de la note ; dans cette V1 les symboles restent droits pour se lire rapidement. Pas de position ou d'orientation aléatoire par hit. Le son de miss reste le combobreak discret soumis aux règles du jeu.

## Tout le HUD de vie est relié
Une coque unique arrondie rassemble le liquide rose/violet, le logo Sélène, le drapeau français, AzuRT et la vraie photo de profil du compte osu! 38408224. L'image originale vient de https://a.ppy.sh/38408224 et n'est pas redessinée par IA. Le pseudo est la personnalisation confirmée AzuRT ; aucune statistique ou classement n'est inventé.
Le remplissage reste 320×14 px à l'origine native (5,16), avec 360 images à 60 i/s en boucle de six secondes. Le moteur garde le contrôle de la valeur de vie et de son lissage.

## Réglages raisonnables, à adapter
Curseur blanc équilibré de 80 px, stable au clic (CursorExpand: 0), centre fixe, traînée blanche courte sans cursormiddle. Le jeu conserve ses paramètres de taille, sensibilité, résolution, AR/CS et vitesse de défilement. Un skin ne peut pas choisir un réglage optimal universel pour tous les joueurs.
Commencer vers 1× pour la taille du curseur, puis adapter à son écran et à sa préférence. Des variantes 64/80/96 px sont fournies dans downloads/SELENE-cursor-options.zip ; ajuster la taille dans les options du jeu reste le plus simple. Commencer avec un fond très assombri si la carte gêne la lecture. Les options de couleurs de beatmap peuvent remplacer les trois combos du skin.
Les hitsounds courts de la v0.9 sont conservés. Pour les entendre, vérifier les réglages d'échantillons/hitsounds de beatmaps et le volume des effets. Le .osk ne force pas un volume et n'ajoute pas un clic aux entrées ratées.

## Compatibilité et vérification
Format legacy : assets de menu visant stable ; pp, accuracy et layout personnalisés pour lazer. Stable ne calcule pas les pp avec le .osk seul. Les autres modes gardent leurs assets spécifiques ; les images partagées, les polices de compteurs et les sons communs évoluent. Les touches et la vitesse de mania restent inchangées.
Archive, images SD/@2x, 360 frames de vie, 42 frames de jugements, présence du suffixe Combo, configuration du composant natif, absence de clipping des glyphes et fichiers audio vérifiés techniquement. Pas de test d'import ou de gameplay en client pour cette V1 : confort, placement et performances doivent encore être évalués sur ta configuration. La galerie montre les vraies frames et des simulations explicites, pas des captures du client. Les scores sont illustratifs.

## Sources
https://github.com/ppy/osu/blob/master/osu.Game/Skinning/LegacyDefaultComboCounter.cs
https://osu.ppy.sh/wiki/en/Skinning/Interface
https://osu.ppy.sh/users/38408224
Design original AzuRT × Codex. Avatar original du compte indiqué, utilisé à la demande de l'utilisateur. Glyphes Windows rasterisés, aucune fonte Windows distribuée.
Sources modifiables dans sources/SELENE-V1-sources.zip : Python 3.12+ avec Pillow et numpy sous Windows, scripts dans work/, avatar dans work/v1-assets/ et base complète dans work/v1-base/. Exécuter build_selene_v1.py. La base source incluse permet de reconstruire sans rejouer toutes les versions précédentes.
