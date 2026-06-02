import fs from "fs";

const metric = process.env.LH_METRIC || "tbt";

const metricMap = {
	tbt: "total-blocking-time",
	lcp: "largest-contentful-paint",
	fcp: "first-contentful-paint",
	si: "speed-index",
};

const auditKey = metricMap[metric];

const files = fs.readdirSync(`./reports/${metric}`).filter(f => f.endsWith(".report.json"));

const grouped = {};

for (const file of files) {
	const json = JSON.parse(fs.readFileSync(`./reports/${metric}/${file}`, "utf8"));

	const route = new URL(json.requestedUrl).pathname;
	const value = json.audits[auditKey].numericValue;

	if (!grouped[route]) {
		grouped[route] = [];
	}

	grouped[route].push(value);
}

for (const route of Object.keys(grouped)) {
	const values = grouped[route].sort((a, b) => a - b);
	const mean = values.reduce((val, prev) => val + prev) / values.length;
	const median = values[Math.floor(values.length / 2)];

	const variance = values.reduce(
		(sum, value) => sum + Math.pow(value - mean, 2),
		0,
	) / values.length;

	const stdDev = Math.sqrt(variance);

	console.log(`Route: ${route}`);
	console.log(`Runs:`, values.map(Math.round).map(v => v + "ms")); // add ms here
	console.log(`Median ${auditKey}: ${Math.round(median)}ms`);
	console.log(`Mean ${auditKey}: ${Math.round(mean)}ms`);
	console.log(`Std Dev ${auditKey}: ${Math.round(stdDev)}ms`);
	console.log("");
}
