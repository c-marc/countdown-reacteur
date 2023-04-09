## Live

[Live project](https://c-marc.github.io/countdown-reacteur/)

Hint: activate devtools

## Please

Please keep it private. We haven't seen DOM and integration yet. It's not finished and I'll probably make some breaking changes/refactoring. It's just a small side-project for code review and help on some things.

Thanks !

## Motivation

Got the idea while looking at that counter every morning.

Small projet with interesting small and independant challenges:

- correctly measure time
- DOM with inputs, events, dark mode, localstorage
- CSS

## Features

Vanilla JS project: no depenency (haven't even made a project)

- countdown until 0 and keep counting up afterwards with a rendering variant
- controlled input with mutual dependency
- restart and stop (but no pause ; it felt like an unnecessary complication)
- dark/light mode:
  - icons, banner, color and bg-color
  - persisting choice through localStorage (but no media-query for preferred)
- very light responsive design: text, banner, flex of controls
- micro-interaction for toggling icons

Hidden secondary app:

- random timeouts to simulate unordered sequences
- recursive calls of timeout to simulate random ordered sequences

## Contributing

Any code review is welcome: html, JS and/or CSS.

I'm specifically not sure about or satsfied by:

- strategy for DOM manipulation without React (this is about dark/light versions: 2 images; 2 icons):

  - include everything in HTML and selectively hide (currently dealt that wway with 2 strategies: css display and z-index...)?
  - or compose (insert/remove nodes) with JS?

- html:
  - decide for a more coherent identification pattern for DOM selection (I sometimes use id, data-attributes, and attributes as defined or attributes="sthg")
- CSS:
  - inputs: I forced width because they took different size (it might be due to how they fit in their parent and their order)
  - micro-interactions: on icons hover, my first thought was to increase stroke but it creates some hugly displacement... Maybe positioning must use center as a ref point (with translate-50%)...

## Roadmap

- add favicons
- implement some surprise when we hit 0:
  - add a rocket with class negative/positive (set by updatecounter): rocket can transition from CSS negative bottom (out of viewport) to negative top (out as well) with some easing: hitting zero will show a rocket move across the screen (emoticon exists and just requires 45°)
  - or randomly alternate with a flying ET saucer (emoticon) that traverse horizontally
- add satellite that randomly fly across the screen
