module.exports = {
	"title": "Eleventy WebC Demo Blog",
	"url": "https://example.com/",
	"language": "en",
	"description": "I am writing about my experiences as a naval navel-gazer.",
	"author": {
		"name": "Your Name Here",
		"email": "youremailaddress@example.com",
		"url": "https://example.com/about-me/"
	},

	/**
	 * Site analytics.
	 * @see _components/site-analytics.webc
	 */
	"gcEnable": true,
	"gcId": "ndf812",
	"host": process.env.CI ? "nfreear.github.io" : "localhost:8080"
};

// console.log('metadata.js:', process.env, this, global);
