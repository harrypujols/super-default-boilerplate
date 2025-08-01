export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.directives.components(APP);
    console.log("Components initialized");
  });
};
