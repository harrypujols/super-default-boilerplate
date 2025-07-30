const FRAMEWORK = {};

import components from "./app/components.js";
import breakpoint from "./app/breakpoint.js";
import resizestop from "./app/resizestop.js";
import test from "./components/test.js";
import run from "./app/run.js";

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
