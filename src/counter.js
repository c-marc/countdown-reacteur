// Useful ref
const spanCounter = document.querySelector("span[data-counter]");

// Counter ref
let counterID = null;

/** Format duration: from seconds "to mm:ss" */
const formatDuration = (duration) => {
  // Only MIN:SEC, >=2:2 digits
  let minutes = Math.floor(duration / 60).toString();
  let seconds = Math.floor(duration % 60).toString(); //round() creates some glitch when you start

  // At least 2 digits
  if (minutes.length < 2) minutes = "0" + minutes;
  if (seconds.length < 2) seconds = "0" + seconds;

  return `${minutes}:${seconds}`;
};

/** Udate DOM: text and class */
const showCounter = (duration) => {
  spanCounter.classList = duration >= 0 ? "positive" : "negative";
  spanCounter.innerText = formatDuration(Math.abs(duration));
};

/** Update counter with current time */
const updateTimer = (time0) => {
  const duration = Date.now() / 1000 - time0;
  showCounter(duration);
};

/** Start a counter with optional starting lag in seconds: ex -10 */
export const createTimer = (start = 0, interval = 100) => {
  const time0 = Date.now() / 1000 + start;

  // clear if a counter is already running
  if (counterID) clearInterval(counterID);

  counterID = setInterval(() => {
    updateTimer(time0);
  }, interval);
};

export const deleteTimer = () => {
  if (counterID) clearInterval(counterID);
};
