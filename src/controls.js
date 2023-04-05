import { createTimer, deleteTimer } from "./counter.js";

// DOM refs
const inputMin = document.querySelector("input[name='minutes']");
const inputSec = document.querySelector("input[name='seconds']");

/** Start counter */
export const handleStart = () => {
  const min = inputMin.valueAsNumber ?? 0;
  const sec = inputSec.valueAsNumber ?? 0;
  const countDown = min * 60 + sec;
  createTimer(countDown);
};

/** Stop counter */
export const handleStop = () => {
  deleteTimer();
};

/** Control input fields */
export const handleChange = () => {
  // seconds
  if (inputSec.valueAsNumber < 0) {
    inputMin.value = inputMin.valueAsNumber - 1;
    inputSec.value = 60 + inputSec.valueAsNumber;
  }
  if (inputSec.valueAsNumber > 59) {
    inputMin.value = inputMin.valueAsNumber + 1;
    inputSec.value = inputSec.valueAsNumber - 60;
  }
  // minutes
  if (inputMin.valueAsNumber < 0) inputMin.value = 0;
  if (inputMin.valueAsNumber > 59) inputMin.value = 59;
};
