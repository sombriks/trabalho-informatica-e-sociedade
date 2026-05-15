/**
 * @param {import("@11ty/eleventy").UserConfig} eleventyConfig
 */
export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "node_modules/@owickstrom/the-monospace-web/src": "/the-monospace-web" });
  eleventyConfig.setInputDirectory('./src/pages')
  eleventyConfig.setLayoutsDirectory("../layouts");
  eleventyConfig.setOutputDirectory('./dist')
}