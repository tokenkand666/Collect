# Collect — site vitrine

Refonte du site [get-collect.io](https://www.get-collect.io/) : même contenu, même palette, design plus moderne et plus épuré.

Site statique — HTML / CSS / JS natif, **aucun build, aucune dépendance**.

## Pages

| Fichier | Page |
| --- | --- |
| `index.html` | Accueil (hero, chiffres, méthode, 6 offres, mission, cas clients) |
| `leads-cgp.html` | Leads pour CGP (différenciation, process, 2 formats, FAQ) |
| `rendez-vous.html` | Prise de RDV (calendrier Appointlet en iframe) |

## Direction artistique

Reprise stricte de la charte existante :

| Rôle | Valeur |
| --- | --- |
| Fond | `#F6F6F1` |
| Vert principal | `#007365` |
| Vert foncé (hover) | `#00594E` |
| Vert clair / teinte | `#6CACA4` |
| Encre | `#0A0A0A` |
| Typo titres & texte | Inter |
| Typo labels & chiffres | Inconsolata |

Le motif `//` du logo est réutilisé en filigrane dans les hero et dans la favicon.

## Développement

Le site s'ouvre directement en double-cliquant sur `index.html`, ou via un serveur local :

```bash
npx --yes serve --listen 4321 .
```

Une config `.claude/launch.json` est fournie pour lancer ce serveur depuis Claude Code.

## Structure

```
index.html
leads-cgp.html
rendez-vous.html
assets/
  css/style.css      # design system complet (tokens, composants, responsive)
  js/main.js         # menu mobile, header au scroll, apparitions
  img/               # logo, photos, icônes
  img/clients/       # logos clients
```

## Déploiement

N'importe quel hébergeur statique convient (GitHub Pages, Netlify, Vercel, Cloudflare Pages) : il n'y a rien à compiler, on sert le dossier tel quel.

## À noter

- Les images proviennent du site actuel (Webflow) et sont désormais hébergées dans `assets/`.
- Les liens « Prendre RDV » pointent vers `rendez-vous.html`, qui embarque le calendrier Appointlet existant.
- Le lien « Articles » du footer pointe encore vers le blog Webflow en ligne.
