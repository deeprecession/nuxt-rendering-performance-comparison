export default defineEventHandler(async () => {
	await new Promise(resolve => setTimeout(resolve, 2000));

	return {
		name: "employees",
		columns: ["name", "job"],
		rows: [["Vlad", "Frontend Developer"], ["Oleg", "Gigachad"]],
	};
});
