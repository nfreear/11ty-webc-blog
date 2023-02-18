/**
 * Configuration for the Eleventy WebC starter project.
 */

const { DateTime } = require('luxon');
const pluginWebc = require('@11ty/eleventy-plugin-webc');
const PKG = require('./package.json');

const layoutAlias = [ 'base', 'home', 'page', 'post' ];

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginWebc, {
    components: '_components/**/*.webc',
  });

  // Filters
	eleventyConfig.addFilter('readableDate', (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy');
	});

  eleventyConfig.addFilter('sourceUrl', () => PKG.repository.url);

  eleventyConfig.addFilter('_enc', (p) => encodeURIComponent(p));

  eleventyConfig.addJavaScriptFunction('copyright', () => {
    const now = new Date();

    return `&copy; ${now.getFullYear()}`; // ` Yours Truly.`;
  });

  // eleventyConfig.addPlugin(syntaxHighlight);
  // eleventyConfig.addPlugin(pluginRss);
  // eleventyConfig.addPassthroughCopy('favicon.ico');
  // eleventyConfig.addPassthroughCopy('assets/fonts');

  // eleventyConfig.addPassthroughCopy('css');

  layoutAlias.forEach(alias => {
    // Aliases relative to `_includes` directory.
    eleventyConfig.addLayoutAlias(alias, `layouts/${alias}.webc`);
  });

  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    // console.debug('> 11ty.CFG:', eleventyConfig);
    console.debug('> 11ty.After:', dir, runMode, outputMode); // Not: results;
  });

  return {
    // Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			'md',
      'webc'
			// "njk",
			// "html",
			// "liquid"
		],

    // Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: 'webc',

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: 'webc',

    // These are all optional:
		/* dir: {
			input: '.',         // default: "."
			includes: "_includes",  // default: "_includes"
			data: "_data",          // default: "_data"
			output: "_site"
		}, */

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
    pathPrefix: '/11ty-webc-blog/'
  };
};
