import { defineUnlighthouseConfig } from "unlighthouse/config";

export default defineUnlighthouseConfig({
	site: "https://nuxt-rendering-performance-comparis.vercel.app",
	scanner: {
		samples: 10,
		exclude: [
			"/",
			"/table",
			"/table/*",
			"/lcp",
		],
	},
	lighthouseOptions: {
		onlyCategories: ["performance"],
	},
});
