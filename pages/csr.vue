<template>
	<div class="csr-page">
		<h1>Client Side Rendering (CSR)</h1>
		<Table :rows-num="getRowsNum()" />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-csr",
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

<style lang="css" scoped>
.csr-page {
	display: flex;
	flex-flow: column nowrap;

	max-width: 100%;
	max-height: 100%;
}
</style>
