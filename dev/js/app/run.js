export default (APP) => {
  document.addEventListener("DOMContentLoaded", () => {
    APP.directives.retrieve("/js/json/data.json").then((result) => {
      APP.data = result;
      console.table(APP.data);
      APP.directives.components(APP);
      console.log("Components initialized");
    });
  });
};
