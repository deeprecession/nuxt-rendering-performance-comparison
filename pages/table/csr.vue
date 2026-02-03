<template>
	<div>
		<h1>Client Side Rendering (CSR)</h1>
		<Table />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-csr",
});
</script>
