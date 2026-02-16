<template>
	<div>
		<h1>Client Side Rendering (CSR)</h1>
		<Table :rows-num="getRowsNum()" />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

const route = useRoute();
function getRowsNum(): number | undefined {
	const rowsNumQueryValue = route.query.rowsNum;

	if (rowsNumQueryValue === null) {
		return undefined;
	}

	const rowsNum = Number(rowsNumQueryValue);
	if (Number.isNaN(rowsNum)) {
		return undefined;
	}

	return rowsNum;
}
</script>
