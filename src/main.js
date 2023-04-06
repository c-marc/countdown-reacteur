import { connectControls } from "./controls.js";
import { connectThemeToggler, initializeTheme } from "./theme.js";
import { randomChat } from "./utils.js";

// Add eventListeners
connectThemeToggler();
connectControls();

// If existing theme in localstorage
initializeTheme();

// Start chatbot
randomChat();
