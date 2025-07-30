const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy({ "dev/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "dev/css": "css" });
  eleventyConfig.addPassthroughCopy({ "dev/js": "js" });

  eleventyConfig.addWatchTarget("dev/css");
  eleventyConfig.addWatchTarget("dev/js");
  eleventyConfig.addWatchTarget("dev/assets");

  return {
    dir: {
      input: "dev",
      output: "public",
      includes: "_templates/includes",
      layouts: "_templates/layouts",
      data: "_data",
    },
    templateFormats: ["liquid", "html", "md"],
  };
};
