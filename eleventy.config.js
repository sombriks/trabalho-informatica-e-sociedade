/**
 * eleventy.config.js
 * 
 * @param {import("@11ty/eleventy").UserConfig} config
 */
export default async function (config) {
  config.addPassthroughCopy({ "node_modules/@owickstrom/the-monospace-web/src": "/the-monospace-web" });
  config.setInputDirectory('./src/pages')
  config.setLayoutsDirectory("../layouts");
  config.setOutputDirectory('./dist')
}