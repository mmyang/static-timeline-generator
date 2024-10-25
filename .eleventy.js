const pluginSass = require('eleventy-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const EleventyPluginEjs = require("@11ty/eleventy-plugin-ejs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyPluginEjs);
  eleventyConfig.addPlugin(pluginSass, {
    postcss: postcss([autoprefixer]),
    input: './src/css/*.sass',
    output: './_site/css',
  });
  eleventyConfig.addPassthroughCopy('src/css/*.css');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/img');
  return {
    dir: {
      input: 'src',
    },
  };
};
