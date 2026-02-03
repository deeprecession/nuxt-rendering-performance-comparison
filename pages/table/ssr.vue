<template>
	<div>
		<h1>Server Side Rendering (SSR)</h1>
		<Table />
	</div>
</template>

<script lang="ts" setup>
import Table from "~/components/app/Table.vue";

definePageMeta({
	name: "table-ssr",
});
</script>
