## Live

[Live project](https://c-marc.github.io/countdown-reacteur/)

- Hint: activate devtools

## Important

Please don't use it for promotion. We haven't seen DOM and integration yet. It's not finished and I'll probably make some heavy refactoring. It's just a small side-project I'm happy to share privately:

- for code review and help on some things
- for contribution
- if you're interested in using it, I can work on it a little bit more and make it a real project with package.json, favicon, more complete code doc, and all those things
- if you think that would be good learning material, I can try to draft a markdown explaining a little bit better what's in the project on a coding perspective.

Thanks !

## Motivation

- il est moche et plein de pub le counter gratuit :) et on le voit tous les matins...
- c'est un exemple _simple_ auquel on est confronté quotidiennement et qu'on peut s'approprier
- à la réflexion, il y a plein de points d'entrée, du très simple au très compliqué:
  - callback et interval à initialiser et supprimer
  - juste gestion du temps (sans se fier au param du setInterval)
  - js: évènements, interaction avec le DOM
  - intégration: html CSS (layout, interactions, animations, sélections selon les états, theme...)
  - localStorage
  - des inputs simples mais controlés en html, en js, avec interdépendances
- on peut aussi développer le projet avec React (des composants, des états, useEffect pour interval?), typer, etc...

## Features

- JS sans librairie
- le countdown continue à tourner pour éventuellement montrer depuis combien de temps on a dépassé le 0 (mais avec variation visuelle)
- dark mode avec localStorage (mais sans media-query)
- stupid easter eggs

## Contributing

- add licence to respect assets and Reacteur copyright
- code review: anything JS and/or CSS.

## Roadmap

- add favicons
- fix wrapping hugliness of controls
- implement some surprise when we hit 0:
  - add a rocket with class negative/positive (set by updatecounter): rocket can transition from CSS negative bottom (out of viewport) to negative top (out as well) with some easing: hitting zero will show a rocket move across the screen (emoticon exists and just requires 45°)
  - or randomly alternate with a flying ET saucer (emoticon) that traverse horizontally
- decide for a more coherent identification pattern (I sometimes use id? attributes? attributes as defined or attributes="sthg")
- better CSS
- code better micro-interactions... my first thought was to increase border size but there's some side-effect due to CSS-positioning...
- discuss strategy without React (this is about dark/light versions: 2 images; 2 icons):
  - include everything in HTML and selectively hide (currently dealt with 2 strategies: display or z-index...)
  - or compose (insert/remove) from JS
- refactor some stuffs:
  - put messages in their own files for more friendly-versioning/diffs of files
  - outsource wiring of eventsListeners in their respective modules
