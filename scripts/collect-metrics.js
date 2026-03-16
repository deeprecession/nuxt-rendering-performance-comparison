import fs from "fs";

const metric = process.env.LH_METRIC || "tbt";

const metricMap = {
	tbt: "total-blocking-time",
	lcp: "largest-contentful-paint",
	si: "speed-index",
};

const auditKey = metricMap[metric];

const files = fs.readdirSync(`./reports/${metric}`).filter(f => f.endsWith(".report.json"));

const grouped = {};

console.log(files);

for (const file of files) {
	console.log(`reading ./reports/${metric}/${file}`);
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
	const median = values[Math.floor(values.length / 2)];

	console.log(`Route: ${route}`);
	console.log(`Runs:`, values.map(Math.round).map(v => v + "ms")); // add ms here
	console.log(`Median ${auditKey}: ${Math.round(median)}ms`);
	console.log("");
}

console.log(files);
