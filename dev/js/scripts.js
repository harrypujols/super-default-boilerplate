const FRAMEWORK = {};

import breakpoint from "./functions/breakpoint.js";
import resizestop from "./functions/resizestop.js";
import components from "./app/components.js";
import run from "./app/run.js";
import test from "./components/test.js";

((window, APP) => {
  APP.methods = {
    components,
    breakpoint,
    resizestop,
  };

  APP.components = {
    test,
  };

  APP.start = {
    run,
  };

  APP.start.run(APP);
})(window, FRAMEWORK, undefined);
