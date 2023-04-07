## Live

[Live project](https://c-marc.github.io/countdown-reacteur/)

- Hint: activate devtools

## Please

Please don't make it public. We haven't seen DOM and integration yet. It's not finished and I'll probably make some breaking changes/refactoring. It's just a small side-project I'm happy to share privately for code review and help on some things.

Thanks !

## Motivation

- il est moche et plein de pub le counter gratuit :) et on le voyait tous les matins...
- exemple _simple_ auquel on est confronté quotidiennement et qu'on peut s'approprier
- il y a plein de points d'entrée qu'on peut developper par morceaux:
  - callback et interval à initialiser et supprimer
  - juste gestion du temps (sans se fier au param du setInterval)
  - js: évènements, interaction avec le DOM
  - intégration: html CSS (layout, interactions, animations, sélections selon les états, theme...)
  - localStorage
  - des inputs simples mais controlés en html, en js, avec interdépendances
- on pourrait évidemment aussi développer le projet avec React (des composants, des états, useEffect pour interval?), typer, etc... mais bon...

## Features

- JS sans librairie
- le countdown continue à tourner pour éventuellement montrer depuis combien de temps on a dépassé le 0 (mais avec variation visuelle)
- les inputs sont un peu contrôlés
- dark mode avec localStorage (mais sans media-query)
- funny micro-app/easter egg pour s'occuper en attendant le 0

## Contributing

- add licence to respect assets and Reacteur copyright
- code review: anything JS and/or CSS.

## Roadmap

- add favicons
- fix wrapping hugliness of controls
- decide for a more coherent identification pattern for DOM selection (I sometimes use id, attributes, attributes as defined or attributes="sthg")
- better CSS: inputs and btn
- code better micro-interactions... my first thought was to increase border size but there's some side-effect due to CSS-positioning...
- implement some surprise when we hit 0:
  - add a rocket with class negative/positive (set by updatecounter): rocket can transition from CSS negative bottom (out of viewport) to negative top (out as well) with some easing: hitting zero will show a rocket move across the screen (emoticon exists and just requires 45°)
  - or randomly alternate with a flying ET saucer (emoticon) that traverse horizontally

And discuss:

- strategy without React (this is about dark/light versions: 2 images; 2 icons):
  - include everything in HTML and selectively hide (currently dealt that wway with 2 strategies: css display and z-index...)
  - or compose (insert/remove) from JS
