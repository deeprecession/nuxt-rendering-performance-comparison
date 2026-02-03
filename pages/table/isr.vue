<template>
	<div>
		<h1>Incremental Static Regeneration (ISR)</h1>
		<Table />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-isg",
});
</script>
