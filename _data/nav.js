/**
 * Site navigation data.
 *
 * @see _components/site-nav.webc
 */

module.exports = {
	/** Site subdirectory.
	 * @see eleventy.config.js
	 */
	pathPrefix: '/11ty-webc-blog',

	main: [
    "./_pages/index.md",
    "./_pages/about.md"
		// "./_pages/test.1.md",
		// "./_pages/test.2.md"
  ]
};
