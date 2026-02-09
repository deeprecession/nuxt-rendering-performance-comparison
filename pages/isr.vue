<template>
	<div>
		<h1>Incremental Static Regeneration (ISR)</h1>
		<Table :rows-num="getRowsNum()" />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-isr",
});

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
