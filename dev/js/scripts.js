const FRAMEWORK = {};

import breakpoint from "./directives/breakpoint.js";
import resizestop from "./directives/resizestop.js";
import components from "./app/components.js";
import run from "./app/run.js";
import test from "./components/test.js";

((window, APP) => {
  APP.directives = {
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
