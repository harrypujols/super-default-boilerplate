export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.methods.components(APP);
    console.log("Components initialized");
  });
};
