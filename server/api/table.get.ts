export default defineEventHandler(async (event) => {
	await new Promise(resolve => setTimeout(resolve, 2000));

	const query = getQuery(event);
	const tableRowsNumberQuery = Math.max(0, Number(query.rowsNum) || 10);

	const columns = [
		"order number",
		"client",
		"product",
		"status",
		"price",
		"date",
		"country",
		"city",
		"manager",
		"priority",
		"category",
		"source",
		"payment",
		"delivery",
		"comment",
	];

	const rows = Array.from({ length: tableRowsNumberQuery }, (_, i) => ([
		`${i + 1}`,
		`client${i + 1}`,
		`product${i + 1}`,
		`status${(i % 3) + 1}`,
		`${(i + 1) * 10}$`,
		`2026-02-${(i % 28) + 1}`,
		`country${(i % 5) + 1}`,
		`city${(i % 10) + 1}`,
		`manager${(i % 4) + 1}`,
		`priority${(i % 3) + 1}`,
		`category${(i % 6) + 1}`,
		`source${(i % 3) + 1}`,
		`payment${(i % 2) + 1}`,
		`delivery${(i % 4) + 1}`,
		`comment ${i + 1}`,
	]));

	return {
		columns,
		rows,
	};
});
