const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const metric = process.env.LH_METRIC || "tbt";

const configs = {
	tbt: {
		routes: ["/tbt/csr", "/tbt/ssr"],
		onlyAudits: ["total-blocking-time"],
	},

	lcp: {
		routes: ["/lcp/csr", "/lcp/ssr"],
		onlyAudits: ["largest-contentful-paint"],
	},

	si: {
		routes: ["/si/csr", "/si/ssr"],
		onlyAudits: ["speed-index"],
	},
};

const selected = configs[metric];

if (!selected) {
	console.error("Unknown LH_METRIC:", metric);
	process.exit(1);
}

const urls = selected.routes.map(r => `${baseUrl}${r}`);
const runs = 3;
console.log("---- Lighthouse configuration ----");
console.log("Metric:", metric);
console.log("Base URL:", baseUrl);
console.log("Routes:", selected.routes);
console.log("Full URLs:", urls);
console.log("Audits:", selected.onlyAudits);
console.log("Runs:", runs);
console.log("----------------------------------");

module.exports = {
	ci: {
		collect: {
			url: selected.routes.map(r => `${baseUrl}${r}`),

			numberOfRuns: runs,

			settings: {
				formFactor: "mobile",
				throttlingMethod: "devtools",
				onlyAudits: selected.onlyAudits,
			},

			chromePath: "/usr/bin/brave",
			chromeFlags: "--headless=new --no-sandbox",
		},

		upload: {
			target: "filesystem",
			outputDir: `./reports/${metric}`,
		},
	},
};
