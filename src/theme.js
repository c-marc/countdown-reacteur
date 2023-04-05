// Useful refs
const root = document.querySelector(":root");

const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

const imgLight = document.querySelector("#img-light");
const imgDark = document.querySelector("#img-dark");

let dark = true;

/** Set theme depending on dark: boolean */
const setTheme = (dark) => {
  // icons
  sun.dataset.theme = dark ? "inactive" : "active";
  moon.dataset.theme = !dark ? "inactive" : "active";

  // banner
  imgLight.dataset.theme = dark ? "inactive" : "active";
  imgDark.dataset.theme = !dark ? "inactive" : "active";

  // color and background
  if (dark) {
    root.style.setProperty("--color", "var(--clr-light)");
    root.style.setProperty("--bg-color", "var(--clr-reacteur)");
  } else {
    root.style.setProperty("--color", "var(--clr-dark)");
    root.style.setProperty("--bg-color", "var(--clr-light)");
  }

  localStorage.setItem("cdr-theme-dark", dark);
};

export const toggleTheme = () => {
  dark = !dark;
  setTheme(dark);
};

export const initializeTheme = () => {
  dark = JSON.parse(localStorage.getItem("cdr-theme-dark")) ?? dark;
  setTheme(dark);
};
