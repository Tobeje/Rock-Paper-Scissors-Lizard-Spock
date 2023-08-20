/**
 * Set the theme based on the user's system color preference.
 * @returns {void}
 */
export function setThemeBasedOnSystemPreference() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const stylesheet = document.getElementById("theme-stylesheet");
    stylesheet.href = `./assets/${theme}-mode.css`;
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
    setThemeBasedOnSystemPreference();
});