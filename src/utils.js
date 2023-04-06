import { messages } from "./messages.js";

const DELAY_MIN = 30;
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
    const i = Math.floor(Math.random() * messages.length);
    const m = messages[i];
    if (Array.isArray(m)) {
      sequentialChat(m);
    } else {
      console.log(m);
    }
    randomChat();
  }, delay);
};
