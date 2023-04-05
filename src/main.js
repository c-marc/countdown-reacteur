import { handleChange, handleStart, handleStop } from "./controls.js";
import { initializeTheme, toggleTheme } from "./theme.js";
import { randomChat } from "./utils.js";

// DOM refs
const toggleBtn = document.getElementById("toggle-theme");

const inputMin = document.querySelector("input[name='minutes']");
const inputSec = document.querySelector("input[name='seconds']");

const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");

// Wire up controls
toggleBtn.addEventListener("click", toggleTheme);

inputMin.addEventListener("change", handleChange);
inputSec.addEventListener("change", handleChange);

btnStart.addEventListener("click", handleStart);
btnStop.addEventListener("click", handleStop);

// If existing theme in localstorage
initializeTheme();

// Start chatbot
randomChat();
