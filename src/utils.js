// launching sequence context
const message = [
  "🐱: Chalut !",
  "🐮: Ca vache ?",
  "👷 Lead engineer: I just found piece #712 in my pocket. Hopefully it's not critical 🤞",
  "👩‍🚀: What's that red button, again?",
  [
    "👾: Almost got hit by a UFO on my way to work!",
    "👽: Whaaat?! What did it look like?",
    "👾: Weird and hugly... Like a human car...",
    "👽: Don't be crazy... Humans are stupid... But not that stupid they'd throw terrestrial vehicles out in space...",
  ],
  [
    "👩‍💻 Lead developer: Fun fact: Tonight, I just pushed untested breaking changes in prod!",
    "👩‍💻 Lead developer: PS: Don't worry, it was JavaScript 🤪",
    "👩‍💻 Lead developer: PPS: Just joking: enjoy the launch",
    "👩‍💻 Lead developer: PPPS: Is navigation working as usual?",
  ],
];

const DELAY_MIN = 1;
const DELAY_MAX = 60;

const DELAY_MIN_SEQ = 1;
const DELAY_MAX_SEQ = 5;

const sequentialChat = (array, i = 0) => {
  console.log(array[i]);
  const delay =
    (Math.random() * (DELAY_MAX_SEQ - DELAY_MIN_SEQ) + DELAY_MIN_SEQ) * 1000;
  setTimeout(() => {
    if (i < array.length - 1) sequentialChat(array, ++i);
  }, delay);
};
// sequentialChat([1, 2, 3, 4]);

export const randomChat = () => {
  const delay = (Math.random() * (DELAY_MAX - DELAY_MIN) + DELAY_MIN) * 1000;
  setTimeout(() => {
    const i = Math.floor(Math.random() * message.length);
    const m = message[i];
    if (Array.isArray(m)) {
      sequentialChat(m);
    } else {
      console.log(m);
    }
    randomChat();
  }, delay);
};
