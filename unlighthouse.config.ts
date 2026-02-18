import { defineUnlighthouseConfig } from "unlighthouse/config";

const LOCAL_URL = "http://localhost:3000";
const PROD_URL = "https://nuxt-rendering-performance-comparis.vercel.app";

const SITE_URL = process.env.NODE_ENV === "PROD" ? PROD_URL : LOCAL_URL;
const INCLUDE_PATHS = process.env.INCLUDE_PATHS ? process.env.INCLUDE_PATHS.split(",") : [];

export default defineUnlighthouseConfig({
	site: SITE_URL,
	scanner: {
		samples: 10,
		exclude: [
			"/",

			"/table",
			"/table/*",

			"/lcp",

			"/tti",
		],
		...(INCLUDE_PATHS.length > 0 && {
			include: INCLUDE_PATHS,
		}),
	},
	lighthouseOptions: {
		onlyCategories: ["performance"],
	},
});
