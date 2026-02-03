export default defineEventHandler(async (event) => {
	await new Promise(resolve => setTimeout(resolve, 2000));

	const query = getQuery(event);
	const tableRowsNumberQuery = Math.max(0, Number(query.rowsNum) || 10);

	const rows = Array.from({ length: tableRowsNumberQuery }, (_, i) => [`${i + 1}`, `client${i + 1}`]);

	return {
		columns: ["order number", "client"],
		rows: rows,
	};
});
